<template>
    <form action="#">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username" v-model="loginData.username">
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" v-model="loginData.password">
        </div>
        <button type="button" @click="login()" class="btn btn-primary">Đăng nhập</button>
    </form>
</template>

<script>
import Axios from "axios";
import Config from "../js/config";

export default {
  name: "Login",
  data() {
    return {
      loginData: {}
    };
  },
  methods: {
    login() {
      Axios.post(Config.apiUrl + "/user/login", this.loginData).then(resp => {
        if (resp.data && resp.data.data) {
          if (resp.data.data) {
            this.$cookie.set("user", JSON.stringify(resp.data.data), 1);
            this.$emit("eDataUser", resp.data.data);
          } else {
            alert(resp.data.message);
          }
        }
      });
    }
  }
};
</script>
