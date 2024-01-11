export const reactCode = 
`// child component 1
function SlotContainer1(props) {
  return <div>{props.children}</div>;
}

// child component 2
function SlotContainer2(props) {
  const { header, footer, children } = props;
  return (
    <div>
      <header>{header}</header>
      <section>子组件原有内容</section>
      <section>{children}</section>
      <footer>{footer}</footer>
    </div>
  );
}

// father component
export default function Page() {
  return (
    <section>
      <h1>第五章 —— slot</h1>
      <SlotContainer1>hello world</SlotContainer1>
      <SlotContainer2 header={<span>父组件header</span>} footer="父组件footer">
        hello world2
      </SlotContainer2>
    </section>
  );
}
`

export const vueCode = 
`// child component 1
<template>
  <div>
    <slot></slot>
  </div>
</template>

// child component 2
<template>
  <div class="m-4 p-4 border rounded">
    <header><slot name="header"></slot></header>
    <section>子组件原有内容</section>
    <slot></slot>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>

// father component
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
import SlotContainer1 from "./Child1.vue";
import SlotContainer2 from "./Child2.vue";
</script>
`

export const svelteCode =
`// child component 1
<div>
  <slot></slot>
</div>

// child component 2
<div>
  <header><slot name="header"></slot></header>
  <section>子组件原有内容</section>
  <slot></slot>
  <footer><slot name="footer"></slot></footer>
</div>

// father component
<script>
  import SlotContainer1 from './Child1.svelte';
  import SlotContainer2 from './Child2.svelte';
</script>

<section>
  <h1>第五章 —— slot</h1>
  <SlotContainer1>
    hello world
  </SlotContainer1>
  <SlotContainer2>
    hello world2
    <span slot="header">父组件header</span>
    <span slot="footer">父组件footer</span>
  </SlotContainer2>
</section>
`