import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increse
      </button>
    </>
  );
}
export default Counter;
