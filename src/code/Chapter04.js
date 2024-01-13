export const reactCode =
`import React from "react";

class Page extends React.Component {
  static getDerivedStateFromProps() {
    console.log("static getDerivedStateFromProps");
    return true;
  }
  
  componentDidMount() {
    console.log("componentDidMount");
  }
  
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  static getDerivedStateFromError() {
    console.log("static getDerivedStateFromError");
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <section>
        <h1>第四章 —— 生命周期</h1>
      </section>
    );
  }
}
`;

export const vueCode = 
`<template>
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
`;

export const svelteCode =
`<script>
import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";

onMount(() => {
  console.log("onMount");
});

beforeUpdate(() => {
  console.log("beforeUpdate");
});

afterUpdate(() => {
  console.log("afterUpdate");
});

onDestroy(() => {
  console.log("onDestroy");
});
</script>

<section>
<h1>第四章 —— 生命周期</h1>
</section>
`;
