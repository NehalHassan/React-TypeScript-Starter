import * as React from "react";

const Counter = () => {
  const [count, changeCount] = React.useState(0);
  const increment = () => changeCount(count + 1);
  const decrement = () => changeCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
