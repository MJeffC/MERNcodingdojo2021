import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };



  const handleTodoDelete = (deleteId) => {
    const filterTodos = todos.filter((todo, i) => {
      return i !== deleteId;
    });

    setTodos(filterTodos);
  }

  const handleToggleComplete = (updateId) => {
    const updatedTodos = todos.map((todo, i)=> {
      if (i === updateId){
        // Used but mutates objects
        // todo.complete = !todo.complete;
        // Used in real world use
        const updatedTodo = {...todo, complete: !todo.complete};
        return updatedTodo;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(e) => {
          handleNewTodoSubmit(e);
        }}>
        <input onChange={(e) => {
            setNewTodo(e.target.value);
          }} type="text" value={newTodo} style={{margin:"10px"}} />
      <div>
        <button>Add Todo</button>
      </div>
      </form>

      <hr />
      {todos.map((todos, i) => {
        const todoClasses = [];

        if (todos.complete) {
          todoClasses.push("strike-through");
        }

        return (
          <div key={i}>
            <input onChange={(e) => {
              handleToggleComplete(i);
            }} checked={todos.complete} type="checkbox" />
            <span className={todoClasses.join(" ")}>{todos.text}</span>
            <button onClick={(e) => {
              handleTodoDelete(i)
            }} style={{marginLeft:"10px"}}>Delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default App;
