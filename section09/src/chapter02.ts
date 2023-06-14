/**
 * infer
 */

type FuncA = () => string;
type FuncB = () => number;

type RetrunType<T> = T extends () => infer R ? R : never;

type A = RetrunType<FuncA>
type B = RetrunType<FuncB>
type C = RetrunType<number>

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2  프로미스 타입의 결과 값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;