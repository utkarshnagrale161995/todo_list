import React, {useState, useContext} from "react";
import {TodoContext} from "./TodoContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoForm = () => {
    const [text,setText] = useState("");
    const {addTodo} = useContext(TodoContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        if(text.trim() === "") return;
        const newTodo ={
            date: new Date().toDateString(),
            text: text.trim(),
        };
        addTodo(newTodo);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                type="text"
                value={text}
                className="form-control"
                onChange={(e)=> setText(e.target.value)}
                placeholder="Enter a new Todo"
                />
                <button className="btn btn-primary" type="submit">
                    Add Todo
                </button>
            </div>
        </form>
    )
}

export default TodoForm;
