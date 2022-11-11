import{_ as s,o as a,c as n,a as e}from"./app.6fbfbcb1.js";const _=JSON.parse('{"title":"Node.js \u7248\u672C\u5207\u6362","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u57FA\u672C\u547D\u4EE4","slug":"\u57FA\u672C\u547D\u4EE4","link":"#\u57FA\u672C\u547D\u4EE4","children":[]},{"level":2,"title":"\u5199\u5230\u6700\u540E","slug":"\u5199\u5230\u6700\u540E","link":"#\u5199\u5230\u6700\u540E","children":[]}],"relativePath":"04-\u4EE3\u7801\u7B14\u8BB0/19-Node.js \u7248\u672C\u5207\u6362.md"}'),l={name:"04-\u4EE3\u7801\u7B14\u8BB0/19-Node.js \u7248\u672C\u5207\u6362.md"},p=e(`<h1 id="node-js-\u7248\u672C\u5207\u6362" tabindex="-1">Node.js \u7248\u672C\u5207\u6362 <a class="header-anchor" href="#node-js-\u7248\u672C\u5207\u6362" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u5728\u8001\u9879\u76EE\u548C\u65B0\u9879\u76EE\u4E00\u8D77\u7EF4\u62A4\u7684\u65F6\u5019\uFF0C\u5F88\u591A\u65F6\u5019\u6D89\u53CA\u5230 node.js \u7248\u672C\u7684\u5207\u6362\uFF0C\u90A3\u4E48\u4E0B\u9762\u63A8\u8350\u4E00\u4E2A\u53EF\u4EE5\u5FEB\u901F\u5207\u6362 node.js \u7248\u672C\u7684\u5DE5\u5177\uFF0C\u53EB<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a></p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u5728 <a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm \u4ED3\u5E93</a> \u53EF\u4EE5\u8FDB\u884C\u4E0B\u8F7D\uFF0C\u4E0B\u8F7D\u9009\u62E9 <code>nvm-setup.zip</code></p><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1">\u57FA\u672C\u547D\u4EE4 <a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5\u6307\u5B9A node.js \u7684\u7248\u672C</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nvm install \u7248\u672C\u53F7</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B\u672C\u5730\u5DF2\u7ECF\u5B89\u88C5\u7684\u7248\u672C</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nvm list</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u7248\u672C</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nvm current</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5207\u6362\u7248\u672C\u53F7</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nvm use \u7248\u672C\u53F7</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u5207\u6362\u7248\u672C\u53F7\u4E4B\u540E\u51FA\u73B0\u4E0B\u9762\u62A5\u9519</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">C:\\Users\\CC-</span><span style="color:#89DDFF;">1&gt;</span><span style="color:#A6ACCD;">nvm list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    16.14.2</span></span>
<span class="line"><span style="color:#A6ACCD;">    15.14.0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> 14.18.1 </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Currently using 64-bit executable</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">C:\\Users\\CC-</span><span style="color:#89DDFF;">1&gt;</span><span style="color:#A6ACCD;">nvm use 15.14.0</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> status 1: \uFFFD\uFFFD\xFB\uFFFD\uFFFD\uFFFD\u3E7B\uFFFD\uFFFD\u0228\uFFFD\uFFFD\u05B4\uFFFD\u0434\u02F2\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">C:\\Users\\CC-</span><span style="color:#89DDFF;">1&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u90A3\u4E48\u4F7F\u7528<code>\u7BA1\u7406\u5458\u8EAB\u4EFD</code>\u6253\u5F00\u547D\u4EE4\u884C\u4E4B\u540E\u91CD\u65B0\u6267\u884C\u5373\u53EF</p><h2 id="\u5199\u5230\u6700\u540E" tabindex="-1">\u5199\u5230\u6700\u540E <a class="header-anchor" href="#\u5199\u5230\u6700\u540E" aria-hidden="true">#</a></h2><p>\u6B22\u8FCE\u5927\u5BB6\u70B9\u8D5E+\u5173\u6CE8</p>`,19),o=[p];function t(c,i,r,d,h,C){return a(),n("div",null,o)}const A=s(l,[["render",t]]);export{_ as __pageData,A as default};
