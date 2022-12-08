import React, {useState} from "react";
import ReactDOM from "react-dom";

import Form from "./form.jsx";
import List from "./list.jsx";


const Home = () => {
	const [todos, setTodos] = useState(["todo1", "todo2"])
	return (
		<div className="text-center">
			<List todos={todos} />
			<Form />
		</div>
	);
};

export default Home;
