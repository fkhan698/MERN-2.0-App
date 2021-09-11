import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post/post.js";
import { useStyles } from "./Post/styles";
import styles from "../Posts/Posts.module.css";
import { getPostsAsync } from "../../reducers/postSlice.js";

export default function Posts() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);
  console.log(posts);
  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <div>
          <Post key={post._id} post={post} />
        </div>
      ))}
    </div>
  );
}
