import  React, {useEffect, useState, createContext} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export const TodoContext = createContext();

export const TodoProvider = ({ children}) =>{
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect (() =>{
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        axios.get("http://localhost:5050/todos")
        .then((res)=>{
            setTodos(res.data);
            setFilteredTodos(res.data);
        })
        .catch((error)=> console.log("Error getting Data"));
    };

    const addTodo = (todo) => {
        axios.post("http://localhost:5050/todos",todo)
        .then((res)=>{
            console.log(res.data);
            setTodos([...todos,res.data]);
            setFilteredTodos([...todos,res.data]);
        })
        .catch((err)=>console.log("Error adding todo"));
    };

    const removeTodo = (id) =>{
        axios.delete(`http://localhost:5050/todos/${id}`)
        .then((res)=>{
            console.log(res.data)
            setTodos(todos.filter((todo) => todo.id !== id));
            console.log(todos)
            setFilteredTodos(todos.filter((todo) => todo.id !== id));
            console.log(filteredTodos);
        })
        .catch((err)=> console.log("Error deleting todo"));
    }

    const updateTodo = (id, updatedTodo) =>{
        axios.put(`http://localhost:5050/todos/${id}`,updatedTodo)
        .then((res)=>{
            const updatedTodos=todos.map((todo)=>todo.id === id ? updatedTodo : todo);
            console.log(updatedTodos)
            setTodos(updatedTodos);
            setFilteredTodos(updatedTodos)
        })
        .catch((err) => console.log("Error updating todo"));
    };

    const searchTodos = (searchText)=>{
        const filtered = todos.filter((todo) =>todo.text.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredTodos(filtered)
    };

    return (
        <TodoContext.Provider value={{todos, filteredTodos, addTodo, removeTodo, updateTodo, searchTodos}}>
            {children}
        </TodoContext.Provider>
    );
};
