import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import "./components/ToDoList";
import ToDoList from "./components/ToDoList";

function App() {
  const [Input, setInput] = useState("");
  const [todos,setTodos] =useState([]);

  return (
    <div className="App">
      <header>To do list </header>
      <Form todos ={todos} setTodos ={setTodos} Input={Input} setInput={setInput} />
      <ToDoList todos ={todos}/>
    </div>
  );
}

export default App;
