// enum type
// 여러가지 값의 이름을 부여해 열거하는 타입

// 타입 별칭과 사용방법 동일
enum Role {
	ADMIM = 0,
	USER  = 1,
	GEUST = 2,
}

enum Language {
	Korean  = "ko",
	english = "en"
}

const user1 = {
	name    : "jjun",
	role    : Role.ADMIM, // 0 <- 관리자
	language: Language.Korean
};

const user2 = {
	nmae: "hong",
	role: Role.USER // 1 <- 일반유저
};

const user3 = {
	nmae: "kim",
	role: Role.GEUST // 2 <- 게스트
};

console.log(user1, user2, user3);