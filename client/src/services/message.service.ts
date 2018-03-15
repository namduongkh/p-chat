import { CommonService } from "./common.service";
import { AppState } from "../reducers/AppState";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MessageService extends CommonService {
    constructor(public store: Store<AppState>, private http: HttpClient) {
        super(store, 'message');
    }

    getMessages(conversationId) {
        return this.http.get(this.apiUrl + '/list', {
            params: { conversationId }
        });
    }

    newMessage(conversationId, content) {
        return this.http.post(this.apiUrl + '/new', {
            from: this.myId,
            conversation: conversationId,
            content
        });
    }
}