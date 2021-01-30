import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Welcome from '../components/Welcome.vue';
import Users from '../components/user/Users.vue';
import Rights from '../components/power/Rights.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/Home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        // 这 Home 组件里展示 Welcome 子组件
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // to 要访问的路径
  // from 从哪里来的
  // next() 直接放行，next('/login') 表示跳转
  // 要访问 /login 的话那直接放行
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  // token 不存在那就跳转到登录页面
  if (!tokenStr) return next('/login');
  // 否则 token 存在那就放行
  next();
});

export default router;
