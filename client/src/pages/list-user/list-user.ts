import { Component, Inject } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import { SocketService } from '../../services/socket.service';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html'
})
export class ListUserPage {
  users = [];
  constructor(@Inject(SocketService) private socket: SocketService) {
    this.getUserList();
    this.onUserListChange();
  }

  getUserList() {
    this.socket.emit('user:list', function (result) {
      // console.log('user:list', result);
      this.users = result;
    }.bind(this));
  }

  onUserListChange() {
    this.socket.on('user:list-change', function () {
      this.getUserList();
    }.bind(this));
  }

}
