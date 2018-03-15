import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    apiUrl = 'http://localhost:8888/api';

    constructor(private http: HttpClient) { }

    login(name) {
        return this.http.post(this.apiUrl + '/user/login', { name });
    }

    userList(myId) {
        return this.http.get(this.apiUrl + '/user/list', {
            params: {
                myId
            }
        });
    }
}