<template>
  <div>
    <span>name: {{ name }}</span>
    <button @click={onClickFunc}>调用父级方法</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const props = defineProps(['name']);
  const name = ref(props.name);
  
  const emit = defineEmits(['sayHello']);

  const onClickFunc = () => {
    emit('sayHello');
  }
</script>