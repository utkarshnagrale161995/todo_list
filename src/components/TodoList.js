import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoItem from "./TodoItem";
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {

    const {filteredTodos} = useContext(TodoContext);

    return (
        <div className="mt-4">
            <h2>Todo List</h2>
            {filteredTodos.length === 0 ? (
                <p>No todos found</p>
            ):(
                <ul className="list-group">
                    { filteredTodos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo}/>
                    ))} 
                </ul>
            )}
        </div>
    );
}

export default TodoList;
