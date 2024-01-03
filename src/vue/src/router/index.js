import { createRouter, createWebHistory } from 'vue-router';
import Chapter01 from '../pages/Chapter01.vue';
import Chapter02 from '../pages/Chapter02.vue';
import Chapter03 from '../pages/Chapter03.vue';
import Chapter04 from '../pages/Chapter04.vue';

const routes = [
  {
    path: '/chapter01',
    component: Chapter01,
  },
  {
    path: '/chapter02',
    component: Chapter02
  },
  {
    path: '/chapter03',
    component: Chapter03
  },
  {
    path: '/chapter04',
    component: Chapter04
  }
]

export const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__),
  routes: routes
});