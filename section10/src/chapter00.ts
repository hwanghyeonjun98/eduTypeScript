interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailURL: string;
}

type Partial<T> = {
	[key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
	title  : "제목",
	content: "내용",
};

/**
 * Required<T>
 *
 * -> 필수
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼디로 바꿔주는 타입
 */

type Required<T> = {
	[key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
	title       : "한입",
	tags        : ["ts"],
	content     : "",
	thumbnailURL: "https://",
};

/**
 * Readonly<T>
 * -> 읽기 전용
 */

type Readonly<T> = {
	readonly [key in keyof T]: T[key];
}


const readonlyPost: Readonly<Post> = {
	title       : "한입",
	tags        : ["ts"],
	content     : "",
	thumbnailURL: "https://",
};

