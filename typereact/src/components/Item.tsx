import {Todo} from "../types";
import {useTodoDispatch} from "../App";

interface Props extends Todo {
}

export default function Item(props: Props) {
	const dispach = useTodoDispatch();
	const onClickButton = () => {
		dispach.onClickDelete(props.id);
	};

	return (
		<div>
			{props.id}번 : {props.content}
			<button onClick={onClickButton}>삭제</button>
		</div>
	);
}