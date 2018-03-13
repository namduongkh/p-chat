import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { RoomPage } from '../room/room';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rooms;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav) {
    this.rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  openRoom(room) {
    this.navCtrl.push(RoomPage, { room: room });
  }
}
