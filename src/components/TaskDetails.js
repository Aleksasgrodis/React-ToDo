import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Paper, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { red } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarBorderIcon from "@material-ui/icons/StarBorder";

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
    formControl: {
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

  const projectList = [...new Set(todoList.map((task) => task.project))];

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.secondary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ChangeProject = () => {
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <InputLabel id="demo-simple-select-label">Project</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={selectedTask.project}
              onChange={handleProjectChange}
              label="Project"
            >
              {projectList.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              size="large"
              className={classes.button}
            >
              <StarBorderIcon style={{ fontSize: 30 }} />
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    );
  };

  return (
    <Grid item xs={4}>
      <Paper className={classes.paper} style={{ padding: 16 }}>
        <Box component="div" textOverflow="ellipsis">
          <Card className={classes.root} variant="outlined">
            <List className={classes.root}>
              <ListItem role={undefined} dense button>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={true}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={selectedTask.text} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <StyledMenuItem>
                      <ListItemIcon>
                        <EditIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Edit" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                      <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Delete" />
                    </StyledMenuItem>
                    {/* <StyledMenuItem>
                      <ListItemIcon>
                        <InboxIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                    </StyledMenuItem> */}
                  </StyledMenu>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            <Divider />
            <CardContent>
              {/* <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                align="right"
              >
                {selectedTask.date.toLocaleDateString()}
              </Typography>
              <Typography variant="h5" component="h2" align="left" gutterBottom>
                {selectedTask.text}
              </Typography> */}
              <TextField
                id="standard-texarea"
                size="small"
                fullWidth
                label="Note"
                value={selectedTask.note}
                multiline
                rows="4"
                onChange={onNoteChange}
                variant="outlined"
              />
              <ChangeProject />
            </CardContent>
            <CardActions>{/* buttons go here */}</CardActions>
          </Card>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TaskDetails;
