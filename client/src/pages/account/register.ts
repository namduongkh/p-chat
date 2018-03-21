import { Component, Inject } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "./login";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    register: any = {};

    constructor(private navCtrl: NavController,
        @Inject(AuthService) public auth: AuthService) { }

    backToLogin() {
        this.navCtrl.popTo(LoginPage);
    }
}