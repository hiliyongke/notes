# DOM 相关

## childNodes

`childNodes` 方法可获取元素中内部的元素
返回的并不是一个数组

```html
<ul class="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
const ul = document.querySelector('ul')
console.log(ul.childNodes) // NodeList(7) [text, li, text, li, text, li, text]
```

> childNodes 得到的结果并不是一个数组，但是它也有 `length` 属性，也可以使用数组的中括号方式通过索引获取里面的元素，使用 `Array.from()` 方法可以转换为真正的数组

## parentNode

`parentNode` 方法可获取父级元素

> 仅会获得一个最近的亲父级标签元素

```html
<ul>
  <li>哈哈哈</li>
</ul>

<script>
  const li = document.querySelector('li')
  console.log(li.parentNode)
  // <ul>...</ul>
</script>
```

## nodeName

`nodeName` 方法可获取元素的标签名

```html
<ul class="list"></ul>

<script>
  const ul = document.querySelector('ul')
  console.log(ul.nodeName) // UL
</script>
```

## nodeValue

`nodeValue` 方法可获取元素的节点值

```html
<button>按钮点击</button>
<script>
  console.log(document.querySelector('button').childNodes[0].nodeValue) // 按钮点击
</script>
```

## firstChild

`firstChild` 方法可获取子节点的第一个节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const c = document.querySelector('ul').childNodes[0]
  const f = document.querySelector('ul').firstChild
  console.log(c === f) // true
</script>
```

> firstChild 就是简化了 childNodes[0] 的写法

## lastChild

`lastChild` 方法可获取子节点的最后一个节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[ul.childNodes.length - 1]
  const l = ul.lastChild
  console.log(c === l)
</script>
```

> lastChild 就是简化了 ul.childNodes[ul.childNodes.length - 1] 的写法

## previousSibling

`previousSibling` 方法可获取子节点之前的一个相邻兄弟节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[ul.childNodes.length - 2] // 这里 -2 之后获取的是倒数第二个节点
  const l = ul.lastChild.previousSibling // 获取最后一个的前一个节点
  console.log(c === l) // true
</script>
```

## nextSibling

`nextSibling` 方法可获取子节点下一个的相邻兄弟节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[1] // 获取第二个节点
  const l = ul.firstChild.nextSibling // 获取第二个的下一个节点
  console.log(c === l)
</script>
```

如果获取最后一个节点的下一个节点则返回 null
获取第一个节点的上一个节点返回的也是 null

```js
const ul = document.querySelector('ul')
console.log(ul.lastChild.nextSibling)
console.log(ul.firstChild.previousSibling)
```

下面是一个综合上述方法的关系代码，想把 `class="red"` 的标签背景色改为红色

```html
<ul>
  <li>1</li>
  <li>
    <ol>
      <li>1</li>
      <li>2</li>
      <li class="red">3红色</li>
      <li>4</li>
    </ol>
  </li>
  <li>3</li>
</ul>

<script>
  document.querySelector(
    'ul'
  ).lastChild.previousSibling.previousSibling.previousSibling.lastChild.previousSibling.lastChild.previousSibling.previousSibling.previousSibling.style.backgroundColor =
    'red'
</script>
```

## hasChildNodes()

`hasChildNodes()` 方法可检测一个节点是否存在子节点，返回 `true` 说明存在一个或多个子结点，`false` 则没有子节点

```html
<ul>
  <li></li>
  <li>哈哈</li>
</ul>
<script>
  console.log(document.querySelector('ul').hasChildNodes()) // true
  console.log(document.querySelector('.a').hasChildNodes()) // false
  console.log(document.querySelector('.b').hasChildNodes()) // true
</script>
```

> 有一个空格也会返回 true

## appendChild()

`appendChild()` 可以在 `childNodes` 列表结尾插入节点

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  document.querySelector('ul').appendChild(LI)
</script>
```

## insertBefore()

`insertBefore()` 可以在 `childNodes` 列表指定位置插入节点

它可接收两个参数，第一个是插入的节点，第二个是插入的位置，如果第二个参数不传，则和 `appendChild()` 效果一致

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  ul.insertBefore(LI, ul.childNodes[2]) // 插入第二个位置
</script>
```

## replaceChild()

因为 `appendChild()` 和 `insertBefore()` 都是插入节点不会替换节点
所以 `replaceChild()` 方法可以替换指定位置的节点
接收两个参数，第一个是插入的节点，第二个是替换的位置

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  ul.replaceChild(LI, ul.childNodes[1]) // 替换第一个节点
</script>
```

## removeChild()

`removeChild()` 方法移除一个节点元素

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.removeChild(ul.lastChild.previousSibling)
</script>
```

## cloneNode()

`removeChild()` 方法克隆一个节点元素，接收一个布尔值，表示是否深度克隆子元素

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.appendChild(ul.cloneNode(true)) // 深度克隆

  console.log(ul.cloneNode(true).childNodes.length) // 8
  console.log(ul.cloneNode(false).childNodes.length) // 0
</script>
```

## document 类型

## document.documentElement

获取 `html`

```js
console.log(document.documentElement)
```

## document.doctype

获取 `<!DOCTYPE html>` 的引用

```js
console.log(document.doctype) // <!DOCTYPE html>
```

## document.URL

获取页面完整的 `URL`

```js
console.log(document.URL)
```

## document.domain

获取域名

```js
console.log(document.domain)
```

## document.referrer

获取来源

```js
console.log(document.referrer)
```

## document.getElementsByTagName()

获取元素集合，下面获取所有的 `div`

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<script>
  console.log(document.getElementsByTagName('div')) // HTMLCollection(5) [div, div, div, div, div]
</script>
```

> 也可以像数组一样操作它，但它并不是数组

## document.getElementsByName()

获取指定 `name` 的集合

```html
<div name="title"></div>
<div name="title"></div>
<div name="title"></div>
<script>
  console.log(document.getElementsByName('title')) // NodeList(3) [div, div, div]
</script>
```

## document.createElement()

`document.createElement()` 方法可以创建一个元素，接受一个参数为标签名

```js
document.createElement('div') // 创建一个 div
```

## document.createTextNode()

`document.createTextNode()` 方法可以创建一个文本节点

```html
<div id="app"></div>
<script>
  const text = document.createTextNode('这是一段文字')
  document.getElementById('app').appendChild(text)
</script>
```

## document.createComment()

`document.createComment()` 方法可以创建一个注释
但是在开发中基本不会使用

```js
document.body.appendChild(document.createComment('这是一段注释'))
```

## document.getElementsByClassName()

`document.getElementsByClassName()` 方法接收一个参数，即包含一个或者多个类名的字符串

```html
<div class="red box">1</div>
<div class="box red">2</div>
<script>
  console.log(document.getElementsByClassName('red box'))
</script>
```

> 因为两元素都包含 red 和 box 属性，所以获取两个，类名无视顺序

## document.readyState()

判断文档是否加载完成，可以有两个可能值

- loading 表示文档正在加载
- complete 文档加载完成

例如下面：

```html
<button onclick="ok()">点击</button>
<script>
  console.log(document.readyState) // loading

  function ok() {
    console.log(document.readyState) // complete
  }
</script>
```

## document.compatMode

检测浏览器使用什么渲染模式，可以有两个可能值

- CSS1Compat 标准模式
- backCompat 混杂模式

## document.characterSet

获取文档使用的字符集

```js
console.log(document.characterSet) // UTF-8
```

## getAttribute()

`getAttribute()` 方法可获取一个元素的属性值

```html
<div id="app"></div>
<script>
  console.log(document.getElementById('app').getAttribute('id')) // app
</script>
```

> 该方法仅可有一个参数

## setAttribute()

`setAttribute()` 方法可设置一个元素的属性值，接收两个参数，第一个是要设置的属性，第二个是设置的属性值

```html
<div id="app"></div>
<script>
  document.getElementById('app').setAttribute('class', 'box')
</script>
```

通过简写的方式也可以进行修改

```html
<div id="app"></div>
<script>
  document.getElementById('app').id = 'box'
</script>
```

> 注意：简写方式仅仅可以修改属性，并不能添加不存在的属性

## removeAttribute()

`setAttribute()` 方法可删除一个元素的属性值，不是仅仅清楚属性值，而是将属性和属性值全部清除

```html
<div id="app" class="box"></div>
<script>
  document.getElementById('app').removeAttribute('class')
</script>
```

## attributes

`attributes` 包含一个 `NamedNodeMap` 对象，包含元素的每一个属性

```html
<div id="app" class="box"></div>
<script>
  console.log(document.getElementById('app').attributes)
</script>
```

**返回结果**

```js
NamedNodeMap {
  0: id
  1: class
  class: class
  id: id
  length: 2
  [[Prototype]]: NamedNodeMap
}
```

通过 `attributes` 就可以像下面方式修改属性了

```html
<div id="app" class="box"></div>
<script>
  console.log(document.getElementById('app').attributes.id.nodeValue) // 获取 id

  document.getElementById('app').attributes.class.nodeValue = 'newClass' // 修改 class
</script>
```

> 每个节点中的 nodeValue 记录着对应的属性值

## attributes.removeNamedItem()

`attributes.removeNamedItem()` 方法和 `removeAttribute()` 类似，都是可以删除一个属性值，只不过 `attributes.removeNamedItem()` 是删除属性的 `NamedNodeMap` 对象中的属性

```html
<div id="app" class="box"></div>
<script>
  document.getElementById('app').attributes.removeNamedItem('class')
</script>
```

> `attributes.removeNamedItem()` 方法和 `removeAttribute()` 实际的效果是一样的，就是换了不同的方式表现而已，大多数都会使用 `removeAttribute()`、`setAttribute()` 和 `getAttribute()`

## namedItem()

`namedItem()` 方法返回具有指定 `id` 或 `name` 的元素，只返回一个元素，`id` 优先级大于 `name`

```html
<div name="title"></div>
<div id="title"></div>

<script>
  console.log(document.getElementsByTagName('div').namedItem('title')) // <div id="title"></div>
</script>
```

> namedItem() 方法仅会返回一项

## childElementCount

`childElementCount` 方法可获取子节点的数量

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').childElementCount) // 2
</script>
```

## firstElementChild

`firstElementChild` 方法可获取一个元素第一个子元素，类似 [firstChild](https://tianyuhao.cn/blog/javascript/js-methods.html#firstchild)

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').firstElementChild) // <p>1</p>
</script>
```

## lastElementChild

`lastElementChild` 方法可获取一个元素第一个子元素，类似 [lastChild](https://tianyuhao.cn/blog/javascript/js-methods.html#lastchild)

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').lastElementChild) // <p>2</p>
</script>
```

## previousElementSibling

`previousElementSibling` 方法指向前一个同胞兄弟节点

```html
<p class="p1">1</p>
<p class="p2">2</p>
<script>
  console.log(document.querySelector('.p2').previousElementSibling)
  // <p class="p1">1</p>
</script>
```

## nextElementSibling

`nextElementSibling` 方法指向后一个同胞兄弟节点

```html
<p class="p1">1</p>
<p class="p2">2</p>
<script>
  console.log(document.querySelector('.p1').nextElementSibling)
  // <p class="p2">2</p>
</script>
```

## classList

操作元素的类名，可以通过 `className` 来删除、替换。但是 `className` 是一个字符串，所以每次操作都需要重新设置才能生效，即使改变部分字符串也是一样，比如下面 `div` 有三个类名。想要删除一个，就得先把 `className` 拆开，删除不想要的那个，再设置回去，比如：

```html
<div id="app" class="box admin user"></div>
<script>
  const app = document.getElementById('app')
  const classNames = app.className.split(/\s+/)
  classNames.splice(1, 1)
  app.className = classNames.join(' ')

  // <div id="app" class="box user"></div>
</script>
```

那么在 **HTML5** 中新增了更方便的方式

```html
<div id="app" class="box"></div>
```

**add** 向类名列表中添加指定类名

```js
document.getElementById('app').classList.add('admin')
```

**contains** 检测一个类名是否存在 返回布尔值

```js
console.log(document.getElementById('app').classList.contains('box')) // true
```

**remove** 删除指定类名

```js
document.getElementById('app').classList.remove('box')
```

**toggle** 如果类名列表中存在 value 则删除，否则添加

```js
document.getElementById('app').classList.toggle('box2')
```

## outerHTML 和 innerHTML

`outerHTML` 和 `innerHTML` 方法都可以获取到一个元素的及所有后代元素的 HTML 字符串

```html
<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
<script>
  console.log(document.getElementById('app').outerHTML)
  console.log(document.getElementById('app').innerHTML)
</script>
```

**打印结果**

```
<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>

<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
```

## insertAdjacentHTML() 和 insertAdjacentText()

`insertAdjacentHTML()` 和 `insertAdjacentText()` 方法都是用作插入标记，`insertAdjacentHTML()` 为插入 HTML 标记，`insertAdjacentText()` 为插入文本标记，它们都会接收两个参数，第一个参数必须是下列值中的一个

- beforebegin：元素自身的前面
- afterbegin：插入元素内部的第一个子节点之前
- beforeend：插入元素内部的最后一个子节点之后
- afterend：元素自身的后面

第二个参数为插入的标记内容

```html
<div id="app">Hello</div>
<script>
  const app = document.getElementById('app')
  app.insertAdjacentHTML('beforebegin', '<h1>你好</h1>')
  app.insertAdjacentText('afterbegin', '哈哈哈哈')
  app.insertAdjacentText('beforeend', '后面的')
</script>
```

## textContent

获取一个元素的文本内容，也可以修改文本内容

```html
<div id="app">hello</div>
<script>
  const app = document.querySelector('#app')
  console.log(app.textContent) // hello
  app.textContent = 'hello world'
  console.log(app.textContent) // hello world
</script>
```
