import Chapter01 from '../pages/Chapter01.svelte';
import Chapter02 from '../pages/Chapter02.svelte';
import Chapter03 from '../pages/Chapter03.svelte';
import Chapter04 from '../pages/Chapter04.svelte';
import Chapter05 from '../pages/Chapter05.svelte';
import Chapter06 from '../pages/Chapter06.svelte';
import Chapter07 from '../pages/Chapter07.svelte';
import Chapter10 from '../pages/Chapter10.svelte';

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
  },
  {
    path: '/chapter05',
    component: Chapter05,
  },
  {
    path: '/chapter06',
    component: Chapter06,
  },
  {
    path: '/chapter07',
    component: Chapter07,
  },
  {
    path: '/chapter10',
    component: Chapter10,
  }
]