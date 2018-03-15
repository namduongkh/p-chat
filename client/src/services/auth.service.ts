import { Inject, Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ActionType } from '../actions';
import { AppState } from '../reducers/AppState';
import { SocketService } from './socket.service';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    public user;

    constructor(@Inject(SocketService) private socket: SocketService, private store: Store<AppState>, @Inject(UserService) private userSvc: UserService) {
        store.pipe(select('user')).subscribe(user => {
            this.user = user || {};
            if (this.user.socketId && !this.socket.io) {
                this.socket.connect();
                this.socket.onConnect(() => {
                    this.dispatchLogin(this.user);
                });
            }
        });
    }

    dispatchLogin(user) {
        this.socket.loginUser(user, (result) => {
            this.store.dispatch({ type: ActionType.USER_LOGIN, user: result });
        });
    };

    public login(name) {
        this.userSvc.login(name);

        if (name) {
            let user = { name };
            if (!this.socket || !this.socket.io || !this.socket.io.id) {
                this.socket.connect();
                this.socket.onConnect(() => {
                    this.dispatchLogin(user);
                });
            } else {
                this.dispatchLogin(user);
            }
        }
    }

    public logout() {
        this.socket.disconnect();
        this.store.dispatch({ type: ActionType.USER_LOGOUT });
    }
}