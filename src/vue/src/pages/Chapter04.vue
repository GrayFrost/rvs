<template>
  <Child />
</template>

<script setup>
import Child from './Chapter04_Child.vue';
import { useSendCode } from '../hooks/useSendCode';

useSendCode('04');
</script>