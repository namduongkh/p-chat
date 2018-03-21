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
import { FriendPage } from '../pages/friend/friend';
import { TabPages } from '../pages/tabs/tabs';
import { UserLoginPage } from '../pages/user/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabPages;

  // pages: Array<{ title: string, component: any }> = [];

  user: any = {};

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private store: Store<AppState>,
    @Inject(AuthService) public auth: AuthService) {

    this.initializeApp();

    this.store.pipe(select('user')).subscribe((user: { _id }) => {
      this.user = user || {};
      if (this.user && this.user._id) {
        this.rootPage = TabPages;
      } else {
        this.rootPage = UserLoginPage;
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
