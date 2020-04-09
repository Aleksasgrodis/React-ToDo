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
      starred: false,
      project: "Uncategorized"
    },
    {
      id: 1,
      text: "Sell organs",
      completed: false,
      date: new Date(0),
      note: "You need the money to purchase more dust cleaner",
      starred: true,
      project: "Uncategorized"
    },
    {
      id: 2,
      text: "Delete browsing history",
      completed: false,
      date: new Date(0),
      note: "Make sure you delete the cookies too!",
      project: "Uncategorized"
    },
    {
      id: 3,
      text: "Buy toilet paper",
      completed: true,
      date: new Date(0),
      note: "Last time you checked, the stores were sold out!",
      project: "Uncategorized"
    },
    {
      id: 4,
      text: "Inhale dust cleaner",
      completed: true,
      date: new Date(0),
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      project: "Uncategorized"
    },
    {
      id: 5,
      text: "Social Distance",
      completed: true,
      date: new Date(0),
      note: "Make sure to keep at least 1.5m distance!",
      starred: true,
      project: "Uncategorized"
    },
    {
      id: 6,
      text: "Hide body from the police",
      completed: false,
      note: "Also wipe down the appartment of any fingerprints",
      date: new Date(0),
      starred: true,
      project: "Criminal Activities"
    },{
      id: 7,
      text: "Buy weapon from the darkweb",
      completed: true,
      note: "Be sure to use Tor and a VPN",
      date: new Date(0),
      starred: true,
      project: "Criminal Activities"
    },{
      id: 8,
      text: "Purchase a bodybag",
      completed: false,
      note: "I think they got some at gamma",
      date: new Date(0),
      starred: true,
      project: "Criminal Activities"
    },{
      id: 9,
      text: "Find Target",
      completed: true,
      note: "",
      date: new Date(0),
      starred: true,
      project: "Criminal Activities"
    },{
      id: 10,
      text: "Start working on a React todo list application",
      completed: true,
      note: "",
      date: new Date(0),
      starred: true,
      project: "Programming"
    },{
      id: 11,
      text: "Create a Github repo for it",
      completed: true,
      note: "",
      date: new Date(0),
      starred: true,
      project: "Programming"
    },{
      id: 12,
      text: "Finish building it",
      completed: false,
      note: "",
      date: new Date(0),
      starred: true,
      project: "Programming"
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

  const [focussedList, setFocussedList] = useState("Uncategorized")



  return (
    <div className="App">
      <header className="App-header">
        {/* <Typography variant="h3" gutterBottom color="textPrimary">
          AMAZING(LY BAD) TODO LIST
        </Typography> */}

        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <TaskNav focussedList={focussedList} setFocussedList={setFocussedList} todoList={todoList}/>

            <Grid item xs={5}>
              <Paper elevation={1} style={{ padding: 4 }}>
                <NewTaskComponent
                  todoList={todoList}
                  setTodoList={setTodoList}
                  focussedList={focussedList}
                />

                <Paper variant="outlined" style={{ margin: 16, padding: 4 }}>
                  <ActiveCounter todoList={todoList} focussedList={focussedList}/>
                  <List className={classes.root}>
                    <ActiveTasks
                      todoList={todoList}
                      setTodoList={setTodoList}
                      setFocussedTask={setFocussedTask}
                      focussedList={focussedList}
                    />
                  </List>
                </Paper>
                <Paper variant="outlined" style={{ margin: 16, padding: 4 }}>
                  <CompletedCounter todoList={todoList} focussedList={focussedList} />
                  <List className={classes.root}>
                    <CompletedTasks
                      todoList={todoList}
                      setTodoList={setTodoList}
                      setFocussedTask={setFocussedTask}
                      focussedList={focussedList}
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
