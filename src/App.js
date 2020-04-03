import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      text: "Clean Drawers",
      done: false,
      note: "Only the living room resk"
    },
    { id: 1, text: "Buy Groceries", done: false },
    { id: 2, text: "Sell Macbook", done: false },
    { id: 3, text: "Buy toilet paper", done: true },
    { id: 4, text: "Inhale dust cleaner", done: true },
    { id: 5, text: "Social Distance", done: true },
    {
      id: 6,
      text: "Buy private jet",
      done: true,
      note: "the very expensive one"
    }
  ]);

  const checkboxChange = event => {
    event.preventDefault();
    let status = (event.target.checked = !event.target.checked);
    let newList = [...todoList]; //i dont know why this fixed it?>!?!
    newList[event.target.name].done = !status;
    setTodoList(newList);
  };


  const taskUndone = event => {
    let newList = [...todoList];
    newList[event.target.name].done = event.target.checked;
    setTodoList(newList);
  }

  const addTodo = event => {
    event.preventDefault();
    const newTodos = {
      text: newTodo,
      done: false,
      id: todoList.length
    };
    setTodoList(todoList.concat(newTodos));
    setNewTodo("");
  };

  const finishedTodos = todoList.filter(todo => todo.done === true);

  const onChangeHandler = event => {
    setNewTodo(event.target.value);
  };

  const Counter = () => {
    const doneAmount = todoList.filter(todo => todo.done === true).length;
    return doneAmount;
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
                <h4>Get this done</h4>
                {todoList
                  .filter(todo => todo.done === false)
                  .map(todo => (
                    <li key={todo.id}>
                      <input
                        type="checkbox"
                        key={todo.id}
                        name={todo.id}
                        checked={todo.done}
                        onChange={checkboxChange}
                      />
                      <span>{todo.text}</span>
                      
                    </li>
                  ))}
              </ul>
            </div>
            <div className="todo-list">
              <ul className="finished">
                <h4>
                  Finished <Counter />
                </h4>
                {finishedTodos.map(todo => (
                  <li>
                    <input
                      type="checkbox"
                      name={todo.id}
                      checked={todo.done}
                      onChange={taskUndone}
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
