import React from "react";
import {
  Card,
  Typography,
  CardContent,
  Shadows,
  Button,
  ButtonGroup
} from "@material-ui/core";

import { shadows } from "@material-ui/system";

import { useStyles } from "../Topic/style.js";

export default function Topic({ topic }) {
  const classes = useStyles();
  return (
    <Card className={classes.card} boxShadow={3}>
      <Typography class={classes.title}>{topic.title}</Typography>

      <ButtonGroup color="primary">
        <Button>View</Button>
        <Button>Update</Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(topic._id))}
        >
          Delete{" "}
        </Button>
      </ButtonGroup>
    </Card>
  );
}
