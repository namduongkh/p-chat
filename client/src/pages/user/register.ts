import { Component, Inject } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserLoginPage } from "./login";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'page-user-register',
    templateUrl: 'register.html'
})
export class UserRegisterPage {
    register: any = {};

    constructor(private navCtrl: NavController,
        @Inject(AuthService) public auth: AuthService) { }

    backToLogin() {
        this.navCtrl.popTo(UserLoginPage);
    }
}