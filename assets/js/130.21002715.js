(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{505:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"响应式系统的基本原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式系统的基本原理"}},[t._v("#")]),t._v(" 响应式系统的基本原理")]),t._v(" "),s("h2",{attrs:{id:"响应式系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式系统"}},[t._v("#")]),t._v(" 响应式系统")]),t._v(" "),s("p",[t._v("Vue.js 是一款 MVVM 框架，数据模型仅仅是普通的 JavaScript 对象，但是对这些对象进行操作时，却能影响对应视图，它的核心实现就是「响应式系统」。尽管我们在使用 Vue.js 进行开发时不会直接修改「响应式系统」，但是理解它的实现有助于避开一些常见的「坑」，也有助于在遇见一些琢磨不透的问题时可以深入其原理来解决它。")]),t._v(" "),s("h2",{attrs:{id:"object-defineproperty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[t._v("#")]),t._v(" Object.defineProperty")]),t._v(" "),s("p",[t._v("首先我们来介绍一下 Object.defineProperty，Vue.js就是基于它实现「响应式系统」的。")]),t._v(" "),s("p",[t._v("首先是使用方法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    obj: 目标对象\n    prop: 需要操作的目标对象的属性名\n    descriptor: 描述符\n    \n    return value 传入对象\n*/")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("descriptor的一些属性，简单介绍几个属性，具体可以参考 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("enumerable，属性是否可枚举，默认 false。")]),t._v(" "),s("li",[t._v("configurable，属性是否可以被修改或者删除，默认 false。")]),t._v(" "),s("li",[t._v("get，获取属性的方法。")]),t._v(" "),s("li",[t._v("set，设置属性的方法。")])]),t._v(" "),s("h2",{attrs:{id:"实现-observer-可观察的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-observer-可观察的"}},[t._v("#")]),t._v(" 实现 observer（可观察的）")]),t._v(" "),s("p",[t._v("知道了 Object.defineProperty 以后，我们来用它使对象变成可观察的。")]),t._v(" "),s("p",[t._v("这一部分的内容我们在第二小节中已经初步介绍过，在 init 的阶段会进行初始化，对数据进行「响应式化」。")]),t._v(" "),s("p",[t._v("为了便于理解，我们不考虑数组等复杂的情况，只对对象进行处理。")]),t._v(" "),s("p",[t._v("首先我们定义一个 cb 函数，这个函数用来模拟视图更新，调用它即代表更新视图，内部可以是一些更新视图的方法。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 渲染视图 */")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"视图更新啦～"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后我们定义一个 defineReactive ，这个方法通过 Object.defineProperty 来实现对对象的「响应式」化，入参是一个 obj（需要绑定的对象）、key（obj的某一个属性），val（具体的值）。经过 defineReactive 处理以后，我们的 obj 的 key 属性在「读」的时候会触发 reactiveGetter 方法，而在该属性被「写」的时候则会触发 reactiveSetter 方法。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineReactive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enumerable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 属性可枚举 */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("configurable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 属性可被修改或删除 */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactiveGetter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 实际上会依赖收集，下一小节会讲 */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactiveSetter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newVal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当然这是不够的，我们需要在上面再封装一层 observer 。这个函数传入一个 value（需要「响应式」化的对象），通过遍历所有属性的方式对该对象的每一个属性都通过 defineReactive 处理。（注：实际上 observer 会进行递归调用，为了便于理解去掉了递归的过程）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineReactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("最后，让我们用 observer 来封装一个 Vue 吧！")]),t._v(" "),s("p",[t._v("在 Vue 的构造函数中，对 options 的 data 进行处理，这里的 data 想必大家很熟悉，就是平时我们在写 Vue 项目时组件中的 data 属性（实际上是一个函数，这里当作一个对象来简单处理）。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Vue构造类 */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样我们只要 new 一个 Vue 对象，就会将 data 中的数据进行「响应式」化。如果我们对 data 的属性进行下面的操作，就会触发 cb 方法更新视图。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am test."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello,world."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 视图更新啦～ */")]),t._v("\n\n")])])]),s("p",[t._v("至此，响应式原理已经介绍完了，接下来让我们学习「响应式系统」的另一部分 ——「依赖收集」。")])])}),[],!1,null,null,null);s.default=e.exports}}]);