/**
 * 타입 단언
 */
type Person = {
	name: string;
	age: number;
}

let person = {} as Person;
person.name = "j";
person.age = 27;

type Dog = {
	name: string;
	color: string;
}

let dog = {
	name : "j",
	color: "b",
	breed: "진"
} as Dog;


/**
 * 타입 단언 규칙
 *
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼 타입이거니
 * A가 B의 서브 타입이여야함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

/**
 * non null 단언
 */

type Post = {
	title: string;
	author?: string;
}

let post = {
	title : "게시글1",
	author: "a"
};

const len: number = post.author!.length;