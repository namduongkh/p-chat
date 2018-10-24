import 'bootstrap';
import Vue from "vue";
import App from "../vue/App";
import router from "./router";
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);

new Vue({
  el: '#p-chat-app',
  router,
  // store,
  template: '<App/>',
  components: { App }
});