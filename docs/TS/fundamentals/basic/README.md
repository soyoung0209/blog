---
title: typescript - 기본 타입
meta:
  - name: description
    content: typescript - 기본 타입
  - property: og:title
    content: typescript - 기본 타입
  - property: og:description
    content: typescript - 기본 타입, ts, ts 기본 문법
  - property: og:url
    content: https://kyounghwan01.github.io/blog/TS/basic/
tags: ["TS"]
---

# 타입스크립트 기본 타입

타입 스크립트의 기본 타입에 대해 알아봅니다.

## boolean

```ts
const bol: boolean = true;
```

## number

```ts
const naturalNumber: number = 100;
const integer: number = 0.1;
```

## string

```ts
const hangle: string = "한글";
```

## null / undified

```ts
const a: null = null;
const b: undefined = undefined;
```

## object

- 필수 속성 : 해당 속성이 없으면 에러 도출

```ts
const required: { name: string; age: number } = { name: "nkh", age: 999 };
```

- 선택 속성 : 꼭 없어도 되는 속성 하지만 있다면 타입을 맞춰야함, `?`를 붙인다

```ts
const selection: { name: string; age?: number } = { name: "nkh" };
```

- 읽기 전용 속성 : 읽기만 가능하고 재할당 금지, cons와 비슷한 기능

```ts
const readOnly: {readOnly name: string} = {name: "nkh"}
//readOnly.name = 'error' - 재할당 불가
```

## array

```ts
// string만 받는 배열
const onlyString: string[] = ["a", "b"];
// 제네릭
const onlyString: Array<string> = ["a", "b"];

// number만 받는 배열
const onlyNumber: number[] = [1, 2];
// 제네릭
const onlyNumber: Array<number> = [1, 2];

//여러가지 오면 any 타입으로 정의
```

## tuple

튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되이 있는 배열 형식입니다.

```ts
const arr: [string, number] = ["string", 10]; // 배열의 길이 및 타입이 고정됩니다. 정의 되지 않은 타입, 인덱스로 접근시 오류가 납니다.
```

## Enum

상수의 집합입니다. html의 option 태그 같이 어떠한 종류에 대한 지정된 타입이 들어오는 경우 틀린 상수 값이 들어오는 것을 막기 위해 Enum으로 상수의 집합을 만들고, 그 이외의 값은 받지 않습니다.

```ts
enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio"
}
const str: PhoneType = PhoneType.Home;
```

## any

말 그대로 모든 타입을 허용한다는 의미입니다. 자바스크립트로 된 파일을 타입스크립트로 바꿀 경우 한번에 데이터를 정적인 타입으로 바꾸는 것이 어렵기에 천천히 타입을 적용하기 위해 일단 모든 데이터에 대해 `any`로 적용하고, 점진적으로 정적 타입으로 값을 적용합니다.

```ts
const anyType: any = ["ddd", 2, true];
```

## void

변수에는 `undefined`, `null`만 할당이 가능하고, 함수에는 return 값이 없을 때, 설정하는 타입입니다.

```ts
const unuseData: void = undefined;

function notReturnValue(): void {
  console.log(1);
}
```

## never

해당 함수의 맨 마지막까지 도달하지 않는다는 타입
절대로 발생하지 않는 값으로 에러 핸들링 함수에서 사용한다.<br>
주로 함수의 리턴 타입으로 에러가 발생할 경우 에러를 무시하고 계속 진행시키는 역할을 합니다.<br>
또는 대체 불가한 값을 만들 때 사용한다. **재할당 불가**

```ts
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd(): never {
  while (true) {
    ...
  }
  // 여기는 도달하지 않아요
}

function errorThrow(): never {
  //에러 발생한 경우 중지하지 않고 throw 함수 실행
  throw new Error("error");
}
```

## union

- union 타입은 하나의 변수에 여러 타입을 지정할 수 있습니다. 여러 타입을 지정하고 싶은 경우 `|`를 사용합니다.

```ts
let value: string | number = "foo";
value = 100; //ok
value = "bar"; //ok
value = true; //error
```

### union 인터셉션

- `|`는 또는 이라면 `&`는 and 입니다.

```ts
interface Test {
  name: string;
  skill: string;
}
interface Test2 {
  name: string;
  age: string;
}

function ask(someone: Test | Test2) {
  console.log(someone.name); // interface의 공통 속성으로 접근 가능
  // someone.skill, age는 공통속성이 아니므로 접근 불가능

  // 접근하고 싶다면 타입 가드로, 하나의 타입만 필터링 한 경우만 활용 가능
}

// &를 이용하면 3개의 속성 활용 가능 (인터섹션)
function ask(someone: Test & Test2) {
  // Test와 Test2 두개의 interface를 포함하게 타입 정의
  console.log(someone.name);
  console.log(someone.skill);
  console.log(someone.age);
}
```

- |를 쓰면 함수 호출시 두개의 인터페이스 중 1개만 보장해주면 되나, &를 쓰면 함수 호출시 두개의 인터페이스 타입을 다 보장해줘야하므로 |를 좀 더 많이 쓴다.

### union 타입 가드

- 여러 타입을 사용하면 해당 값의 타입에 따라 분기 처리할 때가 있습니다. 이럴 경우 각 타입에 따라 조건문을 만들어 주시면 됩니다.

```ts
function unionIter(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value;
}
```

<TagLinks />

<Disqus />