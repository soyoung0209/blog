(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{379:function(t,a,s){"use strict";s.r(a);var e=s(25),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"면접-준비"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#면접-준비"}},[t._v("#")]),t._v(" 면접 준비")]),t._v(" "),s("h2",{attrs:{id:"js-이벤트-루프"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-이벤트-루프"}},[t._v("#")]),t._v(" js 이벤트 루프")]),t._v(" "),s("ul",[s("li",[t._v("싱글 스레드 -> 일하는 주체가 하나라는 말 -> 하나의 작업만 처리 가능\n-> 그러나 js를 많은 작업을 동시에 처리하는 것처럼 보인다.\n-> 이벤트 루프때문에 가능하다\nv8엔진 브라우저나 node.js가 담당한다")])]),t._v(" "),s("h3",{attrs:{id:"콜스택"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#콜스택"}},[t._v("#")]),t._v(" 콜스택")]),t._v(" "),s("ul",[s("li",[t._v("js는 하나의 콜스택을 사용한다 (run to completion) 하나의 함수 종료전까지 다른 함수를 실행하지 않는다.")]),t._v(" "),s("li",[t._v("요청이 들어오면 순차적으로 호출스택에 담아 처리 - 호출스택에 push되고 queue에 아무것도 없으면 pop되는 형식")])]),t._v(" "),s("p",[t._v("비동기 함수는 콜스택에 쌓이지 않고 테스크 큐에 들어간다 웹 api에 적용된 함수들은")]),t._v(" "),s("p",[t._v("settimeout 함수는 콜스택에 들어간 후 바로 빠져나온다. 그이후, settimeout내부 로직은 이벤트 큐영역에 들어감 이후 콜스택이 모두 비게되면 그때 이벤트 큐에있는 스택을 하나 가져와 콜스택에 넣는다.")]),t._v(" "),s("p",[t._v("js가 비동기를 하는 원리는\njs 엔진에는 이벤트 루프가 있기 때문이다.\n이벤트 루프는 콜스택과 테스크큐, 마이크로 테스크큐가있다\n이벤트 루프는 콜스택과 큐를 지속적으로 감지하여 큐가 비었다면 콜스텍에 있는 작업을 넣어준다.")]),t._v(" "),s("p",[t._v("큐에는 우선순위가 있다 마이크로 테스크, 테스크 순이다.\n이 우선순위에 의해 비동기가 작동한다")]),t._v(" "),s("p",[t._v("프로미스에 의해 작업이 실행되면 내부 로직은 마이크로 테스크에 들어가고, then으로 불러오는 로직도 마이크로 테스크로 들어간다.")]),t._v(" "),s("p",[t._v("이 때문에")]),t._v(" "),s("h2",{attrs:{id:"스코프"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스코프"}},[t._v("#")]),t._v(" 스코프")]),t._v(" "),s("p",[t._v("변수의 유효범위 - var는 전역 유효범위를 가지고, 함수내 정의한경우 functional 스코프를가짐 let, const는 블록 스코프를 가진다")]),t._v(" "),s("h2",{attrs:{id:"클로저"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#클로저"}},[t._v("#")]),t._v(" 클로저")]),t._v(" "),s("p",[t._v("함수 내부에 함수를 작성할때마다 클로저 생성된다\n내부 함수는 외부 함수의 값을 ㅍ참조할 수 있기 때문이다")]),t._v(" "),s("h2",{attrs:{id:"이직사유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이직사유"}},[t._v("#")]),t._v(" 이직사유")]),t._v(" "),s("p",[t._v("현재 회사가 bep가 마이너스이고, 개발자 2명이 권고사직하고, 회사가 낙후된 곳으로 이사하고, 투자받기위한 ppt를 만들고, 투자받으러 다니는거 보면서 곧 더있으면 월급이 밀릴수있다는 가능성을 봤기 떄문에 이직을 하게되었습니다.")]),t._v(" "),s("p",[t._v("의도")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("지원자가 회사에 잘 적응하는가? 오래 일하는 사람스가?")])]),t._v(" "),s("li",[s("p",[t._v("인성 가치관 - 협업")])]),t._v(" "),s("li",[s("p",[t._v("상사트러블, 회사 이런부분 맘에 안듬, 급여 x")])]),t._v(" "),s("li",[s("p",[t._v("도전적인말을하자\n현재보다 더큰 유저 풀을 가진 회사에서 일해보고 싶었습니다.")])])]),t._v(" "),s("p",[t._v("현재보다 더 큰 회원 관리하거나, 체육시설 예약 및 강사 근무시간 관리, sms 메일 전송, 게시판 관리 같은 백오피스 웹을 개발하였습니다. 하이웍스 그룹웨어를 제가 한")]),t._v(" "),s("p",[t._v("현재 회사에 대한 심각한 어려움은 없습니다. 개발과도 잘맞고 동료들과도 즐겁게 일해왔습니다")]),t._v(" "),s("p",[t._v("그러나 계속 일하면서 마음에 드는 생각이 회사 분위기, 동료도 중요하지만\n저 개인의 성장과 경험이 중요하다는 것입니다.")]),t._v(" "),s("h2",{attrs:{id:"자소서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#자소서"}},[t._v("#")]),t._v(" 자소서")]),t._v(" "),s("p",[t._v("안녕하세요 웹 개발자 노경환입니다.\n저는 vue를 이용하여 체육시설 예약 프로그램을 개발한 경험이 있습니다. 이 과정에서 sms, 게시판, 알람 전송 기능을 완성하였습니다. 이 과정을 통해 개발팀과 기획과 디자이너간의 의사 소통 중요성을 배웠습니다. 또한 개발 과정에서의 자바스크립트와 vue의 활용법 및 에러 상황을 개발 블로그에 정리함으로 온전히 제 지식으로 만들 수 있었습니다. 기능 개발을 통해 얻는 경험과 협업에 대한 이해를 바탕으로 업계 1위를 지키는 하이웍스에서 좋은 사용자 경험을 제공하고 싶습니다")]),t._v(" "),s("h2",{attrs:{id:"차별화된-본인의-강점-성공경험"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#차별화된-본인의-강점-성공경험"}},[t._v("#")]),t._v(" 차별화된 본인의 강점 (성공경험)")]),t._v(" "),s("p",[t._v("저는 2번이상 중복으로 사용되는 컴포넌트 따로 분리하고 및 함수를 필터 함수와, mixins으로 뭉치면서 코드양을 반복수만큼 줄인 경험이 있습니다. 이후, 같은 기능을 개발 할 때, 짧은 시간으로 개발을 하게 되었습니다. 또한 문서화하는 습관으로 이전에 겪은 에러는 쉽게 해결 할 수 있었습니다.")]),t._v(" "),s("h2",{attrs:{id:"지원동기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#지원동기"}},[t._v("#")]),t._v(" 지원동기")]),t._v(" "),s("p",[t._v("저는 업무지원하는 백오피스 분야에 관심이 많습니다. 하이웍스에 처음 접속했을때 제가 개발한 웹의 상위호환이라는 것을 게시판, 문자, 예약 기능을 보면서 느꼈습니다. 하이웍스의 추가될 기능 또는 개선 되어야 할 기능에 웹 프론트 분야에서 제가 기능 개발을 통해 얻는 경험이 기여할 수 있다고 생각하여 지원하게 되었습니다.")]),t._v(" "),s("h2",{attrs:{id:"성격의-장단점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#성격의-장단점"}},[t._v("#")]),t._v(" 성격의 장단점")]),t._v(" "),s("p",[t._v("저는 어떤 환경이 닥쳐도 적응력이 매우 뛰어납니다")]),t._v(" "),s("p",[t._v("vue로 웹 개발을 하던 중 하이브리드 앱을 react로 웹뷰로 만들라는 지시에 따라 react 현재 트랜드를 숙지하여 초기 환경설정부터 현재 개발을 진행하며 기존 vue 웹 개발도 같이 진행하고 있습니다.")]),t._v(" "),s("p",[t._v("저는 이 뛰어난 적응력의 기반을 메모하는 습관이라고 생각합니다.")]),t._v(" "),s("p",[t._v("오류가 나면 오류를 메모하고 해결책을 블로그에 올립니다. 또 같은 오류가 나면 블로그를 들어가 빠르게 에러를 해결합니다. 오류로 인한 시간을 줄이면 개발 시간이 줄어들고 다른 업무를 볼 수 있기에 처음 들어가는 프로젝트에서도 빠르게 적응할 수 있었습니다.")]),t._v(" "),s("p",[t._v("단점으로는 12시를 넘으면 잠을 못참습니다")]),t._v(" "),s("p",[t._v("남들보다 가용시간이 적기 때문에 매우 큰 단점입니다. 이것을 고치기 위해 늦게 잠을 청하면 다음날 업무 능률이 너무 나빠져서, 남들보다 가용시간이 적은 만큼 주어진 시간에 몰입하여 집중하는 습관을 길렀습니다 야근을 할 경우 또는 제가 속한 회사는 매주 수요일 11시에 배포를 하는 특수한 경우는 퇴근 후 바로 잠에 들어 업무에 지장이 없도록 합니다.")]),t._v(" "),s("h2",{attrs:{id:"질문"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#질문"}},[t._v("#")]),t._v(" 질문")]),t._v(" "),s("p",[t._v("하이웍스들어가보니 어떤 화면은 vue로 어떤 화면은 전통적인 html로 구성되어있는데, 웹개발자 채용하는 이유가 컨버팅을 위해서 하는거인가요?")]),t._v(" "),s("p",[t._v("도메인 등록 서비스를 제공하고, 클라우드 서비스를 제공하고 있다. 클라우드 서비스 보안 인증을 받았다는 점, 서버 호스팅서비스로 서버를 임대시켜 중소기업이 서버를 직접 운영하지 않고도 서버,db를 가질 수 있다. 그룹웨어는 분산된 정보를 종합적으로 처리해 업무과정을 표준화시켜 기업이 자신들의 사업에 집중하도록 도와준다.\n회사에 대해 아는대로말해봐")]),t._v(" "),s("p",[t._v("저는 체육시설의 예약관리, 회원관리, 강사 시간관리 문자 전송, 알림 전송 같은 회사의 백오피스 관련된 웹을 뷰를 이용하여 개발하고 있고, 기존 네이티브 앱을 react를 이용해 하이브리드 앱을 제작하고 있습니다. 제가 개발 한 업무가 하이웍스 그룹웨어의 웹페이지와 기능상 닮은 점이 많아 지원하게 되었습니다 감사합니다.")]),t._v(" "),s("p",[t._v("의도 성과 명확한거질문받기 좋은거\n성공경험")]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" api")]),t._v(" "),s("p",[t._v("웹과 서버가 어떤 방식으로 어떤 규칙에 의해 데이터를 response request할지 정한 규격")]),t._v(" "),s("h2",{attrs:{id:"firebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firebase"}},[t._v("#")]),t._v(" firebase")]),t._v(" "),s("ol",[s("li",[t._v("웹에 접속하면 파이어베이스틑 서포팅하는지 확인을 함 - 서포팅을 하면 파이어베이스를 연결시켜주켜주고, 토큰값을 요청해서 나온 토큰값을 서버에 전송, 사용자가 화면을 보고 있는 포그라운드 상황과 백그라운드상황에 맞춰 다른 함수를 호출한다. 서포팅을 하지 않으면 기능이 안된다는 알림을 띄운다")])]),t._v(" "),s("h2",{attrs:{id:"이직사유-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이직사유-2"}},[t._v("#")]),t._v(" 이직사유")]),t._v(" "),s("h2",{attrs:{id:"관심을-보이자고"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#관심을-보이자고"}},[t._v("#")]),t._v(" 관심을 보이자고")]),t._v(" "),s("p",[t._v("주소록, 메일은 view 나머지는 아닌듯")]),t._v(" "),s("h2",{attrs:{id:"무얼했고-뭘-얻었는지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#무얼했고-뭘-얻었는지"}},[t._v("#")]),t._v(" 무얼했고 뭘 얻었는지")]),t._v(" "),s("h3",{attrs:{id:"타입스크립트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#타입스크립트"}},[t._v("#")]),t._v(" 타입스크립트")]),t._v(" "),s("ul",[s("li",[t._v("타입스크립트는 동적 언어인 자바스크립트에 타입을 더한 자바스크립트보다 상위 확장의 개념입니다")]),t._v(" "),s("li",[t._v("자바스크립트와 타입스크립트 둘다 지원가능하게 만들었기에 운영되는 프로젝트에 검증후 바로 넣는 방식으로 조금씩 바꿨습니다")]),t._v(" "),s("li",[t._v("타입스크립트는 es6이상 모두를 지원하기 때문에, 브라우저 호환때문에 바벨을넣는 수고를 덜 할 수 있었습니다.")]),t._v(" "),s("li",[t._v("정적 타입이기때문에 컴파일단에서 에러를 잡아주기에 디버깅에 시간이 덜 들었습니다.")]),t._v(" "),s("li",[t._v("ms가 ts를 만들었고, vscode도 ms가 만들어서 둘이 같이 사용하면 에러에 대한 어시스트를 받을 수 있었습니다.\n컴파일 과정 -> ts 컴파일시 js로 출력하고 최종적으로 js 코드로 구동됨")])]),t._v(" "),s("h2",{attrs:{id:"크로스-브라우징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#크로스-브라우징"}},[t._v("#")]),t._v(" 크로스 브라우징")]),t._v(" "),s("ul",[s("li",[t._v("모든 브라우저가 깨지지 않고 의도한대로 나오게 하는작업")]),t._v(" "),s("li",[t._v("브라우저마다 렌더링 엔진이 달라서\n특정 브라우에만 존재하는 함수, 프로퍼티 유무 확인\n해당하는경우 html, body 태그의 클래스에 축가\ncss에 해당 브라우저만 적용하도록 스타일 추가")])]),t._v(" "),s("p",[t._v("기술에 대한 이해")]),t._v(" "),s("ul",[s("li",[t._v("react : 프론트엔드 라이브러리 - 웹앱을 개발하는 라이브러리 - 가상돔기반으로 가볍고 컴포넌트기반으로 재사용성뛰어남, state와 props를 가진다")]),t._v(" "),s("li",[t._v("vue: 프론트엔드 프레임워트: 재사용성 가능한 ui를 묶어서 하나의 파일로 만듬, 가상돔 사용, mvvm - model-view-viewmodel 로직과 ui의 분리를 위해 설계된 패턴 - 웹은 돔과 js로 만들어지는데, 돔이 view역할 js가 모델역할을 한다 뷰모델이 없으면 직접 모델과 뷰를 연결해야함 이걸 연결하는게 mvvm모델")])]),t._v(" "),s("p",[t._v("가상돔\n돔요소가 많아지면서 js로 돔을 핸들링하는게 무거워짐 -> 돔과 비슷한 구조로 js를 만듬\n->이것은 가상돔으로 메모리에 올라가있어 비교적 빠르다")]),t._v(" "),s("h2",{attrs:{id:"생명주기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#생명주기"}},[t._v("#")]),t._v(" 생명주기")]),t._v(" "),s("ul",[s("li",[t._v("creation, mounting updation destroy")])]),t._v(" "),s("h3",{attrs:{id:"beforecreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate"}},[t._v("#")]),t._v(" beforeCreate")]),t._v(" "),s("ul",[s("li",[t._v("가장먼저 실행됨 - 아직 data, event 세팅안됨")])]),t._v(" "),s("h3",{attrs:{id:"created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),s("ul",[s("li",[t._v("data, event생성됨 but dom은 생성안됨")])]),t._v(" "),s("h3",{attrs:{id:"mounted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),s("ul",[s("li",[t._v("data, event, dom 생성 - 하위 컴포넌트가 모두생성된것은 보장안됨 - nextTrick을 이용하면 전체 돔 구성시 작동 가능")])]),t._v(" "),s("h3",{attrs:{id:"updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[t._v("#")]),t._v(" updated")]),t._v(" "),s("ul",[s("li",[t._v("반응형 속성이 바뀌면 재렌더링이 되는데 이때 실행됨\n여기에서 state 변경시 무한루프 - mounted와 동일하게 nextrick")])]),t._v(" "),s("h3",{attrs:{id:"destroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy"}},[t._v("#")]),t._v(" destroy")]),t._v(" "),s("ul",[s("li",[t._v("컴포넌트가 해체된후 호출됨")]),t._v(" "),s("li",[t._v("스크롤같이 돔을 잡아준 함수가 있다면 필히 제거해줘야한다,")])]),t._v(" "),s("h2",{attrs:{id:"fcm-구동원리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fcm-구동원리"}},[t._v("#")]),t._v(" fcm 구동원리")]),t._v(" "),s("ul",[s("li",[t._v("웹이 최초 실행되면 웹을 식별하기 위한 토큰이 v파이어베이스로부터 발행되고 이 토큰을 서버에 등록한다")]),t._v(" "),s("li",[t._v("서버에서 fcm 연결 서버로 푸시알림을 요청한다. 이때 준비물은 초기에 보낸 웹 등록 토큰과 api 서버키이다.")]),t._v(" "),s("li",[t._v("fcm 연결 서버는 토큰을 가진 웹으로 알림 메세지를 보낸다 그럼 웹이 알림 메세지를 수신한다")])]),t._v(" "),s("h2",{attrs:{id:"하이브리드앱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#하이브리드앱"}},[t._v("#")]),t._v(" 하이브리드앱")]),t._v(" "),s("p",[t._v("네이티브 앱처럼 하드웨어 기능을 수행할수있고 마켓에도 등록이 가능하며 배포후에는 웹만 변한다는 가정하에, 심사 없이 바로 변경가능하다. 또한 하나의 소스로 안드로이드 아이폰 모두 호환이 가능함으로 개발 비용이 적어질수있다.")]),t._v(" "),s("h2",{attrs:{id:"vue-class형으로-했을때-장점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-class형으로-했을때-장점"}},[t._v("#")]),t._v(" vue class형으로 했을때 장점")]),t._v(" "),s("p",[t._v("vue에 타입스크립트 도입시")]),t._v(" "),s("ul",[s("li",[t._v("다른 문서에도 그렇지만 객체 형태로 vue를 작성하면 props으로 내린 값에 타입스크립트 타입을 지정할수없었습니다.")])]),t._v(" "),s("p",[t._v("그게 현재 2버전의 vue의 고질적인 문제이다. 그래서 3버전의 vue에서 정식적으로 ts를 지원하겠다고 공표했는데 아직도 3버전이 안나온상황입니다")]),t._v(" "),s("h2",{attrs:{id:"chartjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chartjs"}},[t._v("#")]),t._v(" chartjs")]),t._v(" "),s("p",[t._v("라이브러리에서 원하는 값 포맷을 맞춰서 넣으면 차트로 생성해준다\n나눠져있는 값을 효율적으로 맵핑하기위해 하나의 함수에서 한번의 실행으로 모든 차트의 맵핑 값을 처리하도록 분기처리하였습니다.")]),t._v(" "),s("h2",{attrs:{id:"socket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#socket"}},[t._v("#")]),t._v(" socket")]),t._v(" "),s("ul",[s("li",[t._v("웹소켓은 웹과 서버간 양방향 채널을 구성하는 방법")]),t._v(" "),s("li",[t._v("http통신은 웹에서 request res받으면 통신을 종료한다")]),t._v(" "),s("li",[t._v("socket은 꼐속 유지하다가 끊고 싶을대 끊는다\nio.connect url로 연결하고,\nemit(액션이름, 데이터)로 서버로 넘기고\non(액션이름, 함수로) 서버에서 보낸것을 받는다")])]),t._v(" "),s("p",[t._v("서버도 동일하게 io로 받고 emit으로 보낸다\n소켓을쓰지 않는 컴포넌트에서는 컴포넌트가 삭제될깨 disconnect를 해줘야 하는데 native의 경우는 willunmount에서 제대로 삭제되지 않음 addListener('didBlur', callback)로 socket연결을 끊어줬음")]),t._v(" "),s("h2",{attrs:{id:"jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" jwt")]),t._v(" "),s("p",[t._v("json web token")]),t._v(" "),s("ul",[s("li",[t._v("회원인증을 하기 위해 사용했고,\n과정은\n회원가입을 하기위해 웹에서 id, 비번을 주면, jwt의 sign메소드에 담고 키값을 넣어서 디비에 저장후, 로그인을 위해 아이디랑 비밀번호를 넣으면 verify함수에 넣어서 해석된 해쉬값과 저장된 해쉬값이 같은지 비교하는 방법으로 인증했다")])]),t._v(" "),s("h2",{attrs:{id:"트리구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#트리구조"}},[t._v("#")]),t._v(" 트리구조")]),t._v(" "),s("ul",[s("li",[t._v("list 내부에 일한 구조를 가진 리스트를 넣어서")]),t._v(" "),s("li",[t._v("data가 있으면 같은 컴포넌트를 재귀로 돌려서 트리구조 완성")])]),t._v(" "),s("h2",{attrs:{id:"힘들었던-경험"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#힘들었던-경험"}},[t._v("#")]),t._v(" 힘들었던 경험")]),t._v(" "),s("p",[t._v("개발 초기에는 git 사용하는데 애먹었던 기억이 납니다.\n기능 개발을 다하고 push를 했는데, 들어가지 말아야한 브랜치에 코드가 들어가는 바람에 되돌리는데 시간을 많이썼습니다. 이미 푸시를 한상태로 reset을 해봤자, 제 로컬 git 만 과거로 돌리기때문에 revert한 후에 컨플릭 난부분을 하나하나 고쳤던 기억이 있습니다\n그 이후로 프로젝트 완료후 푸시할때 pull request 남겨서 대상브랜치 맞는지 코드 불필요한 곳없는지 체크하고 병합하고 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"drag-drop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drag-drop"}},[t._v("#")]),t._v(" drag & drop")]),t._v(" "),s("p",[t._v("li의 내부 속성을 이용해서 구현했다\nonDragStart : drag가 시작될때 속성\nonDrop: 떨어질떄\nonDoubleClick")]),t._v(" "),s("h2",{attrs:{id:"vue-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-model"}},[t._v("#")]),t._v(" vue model")]),t._v(" "),s("ol",[s("li",[t._v("lazy: 기본적으로, v-model은 하나의 키 입력 이벤트가 발생할 때마다 data가 업데이트됩니다. 이를 방지하기 위해서는 .lazy 수식어를 이용합니다.")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- synced after "change" instead of "input" --\x3e')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model.lazy")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"beforerouteenter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforerouteenter"}},[t._v("#")]),t._v(" beforeRouteEnter")]),t._v(" "),s("p",[t._v("네비게이션 가드 권한 체크해서 없으면 다른화면으로")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" authorized "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canCreateProduct "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canUpdateProduct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("authorized"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'오류'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'권한이 없습니다.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/products'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"_1-자신이-진행했던-프로젝트를-기술하고-본인이-기여한-부분을-구체적으로-서술하세요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-자신이-진행했던-프로젝트를-기술하고-본인이-기여한-부분을-구체적으로-서술하세요"}},[t._v("#")]),t._v(" 1. 자신이 진행했던 프로젝트를 기술하고 본인이 기여한 부분을 구체적으로 서술하세요.")]),t._v(" "),s("h2",{attrs:{id:"_2-프로그램-개발-시-가장-중요시하는-부분이-무엇인지-또-그-이유는-무엇인지-서술하세요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-프로그램-개발-시-가장-중요시하는-부분이-무엇인지-또-그-이유는-무엇인지-서술하세요"}},[t._v("#")]),t._v(" 2. 프로그램 개발 시 가장 중요시하는 부분이 무엇인지, 또 그 이유는 무엇인지 서술하세요.")]),t._v(" "),s("h2",{attrs:{id:"_3-개발자로서의-역량-향상을-위한-자기계발-활동이-있다면-구체적으로-서술하세요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-개발자로서의-역량-향상을-위한-자기계발-활동이-있다면-구체적으로-서술하세요"}},[t._v("#")]),t._v(" 3. 개발자로서의 역량 향상을 위한 자기계발 활동이 있다면 구체적으로 서술하세요.")]),t._v(" "),s("h2",{attrs:{id:"_4-활발하게-활동하는-외부-개발-모임-커뮤니티가-있다면-서술하세요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-활발하게-활동하는-외부-개발-모임-커뮤니티가-있다면-서술하세요"}},[t._v("#")]),t._v(" 4. 활발하게 활동하는 외부 개발 모임, 커뮤니티가 있다면 서술하세요.")]),t._v(" "),s("p",[t._v('임원 면접으로 포부와 해당 직무를 선택한 이유와 앞으로의 커리어에 대한 질문"\n실패했다가 극복한 경험과 같은 어려운 상황 속에서 어떻게 헤쳐나갔는')]),t._v(" "),s("p",[t._v("자기소개, 지워동기, 10년후\n하기싫은일 어떻게 해결\n지원 이유나 어떤 역량을 보여 줄 수 있는지에 대한 질문을 받았습니다.\n직무에 대한 깊은 고민과")]),t._v(" "),s("p",[t._v("왜 가비아인지, 내가 살아온 과정을 되돌아보신 분이라면\n어렵지 않게 대답 하실 수 있습니다.\n말 그대로 임원면접은 '인성'면접이었습니다.")])])}),[],!1,null,null,null);a.default=r.exports}}]);