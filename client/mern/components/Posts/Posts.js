import { useState, useEffect } from "react";
import { fetchPosts } from "../../api/posts";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/post.js";
import { useStyles } from "./Post/styles";
import styles from "../Posts/Posts.module.css";

export default function Posts() {
  const [postsData, setPostsData] = useState([]);
  const posts = useSelector(state => state.posts);
  const classes = useStyles();
  console.error(posts);
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
