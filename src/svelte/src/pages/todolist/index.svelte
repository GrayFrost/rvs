<script>
  import TodoItem from "./item.svelte";
  import { list } from './store'
  let todoName = "";
  let type = "todo"; // todo completed all

  const changeType = (newType) => {
    type = newType;
  };

  const addTodo = () => {
    if (!todoName) {
      return;
    }
    const todoObj = {
      id: new Date().valueOf(),
      name: todoName,
      done: false,
    };
    $list = [...$list, todoObj]
  }
</script>

<div
  class="flex flex-col w-[500px] h-[700px] overflow-hidden rounded-lg shadow-lg text-slate-900 mx-auto p-4"
>
  <div class="flex h-12">
    <input bind:value={todoName}  class="flex-1 h-full border rounded-lg mr-4 px-4 caret-sky-500 focus:outline-sky-500" />
    <button class="w-[100px] h-full rounded-lg flex items-center justify-center bg-sky-500 text-white flex-shrink-0 hover:cursor-pointer" on:click={addTodo}>Add</button>
  </div>
  <div class="flex h-12">
    <button on:click={() => changeType("todo")}>Todo</button>
    <button on:click={() => changeType("completed")}>Completed</button>
    <button on:click={() => changeType("all")}>All</button>
  </div>
  <div class="flex-1 overflow-auto">
    {#if type === "todo"}
      <div>
        {#each $list as item, index (item.id)}
          <TodoItem index={index} name={item.name} done={item.done} />
        {/each}
      </div>
    {:else if type === "completed"}
      <div>completed list</div>
    {:else}
      <div>
        {#each $list as item, index (item.id)}
          <TodoItem index={index} name={item.name} done={item.done} />
        {/each}
      </div>
    {/if}
  </div>
</div>
