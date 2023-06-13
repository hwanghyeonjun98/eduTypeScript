/**
 * 인터페이스 클래스
 */

interface CharacterInterface {
	name: string;
	moveSpeed: number;

	move(): void;
}

class Chracter implements CharacterInterface {
	constructor(public name: string, public moveSpeed: number) {
	}

	move() {
		console.log(`${this.moveSpeed} 속도로 이동`);
	}
}