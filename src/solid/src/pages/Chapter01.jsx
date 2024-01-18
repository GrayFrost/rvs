import { createSignal } from "solid-js";

function Page() {
  const [count] = createSignal(0);

  return (
    <section>
      <h1>第一章 —— 数据绑定</h1>
      <div>变量：{count}</div>
    </section>
  );
}

export default Page;
