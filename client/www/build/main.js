webpackJsonp([0],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socket_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(142);
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
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["n" /* select */])('user')).subscribe(function (user) {
            _this.user = user || {};
            if (_this.user.socketId && !_this.socket.io) {
                _this.connectSocket(_this.user);
            }
        });
    }
    AuthService.prototype.dispatchLogin = function (user) {
        var _this = this;
        this.socket.loginUser(user, function (result) {
            _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ActionType */].USER_LOGIN, user: result });
        });
    };
    AuthService.prototype.connectSocket = function (user) {
        var _this = this;
        this.socket.connect();
        this.socket.onConnect(function () {
            _this.dispatchLogin(user);
        });
    };
    AuthService.prototype.login = function (name) {
        var _this = this;
        if (name) {
            this.userSvc
                .login(name)
                .subscribe(function (user) {
                // console.log('user', user);
                // let user = { name };
                if (!_this.socket || !_this.socket.io || !_this.socket.io.id) {
                    _this.connectSocket(user);
                }
                else {
                    _this.dispatchLogin(user);
                }
            });
        }
    };
    AuthService.prototype.logout = function () {
        this.socket.disconnect();
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ActionType */].USER_LOGOUT });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(69);
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
    UserService.prototype.login = function (name) {
        return this.http.post(this.apiUrl + '/login', { name: name });
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

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service__ = __webpack_require__(271);
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
        var _this = _super.call(this, store, 'conversation') || this;
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
    ConversationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]])
    ], ConversationService);
    return ConversationService;
}(__WEBPACK_IMPORTED_MODULE_3__common_service__["a" /* CommonService */]));

//# sourceMappingURL=conversation.service.js.map

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
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
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(133);
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


var HomePage = (function () {
    function HomePage(auth) {
        this.auth = auth;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf="auth.user && auth.user.name">\n        <h3>Xin chào <strong>{{auth.user.name}}</strong>!</h3>\n        <div>ID: {{auth.user._id}}</div>\n        <div>Socket id: {{auth.user.socketId}}</div>\n        <button ion-button (click)="auth.logout()" full>Đăng xuất</button>\n    </div>\n    <div *ngIf="!auth.user || !auth.user.name">\n        <ion-input placeholder="Name" type="text" [(ngModel)]="name"></ion-input>\n        <button ion-button (click)="auth.login(name)" full>Đăng nhập</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/home/home.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionType; });
var ActionType = {
    COUNT_INCREMENT: 'COUNT_INCREMENT',
    COUNT_DECREMENT: 'COUNT_DECREMENT',
    COUNT_RESET: 'COUNT_RESET',
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT',
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
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
            selector: 'page-list',template:/*ion-inline-start:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conversation_conversation__ = __webpack_require__(272);
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
    function ListUserPage(navCtrl, store, userSvc, conversationSvc) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.store = store;
        this.userSvc = userSvc;
        this.conversationSvc = conversationSvc;
        this.users = [];
        this.user = {};
        this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["n" /* select */])('user')).subscribe(function (user) {
            _this.user = user || {};
            _this.userSvc.userList(_this.user._id).subscribe(function (users) {
                _this.users = users || [];
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
    ListUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-user',template:/*ion-inline-start:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/list-user/list-user.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>List User</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <button ion-item *ngFor="let user of users" (click)="createConversation(user._id)">\n            <div>\n                <strong>{{user.name}} <em *ngIf="user.isYou">(Bạn)</em></strong>\n            </div>\n            <div>ID: {{user._id}}</div>\n        </button>\n    </ion-list>\n    <!-- <button ion-button full (click)="getUserList()">Fetch</button> -->\n</ion-content>'/*ion-inline-end:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/list-user/list-user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_conversation_service__["a" /* ConversationService */]])
    ], ListUserPage);
    return ListUserPage;
}());

//# sourceMappingURL=list-user.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(37);

var CommonService = (function () {
    function CommonService(store, afterFix) {
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
    return CommonService;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(133);
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
        });
    };
    ConversationPage.prototype.ngOnDestroy = function () {
        var _this = this;
        this.socket.leaveRoom(this.detail._id, function () {
            console.log('leave room ', _this.detail._id);
        });
    };
    ConversationPage.prototype.sendMessage = function (message) {
        var _this = this;
        if (!message || !message.length) {
            return;
        }
        this.messageSvc.newMessage(this.detail._id, message).subscribe(function (result) {
            _this.message = null;
        });
    };
    ConversationPage.prototype.joinConversation = function (id) {
        var _this = this;
        this.socket.joinRoom(id, function () {
            _this.socket.on('message:new', function (data) {
                this.pushMessage(data);
            }.bind(_this));
        });
    };
    ConversationPage.prototype.pushMessage = function (data, noPush) {
        var _this = this;
        if (noPush) {
            this.messages = data || [];
        }
        else {
            this.messages.push(data);
        }
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 250);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ConversationPage.prototype, "content", void 0);
    ConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conversation',template:/*ion-inline-start:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/conversation/conversation.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title>\n            <span *ngFor="let user of detail.users">{{user.name}}</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content id="conversation-content" padding>\n    <div *ngFor="let message of messages" (click)="message.showTime = !message.showTime" [ngClass]="{\'not-you\': message.from._id != auth.user._id, \'it-you\': message.from._id == auth.user._id}">\n        <div class="message-content">\n            <span>{{message.content}}</span>\n            <div *ngIf="message.showTime">\n                <em>({{message.created | date:\'dd/MM/yyyy HH:mm:ss\'}})</em>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer id="conversation-footer">\n    <ion-grid no-padding no-margin>\n        <ion-row no-padding no-margin>\n            <ion-col col-10 border-top>\n                <ion-input class="message-input" margin no-margin-left type="text" [(ngModel)]="message" placeholder="Nhập nội dung..." (keyup.enter)="sendMessage(message)"></ion-input>\n            </ion-col>\n            <ion-col col-2 no-padding no-margin>\n                <button no-padding no-margin full-height full ion-button small (click)="sendMessage(message)">Gửi</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/conversation/conversation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__["a" /* ConversationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], ConversationPage);
    return ConversationPage;
}());

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_service__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(69);
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
        var _this = _super.call(this, store, 'message') || this;
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

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(300);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducers */
/* unused harmony export storageSyncReducer */
/* unused harmony export storageMetaReducer */
/* unused harmony export metaReducers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_room_room__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_user_list_user__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_conversation_conversation__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_message_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_socket_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_conversation_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_store__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngrx_store_devtools__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngrx_store_ionic_storage__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngrx_store_ionic_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ngrx_store_ionic_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngrx_effects__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reducers__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular & Ionic Core






// End angular & ionic
// Components







// End components
// Services




// End services
//Store





var reducers = __WEBPACK_IMPORTED_MODULE_21__reducers__["a" /* default */];
var storageSyncReducer = Object(__WEBPACK_IMPORTED_MODULE_19_ngrx_store_ionic_storage__["storageSync"])({
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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_user_list_user__["a" /* ListUserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_conversation_conversation__["a" /* ConversationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                // StoreModule.forRoot(Reducers),
                __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__reducers__["a" /* default */], {
                    metaReducers: metaReducers,
                    initialState: {
                        hydrated: false
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_20__ngrx_effects__["EffectsModule"].forRoot([__WEBPACK_IMPORTED_MODULE_19_ngrx_store_ionic_storage__["StorageSyncEffects"]]),
                __WEBPACK_IMPORTED_MODULE_18__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_room_room__["a" /* RoomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_list_user_list_user__["a" /* ListUserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_conversation_conversation__["a" /* ConversationPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__services_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__services_conversation_service__["a" /* ConversationService */],
                __WEBPACK_IMPORTED_MODULE_12__services_message_service__["a" /* MessageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_user_list_user__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'List User', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_user_list_user__["a" /* ListUserPage */] },
        ];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__(71);
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
            selector: 'page-room',template:/*ion-inline-start:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/room/room.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Room</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <p *ngFor="let message of messages">\n        <strong>{{message.from}}:</strong>\n        <span>{{message.msg}}</span>\n    </p>\n    <ion-input type="text" [(ngModel)]="msg"></ion-input>\n    <button ion-button (click)="sendMessage(msg)">Gửi</button>\n</ion-content>'/*ion-inline-end:"/Volumes/Phong's Datas/Develops/Ionic/p-chat/client/src/pages/room/room.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_UserReducer__ = __webpack_require__(481);

/* harmony default export */ __webpack_exports__["a"] = ({
    user: __WEBPACK_IMPORTED_MODULE_0__details_UserReducer__["a" /* UserReducer */]
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UserReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(257);

function UserReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionType */].USER_LOGIN:
            state = action.user;
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ActionType */].USER_LOGOUT:
            state = undefined;
            return state;
        default:
            return state;
    }
}
//# sourceMappingURL=UserReducer.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function SocketService() {
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
    }
    SocketService.prototype.connect = function () {
        this.io = __WEBPACK_IMPORTED_MODULE_0_socket_io_client__('http://localhost:8888');
        return this.io;
    };
    SocketService.prototype.disconnect = function () {
        if (this.io) {
            this.io.disconnect();
        }
        return this.io;
    };
    SocketService.prototype.onConnect = function (cb) {
        if (this.io) {
            this.io.on('connect', cb);
        }
    };
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
        }
    };
    SocketService.prototype.leaveRoom = function (room, cb) {
        if (cb === void 0) { cb = function () { }; }
        if (this.io) {
            this.io.emit('room:leave', { room: room }, cb);
        }
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());

//# sourceMappingURL=socket.service.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map