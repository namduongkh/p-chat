import { Store, select } from "@ngrx/store";
import { AppState } from "../reducers/AppState";

export class CommonService {
    user: any = {};
    apiUrl: string = 'http://localhost:8888/api';
    myId: string;

    constructor(public store: Store<AppState>, afterFix: string) {
        this.store.pipe(select('user')).subscribe(user => {
            this.user = user || {};
            this.myId = this.user._id;
        });
        this.apiUrl += '/' + afterFix;
    }
}