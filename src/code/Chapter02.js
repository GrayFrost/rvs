export const reactCode = 
`import { useState } from "react";

export default function Chapter02() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <h1>第二章 —— 方法</h1>
      <div>
        count: {count}
        <button onClick={updateCount}>+1</button>
      </div>
    </section>
  );
}
`

export const vueCode =
`<template>
  <section>
    <h1>第二章 —— 方法</h1>
    <div>
      count: {{count}}
      <button @click="updateCount">+1</button>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  const count = ref(0);
  const updateCount = () => {
    count.value++;
  }
</script>
`

export const svelteCode = 
`<script>
let count = 0;

const updateCount = () => {
  count++;
}
</script>

<section>
<h1>第二章 —— 方法</h1>
<div>
  count: {count}
  <button on:click={updateCount}>+1</button>
</div>
</section>
`

export const solidCode =
`import { createSignal } from "solid-js";

export default function Page() {
  const [count, setCount] = createSignal(0);

  const updateCount = () => {
    setCount(count() + 1);
  };

  return (
    <section>
      <h1>第二章 —— 方法</h1>
      <div>
        count: {count()}
        <button onClick={updateCount}>+1</button>
      </div>
    </section>
  );
}

`