import { useState, useEffect } from "react";
import { reactCode } from '../../../code/Chapter01';

export default function Chapter01() {
  const [count] = useState(0);

  useEffect(() => {
    window.microApp.dispatch({ data: reactCode });
  }, [])

  return (
    <section>
      <h1>第一章 —— 数据绑定</h1>
      <div>变量：{count}</div>
    </section>
  );
}
