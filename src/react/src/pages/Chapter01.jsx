import { useState } from "react";
import { useSendCode } from '../hooks/useSendCode';

export default function Page() {
  const [count] = useState(0);

  useSendCode('01');

  return (
    <section>
      <h1>第一章 —— 数据绑定</h1>
      <div>变量：{count}</div>
    </section>
  );
}
