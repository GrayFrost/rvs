export const reactCode =
`import { useState } from "react";

export default function Page() {
  const [gender, setGender] = useState("");

  const changeGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <section>
      <h1>第八章 —— if</h1>
      请选择性别：
      <section>
        <input
          id="male"
          type="radio"
          value="male"
          name="gender"
          checked={gender === "male"}
          onChange={changeGender}
        />
        <label htmlFor="male">男</label>
      </section>
      <section>
        <input
          id="female"
          type="radio"
          value="femail"
          name="gender"
          checked={gender === "female"}
          onChange={changeGender}
        />
        <label htmlFor="female">女</label>
      </section>
      {gender && (
        <section>
          你好，
          {gender === "male" ? (
            <span>先生</span>
          ) : (
            <span>女士</span>
          )}
        </section>
      )}
    </section>
  );
}
`;

export const vueCode =
`<template>
<section>
  <h1>第八章 —— if</h1>
  请选择性别：
  <section>
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
  <section>
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
      <span v-if="gender === 'male'">先生</span>
      <span v-else>女士</span>
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
`;

export const svelteCode =
`<script>
let gender = '';

const changeGender = (e) => {
  gender = e.target.value;
}
</script>
<section>
<h1>第八章 —— if</h1>
请选择性别：
<section>
  <input
    id="male"
    type="radio"
    value="male"
    name="gender"
    checked={gender === "male"}
    on:change={changeGender}
  />
  <label for="male">男</label>
</section>
<section>
  <input
    id="female"
    type="radio"
    value="femail"
    name="gender"
    checked={gender === "female"}
    on:change={changeGender}
  />
  <label for="female">女</label>
</section>
{#if gender}
  <section>
    你好，
    {#if gender === 'male'}
      <span>先生</span>
    {:else}
      <span>女士</span>
    {/if}
  </section>
{/if}
</section>
`