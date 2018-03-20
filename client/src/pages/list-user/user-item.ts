import { Component, Input, Inject } from "@angular/core";
import { ModalController, NavController } from "ionic-angular";
import { AuthService } from "../../services/auth.service";
import { ConversationService } from "../../services/conversation.service";
import { ConversationPage } from "../conversation/conversation";

@Component({
    selector: 'user-item',
    templateUrl: 'user-item.html'
})
export class UserItem {
    @Input() user;

    constructor(@Inject(AuthService) private auth: AuthService,
        private conversationSvc: ConversationService,
        public modalCtrl: ModalController,
        private navCtrl: NavController) { }

    handleUserItem(user) {
        // console.log('handleUserItem', user);
        let userId = user._id;
        if (userId && this.auth.user && this.auth.user._id && userId != this.auth.user._id) {
            this.conversationSvc.create([this.auth.user._id, userId]).subscribe((conversation: { user, _id }) => {
                if (conversation && conversation._id) {
                    this.navCtrl.push(ConversationPage, {
                        conversationId: conversation._id
                    });
                    // let modal = this.modalCtrl.create(ConversationPage, {
                    //     conversationId: conversation._id
                    // });
                    // modal.present();
                }
            });
        }
    }
}