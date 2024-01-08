import { createRouter, createWebHistory } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

import Chapter00 from "../pages/Chapter00.vue";
import Chapter01 from "../pages/Chapter01.vue";
import Chapter02 from "../pages/Chapter02.vue";
import Chapter03 from "../pages/Chapter03.vue";
import Chapter04 from "../pages/Chapter04.vue";
import Chapter05 from "../pages/Chapter05.vue";
import Chapter06 from "../pages/Chapter06.vue";
import Chapter07 from "../pages/Chapter07.vue";
import Chapter08 from "../pages/Chapter08.vue";
import Chapter09 from "../pages/Chapter09.vue";
import Chapter10 from "../pages/Chapter10.vue";
import Chapter11 from "../pages/Chapter11.vue";
import Chapter12 from "../pages/Chapter12.vue";

const routes = [
  {
    path: "/chapter00",
    component: Chapter00,
  },
  {
    path: "/chapter01",
    component: Chapter01,
  },
  {
    path: "/chapter02",
    component: Chapter02,
  },
  {
    path: "/chapter03",
    component: Chapter03,
  },
  {
    path: "/chapter04",
    component: Chapter04,
  },
  {
    path: "/chapter05",
    component: Chapter05,
  },
  {
    path: "/chapter06",
    component: Chapter06,
  },
  {
    path: "/chapter07",
    component: Chapter07,
  },
  {
    path: "/chapter08",
    component: Chapter08,
  },
  {
    path: "/chapter09",
    component: Chapter09,
  },
  {
    path: "/chapter10",
    component: Chapter10,
  },
  {
    path: "/chapter11",
    component: Chapter11,
  },
  {
    path: "/chapter12",
    component: Chapter12,
  }
];

export const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue/" : "/"
  ),
  routes: routes,
});
