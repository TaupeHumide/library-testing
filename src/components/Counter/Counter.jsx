import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <label id="counterLabel">{count}</label>
      <br />

      <button
        type="button"
        id="counterM"
        onClick={() => setCount(count - 1)}
        className="decrement"
      >
        -1
      </button>
      <button
        type="button"
        id="counterP"
        onClick={() => setCount(count + 1)}
        className="increment"
      >
        +1
      </button>
    </div>
  );
}
export default Counter;
