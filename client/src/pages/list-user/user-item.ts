import { Component, Input, Inject } from "@angular/core";
import { ModalController, NavController, ActionSheetController, AlertController } from "ionic-angular";
import { AuthService } from "../../services/auth.service";
import { ConversationPage } from "../conversation/conversation";
import { UserAccountPage } from "../user/account";
import { FriendshipService } from "../../services/friendship.service";
import { ListUserPage } from "./list-user";

@Component({
    selector: 'user-item',
    templateUrl: 'user-item.html'
})
export class UserItem {
    @Input() user;
    @Input() conversationId;
    @Input() invitationId;

    constructor(@Inject(AuthService) private auth: AuthService,
        public modalCtrl: ModalController,
        private navCtrl: NavController,
        private actionSheetCtrl: ActionSheetController,
        private alertCtrl: AlertController,
        private friendshipSvc: FriendshipService) { }

    handleUserItem(user) {
        if (this.conversationId) {
            this.navCtrl.push(ConversationPage, { conversationId: this.conversationId });
        } else if (this.invitationId) {
            let actionSheet = this.actionSheetCtrl.create({
                title: 'Trả lời yêu cầu kết bạn',
                buttons: [
                    {
                        text: 'Đồng ý',
                        handler: () => {
                            // console.log('Destructive clicked');
                            this.answerInvitation('accept', this.invitationId);
                            this.invitationId = undefined;
                        }
                    }, {
                        text: 'Hủy yêu cầu',
                        role: 'destructive',
                        handler: () => {
                            // console.log('Archive clicked');
                            this.answerInvitation('unfriend', this.invitationId);
                            this.invitationId = undefined;
                        }
                    }
                ]
            });
            actionSheet.present();
        } else {
            // console.log('handleUserItem', user);
            let userId = user._id;
            // if (userId && this.auth.user && this.auth.user._id && userId != this.auth.user._id) {
            //     this.conversationSvc.create([this.auth.user._id, userId]).subscribe((conversation: { user, _id }) => {
            //         if (conversation && conversation._id) {
            //             this.navCtrl.push(ConversationPage, {
            //                 conversationId: conversation._id
            //             });
            //         }
            //     });
            // }
            this.navCtrl.push(UserAccountPage, {
                userId
            });
        }
    }

    answerInvitation(actionName, invitationId) {
        this.friendshipSvc[actionName](invitationId).subscribe(result => {
            this.alertCtrl.create({
                title: 'Thông báo!',
                subTitle: result.message,
                buttons: ['OK']
            }).present();
        });
    }
}