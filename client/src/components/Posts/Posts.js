import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/post.js";
export default function Posts() {
  const posts = useSelector(state => state.posts);
  console.log(posts);
  return (
    <div>
      Hello
      {posts.map(post => {
        <Post post={post} />;
      })}
    </div>
  );
}
