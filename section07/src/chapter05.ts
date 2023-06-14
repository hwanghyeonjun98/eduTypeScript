/**
 * 프로미스(Promise)
 */

const promise = new Promise<number>((res, rej) => {
	setTimeout(() => {
		// res(20);
		rej("~로 실패");
	}, 3000);
});

promise.then((res) => {
	console.log(res * 20);
}).catch((err) => {
	if (typeof err === "string") {
		console.log(err);
	}
});

/**
 * 프로미스를 반환하는 함수 타임 정의
 */

interface Post {
	id: number;
	title: string;
	content: string;
}

function fetchPost(): Promise<Post> { // 함수의 타입 정의하는 곳이나  Promise에 직접 재네릭을 걸 수 있음
                                      // return new Promise<Post>((resolve, reject) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id     : 1,
				title  : "제목",
				content: "내용",
			});
		}, 3000);
	});
}

const postRequset = fetchPost();

postRequset.then((post) => {
	post.id;
});