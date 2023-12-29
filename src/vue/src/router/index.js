import { createRouter, createWebHashHistory } from 'vue-router';
import OnePage from '../pages/One.vue';
import TwoPage from '../pages/Two.vue';
import ThreePage from '../pages/Three.vue';

const routes = [
  {
    path: '/one',
    component: OnePage,
  },
  {
    path: '/two',
    component: TwoPage
  },
  {
    path: '/three',
    component: ThreePage
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});