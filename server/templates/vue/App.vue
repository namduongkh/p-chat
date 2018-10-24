<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="list-group" v-if="user">
          <li class="list-group-item"><strong>Xin chào {{ user.name }}!</strong></li>
          <router-link class="list-group-item" to="/">Trang chủ</router-link>
          <a href="#" class="list-group-item" @click="logout">Đăng xuất</a>
        </div>
        <div class="list-group" v-else>
          <router-link class="list-group-item" to="/login">Đăng nhập</router-link>
          <router-link class="list-group-item" to="/register">Đăng ký</router-link>
        </div>
      </div>
      <div class="col-sm-8">
        <router-view 
          @eDataUser="eDataUser"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Socket from "../js/socket";

export default {
  name: "App",
  data() {
    return {
      user: JSON.parse(this.$cookie.get("user")),
      socket: Socket.getInstance()
    };
  },
  methods: {
    eDataUser(data) {
      this.user = data;
      this.$router.replace('/');
    },
    logout() {
      this.$cookie.delete("user");
      this.user = null;
    }
  }
};
</script>

