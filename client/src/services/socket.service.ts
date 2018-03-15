import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';

@Injectable()
export class SocketService {

    public io;

    constructor() { }

    public connect() {
        this.io = io('http://localhost:8888');
        return this.io;
    }

    public disconnect() {
        if (this.io) {
            this.io.disconnect();
        }
        return this.io;
    }

    public onConnect(cb) {
        if (this.io) {
            this.io.on('connect', cb);
        }
    }

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
        }
    }

    public leaveRoom(room, cb = function () { }) {
        if (this.io) {
            this.io.emit('room:leave', { room }, cb);
        }
    }
}