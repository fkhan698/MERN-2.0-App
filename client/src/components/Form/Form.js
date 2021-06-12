import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createPost } from "../../actions/posts";
const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    creator: " ",
    tags: ""
  });
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
          <label>Message</label>
          <input
            type="text"
            name="message"
            value={postData.message}
            onChange={e =>
              setPostData({ ...postData, message: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Creator</label>
          <input
            type="text"
            name="creator"
            value={postData.creator}
            onChange={e =>
              setPostData({ ...postData, creator: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Tags</label>
          <input
            type="text"
            name="tags"
            value={postData.tag}
            onChange={e =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
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
};
export default Form;
