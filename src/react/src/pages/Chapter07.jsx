import { useEffect, useState } from 'react';
import { useSendCode } from '../hooks/useSendCode';

export default function Page() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count改变了');
  }, [count]);

  const updateCount = () => {
    setCount(count + 1);
  }

  useSendCode('07');

  return (
    <section>
      <h1>第七章 —— watch</h1>
      <button className="w-auto h-auto p-1 border" onClick={updateCount}>+1</button>
      <span>count: {count}</span>
    </section>
  )
}