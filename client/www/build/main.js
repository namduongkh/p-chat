webpackJsonp([0],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(25);

var CommonService = (function () {
    function CommonService(store, afterFix, http) {
        var _this = this;
        this.store = store;
        this.user = {};
        this.apiUrl = 'http://localhost:8888/api';
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* select */])('user')).subscribe(function (user) {
            _this.user = user || {};
            _this.myId = _this.user._id;
        });
        this.apiUrl += '/' + afterFix;
    }
    CommonService.prototype.intercept = function (req, next) {
        console.log('request', req);
        return next.handle(req);
    };
    return CommonService;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conversation_conversation__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import { RoomPage } from '../room/room';
// import { catchError, map, tap } from 'rxjs/operators';



var HomePage = (function () {
    function HomePage(navParams, conversationSvc, navCtrl, auth) {
        var _this = this;
        this.navParams = navParams;
        this.conversationSvc = conversationSvc;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.conversations = [];
        // console.log('HomePage auth', this.auth);
        if (this.auth && this.auth.user && this.auth.user._id) {
            this.conversationSvc.list(this.auth.user._id).subscribe(function (lists) {
                _this.conversations = lists || [];
            });
        }
    }
    HomePage.prototype.openConversation = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__conversation_conversation__["a" /* ConversationPage */], { conversationId: id });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Hội thoại</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list *ngIf="conversations && conversations.length">\n        <!-- <button ion-item *ngFor="let conv of conversations" (click)="openConversation(conv._id)">\n            <strong *ngFor="let user of conv.users">{{user.name}}</strong>\n        </button> -->\n        <user-item *ngFor="let conv of conversations" [user]="conv.users[0]" [conversationId]="conv._id"></user-item>\n    </ion-list>\n    <button *ngIf="conversations && !conversations.length" ion-button color="dark" clear full disabled>Chưa có cuộc hội thoại</button>\n</ion-content>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/home/home.html"*/
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__["a" /* ConversationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitationList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_friendship_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvitationList = (function () {
    function InvitationList(friendshipSvc) {
        var _this = this;
        this.friendshipSvc = friendshipSvc;
        this.invitations = [];
        this.friendshipSvc.invitations().subscribe(function (list) {
            _this.invitations = list || [];
        });
    }
    InvitationList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'invitation-list',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/friend/invitation-list.html"*/'<ion-list *ngIf="invitations && invitations.length">\n    <ion-list-header>Lời mời kết bạn</ion-list-header>\n    <user-item *ngFor="let invitation of invitations" [user]="invitation.from" [invitationId]="invitation._id"></user-item>\n</ion-list>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/friend/invitation-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_friendship_service__["a" /* FriendshipService */]])
    ], InvitationList);
    return InvitationList;
}());

//# sourceMappingURL=invitation-list.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_conversation_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__conversation_conversation__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_friendship_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var UserAccountPage = (function () {
    function UserAccountPage(auth, userSvc, navParams, navCtrl, menuCtrl, conversationSvc, friendshipSvc, alertCtrl) {
        var _this = this;
        this.auth = auth;
        this.userSvc = userSvc;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.conversationSvc = conversationSvc;
        this.friendshipSvc = friendshipSvc;
        this.alertCtrl = alertCtrl;
        this.userInfo = {};
        this.menuIcon = 'arrow-back';
        this.myId = this.auth.user._id;
        this.userId = this.navParams.get('userId');
        if (this.userId) {
            if (this.userId !== this.auth.user._id) {
                this.userSvc.info({
                    userId: this.userId,
                    myId: this.myId
                }).subscribe(function (result) {
                    if (result.status) {
                        _this.userInfo = result.data;
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                });
            }
            else {
                this.userInfo = this.auth.user;
                this.userInfo.itMe = true;
            }
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
    }
    UserAccountPage.prototype.addFriend = function (userId) {
        var _this = this;
        this.friendshipSvc.invite(userId).subscribe(function (result) {
            if (result.status) {
                // console.log('result', result);
                _this.alertCtrl.create({
                    title: 'Thông báo!',
                    subTitle: result.message,
                    buttons: ['OK']
                }).present();
            }
        });
    };
    UserAccountPage.prototype.messageNow = function (userId) {
        var _this = this;
        this.conversationSvc.create([this.auth.user._id, userId]).subscribe(function (conversation) {
            if (conversation && conversation._id) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__conversation_conversation__["a" /* ConversationPage */], {
                    conversationId: conversation._id
                });
            }
        });
    };
    UserAccountPage.prototype.editInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit__["a" /* UserEditPage */]);
    };
    UserAccountPage.prototype.openMenu = function () {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
        else {
            this.menuCtrl.toggle();
        }
    };
    UserAccountPage.prototype.removeFriend = function (friendshipId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Bạn chắc chứ?',
            message: 'Bạn chắc chắn sẽ hủy kết bạn với người này?',
            buttons: [
                {
                    text: 'Không',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Có',
                    handler: function () {
                        _this.friendshipSvc.unfriend(friendshipId).subscribe(function (result) {
                            if (result.status) {
                                _this.alertCtrl.create({
                                    title: 'Thông báo!',
                                    subTitle: result.message,
                                    buttons: ['OK']
                                }).present();
                                _this.userInfo.friendshipId = undefined;
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    UserAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-user-account',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/user/account.html"*/'<ion-content id="mod-user-account-content">\n    <div class="nav-bar">\n        <button ion-button clear full no-margin (click)="openMenu()" icon-only color="light">\n            <ion-icon [name]="menuIcon"></ion-icon>\n        </button>\n        <button *ngIf="userInfo && userInfo.itMe" ion-button clear full no-margin (click)="auth.logout()" icon-only color="light">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n    </div>\n    <div class="cover"></div>\n    <div class="avatar-name">\n        <img class="avatar" src="assets/imgs/logo.png" />\n        <div class="name-content">\n            <h3 class="name">\n                {{userInfo.name}}\n            </h3>\n            <em>{{userInfo.bio}}</em>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-padding no-margin id="mod-user-account-footer">\n    <ion-toolbar no-padding no-margin *ngIf="userInfo && !userInfo.itMe">\n        <div class="action">\n            <!-- <button ion-button clear full no-margin (click)="openMenu()" icon-only>\n                <ion-icon [name]="menuIcon"></ion-icon>\n            </button> -->\n            <button *ngIf="!userInfo.friendshipId" ion-button clear full no-margin (click)="addFriend(userInfo._id)">Kết bạn</button>\n            <button *ngIf="userInfo.friendshipId" ion-button clear full no-margin (click)="removeFriend(userInfo.friendshipId)">Hủy kết bạn</button>\n            <button ion-button clear full no-margin (click)="messageNow(userInfo._id)">Nhắn tin</button>\n        </div>\n    </ion-toolbar>\n    <ion-toolbar no-padding no-margin *ngIf="userInfo && userInfo.itMe">\n        <div class="action">\n            <!-- <button ion-button clear full no-margin (click)="openMenu()" icon-only>\n                <ion-icon [name]="menuIcon"></ion-icon>\n            </button> -->\n            <button ion-button clear full no-margin (click)="editInfo()">Chỉnh sửa</button>\n            <!-- <button ion-button clear full no-margin (click)="auth.logout()">Đăng xuất</button> -->\n        </div>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/user/account.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__services_conversation_service__["a" /* ConversationService */],
            __WEBPACK_IMPORTED_MODULE_8__services_friendship_service__["a" /* FriendshipService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], UserAccountPage);
    return UserAccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var UserLoginPage = (function () {
    function UserLoginPage(navParams, auth, navCtrl) {
        this.navParams = navParams;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.login = {};
        // console.log('LoginPage auth', this.auth);
    }
    UserLoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register__["a" /* UserRegisterPage */]);
    };
    UserLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-login',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/user/login.html"*/'<!-- <ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Đăng nhập</ion-title>\n    </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n    <img src="assets/imgs/logo.png">\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input type="text" [(ngModel)]="login.username"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="login.password" (keyup.enter)="auth.login(login)"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button (click)="auth.login(login)" full>Đăng nhập</button>\n    <button ion-button full clear (click)="goToRegister()">Đăng ký</button>\n</ion-content>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/user/login.html"*/
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]])
    ], UserLoginPage);
    return UserLoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socket_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AuthService = (function () {
    function AuthService(socket, store, userSvc) {
        var _this = this;
        this.socket = socket;
        this.store = store;
        this.userSvc = userSvc;
        this.user = undefined;
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["n" /* select */])('user')).subscribe(function (user) {
            // console.log('user', user);
            _this.user = user || {};
            if (_this.user && _this.user._id && !_this.socket.io) {
                _this.connectSocket(_this.user);
            }
        });
    }
    AuthService.prototype.dispatchLogin = function (user) {
        // console.log('dispatchLogin', user);
        // this.socket.loginUser(user, (result) => {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ActionType */].USER_LOGIN, user: user });
        // });
    };
    AuthService.prototype.connectSocket = function (user) {
        var _this = this;
        this.socket.connect(function () {
            // console.log('onConnect');
            _this.dispatchLogin(user);
        });
        // this.socket.onConnect();
    };
    AuthService.prototype.login = function (login) {
        var _this = this;
        if (login) {
            this.userSvc
                .login(login)
                .subscribe(function (result) {
                // console.log('login result', result);
                if (result.status) {
                    _this.afterLogin(result.data);
                }
            });
        }
    };
    AuthService.prototype.logout = function () {
        this.socket.disconnect();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ActionType */].USER_LOGOUT });
    };
    AuthService.prototype.register = function (register) {
        var _this = this;
        if (register) {
            this.userSvc
                .register(register)
                .subscribe(function (result) {
                // console.log('register result', result);
                if (result.status) {
                    _this.afterLogin(result.data);
                }
            });
        }
    };
    AuthService.prototype.update = function (update) {
        var _this = this;
        if (update) {
            this.userSvc
                .update(update)
                .subscribe(function (result) {
                if (result.status) {
                    _this.user = result.data;
                    _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ActionType */].USER_UPDATE, user: _this.user });
                }
            });
        }
    };
    AuthService.prototype.afterLogin = function (user) {
        if (!this.socket || !this.socket.io || !this.socket.io.id) {
            this.connectSocket(user);
        }
        else {
            this.dispatchLogin(user);
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_friend__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_user_list_user__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_account__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var TabPages = (function () {
    function TabPages(auth) {
        this.auth = auth;
        this.pages = [];
        // tabs: any = {
        //     home: ['Hội thoại', HomePage],
        //     friend: ['Bạn bè', FriendPage],
        //     connect: ['Kết nối', ListUserPage],
        //     account: ['Tài khoản', AccountPage],
        // };
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.pages = [
            { title: 'Hội thoại', component: __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */] },
            { title: 'Bạn bè', component: __WEBPACK_IMPORTED_MODULE_2__friend_friend__["a" /* FriendPage */] },
            { title: 'Kết nối', component: __WEBPACK_IMPORTED_MODULE_3__list_user_list_user__["a" /* ListUserPage */] },
            { title: 'Tài khoản', component: __WEBPACK_IMPORTED_MODULE_5__user_account__["a" /* UserAccountPage */], params: { userId: this.auth.user._id } },
        ];
    }
    TabPages.prototype.goToRoot = function (index, page) {
        // this.navCtlr.push(page)
        // console.log('index', index);
    };
    TabPages.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        var params = page.params || {};
        this.nav.setRoot(page.component, params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* Nav */])
    ], TabPages.prototype, "nav", void 0);
    TabPages = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/tabs/tab-pages.html"*/'<!-- <ion-tabs>\n    <ion-tab tabTitle="{{tabs.home[0]}}" tabsHideOnSubPages="true" [root]="tabs.home[1]"></ion-tab>\n    <ion-tab tabTitle="{{tabs.friend[0]}}" tabsHideOnSubPages="true" [root]="tabs.friend[1]"></ion-tab>\n    <ion-tab tabTitle="{{tabs.connect[0]}}" tabsHideOnSubPages="true" [root]="tabs.connect[1]"></ion-tab>\n    <ion-tab tabTitle="{{tabs.account[0]}}" tabsHideOnSubPages="true" [root]="tabs.account[1]"></ion-tab>\n</ion-tabs> -->\n\n<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <!-- <ion-title *ngIf="!auth.user || !auth.user._id">Chưa đăng nhập</ion-title> -->\n            <ion-title *ngIf="auth.user && auth.user._id">{{auth.user.name}}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n            <!-- <button menuClose *ngIf="auth.user && auth.user._id" ion-item (click)="auth.logout()">Đăng xuất</button> -->\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/tabs/tab-pages.html"*/,
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], TabPages);
    return TabPages;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageService = (function (_super) {
    __extends(MessageService, _super);
    function MessageService(store, http) {
        var _this = _super.call(this, store, 'message', http) || this;
        _this.store = store;
        _this.http = http;
        return _this;
    }
    MessageService.prototype.getMessages = function (conversationId) {
        return this.http.get(this.apiUrl + '/list', {
            params: { conversationId: conversationId }
        });
    };
    MessageService.prototype.newMessage = function (conversationId, content) {
        return this.http.post(this.apiUrl + '/new', {
            from: this.myId,
            conversation: conversationId,
            content: content
        });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MessageService);
    return MessageService;
}(__WEBPACK_IMPORTED_MODULE_0__common_service__["a" /* CommonService */]));

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_friendship_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conversation_conversation__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_conversation_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invitation_list__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var FriendPage = (function () {
    function FriendPage(friendshipSvc, navCtrl, auth, conversationSvc) {
        this.friendshipSvc = friendshipSvc;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.conversationSvc = conversationSvc;
        this.list = [];
    }
    FriendPage.prototype.ngOnInit = function () {
        var _this = this;
        this.friendshipSvc.list().subscribe(function (list) {
            _this.list = list || [];
        });
    };
    FriendPage.prototype.createConversation = function (userId) {
        var _this = this;
        if (userId && this.auth.user && this.auth.user._id && userId != this.auth.user._id) {
            this.conversationSvc.create([this.auth.user._id, userId]).subscribe(function (conversation) {
                if (conversation && conversation._id) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__conversation_conversation__["a" /* ConversationPage */], {
                        conversationId: conversation._id
                    });
                }
            });
        }
    };
    FriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-friend',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/friend/friend.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Bạn bè</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <invitation-list></invitation-list>\n    <ion-list>\n        <ion-list-header>Tất cả bạn bè</ion-list-header>\n        <!-- <button ion-item  (click)="createConversation(friend.users[0]._id)">\n            <strong>{{friend.users[0].name}}</strong>\n        </button> -->\n        <user-item *ngFor="let friend of list" [user]="friend.users[0]"></user-item>\n        <button ion-button color="light" disabled full *ngIf="!list || !list.length">\n            Chưa có bạn bè nào!\n        </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/friend/friend.html"*/,
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__invitation_list__["a" /* InvitationList */]
            ]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_friendship_service__["a" /* FriendshipService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_conversation_service__["a" /* ConversationService */]])
    ], FriendPage);
    return FriendPage;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conversation_conversation__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_friendship_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__friend_invitation_list__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListUserPage = (function () {
    function ListUserPage(navCtrl, store, userSvc, conversationSvc, popoverCtrl, friendshipSvc, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.store = store;
        this.userSvc = userSvc;
        this.conversationSvc = conversationSvc;
        this.popoverCtrl = popoverCtrl;
        this.friendshipSvc = friendshipSvc;
        this.alertCtrl = alertCtrl;
        this.users = [];
        this.invitations = [];
        this.user = {};
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["n" /* select */])('user')).subscribe(function (user) {
            _this.user = user || {};
            _this.userSvc.userList(_this.user._id).subscribe(function (users) {
                _this.users = users || [];
            });
            _this.friendshipSvc.invitations().subscribe(function (list) {
                _this.invitations = list || [];
            });
        });
    }
    ListUserPage.prototype.createConversation = function (userId) {
        var _this = this;
        if (userId && this.user._id && userId != this.user._id) {
            this.conversationSvc.create([this.user._id, userId]).subscribe(function (conversation) {
                if (conversation && conversation._id) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__conversation_conversation__["a" /* ConversationPage */], {
                        conversationId: conversation._id
                    });
                }
            });
        }
    };
    ListUserPage.prototype.inviteFriend = function (userId) {
        var _this = this;
        this.friendshipSvc.invite(userId).subscribe(function (result) {
            // console.log('result', result);
            _this.alertCtrl.create({
                title: 'Thông báo!',
                subTitle: result.message,
                buttons: ['OK']
            }).present();
        });
    };
    ListUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-user',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/list-user/list-user.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Kết nối</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <invitation-list></invitation-list>\n    <ion-list>\n        <ion-list-header>Có thể bạn biết</ion-list-header>\n        <user-item *ngFor="let user of users" [user]="user"></user-item>\n        <!-- <button ion-item *ngFor="let user of users" (click)="presentPopover($event, user._id)">\n            <strong>{{user.name}} <em *ngIf="user.isYou">(Bạn)</em></strong>\n        </button> -->\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/list-user/list-user.html"*/,
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__friend_invitation_list__["a" /* InvitationList */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__["a" /* ConversationService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__services_friendship_service__["a" /* FriendshipService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */]])
    ], ListUserPage);
    return ListUserPage;
}());

//# sourceMappingURL=list-user.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UserEditPage = (function () {
    function UserEditPage(auth) {
        this.auth = auth;
        this.user = {};
        this.user = JSON.parse(JSON.stringify(this.auth.user));
    }
    UserEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-edit',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/user/edit.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{auth.user.name}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input type="text" [(ngModel)]="user.username" disabled></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Bio</ion-label>\n            <ion-textarea [(ngModel)]="user.bio"></ion-textarea>\n        </ion-item>\n    </ion-list>\n    <button ion-button full (click)="auth.update(user)">Cập nhật</button>\n</ion-content>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/user/edit.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], UserEditPage);
    return UserEditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var UserRegisterPage = (function () {
    function UserRegisterPage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.register = {};
    }
    UserRegisterPage.prototype.backToLogin = function () {
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* UserLoginPage */]);
    };
    UserRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-register',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/user/register.html"*/'<ion-content>\n    <img src="assets/imgs/logo.png">\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="register.name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input type="text" [(ngModel)]="register.username"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="register.password"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button full (click)="auth.register(register)">Đăng ký</button>\n    <button ion-button (click)="backToLogin()" full clear item-center>Đăng nhập</button>\n</ion-content>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/user/register.html"*/
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], UserRegisterPage);
    return UserRegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(309);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducers */
/* unused harmony export storageSyncReducer */
/* unused harmony export storageMetaReducer */
/* unused harmony export metaReducers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_socket_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_conversation_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngrx_store_ionic_storage__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngrx_store_ionic_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ngrx_store_ionic_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reducers__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_friendship_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_list_list__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_room_room__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_list_user_list_user__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_conversation_conversation__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_message_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_friend_friend__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_list_user_user_item__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_user_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_user_account__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_user_register__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_user_edit__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_friend_invitation_list__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular & Ionic Core






// End angular & ionic
// Services




// End services
//Store






var reducers = __WEBPACK_IMPORTED_MODULE_14__reducers__["a" /* default */];
var storageSyncReducer = Object(__WEBPACK_IMPORTED_MODULE_12_ngrx_store_ionic_storage__["storageSync"])({
    keys: ['user'],
    // ignoreActions: [],
    hydratedStateKey: 'hydrated',
    onSyncError: function (err) {
        console.log(err);
    }
});
function storageMetaReducer(reducer) {
    return storageSyncReducer(reducer);
}
var metaReducers = [storageMetaReducer];
// End Store
// Components















// End components
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_list_user_list_user__["a" /* ListUserPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_conversation_conversation__["a" /* ConversationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_list_user_user_item__["a" /* UserItem */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabPages */],
                __WEBPACK_IMPORTED_MODULE_26__pages_user_login__["a" /* UserLoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_user_account__["a" /* UserAccountPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_user_register__["a" /* UserRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_friend_invitation_list__["a" /* InvitationList */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                // StoreModule.forRoot(Reducers),
                __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__reducers__["a" /* default */], {
                    metaReducers: metaReducers,
                    initialState: {
                        hydrated: false
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["EffectsModule"].forRoot([__WEBPACK_IMPORTED_MODULE_12_ngrx_store_ionic_storage__["StorageSyncEffects"]]),
                __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_list_user_list_user__["a" /* ListUserPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_conversation_conversation__["a" /* ConversationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabPages */],
                __WEBPACK_IMPORTED_MODULE_26__pages_user_login__["a" /* UserLoginPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_user_account__["a" /* UserAccountPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_user_register__["a" /* UserRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_user_edit__["a" /* UserEditPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__services_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__services_conversation_service__["a" /* ConversationService */],
                __WEBPACK_IMPORTED_MODULE_22__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_15__services_friendship_service__["a" /* FriendshipService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_UserReducer__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__details_RoomsReducer__ = __webpack_require__(489);


/* harmony default export */ __webpack_exports__["a"] = ({
    user: __WEBPACK_IMPORTED_MODULE_0__details_UserReducer__["a" /* UserReducer */],
    rooms: __WEBPACK_IMPORTED_MODULE_1__details_RoomsReducer__["a" /* RoomsReducer */]
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UserReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(79);

function UserReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionType */].USER_LOGIN:
            state = action.user;
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionType */].USER_LOGOUT:
            state = undefined;
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionType */].USER_UPDATE:
            state = action.user;
            return state;
        default:
            return state;
    }
}
//# sourceMappingURL=UserReducer.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = RoomsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(79);

function RoomsReducer(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionType */].JOIN_ROOM:
            state[action.room] = true;
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionType */].LEAVE_ROOM:
            delete state[action.room];
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionType */].LEAVE_ALL_ROOM:
            state = undefined;
            return state;
        default:
            return state;
    }
}
//# sourceMappingURL=RoomsReducer.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_login__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, store, auth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.store = store;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabPages */];
        // pages: Array<{ title: string, component: any }> = [];
        this.user = {};
        this.initializeApp();
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_store__["n" /* select */])('user')).subscribe(function (user) {
            _this.user = user || {};
            if (_this.user && _this.user._id) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabPages */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_user_login__["a" /* UserLoginPage */];
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/app/app.html"*/'<!-- <ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title *ngIf="!auth.user || !auth.user._id">Chưa đăng nhập</ion-title>\n            <ion-title *ngIf="auth.user && auth.user._id">{{auth.user.name}}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n              {{p.title}}\n            </button>\n            <button menuClose *ngIf="auth.user && auth.user._id" ion-item (click)="auth.logout()">Đăng xuất</button>\n        </ion-list>\n    </ion-content>\n</ion-menu> -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/app/app.html"*/
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import { NavController, NavParams } from 'ionic-angular';

var RoomPage = (function () {
    function RoomPage(socket) {
        // this.room = this.navParams.get('room');
        // SocketService.joinRoom(this.room);
        this.socket = socket;
        this.messages = [];
        this.socket.io.on('new-message', function (data) {
            data.id = this.messages.length + 1;
            this.messages.push(data);
            console.log('new-message', data, this.messages);
        }.bind(this));
        this.socket.io.emit('login', { name: 'Phong' }, function (data) {
            console.log('login data', data);
        });
    }
    ;
    RoomPage.prototype.sendMessage = function (msg) {
        this.socket.io.emit('send-message', {
            room: this.room,
            data: {
                from: this.socket.io.id,
                msg: msg
            }
        });
        this.msg = null;
    };
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-room',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/room/room.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Room</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <p *ngFor="let message of messages">\n        <strong>{{message.from}}:</strong>\n        <span>{{message.msg}}</span>\n    </p>\n    <ion-input type="text" [(ngModel)]="msg"></ion-input>\n    <button ion-button (click)="sendMessage(msg)">Gửi</button>\n</ion-content>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/room/room.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conversation_conversation__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_account__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_friendship_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UserItem = (function () {
    function UserItem(auth, modalCtrl, navCtrl, actionSheetCtrl, alertCtrl, friendshipSvc) {
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.friendshipSvc = friendshipSvc;
    }
    UserItem.prototype.handleUserItem = function (user) {
        var _this = this;
        if (this.conversationId) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__conversation_conversation__["a" /* ConversationPage */], { conversationId: this.conversationId });
        }
        else if (this.invitationId) {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Trả lời yêu cầu kết bạn',
                buttons: [
                    {
                        text: 'Đồng ý',
                        handler: function () {
                            // console.log('Destructive clicked');
                            _this.answerInvitation('accept', _this.invitationId);
                            _this.invitationId = undefined;
                        }
                    }, {
                        text: 'Hủy yêu cầu',
                        role: 'destructive',
                        handler: function () {
                            // console.log('Archive clicked');
                            _this.answerInvitation('unfriend', _this.invitationId);
                            _this.invitationId = undefined;
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            // console.log('handleUserItem', user);
            var userId = user._id;
            // if (userId && this.auth.user && this.auth.user._id && userId != this.auth.user._id) {
            //     this.conversationSvc.create([this.auth.user._id, userId]).subscribe((conversation: { user, _id }) => {
            //         if (conversation && conversation._id) {
            //             this.navCtrl.push(ConversationPage, {
            //                 conversationId: conversation._id
            //             });
            //         }
            //     });
            // }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_account__["a" /* UserAccountPage */], {
                userId: userId
            });
        }
    };
    UserItem.prototype.answerInvitation = function (actionName, invitationId) {
        var _this = this;
        this.friendshipSvc[actionName](invitationId).subscribe(function (result) {
            _this.alertCtrl.create({
                title: 'Thông báo!',
                subTitle: result.message,
                buttons: ['OK']
            }).present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserItem.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserItem.prototype, "conversationId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserItem.prototype, "invitationId", void 0);
    UserItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-item',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/list-user/user-item.html"*/'<ion-item (click)="handleUserItem(user)">\n    <ion-avatar item-start>\n        <img src="assets/imgs/logo.png">\n    </ion-avatar>\n    <h2>{{user.name}}</h2>\n    <p>{{user.bio}}</p>\n</ion-item>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/list-user/user-item.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services_friendship_service__["a" /* FriendshipService */]])
    ], UserItem);
    return UserItem;
}());

//# sourceMappingURL=user-item.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service__ = __webpack_require__(147);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConversationService = (function (_super) {
    __extends(ConversationService, _super);
    function ConversationService(http, store) {
        var _this = _super.call(this, store, 'conversation', http) || this;
        _this.http = http;
        _this.store = store;
        return _this;
    }
    ConversationService.prototype.create = function (users) {
        return this.http.post(this.apiUrl + '/create', { users: users });
    };
    ConversationService.prototype.detail = function (conversationId) {
        var myId;
        if (this.user && this.user._id) {
            myId = this.user._id;
        }
        return this.http.post(this.apiUrl + '/detail', { conversationId: conversationId, myId: myId });
    };
    ConversationService.prototype.list = function (myId) {
        // let myId;
        // if (this.user && this.user._id) {
        //     myId = this.user._id;
        // }
        return this.http.get(this.apiUrl + '/list', { params: { myId: myId } });
    };
    ConversationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], ConversationService);
    return ConversationService;
}(__WEBPACK_IMPORTED_MODULE_3__common_service__["a" /* CommonService */]));

//# sourceMappingURL=conversation.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendshipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendshipService = (function (_super) {
    __extends(FriendshipService, _super);
    function FriendshipService(store, http) {
        var _this = _super.call(this, store, 'friendship', http) || this;
        _this.store = store;
        _this.http = http;
        return _this;
    }
    FriendshipService.prototype.list = function () {
        var myId;
        if (this.user && this.user._id) {
            myId = this.user._id;
        }
        return this.http.get(this.apiUrl + '/list', {
            params: {
                myId: myId
            }
        });
    };
    FriendshipService.prototype.invite = function (friendId) {
        var myId;
        if (this.user && this.user._id) {
            myId = this.user._id;
        }
        return this.http.post(this.apiUrl + '/invite', {
            myId: myId,
            friendId: friendId
        });
    };
    FriendshipService.prototype.accept = function (friendshipId) {
        return this.http.post(this.apiUrl + '/accept', {
            friendshipId: friendshipId
        });
    };
    FriendshipService.prototype.unfriend = function (friendshipId) {
        return this.http.post(this.apiUrl + '/unfriend', {
            friendshipId: friendshipId
        });
    };
    FriendshipService.prototype.invitations = function () {
        var myId;
        if (this.user && this.user._id) {
            myId = this.user._id;
        }
        return this.http.get(this.apiUrl + '/invitations', {
            params: {
                myId: myId
            }
        });
    };
    FriendshipService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], FriendshipService);
    return FriendshipService;
}(__WEBPACK_IMPORTED_MODULE_0__common_service__["a" /* CommonService */]));

//# sourceMappingURL=friendship.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConversationPage = (function () {
    function ConversationPage(navParams, conversationSvc, messageSvc, socket, auth) {
        this.navParams = navParams;
        this.conversationSvc = conversationSvc;
        this.messageSvc = messageSvc;
        this.socket = socket;
        this.auth = auth;
        this.detail = { users: [] };
        this.messages = [];
        this.isTyping = false;
        this.typingUsers = [];
        this.seen = false;
    }
    ConversationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.conversationSvc.detail(this.navParams.get('conversationId')).subscribe(function (detail) {
            // console.log('detail', detail);
            _this.detail = detail;
            _this.joinConversation(_this.detail._id);
            _this.messageSvc.getMessages(_this.detail._id).subscribe(function (list) {
                _this.pushMessage(list, true);
            });
            _this.onTyping();
        });
    };
    ConversationPage.prototype.ngOnDestroy = function () {
        var _this = this;
        this.socket.leaveRoom(this.detail._id, function () {
            console.log('leave room ', _this.detail._id);
        });
    };
    ConversationPage.prototype.onTyping = function () {
        this.socket.on('message:is-typing', function (data) {
            if (data.userId != this.auth.user._id) {
                this.typingUsers.push(data);
            }
        }.bind(this));
        this.socket.on('message:stop-typing', function (data) {
            for (var i in this.typingUsers) {
                if (this.typingUsers[i].userId == data.userId) {
                    this.typingUsers.splice(i, 1);
                    break;
                }
            }
        }.bind(this));
    };
    ConversationPage.prototype.sendMessage = function (message) {
        var _this = this;
        this.messageInput.setFocus();
        if (!message || !message.length) {
            return;
        }
        this.messageSvc.newMessage(this.detail._id, message).subscribe(function (result) {
            _this.message = null;
            _this.changeMessage(null, null);
            _this.scrollBottom(true);
            _this.seen = false;
            if (message == "run-demo-boss") {
                return;
            }
            _this.pushMessage(result);
        });
    };
    ConversationPage.prototype.joinConversation = function (id) {
        var _this = this;
        this.socket.joinRoom(id, function () {
            _this.socket.on('message:new', function (data) {
                var _this = this;
                if (data.content == "run-demo-employee") {
                    setTimeout(function () {
                        _this.sendMessage("run-demo-boss");
                        var demoMessages = [
                            "Chào em! Dự án vừa rồi tới đâu rồi em?",
                            "👍 Tốt lắm! Em đã vất vả nhiều rồi, sắp tới anh sẽ tăng lương cho em",
                            "Ừ, anh thấy chú đã cố gắng rất nhiều, đó là điều chú xứng đáng nhận được",
                            "Tháng sau sẽ có 1 dự án mới, tuần sau anh cho chú nghỉ phép 2 tuần, anh mua 2 vé máy bay rồi, chú tranh thủ dẫn bạn gái đi châu Âu chơi rồi về tiếp tục chiến",
                            "Anh cũng thật hạnh phúc vì có 1 nhân viên xuất sắc như em 😄"
                        ];
                        var i = 0;
                        _this.sendMessage(demoMessages[i]);
                        i++;
                        var interval = setInterval(function () {
                            _this.sendMessage(demoMessages[i]);
                            i++;
                            if (i == demoMessages.length) {
                                clearInterval(interval);
                            }
                        }, 8000);
                    }, 0);
                    return;
                }
                if (data.from._id !== this.auth.user._id) {
                    this.pushMessage(data);
                }
                this.lastFromUser = data.from._id;
                this.checkSeen();
            }.bind(_this));
            _this.socket.on('message:remove', function (messages) {
                // console.log('messages', messages);
                this.removeMessages(messages);
            }.bind(_this));
            _this.socket.on('message:seen', function (data) {
                if (this.lastFromUser == this.auth.user._id && this.auth.user._id !== data.userId) {
                    this.seen = true;
                }
            }.bind(_this));
        });
    };
    ConversationPage.prototype.pushMessage = function (data, noPush) {
        if (noPush === void 0) { noPush = false; }
        if (noPush) {
            this.messages = data || [];
        }
        else {
            this.messages.push(data);
            // this.messages.unshift(data);
        }
        this.scrollBottom();
    };
    ConversationPage.prototype.scrollBottom = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.timeoutScroll = setTimeout(function () {
            try {
                if (_this.content) {
                    if (!force) {
                        var dimension = _this.content.getContentDimensions();
                        // console.log(dimension.scrollHeight - (dimension.contentHeight + dimension.scrollTop), dimension.contentHeight)
                        if (dimension.scrollHeight - (dimension.contentHeight + dimension.scrollTop) < dimension.contentHeight / 2) {
                            _this.content.scrollToBottom();
                        }
                    }
                    else {
                        _this.content.scrollToBottom();
                    }
                }
            }
            catch (e) { }
            clearTimeout(_this.timeoutScroll);
        }, 250);
    };
    ConversationPage.prototype.removeMessages = function (messages) {
        var _this = this;
        if (messages === void 0) { messages = []; }
        __WEBPACK_IMPORTED_MODULE_6_lodash__["each"](messages, function (messageId) {
            for (var i in _this.messages) {
                if (_this.messages[i]._id == messageId) {
                    _this.messages.splice(i, 1);
                    break;
                }
            }
        });
        this.scrollBottom();
    };
    ConversationPage.prototype.changeMessage = function (event, message) {
        if (message && message.length) {
            this.changeIsTyping(true);
        }
        else {
            this.changeIsTyping(false);
        }
    };
    ConversationPage.prototype.changeIsTyping = function (newValue) {
        if (newValue !== this.isTyping) {
            this.socket.emit('room:typing', {
                status: newValue,
                userId: this.auth.user._id,
                userName: this.auth.user.name,
                conversationId: this.detail._id
            });
        }
        this.isTyping = newValue;
    };
    ConversationPage.prototype.messageInputFocus = function () {
        this.scrollBottom(true);
        this.socket.emit('room:seen', {
            userId: this.auth.user._id,
            conversationId: this.detail._id
        });
    };
    ConversationPage.prototype.checkSeen = function () {
        if (this.lastFromUser !== this.auth.user._id) {
            this.seen = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _a || Object)
    ], ConversationPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('messageInput'),
        __metadata("design:type", Object)
    ], ConversationPage.prototype, "messageInput", void 0);
    ConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conversation',template:/*ion-inline-start:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/conversation/conversation.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span *ngFor="let user of detail.users">{{user.name}}</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div id="conversation-content">\n        <div margin-bottom></div>\n        <div text-right *ngIf="seen"><em>Đã xem</em></div>\n        <div class="message-list">\n            <div *ngFor="let message of messages" (click)="showTimeId = message._id" [ngClass]="{\'not-you\': message.from._id != auth.user._id, \'it-you\': message.from._id == auth.user._id}">\n                <div class="message-content">\n                    <span>{{message.content}}</span>\n                </div>\n                <div *ngIf="showTimeId == message._id" margin-bottom>\n                    <em>({{message.created | date:\'dd/MM/yyyy HH:mm:ss\'}})</em>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer id="conversation-footer">\n    <div *ngIf="typingUsers && typingUsers.length" class="typing">\n        <em><span *ngFor="let item of typingUsers">{{item.userName}}</span> đang nhập...</em>\n    </div>\n    <ion-grid no-padding no-margin>\n        <ion-row no-padding no-margin>\n            <ion-col col-10 border-top>\n                <ion-input #messageInput class="message-input" margin no-margin-left type="text" [(ngModel)]="message" placeholder="Viết gì đó..." (keyup.enter)="sendMessage(message)" (ngModelChange)="changeMessage($event, message)" (ionFocus)="messageInputFocus(true)"></ion-input>\n            </ion-col>\n            <ion-col col-2 no-padding no-margin>\n                <button class="send-btn" no-padding no-margin full-height full ion-button small (click)="sendMessage(message)">Gửi</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/phongnguyen/Develops/Nodejs/p-chat/client/src/pages/conversation/conversation.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__["a" /* ConversationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__["a" /* ConversationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _f || Object])
    ], ConversationPage);
    return ConversationPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService(store) {
        var _this = this;
        this.store = store;
        this.emit = function () {
            var argv = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                argv[_i] = arguments[_i];
            }
            if (this.io) {
                return (_a = this.io).emit.apply(_a, argv);
            }
            return function () { };
            var _a;
        };
        this.on = function () {
            var argv = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                argv[_i] = arguments[_i];
            }
            if (this.io) {
                return (_a = this.io).on.apply(_a, argv);
            }
            return function () { };
            var _a;
        };
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["n" /* select */])('rooms')).subscribe(function (rooms) {
            _this.rooms = rooms;
        });
    }
    SocketService.prototype.connect = function (cb) {
        if (cb === void 0) { cb = function () { }; }
        this.io = __WEBPACK_IMPORTED_MODULE_0_socket_io_client__('http://localhost:8888');
        // this.io.on('error', err => {
        //     console.log('error', err);
        //     this.io.close();
        // });
        this.io.on('connect', function () {
            for (var i in this.rooms) {
                if (this.rooms[i]) {
                    this.joinRoom(i, function () { });
                }
            }
            cb();
        }.bind(this));
        return this.io;
    };
    SocketService.prototype.disconnect = function () {
        if (this.io) {
            this.io.disconnect();
        }
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ActionType */].LEAVE_ALL_ROOM });
        return this.io;
    };
    // public onConnect(cb) {
    //     if (this.io) {
    //         this.io.on('connect', cb);
    //     }
    // }
    SocketService.prototype.loginUser = function (user, cb) {
        if (this.io) {
            this.io.emit('user:login', user, function (result) {
                cb(result);
            });
        }
    };
    SocketService.prototype.joinRoom = function (room, cb) {
        if (cb === void 0) { cb = function () { }; }
        if (this.io) {
            this.io.emit('room:join', { room: room }, cb);
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ActionType */].JOIN_ROOM, room: room });
        }
    };
    SocketService.prototype.leaveRoom = function (room, cb) {
        if (cb === void 0) { cb = function () { }; }
        if (this.io) {
            this.io.emit('room:leave', { room: room }, cb);
            this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ActionType */].LEAVE_ROOM, room: room });
        }
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], SocketService);
    return SocketService;
}());

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionType; });
var ActionType = {
    COUNT_INCREMENT: 'COUNT_INCREMENT',
    COUNT_DECREMENT: 'COUNT_DECREMENT',
    COUNT_RESET: 'COUNT_RESET',
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT',
    USER_UPDATE: 'USER_UPDATE',
    JOIN_ROOM: 'JOIN_ROOM',
    LEAVE_ROOM: 'LEAVE_ROOM',
    LEAVE_ALL_ROOM: 'LEAVE_ALL_ROOM',
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(62);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8888/api/user';
    }
    UserService.prototype.login = function (login) {
        return this.http.post(this.apiUrl + '/login', __assign({}, login));
    };
    UserService.prototype.register = function (register) {
        return this.http.post(this.apiUrl + '/register', __assign({}, register));
    };
    UserService.prototype.update = function (update) {
        return this.http.post(this.apiUrl + '/update', __assign({}, update));
    };
    UserService.prototype.info = function (params) {
        return this.http.get(this.apiUrl + '/info', { params: params });
    };
    UserService.prototype.userList = function (myId) {
        return this.http.get(this.apiUrl + '/list', {
            params: {
                myId: myId
            }
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map