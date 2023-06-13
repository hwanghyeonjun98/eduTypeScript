/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T): T {
	return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");
let arr = func([1, 2, 3]);
let tup = func<[number, number, number]>([1, 2, 3]);
let obj = func({name: "a"});