function swap<T, U>(a: T, b: U) {
	return [b, a];
}

const [a, b] = swap("1", 2);

function retrunFirstValue<T>(data: [T, ...unknown[]]) {
	return data[0];
}

let num = retrunFirstValue([0, 1, 2]);
console.log(num);
let str = retrunFirstValue(["h", "e"]);
console.log(str);

function getLength<T extends {
	length: number
}>(data: T) {
	return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({length: 10});