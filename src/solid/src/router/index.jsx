import { lazy } from 'solid-js';

export const routes = [
  {
    path: "/chapter01",
    component: lazy(() => import("../pages/Chapter01")),
  },
]