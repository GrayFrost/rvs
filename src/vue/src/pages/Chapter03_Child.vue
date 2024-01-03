<template>
  <div>
    <span>name: {{ name }}</span>
    <button
      class="w-[120px] h-10 rounded-sm flex items-center justify-center border"
      @click="onClickFunc()"
    >
      调用父级方法
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["name"]);
const name = ref(props.name);

const emit = defineEmits(["sayHello"]);

const onClickFunc = () => {
  emit("sayHello");
};
</script>
