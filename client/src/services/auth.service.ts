import { Inject, Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ActionType } from '../actions';
import { AppState } from '../reducers/AppState';
import { SocketService } from './socket.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    public user;

    constructor(@Inject(SocketService) private socket: SocketService, private store: Store<AppState>, private userSvc: UserService) {
        this.store.pipe(select('user')).subscribe(user => {
            this.user = user || {};
            if (this.user.socketId && !this.socket.io) {
                this.connectSocket(this.user);
            }
        });
    }

    dispatchLogin(user) {
        this.socket.loginUser(user, (result) => {
            this.store.dispatch({ type: ActionType.USER_LOGIN, user: result });
        });
    }

    connectSocket(user) {
        this.socket.connect();
        this.socket.onConnect(() => {
            this.dispatchLogin(user);
        });
    }

    public login(name) {
        if (name) {
            this.userSvc
                .login(name)
                .subscribe(user => {
                    // console.log('user', user);
                    // let user = { name };
                    if (!this.socket || !this.socket.io || !this.socket.io.id) {
                        this.connectSocket(user);
                    } else {
                        this.dispatchLogin(user);
                    }
                });
        }
    }

    public logout() {
        this.socket.disconnect();
        this.store.dispatch({ type: ActionType.USER_LOGOUT });
    }
}