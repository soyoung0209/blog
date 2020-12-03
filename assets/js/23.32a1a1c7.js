(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{497:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"불변성-immutability-패턴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#불변성-immutability-패턴"}},[t._v("#")]),t._v(" 불변성, Immutability 패턴")]),t._v(" "),a("blockquote",[a("p",[t._v("Immutability는 객체가 생성된 후 그 속성을 변경할 수 없는 패턴을 말합니다.\n즉, 쉽게 말해 데이터의 원본이 훼손 되는 것을 막는 것입니다.")])]),t._v(" "),a("p",[t._v("Immutability를 위해서는 먼저 "),a("a",{attrs:{href:"https://kyounghwan01.github.io/lala/primitive-reference/",target:"_blank",rel:"noopener noreferrer"}},[t._v("primitive/reference"),a("OutboundLink")],1),t._v(" 를 먼저 알아야합니다.\n링크 참조하니 보고 오시길 바랍니다.")]),t._v(" "),a("p",[a("code",[t._v("primitive")]),t._v(" 값을 불변하게 만드는 방법은 매우 간단합니다.")]),t._v(" "),a("p",[a("code",[t._v("const")]),t._v(" 를 "),a("code",[t._v("var")]),t._v("나 "),a("code",[t._v("let")]),t._v(" 대신에 사용하시면 됩니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught TypeError: Assignment to constant variable.")]),t._v("\n")])])]),a("p",[t._v("위처럼 "),a("code",[t._v("const")]),t._v(" 이후 값을 바꾸면 Error가 반환됩니다.")]),t._v(" "),a("p",[t._v("또한 원시타입인 "),a("code",[t._v("primitive")]),t._v(" 는 "),a("strong",[t._v("값이 같으면 같은 데이터")]),t._v("를 가리킵니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("위의 예제 처럼 변수가 달라도 값이 같으면 같다고 인지합니다.")]),t._v(" "),a("p",[t._v("그러나 "),a("code",[t._v("reference")]),t._v(" 타입인 "),a("code",[t._v("Object")]),t._v(" 는 "),a("code",[t._v("mutable value")]),t._v(" 라 부르며 위와 다른 결과를 가집니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kim"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kim"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" o2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("p",[t._v("객체는 "),a("strong",[t._v("각자의 고유 데이터 주소")]),t._v("를 가집니다 그 이유는 객체의 경우 속성 값이 바뀔 수 있으므로 같은 값이여도 다른 데이터의 위치를 가지도록 설계되었습니다.")]),t._v(" "),a("p",[t._v("그렇다면 이렇게 다른 주소를 가짐으로 나타나는 차이점을 알아보겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"불변-데이터-패턴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#불변-데이터-패턴"}},[t._v("#")]),t._v(" 불변 데이터 패턴")]),t._v(" "),a("h3",{attrs:{id:"_1-primitive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-primitive"}},[t._v("#")]),t._v(" 1. primitive")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 값이 같으므로 p1,2,3는 동일한 데이터를 가리킴")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// p3만 값이 달라지면 p1,2는 동일한 데이터를 가리키고, p3만 새로운 데이터를 만들어 가리킴, 값이 달라지면 다른 값을 가리킴")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-reference"}},[t._v("#")]),t._v(" 2. Reference")]),t._v(" "),a("ul",[a("li",[t._v("생성할때마다 새로운 데이터 위치를 만든다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" kim "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" kim "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//값은 같으나 다른 데이터")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//o3데이터는 o1 데이터를 가리킴")]),t._v("\no3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lee"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//o3에 의해 o1도 바뀌는 상황, 의도 하지 않았다면 버그 우려")]),t._v("\n")])])]),a("p",[t._v("위 상황은 "),a("code",[t._v("o3")]),t._v("가 "),a("code",[t._v("o1")]),t._v("의 데이터 주소 값을 복사해와서 "),a("code",[t._v("o3.name")]),t._v(" 변경시 "),a("code",[t._v("o1.name")]),t._v("까지 변경되는 상황입니다.")]),t._v(" "),a("h3",{attrs:{id:"원본-데이터를-바꾸지-않고-o3만-변경-객체를-immutability하게-다루기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#원본-데이터를-바꾸지-않고-o3만-변경-객체를-immutability하게-다루기"}},[t._v("#")]),t._v(" 원본 데이터를 바꾸지 않고 o3만 변경 (객체를 immutability하게 다루기)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kim"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//o1자체를 복사")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//복사의 결과값은 값은 같으나 다른 데이터 값을 가리킴")]),t._v("\no1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" o2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\no2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lee"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'kim'")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Object.assign()")]),a("OutboundLink")],1),t._v(" 를 사용하여 "),a("code",[t._v("o1")]),t._v(" 에 대한 데이터를 복사하여 사용하면 "),a("code",[t._v("o2.name")]),t._v(" 을 바꿔서 "),a("code",[t._v("o1.name")]),t._v(" 이 바뀌지 않습니다.")]),t._v(" "),a("p",[a("code",[t._v("Object.assign()")]),t._v(" 은 첫번째 인자( target)는 값을 가져오며, return될 객체를 작성하고 두번째 인자(source)는 하나 이상의 출처 객체(복제할 대상)을 넣습니다.")]),t._v(" "),a("h2",{attrs:{id:"nested-object-중첩된-객체"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-object-중첩된-객체"}},[t._v("#")]),t._v(" Nested Object : 중첩된 객체")]),t._v(" "),a("p",[t._v("위와 동일하지만 "),a("code",[t._v("o1")]),t._v(" 객체안에 "),a("code",[t._v("score:[1,2]")]),t._v(" 인 배열 값이 들어갔습니다.\n"),a("code",[t._v("o2")]),t._v(" 에 객체를 복사하면 primitiver값인 'kim'은 값이 복사되나 reference 값인 배열은 "),a("code",[t._v("o1.score")]),t._v(" 의 배열 주소값이 복사됩니다.\n그리고 "),a("code",[t._v("o2.score.push(3)")]),t._v(" 을 실행하면 "),a("code",[t._v("o1.score =[1,2,3]")]),t._v("이 된 것을 볼 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kim"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" score"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o1과 o2는 다른 위치데이터를 생성함")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// kim은 primitive이므로 복제시 다른 위치에서 값 자체가 복사됨")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// score : [1,2]인 배열의 경우 다른 위치에서 생성된 데이터가 원래 o1 값의 데이터 위치를 가리킴")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Code")]),t._v(" "),a("th",[t._v("value")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("var o1 = {name : 'kim',score : [1,2]};")]),t._v(" "),a("td",[t._v("{name : 'kim', score : }")]),t._v(" "),a("td",[t._v("[1,2]")])]),t._v(" "),a("tr",[a("td",[t._v("var o2 = Object.assign({},o1);")]),t._v(" "),a("td",[t._v("{name : 'kim', score : }")]),t._v(" "),a("td",[t._v("위 [1,2] 데이터 위치")])])])]),t._v(" "),a("h3",{attrs:{id:"o2-score도-다른-데이터-위치를-가리키게-하려면"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#o2-score도-다른-데이터-위치를-가리키게-하려면"}},[t._v("#")]),t._v(" "),a("code",[t._v("o2.score")]),t._v("도 다른 데이터 위치를 가리키게 하려면")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("o2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 원본을 복제함 (인자는 추가할 값)")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Code")]),t._v(" "),a("th",[t._v("value")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("var o1 = {name : 'kim',score : [1,2]};")]),t._v(" "),a("td",[t._v("{name : 'kim', score : }")]),t._v(" "),a("td",[t._v("[1,2]")])]),t._v(" "),a("tr",[a("td",[t._v("var o2 = Object.assign({},o1);")]),t._v(" "),a("td",[t._v("{name : 'kim', score : }")]),t._v(" "),a("td",[t._v("[1,2]")])])])]),t._v(" "),a("p",[t._v("위와 같이 concat 함수를 이용하여 배열을 복사하면 배열도 복사하여 "),a("code",[t._v("o1")]),t._v("과 "),a("code",[t._v("o2")]),t._v("는 완전히 별개의 데이터 주소 값을 가지게 됩니다.")]),t._v(" "),a("h3",{attrs:{id:"응용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#응용"}},[t._v("#")]),t._v(" 응용")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lee"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kim"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {name: "kim"} {name: "lee"}')]),t._v("\n")])])]),a("h2",{attrs:{id:"object-freeze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-freeze"}},[t._v("#")]),t._v(" Object.freeze")]),t._v(" "),a("p",[a("code",[t._v("object.freeze()")]),t._v(" 를 사용하여 불변 객체로 만들수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kim"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" score"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lee"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("Object.freeze(o1);")]),t._v(" 얼리면 푸는 방법 없고, 풀려면 객체를 복제해야합니다.")]),t._v(" "),a("p",[t._v("원시값만 얼려지고, Object 값들은 변경 가능합니다 ( Object는 위치값만 저장됨으로 )")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("o1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1,2,3]")]),t._v("\n")])])]),a("p",[t._v("Object 값까지 얼리려면 "),a("code",[t._v("Object.freeze(o1.score);")])]),t._v(" "),a("h2",{attrs:{id:"const-vs-object-freeze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const-vs-object-freeze"}},[t._v("#")]),t._v(" const vs Object.freeze")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" o1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kim"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" o2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kim"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\no1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const : 변수가 가리키는 값을 변경 못하게 함")]),t._v("\n\no1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lee"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {name : 'kim'}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// freeze : 속성에 대한 값 자체를 변경 못하게 함")]),t._v("\n")])])]),a("TagLinks"),t._v(" "),a("Disqus")],1)}),[],!1,null,null,null);s.default=e.exports}}]);