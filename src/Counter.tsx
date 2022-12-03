import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setValue(value + 1)}>+</button>
      <p className="value">{value}</p>
      <button onClick={() => setValue(value - 1)}>-</button>
    </div>
  )
}

export default Counter;