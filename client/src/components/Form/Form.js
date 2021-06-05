import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPost } from "../../actions/posts";
export default function Form() {
  const [postData, setPostData] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  return (
    <div>
      <h1>Add New Post</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={e => setPostData({ ...postData, title: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={postData.description}
            onChange={e =>
              setPostData({ ...postData, description: e.target.value })
            }
            required
          />
        </div>

        <div>
          <button type="submit">Add Post</button>
        </div>
      </form>
    </div>
  );
}
