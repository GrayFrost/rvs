import { createSignal, createEffect } from 'solid-js';

function Child(props) {
  const sayHello = () => {
    console.log("hello");
  }
  return <div>子应用</div>
}

export default function Page() {
  let fatherRef;
  let childRef;
  const [className, setClassName] = createSignal("");

  createEffect(() => {
    if (fatherRef) {
      console.log('zzh fatherRef', fatherRef);
    }
  })

  const sayHello = () => {
    if (childRef) {
      console.log('zzh childRef', childRef);
    }
  }

  return (
    <section>
      <h1>第十章 —— ref</h1>
      <div ref={fatherRef} className="w-10 h-10 border"></div>
      <div>className is: {className}</div>
      <button
        className="w-auto h-auto p-1 flex items-center justify-center border rounded-sm"
        onClick={sayHello}
      >
        通过ref调用子应用方法
      </button>
      <Child ref={childRef} />
    </section>
  )
}