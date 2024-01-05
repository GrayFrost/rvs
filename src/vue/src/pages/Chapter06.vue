<template>
  <section>
    <h1>第六章 —— computed</h1>
    <button
        class="w-auto h-auto p-1 border"
        @click="updateCount"
      >
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