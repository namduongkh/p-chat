import { Component, Inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    constructor(@Inject(AuthService) private auth: AuthService) { }
}