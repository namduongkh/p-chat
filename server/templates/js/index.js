import 'bootstrap';
import Vue from "vue";
import App from "../vue/App";
import router from "./router";

new Vue({
  el: '#p-chat-app',
  router,
  // store,
  template: '<App/>',
  components: { App }
});