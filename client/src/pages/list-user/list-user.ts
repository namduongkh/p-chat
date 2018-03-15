import { Component, Inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers/AppState';

@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html'
})
export class ListUserPage {
  users: any = [];
  user: any = {};

  constructor(private store: Store<AppState>, private userSvc: UserService) {
    store.pipe(select('user')).subscribe(user => {
      this.user = user || {};
      this.userSvc.userList(this.user._id).subscribe((users) => {
        this.users = users || [];
      });
    });
  }
}
