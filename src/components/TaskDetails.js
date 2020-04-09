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
// import 'date-fns';

// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

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
  // Disabled inputfield, enabled on click, will add functionality later.
  //   const [disabledState, setDisabledState] = useState(true)

  //   const changeDisabledState = () => {
  //       setDisabledState(!disabledState)
  //   }

  // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  //   const handleDateChange = (date) => {
  //     setSelectedDate(date);
  //   };
  const projectList = [...new Set(todoList.map(task => task.project))];



  const ChangeProject = () => {
    return (
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedTask.project}
          onChange={handleProjectChange}
        >
          {projectList.map(item => <MenuItem value={item}>{item}</MenuItem>)}
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
              />

              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />    
        </MuiPickersUtilsProvider> */}
              {/* <FormControl fullWidth className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleProjectChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
              <ChangeProject />
            </CardContent>
            <CardActions>
              {/* <Button size="small" color="secondary" variant="outlined">
                Delete
              </Button>
              <Button
                size="small"
                color="primary"
                variant="contained"
                disableElevation
              >
                Edit
              </Button> */}
            </CardActions>
          </Card>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TaskDetails;
