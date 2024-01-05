<template>
  <div>
    <SlotContainer1>
      hello world
    </SlotContainer1>
    <SlotContainer2>
      hello world2
      <template v-slot:header>父组件header</template>
      <template #footer>父组件footer</template>
    </SlotContainer2>
  </div>
</template>

<script setup>
import SlotContainer1 from './Chapter05_Child1.vue';
import SlotContainer2 from './Chapter05_Child2.vue';
</script>