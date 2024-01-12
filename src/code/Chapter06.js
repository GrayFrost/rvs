export const reactCode = 
`import { useState, useMemo } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <h1>第六章 —— computed</h1>
      <button onClick={updateCount}>
        +1
      </button>
      <span>
        {count}的2倍是：{doubleCount}
      </span>
    </section>
  );
}

`;

export const vueCode = 
`<template>
<section>
  <h1>第六章 —— computed</h1>
  <button @click="updateCount">
    +1
  </button>
  <span>
    {{count}}的2倍是：{{doubleCount}}
  </span>
</section>
</template>

<script setup>
import { ref, computed } from 'vue';

let count = ref(0);
let doubleCount = computed(() => {
return count.value * 2
});

const updateCount = () => {
count.value++;
}
</script>
`;

export const svelteCode = 
`<script>
let count = 0;

$: doubleCount = count * 2;

const updateCount = () => {
  count++;
};
</script>

<section>
<h1>第六章 —— computed</h1>
<button on:click={updateCount}> +1 </button>
<span>
  {count}的2倍是：{doubleCount}
</span>
</section>
`;