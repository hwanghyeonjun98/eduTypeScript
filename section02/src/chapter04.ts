// 타입 별칭
type User = {
	id: number;
	name: string;
	nickname: string;
	birth: string;
	bio: string;
	location: string;
}

let user: User = {
	id      : 1,
	name    : "jjun",
	nickname: "j",
	birth   : "1998.11.28",
	bio     : "안녕하세요.",
	location: "서울시"
};

let user2: User = {
	id      : 2,
	name    : "hong",
	nickname: "h",
	birth   : "1998.12.31",
	bio     : "안녕하세요.",
	location: "서울시"
};

// 인덱스 시그니쳐
type ConutryCodes = {
	[key: string]: string
}

let conutryCodes: ConutryCodes = {
	Korea        : "ko",
	UnitedState  : "us",
	UnitedKingdom: "uk"
};

type ConutryNumbreCodes = {
	[key: string]: number;
	Korea: number;
	// Korea: string; // -> X  인덱스 시그니처 타입과 동의 해야됨
}

let conutryNumbreCodes: ConutryNumbreCodes = {
	Korea: 410
};