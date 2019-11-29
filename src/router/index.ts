import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '@/layout/Layout.vue';
import Content from '../views/posts/Content.vue';
import Gallery from '../views/Gallery.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        children: [
          {
            path: '/post/:id',
            name: 'content',
            component: Content,
          },
        ],
      },
      {
        path: '/gallery',
        name: 'gallery',
        component: Gallery,
        // component: () => import('../views/Gallery.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
