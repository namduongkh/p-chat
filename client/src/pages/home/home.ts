import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { RoomPage } from '../room/room';
// import { catchError, map, tap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { ConversationService } from '../../services/conversation.service';
import { ConversationPage } from '../conversation/conversation';
import { AppState } from '../../reducers/AppState';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  conversations: any = [];

  constructor(@Inject(AuthService) private auth: AuthService,
    private conversationSvc: ConversationService,
    private navCtrl: NavController,
    private store: Store<AppState>) {

    this.store.pipe(select('user')).subscribe((user: { _id }) => {
      if (user && user._id) {
        this.conversationSvc.list(user._id).subscribe(lists => {
          this.conversations = lists || [];
        });
      }
    });
  }

  openConversation(id) {
    this.navCtrl.push(ConversationPage, { conversationId: id });
  }
}
