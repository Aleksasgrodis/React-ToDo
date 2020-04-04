import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      text: "Clean workdesk",
      completed: false,
      note: "Remove gum from under the desk",
      date: new Date(0)
    },
    { id: 1, text: "Sell organs", completed: false, date: new Date(0) },
    {
      id: 2,
      text: "Delete browsing history",
      completed: false,
      date: new Date(0)
    },
    { id: 3, text: "Buy toilet paper", completed: true, date: new Date(0) },
    { id: 4, text: "Inhale dust cleaner", completed: true, date: new Date(0) },
    { id: 5, text: "Social Distance", completed: true, date: new Date(0) },
    {
      id: 6,
      text: "Buy private jet",
      completed: true,
      note: "the very expensive one",
      date: new Date(0)
    }
  ]);

  // maybe create a single function for both actions?
  const taskDone = event => {
    event.preventDefault();
    let newList = [...todoList];
    newList[event.target.name].completed = event.target.checked;
    newList[event.target.name].date = new Date();
    setTodoList(newList);
  };

  // disallow empty todo, add date for sorting
  const addTodo = event => {
    event.preventDefault();
    if (newTodo.length !== 0){
      const newTodos = {
        text: newTodo,
        completed: false,
        id: todoList.length,
        date: new Date()
      };
      setTodoList(todoList.concat(newTodos));
      setNewTodo("");
    } else {
      alert("Task input field may not be empty!")
    }
  };

  const finishedTodos = todoList.filter(todo => todo.completed === true);

  const onChangeHandler = event => {
    setNewTodo(event.target.value);
  };

  const ActiveTasks = () => {
    return todoList
      .filter(task => task.completed === false)
      .sort((a, b) => b.date - a.date)
      .map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            key={task.id}
            name={task.id}
            checked={task.completed}
            onChange={taskDone}
            id={"box" + task.id}
          />
          <label htmlFor={"box" + task.id}>{task.text}</label>
        </li>
      ));
  };

  const CompletedTasks = () => {
    return todoList
      .filter(task => task.completed === true)
      .sort((a, b) => b.date - a.date)
      .map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            key={task.id}
            name={task.id}
            checked={task.completed}
            onChange={taskDone}
            id={"box" + task.id}
          />
          <label htmlFor={"box" + task.id}>{task.text}</label>
        </li>
      ));
  };

  const ActiveCounter = () => {
    const completedAmount = todoList.filter(todo => todo.completed === false)
      .length;
    if (completedAmount === 1) {
      return (
        <h5>
          {" "}
          <span>{completedAmount}</span> active task remains.
        </h5>
      );
    }
    return (
      <h5>
        {" "}
        <span>{completedAmount}</span> active tasks remain.
      </h5>
    );
  };

  const CompletedCounter = () => {
    const completedAmount = todoList.filter(todo => todo.completed === true)
      .length;
    if (completedAmount === 1) {
      return (
        <h5>
          {" "}
          <span>{completedAmount}</span> task completed.
        </h5>
      );
    }

    return (
      <h5>
        {" "}
        <span>{completedAmount}</span> tasks completed.
      </h5>
    );
  };

  const [newTodo, setNewTodo] = useState("");

  //change map and filters to actual functions/components

  return (
    <div className="App">
      <header className="App-header">
        <h1>Amazing(ly terrible) Todo List</h1>

        <section className="todo-wrapper">
          <form onSubmit={addTodo}>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Type your task here..."
                value={newTodo}
                onChange={onChangeHandler}
              />
              <button type="submit">ADD</button>
            </div>
            <div className="todo-list">
              <ul className="active">
                <ActiveCounter />

                <ActiveTasks />
              </ul>
            </div>
            <div className="todo-list">
              <ul className="active">
                <CompletedCounter />
                <CompletedTasks />
              </ul>
            </div>
          </form>
        </section>
      </header>
    </div>
  );
}

export default App;
