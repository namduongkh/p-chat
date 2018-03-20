import { Component, Inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'page-account',
    templateUrl: 'account.html'
})
export class AccountPage {
    constructor(@Inject(AuthService) public auth: AuthService) { }
}