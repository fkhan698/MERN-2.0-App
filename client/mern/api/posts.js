import axios from "axios";

const URL = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(URL);
export const createPost = newPost => axios.post(URL, newPost);
export const deletePost = id => axios.delete(`${URL}/${id}`);
