import React, {useState} from "react";
import ReactDOM from "react-dom";

import Form from "./form.jsx";
import List from "./list.jsx";


const Home = () => {
	const [todos, setTodos] = useState([{name:"todo1", complete: false}, {name:"todo2", complete: false}])
	return (
		<div className="text-center">
			<List todos={todos} />
			<Form />
		</div>
	);
};

export default Home;
