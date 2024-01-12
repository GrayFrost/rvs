import { useSendCode } from '../hooks/useSendCode';

export default function Page() {
  useSendCode('11');
  return (
    <section>
      <h1>第十一章 —— style</h1>
      <div
        style={{
          border: "1px solid black",
          fontSize: 16,
        }}
      >
        hello world
      </div>
    </section>
  );
}
