import { useSendCode } from '../hooks/useSendCode';

function SlotContainer1(props) {
  return <div className="m-4 p-4 border rounded">{props.children}</div>;
}

function SlotContainer2(props) {
  const { header, footer, children } = props;
  return (
    <div className="m-4 p-4 border rounded">
      <header>{header}</header>
      <section>子组件原有内容</section>
      <section>{children}</section>
      <footer>{footer}</footer>
    </div>
  );
}

export default function Page() {
  useSendCode('05');
  return (
    <section>
      <h1>第五章 —— slot</h1>
      <SlotContainer1>hello world</SlotContainer1>
      <SlotContainer2 header={<span>父组件header</span>} footer="父组件footer">
        hello world2
      </SlotContainer2>
    </section>
  );
}
