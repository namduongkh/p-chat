import { AuthService } from "../../services/auth.service";
import { Inject, Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { NavParams, NavController, MenuController, AlertController } from "ionic-angular";
import { HomePage } from "../home/home";
import { UserEditPage } from "./edit";
import { ConversationService } from "../../services/conversation.service";
import { ConversationPage } from "../conversation/conversation";
import { FriendshipService } from "../../services/friendship.service";

@Component({
    selector: 'page-user-account',
    templateUrl: 'account.html'
})
export class UserAccountPage {

    userId: string;
    myId: string;
    userInfo: any = {};
    menuIcon: string = 'arrow-back';

    constructor(@Inject(AuthService) public auth: AuthService,
        private userSvc: UserService,
        private navParams: NavParams,
        private navCtrl: NavController,
        private menuCtrl: MenuController,
        private conversationSvc: ConversationService,
        private friendshipSvc: FriendshipService,
        private alertCtrl: AlertController) {

        this.myId = this.auth.user._id;
        this.userId = this.navParams.get('userId');
        if (this.userId) {
            if (this.userId !== this.auth.user._id) {
                this.userSvc.info({
                    userId: this.userId,
                    myId: this.myId
                }).subscribe((result: { data, status }) => {
                    if (result.status) {
                        this.userInfo = result.data;
                    } else {
                        this.navCtrl.setRoot(HomePage);
                    }
                });
            }
            else {
                this.userInfo = this.auth.user;
                this.userInfo.itMe = true;
            }
        } else {
            this.navCtrl.setRoot(HomePage);
        }


    }

    addFriend(userId) {
        this.friendshipSvc.invite(userId).subscribe((result: { message, status }) => {
            if (result.status) {
                // console.log('result', result);
                this.alertCtrl.create({
                    title: 'Thông báo!',
                    subTitle: result.message,
                    buttons: ['OK']
                }).present();
            }
        });
    }

    messageNow(userId) {
        this.conversationSvc.create([this.auth.user._id, userId]).subscribe((conversation: { user, _id }) => {
            if (conversation && conversation._id) {
                this.navCtrl.push(ConversationPage, {
                    conversationId: conversation._id
                });
            }
        });
    }

    editInfo() {
        this.navCtrl.push(UserEditPage);
    }

    openMenu() {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        } else {
            this.menuCtrl.toggle();
        }
    }

    removeFriend(friendshipId) {
        let alert = this.alertCtrl.create({
            title: 'Bạn chắc chứ?',
            message: 'Bạn chắc chắn sẽ hủy kết bạn với người này?',
            buttons: [
                {
                    text: 'Không',
                    role: 'cancel',
                    handler: () => {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Có',
                    handler: () => {
                        this.friendshipSvc.unfriend(friendshipId).subscribe((result: { message, status }) => {
                            if (result.status) {
                                this.alertCtrl.create({
                                    title: 'Thông báo!',
                                    subTitle: result.message,
                                    buttons: ['OK']
                                }).present();
                                this.userInfo.friendshipId = undefined;
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    }
}