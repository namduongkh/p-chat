import { Component, Inject } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'page-room',
  templateUrl: 'room.html'
})
export class RoomPage {
  messages = [];
  room: any;
  msg: String;

  constructor(@Inject(SocketService) private socket: SocketService) {
    // this.room = this.navParams.get('room');
    // SocketService.joinRoom(this.room);

    this.socket.io.on('new-message', function (data) {
      data.id = this.messages.length + 1;
      this.messages.push(data);
      console.log('new-message', data, this.messages);
    }.bind(this));

    this.socket.io.emit('login', { name: 'Phong' }, function (data) {
      console.log('login data', data);
    });
  };

  sendMessage(msg) {
    this.socket.io.emit('send-message', {
      room: this.room,
      data: {
        from: this.socket.io.id,
        msg: msg
      }
    });
    this.msg = null;
  }
}
