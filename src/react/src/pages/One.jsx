import { useState, useEffect } from "react";
export default function One() {
  const [count] = useState(0);

  useEffect(() => {
    console.log('zzh 发送数据');
    window.microApp.dispatch({data: 'react第一章数据'});
  }, [])

  return (
    <div>
      <h1 className="text-rose-400">第一章 —— 变量</h1>
      <div>变量：{count}</div>
    </div>
  );
}
