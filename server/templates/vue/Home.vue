<template>
  <div>
    <div class="list-group" v-if="user">
      <detail-user class="list-group-item" v-for="detail in users" :key="detail._id" :detail="detail" :user_id="user._id"></detail-user>
    </div>
    <Login v-else />
  </div>
</template>

<script>
import Axios from "axios";
import Config from "../js/config";
import DetailUser from "./DetailUser";

export default {
  name: "Home",
  data() {
    return {
      user: JSON.parse(this.$cookie.get("user")),
      users: []
    };
  },
  components: {
    DetailUser
  },
  created() {
    if (this.user) {
      Axios.get(Config.apiUrl + `/user/list?myId=${this.user._id}`).then(
        resp => {
          if (resp.data && resp.data.length) {
            this.users = resp.data;
          }
        }
      );
    }
  }
};
</script>

