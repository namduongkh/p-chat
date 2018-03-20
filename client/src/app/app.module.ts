// Angular & Ionic Core
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// End angular & ionic

// Components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RoomPage } from '../pages/room/room';
import { ListUserPage } from '../pages/list-user/list-user';
import { ConversationPage } from '../pages/conversation/conversation';
import { MessageService } from '../services/message.service';
import { LoginPage } from '../pages/account/login';
import { FriendPage } from '../pages/friend/friend';
import { UserHandlePopover } from '../pages/list-user/user-handle.popover';
import { UserItem } from '../pages/list-user/user-item';
import { TabPages } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
// End components

// Services
import { SocketService } from '../services/socket.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ConversationService } from '../services/conversation.service';
// End services

//Store
import { StoreModule, ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StorageSyncEffects, storageSync } from 'ngrx-store-ionic-storage';
import { EffectsModule } from '@ngrx/effects';
import Reducers from '../reducers';
import { AppState } from '../reducers/AppState';
import { FriendshipService } from '../services/friendship.service';
import { AnswerInvitationPopover } from '../pages/list-user/answer-invitation';

export const reducers: ActionReducerMap<AppState> = Reducers;

export const storageSyncReducer = storageSync({
  keys: ['user'],
  // ignoreActions: [],
  hydratedStateKey: 'hydrated',
  onSyncError: (err) => {
    console.log(err);
  }
});

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  return storageSyncReducer(reducer);
}

export const metaReducers: MetaReducer<any, any>[] = [storageMetaReducer];
// End Store

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RoomPage,
    ListUserPage,
    ConversationPage,
    FriendPage,
    UserHandlePopover,
    AnswerInvitationPopover,
    UserItem,
    TabPages,
    LoginPage,
    AccountPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    // StoreModule.forRoot(Reducers),
    StoreModule.forRoot(Reducers, {
      metaReducers,
      initialState: {
        hydrated: false
      }
    }),
    EffectsModule.forRoot([StorageSyncEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RoomPage,
    ListUserPage,
    ConversationPage,
    LoginPage,
    FriendPage,
    UserHandlePopover,
    AnswerInvitationPopover,
    TabPages,
    LoginPage,
    AccountPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocketService,
    AuthService,
    UserService,
    ConversationService,
    MessageService,
    FriendshipService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
