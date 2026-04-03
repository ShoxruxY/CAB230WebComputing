import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function fetchUser() {
  const url = "https://jsonplaceholder.typicode.com/users/3";
  return fetch(url).then((res) => res.json());
}

function User(props) {
  return (
    <div className="User">
      <ul>
        <li>Name: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Phone: {props.phone}</li>
      </ul>
    </div>
  );
}

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <h1>User Details</h1>
      <User {...user} />
      <button
        onClick={() =>
          fetchUser().then((user) => {
            setUser(user);
          })
        }
      >
        Get User
      </button>
    </div>
  );
}

export default App;
