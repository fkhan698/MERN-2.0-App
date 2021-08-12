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
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../Post/styles";
// const useStyles = makeStyles({
//   container: {
//     width: "100%",
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minMax(250px, 1fr))"
//   },
//   grid: {
//     flexGrow: 1
//   },
//   card: {
//     width: "100%",
//     borderStyle: "solid",
//     margin: "1rem"
//   },
//   title: {
//     textAlign: "center",
//     fontSize: "1rem"
//   },
//   cardContent: {
//     display: "flex",
//     justifyContent: "center",
//     alignContent: "center",
//     flexDirection: "column"
//   }
// });
import { deletePost } from "../../../actions/posts";

import { useDispatch } from "react-redux";

export default function Post({ post }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <Card className={classes.card} boxShadow={3}>
      <Typography class={classes.title}>{post.title}</Typography>
      <CardContent className={classes.cardContent}>
        <img
          height="100%"
          width="100%"
          src={post.selectedFile}
          alt="Pictuer"
        ></img>
      </CardContent>
      <ButtonGroup color="primary">
        <Button>View</Button>
        <Button>Update</Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          Delete{" "}
        </Button>
      </ButtonGroup>
    </Card>
  );
}
