/**
 * 클래스
 */

let studentA = {
	name: "a",
	grade: "A+",
	age: 25,
	study() {
		console.log("공부중");
	}, interduce() {
		console.log("안녕!");
	}
};

class Student {
	// 필드
	name;
	grade;
	age;

	// 생성자
	constructor(name, grade, age) {
		this.name = name;
		this.grade = grade;
		this.age = age;
	}

	// 메서드
	study() {
		console.log("공부중");
	}

	interduce() {
		console.log(`안녕! ${this.name}이야!`);
	}
}

class StudentDevelopre extends Student {
	favoriteSkill;

	constructor(name, grade, age, favoriteSkill) {
		super(name, grade, age);
		this.favoriteSkill = favoriteSkill;
	}

	programming() {
		console.log(`${this.favoriteSkill}을 좋아함`);
	}
}

let studentB = new Student("jjj", "A+", 22);
studentB.study();
studentB.interduce();