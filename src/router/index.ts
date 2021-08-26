import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import POSTS from '../views/POSTS.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/women',
  },
  {
    path: '/women',
    name: 'Womens',
    component: POSTS,
  },
  {
    path: '/men',
    name: 'Men',
    component: POSTS,
  },
  {
    path: '/kids',
    name: 'Kids',
    component: POSTS,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
