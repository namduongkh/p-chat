<template>
  <div @click="gotoConversation([user_id, detail._id])">
    <h5>{{ detail.name }}</h5>
    <em>{{ detail.bio }}</em>
  </div>
</template>

<script>
import Axios from "axios";
import Config from "../js/config";

export default {
  name: "DetailUser",
  props: ["detail", "user_id"],
  data() {
    return {};
  },
  created() {},
  methods: {
    gotoConversation(users) {
      this.$router.push({ name: "conversation", query: { users } });
    }
  }
};
</script>

