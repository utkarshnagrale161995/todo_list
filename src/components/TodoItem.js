import React, {useContext, useState} from "react";
import { TodoContext } from './TodoContext';
import TodoUpdate from './TodoUpdate';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = ({ todo }) =>{
    const { removeTodo } = useContext(TodoContext);
    const [editMode, setEditMode]=useState(false);
    
    const handleRemove = () => {
        removeTodo(todo.id);
    }

    return(
        <div>
            {editMode ? (
                <TodoUpdate todo={todo} />
            ): (
                <div>
                    <li className="list-group-item d-flex justify-content-between">
                        <h5>{todo.text}</h5>
                        <div>
                            <button className="btn btn-warning m-2" onClick={()=> setEditMode(true)}>
                               Update
                            </button>
                            <button className="btn btn-danger" onClick={handleRemove}>
                                Remove
                            </button>
                        </div>
                    </li>
                </div>
            )}
        </div>
    );
}

export default TodoItem;
