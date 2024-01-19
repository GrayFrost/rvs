import { createSignal } from "solid-js";

function Child(props) {
  const onClickFunc = () => {
    props.sayHello();
  };
  return (
    <div>
      <span>name: {props.name}</span>
      <button
        className="w-[120px] h-10 rounded-sm flex items-center justify-center border"
        onClick={onClickFunc}
      >
        调用父级方法
      </button>
    </div>
  );
}

export default function Page() {
  const [name] = createSignal("hello");
  const sayHello = () => {
    console.log("hello");
  };
  return (
    <section>
      <h1>第三章 —— Props</h1>
      <Child name={name} sayHello={sayHello} />
    </section>
  );
}
