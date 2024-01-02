import { useState } from "react";
export default function One() {
  const [count] = useState(0);
  return (
    <div>
      <h1>第一章 —— 变量</h1>
      <div>变量：{count}</div>
    </div>
  );
}
