<template>
  <section>
    <h1>第十一章 —— style</h1>
    <div :style="{ border: '1px solid black', fontSize: 16 }">hello world</div>
  </section>
</template>

<script setup>
import { useSendCode } from '../hooks/useSendCode';
useSendCode('11');
</script>