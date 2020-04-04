import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import CommentIcon from "@material-ui/icons/Comment";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { typography } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { Paper } from "@material-ui/core";

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
      text: "Buy private jet",
      completed: true,
      note: "the very expensive one",
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

  const taskDone = (event) => {
    event.preventDefault();
    let newList = [...todoList];
    newList[event.target.name].completed = event.target.checked;
    newList[event.target.name].date = new Date();
    setTodoList(newList);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (newTodo.length !== 0) {
      const newTodos = {
        text: newTodo,
        completed: false,
        id: todoList.length,
        date: new Date(),
      };
      setTodoList(todoList.concat(newTodos));
      setNewTodo("");
    } else {
      alert("Task input field may not be empty!");
    }
  };

  const finishedTodos = todoList.filter((todo) => todo.completed === true);

  const onChangeHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const ActiveTasks = () => {
    return todoList
      .filter((task) => task.completed === false)
      .sort((a, b) => b.date - a.date)
      .map((task, index) => (
        <div key={task.id}>
        <ListItem key={task.id} dense button>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={task.completed}
              onChange={taskDone}
              name={task.id}
            />
          </ListItemIcon>
          <ListItemText primary={task.text} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider light/>
        </div>
      ));
  };

  // const CompletedTasks = () => {
  //   return todoList
  //     .filter(task => task.completed === true)
  //     .sort((a, b) => b.date - a.date)
  //     .map(task => (
  //       <li key={task.id}>
  //         <input
  //           type="checkbox"
  //           key={task.id}
  //           name={task.id}
  //           checked={task.completed}
  //           onChange={taskDone}
  //           id={"box" + task.id}
  //         />
  //         <label htmlFor={"box" + task.id}>{task.text}</label>
  //       </li>
  //     ));
  // };
  const CompletedTasks = () => {
    return todoList
      .filter((task) => task.completed === true)
      .sort((a, b) => b.date - a.date)
      .map((task) => (
        <div key={task.id}>
        <ListItem dense button>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={task.completed}
              onChange={taskDone}
              name={task.id}
            />
          </ListItemIcon>
          <ListItemText primary={task.text} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider light/>
        </div>
      ));
  };

  // const CompletedTasks = () => {
  //   return todoList
  //     .filter((task) => task.completed === true)
  //     .sort((a, b) => b.date - a.date)
  //     .map((task) => (
  //       <ExpansionPanel>
  //         <ExpansionPanelSummary
  //           expandIcon={<ExpandMoreIcon />}
  //           aria-label="Expand"
  //           aria-controls="additional-actions1-content"
  //           id="additional-actions1-header"
  //         >
  //           <FormControlLabel
  //             aria-label="Acknowledge"
  //             onClick={(event) => event.stopPropagation()}
  //             onFocus={(event) => event.stopPropagation()}
  //             control={
  //               <Checkbox
  //                 edge="start"
  //                 checked={task.completed}
  //                 onChange={taskDone}
  //                 name={task.id}
  //               />
  //             }
  //             label={task.text}
  //           />
  //         </ExpansionPanelSummary>
  //         <ExpansionPanelDetails>
  //           {/* <Typography color="textSecondary">{task.note}</Typography> */}
  //           <TextField fullWidth
  //         id="outlined-helperText"
  //         label="Note"
  //         value={task.note}
  //         variant="outlined"
  //       />
  //         </ExpansionPanelDetails>
  //       </ExpansionPanel>
  //     ));
  // };

  const ActiveCounter = () => {
    const completedAmount = todoList.filter((todo) => todo.completed === false)
      .length;
    if (completedAmount === 1) {
      return (
        <Typography variant="h6" gutterBottom>
          <Box textAlign="left" m={1}>
            {completedAmount} active task remains.
          </Box>
        </Typography>
      );
    }
    return (
      <Typography variant="h6" gutterBottom>
        <Box textAlign="left" m={1}>
          {completedAmount} active tasks remain.
        </Box>
      </Typography>
    );
  };

  const CompletedCounter = () => {
    const completedAmount = todoList.filter((todo) => todo.completed === true)
      .length;
    if (completedAmount === 1) {
      return (
        <Typography variant="h6" gutterBottom>
          <Box textAlign="left" m={1}>
            {completedAmount} task completed
          </Box>
        </Typography>
      );
    }

    return (
      <Typography variant="h6" gutterBottom>
        <Box textAlign="left" m={1}>
          {completedAmount} tasks completed.
        </Box>
      </Typography>
    );
  };

  const [newTodo, setNewTodo] = useState("");


  return (
    <div className="App">
      <header className="App-header">
        <h1>Amazing(ly terrible) Todo List</h1>

        <section className="todo-wrapper">
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
                      onChange={onChangeHandler}
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

            <div className="todo-list">
              <ActiveCounter />
              <List className={classes.root}>
                <ActiveTasks />
              </List>
            </div>
            <div className="todo-list">
              <List className={classes.root}>
                <CompletedCounter />
                <CompletedTasks />
              </List>
            </div>
          </form>
        </section>
      </header>
    </div>
  );
}

export default App;
