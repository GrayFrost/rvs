import { createRouter, createWebHistory } from 'vue-router';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import Chapter01 from '../pages/Chapter01.vue';
import Chapter02 from '../pages/Chapter02.vue';
import Chapter03 from '../pages/Chapter03.vue';
import Chapter04 from '../pages/Chapter04.vue';
import Chapter05 from '../pages/Chapter05.vue';
import Chapter06 from '../pages/Chapter06.vue';
import Chapter10 from '../pages/Chapter10.vue';

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
  },
  {
    path: '/chapter05',
    component: Chapter05
  },
  {
    path: '/chapter06',
    component: Chapter06
  },
  {
    path: '/chapter10',
    component: Chapter10
  }
]

export const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/vue/' : '/'),
  routes: routes
});