<template>
  <section>
    <h1>第九章 —— for</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index">item - {{ item }}</li>
    </ul>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useSendCode } from '../hooks/useSendCode';

const list = reactive([1, 2, 3]);
useSendCode('09');
</script>
