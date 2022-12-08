import React from "react";
import ReactDOM from "react-dom";

function Form(){
    return (
        <form>
            <input
            name="task"
            id="field"
            type="text"
            ></input>
            <button
            type="submit"
            id="button">Add Task</button>
        </form>
    );
};

export default Form;