import { useSendCode } from '../hooks/useSendCode';

export default function Page() {

  useSendCode('04');
  
  return <section>
    <h1>第四章 —— 生命周期</h1>
  </section>
}