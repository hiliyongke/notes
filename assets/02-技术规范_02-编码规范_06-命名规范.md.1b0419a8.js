import{_ as s,o as n,c as a,a as p}from"./app.6fbfbcb1.js";const d=JSON.parse('{"title":"\u547D\u540D\u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u9879\u76EE\u547D\u540D","slug":"\u9879\u76EE\u547D\u540D","link":"#\u9879\u76EE\u547D\u540D","children":[]},{"level":3,"title":"\u76EE\u5F55\u547D\u540D","slug":"\u76EE\u5F55\u547D\u540D","link":"#\u76EE\u5F55\u547D\u540D","children":[]},{"level":3,"title":"Style \u547D\u540D","slug":"style-\u547D\u540D","link":"#style-\u547D\u540D","children":[]},{"level":3,"title":"Image \u547D\u540D","slug":"image-\u547D\u540D","link":"#image-\u547D\u540D","children":[]},{"level":3,"title":"Javascript \u547D\u540D","slug":"javascript-\u547D\u540D","link":"#javascript-\u547D\u540D","children":[]},{"level":3,"title":"Vue \u547D\u540D","slug":"vue-\u547D\u540D","link":"#vue-\u547D\u540D","children":[]}],"relativePath":"02-\u6280\u672F\u89C4\u8303/02-\u7F16\u7801\u89C4\u8303/06-\u547D\u540D\u89C4\u8303.md"}'),e={name:"02-\u6280\u672F\u89C4\u8303/02-\u7F16\u7801\u89C4\u8303/06-\u547D\u540D\u89C4\u8303.md"},l=p(`<h1 id="\u547D\u540D\u89C4\u8303" tabindex="-1">\u547D\u540D\u89C4\u8303 <a class="header-anchor" href="#\u547D\u540D\u89C4\u8303" aria-hidden="true">#</a></h1><p>\u7531\u5386\u53F2\u539F\u56E0\u53CA\u4E2A\u4EBA\u4E60\u60EF\u5F15\u8D77\u7684 DOM \u7ED3\u6784\u3001\u547D\u540D\u4E0D\u7EDF\u4E00\uFF0C\u5BFC\u81F4\u4E0D\u540C\u6210\u5458\u5728\u7EF4\u62A4\u540C\u4E00\u9875\u9762\u65F6\uFF0C\u6548\u7387\u4F4E\u4E0B\uFF0C\u8FED\u4EE3\u3001\u7EF4\u62A4\u6210\u672C\u6781\u9AD8\u3002</p><h3 id="\u9879\u76EE\u547D\u540D" tabindex="-1">\u9879\u76EE\u547D\u540D <a class="header-anchor" href="#\u9879\u76EE\u547D\u540D" aria-hidden="true">#</a></h3><p><strong>1. \u5168\u90E8\u91C7\u7528\u5C0F\u5199\u65B9\u5F0F\uFF0C \u4EE5\u4E2D\u5212\u7EBF\u5206\u9694</strong></p><p>\u6B63\u4F8B\uFF1A<code>permission-management-system</code></p><p>\u53CD\u4F8B\uFF1A<code>permission_management-system / permissionManagementSystem</code></p><h3 id="\u76EE\u5F55\u547D\u540D" tabindex="-1">\u76EE\u5F55\u547D\u540D <a class="header-anchor" href="#\u76EE\u5F55\u547D\u540D" aria-hidden="true">#</a></h3><p><strong>1. \u5168\u90E8\u91C7\u7528\u5C0F\u5199\u65B9\u5F0F\uFF0C \u4EE5\u4E2D\u5212\u7EBF\u5206\u9694\uFF0C\u6709\u590D\u6570\u7ED3\u6784\u65F6\uFF0C\u8981\u91C7\u7528\u590D\u6570\u547D\u540D\u6CD5\uFF0C \u7F29\u5199\u4E0D\u7528\u590D\u6570</strong></p><p>\u6B63\u4F8B\uFF1A<code>hooks / components / utils / layouts / styles</code></p><p>\u53CD\u4F8B\uFF1A <code>Hooks / Utils / demoStyles / demo_styles</code></p><p><strong>2. Vue \u9879\u76EE\u547D\u540D</strong><em>\u3010\u7279\u6B8A\u3011<code>Vue</code> \u7684\u9879\u76EE\u4E2D\u7684 <code>components</code> \u4E2D\u7684\u7EC4\u4EF6\u76EE\u5F55\uFF0C\u4F7F\u7528 <code>kebab-case</code> \u547D\u540D</em></p><p>\u6B63\u4F8B\uFF1A <code>head-search / page-loading / chart / pro-table</code></p><p>\u53CD\u4F8B\uFF1A <code>HeadSearch / PageLoading / ProTable</code></p><p><em>\u3010\u7279\u6B8A\u3011<code>Vue</code> \u7684\u9879\u76EE\u4E2D\u7684 <code>components</code> \u4E2D\u7684\u7EC4\u4EF6\u76EE\u5F55\uFF0C\u5206\u6210\u4E24\u7C7B\uFF1A\u5168\u5C40\u57FA\u672C\u7EC4\u4EF6(<code>base-[component-name]</code>)\u3001\u5168\u5C40\u4E1A\u52A1\u7EC4\u4EF6(<code>biz-[component-name]</code>)</em></p><p>\u6B63\u4F8B\uFF1A <code>pro-table / pro-form / biz-query / biz-layouts</code></p><p>\u53CD\u4F8B\uFF1A <code>ProTable / ProForm / BizQuery / BizLayouts</code></p><p><em>\u3010\u7279\u6B8A\u3011<code>Vue</code> \u7684\u9879\u76EE\u4E2D\u7684\u9664 <code>components</code> \u7EC4\u4EF6\u76EE\u5F55\u5916\u7684\u6240\u6709\u76EE\u5F55\u4E5F\u4F7F\u7528 <code>kebab-case</code> \u547D\u540D</em></p><p>\u6B63\u4F8B\uFF1A <code>shopping-car / user-management / system-management</code></p><p>\u53CD\u4F8B\uFF1A <code>ShoppingCar / UserManagement / SystemManagement</code></p><h3 id="style-\u547D\u540D" tabindex="-1">Style \u547D\u540D <a class="header-anchor" href="#style-\u547D\u540D" aria-hidden="true">#</a></h3><p><strong>1. \u5168\u90E8\u91C7\u7528\u5C0F\u5199\u65B9\u5F0F\uFF0C \u4EE5\u4E2D\u5212\u7EBF\u5206\u9694</strong></p><p>\u6B63\u4F8B\uFF1A <code>element-override.css / common.less</code></p><p>\u53CD\u4F8B\uFF1A <code>elementOverride.css / Common.less</code></p><h3 id="image-\u547D\u540D" tabindex="-1">Image \u547D\u540D <a class="header-anchor" href="#image-\u547D\u540D" aria-hidden="true">#</a></h3><p><strong>1. \u5168\u90E8\u91C7\u7528\u5C0F\u5199\u65B9\u5F0F\uFF0C \u4EE5\u4E2D\u5212\u7EBF\u5206\u9694</strong></p><p>\u6B63\u4F8B\uFF1A <code>icon-home.png / logo.png</code></p><p>\u53CD\u4F8B\uFF1A <code>iconHome.png / icon_home / Logo.png</code></p><h3 id="javascript-\u547D\u540D" tabindex="-1">Javascript \u547D\u540D <a class="header-anchor" href="#javascript-\u547D\u540D" aria-hidden="true">#</a></h3><p><strong>1. <code>js / ts</code>\u6587\u4EF6\u7EDF\u4E00\u5168\u90E8\u91C7\u7528\u5C0F\u5199\u65B9\u5F0F\u6216\u8005 <code>kebab-case</code> \u98CE\u683C</strong></p><p>\u6B63\u4F8B\uFF1A <code>http.js / watermark.ts / load-image.ts / is-string.ts</code></p><p>\u53CD\u4F8B\uFF1A <code>Http.js / Watermark.ts / load-image.less / is_string.ts</code></p><p><strong>2. \u65B9\u6CD5\u540D\u3001\u53C2\u6570\u540D\u3001\u6210\u5458\u53D8\u91CF\u3001\u5C40\u90E8\u53D8\u91CF\u90FD\u7EDF\u4E00\u4F7F\u7528 <code>lowerCamelCase</code> \u98CE\u683C\uFF0C\u5FC5\u987B\u9075\u4ECE\u9A7C\u5CF0\u5F62\u5F0F\u3002</strong></p><p>\u6B63\u4F8B\uFF1A <code>localValue / getHttpMessage() / inputUserId</code></p><p><strong><em>\u5176\u4E2D method \u65B9\u6CD5\u547D\u540D\u5FC5\u987B\u662F \u52A8\u8BCD \u6216\u8005 \u52A8\u8BCD+\u540D\u8BCD \u5F62\u5F0F</em></strong></p><p>\u6B63\u4F8B\uFF1A<code>saveShopCarData /openShopCarInfoDialog</code></p><p>\u53CD\u4F8B\uFF1A<code>save / open / show / go</code></p><p><strong><em>\u7279\u6B64\u8BF4\u660E\uFF0C\u589E\u5220\u67E5\u6539\uFF0C\u8BE6\u60C5\u7EDF\u4E00\u4F7F\u7528\u5982\u4E0B 5 \u4E2A\u5355\u8BCD\uFF0C\u4E0D\u5F97\u4F7F\u7528\u5176\u4ED6\uFF08\u76EE\u7684\u662F\u4E3A\u4E86\u7EDF\u4E00\u5404\u4E2A\u7AEF\uFF09</em></strong></p><p><code>add / update / delete / detail / get</code></p><p><strong>\u9644\uFF1A \u51FD\u6570\u65B9\u6CD5\u5E38\u7528\u7684\u52A8\u8BCD:</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">get \u83B7\u53D6 / set \u8BBE\u7F6E,</span></span>
<span class="line"><span style="color:#A6ACCD;">add \u589E\u52A0 / remove \u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">create \u521B\u5EFA / destory \u79FB\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">start \u542F\u52A8 / stop \u505C\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;">open \u6253\u5F00 / close \u5173\u95ED</span></span>
<span class="line"><span style="color:#A6ACCD;">read \u8BFB\u53D6 / write \u5199\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">load \u8F7D\u5165 / save \u4FDD\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">create \u521B\u5EFA / destroy \u9500\u6BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">begin \u5F00\u59CB / end \u7ED3\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">backup \u5907\u4EFD / restore \u6062\u590D</span></span>
<span class="line"><span style="color:#A6ACCD;">import \u5BFC\u5165 / export \u5BFC\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">split \u5206\u5272 / merge \u5408\u5E76</span></span>
<span class="line"><span style="color:#A6ACCD;">inject \u6CE8\u5165 / extract \u63D0\u53D6</span></span>
<span class="line"><span style="color:#A6ACCD;">attach \u9644\u7740 / detach \u8131\u79BB</span></span>
<span class="line"><span style="color:#A6ACCD;">bind \u7ED1\u5B9A / separate \u5206\u79BB</span></span>
<span class="line"><span style="color:#A6ACCD;">view \u67E5\u770B / browse \u6D4F\u89C8</span></span>
<span class="line"><span style="color:#A6ACCD;">edit \u7F16\u8F91 / modify \u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">select \u9009\u53D6 / mark \u6807\u8BB0</span></span>
<span class="line"><span style="color:#A6ACCD;">copy \u590D\u5236 / paste \u7C98\u8D34</span></span>
<span class="line"><span style="color:#A6ACCD;">undo \u64A4\u9500 / redo \u91CD\u505A</span></span>
<span class="line"><span style="color:#A6ACCD;">insert \u63D2\u5165 / delete \u79FB\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">add \u52A0\u5165 / append \u6DFB\u52A0</span></span>
<span class="line"><span style="color:#A6ACCD;">clean \u6E05\u7406 / clear \u6E05\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">index \u7D22\u5F15 / sort \u6392\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">find \u67E5\u627E / search \u641C\u7D22</span></span>
<span class="line"><span style="color:#A6ACCD;">increase \u589E\u52A0 / decrease \u51CF\u5C11</span></span>
<span class="line"><span style="color:#A6ACCD;">play \u64AD\u653E / pause \u6682\u505C</span></span>
<span class="line"><span style="color:#A6ACCD;">launch \u542F\u52A8 / run \u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">compile \u7F16\u8BD1 / execute \u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">debug \u8C03\u8BD5 / trace \u8DDF\u8E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">observe \u89C2\u5BDF / listen \u76D1\u542C</span></span>
<span class="line"><span style="color:#A6ACCD;">build \u6784\u5EFA / publish \u53D1\u5E03</span></span>
<span class="line"><span style="color:#A6ACCD;">input \u8F93\u5165 / output \u8F93\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">encode \u7F16\u7801 / decode \u89E3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">encrypt \u52A0\u5BC6 / decrypt \u89E3\u5BC6</span></span>
<span class="line"><span style="color:#A6ACCD;">compress \u538B\u7F29 / decompress \u89E3\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">pack \u6253\u5305 / unpack \u89E3\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">parse \u89E3\u6790 / emit \u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">connect \u8FDE\u63A5 / disconnect \u65AD\u5F00</span></span>
<span class="line"><span style="color:#A6ACCD;">send \u53D1\u9001 / receive \u63A5\u6536</span></span>
<span class="line"><span style="color:#A6ACCD;">download \u4E0B\u8F7D / upload \u4E0A\u4F20</span></span>
<span class="line"><span style="color:#A6ACCD;">refresh \u5237\u65B0 / synchronize \u540C\u6B65</span></span>
<span class="line"><span style="color:#A6ACCD;">update \u66F4\u65B0 / revert \u590D\u539F</span></span>
<span class="line"><span style="color:#A6ACCD;">lock \u9501\u5B9A / unlock \u89E3\u9501</span></span>
<span class="line"><span style="color:#A6ACCD;">check out \u7B7E\u51FA / check in \u7B7E\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">submit \u63D0\u4EA4 / commit \u4EA4\u4ED8</span></span>
<span class="line"><span style="color:#A6ACCD;">push \u63A8 / pull \u62C9</span></span>
<span class="line"><span style="color:#A6ACCD;">expand \u5C55\u5F00 / collapse \u6298\u53E0</span></span>
<span class="line"><span style="color:#A6ACCD;">begin \u8D77\u59CB / end \u7ED3\u675F</span></span>
<span class="line"><span style="color:#A6ACCD;">start \u5F00\u59CB / finish \u5B8C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">enter \u8FDB\u5165 / exit \u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">abort \u653E\u5F03 / quit \u79BB\u5F00</span></span>
<span class="line"><span style="color:#A6ACCD;">obsolete \u5E9F\u5F03 / depreciate \u5E9F\u65E7</span></span>
<span class="line"><span style="color:#A6ACCD;">collect \u6536\u96C6 / aggregate \u805A\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>3. \u5E38\u91CF\u547D\u540D\u5168\u90E8\u5927\u5199\uFF0C\u5355\u8BCD\u95F4\u7528\u4E0B\u5212\u7EBF\u9694\u5F00\uFF0C\u529B\u6C42\u8BED\u4E49\u8868\u8FBE\u5B8C\u6574\u6E05\u695A\uFF0C\u4E0D\u8981\u5ACC\u540D\u5B57\u957F</strong></p><p>\u6B63\u4F8B\uFF1A <code>MAX_STOCK_COUNT</code></p><p>\u53CD\u4F8B\uFF1A <code>MAX_COUNT</code></p><p><strong>4. ts \u7C7B\u578B\u540D\u79F0\u547D\u540D\u5168\u90E8\u91C7\u7528 KebabCase</strong></p><p>\u6B63\u4F8B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IObject</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UserInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u53CD\u4F8B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">iObject</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Record</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">userInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="vue-\u547D\u540D" tabindex="-1">Vue \u547D\u540D <a class="header-anchor" href="#vue-\u547D\u540D" aria-hidden="true">#</a></h3><p>vue \u9879\u76EE\u89C4\u8303\u4EE5 Vue \u5B98\u65B9\u89C4\u8303 \uFF08<a href="https://v3.cn.vuejs.org/style-guide/" target="_blank" rel="noreferrer">https://v3.cn.vuejs.org/style-guide/</a>\uFF09 \u4E2D\u7684 <strong>\u4F18\u5148\u7EA7 A</strong> \u547D\u540D\u4E3A\u57FA\u7840\uFF0C\u5728\u5176\u4E0A\u9762\u8FDB\u884C\u9879\u76EE\u5F00\u53D1\uFF0C\u6545\u6240\u6709\u4EE3\u7801\u5747\u9075\u5B88\u8BE5\u89C4\u8303\u3002</p><blockquote><p>\u8BF7\u4ED4\u4ED4\u7EC6\u7EC6\u9605\u8BFB Vue \u5B98\u65B9\u89C4\u8303\uFF0C\u5207\u8BB0\uFF0C\u6B64\u4E3A\u7B2C\u4E00\u6B65\u3002</p></blockquote><p><strong>1. vue \u6587\u4EF6\u547D\u540D\u9664\u4E86 <code>index.vue</code> \u6587\u4EF6\uFF0C\u5176\u4ED6 <code>vue</code> \u6587\u4EF6, \u5176\u4ED6\u90FD\u662F\u7EDF\u4E00\u4F7F\u7528<code>kebab-case</code>\u547D\u540D</strong></p><p>\u6B63\u4F8B\uFF1A <code>edit.vue</code> / <code>home.vue</code> / <code>user-info.vue</code></p><p>\u53CD\u4F8B\uFF1A <code>Edit.vue</code> / <code>Home.vue</code> / <code>UserInfo.vue</code>/ <code>userInfo.vue</code></p><p><strong>2. \u7EC4\u4EF6\u540D\u5E94\u8BE5\u59CB\u7EC8\u662F\u591A\u4E2A\u5355\u8BCD\u7EC4\u6210\uFF08\u5927\u4E8E\u7B49\u4E8E 2\uFF09\uFF0C\u4E14\u547D\u540D\u89C4\u8303\u4E3A <code>KebabCase</code> \u683C\u5F0F\u3002</strong></p><p>\u8FD9\u6837\u505A\u53EF\u4EE5\u907F\u514D\u8DDF\u73B0\u6709\u7684\u4EE5\u53CA\u672A\u6765\u7684 <code>HTML</code> \u5143\u7D20\u76F8\u51B2\u7A81\uFF0C\u56E0\u4E3A\u6240\u6709\u7684 <code>HTML</code> \u5143\u7D20\u540D\u79F0\u90FD\u662F\u5355\u4E2A\u5355\u8BCD\u7684\u3002</p><p>\u6B63\u4F8B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TodoItem</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u53CD\u4F8B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Todo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">todo-item</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p><strong>3. \u9875\u9762\u6A21\u5757\u76EE\u5F55\u7684\u89C4\u8303, \u91C7\u7528\u4E1A\u52A1\u903B\u8F91\u72EC\u7ACB\u89E3\u6784</strong></p><p>\u6BD4\u5982\u8FD9\u6837\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">user/</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 detail.vue    \u8BE6\u60C5\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 edit.vue      \u7F16\u8F91\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 components/   \u4E1A\u52A1\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 directives/   \u4E1A\u52A1\u6307\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 hooks/        \u4E1A\u52A1hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.vue     \u5C55\u793A\u9875</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 types/        \u4E1A\u52A1ts\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 utils/        \u4E1A\u52A1\u5DE5\u5177\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,63),o=[l];function c(t,r,C,y,i,D){return n(),a("div",null,o)}const F=s(e,[["render",c]]);export{d as __pageData,F as default};
