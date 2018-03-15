import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observer } from 'rxjs/Observer';
import { Injectable, Inject } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    apiUrl = 'http://localhost:8888/api';

    constructor(@Inject(HttpClient) private http: HttpClient) { }

    login(name) {
        console.log(this.apiUrl + '/hello');
        this.http.get(this.apiUrl + '/hello');
    }
}