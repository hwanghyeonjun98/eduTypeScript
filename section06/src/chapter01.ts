/**
 * 타입스크립트 클래스
 */

const employee = {
	name   : "jj",
	age    : 22,
	postion: "developer",
	work() {
		console.log("일");
	}
};

class Employee {
	name: string = "이름없음";
	age: number = 0;
	position: string = "미정";

	constructor(name: string, age: number, position: string) {
		this.name = name;
		this.age = age;
		this.position = position;
	}

	work() {
		console.log("일");
	}
}

class ExcuticeOffcer extends Employee {
	officeNumber: number;

	constructor(name: string, age: number, position: string, officeNumber: number) {
		super(name, age, position);
		this.officeNumber = officeNumber;
	}
}

const employeeB = new Employee("jj", 26, "개발자");