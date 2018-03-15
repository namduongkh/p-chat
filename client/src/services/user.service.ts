import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    apiUrl = 'http://localhost:8888/api/user';

    constructor(private http: HttpClient) { }

    login(name) {
        return this.http.post(this.apiUrl + '/login', { name });
    }

    userList(myId) {
        return this.http.get(this.apiUrl + '/list', {
            params: {
                myId
            }
        });
    }
}