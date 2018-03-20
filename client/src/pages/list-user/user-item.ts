import { Component, Input, Inject } from "@angular/core";
import { NavController } from "ionic-angular";
import { AuthService } from "../../services/auth.service";
import { ConversationService } from "../../services/conversation.service";
import { ConversationPage } from "../conversation/conversation";

@Component({
    selector: 'user-item',
    templateUrl: 'user-item.html'
})
export class UserItem {
    @Input() user;

    constructor(private navCtrl: NavController,
        @Inject(AuthService) private auth: AuthService,
        private conversationSvc: ConversationService) { }

    handleUserItem(user) {
        let userId = user._id;
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