import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);

  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
        id="wd-counter-up-click"
      >
        Up
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log(count);
        }}
        id="wd-counter-down-click"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
