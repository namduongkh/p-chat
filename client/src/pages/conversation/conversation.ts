import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavParams } from "ionic-angular";
import { ConversationService } from "../../services/conversation.service";
import { MessageService } from "../../services/message.service";
import { SocketService } from "../../services/socket.service";

@Component({
    selector: 'page-conversation',
    templateUrl: 'conversation.html',
})
export class ConversationPage implements OnInit, OnDestroy {
    detail: any = { users: [] };
    messages: any = [];
    message: string;

    constructor(
        private navParams: NavParams,
        private conversationSvc: ConversationService,
        private messageSvc: MessageService,
        private socket: SocketService) {
    }

    ngOnInit() {
        this.conversationSvc.detail(this.navParams.get('conversationId')).subscribe(detail => {
            // console.log('detail', detail);
            this.detail = detail;
            this.joinConversation(this.detail._id);
            this.messageSvc.getMessages(this.detail._id).subscribe(list => {
                this.messages = list || [];
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
            // this.messages.push(result);
            this.message = null;
        });
    }

    joinConversation(id) {
        this.socket.joinRoom(id, () => {
            this.socket.on('message:new', function (data) {
                this.messages.push(data);
            }.bind(this));
        });
    }
}