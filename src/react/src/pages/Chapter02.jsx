import { useState } from "react";
import { useSendCode } from '../hooks/useSendCode';

export default function Page() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  useSendCode('02');

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
