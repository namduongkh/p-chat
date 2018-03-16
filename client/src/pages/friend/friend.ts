import { Component, OnInit, Inject } from "@angular/core";
import { FriendshipService } from "../../services/friendship.service";
import { NavController } from "ionic-angular";
import { ConversationPage } from "../conversation/conversation";
import { AuthService } from "../../services/auth.service";
import { ConversationService } from "../../services/conversation.service";

@Component({
    selector: 'page-friend',
    templateUrl: 'friend.html'
})
export class FriendPage implements OnInit {
    list: any = [];

    ngOnInit(): void {
        this.friendshipSvc.list().subscribe(list => {
            this.list = list || [];
        });
    }

    constructor(private friendshipSvc: FriendshipService,
        private navCtrl: NavController,
        @Inject(AuthService) private auth: AuthService,
        private conversationSvc: ConversationService) { }

    createConversation(userId) {
        if (userId && this.auth.user && this.auth.user._id && userId != this.auth.user._id) {
            this.conversationSvc.create([this.auth.user._id, userId]).subscribe((conversation: { user, _id }) => {
                if (conversation && conversation._id) {
                    this.navCtrl.push(ConversationPage, {
                        conversationId: conversation._id
                    });
                }
            });
        }
    }
}