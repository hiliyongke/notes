# proxy 代理

## 创建空代理

使用 `Proxy()` 构造函数可以创建一个空代理，它需要接收两个参数：

- 需要代理的目标对象
- 处理程序对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {})

// id 会得到同一个值
console.log(proxy.id) // 123
console.log(foo.id) // 123

// 重新赋值也会共同反映到两个对象上
foo.id = 666
console.log(proxy.id) // 666
console.log(foo.id) // 666

proxy.id = 987
console.log(proxy.id) // 987
console.log(foo.id) // 987
```

## 定义捕获器

当每次在代理对象上进行操作时，会首先触发捕获器函数，从而拦截或修改相应的行为。

下面定义了一个 `get` 捕获器，当调用 `get()` 的时候触发

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get() {
    return 'hello'
  }
})

console.log(foo.id) // 123
console.log(proxy.id) // hello
```

> 注意：捕获器获取函数的函数名必须是 get，其他名称不会触发捕获器效果

## 捕获器参数和反射 API

定义的捕获器函数可以接收三个参数：

- 代理的目标对象
- 要查询的属性
- 代理对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(receiver) // Proxy {id: 123}
  }
})

console.log(proxy.id)
```

多数情况下，不需要手动重建原始行为，而是可以通过调用全局 [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 对象上的同名方法来轻松重建

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get() {
    return Reflect.get(...arguments)
  }
})

console.log(proxy.id) // 123
console.log(foo.id) // 123
```

甚至可以写的更简洁一些

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get: Reflect.get
})

console.log(proxy.id) // 123
console.log(foo.id) // 123
```

如果想要创建一个可以捕获所有方法，然后每个方法都转发给对应反射 API 的空代理，甚至不需要定义处理程序对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, Reflect)

console.log(proxy.id) // 123
console.log(foo.id) // 123
```

下面例子中，将对某些指定的属性进行访问的时候，可以加如一些修饰

```js
const foo = {
  name: '田同学',
  age: 18
}
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    if (property === 'age') {
      return Reflect.get(...arguments) + '岁'
    }
    return Reflect.get(...arguments)
  }
})

console.log(proxy.name) // 田同学
console.log(proxy.age) // 18岁
```

## 可撤销代理

使用 `new Proxy()` 创建的代理，会在代理对象的生命周期内一直存在，如果想要撤销，可以使用 `Proxy.revocable()` 方法创建一个可撤销的代理，撤销操作上不可逆的，使用其内部的 `revoke` 方法可以撤销代理，撤销之后的代理尝试再次调用代理将会抛出 TypeError 异常

```js
const foo = {
  name: '田同学'
}
const revocable = Proxy.revocable(foo, {
  get() {
    return 'hello'
  }
})

console.log(revocable.proxy.name) // hello
proxy.revoke()
console.log(revocable.proxy.name) // 1.html:23 Uncaught ReferenceError: proxy is not defined
```

## 代理另一个代理

代理可以拦截反射 API 的操作，而这意味着完全可以创建一个代理，通过它去代理另一个代理

```js
const foo = {
  name: '田同学'
}

const proxyA = new Proxy(foo, {
  get() {
    console.log('proxyA')
    return Reflect.get(...arguments)
  }
})

const proxyB = new Proxy(proxyA, {
  get() {
    console.log('proxyB')
    return Reflect.get(...arguments)
  }
})

console.log(proxyB.name)
// proxyB
// proxyA
// 田同学
```

接下来将介绍一些代理捕获器与反射的一些方法

## get()

`get()` 捕获器会在捕获属性之间被调用，对应的反射 API 为 `Reflect.get()`。它可以接收三个参数：

- 代理的目标对象
- 要查询的属性
- 代理对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(receiver) // Proxy {id: 123}
  }
})

console.log(proxy.id)
```

## set()

`set()` 捕获器会在设置属性的操作中被调用，对应的反射 API 为 `Reflect.set()`。它可以接收四个参数：

- 代理的目标对象
- 要查询的属性
- 需要设置的新属性
- 代理对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  set(targe, property, value, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(value) // 222
    console.log(receiver) // Proxy {id: 123}
  }
})

proxy.id = 222
```

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  set(targe, property, value, receiver) {
    targe[property] = value + 10
  }
})

proxy.id = 222

console.log(foo.id) // 232
console.log(proxy.id) // 232
```

## has()

`has()` 捕获器会在 `in` 操作符中调用，对应的反射 API 为 `Reflect.has()`。它可以接收两个参数：

- 目标对象
- 引用的目标对象上的字符串属性

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  has(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // id
    return Reflect.has(...arguments)
  }
})

console.log('id' in proxy) // true
console.log('name' in proxy) // false
```

## defineProperty()

`defineProperty()` 捕获器会在 [Object.defineProperty()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-defineproperty) 中调用，对应的反射 API 为 `Reflect.defineProperty()`。它可以接收三个参数：

- 目标对象
- 引用目标对象上的字符串属性
- 包含可选的描述对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  defineProperty(target, property, descriptor) {
    console.log(target) // {id: 123}
    console.log(property) // name
    console.log(descriptor) // {value: '田同学', enumerable: false}
    return Reflect.defineProperty(...arguments)
  }
})

Object.defineProperty(proxy, 'name', {
  value: '田同学',
  enumerable: false // 禁止循环
})

for (const key in proxy) {
  console.log(key) // id
}
```

## getOwnPropertyDescriptor()

`getOwnPropertyDescriptor()` 捕获器会在 [Object.getOwnPropertyDescriptor()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-getownpropertydescriptorhttps://tianyuhao.cn/blog/javascript/methods-object.html#object-getownpropertydescriptor) 中调用，对应的反射 API 为 `Reflect.getOwnPropertyDescriptor()`。它可以接收两个参数：

- 目标对象
- 引用目标对象上的字符串属性

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  getOwnPropertyDescriptor(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // name
    return Reflect.getOwnPropertyDescriptor(...arguments)
  }
})

const res = Object.getOwnPropertyDescriptor(proxy, 'id')
console.log(res) // {value: 123, writable: true, enumerable: true, configurable: true}
```

## deleteProperty()

`deleteProperty()` 捕获器会在 `delete` 操作符中调用，对应的反射 API 为 `Reflect.deleteProperty()`。它可以接收两个参数：

- 目标对象
- 引用目标对象上的字符串属性

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  deleteProperty(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // name
    return Reflect.deleteProperty(...arguments)
  }
})

delete proxy.id

console.log(foo) // {}
console.log(proxy) // Proxy {}
```

## ownKeys()

`ownKeys()` 捕获器会在 [Object.keys()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-keys) 操作符中调用，对应的反射 API 为 `Reflect.ownKeys()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  ownKeys(target) {
    console.log(target) // {id: 123}
    return Reflect.ownKeys(...arguments)
  }
})

console.log(Object.keys(proxy)) // ['id']
```

## getPrototypeOf()

`getPrototypeOf()` 捕获器会在 [Object.getPrototypeOf()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-getprototypeof) 操作符中调用，对应的反射 API 为 `Reflect.getPrototypeOf()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  getPrototypeOf(target) {
    console.log(target) // {id: 123}
    return Reflect.getPrototypeOf(...arguments)
  }
})

console.log(Object.getPrototypeOf(proxy)) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

## setPrototypeOf()

`setPrototypeOf()` 捕获器会在 [Object.setPrototypeOf()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-setprototypeof) 操作符中调用，对应的反射 API 为 `Reflect.setPrototypeOf()`。它可以接收两个参数：

- 目标对象
- 目标对象的代替原型

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  setPrototypeOf(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // {age: 12}
    return Reflect.setPrototypeOf(...arguments)
  }
})

console.log(Object.setPrototypeOf(proxy, { age: 12 })) // Proxy {id: 123}
```

## isExtensible()

`isExtensible()` 捕获器会在 [Object.isExtensible()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-isExtensible) 操作符中调用，对应的反射 API 为 `Reflect.isExtensible()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  isExtensible(target) {
    console.log(target) // {id: 123}
    return Reflect.isExtensible(...arguments)
  }
})

console.log(Object.isExtensible(proxy)) // true
```

## preventExtensions()

`preventExtensions()` 捕获器会在 [Object.preventExtensions()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-preventExtensions) 操作符中调用，对应的反射 API 为 `Reflect.preventExtensions()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  preventExtensions(target) {
    console.log(target) // {id: 123}
    return Reflect.preventExtensions(...arguments)
  }
})

console.log(Object.preventExtensions(proxy)) // Proxy {id: 123}
```

## apply

`apply()` 捕获器会在调用函数中被调用，对应的反射 API 为 `Reflect.apply()`。它可以接三个参数：

- 目标对象
- 调用函数时候的 this 参数
- 调用参数时的参数列表

```js
const foo = () => {}
const proxy = new Proxy(foo, {
  apply(target, thisArg, ...argumentsList) {
    console.log(target) // () => { }
    console.log(thisArg) // undefined
    console.log(argumentsList) // [Array(0)]
    return Reflect.apply(...arguments)
  }
})

proxy()
```

## construct

`construct()` 捕获器会在 `new` 操作符中被调用，对应的反射 API 为 `Reflect.construct()`。它可以接三个参数：

- 目标构造函数
- 传递给目标构造函数的参数列表
- 最初调用的构造函数

```js
const foo = function () {}
const proxy = new Proxy(foo, {
  construct(target, argumentsList, newTarget) {
    console.log(target) // ƒ () { }
    console.log(argumentsList) // []
    console.log(newTarget) // Proxy {length: 0, name: 'foo', arguments: null, caller: null, prototype: {…}}
    return Reflect.construct(...arguments)
  }
})

new proxy()
```
