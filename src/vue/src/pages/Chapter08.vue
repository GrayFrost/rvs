<template>
  <section>
    <h1>第八章 —— if</h1>
    <ul>
      <li v-for="(item, index) in list" class="flex" :key="index">
        <span>{{item}}:</span>
        <span v-if="item < 60">不及格</span>
        <span v-else-if="item >= 60 && item < 80">良好</span>
        <span v-else>优秀</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const list = reactive([55, 65, 75, 85]);
</script>
