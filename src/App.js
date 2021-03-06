import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import "./App.css";
import "./components/ToDoList";
import ToDoList from "./components/ToDoList";

function App() {


  const [Input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);


  useEffect(() => {


    filterHandler();
    saveLocalTodos()
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }

  };
  const saveLocalTodos = () => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodos);
    }

  }
  return (
    <div className="App">
      <header>To do list </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        Input={Input}
        setInput={setInput}
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
        setFilterTodos={setFilterTodos}
      />
    </div>
  );
}

export default App;
