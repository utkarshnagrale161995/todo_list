import React, {useContext, useState} from "react";
import { TodoContext } from "./TodoContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {
    const {searchTodos} = useContext(TodoContext);
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (event) =>{
        setSearchText(event.target.value);
        searchTodos(event.target.value);
    };

    return (
        <form>
        <div className="input-group">
            <input 
            type="text"
            placeholder="Search Todos"
            value={searchText}
            className="form-control"
            onChange={handleInputChange}
            />
        </div>
        </form>
    );
};

export default SearchBar;
