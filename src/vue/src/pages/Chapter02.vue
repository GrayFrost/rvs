<template>
  <section>
    <h1>第二章 —— 方法</h1>
    <div>
      count: {{count}}
      <button class="w-16 h-10 rounded-sm flex items-center justify-center border" @click="updateCount">+1</button>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import { useSendCode } from '../hooks/useSendCode';
  const count = ref(0);
  const updateCount = () => {
    count.value++;
  }

  useSendCode('02');
</script>