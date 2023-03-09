import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
export const getPostsAsync = createAsyncThunk(
  "posts/getPostsAsync",
  async () => {
    const response = await axios.get("http://localhost:5000/posts")
    const posts = response.data
    console.log("This is getting")
    return { posts }
  }
)

export const deletePostAsync = createAsyncThunk(
  "posts/deletePostAsync",
  async (postId) => {
    await axios.delete(`http://localhost:5000/posts/${postId}`)
    return postId
  }
)

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getPostsAsync.fulfilled]: (state, action) => {
      return action.payload.posts
    }
  }
})

export default postSlice.reducer
