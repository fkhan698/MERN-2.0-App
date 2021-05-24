import "./App.css";
import { useEffect, useState } from "react";
import PromptForm from "./components/PromptForm";
function App() {
  const [prompt, setPrompt] = useState([]);

  useEffect(() => {
    const getAPIData = async () => {
      const response = await fetch("http://localhost:5000/");
      const data = await response.json();
      try {
        console.log(data);
        setPrompt(data);
      } catch (e) {
        console.log(e);
      }
    };
    getAPIData();
  }, []);

  return (
    <>
      <div>
        {prompt.map(data => (
          <li>{data.title}</li>
        ))}
      </div>
      <PromptForm />
    </>
  );
}

export default App;
