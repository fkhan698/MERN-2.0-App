import React from "react";
import {
  Container,
  Card,
  Typography,
  CardContent,
  Grid,
  Button,
  ButtonGroup
} from "@material-ui/core";
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
    <div className={classes.grid}>
      <Card classes={classes.card}></Card>
    </div>
  );
}
