<template>
  <section>
    <h1>第一章 —— 变量</h1>
    <div>变量：{{ count }}</div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useSendCode } from '../hooks/useSendCode';

const count = ref(0);

useSendCode('01');

</script>