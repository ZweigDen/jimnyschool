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
    component: () => import('../views/Front.vue'),
    children: [
      // 校園介紹
      {
        path: 'school',
        component: () => import('../views/front/School.vue'),
      },
      {
        path: 'map',
        component: () => import('../views/front/Map.vue'),
      },
      {
        path: 'details',
        component: () => import('../views/front/Details.vue'),
      },
      {
        path: 'teachers',
        component: () => import('../views/front/Teachers.vue'),
      },
      {
        path: 'classroom',
        component: () => import('../views/front/Classroom.vue'),
      },
      // 招生
      {
        path: 'admissions',
        component: () => import('../views/front/Admissions.vue'),
      },
      {
        path: 'suitable',
        component: () => import('../views/front/Suitable.vue'),
      },
      {
        path: 'money',
        component: () => import('../views/front/Money.vue'),
      },
      {
        path: 'otherqa',
        component: () => import('../views/front/Otherqa.vue'),
      },
      // 課程平台
      {
        path: 'lesson',
        component: () => import('../views/front/Lesson.vue'),
      },
      {
        path: 'introduction',
        component: () => import('../views/front/Introduction.vue'),
      },
      {
        path: 'courses',
        component: () => import('../views/front/Courses.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/Product.vue'),
      },
      // pay
      {
        path: 'checkout',
        component: () => import('../views/front/Checkout.vue'),
      },
      // 登入
      {
        path: 'login',
        component: () => import('../views/Login.vue'),
      },
      // news&blog
      {
        path: 'articles',
        component: () => import('../views/front/Articles.vue'),
      },
      {
        path: 'article/:id',
        component: () => import('../views/front/Article.vue'),
      },
      // other
      {
        path: 'cooperation',
        component: () => import('../views/front/Cooperation.vue'),
      },
      {
        path: 'recruit',
        component: () => import('../views/front/Recruit.vue'),
      },
    ],
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'news',
        component: () => import('../views/admin/News.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
