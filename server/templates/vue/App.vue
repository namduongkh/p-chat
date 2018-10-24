<template>
    <div>
      <h1>P-Chat</h1>
      <p>
        <router-link to="/">Home</router-link>
        <router-link to="/dang-ky">Đăng ký</router-link>
      </p>
      <router-view></router-view>
    </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "App",
  data() {
    return {
      socket: io('http://localhost:8888')
    };
  },
  created() {}
};
</script>

