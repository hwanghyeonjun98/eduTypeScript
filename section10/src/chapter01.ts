/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 가져오는 타입
 */

interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
	[key in K]: T[key];
}

const legacyPost: Pick<Post, "title" | "content"> = {
	title  : "옛날 글",
	content: "내용",
};

/**
 * Omit<T, K>
 * -> 생략하다, 뺴다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, "title"> = {
	content     : "",
	tags        : [],
	thumbnailURL: "",
};

/**
 * Record<K, V>
 */

type Record<K extends keyof any, V> = {
	[key in K]: V;
}

type Thumbnail = Record<"large" | "medium" | "samll" | "watch", {
	url: string;
	size: number;
}>;