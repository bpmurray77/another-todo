import React, {useState, useRef} from "react";

function Todo({todo}){



    return(
        <div>
            {todo}
            <button>Complete Task</button>
        </div>
    );
};

export default Todo