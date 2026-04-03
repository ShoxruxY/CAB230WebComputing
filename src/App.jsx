import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <LikeCounter />
    </div>
  );
}

function LikeCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };

  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };
  return (
    <div className="like">
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Headline title="Hello, world!" />
    </div>
  );
}

export default App;
