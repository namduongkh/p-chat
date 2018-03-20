import { Component, Inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { NavParams } from "ionic-angular";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    constructor(public navParams: NavParams,
        @Inject(AuthService) public auth: AuthService) {

        // console.log('LoginPage auth', this.auth);
    }
}