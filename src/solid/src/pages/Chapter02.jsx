import { createSignal } from "solid-js";

export default function Page() {
  const [count, setCount] = createSignal(0);

  const updateCount = () => {
    setCount(count() + 1);
  };

  return (
    <section>
      <h1>第二章 —— 方法</h1>
      <div>
        count: {count()}
        <button className="w-16 h-10 rounded-sm flex items-center justify-center border" onClick={updateCount}>+1</button>
      </div>
    </section>
  );
}
