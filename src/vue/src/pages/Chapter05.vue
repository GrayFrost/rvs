<template>
  <section>
    <h1>第五章 —— slot</h1>
    <SlotContainer1> hello world </SlotContainer1>
    <SlotContainer2>
      hello world2
      <template v-slot:header>父组件header</template>
      <template #footer>父组件footer</template>
    </SlotContainer2>
  </section>
</template>

<script setup>
import SlotContainer1 from "./Chapter05_Child1.vue";
import SlotContainer2 from "./Chapter05_Child2.vue";
import { useSendCode } from '../hooks/useSendCode';

useSendCode('05');
</script>
