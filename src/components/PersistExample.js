import React, { useState } from "react";
const PersistExample = () => {
  const [num, setNum] = useState(1);
  const increment = () => {
    setNum(num + 1);
  };
  const decrement = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{num}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default PersistExample;
