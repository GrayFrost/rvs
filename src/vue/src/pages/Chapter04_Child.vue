<template>
  <section>
    <h1>第四章 —— 生命周期</h1>
  </section>
</template>

<script>
export default {
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  }
}
</script>