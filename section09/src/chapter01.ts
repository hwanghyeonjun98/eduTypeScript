/**
 * 분산적인 조건문 타입
 */

type StringNumberSwitch<T> = [T] extends [number] ? string : number;
let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

let varC: StringNumberSwitch<number | string>;

/**
 * 실용적 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>

// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 결과
// string