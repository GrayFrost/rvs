<template>
  <section>
    <h1>第十章 —— ref</h1>
      <div ref="fatherRef" class="w-10 h-10 border"></div>
      <div>className is: {{className}}</div>
      <button
        class="w-auto h-auto p-1 flex items-center justify-center border rounded-sm"
        @click="sayHello"
      >
        通过ref调用子应用方法
      </button>
      <Child ref="childRef" />
  </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import Child from './Chapter10_Child.vue';
const fatherRef = ref(null);
const childRef = ref(null);
let className = ref('');

watchEffect(() => {
  if (fatherRef.value) {
    className.value = fatherRef.value.className;
  }
})

const sayHello = () => {
  if (childRef.value) {
    childRef.value.sayHello();
  }
}

</script>