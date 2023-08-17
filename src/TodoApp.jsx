import React, { useState } from "react";
import "./App.css"

import TodoList from "./Todolist";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    if (todoText.trim() !== "") {
      setTodos([...todos, { text: todoText, completed: false }]);
      setTodoText("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "pink",
        height: "60vh",
        width: "400px",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
         paddingTop:"1px"
      }}
    >
      <div style={{backgroundColor:"#fff", height:"50vh",width: "300px",margin:"40px"}}>
        <h1>TODO List</h1>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new TODO"
        />
        <button onClick={addTodo}>Add TODO</button>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default TodoApp;
