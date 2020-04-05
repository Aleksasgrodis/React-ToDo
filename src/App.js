import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import Typography from "@material-ui/core/Typography";
import { typography } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { Paper } from "@material-ui/core";
// import NewTaskComponent from "./components/NewTaskComponent";
import ActiveCounter from "./components/ActiveCounter"
import CompletedCounter from "./components/CompletedCounter"
import ActiveTasks from "./components/ActiveTasks"
import CompletedTasks from "./components/CompletedTasks"

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      text: "Clean workdesk",
      completed: false,
      note: "Remove gum from under the desk",
      date: new Date(0),
    },
    { id: 1, text: "Sell organs", completed: false, date: new Date(0) },
    {
      id: 2,
      text: "Delete browsing history",
      completed: false,
      date: new Date(0),
    },
    { id: 3, text: "Buy toilet paper", completed: true, date: new Date(0) },
    { id: 4, text: "Inhale dust cleaner", completed: true, date: new Date(0) },
    { id: 5, text: "Social Distance", completed: true, date: new Date(0) },
    {
      id: 6,
      text: "Hide evidence from the police",
      completed: true,
      note: "you know what i'm talking about",
      date: new Date(0),
    },
  ]);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  

  const NewTaskComponent = () => {
    const [newTodo, setNewTodo] = useState("");
    const addTodo = (event) => {
      event.preventDefault();
      if (newTodo.length !== 0) {
        const newTodos = {
          text: newTodo,
          completed: false,
          id: Date.now(),
          date: new Date(),
        };
        setTodoList(todoList.concat(newTodos));
        setNewTodo("");
      } else {
        alert("Task input field may not be empty!");
      }
    };
    const onChangeHandler = (event) => {
      setNewTodo(event.target.value);
    };

    return (
      <form onSubmit={addTodo}>
        <div className="input-wrapper">
          <Paper elevation={3} style={{ margin: 16, padding: 16 }}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  id="outlined-basic"
                  label="Type your task here..."
                  variant="outlined"
                  value={newTodo}
                  onChange={(e) => onChangeHandler(e)}
                  fullWidth
                  size="small"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  size="small"
                  className={classes.button}
                >
                  <AddIcon style={{ fontSize: 30 }} />
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </form>
    );
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Amazing(ly terrible) Todo List</h1>

        <section className="todo-wrapper">
          <NewTaskComponent />

          <Paper elevation={3} style={{ margin: 16, padding: 4 }}>
            <ActiveCounter todoList={todoList}/>
            <List className={classes.root}>
              <ActiveTasks todoList={todoList} setTodoList={setTodoList}/>
            </List>
          </Paper>
          <Paper elevation={3} style={{ margin: 16, padding: 4 }}>
            <List className={classes.root}>
              <CompletedCounter todoList={todoList}/>
              <CompletedTasks todoList={todoList} setTodoList={setTodoList}/>
            </List>
          </Paper>
        </section>
      </header>
    </div>
  );
}

export default App;
