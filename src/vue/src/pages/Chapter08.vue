<template>
  <section>
    <h1>第八章 —— if</h1>
    请选择性别：
    <section class="flex">
      <input
        id="male"
        type="radio"
        value="male"
        name="gender"
        :checked="gender === 'male'"
        @change="changeGender"
      />
      <label for="male">男</label>
    </section>
    <section class="flex">
      <input
        id="female"
        type="radio"
        value="femail"
        name="gender"
        :checked="gender === 'female'"
        @change="changeGender"
      />
      <label for="female">女</label>
    </section>
    <section v-if="gender">
      <section>
        你好，
        <span v-if="gender === 'male'" class="text-sky-400">先生</span>
        <span v-else class="text-rose-400">女士</span>
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const gender = ref("");

const changeGender = (e) => {
  gender.value = e.target.value;
};
</script>
