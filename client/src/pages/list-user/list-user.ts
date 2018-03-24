import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers/AppState';
import { ConversationService } from '../../services/conversation.service';
import { NavController, PopoverController, AlertController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { FriendshipService } from '../../services/friendship.service';
import { InvitationList } from '../friend/invitation-list';

@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html',
  entryComponents: [
    InvitationList
  ]
})
export class ListUserPage {
  users: any = [];
  invitations: any = [];
  user: any = {};

  constructor(public navCtrl: NavController,
    private store: Store<AppState>,
    private userSvc: UserService,
    private conversationSvc: ConversationService,
    public popoverCtrl: PopoverController,
    private friendshipSvc: FriendshipService,
    public alertCtrl: AlertController) {

    this.store.pipe(select('user')).subscribe(user => {
      this.user = user || {};
      this.userSvc.userList(this.user._id).subscribe((users) => {
        this.users = users || [];
      });
      this.friendshipSvc.invitations().subscribe((list) => {
        this.invitations = list || [];
      });
    });
  }

  createConversation(userId) {
    if (userId && this.user._id && userId != this.user._id) {
      this.conversationSvc.create([this.user._id, userId]).subscribe((conversation: { user, _id }) => {
        if (conversation && conversation._id) {
          this.navCtrl.push(ConversationPage, {
            conversationId: conversation._id
          });
        }
      });
    }
  }

  inviteFriend(userId) {
    this.friendshipSvc.invite(userId).subscribe((result: { message, status }) => {
      // console.log('result', result);
      this.alertCtrl.create({
        title: 'Thông báo!',
        subTitle: result.message,
        buttons: ['OK']
      }).present();
    });
  }

  // presentPopover(myEvent, userId) {
  //   let popover = this.popoverCtrl.create(UserHandlePopover, {
  //     action: function (actionName) {
  //       switch (actionName) {
  //         case 'conversation':
  //           return this.createConversation(userId);
  //         case 'invite':
  //           return this.inviteFriend(userId);
  //       }
  //     }.bind(this)
  //   });

  //   popover.present({
  //     ev: myEvent
  //   });
  // }

  // answerInvitation(myEvent, invitationId) {
  //   let popover = this.popoverCtrl.create(AnswerInvitationPopover, {
  //     action: function (actionName) {
  //       // switch (actionName) {
  //       //   case 'yes':
  //       //     return this.createConversation(userId);
  //       //   case 'no':
  //       //     return this.inviteFriend(userId);
  //       // }
  //       this.friendshipSvc[actionName](invitationId).subscribe(result => {
  //         this.alertCtrl.create({
  //           title: 'Thông báo!',
  //           subTitle: result.message,
  //           buttons: ['OK']
  //         }).present();
  //       });
  //     }.bind(this)
  //   });

  //   popover.present({
  //     ev: myEvent
  //   });
  // }

}
