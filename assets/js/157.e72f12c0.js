(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{410:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"github으로-issue-관리하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github으로-issue-관리하기"}},[t._v("#")]),t._v(" github으로 issue 관리하기")]),t._v(" "),a("h2",{attrs:{id:"목차"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#목차"}},[t._v("#")]),t._v(" 목차")]),t._v(" "),a("ol",[a("li",[t._v("새로운 이슈열기")]),t._v(" "),a("li",[t._v("로컬 저장소에 이슈 이름으로 브랜치 생성")]),t._v(" "),a("li",[t._v("이슈해결")]),t._v(" "),a("li",[t._v("수정 사항 커밋 (github이 해당 커밋이 이슈와 관련있다는 것을 알도록 커밋메세지안에 이슈번호를 적어야한다)")]),t._v(" "),a("li",[t._v("master에 머지")]),t._v(" "),a("li",[t._v("이슈 닫기, 프로젝트 done, 브랜치 삭제")])]),t._v(" "),a("h2",{attrs:{id:"새로운-이슈-열기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#새로운-이슈-열기"}},[t._v("#")]),t._v(" 새로운 이슈 열기")]),t._v(" "),a("ul",[a("li",[t._v("깃헙 - issue - New issue 클릭")]),t._v(" "),a("li",[t._v("title과 상세 정보 기입합니다")]),t._v(" "),a("li",[t._v("Projects - github의 Projects를 만들었다면 Projects에서 불러옵니다.")]),t._v(" "),a("li",[t._v("Labels - Labels은 bug, docu 등 디폴스된 태그가 있으며, 커스텀으로 만들 수 있습니다.")]),t._v(" "),a("li",[t._v("milestone - 사전에 issue 탭에서 milestone를 만들고 반영합니다.")]),t._v(" "),a("li",[t._v("Submit new issue를 눌러 이슈를 만듭니다.")])]),t._v(" "),a("h2",{attrs:{id:"로컬-저장소에-이슈-이름으로-브랜치-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로컬-저장소에-이슈-이름으로-브랜치-생성"}},[t._v("#")]),t._v(" 로컬 저장소에 이슈 이름으로 브랜치 생성")]),t._v(" "),a("p",[t._v("이슈 생성시 나온 번호를 기반으로 브랜치를 생성합니다")]),t._v(" "),a("div",{staticClass:"language-tsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[t._v("git checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b 이슈번호\n")])])]),a("h2",{attrs:{id:"이슈-해결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이슈-해결"}},[t._v("#")]),t._v(" 이슈 해결")]),t._v(" "),a("ul",[a("li",[t._v("작업을 완료합니다")])]),t._v(" "),a("h2",{attrs:{id:"수정-사항-커밋-푸시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#수정-사항-커밋-푸시"}},[t._v("#")]),t._v(" 수정 사항 커밋 & 푸시")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git add .\ngit commit\n\n// 터미널 창 뜨면 i누르고\n[이슈번호] 이슈 이름\n- 뭐라뭐라뭐라 이슈를 했다1\n- 뭐라뭐라뭐라 이슈를 했다2\n// 다 적고 esc - :wq로 저장 및 터미널 나옴\n\ngit push origin 이슈번호\n")])])]),a("ul",[a("li",[t._v("깃헙의 아까 만든 이슈에 올린 커밋 메세지가 추적 됬는지 확인합니다.")])]),t._v(" "),a("h2",{attrs:{id:"pull-riquest-올리거나-master에-병합"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-riquest-올리거나-master에-병합"}},[t._v("#")]),t._v(" pull riquest 올리거나 master에 병합")]),t._v(" "),a("p",[t._v("상황에 따라 pr을 올리거나 master에 병합 합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git checkout master\ngit merge 이슈번호\ngit push origin master\n")])])]),a("h2",{attrs:{id:"이슈-닫기-프로젝트-done-브랜치-삭제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이슈-닫기-프로젝트-done-브랜치-삭제"}},[t._v("#")]),t._v(" 이슈 닫기, 프로젝트 done, 브랜치 삭제")]),t._v(" "),a("ul",[a("li",[t._v("이슈가 완료되었다면, "),a("code",[t._v("Close issue")]),t._v("로 닫습니다.")]),t._v(" "),a("li",[t._v("Projects로 들어가서 만든 이슈를 "),a("code",[t._v("done")]),t._v("으로 바꿉니다.")]),t._v(" "),a("li",[t._v("완료된 리모트 브랜치, 로컬 브랜치를 삭제합니다")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git push origin -d 이슈번호 && git branch -d 이슈번호\n")])])]),a("TagLinks"),t._v(" "),a("Disqus")],1)}),[],!1,null,null,null);s.default=r.exports}}]);