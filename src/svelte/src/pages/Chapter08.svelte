<script>
  let gender = '';

  const changeGender = (e) => {
    gender = e.target.value;
  }
</script>
<section>
  <h1>第八章 —— if</h1>
  请选择性别：
  <section class="flex">
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
  <section class="flex">
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
        <span class="text-sky-400">先生</span>
      {:else}
        <span class="text-rose-400">女士</span>
      {/if}
    </section>
  {/if}
</section>