import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Headline } from "./Components/Headline.jsx";
import { useWheather } from "./Components/api.js";

function App() {
  const { loading, headlines, error } = useWheather();
  console.log(headlines);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="App">
      <h1>Brisbane Wheather Forecast Today</h1>
      <img src={headlines.icon} alt="Wheather icon" />
      <Headline
        key={headlines.time}
        time={headlines.time}
        text={headlines.txt}
        temp={headlines.temp}
        wind={headlines.wind}
      />
    </div>
  );
}

export default App;
