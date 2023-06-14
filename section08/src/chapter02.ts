/**
 * 맵드 타입
 */

interface User {
	id: number;
	name: string;
	age: number;
}

type PartialUser = {
	[key in "id" | "name" | "age"]?: User[key];
}

type BoolUser = {
	[key in keyof User]: boolean;
}

type ReadOnlyUser = {
	readonly [key in keyof User]: User[key];
}

function fetchUser(): User {
	return {
		id  : 1,
		name: "jj",
		age : 24,
	};
}

function updateUser(user: PartialUser) {
	// ...작업코드
}

updateUser({
	id  : 1,
	name: "jj",
	age : 27,
});
