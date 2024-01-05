<template>
  <div>子应用</div>
</template>

<script setup>
const sayHello = () => {
  console.log('hello')
}
defineExpose({
  sayHello
});
</script>