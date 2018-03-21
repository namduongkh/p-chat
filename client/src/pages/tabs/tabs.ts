import { Component, Inject, ViewChild } from "@angular/core";
import { HomePage } from "../home/home";
import { FriendPage } from "../friend/friend";
import { ListUserPage } from "../list-user/list-user";
import { AuthService } from "../../services/auth.service";
import { UserAccountPage } from "../user/account";
import { Nav } from "ionic-angular";

@Component({
    templateUrl: 'tab-pages.html',
})
export class TabPages {
    @ViewChild(Nav) nav: Nav;

    pages: Array<{ title: string, component: any, params?: any }> = [];

    // tabs: any = {
    //     home: ['Hội thoại', HomePage],
    //     friend: ['Bạn bè', FriendPage],
    //     connect: ['Kết nối', ListUserPage],
    //     account: ['Tài khoản', AccountPage],
    // };

    rootPage: any = HomePage;

    constructor(@Inject(AuthService) private auth: AuthService) {
        this.pages = [
            { title: 'Hội thoại', component: HomePage },
            { title: 'Bạn bè', component: FriendPage },
            { title: 'Kết nối', component: ListUserPage },
            { title: 'Tài khoản', component: UserAccountPage, params: { userId: this.auth.user._id } },
        ];
    }

    goToRoot(index, page) {
        // this.navCtlr.push(page)
        // console.log('index', index);
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        let params = page.params || {};
        this.nav.setRoot(page.component, params);
    }
}