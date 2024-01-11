import { writable, derived } from 'svelte/store';

export const list = writable([]);

export const todoList = derived([list], ([$list]) => {
  return $list.filter(item => !item.done);
});

export const completedList = derived([list], ([$list]) => {
  return $list.filter(item => item.done);
})
