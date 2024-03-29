import React from "react"
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
} from "@material-ui/core"
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useStyles } from "./styles.js"
import { createPost } from "../../actions/posts.js"
import { useRouter } from "next/router"

export default function Form() {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: ""
  })
  const classes = useStyles()
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(createPost(postData))
    router.push("/posts")
  }
  return (
    <>
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Container className={classes.container}>
          <h1>Create a Post</h1>
          <Typography className={classes.label}>Title</Typography>
          <TextField
            className={classes.inputText}
            id="outlined-basic"
            variant="outlined"
            required
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...setPostData, title: e.target.value })
            }
          />

          <Typography className={classes.label}>Message</Typography>
          <TextField
            id="outlined-multiline-static"
            className={classes.inputText}
            label=""
            multiline
            rows={4}
            variant="outlined"
            value={postData.message}
            required
            onChange={(e) => {
              setPostData({ ...postData, message: e.target.value })
            }}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
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
  )
}
