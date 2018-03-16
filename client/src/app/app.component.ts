import { Component, ViewChild, Inject } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListUserPage } from '../pages/list-user/list-user';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers/AppState';
import { AuthService } from '../services/auth.service';
import { LoginPage } from '../pages/login/login';
import { FriendPage } from '../pages/friend/friend';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  user: any = {};

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private store: Store<AppState>,
    @Inject(AuthService) private auth: AuthService) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'List User', component: ListUserPage },
    ];

    this.store.pipe(select('user')).subscribe((user: { _id }) => {
      this.user = user || {};
      if (this.user && this.user._id) {
        this.pages = [
          { title: 'Hội thoại', component: HomePage },
          // { title: 'List', component: ListPage },
          { title: 'Bạn bè', component: FriendPage },
          { title: 'Kết nối', component: ListUserPage },
        ];
        this.rootPage = HomePage;
      } else {
        this.pages = [
          { title: 'Đăng nhập', component: LoginPage },
        ];
        this.rootPage = LoginPage;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
