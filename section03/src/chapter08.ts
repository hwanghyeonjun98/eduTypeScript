/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
	tag: "ADMIN";
	name: string;
	kickCount: number;
};
type Member = {
	tag: "MEMBER";
	name: string;
	point: number;
};
type Guset = {
	tag: "GUSET";
	name: string;
	visitCount: number;
};

type User = Admin | Member | Guset;

// admin => {name}님 현재까지 {kickCount}명 강퇴하였습니다.
// member => {name}님 현재까지 {point}모았습니다.
// guest => {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
	switch (user.tag) {
		case "ADMIN": {
			console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다.`);
			break;
		}
		case "MEMBER": {
			console.log(`${user.name}님 현재까지 ${user.point}명 강퇴하였습니다.`);
			break;
		}
		case "GUSET": {
			console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴하였습니다.`);
			break;
		}
	}
}

/**
 * 사례
 */

// 비동기 작업 결과 처리
type LoadingTask = {
	state: "LOADING";
}

type ErrorTask = {
	state: "FAILED";
	error: {
		message: string
	};
}

type SuccessTask = {
	state: "SUCCESS";
	response: {
		data: string
	};
}

/*type AsyncTask = {
	state: "LOADING" | "FAILED" | "SUCCESS";
	error?: {
		message: string
	};
	response?: {
		data: string
	};
}*/

type AsyncTask = LoadingTask | ErrorTask | SuccessTask

// 로딩 -> 로딩중 출력
// 실페 -> 에러 출력
// 성공 -> 데이터 출력
function processResult(task: AsyncTask) {
	switch (task.state) {
		case "LOADING": {
			console.log("로딩중");
			break;
		}
		case "FAILED": {
			console.log(`에러 발생 : ${task.error.message}`);
			break;
		}
		case "SUCCESS": {
			console.log(`성공 결과 : ${task.response.data}`);
			break;
		}
	}
}

const loading: AsyncTask = {
	state: "LOADING"
};

const failed: AsyncTask = {
	state: "FAILED",
	error: {
		message: "오류 발생"
	}
};

const success: AsyncTask = {
	state   : "SUCCESS",
	response: {
		data: "data..."
	}
};