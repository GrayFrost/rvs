import { useState } from "react";

export default function Page() {
  const [list] = useState([55, 65, 75, 85]);
  return (
    <section>
      <h1>第八章 —— if</h1>
      <ul>
        {list.map((item, index) => {
          return (
            <li className="flex" key={index}>
              <span>{item}:</span>
              {item < 60 ? (
                <span>不及格</span>
              ) : item >= 60 && item < 80 ? (
                <span>良好</span>
              ) : (
                <span>优秀</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
