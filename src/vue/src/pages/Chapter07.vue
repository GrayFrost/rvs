<template>
  <section>
    <h1>第七章 —— watch</h1>
    <button class="w-auto h-auto p-1 border" @click="updateCount">+1</button>
    <span>count: {{count}}</span>
  </section>
</template>

<script setup>
import { watch, ref } from "vue";

let count = ref(0);

const updateCount = () => {
  count.value++;
};

watch(
  () => count.value,
  () => {
    console.log("count改变了");
  }
);
</script>
