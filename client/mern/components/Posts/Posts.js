import { useState, useEffect } from "react";
import { fetchPosts } from "../../api/posts";
import { Grid } from "@material-ui/core";
import Post from "./Post/post.js";
import { useStyles } from "./Post/styles";
import styles from "../Posts/Posts.module.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchPosts();
      const data = response.data;
      console.log(data);
      setPosts(data);
    };
    getData();
  }, []);
  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
