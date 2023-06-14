/**
 * Exclude<T, U>
 * -> 제외, 추방
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;

/**
 * Rxtract<T, U>
 * -> T에서 U 추출
 */
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

type ReturnType<T extends (...arg: any) => any> = T extends (...arg: any) => infer R ? R : never;

function funcA() {
	return "hello";
}

function funcB() {
	return 10;
}

type RetrunA = ReturnType<typeof funcA>;
type RetrunB = ReturnType<typeof funcB>;