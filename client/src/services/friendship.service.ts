import { CommonService } from "./common.service";
import { AppState } from "../reducers/AppState";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FriendshipService extends CommonService {
    constructor(public store: Store<AppState>, private http: HttpClient) {
        super(store, 'friendship', http);
    }

    list() {
        let myId;
        if (this.user && this.user._id) {
            myId = this.user._id;
        }
        return this.http.get(this.apiUrl + '/list', {
            params: {
                myId
            }
        });
    }

    invite(friendId) {
        let myId;
        if (this.user && this.user._id) {
            myId = this.user._id;
        }
        return this.http.post(this.apiUrl + '/invite', {
            myId,
            friendId
        });
    }

    accept(friendshipId) {
        return this.http.post(this.apiUrl + '/accept', {
            friendshipId
        });
    }

    unfriend(friendshipId) {
        return this.http.post(this.apiUrl + '/unfriend', {
            friendshipId
        });
    }

    invitations() {
        let myId;
        if (this.user && this.user._id) {
            myId = this.user._id;
        }
        return this.http.get(this.apiUrl + '/invitations', {
            params: {
                myId
            }
        });
    }
}