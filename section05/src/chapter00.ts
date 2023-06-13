/**
 * 인터페이스
 */

interface Person {
	readonly name: string;
	age?: number;

	seyHi(): void;
}

const person: Person = {
	name : "jj",
	age  : 26,
	seyHi: () => {
	},
};