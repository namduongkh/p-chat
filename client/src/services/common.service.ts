import { Store, select } from "@ngrx/store";
import { AppState } from "../reducers/AppState";
import {
    HttpClient,
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export class CommonService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log('request', req);
        return next.handle(req);
    }
    user: any = {};
    apiUrl: string = 'http://localhost:8888/api';
    myId: string;

    constructor(public store: Store<AppState>, afterFix: string, http: HttpClient) {
        this.store.pipe(select('user')).subscribe(user => {
            this.user = user || {};
            this.myId = this.user._id;
        });
        this.apiUrl += '/' + afterFix;
    }
}