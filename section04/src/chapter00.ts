/**
 * 함수 타입 정의
 */

// 함수를 설명하는 졸은 방법
// 어떤 매개변수를 받고, 어떤 결과 값을 반환하는지 설명
// 어떤 타입의 매게변수를 받고, 어떤 타입의 결과 값을 반환하는지 설명
function func(a: number, b: number ){
	return a + b;
}

/**
 * 화살표 함수 타임 정의
 */

const add = (a: number, b: number) => a +b;

/**
 * 함수 매개 변수
 */

function introduce(name = "jjun", tall?: number) {
	console.log(`name: ${name}`);
	if(typeof tall === "number")
	console.log(`taoll: ${tall + 10}`);
}

introduce("jj", 180);
introduce("un");

function getSum(...rest: number[]) {
	let sum = 0;
	rest.forEach((it) =>(sum += it));

	return sum
}

getSum(1,2,3) // 6
getSum(1,2,3,4,5) // 6