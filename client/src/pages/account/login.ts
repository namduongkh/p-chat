import { Component, Inject, ViewChild } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { NavParams, NavController } from "ionic-angular";
import { RegisterPage } from "./register";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    login: any = {};

    constructor(public navParams: NavParams,
        @Inject(AuthService) public auth: AuthService,
        private navCtrl: NavController) {

        // console.log('LoginPage auth', this.auth);
    }

    goToRegister() {
        this.navCtrl.push(RegisterPage);
    }
}