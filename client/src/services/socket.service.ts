import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers/AppState';
import { ActionType } from '../actions';

@Injectable()
export class SocketService {

    public io;
    rooms: any;

    constructor(private store: Store<AppState>) {
        this.store.pipe(select('rooms')).subscribe(rooms => {
            this.rooms = rooms;
        });
    }

    public connect(cb = function () { }) {
        this.io = io('http://localhost:8888');
        // this.io.on('error', err => {
        //     console.log('error', err);
        //     this.io.close();
        // });
        this.io.on('connect', function () {
            for (let i in this.rooms) {
                if (this.rooms[i]) {
                    this.joinRoom(i, function () { });
                }
            }
            cb();
        }.bind(this));
        return this.io;
    }

    public disconnect() {
        if (this.io) {
            this.io.disconnect();
        }
        this.store.dispatch({ type: ActionType.LEAVE_ALL_ROOM })
        return this.io;
    }

    // public onConnect(cb) {
    //     if (this.io) {
    //         this.io.on('connect', cb);
    //     }
    // }

    public loginUser(user, cb) {
        if (this.io) {
            this.io.emit('user:login', user, function (result) {
                cb(result);
            });
        }
    }

    public emit = function (...argv) {
        if (this.io) {
            return this.io.emit(...argv);
        }
        return function () { };
    }

    public on = function (...argv) {
        if (this.io) {
            return this.io.on(...argv);
        }
        return function () { };
    }

    public joinRoom(room, cb = function () { }) {
        if (this.io) {
            this.io.emit('room:join', { room }, cb);
            this.store.dispatch({ type: ActionType.JOIN_ROOM, room });
        }
    }

    public leaveRoom(room, cb = function () { }) {
        if (this.io) {
            this.io.emit('room:leave', { room }, cb);
            this.store.dispatch({ type: ActionType.LEAVE_ROOM, room });
        }
    }
}