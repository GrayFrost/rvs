import React, { useRef, useEffect, useState, useImperativeHandle } from "react";

function _Child(props, ref) {
  const sayHello = () => {
    console.log("hello");
  };
  useImperativeHandle(ref, () => {
    return {
      sayHello
    }
  })
  return <div>子应用</div>;
}
const Child = React.forwardRef(_Child);

export default function Chapter06() {
  const fatherRef = useRef(null);
  const childRef = useRef(null);
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (fatherRef && fatherRef.current) {
      setClassName(fatherRef.current.className);
    }
  }, [fatherRef]);

  const sayHello = () => {
    if (childRef && childRef.current) {
      childRef.current.sayHello();
    }
  };

  return (
    <section>
      <h1>第六章 —— ref</h1>
      <div ref={fatherRef} className="w-10 h-10 border"></div>
      <div>className is: {className}</div>
      <button
        className="w-auto h-auto p-1 flex items-center justify-center border rounded-sm"
        onClick={() => sayHello()}
      >
        通过ref调用子应用方法
      </button>
      <Child ref={childRef} />
    </section>
  );
}
