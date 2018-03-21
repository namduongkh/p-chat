import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    apiUrl = 'http://localhost:8888/api/user';

    constructor(private http: HttpClient) { }

    login(login) {
        return this.http.post(this.apiUrl + '/login', { ...login });
    }

    register(register) {
        return this.http.post(this.apiUrl + '/register', { ...register });
    }

    update(update) {
        return this.http.post(this.apiUrl + '/update', { ...update });
    }

    userList(myId) {
        return this.http.get(this.apiUrl + '/list', {
            params: {
                myId
            }
        });
    }
}