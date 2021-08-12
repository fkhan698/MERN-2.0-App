import React from "react";
import {
  TextField,
  InputLabel,
  Select,
  Paper,
  MenuItem,
  FormControl,
  Typography,
  Button,
  Container
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useStyles } from "./styles.js";
import { createTopics } from "../../actions/topics.js";
export default function TopicForm() {
  const [topicData, setTopicData] = useState({
    title: ""
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(createTopics(topicData));
  };
  return (
    <>
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Container className={classes.container}>
          <h1>Create a topic</h1>
          <Typography className={classes.label}>Title</Typography>
          <TextField
            className={classes.inputText}
            id="outlined-basic"
            variant="outlined"
            required
            value={topicData.title}
            onChange={e =>
              setTopicData({ ...setTopicData, title: e.target.value })
            }
          />

          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            color="primary"
            type-="submit"
          >
            Submit
          </Button>
        </Container>
      </form>
    </>
  );
}
