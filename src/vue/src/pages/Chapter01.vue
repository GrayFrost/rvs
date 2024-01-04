<template>
  <section>
    <h1>第一章 —— 变量</h1>
    <div>变量：{{ count }}</div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { vueCode } from '../../../code/Chapter01';

const count = ref(0);
const route = useRoute();
const router = useRouter();
console.log('zzh route', route, router);

watch(() => route.path, () => {
  console.log('zzh route watch');
  window.microApp.dispatch({ data: vueCode });
})

</script>