<script>
  import SlotContainer1 from './Chapter05_Child1.svelte';
  import SlotContainer2 from './Chapter05_Child2.svelte';
</script>

<div>
  <SlotContainer1>
    hello world
  </SlotContainer1>
  <SlotContainer2>
    hello world2
    <span slot="header">父组件header</span>
    <span slot="footer">父组件footer</span>
  </SlotContainer2>
</div>