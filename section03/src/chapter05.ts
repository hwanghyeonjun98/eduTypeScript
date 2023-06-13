/**
 * 타입 추론
 */

let a: number = 10;
let b = "hello";
let c = {
	id     : 1,
	name   : "j",
	profile: {
		nicname: "a",
	},
	urls   : ["http://hyeonjunhwang.com"]
};

let {id, name, profile} = c;
let [one, two, three] = [1, "h", true];

function func(message = "string") {
	return "hello";
}

let d;
d = 10;
d.toFixed();

d = "String";
d.toUpperCase();

const num = 10;
