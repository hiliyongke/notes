# 纯原生开发 Web Components 超详细分享

## 👋 Hello

大家好，我是[田同学](https://github.com/hiliyongke)，大家可以加我微信 `VirgoTyh` 一起共同学习。

## 🍒 前言

我是 vue3 开源组件库 [fighting-design](https://github.com/FightingDesign/fighting-design) 的维护者。

最近我正在研究 Web Components 的组件库，由于目前社区还没成熟，各种例子也少，网上的一些其它文章都太过于简单，优化太差，仅仅是实现基础。很多的 web components 库也是使用了第三方的支持。但是为了搞清楚其中的原理，还是直接来手写一波原生比较好，所以近期踩尽了坑，翻遍了 MDN，也撕了一些第三方库的源码，用了两天时间，从无到有总结了以下经验，前来分享一波~

## 💡 什么是 Web Components？

`Web Components` 其实就是一套组件库。

我们平时在使用 vue 或者 react 的时候，对于不同的框架，就需要使用框架所支持的组件库来进行开发，很多团队都会分别开发 vue 和 react 两套组件库。但是这样维护成本的很高的，更何况框架还不仅仅是这两个。

Web components 就是为了解决这一痛点，**建立在 Web 标准之上的下一代的 UI 组件库**。也就是说，开发了这一套组件，不管在任何的框架中都可以使用。对于前端来说，任何的框架，最终都会被打包成 html、css、js，web components 就是基于原生 js 来实现的一套可适配全框架的组件库。

更多详情可参考 MDN 的 [MDN Web_Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)。

## 🚀 第一步

开发的第一步，要先了解一下 web components 是如何实现的，它基于以下几个部分：

- **Custom elements（自定义元素）**：原生 js 提供了自定义元素的方法
- **Shadow DOM（影子节点）**：也就是自己封装的组件，它是一个特殊的 dom 节点，和外部 dom 的完全隔离的
- **HTML templates（HTML 模板）**：也就是组件的 dom 结构
- **adoptedStyleSheets（采用的样式表）**：针对 Shadow DOM 的 css 样式处理

下面分别来介绍一些各个部分的细节，本文将以一个按钮组件来进行演示

## ⚓ 基础实现

1. 首先新建一个 `index.html` 和 `index.js`，让在 html 中引入 js 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

2. 接下来开始 js 部分。首选需要新建一个类，类名就是你要渲染出来的标签名，它需要继承至浏览器原生的 `HTMLElement`，然后在 `constructor` 中需要创建一个 [attachShadow](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow)，并传递一个对象 `{ mode: 'open' }`，就会得到一个`影子节点`

```js
class FButton extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
  }
}
```

3. 有了影子节点，就需要将要实现的组件、样式、插槽添加进去了，这里直接使用 `innerHTML` 简单粗暴的实现：

> 注意，在 dom 中要预留出提供 button 内容的插槽，原生 `slot` 元素可参考 [slot](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot)

```js
class FButton extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })

    shadowRoot.innerHTML = `
      <style>
        .f-button {
          display: inline-flex;
          width: 100px;
          height: 35px;
          background: rgb(45, 90, 241);
          color: rgb(255, 255, 255);
          border: none;
          outline: none;
          cursor: pointer;
          justify-content: center;
          align-items: center;
        }
      </style>
      <button class="f-button">
        <slot></slot>
      </button>
    `
  }
}
```

4. 最后使用 [CustomElementRegistry.define()](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define) 方法定义了一个自定义元素，即可实现一个简单的 web components

> `customElements.define` 方法接收两个参数：标签名（必须是以小写字母，必须写一个短横线连接）和自定义元素构造器

```js
customElements.define('f-button', FButton)
```

5. 完整代码

> js 部分：

```js
class FButton extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })

    shadowRoot.innerHTML = `
      <style>
        .f-button {
          display: inline-flex;
          width: 100px;
          height: 35px;
          background: rgb(45, 90, 241);
          color: rgb(255, 255, 255);
          border: none;
          outline: none;
          cursor: pointer;
          justify-content: center;
          align-items: center;
        }
      </style>
      <button class="f-button">
        <slot></slot>
      </button>
    `
  }
}

customElements.define('f-button', FButton)
```

> html 部分：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <f-button>主要按钮</f-button>

    <script src="./index.js"></script>
  </body>
</html>
```

## 🚧 目前存在的问题

上面代码已经实现了基础的 web components，但是存在很多的问题，比如：

- 如果开发了其它的组件，每次都要新建一个影子节点，每次都要设置模板和样式，这部分可封装起来
- 外部修改不了 css 的样式，就算使用 `!important` 也覆盖不了影子节点 中的样式
- `innerHTML` 的性能是很差的，所以使用 `innerHTML` 并不是一个好主意
- dom 结构也不能使用纯字符串的方式

## 🌈 公共类

对于公共类的抽离，我想到的是使用一种叫 `模板方法模式` 的 js 设计模式，这个设计模式我是在 [JavaScript 设计模与开发实践](https://github.com/hiliyongke/awesome-books) 这本书中学到的，简单的案例可参考我的看书笔记 [模板方法模式](https://blog.tianyuhao.cn/article/design-mode/design-10.html)。

> 对于设计模式，大家可自行学习，这个模式也不是很难，但是效果确不错，使用重写的方式，可实现父类的统一性。如后续有些特殊组件不是所有函数都调用的话，也可以采用钩子函数的方式进行重写，也有相对好的拓展性。

首先新建一个 `RenderShadow` 类，继承至 `HTMLElement`，内部的 `setupShadow` 方法用来实例化影子节点，另外 `css` 和 `html` 方法，需要子类进行重写，也就是说这两个方法针对不同的组件，返回值也是不一样的，但是父类需要也需要提供这个方法，一旦子类没有重写父类的方法，就会报错

```js
class RenderShadow extends HTMLElement {
  constructor() {
    super()
    // 初始化调用 setupShadow 方法
    this.setupShadow()
  }

  // 初始化影子节点
  setupShadow() {
    const shadowRoot = this.attachShadow({ mode: 'open' })
  }

  // 处理 css
  css() {
    throw new Error('必须重写父类 css 方法')
  }

  // 处理 html
  html() {
    throw new Error('必须重写父类 html 方法')
  }
}
```

这样的话 `FButton` 类也需要更改了，就直接继承至 `RenderShadow` 公共类即可，并重写 `css` 和 `html` 方法：

```js
class FButton extends RenderShadow {
  constructor() {
    super()
  }

  css() {
    return `
      <style>
        .f-button {
          display: inline-flex;
          width: 100px;
          height: 35px;
          background: rgb(45, 90, 241);
          color: rgb(255, 255, 255);
          border: none;
          outline: none;
          cursor: pointer;
          justify-content: center;
          align-items: center;
        }
      </style>
    `
  }

  html() {
    return `
      <button class="f-button">
        <slot></slot>
      </button>
    `
  }
}
```

`RenderShadow` 类就可获取到子类重写的方法，给影子节点设置元素和样式。

但是先不要急着添加，还有更多的问题！！！

## 🌀 处理 CSS

现在的样式在外部的不能修改的，因为影子节点会把组件放在一个和外部`完全隔离`的环境，所以无论多大的权重，都不会对内部的 dom 产生影响，就好比原生 [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) 标签一样，是一个隔离的环境。

并且，目前在影子节点中有两个标签，一个是 style，一个是 button，这样的组件其实也是不美观的，如果样式很冗长，查看也不方法，所以上面的 css 处理方式，是不推荐的，我期望的样式添加是：外部可以自由修改，内部还不会嵌套 style 标签。

对于样式的处理，我找了很多的源码，最后在 [lit](https://github.com/lit/lit) 库的 [css-tag.ts](https://github.com/lit/lit/blob/main/packages/reactive-element/src/css-tag.ts) 文件中找到了一些关键方法，也就是 [CSSStyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets)，该方法于查看和修改当前网页的 css。

另外对于选择器，也不能仅仅的使用 class 类名进行选择了，针对影子节点，提供了 [:host()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host_function) 的伪类选择器，处理 css 的代码如下：

```js
class RenderShadow extends HTMLElement {
  constructor() {
    super()
    // 初始化调用 setupShadow 方法
    this.setupShadow()
  }

  // 初始化影子节点
  setupShadow() {
    // 创建影子节点
    const shadowRoot = this.attachShadow({ mode: 'open' })
    // 创建一个空的构造样式表
    const sheet = new CSSStyleSheet()
    // 将规则应用于工作表
    sheet.replaceSync(this.css())
    // 将样式应用于影子节点
    shadowRoot.adoptedStyleSheets = [sheet]
  }

  // 处理 css
  css() {
    throw new Error('必须重写父类 css 方法')
  }

  // ……
}

class FButton extends RenderShadow {
  constructor() {
    super()
  }

  css() {
    // 返回使用 :host 伪类的样式
    return `
      :host {
        display: inline-flex;
        width: 100px;
        height: 35px;
        background: rgb(45, 90, 241);
        color: rgb(255, 255, 255);
        border: none;
        outline: none;
        cursor: pointer;
        justify-content: center;
        align-items: center;
      }
    `
  }

  // ……
}

customElements.define('f-button', FButton)
```

这样的样式处理，就可以实现既隐藏了 style 标签，而且外部的样式也可进行了修改

## 🍭 处理 HTML

对于 HTML 的处理，直接选择 [innerHTML](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML)，对于性能、安全方面考虑，都是很差的。

所以最优的解决方案，还是 [Document.createElement()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)，那么如果组件内部很多的 html 节点，分别创建出来标签，再追加节点，不免有些冗余，
针对这一点，我想到了 `vue3` 中的`虚拟 dom`，这里可以直接返回一个虚拟 dom 的树形结构，那么在真正返回使用的时候，再遍历这棵树，分别进行递归追加不就好了吗？

> 这里对于手写虚拟 dom 节点，绝不是最优的解决方案，目前我先这样写，后续有想到更好的解决方案再进行更新

写这样的一个函数并不难，如下 `render` 函数：

```js
const render = (obj, node) => {
  const el = document.createElement(obj.tag)

  if (obj.class) {
    el.className = obj.class
  }

  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else if (obj.children) {
    obj.children.forEach((item) => render(item, el))
  }

  node.appendChild(el)
}
```

针对于按钮组件的 dom 结构，就可以传入一个这样的对象：

```js
const btn = {
  tag: 'button',
  children: [{ tag: 'slot' }]
}
```

但其实呢，dom 结构还可以更简化些，直接只是渲染个 slot 就好了：

```js
const btn = {
  tag: 'slot'
}
```

这样一来，重写了父类的 `html` 方法就可以直接调用 `render` 函数来实现对于 dom 结构的渲染，只需要将子类重写的方法返回值，和影子节点传给 `render` 函数即可，完整代码如下：

```js
// 渲染函数
const render = (obj, node) => {
  const el = document.createElement(obj.tag)

  if (obj.class) {
    el.className = obj.class
  }

  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else if (obj.children) {
    obj.children.forEach((item) => render(item, el))
  }

  node.appendChild(el)
}

// 渲染影子节点公共类
class RenderShadow extends HTMLElement {
  constructor() {
    super()
    // 初始化调用 setupShadow 方法
    this.setupShadow()
  }

  // 初始化影子节点
  setupShadow() {
    // 创建影子节点
    const shadowRoot = this.attachShadow({ mode: 'open' })
    // 创建一个空的构造样式表
    const sheet = new CSSStyleSheet()
    // 将规则应用于工作表
    sheet.replaceSync(this.css())
    // 将样式应用于影子节点
    shadowRoot.adoptedStyleSheets = [sheet]
    // 渲染 html 节点
    render(this.html(), shadowRoot)
  }

  // 处理 css
  css() {
    throw new Error('必须重写父类 css 方法')
  }

  // 处理 html
  html() {
    throw new Error('必须重写父类 html 方法')
  }
}

// 自定义按钮类
class FButton extends RenderShadow {
  constructor() {
    super()
  }

  css() {
    // 返回使用 :host 伪类的样式
    return `
      :host {
        display: inline-flex;
        width: 100px;
        height: 35px;
        background: rgb(45, 90, 241);
        color: rgb(255, 255, 255);
        border: none;
        outline: none;
        cursor: pointer;
        justify-content: center;
        align-items: center;
      }
    `
  }

  html() {
    return {
      tag: 'slot'
    }
  }
}

customElements.define('f-button', FButton)
```

这样，就将渲染影子节点公共类进行了抽离，样式和 dom 节点也有了相对友好的处理。

## 🌿 最后

以上所有源码，可参考仓库 [web-components](https://github.com/FightingDesign/web-components)

最近准备开发 Web Component 的组件库，感兴趣的同学也可以参与一波

Vue3 件库 [fighting-design](https://github.com/FightingDesign/fighting-design) 也仍在更新中

## 🏆 联系我

添加微信请备注 `Github` 用户名，加好友邀请进群


- Github: `https://github.com/hiliyongke`
