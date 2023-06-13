# TypeScript Type

## 기본 타입

### 원시 타입 (Primitive Type)

- 하나의 값만 저장 가능
- 관련 메소드 만 사용 가능
- number, string, boolean, null, undefined, 리너널 타입

#### number: 모든 숫자 타입(음수(소수), 양수(소수), 0, infinity, -infinity, NaN)

``` typescript
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;
```

- tsconfig.json에 <code>"strictNullChecks": false</code>를 설정하면 다른 타입에 null을 임시로 넣을 수 있다.

#### string: 모든 문자열 가능("", '', ``, template literal)

```typescript
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;
```

#### boolean: true, false

```typescript
let bool1: boolean = true;
let bool2: boolean = false;
```

#### null

```typescript
let null1: null = null;
```

#### undefined

```typescript
let undefined1: undefined = undefined;
```

#### Literal : 값으로 타입을 지정 할 수 있다.(정해진 값으로면 사용해야함.)

```typescript
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
```

### 배열(Array), 튜플(Tuple)

#### 배열(Array)

- type[] 또는 Array<type(generic)> 2가지 방식으로 정의가 가능

```typescript
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "jjun"];
let boolArr: Array<boolean> = [true, false, true];
```

- 배열의 타입이 다를 경우

```typescript
let mutiArr: (number | string)[] = [1, "hello"];
```

- 다차원 배열일 경우

```typescript
let doubleArr: number[][] = [
	[1, 2, 3,],
	[4, 5]
];
```

#### 튜플(Tuple)

- 길이와 타입이 고정된 배열

```typescript
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
	["jjun", 1],
	["user1", 2],
	["user2", 3],
	// [4, "user3"]
];
```

### 객체(object)

- 객체 타입 정의 시 object가 아닌 <code>{[key]: [tpye]}</code>형식 인 객체 리터널 타입으로 정의

```typescript
let user: {
	id: number;
	name: string;
} = {
	id  : 1,
	name: "jjun"
};
```

- key 값이 필수가 아닌 경우 <code>{[key]?: [tpye]}</code> optional property("?") 사용

```typescript
let user: {
	id?: number;
	name: string;
} = {
	id  : 1,
	name: "jjun"
};

user = {
	name: "홀길동"
}
```

- object에 값이 바뀌면 안되는 경우에는 <code>readonly</code>를 사용

```typescript
let config: {
	readonly apiKey: string;
} = {
	apiKey: "my api key"
};
```

### 타입 별칭(Type Aliases), 인덱스 시그니처(Index Signatures)

#### 타입 별칭(Type Aliases)

- 타입 별칭을 선언 할 때 같은 스코프내에서는 사용 불가
- function 내에 선언시 function 안에 있는 타입 별칭이 사용됨.
- 타입 별칭도 컴파일 시 js에서는 제거

```typescript
type User = {
	id: number;
	name: string;
	nickname: string;
	birth: string;
	bio: string;
	location: string;
}

let user: User = {
	id      : 1,
	name    : "jjun",
	nickname: "j",
	birth   : "1998.11.28",
	bio     : "안녕하세요.",
	location: "서울시"
};
```

#### 인덱스 시그니쳐(Index Signatures)

- key와 value가 규칙 적일 때 사용
- <code>[key: [type]]: string</code>으로 작성

```typescript
type ConutryCodes = {
	[key: string]: string
}

let conutryCodes: ConutryCodes = {
	Korea        : "ko",
	UnitedState  : "us",
	UnitedKingdom: "uk"
};
```

- 인덱스 시그니처 주의 점
	- 인덱스 시그니처가 비여 있으면 빈 객체도 허용됨
	- 특정 필수 값이 있어여 한다면 인덱스 시그니처 뒤 원하는 값 적용
	- 인덱스 시스니쳐의 타입과 추가 프로퍼티 타입이 동일 해야 함

```typescript
type ConutryNumbreCodes = {
	[key: string]: number;
	Korea: number;
}

let conutryNumbreCodes: ConutryNumbreCodes = {
	Korea: 410
};
```

### 열거형 타입(Enumerable Type)

- 여러가지 값의 이름을 부여해 열거하는 타입
- 타입 별칭과 사용방법 동일

```typescript
enum Role {
	ADMIM = 0,
	USER  = 1,
	GEUST = 2,
}

enum Language {
	Korean  = "ko",
	english = "en"
}

const user1 = {
	name    : "jjun",
	role    : Role.ADMIM, // 0 <- 관리자
	language: Language.Korean
};

const user2 = {
	nmae: "hong",
	role: Role.USER // 1 <- 일반유저
};

const user3 = {
	nmae: "kim",
	role: Role.GEUST // 2 <- 게스트
};
```

- 숫자형 enum은 할당을 안해도 자동으로 할당
- 처음 숫자가 10이면 밑에도 자동 할당
- 중간에 할당 가능

```typescript
enum Role1 {
	ADMIM,
	USER,
	GEUST,
}

enum Role2 {
	ADMIM = 10,
	USER, // <- 11
	GEUST,// <- 12
}

enum Role3 {
	ADMIM,
	USER = 10,
	GEUST,
}
```

### Any Type, Unknown Type

#### Any

- 특정 변수의 타입을 확실히 모를때 사용
- 모든 타입에 모든 변수를 집어 넣을 수 있다.

```typescript
let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;
```

#### Unknown

- Any 타입과 비숫하지만 다른 타입에 할당 할 수 없다.

```typescript
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {
};

num = unknownVar;
```