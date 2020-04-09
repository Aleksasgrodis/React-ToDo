import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const TaskDetails = ({ todoList, setTodoList, taskID }) => {
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
    },formControl: {
      margin: theme.spacing(2),
      minWidth: 10,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  let selectedTaskOBJ = todoList.filter((task) => task.id === taskID);
  let selectedTask = selectedTaskOBJ[0];

  const onNoteChange = (event) => {
    let newList = [...todoList];
    let target = newList.map((task) => task.id).indexOf(taskID);
    newList[target].note = event.target.value;
    setTodoList(newList);
    
  };

  const handleProjectChange = (event) => {
    let newList = [...todoList];
    let target = newList.map((task) => task.id).indexOf(taskID);
    newList[target].project = event.target.value;
    setTodoList(newList);

  };

  const projectList = [...new Set(todoList.map(task => task.project))];

  const ChangeProject = () => {
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedTask.project}
          onChange={handleProjectChange}
          label="Project"
        >
          {projectList.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    );
  };

  return (
    <Grid item xs={4}>
      <Paper className={classes.paper} style={{ padding: 16 }}>
        <Box component="div" textOverflow="ellipsis">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                align="right"
              >
                {selectedTask.date.toLocaleDateString()}
              </Typography>
              <Typography variant="h5" component="h2" align="left">
                {selectedTask.text}
              </Typography>
              <TextField
                id="standard-texarea"
                fullWidth
                label="Note"
                value={selectedTask.note}
                multiline
                onChange={onNoteChange}
                variant="outlined"
              />
              <ChangeProject />
            </CardContent>
            <CardActions>
              {/* buttons go here */}
            </CardActions>
          </Card>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TaskDetails;
