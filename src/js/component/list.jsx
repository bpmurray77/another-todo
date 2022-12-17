import React from "react";
import ReactDOM from "react-dom";
import Todo from "./todo.jsx";

function List({todos}) {
    return(
        todos.map(todo => {
            return <Todo todo={todo.name} />
        })
    );
};

export default List;