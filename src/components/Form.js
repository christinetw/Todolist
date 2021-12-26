import React from "react";





const Form = ({ setInput, Input, todos, setTodos }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  }
  const submitTodoHandler = (e) => {

    e.preventDefault();
    setTodos([...todos, { text: Input, completed: false, id: Math.random() * 1000 }]);
    setInput("");
  };
  return (
    <form>
      <input value={Input} onChange={inputHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form