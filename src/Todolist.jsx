import React from 'react';

function TodoList({ todos, setTodos }) {
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button  onClick={() => toggleComplete(index)}>
            {todo.completed ? 'Unmark Complete' : 'Mark Complete'}
          </button>
          <button  onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;