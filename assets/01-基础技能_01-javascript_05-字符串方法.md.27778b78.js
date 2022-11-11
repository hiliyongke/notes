import{_ as s,o as a,c as l,a as n}from"./app.6fbfbcb1.js";const F=JSON.parse('{"title":"\u5B57\u7B26\u4E32\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"toString()","slug":"tostring","link":"#tostring","children":[]},{"level":2,"title":"concat()","slug":"concat","link":"#concat","children":[]},{"level":2,"title":"slice()","slug":"slice","link":"#slice","children":[]},{"level":2,"title":"substring()","slug":"substring","link":"#substring","children":[]},{"level":2,"title":"substr()","slug":"substr","link":"#substr","children":[]},{"level":2,"title":"startsWith()","slug":"startswith","link":"#startswith","children":[]},{"level":2,"title":"startsWith()","slug":"startswith-1","link":"#startswith-1","children":[]},{"level":2,"title":"includes()","slug":"includes","link":"#includes","children":[]},{"level":2,"title":"trim()","slug":"trim","link":"#trim","children":[]},{"level":2,"title":"repeat()","slug":"repeat","link":"#repeat","children":[]},{"level":2,"title":"padStart()","slug":"padstart","link":"#padstart","children":[]},{"level":2,"title":"padStart()","slug":"padstart-1","link":"#padstart-1","children":[]},{"level":2,"title":"match()","slug":"match","link":"#match","children":[]},{"level":2,"title":"localeCompare()","slug":"localecompare","link":"#localecompare","children":[]}],"relativePath":"01-\u57FA\u7840\u6280\u80FD/01-javascript/05-\u5B57\u7B26\u4E32\u65B9\u6CD5.md"}'),o={name:"01-\u57FA\u7840\u6280\u80FD/01-javascript/05-\u5B57\u7B26\u4E32\u65B9\u6CD5.md"},p=n(`<h1 id="\u5B57\u7B26\u4E32\u65B9\u6CD5" tabindex="-1">\u5B57\u7B26\u4E32\u65B9\u6CD5 <a class="header-anchor" href="#\u5B57\u7B26\u4E32\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="tostring" tabindex="-1">toString() <a class="header-anchor" href="#tostring" aria-hidden="true">#</a></h2><p>\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;">// &#39;12&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="concat" tabindex="-1">concat() <a class="header-anchor" href="#concat" aria-hidden="true">#</a></h2><p>\u5B57\u7B26\u4E32\u62FC\u63A5</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1121</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u54C8\u54C8\u54C8</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">concat</span><span style="color:#A6ACCD;">(b)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(c) </span><span style="color:#676E95;">// 1121\u54C8\u54C8\u54C8</span></span>
<span class="line"></span></code></pre></div><h2 id="slice" tabindex="-1">slice() <a class="header-anchor" href="#slice" aria-hidden="true">#</a></h2><p>\u5B57\u7B26\u4E32\u622A\u53D6\uFF0C\u53EF\u63A5\u6536\u4E24\u4E2A\u53C2\u6570</p><ul><li>\u5B57\u7B26\u4E32\u5F00\u59CB\u7684\u4F4D\u7F6E</li><li>\u5B57\u7B26\u4E32\u7ED3\u675F\u7684\u4F4D\u7F6E</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// llo world</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// llo</span></span>
<span class="line"></span></code></pre></div><h2 id="substring" tabindex="-1">substring() <a class="header-anchor" href="#substring" aria-hidden="true">#</a></h2><p>\u5B57\u7B26\u4E32\u622A\u53D6\uFF0C\u53EF\u63A5\u6536\u4E24\u4E2A\u53C2\u6570</p><ul><li>\u5B57\u7B26\u4E32\u5F00\u59CB\u7684\u4F4D\u7F6E</li><li>\u5B57\u7B26\u4E32\u7ED3\u675F\u7684\u4F4D\u7F6E</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// llo world</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// llo</span></span>
<span class="line"></span></code></pre></div><h2 id="substr" tabindex="-1">substr() <a class="header-anchor" href="#substr" aria-hidden="true">#</a></h2><p>\u5B57\u7B26\u4E32\u622A\u53D6\uFF0C\u53EF\u63A5\u6536\u4E24\u4E2A\u53C2\u6570</p><ul><li>\u5B57\u7B26\u4E32\u5F00\u59CB\u7684\u4F4D\u7F6E</li><li>\u622A\u53D6\u957F\u5EA6</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substr</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// hello world</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substr</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// lo worl</span></span>
<span class="line"></span></code></pre></div><h2 id="startswith" tabindex="-1">startsWith() <a class="header-anchor" href="#startswith" aria-hidden="true">#</a></h2><p>\u68C0\u6D4B\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u67D0\u4E2A\u53C2\u6570\uFF0C\u5B83\u68C0\u67E5\u7684\u662F\u5F00\u59CB\u4E8E\u7D22\u5F15 0 \u7684\u5339\u914D\u9879\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u53EF\u63A5\u6536\u4E24\u4E2A\u53C2\u6570</p><ul><li>\u8981\u641C\u7D22\u7684\u5B57\u7B26\u4E32</li><li>\u5B57\u7B26\u4E32\u5F00\u59CB\u7684\u4F4D\u7F6E</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">llo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span></code></pre></div><h2 id="startswith-1" tabindex="-1">startsWith() <a class="header-anchor" href="#startswith-1" aria-hidden="true">#</a></h2><p>\u68C0\u6D4B\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u67D0\u4E2A\u53C2\u6570\uFF0C\u5B83\u68C0\u67E5\u7684\u662F\u5F00\u59CB\u4E8E\u7D22\u5F15\u672B\u5C3E\u7684\u5339\u914D\u9879\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u53EF\u63A5\u6536\u4E24\u4E2A\u53C2\u6570</p><ul><li>\u8981\u641C\u7D22\u7684\u5B57\u7B26\u4E32</li><li>\u5B57\u7B26\u4E32\u5F00\u59CB\u7684\u4F4D\u7F6E</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rld</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">llo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span></code></pre></div><h2 id="includes" tabindex="-1">includes() <a class="header-anchor" href="#includes" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5728\u6574\u4E2A\u5B57\u7B26\u4E32\u4E2D\u8FDB\u884C\u641C\u7D22</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rld</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">llo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="trim" tabindex="-1">trim() <a class="header-anchor" href="#trim" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5220\u9664\u5B57\u7B26\u4E32\u524D\u540E\u7684\u7A7A\u683C</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> hello world </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;">// hello world</span></span>
<span class="line"></span></code></pre></div><h2 id="repeat" tabindex="-1">repeat() <a class="header-anchor" href="#repeat" aria-hidden="true">#</a></h2><p>\u7528\u4E8E\u5B57\u7B26\u4E32\u590D\u5236\uFF0C\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570</p><ul><li>\u8981\u590D\u5236\u7684\u6B21\u6570</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">repeat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// hello worldhello world</span></span>
<span class="line"></span></code></pre></div><h2 id="padstart" tabindex="-1">padStart() <a class="header-anchor" href="#padstart" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u590D\u5236\u5B57\u7B26\u4E32\uFF0C\u7ED9\u51FA\u6307\u5B9A\u7684\u957F\u5EA6\u8FDB\u884C\u586B\u5145\uFF0C\u9ED8\u8BA4\u5728\u5B57\u7B26\u4E32<code>\u524D\u9762</code>\u586B\u5145\u7A7A\u683C\uFF0C\u63A5\u6536\u4E24\u4E2A\u53C2\u6570</p><ul><li>\u6307\u5B9A\u957F\u5EA6</li><li>\u586B\u5145\u5B57\u7B26\u4E32</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padStart</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">//      hello</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padStart</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// -----hello</span></span>
<span class="line"></span></code></pre></div><h2 id="padstart-1" tabindex="-1">padStart() <a class="header-anchor" href="#padstart-1" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u590D\u5236\u5B57\u7B26\u4E32\uFF0C\u7ED9\u51FA\u6307\u5B9A\u7684\u957F\u5EA6\u8FDB\u884C\u586B\u5145\uFF0C\u9ED8\u8BA4\u5728\u5B57\u7B26\u4E32<code>\u540E\u9762</code>\u586B\u5145\u7A7A\u683C\uFF0C\u63A5\u6536\u4E24\u4E2A\u53C2\u6570</p><ul><li>\u6307\u5B9A\u957F\u5EA6</li><li>\u586B\u5145\u5B57\u7B26\u4E32</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padEnd</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// hello</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padEnd</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// hello-----</span></span>
<span class="line"></span></code></pre></div><h2 id="match" tabindex="-1">match() <a class="header-anchor" href="#match" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5339\u914D\u5B57\u7B26\u4E32\uFF0C\u63A5\u6536\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u53C2\u6570\u8FDB\u884C\u5339\u914D</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">.lo</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;">// [&#39;llo&#39;, index: 2, input: &#39;hello&#39;, groups: undefined]</span></span>
<span class="line"></span></code></pre></div><h2 id="localecompare" tabindex="-1">localeCompare() <a class="header-anchor" href="#localecompare" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u7528\u4E8E\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4F1A\u8FD4\u56DE <code>-1\u30010\u30011</code> \u7B49\u503C</p><ul><li>\u8981\u6BD4\u8F83\u7684\u5B57\u7B26\u4E32\u548C\u539F\u59CB\u5B57\u7B26\u4E32\u76F8\u7B49\uFF0C\u8FD4\u56DE 0</li><li>\u6309\u7167\u5B57\u6BCD\u8868\u68C0\u6D4B\uFF0C\u5982\u679C\u53C2\u6570\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u5728\u539F\u59CB\u5B57\u7B26\u4E32\u4E4B\u524D\uFF0C\u5C31\u8FD4\u56DE\u6B63\u503C</li><li>\u6309\u7167\u5B57\u6BCD\u8868\u68C0\u6D4B\uFF0C\u5982\u679C\u53C2\u6570\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD\u5728\u539F\u59CB\u5B57\u7B26\u4E32\u4E4B\u540E\uFF0C\u5C31\u8FD4\u56DE\u8D1F\u503C</li></ul>`,51),e=[p];function t(c,r,y,D,A,C){return a(),l("div",null,e)}const d=s(o,[["render",t]]);export{F as __pageData,d as default};
