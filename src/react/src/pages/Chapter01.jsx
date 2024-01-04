import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { reactCode } from '../../../code/Chapter01';

export default function Chapter01() {
  const location = useLocation();
  const [count] = useState(0);

  useEffect(() => {
    // todo 发数据
  }, [location.pathname]);

  return (
    <section>
      <h1>第一章 —— 数据绑定</h1>
      <div>变量：{count}</div>
    </section>
  );
}
