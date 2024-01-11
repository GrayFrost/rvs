<script>
  import { twMerge } from 'tailwind-merge';
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let index = 0;
  export let name = "";
  export let done = false;
  export let disabled = false;

  const changeDone = (e) => {
    dispatch("change", { checked: e.target.checked });
  };

  let divClass =  twMerge(
    "flex items-center shadow-sm border rounded-lg h-12 px-4 mb-4",
    disabled && "opacity-65"
  );
</script>

<div class={divClass} transition:slide>
  <span class="w-12 text-left flex-shrink-0">{index}</span>
  <span class="flex-1 overflow-hidden text-ellipsis">{name}</span>
  <span class="w-12 flex-shrink-0 flex justify-end items-center">
    <input
      type="checkbox"
      checked={done}
      class="w-4 h-4"
      on:change={changeDone}
      {disabled}
    />
  </span>
</div>
