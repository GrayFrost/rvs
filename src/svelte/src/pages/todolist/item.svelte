<script>
  export let index = 0;
  export let name = "";
  export let done = false;
</script>

<div class="flex items-center shadow-sm border rounded-lg h-12 px-4 mb-4">
  <span class="w-12 text-left flex-shrink-0">{index}</span>
  <span class="flex-1 overflow-hidden text-ellipsis">{name}</span>
  <span class="w-12 flex-shrink-0 text-right">
    <input type="checkbox" checked={done} />
  </span>
</div>
