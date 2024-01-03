import { useState } from "react";

export default function Chapter02() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <h1>第二章 —— 方法</h1>
      <div>
        count: {count}
        <button className="w-16 h-10 rounded-sm flex items-center justify-center border" onClick={updateCount}>+1</button>
      </div>
    </section>
  );
}
