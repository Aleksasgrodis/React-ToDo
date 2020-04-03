import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      text: "Clean workdesk",
      completed: false,
      note: "Remove gum from under the desk"
    },
    { id: 1, text: "Sell organs", completed: false },
    { id: 2, text: "Delete browsing history", completed: false },
    { id: 3, text: "Buy toilet paper", completed: true },
    { id: 4, text: "Inhale dust cleaner", completed: true },
    { id: 5, text: "Social Distance", completed: true },
    {
      id: 6,
      text: "Buy private jet",
      completed: true,
      note: "the very expensive one"
    }
  ]);

  const checkboxChange = event => {
    event.preventDefault();
    let status = (event.target.checked = !event.target.checked);
    let newList = [...todoList]; //i dont know why this fixed it?>!?!
    newList[event.target.name].completed = !status;
    setTodoList(newList);
  };


  const taskUncompleted = event => {
    let newList = [...todoList];
    newList[event.target.name].completed = event.target.checked;
    setTodoList(newList);
  }

  const addTodo = event => {
    event.preventDefault();
    const newTodos = {
      text: newTodo,
      completed: false,
      id: todoList.length
    };
    setTodoList(todoList.concat(newTodos));
    setNewTodo("");
  };

  const finishedTodos = todoList.filter(todo => todo.completed === true);

  const onChangeHandler = event => {
    setNewTodo(event.target.value);
  };

 
  const ActiveCounter = () => {
    const completedAmount = todoList.filter(todo => todo.completed === false).length;
    return ( <h5> <span>{completedAmount}</span> active tasks remain.</h5>)
  };

  const CompletedCounter = () => {
    const completedAmount = todoList.filter(todo => todo.completed === true).length;
    return ( <h5> <span>{completedAmount}</span> tasks completed.</h5> )
  };


  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Amazing(ly terrible) Todo List</h1>

        <section className="todo-wrapper">
          <form onSubmit={addTodo}>
            <div className="input-wrapper">
              <input type="text"  placeholder="Type your task here..." value={newTodo} onChange={onChangeHandler} />
              <button type="submit">ADD</button>
            </div>

            <div className="todo-list">
              <ul className="active">
                <ActiveCounter />
                {todoList
                  .filter(todo => todo.completed === false)
                  .map(todo => (
                    <li key={todo.id}>
                      <label>{todo.text}</label>
                      <input
                        type="checkbox"
                        key={todo.id}
                        name={todo.id}
                        checked={todo.completed}
                        onChange={checkboxChange}
                      />
                      <span></span>
                      
                    </li>
                  ))}
              </ul>
            </div>
            <div className="todo-list">
              <ul className="finished">
                
                  <CompletedCounter />
                
                {finishedTodos.map((todo, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      name={todo.id}
                      checked={todo.completed}
                      onChange={taskUncompleted}
                    />
                    <span>{todo.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </section>
      </header>
    </div>
  );
}

export default App;
