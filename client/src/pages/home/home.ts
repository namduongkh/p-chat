import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoomPage } from '../room/room';
// import { catchError, map, tap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(@Inject(AuthService) private auth: AuthService) { }
}
