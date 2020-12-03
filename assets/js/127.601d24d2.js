(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{429:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuex-동작원리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-동작원리"}},[t._v("#")]),t._v(" vuex 동작원리")]),t._v(" "),a("p",[t._v("앞에서 언급했듯, vuex는 모든 컴포넌트에서 접근 가능 한 "),a("strong",[t._v("store")]),t._v("가 있습니다. "),a("strong",[t._v("store")]),t._v("는 앱내 state를 보유한 컨테이너입니다. 이 "),a("strong",[t._v("store")]),t._v("는 두가지 특이한 법칙이 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("store는 "),a("strong",[t._v("반응형")]),t._v("입니다. vuex 컴포넌트는 어느곳에서든 store에 있는 state를 찾을 수 있고 state가 변경되면 신속하게 view도 변경됩니다.")]),t._v(" "),a("li",[t._v("store안에 있는 state는 view에서 임의 변경 할 수 없습니다. vuex에서 허락한 방식은 "),a("code",[t._v("commit")]),t._v("을 이용한 "),a("code",[t._v("mutations")]),t._v("방법 또는 "),a("code",[t._v("dispatch")]),t._v("를 이용한 방법만 가능합니다."),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("위에서 명시한 방법 그 이외에 강제로 store내의 state에 값을 주입하면 "),a("code",[t._v("vuex warning")]),t._v("을 띄웁니다.")])])])]),t._v(" "),a("p",[t._v("state의 변화는 앞 포스팅에서 말했듯 단방향으로 "),a("code",[t._v("view")]),t._v("에서 "),a("code",[t._v("Dispatch")]),t._v("라는 함수를 동해 "),a("code",[t._v("action")]),t._v("이 발동되고 "),a("code",[t._v("action")]),t._v("안에 정의된 "),a("code",[t._v("commit")]),t._v("함수에 의해 "),a("code",[t._v("mutations")]),t._v("이 실행되고 "),a("code",[t._v("mutations")]),t._v("에 정의된 로직에 따라 "),a("code",[t._v("state")]),t._v("가 변화하고 그 "),a("code",[t._v("state")]),t._v("를 쓰는 "),a("code",[t._v("view")]),t._v("가 변하는 흐름을 따릅니다.")]),t._v(" "),a("p",[t._v("가장 쉬운 예제로 vuex가 어떻게 작동하는지 보겠습니다."),a("br"),t._v("\n먼저 vuex를 설치 후, store를 정의하겠습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("이후 count를 사용하는 vue파일에서 "),a("code",[t._v("store.state")]),t._v("로 접근하여 "),a("code",[t._v("store.commit")]),t._v(" 메소드로 상태 변경합니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"increment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("위의 결과로 "),a("code",[t._v("store.state.count")]),t._v("가 1로 증가합니다.")]),t._v(" "),a("p",[t._v("앞으로 하나의 요소씩 기능 및 사용법에 대해 알아보겠습니다.")]),t._v(" "),a("TagLinks"),t._v(" "),a("Disqus")],1)}),[],!1,null,null,null);s.default=e.exports}}]);