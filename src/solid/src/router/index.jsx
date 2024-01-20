import { lazy } from 'solid-js';

export const routes = [
  {
    path: "/chapter01",
    component: lazy(() => import("../pages/Chapter01")),
  },
  {
    path: '/chapter02',
    component: lazy(() => import("../pages/Chapter02")),
  },
  {
    path: '/chapter03',
    component: lazy(() => import("../pages/Chapter03")),
  },
  {
    path: '/chapter05',
    component: lazy(() => import("../pages/Chapter05")),
  }
]