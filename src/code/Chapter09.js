export const reactCode =
`import { useState } from "react";

export default function Page() {
  const [list] = useState([1, 2, 3]);
  return (
    <section>
      <h1>第九章 —— for</h1>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>item - {item}</li>;
        })}
      </ul>
    </section>
  );
}
`;

export const vueCode =
`<template>
<section>
  <h1>第九章 —— for</h1>
  <ul>
    <li v-for="(item, index) in list" :key="index">item - {{ item }}</li>
  </ul>
</section>
</template>

<script setup>
import { reactive } from "vue";
const list = reactive([1, 2, 3]);
</script>

`;

export const svelteCode =
`<script>
const list = [1,2,3];
</script>

<section>
<h1>第九章 —— for</h1>
<ul>
  {#each list as item, index}
    <li>item - {item}</li>
  {/each}
</ul>
</section>
`;