import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts.js";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <Form />
        <Posts />
      </div>
    </>
  );
}

export default App;
