import React, { useState } from "react";
import "./App.css";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import NewTaskComponent from "./components/NewTaskComponent";
import ActiveCounter from "./components/ActiveCounter";
import CompletedCounter from "./components/CompletedCounter";
import ActiveTasks from "./components/ActiveTasks";
import CompletedTasks from "./components/CompletedTasks";
import Container from "@material-ui/core/Container";
import { red } from "@material-ui/core/colors";
import TaskDetails from "./components/TaskDetails";
import TaskNav from "./components/TaskNav";


function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      text: "Clean workdesk",
      completed: false,
      note: "Remove gum from under the desk",
      date: new Date(0),
    },
    {
      id: 1,
      text: "Sell organs",
      completed: false,
      date: new Date(0),
      note: "You need the money to purchase more dust cleaner",
    },
    {
      id: 2,
      text: "Delete browsing history",
      completed: false,
      date: new Date(0),
      note: "Make sure you delete the cookies too!",
    },
    {
      id: 3,
      text: "Buy toilet paper",
      completed: true,
      date: new Date(0),
      note: "Last time you checked, the stores were sold out!",
    },
    {
      id: 4,
      text: "Inhale dust cleaner",
      completed: true,
      date: new Date(),
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      text: "Social Distance",
      completed: true,
      date: new Date(0),
      note: "Make sure to keep at least 1.5m distance!",
    },
    {
      id: 6,
      text: "Hide body from the police",
      completed: true,
      note: "Also wipe down the appartment of any fingerprints",
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
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  const classes = useStyles();
  const [focussedTask, setFocussedTask] = useState(6);
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" gutterBottom color="textPrimary">
          AMAZING(LY BAD) TODO LIST
        </Typography>

        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <TaskNav />

            <Grid item xs={5}>
              <Paper elevation={1} style={{ padding: 4 }}>
                <NewTaskComponent
                  todoList={todoList}
                  setTodoList={setTodoList}
                />

                <Paper variant="outlined" style={{ margin: 16, padding: 4 }}>
                  <ActiveCounter todoList={todoList} />
                  <List className={classes.root}>
                    <ActiveTasks
                      todoList={todoList}
                      setTodoList={setTodoList}
                      setFocussedTask={setFocussedTask}
                    />
                  </List>
                </Paper>
                <Paper variant="outlined" style={{ margin: 16, padding: 4 }}>
                  <CompletedCounter todoList={todoList} />
                  <List className={classes.root}>
                    <CompletedTasks
                      todoList={todoList}
                      setTodoList={setTodoList}
                      setFocussedTask={setFocussedTask}
                    />
                  </List>
                </Paper>
              </Paper>
            </Grid>
            <TaskDetails todoList={todoList} taskID={focussedTask} setTodoList={setTodoList}/>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
