import { Component, Inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'page-user-edit',
    templateUrl: 'edit.html'
})
export class UserEditPage {
    user: any = {};

    constructor(@Inject(AuthService) public auth: AuthService) {
        this.user = JSON.parse(JSON.stringify(this.auth.user));
    }
}