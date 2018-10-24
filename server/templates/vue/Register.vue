<template>
    <form action="#">
        <div class="form-group">
            <label for="name">Tên:</label>
            <input type="text" class="form-control" id="name" v-model="registerData.name">
        </div>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username" v-model="registerData.username">
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" v-model="registerData.password">
        </div>
        <button type="button" @click="register()" class="btn btn-primary">Đăng ký</button>
    </form>
</template>

<script>
import Axios from "axios";
import Config from "../js/config";

export default {
  name: "Register",
  data() {
    return {
      registerData: {}
    };
  },
  methods: {
    register() {
      Axios.post(Config.apiUrl + "/user/register", this.registerData).then(
        resp => {
          if (resp.data) {
            if (resp.data.data) {
              this.$cookie.set("user", JSON.stringify(resp.data.data), 1);
              this.$emit("eDataUser", resp.data.data);
            } else {
              alert(resp.data.message);
            }
          }
        }
      );
    }
  }
};
</script>
