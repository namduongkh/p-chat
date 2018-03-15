import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers/AppState';
import { ConversationService } from '../../services/conversation.service';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';

interface Conversation {
  user;
  _id;
}

@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html'
})
export class ListUserPage {
  users: any = [];
  user: any = {};

  constructor(public navCtrl: NavController, private store: Store<AppState>, private userSvc: UserService, private conversationSvc: ConversationService) {
    this.store.pipe(select('user')).subscribe(user => {
      this.user = user || {};
      this.userSvc.userList(this.user._id).subscribe((users) => {
        this.users = users || [];
      });
    });
  }

  createConversation(userId) {
    if (userId && this.user._id && userId != this.user._id) {
      this.conversationSvc.create([this.user._id, userId]).subscribe((conversation: Conversation) => {
        if (conversation && conversation._id) {
          this.navCtrl.push(ConversationPage, {
            conversationId: conversation._id
          });
        }
      });
    }
  }
}
