import React, {useContext, useState} from "react";
import { TodoContext } from "./TodoContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoUpdate = ({ todo }) => {
    const { updateTodo } = useContext(TodoContext);
    const [updatedText, setUpdatedText] = useState(todo.text);

    const handleUpdate = () => {
        updateTodo(todo.id, {text: updatedText});
    };

    return(
        <div className="input-group">
            <div className="form-control p-4">{todo.date}</div>
            <input
            type="text"
            value={updatedText}
            className="form-control p-4"
            onChange={(e)=> setUpdatedText(e.target.value)}
            />
            <button className="btn btn-info" onClick={handleUpdate}>
                Save
            </button>
        </div>
    );
}

export default TodoUpdate;
