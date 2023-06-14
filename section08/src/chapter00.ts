type PostList = {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
	};
}[];

function printAuthorInto(author: PostList[number]["author"]) {
	console.log(`${author.name}-${author.id}`);
}

const post: PostList[0] = {
	title  : "제목",
	content: "내용",
	author : {
		id  : 1,
		name: "jj"
	}
};