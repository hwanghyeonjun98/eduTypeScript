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

#### 리터널 : 값으로 타입을 지정 할 수 있다.(정해진 값으로면 사용해야함.)

```typescript
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
```

### 배열(array), 튜플(tuple)

#### 배열(array)

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
