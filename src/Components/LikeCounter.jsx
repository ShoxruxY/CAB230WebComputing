import { useState } from "react";

export function LikeCounter() {
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
