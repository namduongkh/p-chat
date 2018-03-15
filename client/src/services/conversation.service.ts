import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/AppState';
import { CommonService } from './common.service';

@Injectable()
export class ConversationService extends CommonService {
    constructor(private http: HttpClient, public store: Store<AppState>) {
        super(store, 'conversation');
    }

    create(users) {
        return this.http.post(this.apiUrl + '/create', { users });
    }

    detail(conversationId) {
        let myId;
        if (this.user && this.user._id) {
            myId = this.user._id;
        }
        return this.http.post(this.apiUrl + '/detail', { conversationId, myId });
    }
}