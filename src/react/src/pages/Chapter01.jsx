import { useState, useEffect } from "react";

export default function Chapter01() {
  const [count] = useState(0);

  useEffect(() => {
    console.log('zzh 发送数据');
    window.microApp.dispatch({data: 'react第一章数据'});
  }, [])

  return (
    <section>
      <h1>第一章 —— 数据绑定</h1>
      <div>变量：{count}</div>
    </section>
  );
}
