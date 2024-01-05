export const reactCode = 
`// child component
import { useState } from "react";

function Child(props) {

  const onClickFunc = () => {
    props.sayHello();
  };

  return (
    <div>
      <span>name: {props.name}</span>
      <button onClick={onClickFunc}>
        调用父级方法
      </button>
    </div>
  );
}

// father component
export default function Father() {
  const [name] = useState("hello");

  const sayHello = () => {
    console.log("hello");
  };

  return (
    <section>
      <h1>第三章 —— Props</h1>
      <Child name={name} sayHello={sayHello} />
    </section>
  );
}

`

export const vueCode = 
`// child component
<template>
  <div>
    <span>name: {{ name }}</span>
    <button @click="onClickFunc()">
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

// father component
<template>
  <section>
    <h1>第三章 —— Props</h1>
    <Child :name="name" @sayHello="sayHello" />
  </section>
</template>

<script setup>
  import { ref } from "vue";
  import Child from "./Chapter03_Child.vue";
  
  const name = ref("hello");
  const sayHello = () => {
    console.log("hello");
  };
</script>
`

export const svelteCode = 
`// child component
<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let name;

  const onClickFunc = () => {
    dispatch("sayHello");
  };
</script>

<div>
  <span>name: {name}</span>
  <button on:click={onClickFunc}>调用父级方法</button>
</div>

// father component
<script>
import Child from './Child.svelte';
let name = 'hello';

const sayHello = () => {
  console.log('hello');
}
</script>

<section>
<h1>第三章 —— Props</h1>
<Child name={name} on:sayHello={sayHello} />
</section>
`