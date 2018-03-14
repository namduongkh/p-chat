import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomPage } from '../room/room';
// import { catchError, map, tap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
import { ActionType } from '../../actions';

import { AppState } from '../../reducers/AppState';
import { SocketService } from '../../services/socket.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // user: any = {};

  constructor(@Inject(AuthService) private auth: AuthService, private store: Store<AppState>) {
    // this.user = auth.user || {};
  }
}
