/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
	key: K;
	value: V;
}

let keyPair: KeyPair<string, number> = {
	key  : "key",
	value: 0
};

let keyPair2: KeyPair<boolean, string[]> = {
	key  : true,
	value: ["1"]
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
	[key: string]: number;
}

interface Map<V> {
	[key: string]: V;
}

let boolMap: Map<boolean> = {
	key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
	[key: string]: V;
}

let strMap2: Map2<string> = {
	key: "hello",
};

/**
 * 제네릭 인터페이스 활용 예시
 *
 * -> 유저관리
 * -> 유저 구분 : 개발자, 유저
 */

interface Student {
	type: "student";
	school: string;
}

interface Developer {
	type: "developer";
	skill: string;
}

interface User<T> {
	name: string;
	profile: T;
}

function goToSchool(user: User<Student>) {
	const school = user.profile.school;
	console.log(`${school}로 등교}`);
}

const developerUser: User<Developer> = {
	name   : "jj",
	profile: {
		type : "developer",
		skill: "typescript",
	}
};

const studentUser: User<Student> = {
	name   : "hong",
	profile: {
		type  : "student",
		school: "가톨릭대학교"
	}
};

goToSchool(studentUser);


