<template>
  <section>
    <h1>第十二章 —— context</h1>
    <Child />
  </section>
</template>

<script>
  export const ContextKey = 'ThemeContext';
</script>
<script setup>
  import { ref, provide } from 'vue';
  import { useSendCode } from '../hooks/useSendCode';
  import Child from './Chapter12_Child1.vue';

  const text = 'hello world';
  const theme = ref('dark');

  const setTheme = (newTheme) => {
    theme.value = newTheme;
  }

  provide(ContextKey, {
    text,
    theme,
    setTheme
  });

  useSendCode('12');
</script>