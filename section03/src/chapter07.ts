/**
 * 타입 좁히기
 * 조건문을 통해 넓은 타입에서 좁은 타입으로
 * 상황에 따라 좁히기
 */

type Person = {
	name: string;
	age: number;
}

// value => number : toFixed()
// value => string : toUpperCase()
// value => Date : getTIme()
// value => Person : name은 age살입니다.
function func(value: number | string | Date | null | Person) {
	// type guard
	if (typeof value === "number") {
		console.log(value.toFixed());
	}

	if (typeof value === "string") {
		console.log(value.toUpperCase());
	}

	if (value instanceof Date) {
		console.log(value.getTime());
	}

	// @ts-ignore
	if (value && "age" in value) {
		console.log(`${value.name}은 ${value.age}살 입니다.`);
	}
}

func(10.0000);
