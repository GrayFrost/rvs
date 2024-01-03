import Chapter01 from '../pages/Chapter01.svelte';
import Chapter02 from '../pages/Chapter02.svelte';
import Chapter03 from '../pages/Chapter03.svelte';
import Chapter04 from '../pages/Chapter04.svelte';

export const routes = [
  {
    path: '/chapter01',
    component: Chapter01
  },
  {
    path: '/chapter02',
    component: Chapter02,
  },
  {
    path: '/chapter03',
    component: Chapter03,
  },
  {
    path: '/chapter04',
    component: Chapter04,
  }
]