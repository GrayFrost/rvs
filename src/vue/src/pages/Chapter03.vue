<template>
  <section>
    <h1>第三章 —— Props</h1>
    <Child :name="name" @sayHello="sayHello" />
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import Child from "./Chapter03_Child.vue";
  
  const name = ref("hello");
  const sayHello = () => {
    console.log("hello");
  };
</script>
