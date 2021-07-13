import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/post.js";

export default function Posts() {
  const posts = useSelector(state => state.posts);

  return (
    <div>
      <h1>This is posts page</h1>
      {posts.map(post => {
        <Post post={post} />;
      })}
    </div>
  );
}
