/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 되는가?
 * 1. 반환 되는 타입이 호횐되는가?
 * 2. 매개 변수의 타입이 호환되는가?
 */

// 1. 반환 값이 호환되는가?
type A = () => number;
type B = () => 10;
let a: A = () => 10; // number type
let b: B = () => 10; // number 리터널 타입

a = b; // 업캐스팅
// b = a; // 다운캐스팅

// 2. 매개 변수가 호환되는가?
// 2-1 매개 변수 개수가 같은 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value ) => {};
let d: D = (value ) => {};

// c = d;
d = c;

type Animal = {
	name: string;
}

type Dog = {
	name: string;
	color: string;
}

let animalFunc = (animal: Animal) => {
	console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
	console.log(dog.name);
	console.log(dog.color);
}

// animalFunc = dogFunc;
dogFunc = animalFunc;

// 2-2 매개 변수 개수가 다를 때 (타입이 같아야 함)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;