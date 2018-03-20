import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { RoomPage } from '../room/room';
// import { catchError, map, tap } from 'rxjs/operators';

import { ConversationService } from '../../services/conversation.service';
import { ConversationPage } from '../conversation/conversation';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  conversations: any = [];

  constructor(public navParams: NavParams,
    private conversationSvc: ConversationService,
    private navCtrl: NavController,
    @Inject(AuthService) public auth: AuthService) {

    // console.log('HomePage auth', this.auth);
    if (this.auth && this.auth.user && this.auth.user._id) {
      this.conversationSvc.list(this.auth.user._id).subscribe(lists => {
        this.conversations = lists || [];
      });
    }
  }

  openConversation(id) {
    this.navCtrl.push(ConversationPage, { conversationId: id });
  }
}
