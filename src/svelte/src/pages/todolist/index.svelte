<script>
  import { twMerge } from "tailwind-merge";
  import TodoItem from "./item.svelte";
  import { list, todoList, completedList } from "./store";
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
    $list = [...$list, todoObj];
  };

  const updateTodo = (id, value) => {
    const newArr = $list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: value,
        };
      }
      return item;
    });
    $list = newArr;
  };

  let btnClass = "h-12 flex items-center justify-center hover:cursor-pointer rounded-lg";
</script>

<div
  class="flex flex-col w-[500px] h-[700px] overflow-hidden rounded-lg shadow-lg text-slate-900 mx-auto p-4"
>
  <div class="flex h-12">
    <input
      bind:value={todoName}
      class="flex-1 h-full border rounded-lg mr-4 px-4 caret-sky-500 focus:outline-sky-500"
    />
    <button
      class="w-[100px] h-full rounded-lg flex items-center justify-center bg-sky-500 text-white flex-shrink-0 hover:cursor-pointer"
      on:click={addTodo}>Add</button
    >
  </div>
  <div class="grid grid-cols-3 gap-4 h-12 my-4">
    <button
      class={twMerge(btnClass, type === "todo" && "bg-sky-500 text-white")}
      on:click={() => changeType("todo")}>Todo</button
    >
    <button
      class={twMerge(btnClass, type === "completed" && "bg-sky-500 text-white")}
      on:click={() => changeType("completed")}>Completed</button
    >
    <button
      class={twMerge(btnClass, type === "all" && "bg-sky-500 text-white")}
      on:click={() => changeType("all")}>All</button
    >
  </div>
  <div class="flex-1 overflow-auto">
    {#if type === "todo"}
      <div>
        {#each $todoList as item, index (item.id)}
          <TodoItem
            index={index + 1}
            name={item.name}
            done={item.done}
            on:change={({ detail: { checked } }) =>
              updateTodo(item.id, checked)}
          />
        {:else}
          <div>No todo item.</div>
        {/each}
      </div>
    {:else if type === "completed"}
      <div>
        {#each $completedList as item, index (item.id)}
          <TodoItem
            index={index + 1}
            name={item.name}
            done={item.done}
            on:change={({ detail: { checked } }) =>
              updateTodo(item.id, checked)}
          />
        {:else}
          <div>No completed item.</div>
        {/each}
      </div>
    {:else}
      <div>
        {#each $list as item, index (item.id)}
          <TodoItem
            index={index + 1}
            name={item.name}
            done={item.done}
            disabled={true}
          />
        {:else}
          <div>No data.</div>
        {/each}
      </div>
    {/if}
  </div>
</div>
