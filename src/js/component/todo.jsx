import React, {useState, useRef} from "react";

function Todo({todo}){

    function handleComplete() {
        todo.removeChild(todo);
    }

    return(
        <div>
            {todo}
            <button onClick={handleComplete}>Complete Task</button>
        </div>
    );
};

export default Todo