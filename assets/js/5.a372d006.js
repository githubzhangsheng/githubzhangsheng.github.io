(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{421:function(t,a,s){t.exports=s.p+"assets/img/1.ea4f07f1.jpg"},422:function(t,a,s){t.exports=s.p+"assets/img/6.40664954.png"},423:function(t,a,s){t.exports=s.p+"assets/img/2.2d88e9ff.png"},424:function(t,a,s){t.exports=s.p+"assets/img/3.5059e3fa.jpg"},425:function(t,a,s){t.exports=s.p+"assets/img/4.e3f2f088.jpg"},426:function(t,a,s){t.exports=s.p+"assets/img/5.f24f8290.jpg"},537:function(t,a,s){"use strict";s.r(a);var n=s(24),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"performance、lighthouse-与性能-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#performance、lighthouse-与性能-api"}},[t._v("#")]),t._v(" Performance、LightHouse 与性能 API")]),t._v(" "),n("h2",{attrs:{id:"可视化监测-从-performance-面板说起"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可视化监测-从-performance-面板说起"}},[t._v("#")]),t._v(" 可视化监测：从 Performance 面板说起")]),t._v(" "),n("p",[t._v("Performance 是 Chrome 提供给我们的开发者工具，用于记录和分析我们的应用在运行时的所有活动。它呈现的数据具有实时性、多维度的特点，可以帮助我们很好地定位性能问题。")]),t._v(" "),n("h3",{attrs:{id:"开始记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始记录"}},[t._v("#")]),t._v(" 开始记录")]),t._v(" "),n("p",[t._v("右键打开开发者工具，选中我们的 Performance 面板：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(421),alt:""}})]),t._v(" "),n("p",[t._v("当我们选中图中所标示的实心圆按钮，Performance 会开始帮我们记录我们后续的交互操作；当我们选中圆箭头按钮，Performance 会将页面重新加载，计算加载过程中的性能表现。\ntips：使用 Performance 工具时，为了规避其它 Chrome 插件对页面的性能影响，我们最好在无痕模式下打开页面")]),t._v(" "),n("h3",{attrs:{id:"简要分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简要分析"}},[t._v("#")]),t._v(" 简要分析")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.jianshu.com/p/d476bd527e48",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看文章"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"可视化监测-更加聪明的-lighthouse"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可视化监测-更加聪明的-lighthouse"}},[t._v("#")]),t._v(" 可视化监测： 更加聪明的 LightHouse")]),t._v(" "),n("p",[t._v("从 Chrome 60 开始，DevTools 中直接加入了基于 LightHouse 的 Audits 面板：\n"),n("img",{attrs:{src:s(422),alt:""}})]),t._v(" "),n("p",[t._v("点击 generate report 即可生成性能分析报告：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(423),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"可编程的性能上报方案-w3c-性能-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可编程的性能上报方案-w3c-性能-api"}},[t._v("#")]),t._v(" 可编程的性能上报方案： W3C 性能 API")]),t._v(" "),n("p",[t._v("W3C 规范为我们提供了 Performance 相关的接口。它允许我们获取到用户访问一个页面的每个阶段的精确时间，从而对性能进行分析。我们可以将其理解为 Performance 面板的进一步细化与可编程化。")]),t._v(" "),n("p",[t._v("当下的前端世界里，数据可视化的概念已经被炒得非常热了，Performance 面板就是数据可视化的典范。那么为什么要把已经可视化的数据再掏出来处理一遍呢？这是因为，需要这些数据的人不止我们前端——很多情况下，后端也需要我们提供性能信息的上报。此外，Performance 提供的可视化结果并不一定能够满足我们实际的业务需求，只有拿到了真实的数据，我们才可以对它进行二次处理，去做一个更加深层次的可视化。")]),t._v(" "),n("p",[t._v("在这种需求背景下，我们就不得不祭出 Performance API了。")]),t._v(" "),n("h3",{attrs:{id:"访问-performance-对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问-performance-对象"}},[t._v("#")]),t._v(" 访问 performance 对象")]),t._v(" "),n("p",[t._v("performance 是一个全局对象。我们在控制台里输入 window.performance，就可一窥其全貌：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(424),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"关键时间点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关键时间点"}},[t._v("#")]),t._v(" 关键时间点")]),t._v(" "),n("p",[t._v("在 performance 的 timing 属性中，我们可以查看到如下的时间戳：\n"),n("img",{attrs:{src:s(425),alt:""}}),t._v("\n这些时间戳与页面整个加载流程中的关键时间节点有着一一对应的关系：\n"),n("img",{attrs:{src:s(426),alt:""}})]),t._v(" "),n("p",[t._v("通过求两个时间点之间的差值，我们可以得出某个过程花费的时间，举个例子：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" timing "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DNS查询耗时")]),t._v("\ntiming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupEnd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupStart\n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TCP连接耗时")]),t._v("\ntiming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectEnd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectStart\n \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内容加载耗时")]),t._v("\ntiming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseEnd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" timing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestStart\n\n···\n")])])]),n("p",[t._v("除了这些常见的耗时情况，我们更应该去关注一些关键性能指标：firstbyte、fpt、tti、ready 和 load 时间。这些指标数据与真实的用户体验息息相关，是我们日常业务性能监测中不可或缺的一部分：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// firstbyte：首包时间\t")]),t._v("\ntiming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseStart – timing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domainLookupStart\t\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fpt：First Paint Time, 首次渲染时间 / 白屏时间")]),t._v("\ntiming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseEnd – timing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tti：Time to Interact，首次可交互时间\t")]),t._v("\ntiming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domInteractive – timing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ready：HTML 加载完成时间，即 DOM 就位的时间")]),t._v("\ntiming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domContentLoaded – timing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// load：页面完全加载时间")]),t._v("\ntiming"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadEventStart – timing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchStart\n")])])]),n("p",[t._v("以上这些通过 Performance API 获取到的时间信息都具有较高的准确度。我们可以对此进行一番格式处理之后上报给服务端，也可以基于此去制作相应的统计图表，从而实现更加精准、更加个性化的性能耗时统计。")]),t._v(" "),n("p",[t._v("此外，通过访问 performance 的 memory 属性，我们还可以获取到内存占用相关的数据；通过对 performance 的其它属性方法的灵活运用，我们还可以把它耦合进业务里，实现更加多样化的性能监测需求——灵活，是可编程化方案最大的优点。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("本节我们介绍了 Performance 开发者工具、LightHouse 与 Performance API 三种性能监测的方案。只要有 Chrome 浏览器，我们就可以实现上述的所有操作。")]),t._v(" "),n("p",[t._v("由此可以看出，性能监测本身并不难。它的复杂度是在与业务发生耦合的过程中提升的。我们今天打下了坚实的地基，后续需要大家在业务中去成长、去发掘这些工具的更多的潜力，这样才能建立起属于我们自己的技术金字塔。")])])}),[],!1,null,null,null);a.default=e.exports}}]);