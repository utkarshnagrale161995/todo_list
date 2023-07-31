import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';
import {TodoProvider} from "./components/TodoContext";
import "bootstrap/dist/css/bootstrap.css";
import SearchBar from "./components/SearchBar";
import todo from "./assets/todo.jpg"

function App() {
    const myStyle={
        backgroundImage: `url(${todo})` ,
        height:'100vh',
        backgroundSize: '100%',
        backgroundRepeat: 'repeat-y',
    };
  return (
    <div className="App" style={myStyle}>
       <div className="container p-4">
        <TodoProvider>
               <div className="card opacity-75">
                   <div className="card-header bg-warning">
                        <h1 className="mt-4 text-center">Todo App</h1>
                    </div>

                    <div className="card-body">
                    <h3 className="mt-4 text-center">Add Todo</h3>
                        <TodoForm />
                        <br/>
                        <h3>Search Bar</h3>
                        <SearchBar />
                    </div>
                    <br />

                    <div className="card-footer">
                        <TodoList/> 
                    </div>
             </div>
        </TodoProvider>
        </div>      
    </div>
  );
}

export default App;
