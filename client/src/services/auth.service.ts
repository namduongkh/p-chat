import { Inject, Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ActionType } from '../actions';
import { AppState } from '../reducers/AppState';
import { SocketService } from './socket.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    public user: any = undefined;

    constructor(@Inject(SocketService) private socket: SocketService,
        private store: Store<AppState>,
        private userSvc: UserService) {

        this.store.pipe(select('user')).subscribe(user => {
            // console.log('user', user);
            this.user = user || {};
            if (this.user && this.user._id && !this.socket.io) {
                this.connectSocket(this.user);
            }
        });
    }

    dispatchLogin(user) {
        // console.log('dispatchLogin', user);
        // this.socket.loginUser(user, (result) => {
        this.store.dispatch({ type: ActionType.USER_LOGIN, user: user });
        // });
    }

    connectSocket(user) {
        this.socket.connect(() => {
            // console.log('onConnect');
            this.dispatchLogin(user);
        });
        // this.socket.onConnect();
    }

    public login(login) {
        if (login) {
            this.userSvc
                .login(login)
                .subscribe((result: { status, data }) => {
                    // console.log('login result', result);
                    if (result.status) {
                        this.afterLogin(result.data);
                    }
                });
        }
    }

    public logout() {
        this.socket.disconnect();
        this.store.dispatch({ type: ActionType.USER_LOGOUT });
    }

    public register(register) {
        if (register) {
            this.userSvc
                .register(register)
                .subscribe((result: { status, data }) => {
                    // console.log('register result', result);
                    if (result.status) {
                        this.afterLogin(result.data);
                    }
                });
        }
    }

    public update(update) {
        if (update) {
            this.userSvc
                .update(update)
                .subscribe((result: { status, data }) => {
                    if (result.status) {
                        this.user = result.data;
                        this.store.dispatch({ type: ActionType.USER_UPDATE, user: this.user });
                    }
                });
        }
    }

    afterLogin(user) {
        if (!this.socket || !this.socket.io || !this.socket.io.id) {
            this.connectSocket(user);
        } else {
            this.dispatchLogin(user);
        }
    }
}