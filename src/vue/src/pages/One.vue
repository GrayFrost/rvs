<template>
  <div>
    <h1>第一章 —— 变量</h1>
    <div>变量：{{ count }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>