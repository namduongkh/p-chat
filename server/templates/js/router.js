import Vue from 'vue';
import Router from 'vue-router';
import Register from "../vue/Register";
import Login from "../vue/Login";
import Home from "../vue/Home";
import Conversation from "../vue/Conversation";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'conversation',
      path: '/conversation',
      component: Conversation
    },
    {
      name: 'register',
      path: '/register',
      component: Register
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
  ]
});
