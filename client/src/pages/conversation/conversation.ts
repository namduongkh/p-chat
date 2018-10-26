import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NavParams, Content } from "ionic-angular";
import { ConversationService } from "../../services/conversation.service";
import { MessageService } from "../../services/message.service";
import { SocketService } from "../../services/socket.service";
import { AuthService } from "../../services/auth.service";
import * as _ from 'lodash';

@Component({
    selector: 'page-conversation',
    templateUrl: 'conversation.html',
})
export class ConversationPage implements OnInit, OnDestroy {
    @ViewChild(Content) content: Content;
    @ViewChild('messageInput') messageInput;

    detail: any = { users: [] };
    messages: any = [];
    message: string;
    isTyping: boolean = false;
    typingUsers: any = [];
    seen: boolean = false;
    timeoutScroll;
    lastFromUser: string;

    constructor(
        private navParams: NavParams,
        private conversationSvc: ConversationService,
        private messageSvc: MessageService,
        private socket: SocketService,
        private auth: AuthService) {
    }

    ngOnInit() {
        this.conversationSvc.detail(this.navParams.get('conversationId')).subscribe(detail => {
            // console.log('detail', detail);
            this.detail = detail;
            this.joinConversation(this.detail._id);
            this.messageSvc.getMessages(this.detail._id).subscribe(list => {
                this.pushMessage(list, true);
            });
            this.onTyping();
        });
    }

    ngOnDestroy() {
        this.socket.leaveRoom(this.detail._id, () => {
            console.log('leave room ', this.detail._id);
        });
    }

    onTyping() {
        this.socket.on('message:is-typing', function (data) {
            if (data.userId != this.auth.user._id) {
                this.typingUsers.push(data);
            }
        }.bind(this));
        this.socket.on('message:stop-typing', function (data) {
            for (let i in this.typingUsers) {
                if (this.typingUsers[i].userId == data.userId) {
                    this.typingUsers.splice(i, 1);
                    break;
                }
            }
        }.bind(this));
    }

    sendMessage(message) {
        this.messageInput.setFocus();
        if (!message || !message.length) {
            return;
        }
        this.messageSvc.newMessage(this.detail._id, message).subscribe(result => {
            this.message = null;
            this.changeMessage(null, null);
            this.scrollBottom(true);
            this.seen = false;
            if (message == "run-demo-boss") {
                return;
            }
            this.pushMessage(result);
        });
    }

    joinConversation(id) {
        this.socket.joinRoom(id, () => {
            this.socket.on('message:new', function (data) {
                if (data.content == "run-demo-employee") {
                    setTimeout(() => {
                        this.sendMessage("run-demo-boss");
                        let demoMessages = [
                            "Chào em! Dự án vừa rồi tới đâu rồi em?",
                            "👍 Tốt lắm! Em đã vất vả nhiều rồi, sắp tới anh sẽ tăng lương cho em",
                            "Ừ, anh thấy chú đã cố gắng rất nhiều, đó là điều chú xứng đáng nhận được",
                            "Anh đặt 2 vé máy bay với resort 5 sao ở Maldives rồi, tuần sau chú được off 1 tuần dẫn gấu đi chơi nhé rồi về nhận hợp đồng mới",
                            "Anh cũng thật hạnh phúc vì có 1 nhân viên xuất sắc như em 😄"
                        ];
                        let i = 0;
                        this.sendMessage(demoMessages[i]);
                        i++;
                        let interval = setInterval(() => {
                            this.sendMessage(demoMessages[i]);
                            i++;
                            if (i == demoMessages.length) {
                                clearInterval(interval);
                            }
                        }, 8000);
                    }, 0);
                    return;
                }
                if (data.from._id !== this.auth.user._id) {
                    this.pushMessage(data);
                }
                this.lastFromUser = data.from._id;
                this.checkSeen();
            }.bind(this));
            this.socket.on('message:remove', function (messages) {
                // console.log('messages', messages);
                this.removeMessages(messages);
            }.bind(this));
            this.socket.on('message:seen', function (data) {
                if (this.lastFromUser == this.auth.user._id && this.auth.user._id !== data.userId) {
                    this.seen = true;
                }
            }.bind(this));
        });
    }

    pushMessage(data, noPush = false) {
        if (noPush) {
            this.messages = data || [];
        } else {
            this.messages.push(data);
            // this.messages.unshift(data);
        }
        this.scrollBottom();
    }

    scrollBottom(force = false) {
        this.timeoutScroll = setTimeout(() => {
            try {
                if (this.content) {
                    if (!force) {
                        let dimension = this.content.getContentDimensions();
                        // console.log(dimension.scrollHeight - (dimension.contentHeight + dimension.scrollTop), dimension.contentHeight)
                        if (dimension.scrollHeight - (dimension.contentHeight + dimension.scrollTop) < dimension.contentHeight / 2) {
                            this.content.scrollToBottom();
                        }
                    }
                    else {
                        this.content.scrollToBottom();
                    }
                }
            } catch (e) { }
            clearTimeout(this.timeoutScroll);
        }, 250);
    }

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
    }

    changeMessage(event, message) {
        if (message && message.length) {
            this.changeIsTyping(true);
        } else {
            this.changeIsTyping(false);
        }
    }

    changeIsTyping(newValue) {
        if (newValue !== this.isTyping) {
            this.socket.emit('room:typing', {
                status: newValue,
                userId: this.auth.user._id,
                userName: this.auth.user.name,
                conversationId: this.detail._id
            });
        }
        this.isTyping = newValue;
    }

    messageInputFocus() {
        this.scrollBottom(true);
        this.socket.emit('room:seen', {
            userId: this.auth.user._id,
            conversationId: this.detail._id
        });
    }

    checkSeen() {
        if (this.lastFromUser !== this.auth.user._id) {
            this.seen = false;
        }
    }
}