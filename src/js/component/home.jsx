import React, {useState, useRef} from "react";
import ReactDOM from "react-dom";


import List from "./list.jsx";


const Home = () => {
	const [todos, setTodos] = useState([{id:"todo1", name:"todo1", complete: false}, {id:"todo2", name:"todo2", complete: false}])

	const todoNameRef=useRef()

    function handleAddTodo(e){
        e.preventDefault();
        const name = todoNameRef.current.value
        setTodos(prevTodos => {
            return [...prevTodos, {id:name, name:name, complete: false}]
        })
        todoNameRef.current.value = null
    }

    function handleComplete(id) {
        const removeTask = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(removeTask)
    }

	return (
		<>
		<ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name} <button onClick={() => handleComplete(todo.id)}>Complete Task</button>
          </li>
        ))}
      </ul>
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
