import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Welcome from '../components/Welcome.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home, redirect: '/welcome', children: [{ path: '/welcome', component: Welcome }] }
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
  // 否则 token 存在那就放行，【正常这里应该有个校验 token 有效性的一个接口，或者通过后续的响应拦截器去做】
  next();
});

export default router;
