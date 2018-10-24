import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from "../vue/Dashboard";
import Register from "../vue/Register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Dashboard
    },
    {
      name: 'Đăng ký',
      path: '/dang-ky',
      component: Register
    }
  ]
});
