import * as io from 'socket.io-client';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class SocketService {

    public io;

    constructor() {
        this.io = io('http://localhost:8888');
    }
}