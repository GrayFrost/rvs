import { useState, useMemo } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <h1>第六章 —— computed</h1>
      <button
        className="w-auto h-auto p-1 border"
        onClick={updateCount}
      >
        +1
      </button>
      <span>
        {count}的2倍是：{doubleCount}
      </span>
    </section>
  );
}
