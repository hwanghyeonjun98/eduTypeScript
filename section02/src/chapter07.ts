// viod
// void -> 공허 -> 아무것도 없음
// void : 아무것도 없음을 의미하는 타입
function func1(): string {
	return "hello";
}

function func2(): void {
	console.log("hello");
}

// never
// never -> 존재하진 않는
// 불가능한 타입

function func3(): never {
	while (true) {
	}
}

function func4(): never {
	throw new Error();
}