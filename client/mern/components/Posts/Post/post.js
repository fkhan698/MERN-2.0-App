import React from "react"
import { useState, useEffect } from "react"

import {
  Card,
  Typography,
  CardContent,
  Shadows,
  Button,
  ButtonGroup
} from "@material-ui/core"

import { shadows } from "@material-ui/system"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minMax(250px, 1fr))"
  },
  grid: {
    flexGrow: 1
  },
  card: {
    width: "100%",
    borderStyle: "solid",
    margin: "1rem"
  },
  title: {
    textAlign: "center",
    fontSize: "1rem"
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column"
  }
})
import { deletePostAsync } from "../../../reducers/postSlice"

import { useDispatch } from "react-redux"

export default function Post({ post }) {
  const dispatch = useDispatch()
  const classes = useStyles()
  // const [isPostDeleted, setIsPostDeleted] = useState(false)
  // const handleDelete = async () => {
  //   await dispatch(deletePostAsync(post._id))
  //   setIsPostDeleted(true)
  // }
  // if (isPostDeleted) {
  //   return null
  // }

  const refreshPage = () => {
    window.location.reload(true)
  }
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
        <Button size="small" color="primary" onClick={handleDelete}>
          Delete
        </Button>
      </ButtonGroup>
    </Card>
  )
}
