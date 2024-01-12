import { useState } from "react";
import { useSendCode } from '../hooks/useSendCode';

export default function Page() {
  const [list] = useState([1, 2, 3]);

  useSendCode('09');
  return (
    <section>
      <h1>第九章 —— for</h1>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>item - {item}</li>;
        })}
      </ul>
    </section>
  );
}
