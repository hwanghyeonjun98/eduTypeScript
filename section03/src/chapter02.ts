// unknown type
function unknownExam() {
	let a: unknown = 1;
	let b: unknown = "hello";
	let c: unknown = true;
	let d: unknown = null;
	let e: unknown = undefined;
}

// never type
function neverExam() {
	function neverFunc(): never {
		while (true) {
		}
	}

	let num: number = neverFunc();
	let str: string = neverFunc();
	let bool: boolean = neverFunc();

	/*	let never1: never = 10;
		let never2: never = "string";
		let never3: never = true;*/
}

// void type
function voidExam() {
	function voidFunc(): void {
		console.log("hi");
	}

	let voidVar: void = undefined;
}

// any
function anyExam() {
	let unknownVar: unknown;
	let anyVar: any;
	let undefinedVar: undefined;
	let neverVar: never;

	anyVar = unknownVar;
	undefinedVar = anyVar;

	// neverVar = anyVar; // never type은 any tpye을 다운캐스팅이 불가능하다.
}

