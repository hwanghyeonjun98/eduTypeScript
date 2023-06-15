import "./App.css";
import React, {useEffect, useReducer, useRef} from "react";
import Editor from "./components/Editor";
import Item from "./components/Item";

function reducer(state: Todo[], action) {
// asdasdasdsadasdasd
}

function App() {
	const [todos, dispatch] = useReducer([]);

	const idRef: React.MutableRefObject<number> = useRef(0);

	const onClickAdd = (text: string) => {
		dispatch({
			type: "CRETATE",
			data: {
				id     : idRef.current++,
				content: text,
			},
		});
	};

	const onClickDelete = (id: number) => {
		// setTodos(todos.filter((todo) => todo.id !== id));
		dispatch({
			type: "DELETE",
			id  : id,
		});
	};

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<div className="App">
			<h2>Todo</h2>
			<Editor onClickAdd={onClickAdd} />
			<div>{todos.map((todo) => (<Item key={todo.id} {...todo} onClickDelete={onClickDelete} />))}</div>
		</div>
	);
}

export default App;
