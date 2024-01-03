export const reactCode = 
`import { useState, useEffect } from "react";

export default function Chapter01() {
  const [count] = useState(0);

  return (
    <section>
      <h1>第一章 —— 数据绑定</h1>
      <div>变量：{count}</div>
    </section>
  );
}
`

export const vueCode =
`<template>
<section>
  <h1>第一章 —— 变量</h1>
  <div>变量：{{ count }}</div>
</section>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>`

export const svelteCode = 
`<script>
  let count = 0;
</script>

<section>
  <h1>第一章 —— 变量</h1>
  <section>变量：{ count }</section>
</section>
`