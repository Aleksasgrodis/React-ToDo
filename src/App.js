import React, { useState } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import NewTaskComponent from "./components/NewTaskComponent";
import Container from "@material-ui/core/Container";
import TaskDetails from "./components/TaskDetails";
import TaskNav from "./components/TaskNav";
import CompletedTasks from "./components/CompletedTasks";
import ActiveTasks from "./components/ActiveTasks";
import Box from "@material-ui/core/Box";

// dfrawer imports
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      text: "Clean workdesk",
      completed: false,
      note: "Remove gum from under the desk",
      date: new Date(0),
      starred: false,
      project: "Uncategorized",
    },
    {
      id: 1,
      text: "Sell organs",
      completed: false,
      date: new Date(0),
      note: "You need the money to purchase more dust cleaner",
      starred: true,
      project: "Uncategorized",
    },
    {
      id: 2,
      text: "Delete browsing history",
      completed: false,
      date: new Date(0),
      note: "Make sure you delete the cookies too!",
      project: "Uncategorized",
    },
    {
      id: 3,
      text: "Buy toilet paper",
      completed: true,
      date: new Date(0),
      note: "Last time you checked, the stores were sold out!",
      project: "Uncategorized",
    },
    {
      id: 4,
      text: "Inhale dust cleaner",
      completed: true,
      date: new Date(0),
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      project: "Uncategorized",
    },
    {
      id: 5,
      text: "Social Distance",
      completed: true,
      date: new Date(0),
      note: "Make sure to keep at least 1.5m distance!",
      starred: true,
      project: "Uncategorized",
    },
    {
      id: 6,
      text: "Hide body from the police",
      completed: false,
      note: "Also wipe down the appartment of any fingerprints",
      date: new Date(0),
      starred: true,
      project: "Criminal Activities",
    },
    {
      id: 7,
      text: "Buy weapon from the darkweb",
      completed: true,
      note: "Be sure to use Tor and a VPN",
      date: new Date(0),
      starred: true,
      project: "Criminal Activities",
    },
    {
      id: 8,
      text: "Purchase a bodybag",
      completed: false,
      note: "I think they got some at gamma",
      date: new Date(0),
      starred: true,
      project: "Criminal Activities",
    },
    {
      id: 9,
      text: "Find Target",
      completed: true,
      note: "",
      date: new Date(0),
      starred: true,
      project: "Criminal Activities",
    },
    {
      id: 10,
      text: "Start working on a React todo list application",
      completed: true,
      note: "",
      date: new Date(0),
      starred: true,
      project: "Programming",
    },
    {
      id: 11,
      text: "Create a Github repo for it",
      completed: true,
      note: "",
      date: new Date(0),
      starred: true,
      project: "Programming",
    },
    {
      id: 12,
      text: "Finish building it",
      completed: false,
      note: "",
      date: new Date(0),
      starred: true,
      project: "Programming",
    },
  ]);
  const [focussedTask, setFocussedTask] = useState(6);
  const [focussedList, setFocussedList] = useState("Uncategorized");


  // drawer code 
  const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Get. It. Done.
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <TaskNav
            focussedList={focussedList}
            setFocussedList={setFocussedList}
            todoList={todoList}
          />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={6}>
              <Paper elevation={1} style={{ padding: 4 }}>
                <NewTaskComponent
                  todoList={todoList}
                  setTodoList={setTodoList}
                  focussedList={focussedList}
                />
                <ActiveTasks
                  todoList={todoList}
                  focussedList={focussedList}
                  setTodoList={setTodoList}
                  setFocussedTask={setFocussedTask}
                />

                <CompletedTasks
                  todoList={todoList}
                  focussedList={focussedList}
                  setTodoList={setTodoList}
                  setFocussedTask={setFocussedTask}
                />
              </Paper>
          </Grid>
          <TaskDetails
            todoList={todoList}
            taskID={focussedTask}
            setTodoList={setTodoList}
          />
        </Grid>
      </Container>
      </main>
      {/* <header className="App-header"> */}
      
      {/* </header> */}
    </div>
  );
}

export default App;
