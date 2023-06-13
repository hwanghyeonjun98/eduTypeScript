/**
 * 접근 제어자
 * access modifier
 * public, private, proteced
 */

class Employee {
	constructor(private name: string, protected age: number, public position: string) {
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

	func() {
		this.age;
	}
}

const employee = new Employee("jj", 26, "개발자");
console.log(employee);