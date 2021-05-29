import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPrompts } from "./actions/prompts";
import Form from "./components/Form/Form";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrompts());
  }, [dispatch]);
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
