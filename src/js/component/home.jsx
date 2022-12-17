import React, {useState, useRef} from "react";
import ReactDOM from "react-dom";


import List from "./list.jsx";


const Home = () => {
	const [todos, setTodos] = useState([{name:"todo1", complete: false}, {name:"todo2", complete: false}])

	const todoNameRef=useRef()

    function handleAddTodo(e){
        e.preventDefault();
        const name = todoNameRef.current.value
        setTodos(prevTodos => {
            return [...prevTodos, {name:name, complete: false}]
        })
        todoNameRef.current.value = null
    }

	return (
		<>
		<List todos={todos} />
		<div className="text-center">
			<form>
            <input
            ref={todoNameRef}
            id="field"
            type="text"
            ></input>
            <button
            onClick={handleAddTodo}
            id="button">Add Task</button>
        </form>
		</div>
		</>
	);
};

export default Home;
