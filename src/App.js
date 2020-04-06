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
import TaskNav from "./components/TaskNav"

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
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const TaskNav = () => {
  //   return <Grid item xs={3}>
  //   <Paper className={classes.paper} style={{ padding: 16 }}>
  //     <Box component="div" textOverflow="ellipsis">
  //       <List
  //         component="nav"
  //         aria-labelledby="nested-list-subheader"
  //         subheader={
  //           <ListSubheader component="div" id="nested-list-subheader">
  //             Navigation
  //           </ListSubheader>
  //         }
  //         className={classes.root}
  //       >
  //         <ListItem button onClick={handleClick}>
  //           <ListItemIcon>
  //             <InboxIcon />
  //           </ListItemIcon>
  //           <ListItemText primary="Inbox" />
  //           {open ? <ExpandLess /> : <ExpandMore />}
  //         </ListItem>
  //         <Collapse in={open} timeout="auto" unmountOnExit>
  //           <List component="div" disablePadding>
  //             <ListItem button className={classes.nested}>
  //               <ListItemIcon>
  //                 <StarBorder />
  //               </ListItemIcon>
  //               <ListItemText primary="Starred" />
  //             </ListItem>
  //           </List>
  //         </Collapse>
  //         <ListItem button>
  //           <ListItemIcon>
  //             <SendIcon />
  //           </ListItemIcon>
  //           <ListItemText primary="Today" />
  //         </ListItem>
  //         <ListItem button>
  //           <ListItemIcon>
  //             <DraftsIcon />
  //           </ListItemIcon>
  //           <ListItemText primary="Project X" />
  //         </ListItem>
  //       </List>
  //     </Box>
  //   </Paper>
  // </Grid>
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3" gutterBottom color="textPrimary">
          AMAZING(LY BAD) TODO LIST
        </Typography>

        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <TaskNav />
            {/* <Grid item xs={3}>
              <Paper className={classes.paper} style={{ padding: 16 }}>
                <Box component="div" textOverflow="ellipsis">
                  <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        Navigation
                      </ListSubheader>
                    }
                    className={classes.root}
                  >
                    <ListItem button onClick={handleClick}>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary="Starred" />
                        </ListItem>
                      </List>
                    </Collapse>
                    <ListItem button>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="Today" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Project X" />
                    </ListItem>
                  </List>
                </Box>
              </Paper>
            </Grid> */}
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
                    />
                  </List>
                </Paper>
                <Paper variant="outlined" style={{ margin: 16, padding: 4 }}>
                  <CompletedCounter todoList={todoList} />
                  <List className={classes.root}>
                    <CompletedTasks
                      todoList={todoList}
                      setTodoList={setTodoList}
                    />
                  </List>
                </Paper>
              </Paper>
            </Grid>
            <TaskDetails/>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
