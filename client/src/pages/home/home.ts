import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomPage } from '../room/room';
import { catchError, map, tap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActionType } from '../../actions';

import { AppState } from '../../reducers/AppState';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};

  constructor(@Inject(SocketService) private socket: SocketService, private store: Store<AppState>) {
    store.pipe(select('user')).subscribe(user => {
      this.user = user;
    });
  }

  // openRoom(room) {
  //   this.navCtrl.push(RoomPage, { room: room });
  // }

  login(name) {
    if (name) {
      let user = {
        name: name,
        socketId: this.socket.io.id
      };
      this.store.dispatch({ type: ActionType.USER_LOGIN, user });
    }
    // console.log('socket', this.socket.io);
    // this.store.dispatch({ type: ActionType.USER_LOGIN, name });
  }

  logout(name) {
    // this.store.dispatch({ type: ActionType.USER_LOGOUT, name });
  }
}
