import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  // 首頁
  {
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  // 前台
  {
    path: '/front',
    component: import('../views/Front.vue'),
    children: [
      {
        path: 'school',
        component: import('../views/front/School.vue'),
      },
      {
        path: 'teachers',
        component: import('../views/front/Teachers.vue'),
      },
      {
        path: 'courses',
        component: import('../views/front/Courses.vue'),
      },
      {
        path: 'product/:id',
        component: import('../views/front/Product.vue'),
      },
      {
        path: 'login',
        component: import('../views/Login.vue'),
      },
      {
        path: 'checkout',
        component: import('../views/front/Checkout.vue'),
      },
    ],
  },
  // 後台
  {
    path: '/admin',
    component: import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: import('../views/admin/Products.vue'),
      },
      {
        path: 'news',
        component: import('../views/admin/News.vue'),
      },
      {
        path: 'coupons',
        component: import('../views/admin/Coupons.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
