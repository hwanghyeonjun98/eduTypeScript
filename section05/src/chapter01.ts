/**
 * 인터페이스 홧장
 */

type Animal = {
	name: string;
	age: number;
}

interface Dog extends Animal {
	isBark: boolean;
}

interface Cat extends Animal {
	isScratch: boolean;
}

interface Chicken extends Animal {
	isFly: boolean;
}

const dog: Dog = {
	name  : "",
	age   : 1,
	isBark: true,
};