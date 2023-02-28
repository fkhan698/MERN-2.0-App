import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
export const getPostsAsync = createAsyncThunk(
  "posts/getPostsAsync",
  async () => {
    const response = await axios.get("http://localhost:5000/posts")
    const posts = response.json()
    console.log("This is getting posts")
    return { posts }
  }
)

export const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getPostsAsync.fulfilled]: (state, action) => {
      return action.payload.posts
    },
  },
})

export default postSlice.reducer
