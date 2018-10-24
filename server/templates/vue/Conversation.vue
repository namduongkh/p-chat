<template>
  <div>
    <div id="conversation-content">
        <div margin-bottom></div>
        <!-- <div text-right v-if="seen"><em>Đã xem</em></div> -->
        <div class="message-list">
            <div v-for="message in messages" :key="message._id" @click="showTimeId = message._id" v-bind:class="{'not-you': message.from._id != user._id, 'it-you': message.from._id == user._id}">
                <div class="message-content">
                    <span>{{message.content}}</span>
                </div>
                <!-- <div v-if="showTimeId == message._id" margin-bottom>
                    <em>({{message.created | date:'dd/MM/yyyy HH:mm:ss'}})</em>
                </div> -->
            </div>
        </div>
    </div>
    <div id="conversation-footer">
        <div v-if="typingUsers && typingUsers.length" class="typing">
            <em><span v-for="item in typingUsers" :key="item._id">{{item.userName}}</span> đang nhập...</em>
        </div>
        <div class="row">
            <div class="col-xs-10">
                <input type="text" id="message-input" class="message-input form-control" margin no-margin-left v-model="message" placeholder="Viết gì đó..." @keyup.enter="sendMessage(message)" @change="changeMessage($event, message)" />
            </div>
            <div class="col-xs-2">
                <button class="send-btn btn btn-primary" @click="sendMessage(message)">Gửi</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import _ from "lodash";
import Config from "../js/config";
import Socket from "../js/socket";

export default {
  name: "Conversation",
  data() {
    return {
      messages: [],
      message: null,
      socket: Socket.getInstance(),
      isTyping: false,
      user: JSON.parse(this.$cookie.get("user")),
      detail: {},
      typingUsers: []
    };
  },
  methods: {
    onTyping() {
      this.socket.on(
        "message:is-typing",
        function(data) {
          if (data.userId != this.user._id) {
            this.typingUsers.push(data);
          }
        }.bind(this)
      );
      this.socket.on(
        "message:stop-typing",
        function(data) {
          for (let i in this.typingUsers) {
            if (this.typingUsers[i].userId == data.userId) {
              this.typingUsers.splice(i, 1);
              break;
            }
          }
        }.bind(this)
      );
    },
    changeIsTyping(newValue) {
      if (newValue !== this.isTyping) {
        this.socket.emit("room:typing", {
          status: newValue,
          userId: this.user._id,
          userName: this.user.name,
          conversationId: this.detail._id
        });
      }
      this.isTyping = newValue;
    },
    changeMessage(event, message) {
      if (message && message.length) {
        this.changeIsTyping(true);
      } else {
        this.changeIsTyping(false);
      }
    },
    sendMessage(message) {
      // this.messageInput.setFocus();
      if (!message || !message.length) {
        return;
      }
      Axios.post(Config.apiUrl + `/message/new`, {
        from: this.user._id,
        conversation: this.detail._id,
        content: message
      }).then(resp => {
        this.message = null;
        this.changeMessage(null, null);
        this.scrollBottom(true);
        this.seen = false;
        this.pushMessage(resp.data);
      });
    },
    scrollBottom() {},
    pushMessage(data, noPush = false) {
      if (noPush) {
        this.messages = data || [];
      } else {
        this.messages.push(data);
        // this.messages.unshift(data);
      }
      this.scrollBottom();
    },
    removeMessages(messages = []) {
      _.each(messages, messageId => {
        for (let i in this.messages) {
          if (this.messages[i]._id == messageId) {
            this.messages.splice(i, 1);
            break;
          }
        }
      });
      this.scrollBottom();
    },
    joinConversation(room) {
      this.socket.emit("room:join", { room }, () => {
        this.socket.on(
          "message:new",
          function(data) {
            if (data.from._id !== this.user._id) {
              this.pushMessage(data);
            }
            // this.lastFromUser = data.from._id;
            // this.checkSeen();
            console.log("message:new");
          }.bind(this)
        );
        this.socket.on(
          "message:remove",
          function(messages) {
            // console.log('messages', messages);
            this.removeMessages(messages);
            console.log("message:remove");
          }.bind(this)
        );
        // this.socket.on(
        //   "message:seen",
        //   function(data) {
        //     // if (
        //     //   this.lastFromUser == this.user._id &&
        //     //   this.user._id !== data.userId
        //     // ) {
        //     //   this.seen = true;
        //     // }
        //     console.log("message:seen");
        //   }.bind(this)
        // );
      });
    }
  },
  created() {
    if (this.$route.params.users) {
      this.user._id = this.$route.params.users[0];
      Axios.post(Config.apiUrl + "/conversation/create", {
        users: this.$route.params.users
      }).then(resp => {
        if (resp.data) {
          Axios.post(Config.apiUrl + "/conversation/detail", {
            users: this.$route.params.users,
            conversationId: resp.data._id,
            user: this.$route.params.users[0]
          }).then(resp => {
            if (resp.data) {
              this.detail = resp.data;
              this.onTyping();
              this.joinConversation(resp.data._id);
              Axios.get(
                Config.apiUrl + `/message/list?conversationId=${resp.data._id}`
              ).then(resp => {
                if (resp.data) {
                  this.messages = resp.data;
                }
              });
            }
          });
        }
      });
    }
  }
};
</script>

