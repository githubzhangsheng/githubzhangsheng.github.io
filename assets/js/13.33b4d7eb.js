(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(t,a,s){t.exports=s.p+"assets/img/1.a52d1727.png"},414:function(t,a,s){"use strict";s.r(a);var n=s(24),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"html5-语义化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html5-语义化"}},[t._v("#")]),t._v(" HTML5 语义化")]),t._v(" "),n("p",[t._v("这篇文章简单谈谈 HTML5 语义化中的页面结构语义化的一些经验和理解。")]),t._v(" "),n("h2",{attrs:{id:"为什么需要语义化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要语义化"}},[t._v("#")]),t._v(" 为什么需要语义化")]),t._v(" "),n("ul",[n("li",[t._v("易修改、易维护。")]),t._v(" "),n("li",[t._v("无障碍阅读支持。")]),t._v(" "),n("li",[t._v("搜索引擎友好，利于 SEO。")]),t._v(" "),n("li",[t._v("面向未来的 HTML，浏览器在未来可能提供更丰富的支持。")])]),t._v(" "),n("h2",{attrs:{id:"结构语义化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构语义化"}},[t._v("#")]),t._v(" 结构语义化")]),t._v(" "),n("p",[t._v("语义元素均有一个共同特点——他们均不做任何事情。换句话说，语义元素仅仅是页面结构的规范化，并不会对内容有本质的影响。")]),t._v(" "),n("p",[t._v("下图展示了一个典型的页面结构。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(378),alt:"页面结构"}})]),t._v(" "),n("h2",{attrs:{id:"头部"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#头部"}},[t._v("#")]),t._v(" 头部")]),t._v(" "),n("p",[n("code",[t._v("<header>")]),t._v("元素有两种用法，第一是标注内容的标题，第二是标注网页的页眉，如上图你看到的那样。除非必要（内容标题附带其它信息的情况下：发布时间、作者等），一般不在内容中使用"),n("code",[t._v("<header>")]),t._v("。因而，网页中可以包含多个"),n("code",[t._v("<header>")]),t._v("元素。按照 HTML5 的规定，"),n("code",[t._v("<header>")]),t._v("都应包含某个级别的标题，所以应隐式或显式地包含标题，通常将不希望显示的标题设置为"),n("code",[t._v("display: none;")]),t._v("，一方面遵守规范，另一方面则提供了无障碍阅读而不至于影响到页面设计")]),t._v(" "),n("h2",{attrs:{id:"导航栏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导航栏"}},[t._v("#")]),t._v(" 导航栏")]),t._v(" "),n("p",[t._v("导航栏使用"),n("code",[t._v("<nav>")]),t._v("看起来是理所当然的，进一步，它也用于一组文章的链接。一个页面可以包含多个"),n("code",[t._v("<nav>")]),t._v("元素，但通常仅仅在页面的主要导航部分使用它。\n《HTML5：The Missing Manual》中指出了在侧栏使用"),n("code",[t._v("<nav>")]),t._v("标签的两个案例：")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 案例一 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 此处是链接 --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("aside")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("aside")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("aside")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("aside")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 案例二 --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("aside")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 此处是链接 --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("aside")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("如果侧栏中包含其它不同于链接的其它区块，那么，使用第二种方案显然更为合适。")]),t._v(" "),n("p",[t._v("导航通常包含一组链接，普遍认为，链接使用列表来组织。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("链接"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("链接"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("链接"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("链接"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("链接"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("链接"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h2",{attrs:{id:"附注"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附注"}},[t._v("#")]),t._v(" 附注")]),t._v(" "),n("p",[n("code",[t._v("<aside>")]),t._v("元素并不仅仅是侧栏，它表示与它周围文本没有密切关系的内容。文章中同样可以使用"),n("code",[t._v("<aside>")]),t._v("元素，来说明文章的附加内容、解释说明某个观点、相关内容链接等等。")]),t._v(" "),n("p",[t._v("当"),n("code",[t._v("<aside>")]),t._v("用于侧栏时，其表示整个网页的附加内容。通常的广告区域、搜索、分享链接则位于侧栏。侧栏中的"),n("code",[t._v("<section>")]),t._v("元素规定了一个区域，通常是带有标题的内容。")]),t._v(" "),n("p",[n("code",[t._v("<section>")]),t._v("标签适合标记的内容区块：")]),t._v(" "),n("ul",[n("li",[t._v("与页面主体并列显示的小内容块。")]),t._v(" "),n("li",[t._v("独立性内容，清单、表单等。")]),t._v(" "),n("li",[t._v("分组内容，如 CMS 系统中的文章分类区块。")]),t._v(" "),n("li",[t._v("比较长文档的一部分，可能仅仅是为了正确规定页面大纲。")])]),t._v(" "),n("p",[n("code",[t._v("<div>")]),t._v("标签依然是可用的，当你觉得使用其它标签都不太合适的时候。新的语义元素出现之前，我们总是这么干的！")]),t._v(" "),n("h2",{attrs:{id:"页脚"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页脚"}},[t._v("#")]),t._v(" 页脚")]),t._v(" "),n("p",[t._v("同可“包罗万象”的"),n("code",[t._v("<header>")]),t._v("元素不同，标准规定"),n("code",[t._v("<footer>")]),t._v("标签仅仅可以包含版权、来源信息、法律限制等等之类的文本或链接信息。如果想要在页脚中包含其它内容，可以使用熟悉的"),n("code",[t._v("<div>")]),t._v("来帮忙。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("aside")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 其它内容 --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("aside")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 法律、版权、来源、联系信息等 --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h3",{attrs:{id:"主要内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主要内容"}},[t._v("#")]),t._v(" 主要内容")]),t._v(" "),n("p",[t._v("在早先的 HTML5 版本中并没有规定页面主体的标签，相关的书中经常会说：除去头部、尾部、侧栏等其它部分，剩下的自然是主体部分。")]),t._v(" "),n("p",[t._v("然而，HTML5.1 中规定了一个"),n("code",[t._v("<main>")]),t._v("标签来标识主体内容。"),n("code",[t._v("<main>")]),t._v("标签不能包含在页面其它区块元素中，通常是"),n("code",[t._v("<body>")]),t._v("的子标签，或者是全局"),n("code",[t._v("<div>")]),t._v("的子标签。"),n("code",[t._v("<main>")]),t._v("标签可以帮助屏幕阅读工具识别页面的主体部分，从而让访问者迅速得到有用的信息。")]),t._v(" "),n("h2",{attrs:{id:"文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文章"}},[t._v("#")]),t._v(" 文章")]),t._v(" "),n("p",[n("code",[t._v("<article>")]),t._v("表示一个完整的、自成一体的内容块。如文章或新闻报道。"),n("code",[t._v("<article>")]),t._v("应包含完整的标题、文章署名、发布时间、正文。当语义与表现发生冲突，例如有时需要将文章分多个页面显示，那么需要把每个页面的文章区域都用"),n("code",[t._v("<article>")]),t._v("标记。")]),t._v(" "),n("p",[t._v("文章中包含插图时，使用新的语义元素"),n("code",[t._v("<figure>")]),t._v("标签。")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("article")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标题"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 内容 --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("figure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("插图"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("figcaption")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是一个插图"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("figcaption")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("figure")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("article")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("上述情况下，"),n("code",[t._v("<figcaption>")]),t._v("包含了关于插图的详细解释，则"),n("code",[t._v("<img>")]),t._v("的alt属性可以略去。")]),t._v(" "),n("h2",{attrs:{id:"转载自文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转载自文章"}},[t._v("#")]),t._v(" 转载自文章")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://rainylog.com/post/ife-note-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IFE-NOTE: 页面结构语义化"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);