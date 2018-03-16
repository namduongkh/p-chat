import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NavParams, Content } from "ionic-angular";
import { ConversationService } from "../../services/conversation.service";
import { MessageService } from "../../services/message.service";
import { SocketService } from "../../services/socket.service";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'page-conversation',
    templateUrl: 'conversation.html',
})
export class ConversationPage implements OnInit, OnDestroy {
    @ViewChild(Content) content: Content;

    detail: any = { users: [] };
    messages: any = [];
    message: string;

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
        });
    }

    ngOnDestroy() {
        this.socket.leaveRoom(this.detail._id, () => {
            console.log('leave room ', this.detail._id);
        });
    }

    sendMessage(message) {
        if (!message || !message.length) {
            return;
        }
        this.messageSvc.newMessage(this.detail._id, message).subscribe(result => {
            this.message = null;
        });
    }

    joinConversation(id) {
        this.socket.joinRoom(id, () => {
            this.socket.on('message:new', function (data) {
                this.pushMessage(data);
            }.bind(this));
        });
    }

    pushMessage(data, noPush) {
        if (noPush) {
            this.messages = data || [];
        } else {
            this.messages.push(data);
        }
        setTimeout(() => {
            this.content.scrollToBottom();
        }, 250);
    }
}