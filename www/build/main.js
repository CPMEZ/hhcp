webpackJsonp([24],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_master_plans_master_plans__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preview_preview__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LookupPlanPage = /** @class */ (function () {
    function LookupPlanPage(navCtrl, lc, navParams, MPP, PPP) {
        this.navCtrl = navCtrl;
        this.lc = lc;
        this.navParams = navParams;
        this.MPP = MPP;
        this.PPP = PPP;
        this.searchingMaster = true;
        this.types = this.navParams.get('types');
        this.type = this.navParams.get('type');
        this.searchTerm = this.navParams.get('searchTerm');
        this.fromPage = this.navParams.get('fromPage');
        this.target = this.navParams.get('target'); // plan we're merging into
        this.searchTitle = "Searching for " + this.navParams.get('searchName') + " to be added to " + this.target["name"];
        if (this.type === 'condition'
            || this.type === 'discipline') {
            this.searchingMaster = true;
        }
        else {
            this.searchingMaster = false;
        }
    }
    LookupPlanPage.prototype.ionViewDidEnter = function () {
        if (this.searchingMaster) {
            this.getMasterList();
        }
        else {
            this.getPersonalList();
        }
    };
    LookupPlanPage.prototype.getMasterList = function () {
        var _this = this;
        var loading = this.lc.create({
            content: 'Getting the list...'
        });
        loading.present();
        this.MPP.getMaster(this.types, this.searchTerm)
            .then(function (data) {
            loading.dismiss();
            var d = JSON.parse(data);
            _this.itemsList = d[_this.types];
        });
    };
    LookupPlanPage.prototype.getPersonalList = function () {
        // console.log('getPersonalList', this.PPP.listPlans());
        this.itemsList = this.PPP.listPlans();
    };
    LookupPlanPage.prototype.choose = function (which) {
        if (this.searchingMaster) {
            this.getMaster(which);
        }
        else {
            this.getPersonal(which);
        }
    };
    LookupPlanPage.prototype.getMaster = function (which) {
        var _this = this;
        // get the selected content, 
        // go to preview/select page
        // console.log('getMaster', which);
        this.MPP.getMaster(which["file"])
            .then(function (data) {
            // console.log('getMaster', data );
            var d = JSON.parse(data);
            // console.log('getMaster', d );
            // console.log('d:type', this.type, d[this.type]);
            // nav to the preview page
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__preview_preview__["a" /* PreviewPage */], {
                source: d[_this.type],
                target: _this.target,
                fromPage: _this.fromPage,
                type: _this.type
            });
        });
    };
    LookupPlanPage.prototype.getPersonal = function (which) {
        // get the selected content, 
        // go to preview/select page
        // console.log('getPersonal', which);
        // nav to the preview page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__preview_preview__["a" /* PreviewPage */], {
            source: which,
            target: this.target,
            fromPage: this.fromPage,
            type: this.type
        });
    };
    LookupPlanPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */]);
    };
    LookupPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lookup-plan',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/lookup-plan/lookup-plan.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Select {{searchName}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="help()">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p class="helpful">{{searchTitle}}</p>\n  <br>\n  <ion-toolbar color=primary>\n    <ion-searchbar class="search" [(ngModel)]="searchTerm" debounce=1000 placeholder="Search" (ionInput)="getList()">\n    </ion-searchbar>\n  </ion-toolbar>\n  <div *ngIf="itemsList">\n    <ion-list>\n      <div ion-item no-lines *ngFor="let z of itemsList">\n        <!-- definite hack -->\n        <p class="searchList" *ngIf="searchingMaster" (click)="choose(z)">{{z.text}}</p>\n        <p class="searchList" *ngIf="!searchingMaster" (click)="choose(z)">{{z.name}}</p>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/lookup-plan/lookup-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_master_plans_master_plans__["a" /* MasterPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], LookupPlanPage);
    return LookupPlanPage;
}());

//# sourceMappingURL=lookup-plan.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_store_local_store__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// cache uses passed-in key for encryption
var CacheProvider = /** @class */ (function () {
    // secret: string;
    // storeKey: string;
    function CacheProvider(LSP, auth) {
        this.LSP = LSP;
        this.auth = auth;
        console.log('Constructor Cache Provider');
    }
    CacheProvider.prototype.checkRecent = function () {
        // if cached more than ? ago, refresh
        return true;
    };
    CacheProvider.prototype.remove = function (type) {
        console.log('removing from cache', type);
        this.LSP.remove(type);
    };
    CacheProvider.prototype.clearCache = function () {
        var _this = this;
        console.log('clearing cache');
        this.LSP.keys()
            .then(function (k) {
            for (var t in k) {
                if (k.hasOwnProperty(t)) {
                    // remove everything except session and plans
                    if (k[t] !== "cp_session"
                        && k[t] !== "plans") {
                        console.log('clearing ', k[t]);
                        _this.LSP.remove(k[t]);
                    }
                    else {
                        console.log('not clearing ', k[t]);
                    }
                }
            }
        });
    };
    CacheProvider.prototype.write = function (type, eKey, input) {
        console.log('caching ' + type);
        var p = this.encrypt(this.package(type, input), eKey);
        this.LSP.set(type, p)
            .then(function (result) { return console.log("saved to cache"); })
            .catch(function (e) { return console.log("error: " + e); });
    };
    CacheProvider.prototype.read = function (type, eKey, filter) {
        var _this = this;
        console.log('reading cache for ' + type);
        return new Promise(function (resolve, reject) {
            _this.LSP.get(type)
                .then(function (data) {
                if (data) {
                    console.log('got cache');
                    var r = _this.unPackage(type, _this.decrypt(data, eKey));
                    // checkRecent--refresh
                    if (filter) {
                        var t = _this.filterData(r, type, filter);
                        resolve(t);
                    }
                    else {
                        // console.log(r);
                        resolve(r);
                    }
                }
                else {
                    console.log('not in cache');
                    reject();
                }
            });
            // .catch(e => reject => console.log("error: " + e));
        });
    };
    CacheProvider.prototype.filterData = function (data, type, filter) {
        // (matches code in cpapi)
        var f = filter.toLowerCase();
        console.log('filter', f);
        var t = JSON.parse(data); // "r" from read
        var p = [];
        console.log('type', type);
        t[type].forEach(function (i) {
            var add = false;
            if (i.text) {
                if (i.text.toLowerCase().indexOf(f) >= 0) {
                    add = true;
                }
            }
            if (i.hint) {
                if (i.hint.toLowerCase().indexOf(f) >= 0) {
                    add = true;
                }
            }
            if (add) {
                p.push(i);
            }
        });
        console.log('found', p.length);
        var q = {};
        if (p.length) {
            q[type] = p;
        }
        ;
        var fd = JSON.stringify(q);
        return fd;
    };
    CacheProvider.prototype.package = function (type, input) {
        // { type: { cached: '1/1/1', contents: { input } } }
        var p = {};
        p[type] = {
            cached: Date.now().valueOf(),
            contents: input
        };
        return JSON.stringify(p);
    };
    CacheProvider.prototype.unPackage = function (type, input) {
        // strip off container and date
        // { type: { cached: '1/1/1', contents: { input } } }
        var p = JSON.parse(input);
        return p[type].contents;
    };
    CacheProvider.prototype.encrypt = function (data, key) {
        // console.log("encrypting");
        // console.log("key", key);
        return __WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.AES.encrypt(data, key).toString();
    };
    CacheProvider.prototype.decrypt = function (data, key) {
        // console.log('decrypting');
        // console.log("key", key);
        var bytes = __WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.AES.decrypt(data, key);
        return bytes.toString(__WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.enc.Utf8);
    };
    CacheProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__local_store_local_store__["a" /* LocalStoreProvider */],
            __WEBPACK_IMPORTED_MODULE_0__authentication_authentication__["a" /* AuthenticationProvider */]])
    ], CacheProvider);
    return CacheProvider;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_store_local_store__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cpapi_cpapi__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_purchase__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var STORAGE_KEY = 'cp_session'; // note CacheProvider does not clear this key on clearCache
var STATE_ENCRYPT_KEY = 'A little life with dried tubers'; // ts eliot the waste land, line 7
var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(cpapi, http, iap, plt, LSP) {
        this.cpapi = cpapi;
        this.http = http;
        this.iap = iap;
        this.plt = plt;
        this.LSP = LSP;
        this.firstTime = true;
        this.userLoggedIn = false;
        this.user = "";
        this.password = "";
        this.key = "";
        this.renewal = "";
        // subLastVerified: string = "";
        this.subType = "";
        this.subState = 'never'; // current, expired, never; used in subselect to enable 'renew'
        this.WARN_DAYS = 5;
        console.log('Constructor AuthenticationProvider Provider');
        // console.log(plt.platforms);
    }
    AuthenticationProvider.prototype.authenticate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var goodCredentials, goodSubscription;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = this.user.trim().toLowerCase();
                        console.log('authenticate', this.user, this.password);
                        return [4 /*yield*/, this.getUserData(this.user, this.password)];
                    case 1:
                        goodCredentials = _a.sent();
                        if (!goodCredentials) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.checkSubscription()];
                    case 2:
                        goodSubscription = _a.sent();
                        if (goodSubscription) {
                            // alert('good subscription');
                            this.userLoggedIn = true;
                            return [2 /*return*/, true];
                        }
                        else {
                            // alert('bad subscription');
                            this.userLoggedIn = false;
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        // alert('bad credentials');
                        this.userLoggedIn = false;
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationProvider.prototype.getUserData = function (user, pwd) {
        return __awaiter(this, void 0, void 0, function () {
            var path, data, d, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('getUserData');
                        path = this.cpapi.apiURL + "user/" + user + "?p=" + pwd;
                        if ((!user) || (!pwd)) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.cpapi.getData(path)];
                    case 2:
                        data = _a.sent();
                        if (!!data) {
                            d = JSON.parse(data);
                            console.log(d);
                            if (d) {
                                // set userData values
                                this.userLoggedIn = true; // until checkSubscription might override it
                                this.user = d['user'];
                                this.user = this.user.trim().toLowerCase();
                                this.key = d['key'];
                                this.renewal = d['renewal'];
                                this.subType = d['subType'];
                                this.saveAuthState();
                                return [2 /*return*/, true];
                            }
                            else {
                                this.clearUserData();
                                this.saveAuthState();
                                return [2 /*return*/, false];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log('checkCredentials getData.catch', err_1);
                        alert('UserId or Password not recognized');
                        this.clearUserData();
                        // reset user, in case they just typo'd the pwd
                        this.user = user.trim().toLowerCase();
                        this.saveAuthState();
                        return [2 /*return*/, false];
                    case 4:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationProvider.prototype.checkSubscription = function () {
        return __awaiter(this, void 0, void 0, function () {
            var n, d, millis, duration, storeData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('checkSubscription');
                        n = Date.now();
                        d = new Date(this.renewal);
                        millis = d.valueOf() - n.valueOf();
                        duration = Math.trunc(millis / (60 * 60 * 24 * 1000));
                        if (!(duration < this.WARN_DAYS)) return [3 /*break*/, 4];
                        if (!this.plt.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.checkStore()];
                    case 1:
                        storeData = _a.sent();
                        this.subState = storeData.state;
                        this.subType = storeData.subscription;
                        switch (storeData.state) {
                            case 'current':
                                // 2 second test:  test1 has not expired (apple-sandbox-2 within 5 minutes)
                                // alert('2: duration<warn, ios, storestate=current');
                                // reconcile local subscription date if needed
                                this.reconcileSubscription(storeData.expDate);
                                return [2 /*return*/, true];
                            case 'expired':
                                // 3 third test:  test1 has expired (apple-sandbox-2 after 5 minutes)
                                // alert('3: duration<warn, ios, storestate=expired');
                                alert("Your subscription to Marrelli's Red Book Care Plans has expired.  " +
                                    "Please renew to continue building Red Book-based Care Plans.  " +
                                    "Choose WORK OFFLINE to continue without renewing.");
                                return [2 /*return*/, false];
                            case 'never':
                                // 1 first test:  test1 has no apple subscription (apple-sandbox-2)
                                // have to set up to be duration < warn days to reach here
                                // eg 2/4, 5/19
                                // alert('1: duration<warn, ios, storestate=never');
                                alert("Shouldn't have reached this point with good credentials but " +
                                    "no valid store subscription.  You must be a beta tester.  :)");
                                return [2 /*return*/, false];
                            default:
                                return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (duration < 0) {
                            // alert('4: duration<0, NOT ios');
                            alert("Your subscription to Marrelli's Red Book Care Plans has expired.  " +
                                "Please renew to continue building Red Book-based Care Plans.  " +
                                "Choose WORK OFFLINE to continue without renewing.");
                            return [2 /*return*/, false];
                        }
                        else {
                            // alert('5: duration<warn, NOT ios');
                            alert("Your subscription to Marrelli's Red Book Care Plans expires in " + (duration + 1).toString() + " days." +
                                "  It will automatically renew 24 hrs before expiration, unless you cancel.");
                            return [2 /*return*/, true];
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4: 
                    // 6 test_ expires > 5 days
                    // alert('6: duration >= warn');
                    return [2 /*return*/, true];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationProvider.prototype.checkStore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var storeResult, purchases, myTypes_1, fp, latestExpPurchase, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('checkStore');
                        storeResult = { subscription: 'none', state: 'never', date: '', expDate: '' };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.iap.restorePurchases()
                            // [ { productId:, state: (android), transactionId:, date:, 
                            //     productType: (android), receipt: (android), signature: (android) }, ...]
                        ];
                    case 2:
                        purchases = _a.sent();
                        // [ { productId:, state: (android), transactionId:, date:, 
                        //     productType: (android), receipt: (android), signature: (android) }, ...]
                        if (purchases.length > 0) {
                            myTypes_1 = ['CP3SubMonthly', 'cp3submonthly'];
                            fp = purchases.filter(function (x) { return myTypes_1.indexOf(x['productId']) !== -1; });
                            // add expiration date -- using this to compare equalizes monthly and annual purchases
                            fp.forEach(function (x) { return x['expDate'] = _this.getExpiration(x['date'], x['productId']); });
                            latestExpPurchase = fp.reduce(function (a, b) { return (a['expDate'] > b['expDate']) ? a : b; });
                            if ((latestExpPurchase['expDate'] > Date.now())
                                && ((this.plt.is('ios'))
                                    || (this.plt.is('android') && latestExpPurchase['state'] == 0))) {
                                // good subscription
                                console.log('good subscription');
                                storeResult = {
                                    subscription: latestExpPurchase['productId'],
                                    state: 'current',
                                    date: latestExpPurchase['date'],
                                    expDate: latestExpPurchase['expDate'] // this is making an implicit conversion to ISOString
                                };
                            }
                            else {
                                // expired subscription  // expired or canceled if android
                                console.log('expired subscription');
                                storeResult = {
                                    subscription: latestExpPurchase['productId'],
                                    state: 'expired',
                                    date: latestExpPurchase['date'],
                                    expDate: latestExpPurchase['expDate'] // this is making an implicit conversion to ISOString
                                };
                            }
                        }
                        else {
                            // returns default storeResult:  state: 'never'
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        console.log('restorePurchase error', err_2);
                        return [3 /*break*/, 4];
                    case 4: 
                    // error, or
                    // never found in purchases, or
                    // nothing in purchases,
                    //  storeResult will be as initialized
                    return [2 /*return*/, storeResult];
                }
            });
        });
    };
    AuthenticationProvider.prototype.getExpiration = function (start, subType) {
        var exp, d;
        // days-in-month ignores leap years, let store worry about it
        var dIM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var day = 24 * 60 * 60 * 1000;
        var year = 365 * day;
        d = new Date(start);
        switch (subType) {
            case 'CP3SubAnnual':
                exp = new Date(d.valueOf() + year);
                break;
            case 'CP3SubMonthly':
                exp = new Date(d.valueOf() + (dIM[d.getMonth()] * day));
                break;
            case 'cp3submonthly':
                exp = new Date(d.valueOf() + (dIM[d.getMonth()] * day));
                break;
            default:// assume monthly
                exp = new Date(d.valueOf() + (dIM[d.getMonth()] * day));
                break;
        }
        return exp;
    };
    AuthenticationProvider.prototype.logout = function () {
        // reset firstTime, for use in welcome (??)
        this.firstTime = true;
        // save the user id, just for user convenience in re-logging in
        var uid = this.user;
        this.clearUserData();
        this.user = uid.trim().toLowerCase();
        this.saveAuthState();
    };
    AuthenticationProvider.prototype.clearUserData = function () {
        console.log('clearUserData');
        this.userLoggedIn = false;
        this.user = "";
        this.password = "";
        this.key = "";
        this.renewal = "";
        this.subType = "";
        this.subState = ""; // TODO:  this might cause a problem, i added after testing code for subState
    };
    AuthenticationProvider.prototype.readAuthState = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.LSP.get(STORAGE_KEY)
                .then(function (data) {
                if (data) {
                    var state = _this.decrypt(data, STATE_ENCRYPT_KEY);
                    console.log('got state', state);
                    _this.userLoggedIn = state['userLoggedIn'];
                    _this.user = state['user'];
                    _this.user = _this.user.trim().toLowerCase();
                    _this.password = state['password'];
                    _this.key = state['key'];
                    _this.renewal = state['renewal'];
                    _this.subType = state['subType'];
                }
                else {
                    _this.clearUserData();
                }
                resolve(_this.userLoggedIn);
            });
            // .catch(e => reject => console.log("error: " + e));
        });
    };
    AuthenticationProvider.prototype.saveAuthState = function () {
        // write user auth parms to LOCAL storage
        var state = {
            userLoggedIn: this.userLoggedIn,
            user: this.user.trim().toLowerCase(),
            password: this.password,
            key: this.key,
            renewal: this.renewal,
            subType: this.subType
        };
        console.log(state.user);
        var s = this.encrypt(state, STATE_ENCRYPT_KEY);
        this.LSP.set(STORAGE_KEY, s)
            .then(function (result) { return console.log("saved session"); })
            .catch(function (e) { return console.log("error: " + e); });
    };
    AuthenticationProvider.prototype.encrypt = function (data, key) {
        // console.log("encrypting");
        return __WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.AES.encrypt(JSON.stringify(data), key).toString();
    };
    AuthenticationProvider.prototype.decrypt = function (data, key) {
        // console.log('decrypting');
        var bytes = __WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.AES.decrypt(data, key);
        return JSON.parse(bytes.toString(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.enc.Utf8));
    };
    AuthenticationProvider.prototype.createSubscription = function (productId) {
        var _this = this;
        // alert('createSubscription ' + productId);
        return new Promise(function (resolve, reject) {
            // set up a new user on cpapi
            // console.log("createSubscription");
            // TODO: encrypt user data
            var baseDate = new Date(Date.now());
            var strNow = (baseDate.getMonth() + 1) + '/' + baseDate.getDate() + '/' + baseDate.getFullYear();
            var renewalDate = _this.getExpiration(strNow, productId);
            // TODO we'll later change to store validateReceipt to determine && see below also
            var userData = {
                user: _this.user.trim(),
                password: _this.password,
                key: _this.key,
                // renewal: ds,
                renewal: renewalDate.toISOString(),
                subType: productId
            };
            // remove the userLoggedIn flag? 
            var api = _this.cpapi.apiURL + "user/" + _this.user.trim();
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
            var postOptions = { headers: httpHeaders };
            console.log('before new user post', userData);
            _this.http.post(api, userData, postOptions)
                .subscribe(function (data) {
                // alert('returned from post ' + data);
                resolve(true);
            }, function (error) {
                alert("There was a problem saving or restoring your user information.");
                console.log(error);
                reject(false);
            });
        });
    };
    AuthenticationProvider.prototype.reconcileSubscription = function (expDate) {
        var _this = this;
        // TODO:  maybe: read the userData from the server and update only the renewal date
        return new Promise(function (resolve, reject) {
            console.log("renewSubscription");
            // TODO: encrypt user data
            var n = new Date(expDate); // from store
            var d = new Date(_this.renewal); // from local user data
            // check subscription date <> this.renewal, ie
            //      apple has different date than i have, means
            //      user renewed w apple, or user got refunded by apple
            if (n.valueOf() !== d.valueOf()) {
                // update user on cpapi with renewed subscription date
                var userData = {
                    user: _this.user.trim(),
                    password: _this.password,
                    key: _this.key,
                    renewal: expDate,
                    subType: _this.subType
                };
                var api = _this.cpapi.apiURL + "user/" + _this.user.trim();
                // this.conn.checkConnection();
                var httpHeaders = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
                var postOptions = { headers: httpHeaders };
                console.log('before renew post', userData);
                _this.http.post(api, userData, postOptions)
                    .subscribe(function (data) {
                    _this.saveAuthState();
                    resolve(true);
                }, function (error) {
                    alert("There was a problem updating your user information.");
                    console.log(error);
                    reject(false);
                });
            }
            else {
                resolve(true);
            }
        });
    };
    AuthenticationProvider.prototype.checkUser = function (user) {
        var _this = this;
        return new Promise(function (resolve) {
            // see if user already used, or is available, on cpapi
            // TODO: could be user is present but expired, allow to be used?  no
            var api = _this.cpapi.apiURL + "user/" + user;
            _this.http.head(api)
                .subscribe(function (data) { resolve(false); }, function (error) { resolve(true); });
        });
    };
    // helper
    AuthenticationProvider.prototype.reportState = function (msg) {
        if (this.plt.is('cordova')) {
            var st = msg + '-->' +
                'userLoggedIn=' + this.userLoggedIn + ' ' +
                'user=' + this.user + ' ' +
                'password=' + this.password + ' ' +
                'key=' + this.key + ' ' +
                'renewal=' + this.renewal + ' ' +
                'subType=' + this.subType + ' ' +
                'subState=' + this.subState;
            alert(st);
        }
        else {
            console.log(msg + '-->');
            console.log('userLoggedIn=', this.userLoggedIn); // until checkSubscription might override it
            console.log('user=', this.user);
            console.log('password=', this.password);
            console.log('key=', this.key);
            console.log('renewal=', this.renewal);
            console.log('subType=', this.subType);
            console.log('subState=', this.subState);
            console.log('<--' + msg);
        }
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cpapi_cpapi__["a" /* CPAPI */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__local_store_local_store__["a" /* LocalStoreProvider */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

// MOCKS
// async mockCheckStore(): Promise < storeDataType > {
//     return {
//         subscription: '',
//         state: 'never',
//         date: '',
//         expDate: ''
//         // subscription: 'CP3SubMonthly',
//         // state: 'expired',
//         // date: '2/2/2019'
//     } as storeDataType;
// }
// async mockCheckStore2(): Promise < storeDataType > {
//     console.log('mockcheckStore2');
//     let storeResult: storeDataType
//         = { subscription: 'none', state: 'never', date: '', expDate: '' };
//     try {
//         // let purchases = await this.iap.restorePurchases()
//         const purchases =
//             [
//                 { productId: "CP3SubMonthly", state: 3, transactionId: 'abc123', date: "2017-02-02T06:00:00.000Z" },
//                 { productId: "CP3SubMonthly", state: 3, transactionId: 'abc123', date: "2017-02-04T06:00:00.000Z" },
//                 { productId: "CP3SubAnnual", state: 3, transactionId: 'abc123', date: "2016-03-19T06:00:00.000Z" },
//                 { productId: "CP3SubMonthly", state: 3, transactionId: 'abc123', date: "2017-01-14T06:00:00.000Z" },
//                 { productId: "CP3SubMonthly", state: 3, transactionId: 'abc123', date: "2017-02-01T06:00:00.000Z" },
//                 { productId: "CP3SubMonthly", state: 3, transactionId: 'abc123', date: "2016-12-19T06:00:00.000Z" },
//             ]
//             if(purchases.length > 0) {
//     // filter for my types only
//     const myTypes = ['CP3SubAnnual', 'CP3SubMonthly'];
//     let fp = purchases.filter(x => myTypes.indexOf(x['productId']) !== -1);
//     console.log(fp);
//     // add expiration date -- using this to compare equalizes monthly and annual purchases
//     fp.forEach(x => {
//         console.log('fd[] date', x['date']);
//         x['expDate'] = this.getExpiration(x['date'], x['productId']);
//         console.log('fd[] expDate', x['expDate'].toISOString());
//     });
//     console.log(fp);
//     // reduce to latest expiring-purchase only
//     const latestExpPurchase = fp.reduce((a, b) => (a['expDate'] > b['expDate']) ? a : b);
//     console.log(latestExpPurchase);
//     if (latestExpPurchase['expDate'] > Date.now()) {
//         // good subscription
//         console.log('good subscription');
//         storeResult = {
//             subscription: latestExpPurchase['productId'],
//             state: 'current',
//             date: latestExpPurchase['date'],
//             expDate: latestExpPurchase['expDate']
//         };
//     } else {
//         // expired subscription
//         console.log('expired subscription');
//         storeResult = {
//             subscription: latestExpPurchase['productId'],
//             state: 'expired',
//             date: latestExpPurchase['date'],
//             expDate: latestExpPurchase['expDate']
//         };
//     }
// } else {  // no purchases retrieved
//     // returns default storeResult:  state: 'never'
// }
//         }
//         catch (err) {
//     console.log('restorePurchase error', err);
// }
// return storeResult;
//     }
//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_master_plans_master_plans__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lookup_lookup__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddGoalPage = /** @class */ (function () {
    function AddGoalPage(navCtrl, navParams, alertCtrl, plt, toast, PPP, MPP, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.toast = toast;
        this.PPP = PPP;
        this.MPP = MPP;
        this.auth = auth;
        this.goal = {};
        // problem to which goal added
        this.plan = navParams.get('plan');
        this.problem = navParams.get('problem');
    }
    AddGoalPage.prototype.ionViewDidEnter = function () {
        // may have come from add, may have returned from selection
        this.goal["text"] = "";
        this.goal["hint"] = "";
        if (this.MPP.listSelection) {
            this.goal = this.MPP.listSelection;
            // clear it immediately after used
            this.MPP.listSelection = "";
        }
        // note these are initialized even if goal is taken from master list
        this.goal["term"] = (!!this.goal["term"]) ? this.goal["term"] : "ST";
    };
    AddGoalPage.prototype.lookupMaster = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__lookup_lookup__["a" /* LookupPage */], {
            types: "goals",
            type: "goal",
            searchName: "Outcome",
            planName: this.plan.name + ': ' + this.problem.text,
            item: this.goal
        });
    };
    AddGoalPage.prototype.editDone = function () {
        var d = new Date();
        this.plan.updated = d.toLocaleDateString();
        this.problem.goals.push(this.goal);
        this.PPP.write();
        if (this.plt.is('mobile')) {
            this.toast.show('Outcome Added', '1500', 'center').subscribe(function (t) { });
        }
        this.navCtrl.pop();
    };
    AddGoalPage.prototype.cancelEdit = function () {
        // exit w/o save
        this.navCtrl.pop();
    };
    AddGoalPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__help_help__["a" /* HelpPage */]);
    };
    AddGoalPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    AddGoalPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    AddGoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-goal',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/add-goal/add-goal.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar class="navbarStyle" color="primary">\n\n    <ion-title>Add an Outcome</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n\n        <ion-icon name="unlock"></ion-icon>\n\n      </button>\n\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n\n        <ion-icon name="lock"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="help()">\n\n        <ion-icon name="help"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p class="helpful">Adding an Outcome to {{plan.name}}\n\n  </p>\n\n  <br>\n\n  <button ion-button icon-left *ngIf="auth.userLoggedIn" (click)="lookupMaster()">\n\n    <ion-icon name="add"></ion-icon>\n\n    Add from the Red Book\n\n  </button>\n\n  <button ion-button icon-left *ngIf="!auth.userLoggedIn" (click)="login()">\n\n    <ion-icon name="lock"></ion-icon>\n\n    Log In to Add from the Red Book\n\n  </button>\n\n  <ion-item>\n\n    <ion-textarea rows=4 type="text" placeholder="Describe the outcome here" [(ngModel)]="goal.text">\n\n    </ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <p class="hint">{{goal.hint}}</p>\n\n  </ion-item>\n\n  <ion-list radio-group [(ngModel)]="goal.term">\n\n    <ion-item>\n\n      <ion-label>Short Term</ion-label>\n\n      <ion-radio checked="true" value="ST"></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Long Term</ion-label>\n\n      <ion-radio value="LT"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button [disabled]="!goal.text" (click)="editDone()">Save</button>\n\n  <button ion-button (click)="cancelEdit()">Cancel</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/add-goal/add-goal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_master_plans_master_plans__["a" /* MasterPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], AddGoalPage);
    return AddGoalPage;
}());

//# sourceMappingURL=add-goal.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CarePlanPage } from '../careplan/careplan';


var SubscribePage = /** @class */ (function () {
    // TODO change button label to "renew" if they're already subscribed?
    // NOTE!! don't think we can ever change the key once established, or encrypted plans wouldn't be de-cryptable
    // login disables subscribe button if the user is subscribed, so they can't get here
    //    but it only works after first login on app load, cause we don't know yet
    function SubscribePage(navCtrl, navParams, alertCtrl, plt, auth, PPP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.auth = auth;
        this.PPP = PPP;
        this.uidAvail = false;
        this.userId = this.auth.user;
        this.pwd = this.auth.password;
        this.productId = navParams.get('id');
    }
    SubscribePage.prototype.setup = function () {
        // subscribe trans success,
        // now create our new user on cpapi
        var _this = this;
        // TODO need an android version?  no platform-specific stuff in here--do in createSubscription
        // ensure good format for userid
        this.userId = this.userId.trim().toLowerCase();
        if (this.plt.is('cordova')) {
            this.auth.user = this.userId;
            this.auth.password = this.pwd;
            this.auth.key = this.myKey;
            this.auth.createSubscription(this.productId)
                .then(function (a) {
                // create sucessful
                console.log('subscription created a=', a);
                var prompt = _this.alertCtrl.create({
                    title: 'Set Up Complete!',
                    buttons: [{
                            text: 'Continue', role: 'cancel',
                            handler: function () {
                                _this.auth.authenticate().then(function () {
                                    // save the new user's previously-created plans
                                    //    initializes server-stored plans when empty
                                    _this.PPP.pushWeb();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                                });
                            }
                        }]
                });
                prompt.present();
            })
                .catch(function (b) {
                console.log('subscription created b=', b);
                var prompt = _this.alertCtrl.create({
                    title: 'Problem:',
                    message: 'Set up did not complete correctly',
                    buttons: [{
                            text: "Continue", role: 'cancel',
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
                            }
                        }]
                });
                prompt.present();
            });
        }
    };
    SubscribePage.prototype.checkAvail = function () {
        var _this = this;
        this.userId = this.userId.trim().toLowerCase();
        this.auth.checkUser(this.userId)
            .then(function (d) { _this.uidAvail = d; });
    };
    SubscribePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subscribe',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/subscribe/subscribe.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton class="navbarStyle" color="primary">\n    <ion-title>Set Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item no-lines>\n  <div>Set up your subscriber information. Use <span class="hilite">Check Availability</span> to confirm your User ID selection.  When you\'ve selected an available User ID and completed the rest of the entries, tap Save and Continue below.</div>\n</ion-item>\n  <ion-item>\n    <ion-label stacked>Choose a User ID: </ion-label>\n    <ion-input [(ngModel)]="userId"></ion-input>\n  </ion-item>\n  <ion-item *ngIf="!uidAvail" class="taken">Sorry, that one\'s taken.</ion-item>\n  <ion-item *ngIf="uidAvail"class="available">Yes, that User ID is available.</ion-item>\n  <button ion-button (click)="checkAvail()">Check Availability</button>\n  <ion-item>\n    <ion-label stacked>Choose a Password</ion-label>\n    <ion-input type="password" [(ngModel)]="pwd"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Verify Password</ion-label>\n    <ion-input type="password" [(ngModel)]="pwdVer"></ion-input>\n  </ion-item>\n  <br>\n  <br>\n  <ion-item>\n    <ion-label stacked>Choose an Encryption Key</ion-label>\n    <ion-input type="password" [(ngModel)]="myKey"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Verify Encryption Key</ion-label>\n    <ion-input type="password" [(ngModel)]="myKeyVer"></ion-input>\n  </ion-item>\n  <ion-item no-lines>\n    <div>\n      The Encryption Key you assign will be used to make your care plans safe in the cloud.</div>\n    <div>\n      Your content is encrypted on your device, before it is uploaded, so it is always secure while in transit and when\n      stored in the cloud.</div>\n    <div>We suggest 20 characters or more, and something memorable, such as a line from a favorite song.</div>\n  </ion-item>\n  <!-- <button ion-button *ngIf="(!!pwd && pwd==pwdVer && !!mykey && mykey==mykeyVer && uidAvail)" (click)="setup()">Save and Continue</button><br> -->\n  <button ion-button [disabled]="(!(!!pwd && pwd==pwdVer && !!myKey && myKey==myKeyVer && uidAvail))" (click)="setup()">Save and Continue</button><br>\n  <ion-item no-lines>\n    <div>After set up, you will be automatically signed in, and sent to your Care Plans Page.</div>\n  </ion-item>\n  <!-- <button ion-button (click)="cancelEdit()">Cancel</button> -->\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/subscribe/subscribe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], SubscribePage);
    return SubscribePage;
}());

//# sourceMappingURL=subscribe.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_plan_edit_plan__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_problem_edit_problem__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_goal_edit_goal__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_intervention_edit_intervention__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_problem_add_problem__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_goal_add_goal__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_intervention_add_intervention__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__text_plan_text_plan__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lookup_plan_lookup_plan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plan_menu_plan_menu__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__topic_menu_topic_menu__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_dragula__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var ContentsPage = /** @class */ (function () {
    function ContentsPage(navCtrl, navParams, popup, ds, alertCtrl, auth, PPP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popup = popup;
        this.ds = ds;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.PPP = PPP;
        this.ddChanges = false;
        this.nowDragging = false;
        this.subs = new __WEBPACK_IMPORTED_MODULE_18_rxjs__["Subscription"]();
        this.plan = navParams.get('plan');
        // dragging stuff
        // disable scroll when dragging
        document.addEventListener('touchstart', function (e) {
            if (_this.nowDragging) {
                e.preventDefault();
            }
        }, { passive: false });
        document.addEventListener('touchmove', function (e) {
            // console.log('touchmove event', this.nowDragging);
            if (_this.nowDragging) {
                e.preventDefault();
            }
        }, { passive: false });
        this.subs.add(this.ds.drag()
            .subscribe(function (_a) {
            var name = _a.name;
            _this.nowDragging = true;
            // console.log('drag event', name, this.nowDragging);
        }));
        this.subs.add(this.ds.dragend()
            .subscribe(function (_a) {
            var name = _a.name;
            _this.nowDragging = false;
            // console.log('dragend event', name, this.nowDragging);
        }));
        // drag/drop events
        this.subs.add(this.ds.dropModel("goal-list")
            .subscribe(function (_a) {
            var el = _a.el, targetModel = _a.targetModel;
            _this.nowDragging = false;
            // reassignment to this.plans.problems[].xxx replaces arraw w/newly-sequenced one,
            // should not work if they drag out of one problem to another
            var t = el.getElementsByClassName('probId');
            var c = parseInt(t[0].innerHTML);
            _this.plan.problems[c].goals = targetModel;
            _this.ddChanges = true;
        }));
        this.subs.add(this.ds.dropModel("int-list")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, targetModel = _a.targetModel;
            _this.nowDragging = false;
            // reassignment to this.plans.problems[].xxx replaces arraw w/newly-sequenced one,
            // should not work if they drag out of one problem to another
            var t = el.getElementsByClassName('probId');
            var c = parseInt(t[0].innerHTML);
            _this.plan.problems[c].interventions = targetModel;
            _this.ddChanges = true;
        }));
    }
    ContentsPage.prototype.ionViewDidEnter = function () {
        this.ddChanges = false; // init/re-init on load
    };
    ContentsPage.prototype.ionViewWillLeave = function () {
        if (this.ddChanges) {
            this.PPP.write();
            this.ddChanges = false; // reset after save
        }
    };
    ContentsPage.prototype.ionViewWillUnload = function () {
        this.subs.unsubscribe();
        document.removeEventListener('touchmove', function () { });
        document.removeEventListener('touchend', function () { });
    };
    ContentsPage.prototype.planMenu = function (pEv) {
        var _this = this;
        var menu = this.popup.create(__WEBPACK_IMPORTED_MODULE_15__plan_menu_plan_menu__["a" /* PlanMenuPage */], {}, { cssClass: 'planMenu' });
        menu.onDidDismiss(function (opt) {
            switch (opt) {
                case 'condition':
                    _this.conditionAdd();
                    break;
                case 'discipline':
                    _this.disciplineAdd();
                    break;
                case 'myplan':
                    _this.mergeIn();
                    break;
                case 'topic':
                    _this.problemAdd();
                    break;
                case 'share':
                    _this.showPrint();
                    break;
                case 'delete':
                    _this.deletePlan();
                    break;
                default: console.log('got ' + opt + ' from plan-menu');
            }
        });
        menu.present({ ev: pEv });
    };
    ContentsPage.prototype.topicMenu = function (pEv, item) {
        var _this = this;
        var menu = this.popup.create(__WEBPACK_IMPORTED_MODULE_16__topic_menu_topic_menu__["a" /* TopicMenuPage */], { item: item }, { cssClass: 'topicMenu' });
        menu.onDidDismiss(function (opt, item) {
            console.log(item);
            switch (opt) {
                case 'goal':
                    _this.goalAdd(item);
                    break;
                case 'intervention':
                    _this.interventionAdd(item);
                    break;
                case 'delete':
                    _this.problemDelete(item);
                    break;
                default: console.log('got ' + opt + ' from topic-menu');
            }
        });
        menu.present({ ev: pEv });
    };
    ContentsPage.prototype.editPlan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_plan_edit_plan__["a" /* EditPlanPage */], {
            plan: this.plan
        });
    };
    ContentsPage.prototype.toggleProblemExpand = function (problem) {
        if (problem.expanded) {
            problem.expanded = false;
            problem.icon = "arrow-dropright";
        }
        else {
            problem.expanded = true;
            problem.icon = "arrow-dropdown";
        }
    };
    ContentsPage.prototype.conditionAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__lookup_plan_lookup_plan__["a" /* LookupPlanPage */], {
            types: "conditions",
            type: "condition",
            searchName: "Condition",
            target: this.plan,
            fromPage: 'contents'
        });
    };
    ContentsPage.prototype.disciplineAdd = function () {
        console.log('discplineAdd');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__lookup_plan_lookup_plan__["a" /* LookupPlanPage */], {
            types: "disciplines",
            type: "discipline",
            searchName: "Discipline",
            target: this.plan,
            fromPage: 'contents'
        });
    };
    ContentsPage.prototype.mergeIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__lookup_plan_lookup_plan__["a" /* LookupPlanPage */], {
            types: "",
            type: "My Plan",
            searchName: "Your Plan",
            target: this.plan,
            fromPage: 'contents'
        });
    };
    ContentsPage.prototype.problemAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_problem_add_problem__["a" /* AddProblemPage */], {
            plan: this.plan
        });
    };
    ContentsPage.prototype.problemEdit = function (problem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_problem_edit_problem__["a" /* EditProblemPage */], {
            plan: this.plan,
            problem: problem
        });
    };
    ContentsPage.prototype.problemDelete = function (problem) {
        var _this = this;
        // confirm before delete
        var prompt = this.alertCtrl.create({
            title: 'Confirm Delete',
            buttons: [
                {
                    text: "No, don't delete",
                    role: 'cancel'
                },
                {
                    text: 'Yes, delete',
                    handler: function () {
                        var p = _this.plan.problems.indexOf(problem, 0);
                        if (p > -1) {
                            _this.plan.problems.splice(p, 1);
                        }
                        var d = new Date();
                        _this.plan.updated = d.toLocaleDateString();
                        _this.PPP.write();
                    }
                }
            ]
        });
        prompt.present();
    };
    ContentsPage.prototype.goalAdd = function (problem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__add_goal_add_goal__["a" /* AddGoalPage */], {
            plan: this.plan,
            problem: problem
        });
    };
    ContentsPage.prototype.goalEdit = function (goal) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_goal_edit_goal__["a" /* EditGoalPage */], {
            plan: this.plan,
            goal: goal
        });
    };
    ContentsPage.prototype.goalDelete = function (problem, goal) {
        // no confirmation
        var p = this.plan.problems.indexOf(problem, 0);
        if (p > -1) {
            var g = this.plan.problems[p].goals.indexOf(goal, 0);
            if (g > -1) {
                this.plan.problems[p].goals.splice(g, 1);
            }
        }
        var d = new Date();
        this.plan.updated = d.toLocaleDateString();
        this.PPP.write();
    };
    ContentsPage.prototype.interventionAdd = function (problem) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__add_intervention_add_intervention__["a" /* AddInterventionPage */], {
            plan: this.plan,
            problem: problem
        });
    };
    ContentsPage.prototype.interventionEdit = function (intervention) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_intervention_edit_intervention__["a" /* EditInterventionPage */], {
            plan: this.plan,
            intervention: intervention
        });
    };
    ContentsPage.prototype.interventionDelete = function (problem, intervention) {
        // no confirmation
        var p = this.plan.problems.indexOf(problem, 0);
        if (p > -1) {
            var n = this.plan.problems[p].interventions.indexOf(intervention, 0);
            if (n > -1) {
                this.plan.problems[p].interventions.splice(n, 1);
            }
        }
        var d = new Date();
        this.plan.updated = d.toLocaleDateString();
        this.PPP.write();
    };
    ContentsPage.prototype.showPrint = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__text_plan_text_plan__["a" /* TextPlanPage */], {
            plan: this.plan
        });
    };
    ContentsPage.prototype.deletePlan = function () {
        var _this = this;
        // confirm before delete
        var prompt = this.alertCtrl.create({
            title: 'Confirm Delete',
            buttons: [
                {
                    text: "No, don't delete",
                    role: 'cancel'
                },
                {
                    text: 'Yes, delete',
                    handler: function () {
                        _this.PPP.deletePlan(_this.plan);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        prompt.present();
    };
    ContentsPage.prototype.discList = function (int) {
        var discText = "";
        if (int.interdisciplinary) {
            discText += "Interdisciplinary ";
        }
        if (int.nursing) {
            discText += "Nursing ";
        }
        if (int.aide) {
            discText += "Aide ";
        }
        if (int.bereavement) {
            discText += "Bereavement ";
        }
        if (int.dietary) {
            discText += "Dietary ";
        }
        if (int.music) {
            discText += "Music/Other ";
        }
        if (int.OT) {
            discText += "OT ";
        }
        if (int.PT) {
            discText += "PT ";
        }
        if (int.pharmacist) {
            discText += "Pharmacist ";
        }
        if (int.social) {
            discText += "Social Work ";
        }
        if (int.spiritual) {
            discText += "Spiritual Counselor ";
        }
        if (int.speech) {
            discText += "Speech ";
        }
        if (int.volunteer) {
            discText += "Volunteer ";
        }
        if (int.other) {
            discText += int.other;
        }
        return discText;
    };
    ContentsPage.prototype.goalTerm = function (goal) {
        if (goal.term) {
            if (goal.term === "ST") {
                return "Short Term";
            }
            else {
                return "Long Term";
            }
        }
    };
    ContentsPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__help_help__["a" /* HelpPage */]);
    };
    ContentsPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
    };
    ContentsPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    ContentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contents',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/contents/contents.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="navbarStyle" color="primary">\n\n    <ion-title>Care Plan</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n\n        <ion-icon name="unlock"></ion-icon>\n\n      </button>\n\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n\n        <ion-icon name="lock"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="help()">\n\n        <ion-icon name="help"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="divHeader">\n\n    <button class="tool" (click)="planMenu($event)">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <span (click)="editPlan()">{{plan.name}}</span>\n\n  </div>\n\n  <ion-grid class="verticalLine">\n\n    <div *ngFor="let p of plan.problems; let i = index">\n\n      <div>\n\n        <ion-row>\n\n\n\n          <ion-col col-1>\n\n            <ion-icon class="expandTool" [name]="p.icon" (click)="toggleProblemExpand(p)"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-9><span class="problem" (click)="problemEdit(p)">{{p.text}}</span></ion-col>\n\n          <ion-col col-1>\n\n            <!-- <button *ngIf="p.expanded" class="tool" (click)="topicMenu($event, p)"> -->\n\n              <ion-icon name="menu" *ngIf="p.expanded" class="tool" (click)="topicMenu($event, p)"></ion-icon>\n\n            <!-- </button> -->\n\n          </ion-col>\n\n        </ion-row>\n\n        <div io-item *ngIf="p.expanded">\n\n          <ion-list no-margin [dragula]=\'"goal-list"\' [(dragulaModel)]="p.goals">\n\n            <div ion-item no-lines *ngFor="let g of p.goals">\n\n              <ion-row no-padding align-items-center>\n\n                <ion-col col-1 no-padding>\n\n                </ion-col>\n\n                <ion-col col-9 no-padding>\n\n                  <p [class]="(g.term===\'ST\')?\'goalShort\':\'goal\'" (click)="goalEdit(g)">\n\n                    <span class="probId" hidden>{{i}}</span>\n\n                    {{g.text}} <em>{{goalTerm(g)}}</em>\n\n                  </p>\n\n                </ion-col>\n\n                <ion-col col-1 no-padding>\n\n                  <button class="trash" (click)="goalDelete(p, g)">\n\n                    <ion-icon name="trash"></ion-icon>\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-list>\n\n          <ion-list no-margin [dragula]=\'"int-list"\' [(dragulaModel)]="p.interventions">\n\n            <div ion-item no-lines *ngFor="let n of p.interventions">\n\n              <ion-row no-padding align-items-center>\n\n                <ion-col col-1 no-padding>\n\n                </ion-col>\n\n                <ion-col col-9 no-padding>\n\n                  <p class="intervention" (click)="interventionEdit(n)">\n\n                    <span class="probId" hidden>{{i}}</span>\n\n                    {{n.text}}\n\n                  </p>\n\n                </ion-col>\n\n                <ion-col col-1 no-padding>\n\n                  <button class="trash" (click)="interventionDelete(p, n)">\n\n                    <ion-icon name="trash"></ion-icon>\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row no-padding>\n\n                <ion-col col-1 no-padding></ion-col>\n\n                <ion-col col-9 no-padding class="discipline">\n\n                  <em>{{discList(n)}}</em>\n\n                </ion-col>\n\n                <ion-col col-1 no-padding></ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-list>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/contents/contents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_dragula__["b" /* DragulaService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], ContentsPage);
    return ContentsPage;
}());

//# sourceMappingURL=contents.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_personal_plans_personal_plans__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditPlanPage = /** @class */ (function () {
    function EditPlanPage(navCtrl, navParams, alertCtrl, auth, PPP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.PPP = PPP;
        this.savePlan = { name: "", text: "", updated: "" };
        this.plan = navParams.get('plan');
        this.savePlan.name = this.plan.name;
        this.newName = this.plan.name;
        this.savePlan.text = this.plan.text;
        this.savePlan.updated = this.plan.updated;
        this.canUseName = true;
    }
    EditPlanPage.prototype.nameChange = function () {
        // console.log('checking');
        if (this.savePlan.name === this.newName.trim()) {
            // cause it's ok to reuse the same name you already had
            this.canUseName = true;
        }
        else {
            // console.log('checking=', this.newName);
            this.canUseName = this.PPP.checkPlanName(this.newName.trim());
            // console.log('canUseName', this.canUseName);
        }
        // console.log('checking=', this.canUseName);
    };
    EditPlanPage.prototype.editDone = function () {
        this.plan['name'] = this.newName;
        var d = new Date();
        this.plan.updated = d.toLocaleDateString();
        this.PPP.write();
        this.navCtrl.pop();
    };
    EditPlanPage.prototype.cancelEdit = function () {
        // undo on cancel
        this.plan.name = this.savePlan.name;
        this.plan.text = this.savePlan.text;
        this.plan.updated = this.savePlan.updated;
        this.navCtrl.pop();
    };
    EditPlanPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__help_help__["a" /* HelpPage */]);
    };
    EditPlanPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    EditPlanPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    EditPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-plan',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/edit-plan/edit-plan.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Care Plan</ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n        <ion-icon name="unlock"></ion-icon>\n      </button>\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n        <ion-icon name="lock"></ion-icon>\n      </button>\n      <button ion-button (click)="help()">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p class="helpful">Changing the name or description of my care plan\n  </p>\n  <br>\n  <ion-item text-wrap>\n    <ion-textarea type="text" rows=2 placeholder="Name the plan" [(ngModel)]="newName" (ngModelChange)="nameChange()">\n    </ion-textarea>\n  </ion-item>\n  <ion-item text-wrap>\n    <ion-textarea type="text" rows=4 placeholder="Describe the plan" [(ngModel)]="plan.text">\n    </ion-textarea>\n  </ion-item>\n  <button ion-button [disabled]="(!canUseName || !newName)" (click)="editDone()">Save</button>\n  <!-- <button ion-button [disabled]="!plan.name" (click)="editDone()">Save</button> -->\n  <button ion-button (click)="cancelEdit()">Cancel</button>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/edit-plan/edit-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], EditPlanPage);
    return EditPlanPage;
}());

//# sourceMappingURL=edit-plan.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProblemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_personal_plans_personal_plans__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProblemPage = /** @class */ (function () {
    function EditProblemPage(navCtrl, navParams, alertCtrl, auth, PPP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.PPP = PPP;
        this.saveProblem = { text: "" };
        this.plan = navParams.get('plan');
        this.problem = navParams.get('problem');
        this.saveProblem.text = this.problem.text;
    }
    EditProblemPage.prototype.editDone = function () {
        var d = new Date();
        this.plan.updated = d.toLocaleDateString();
        this.PPP.write();
        this.navCtrl.pop();
    };
    EditProblemPage.prototype.cancelEdit = function () {
        // undo on cancel
        this.problem.text = this.saveProblem.text;
        this.navCtrl.pop();
    };
    EditProblemPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__help_help__["a" /* HelpPage */]);
    };
    EditProblemPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    EditProblemPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    EditProblemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-problem',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/edit-problem/edit-problem.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Care Topic</ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n        <ion-icon name="unlock"></ion-icon>\n      </button>\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n        <ion-icon name="lock"></ion-icon>\n      </button>\n      <button ion-button (click)="help()">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p class="helpful">Changing a Care Topic in {{plan.name}}\n  </p>\n  <br>\n  <ion-item>\n    <ion-textarea rows=4 type="text" placeholder="Problem, condition or aspect of care" [(ngModel)]="problem.text">\n    </ion-textarea>\n  </ion-item>\n  <ion-item>\n    <p class="hint">{{problem.hint}}</p>\n  </ion-item>\n  <button ion-button [disabled]="!problem.text" (click)="editDone()">Save</button>\n  <button ion-button (click)="cancelEdit()">Cancel</button>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/edit-problem/edit-problem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], EditProblemPage);
    return EditProblemPage;
}());

//# sourceMappingURL=edit-problem.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_personal_plans_personal_plans__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditGoalPage = /** @class */ (function () {
    // remember to undo the checkbox too
    function EditGoalPage(navCtrl, navParams, alertCtrl, auth, PPP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.PPP = PPP;
        this.saveGoal = { text: "" };
        this.plan = navParams.get('plan');
        this.goal = navParams.get('goal');
        this.saveGoal.text = this.goal.text;
    }
    EditGoalPage.prototype.editDone = function () {
        var d = new Date();
        this.plan.updated = d.toLocaleDateString();
        this.PPP.write();
        this.navCtrl.pop();
    };
    EditGoalPage.prototype.cancelEdit = function () {
        // undo on cancel
        this.goal.text = this.saveGoal.text;
        this.navCtrl.pop();
    };
    EditGoalPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__help_help__["a" /* HelpPage */]);
    };
    EditGoalPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    EditGoalPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    EditGoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-goal',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/edit-goal/edit-goal.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Outcome</ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n        <ion-icon name="unlock"></ion-icon>\n      </button>\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n        <ion-icon name="lock"></ion-icon>\n      </button>\n      <button ion-button (click)="help()">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p class="helpful">Changing an Outcome in {{plan.name}}\n  </p>\n  <br>\n  <ion-item>\n    <ion-textarea rows=4 type="text" placeholder="Describe the outcome here" [(ngModel)]="goal.text">\n    </ion-textarea>\n  </ion-item>\n  <ion-item>\n    <p class="hint">{{goal.hint}}</p>\n  </ion-item>\n  <ion-list radio-group [(ngModel)]="goal.term">\n    <ion-item>\n      <ion-label>Short Term</ion-label>\n      <ion-radio checked="true" value="ST"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Long Term</ion-label>\n      <ion-radio value="LT"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Not Applicable</ion-label>\n      <ion-radio value=""></ion-radio>\n    </ion-item>\n  </ion-list>\n  <button ion-button [disabled]="!goal.text" (click)="editDone()">Save</button>\n  <button ion-button (click)="cancelEdit()">Cancel</button>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/edit-goal/edit-goal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], EditGoalPage);
    return EditGoalPage;
}());

//# sourceMappingURL=edit-goal.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInterventionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_personal_plans_personal_plans__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditInterventionPage = /** @class */ (function () {
    // remember to undo the radio button too
    function EditInterventionPage(navCtrl, navParams, alertCtrl, auth, PPP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.PPP = PPP;
        this.saveIntervention = { text: "" };
        this.plan = navParams.get('plan');
        this.intervention = navParams.get('intervention');
        this.saveIntervention.text = this.intervention.text;
    }
    EditInterventionPage.prototype.editDone = function () {
        var d = new Date();
        this.plan.updated = d.toLocaleDateString();
        this.PPP.write();
        this.navCtrl.pop();
    };
    EditInterventionPage.prototype.cancelEdit = function () {
        // undo on cancel
        this.intervention.text = this.saveIntervention.text;
        this.navCtrl.pop();
    };
    EditInterventionPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__help_help__["a" /* HelpPage */]);
    };
    EditInterventionPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    EditInterventionPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    EditInterventionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-intervention',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/edit-intervention/edit-intervention.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Intervention</ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n        <ion-icon name="unlock"></ion-icon>\n      </button>\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n        <ion-icon name="lock"></ion-icon>\n      </button>\n      <button ion-button (click)="help()">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p class="helpful">Changing an Intervention in {{plan.name}}\n  </p>\n  <br>\n  <ion-item>\n    <ion-textarea rows=4 type="text" placeholder="Describe the intervention here" [(ngModel)]="intervention.text">\n    </ion-textarea>\n  </ion-item>\n  <ion-item>\n    <p class="hint">{{intervention.hint}}</p>\n  </ion-item>\n  <ion-list>\n    <ion-list-header>Disciplines/Care Team</ion-list-header>\n    <ion-item>\n      <ion-label>Interdisciplinary</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.interdisciplinary"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nursing</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.nursing"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Aide</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.aide"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bereavement</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.bereavement"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dietary</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.dietary"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Music/Other</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.music"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Occupational Therapy</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.OT"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Physical Therapy</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.PT"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pharmacist</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.pharmacist"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Social Work</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.social"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Spiritual Counselor</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.spiritual"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Speech Therapy</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.speech"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Volunteer</ion-label>\n      <ion-checkbox [(ngModel)]="intervention.volunteer"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-item>\n    <ion-input type="text" placeholder="Other Discplines" [(ngModel)]="intervention.other">\n    </ion-input>\n  </ion-item>\n  <button ion-button [disabled]="!intervention.text" (click)="editDone()">Save</button>\n  <button ion-button (click)="cancelEdit()">Cancel</button>\n</ion-content>\n\n\n<!-- (a primary caregiver is not required in hospice but this may be dependent on the hospice’s policies.) -->'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/edit-intervention/edit-intervention.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], EditInterventionPage);
    return EditInterventionPage;
}());

//# sourceMappingURL=edit-intervention.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProblemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lookup_lookup__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_master_plans_master_plans__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddProblemPage = /** @class */ (function () {
    function AddProblemPage(navCtrl, navParams, alertCtrl, plt, toast, PPP, MPP, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.toast = toast;
        this.PPP = PPP;
        this.MPP = MPP;
        this.auth = auth;
        this.problem = {};
        // plan to which problem added
        this.plan = navParams.get('plan');
    }
    AddProblemPage.prototype.ionViewDidEnter = function () {
        // may have come from add, may have returned from selection
        this.problem["text"] = "";
        this.problem["hint"] = "";
        if (this.MPP.listSelection) {
            this.problem = this.MPP.listSelection;
            // clear it immediately after used
            this.MPP.listSelection = "";
        }
        // note these are initialized even if problem is taken from master list
        if (!this.problem["goals"]) {
            this.problem["goals"] = [];
        }
        if (!this.problem["interventions"]) {
            this.problem["interventions"] = [];
        }
        this.problem["expanded"] = true;
        this.problem["icon"] = "arrow-dropdown";
    };
    AddProblemPage.prototype.lookupMaster = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__lookup_lookup__["a" /* LookupPage */], {
            types: "problems",
            type: "problem",
            searchName: "Topic",
            planName: this.plan.name,
            item: this.problem
        });
    };
    AddProblemPage.prototype.editDone = function () {
        var d = new Date();
        this.plan.updated = d.toLocaleDateString();
        this.plan.problems.push(this.problem);
        this.PPP.write();
        if (this.plt.is('mobile')) {
            this.toast.show('Topic Added', '1500', 'center').subscribe(function (t) { });
        }
        this.navCtrl.pop();
    };
    AddProblemPage.prototype.cancelEdit = function () {
        // exit w/o save
        this.navCtrl.pop();
    };
    AddProblemPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__help_help__["a" /* HelpPage */]);
    };
    AddProblemPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    AddProblemPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    AddProblemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-problem',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/add-problem/add-problem.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="navbarStyle" color="primary">\n\n    <ion-title>Add A Care Topic</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n\n        <ion-icon name="unlock"></ion-icon>\n\n      </button>\n\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n\n        <ion-icon name="lock"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="help()">\n\n        <ion-icon name="help"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p class="helpful">Adding a Care Topic to {{plan.name}}\n\n  </p>\n\n  <br>\n\n  <button ion-button icon-left *ngIf="auth.userLoggedIn" (click)="lookupMaster()">\n\n    <ion-icon name="add"></ion-icon>\n\n    Add from the Red Book\n\n  </button>\n\n  <button ion-button icon-left *ngIf="!auth.userLoggedIn" (click)="login()">\n\n    <ion-icon name="lock"></ion-icon>\n\n    Log In to Add from the Red Book\n\n  </button>\n\n\n\n  <ion-item>\n\n    <ion-textarea rows=4 type="text" placeholder="Topic: focus or aspect of care" [(ngModel)]="problem.text">\n\n    </ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <p class="hint">{{problem.hint}}</p>\n\n  </ion-item>\n\n  <button ion-button [disabled]="!problem.text" (click)="editDone()">Save</button>\n\n  <button ion-button (click)="cancelEdit()">Cancel</button>\n\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/add-problem/add-problem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_master_plans_master_plans__["a" /* MasterPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], AddProblemPage);
    return AddProblemPage;
}());

//# sourceMappingURL=add-problem.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddInterventionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_master_plans_master_plans__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lookup_lookup__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddInterventionPage = /** @class */ (function () {
    function AddInterventionPage(navCtrl, navParams, alertCtrl, plt, toast, PPP, MPP, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.toast = toast;
        this.PPP = PPP;
        this.MPP = MPP;
        this.auth = auth;
        this.intervention = {};
        // problem to which intervention added
        this.plan = navParams.get("plan");
        this.problem = navParams.get("problem");
    }
    AddInterventionPage.prototype.ionViewDidEnter = function () {
        // may have come from add, may have returned from selection
        this.intervention["text"] = "";
        this.intervention["hint"] = "";
        if (this.MPP.listSelection) {
            this.intervention = this.MPP.listSelection;
            console.log('selected intervention', this.intervention);
            // clear it immediately after used
            this.MPP.listSelection = "";
        }
        // note these are initialized even if intervention is taken from master list
        if (!this.problem.interventions)
            this.problem["interventions"] = [];
        this.intervention["interdisciplinary"] = false;
        this.intervention["nursing"] = false;
        this.intervention["aide"] = false;
        this.intervention["bereavement"] = false;
        this.intervention["dietary"] = false;
        this.intervention["music"] = false;
        this.intervention["OT"] = false;
        this.intervention["PT"] = false;
        this.intervention["pharmacist"] = false;
        this.intervention["social"] = false;
        this.intervention["spiritual"] = false;
        this.intervention["speech"] = false;
        this.intervention["volunteer"] = false;
        this.intervention["other"] = "";
    };
    AddInterventionPage.prototype.lookupMaster = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__lookup_lookup__["a" /* LookupPage */], {
            types: "interventions",
            type: "intervention",
            searchName: "Intervention",
            planName: this.plan.name + ': ' + this.problem.text,
            item: this.intervention
        });
    };
    AddInterventionPage.prototype.editDone = function () {
        var d = new Date();
        this.plan.updated = d.toLocaleDateString();
        this.problem.interventions.push(this.intervention);
        this.PPP.write();
        if (this.plt.is('mobile')) {
            this.toast.show('Intervention Added', '1500', 'center').subscribe(function (t) { });
        }
        this.navCtrl.pop();
    };
    AddInterventionPage.prototype.cancelEdit = function () {
        // exit w/o save
        this.navCtrl.pop();
    };
    AddInterventionPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__help_help__["a" /* HelpPage */]);
    };
    AddInterventionPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    AddInterventionPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    AddInterventionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-intervention',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/add-intervention/add-intervention.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="navbarStyle" color="primary">\n\n    <ion-title>Add Intervention</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n\n        <ion-icon name="unlock"></ion-icon>\n\n      </button>\n\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n\n        <ion-icon name="lock"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="help()">\n\n        <ion-icon name="help"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p class="helpful">Adding an Intervention to {{plan.name}}\n\n  </p>\n\n  <br>\n\n  <button ion-button icon-left *ngIf="auth.userLoggedIn" (click)="lookupMaster()">\n\n    <ion-icon name="add"></ion-icon>\n\n    Add from the Red Book\n\n  </button>\n\n  <button ion-button icon-left *ngIf="!auth.userLoggedIn" (click)="login()">\n\n    <ion-icon name="lock"></ion-icon>\n\n    Log In to Add from the Red Book\n\n  </button>\n\n\n\n  <ion-item>\n\n    <ion-textarea rows=4 type="text" placeholder="Describe the intervention here" [(ngModel)]="intervention.text">\n\n    </ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <p class="hint">{{intervention.hint}}</p>\n\n  </ion-item>\n\n  <ion-list>\n\n    <ion-list-header>Designate the Discipline/Care Team for this Intervention:</ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Interdisciplinary</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.interdisciplinary"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Nursing</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.nursing"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Aide</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.aide"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Bereavement</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.bereavement"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Dietary</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.dietary"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Music/Other</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.music"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Occupational Therapy</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.OT"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Physical Therapy</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.PT"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Pharmacist</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.pharmacist"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Social Work</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.social"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Spiritual Counselor</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.spiritual"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Speech Therapy</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.speech"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Volunteer</ion-label>\n\n      <ion-checkbox [(ngModel)]="intervention.volunteer"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="Other Discplines" [(ngModel)]="intervention.other">\n\n    </ion-input>\n\n  </ion-item>\n\n  <button ion-button [disabled]="!intervention.text" (click)="editDone()">Save</button>\n\n  <button ion-button (click)="cancelEdit()">Cancel</button>\n\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/add-intervention/add-intervention.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_master_plans_master_plans__["a" /* MasterPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], AddInterventionPage);
    return AddInterventionPage;
}());

//# sourceMappingURL=add-intervention.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_9_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
var TextPlanPage = /** @class */ (function () {
    function TextPlanPage(navCtrl, navParams, clpbrd, plt, file, dv, em, toast, PPP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clpbrd = clpbrd;
        this.plt = plt;
        this.file = file;
        this.dv = dv;
        this.em = em;
        this.toast = toast;
        this.PPP = PPP;
        this.pdfObj = null;
        this.plan = navParams.get('plan');
    }
    TextPlanPage.prototype.discList = function (int) {
        var discText = "";
        if (int.interdisciplinary) {
            discText += "Interdisciplinary, ";
        }
        if (int.nursing) {
            discText += "Nursing, ";
        }
        if (int.aide) {
            discText += "Aide, ";
        }
        if (int.bereavement) {
            discText += "Bereavement, ";
        }
        if (int.dietary) {
            discText += "Dietary, ";
        }
        if (int.music) {
            discText += "Music/Other, ";
        }
        if (int.OT) {
            discText += "OT, ";
        }
        if (int.PT) {
            discText += "PT, ";
        }
        if (int.pharmacist) {
            discText += "Pharmacist, ";
        }
        if (int.social) {
            discText += "Social Work, ";
        }
        if (int.spiritual) {
            discText += "Spiritual Counselor, ";
        }
        if (int.speech) {
            discText += "Speech, ";
        }
        if (int.volunteer) {
            discText += "Volunteer, ";
        }
        if (int.other) {
            discText += int.other;
        }
        // strip off trailing ", " if any
        discText = discText.trim();
        var lastChar = discText.substr(-1, 1);
        if (lastChar == ",") {
            discText = discText.substr(0, discText.length - 1);
        }
        return discText;
    };
    TextPlanPage.prototype.goalTerm = function (goal) {
        if (goal.term) {
            if (goal.term === "ST") {
                return "Short Term";
            }
            else {
                return "Long Term";
            }
        }
        else {
            return "";
        }
    };
    TextPlanPage.prototype.createPdf = function (download) {
        // console.log('pdf');
        var docDefinition = {
            content: [
                { text: "Care Plan: " + this.plan.name, style: "header" },
                { text: "Created:  " + this.plan.created + "     Updated:  " + this.plan.updated, alignment: "right" },
                { text: this.plan.text, style: "subheader" }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 12,
                    margin: [0, 15, 0, 0]
                },
                date: {
                    fontSize: 12,
                    alignment: 'right'
                },
                probText: {
                    fontSize: 14,
                    bold: true,
                    color: 'red',
                    margin: [0, 15, 0, 0]
                },
                goalText: {
                    fontSize: 14,
                    italics: true,
                    color: 'green',
                    margin: [10, 10, 0, 0]
                },
                intText: {
                    fontSize: 14,
                    color: 'blue',
                    margin: [10, 8, 0, 0]
                },
                goalHeader: {
                    fontSize: 14,
                    bold: true,
                    color: 'green',
                    margin: [10, 8, 0, 0]
                },
                intHeader: {
                    fontSize: 14,
                    bold: true,
                    color: 'blue',
                    margin: [10, 8, 0, 0]
                },
                discText: {
                    fontSize: 12,
                    color: 'blue',
                    margin: [25, 4, 0, 0]
                },
                ital: {
                    italics: true
                }
            }
        };
        // add in the problems/goals/interventions as paragraphs in content[]
        if (this.plan.problems) {
            for (var i = 0; i < this.plan.problems.length; i++) {
                // console.log(i, this.plan.problems[i].text)
                // const para: any = { text: "", style: "ptext" };
                // para.text = this.plan.problems[i].text;
                docDefinition.content.push({
                    text: this.plan.problems[i].text,
                    style: "probText"
                });
                if (!this.plan.problems[i].goals) {
                    this.plan.problems[i].goals = [];
                }
                if (this.plan.problems[i].goals.length > 0) {
                    docDefinition.content.push({ text: "Outcomes", style: "goalHeader" });
                    for (var j = 0; j < this.plan.problems[i].goals.length; j++) {
                        docDefinition.content.push({
                            text: // this.plan.problems[i].goals[j].term +
                            "         " +
                                this.plan.problems[i].goals[j].text + "   "
                                + this.goalTerm(this.plan.problems[i].goals[j]),
                            style: "goalText"
                        });
                    }
                }
                if (!this.plan.problems[i].interventions) {
                    this.plan.problems[i].interventions = [];
                }
                if (this.plan.problems[i].interventions.length > 0) {
                    docDefinition.content.push({ text: "Interventions", style: "intHeader" });
                    for (var k = 0; k < this.plan.problems[i].interventions.length; k++) {
                        docDefinition.content.push({
                            text: // "Intervention:  " + 
                            this.plan.problems[i].interventions[k].text,
                            style: "intText"
                        });
                        var dl = this.discList(this.plan.problems[i].interventions[k]);
                        if (dl.length > 0) {
                            docDefinition.content.push({
                                text: "(" + dl + ")",
                                style: "discText"
                            });
                        }
                    }
                }
            }
        }
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        if (download) {
            this.downloadPdf();
        }
    };
    // WORKING HERE
    TextPlanPage.prototype.downloadPdf = function () {
        var _this = this;
        // if (this.plt.is('ios') || this.plt.is('android')) {
        // console.log('download');
        if (this.plt.is('mobile')) {
            var dd;
            if (this.plt.is('ios')) {
                dd = this.file.documentsDirectory; // verify we can see these docs
            }
            else if (this.plt.is('android')) {
                dd = this.file.externalDataDirectory;
            }
            // console.log('sure:', dd);
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                // Save the PDF to the data Directory of our App
                var flnm = _this.formatFileName(_this.plan.name) + '_CP.pdf';
                // console.log(flnm);
                _this.file.writeFile(dd, flnm, blob, { replace: true }).then(function (fileEntry) {
                    // console.log('written');
                    // console.log(dd);
                    // console.log(flnm);
                    // Open the pdf (not supported on DevApp)
                    // this.plt.ready().then(() => {
                    // console.log('in plt.ready');
                    var opts = { title: _this.plan.name, email: { enabled: true }, print: { enabled: true }, search: { enabled: true } };
                    _this.dv.viewDocument(dd + flnm, 'application/pdf', opts);
                });
            });
        }
        else if (this.plt.is('core')) {
            // on browser
            this.pdfObj.download();
        }
    };
    TextPlanPage.prototype.formatFileName = function (f) {
        // special characters
        // return f.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
        // keep numbers and letters only
        return f.replace(/[^a-zA-Z0-9]/g, '_');
    };
    TextPlanPage.prototype.toClipboard = function () {
        this.clpbrd.copy(this.getPlanText());
        if (this.plt.is('mobile')) {
            this.toast.show('Copied to clipboard', '1500', 'center').subscribe(function (t) { });
        }
    };
    TextPlanPage.prototype.sendEmail = function () {
        var _this = this;
        if (this.plt.is('mobile')) {
            this.em.isAvailable().then(function (hasAccount) {
                _this.createMail();
            });
        }
        else {
            alert("If using a browser, automatic email is not available.  Use 'PDF' and attach the file to email.");
        }
    };
    TextPlanPage.prototype.createMail = function () {
        // console.log('create');
        this.em.open({
            to: '',
            subject: "Care Plan " + this.plan.name,
            body: this.getPlanText(),
            isHtml: false
        });
    };
    TextPlanPage.prototype.getPlanText = function () {
        // console.log('getPlanText');
        var text = "Care Plan:  " + this.plan.name + "\r\n";
        text += "Created:  " + this.plan.created + "     Updated:  " + this.plan.updated + "\r\n";
        text += "    " + this.plan.text + "\r\n";
        if (this.plan.problems) {
            // console.log('# problems:',this.plan.problems.length);
            for (var i = 0; i < this.plan.problems.length; i++) {
                text += "\r\n" + this.plan.problems[i].text + "\r\n";
                if (this.plan.problems[i].goals && this.plan.problems[i].goals.length > 0) {
                    // console.log('# goals:',this.plan.problems[i].goals.length);
                    text += "   Outcomes" + "\r\n";
                    for (var j = 0; j < this.plan.problems[i].goals.length; j++) {
                        text += "    ";
                        text += "   " +
                            this.plan.problems[i].goals[j].text;
                        if (this.plan.problems[i].goals[j].term) {
                            if (this.plan.problems[i].goals[j].term == 'ST') {
                                text += '(Short Term)';
                            }
                            else {
                                text += '(Long Term)';
                            }
                        }
                        text += "\r\n";
                    }
                }
                if (this.plan.problems[i].interventions && this.plan.problems[i].interventions.length > 0) {
                    // console.log('# interventions:', this.plan.problems[i].interventions.length);
                    text += "   Interventions" + "\r\n";
                    for (var k = 0; k < this.plan.problems[i].interventions.length; k++) {
                        text += "    " +
                            this.plan.problems[i].interventions[k].text + "\r\n";
                        text += "        " +
                            "(" + this.discList(this.plan.problems[i].interventions[k]) + ")" + "\r\n";
                    }
                }
            }
        }
        return text;
    };
    TextPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-text-plan',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/text-plan/text-plan.html"*/'\n<ion-header>\n\n<ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Care Plan</ion-title>\n        <ion-buttons end>\n    <!-- <div *ngIf="plt.is(\'ios\') || plt.is(\'android\')">   // add this back in production -->\n      <button ion-button (click)="toClipboard()">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n      <button ion-button (click)="sendEmail()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    <!-- </div> -->\n    <!-- <button float-right (click)="createPdf(true)"> -->\n    <button ion-button (click)="createPdf(true)">\n      <ion-icon name="paper"></ion-icon>PDF\n    </button>\n    </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h1 class="h1text">Care Plan: {{plan.name}}</h1>\n        <div *ngFor="let p of plan.problems">\n          <p class="ptext prob">{{p.text}}</p>\n          <div>\n            <div *ngIf="p.goals.length > 0"><em>Outcomes</em></div>\n            <div *ngFor="let g of p.goals">\n              <p class="ptext goal">{{g.text}}  <em>{{goalTerm(g)}}</em></p>\n            </div>\n            <div *ngIf="p.interventions.length > 0"><em>Interventions</em></div>\n            <div *ngFor="let n of p.interventions">\n                <p class="ptext int">{{n.text}}</p>\n                <p class="ptext dsc" *ngIf="discList(n)"><em>Disciplines:</em>  {{discList(n)}}</p>\n              </div>\n          </div>\n        </div>\n\n</ion-content>\n'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/text-plan/text-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_7__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], TextPlanPage);
    return TextPlanPage;
}());

//# sourceMappingURL=text-plan.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__careplan_careplan__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PreviewPage = /** @class */ (function () {
    function PreviewPage(navCtrl, navParams, PPP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PPP = PPP;
        this.target = navParams.get('target');
        this.type = navParams.get('type');
        this.fromPage = navParams.get('fromPage');
        this.copyOfSource = PPP.deepCopy(navParams.get('source'));
        this.addCheckedProperty(this.copyOfSource);
    }
    PreviewPage.prototype.save = function () {
        var _this = this;
        // exit w save
        // reduce the content to only the items checked
        this.getChecked();
        // do the merge
        this.PPP.mergePlans(this.target, this.copyOfSource);
        // now go to page we're called from
        if (this.fromPage === 'plans') {
            // we're adding from the plans page
            // add the target to personal plans
            this.PPP.plans.push(this.target);
            this.PPP.write();
            this.navCtrl.setPages([{ page: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */] }, { page: __WEBPACK_IMPORTED_MODULE_4__careplan_careplan__["a" /* CarePlanPage */] }]);
        }
        else if (this.fromPage === 'contents') {
            // we're adding from the contents page
            this.PPP.write();
            // remove select list from nav stack
            this.navCtrl.removeView(this.navCtrl.getPrevious())
                .then(function () {
                _this.navCtrl.pop(); // go back to contents page
            });
        }
    };
    PreviewPage.prototype.getChecked = function () {
        // console.log('original before select', this.copyOfSource);
        // copy checked goals & interventions to a new array each
        // replace the p.problems.goals/interventions array when done
        this.copyOfSource["problems"].forEach(function (p) {
            var gg = [];
            p["goals"].forEach(function (g) {
                if (g.checked) {
                    gg.push(g);
                }
            });
            p["goals"] = gg;
            var nn = [];
            p["interventions"].forEach(function (n) {
                if (n.checked) {
                    nn.push(n);
                }
            });
            p["interventions"] = nn;
        });
        // remove "empty" problems
        var pp = [];
        this.copyOfSource["problems"].forEach(function (p) {
            if (p["goals"].length > 0
                || p["interventions"].length > 0)
                pp.push(p);
        });
        this.copyOfSource["problems"] = pp;
        // console.log('resulting after select', this.copyOfSource);
    };
    PreviewPage.prototype.cancelEdit = function () {
        // exit w/o save
        this.navCtrl.pop(); // go back to previous page
        // go back to the page we're called from
        // if (this.fromPage === 'plans') {
        //   this.navCtrl.popToRoot(); // go back to plans page
        // } else if (this.fromPage === 'contents') {
        //   // remove select list from nav stack
        //   this.navCtrl.removeView(this.navCtrl.getPrevious())
        //     .then(() => {
        // this.navCtrl.pop(); // go back to contents page
        //     });
        // }
    };
    PreviewPage.prototype.addCheckedProperty = function (p) {
        // console.log('addCheckedProperty', p);
        for (var j = 0; j < p["problems"].length; j++) {
            if (p["problems"][j]["goals"]) {
                p["problems"][j]["goals"].forEach(function (g) {
                    g.checked = true;
                });
            }
            else {
                p["problems"][j]["goals"] = [];
            }
            if (p["problems"][j]["interventions"]) {
                p["problems"][j]["interventions"].forEach(function (i) {
                    i.checked = true;
                });
            }
            else {
                p["problems"][j]["interventions"] = [];
            }
        }
    };
    PreviewPage.prototype.selectAll = function () {
        this.copyOfSource["problems"].forEach(function (p) {
            p["goals"].forEach(function (g) {
                g.checked = true;
            });
            p["interventions"].forEach(function (n) {
                n.checked = true;
            });
        });
    };
    PreviewPage.prototype.selectNone = function () {
        this.copyOfSource["problems"].forEach(function (p) {
            p["goals"].forEach(function (g) {
                g.checked = false;
            });
            p["interventions"].forEach(function (n) {
                n.checked = false;
            });
        });
    };
    PreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preview',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/preview/preview.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Select Care</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- <p class="helpful">Preview before adding </p> -->\n  <p class="helpful">Check the items you want to include</p>\n    <button ion-button (click)="selectAll()">Select All</button>\n    <button ion-button (click)="selectNone()">Select None</button>\n    <!-- hack because ppp.plans[] have .name, and master have .text -->\n  <h1 *ngIf="type!==\'My Plan\'" class="h1text">{{type}}: {{copyOfSource.text}}</h1>\n  <h1 *ngIf="type==\'My Plan\'" class="h1text">{{type}}: {{copyOfSource.name}}</h1>\n  <div *ngFor="let p of copyOfSource.problems">\n    <p class="ptext prob">{{p.text}}</p>\n    <div>\n      <div class="goal"><em>Outcomes</em></div>\n      <div *ngFor="let g of p.goals">\n        <ion-checkbox [(ngModel)]="g.checked"></ion-checkbox>\n        <label class="ptext goal"><em>{{g.term}}</em> {{g.text}}</label>\n      </div>\n      <div class="int"><em>Interventions</em></div>\n      <div *ngFor="let n of p.interventions">\n          <ion-checkbox [(ngModel)]="n.checked"></ion-checkbox>\n        <label class="ptext int">{{n.text}}</label>\n      </div>\n    </div>\n  </div>\n  <button ion-button (click)="save()">Save</button>\n  <button ion-button (click)="cancelEdit()">Cancel</button>\n</ion-content>\n'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/preview/preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], PreviewPage);
    return PreviewPage;
}());

//# sourceMappingURL=preview.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanMenuPage = /** @class */ (function () {
    function PlanMenuPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PlanMenuPage.prototype.close = function (opt) {
        this.viewCtrl.dismiss(opt);
    };
    PlanMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plan-menu',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/plan-menu/plan-menu.html"*/'<ion-content class="no-scroll">\n    <div style="color: red;" (click)="close(\'condition\')">\n      <ion-icon name="book"></ion-icon>\n      Add a Condition\n    </div>\n    <div style="color: red;" (click)="close(\'discipline\')">\n      <ion-icon name="book"></ion-icon>\n      Add a Discipline\n    </div>\n    <div (click)="close(\'myplan\')">\n      <ion-icon name="shuffle"></ion-icon>\n      Add from My Plan\n    </div>\n    <div style="color: red;" (click)="close(\'topic\')">\n      <ion-icon name="add"></ion-icon>\n      Add a Care Topic\n    </div>\n    <div (click)="close(\'share\')">\n      <ion-icon name="share"></ion-icon>\n       Share this Plan\n    </div>\n    <div (click)="close(\'delete\')">\n      <ion-icon name="trash"></ion-icon>\n       Delete this Plan\n    </div>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/plan-menu/plan-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], PlanMenuPage);
    return PlanMenuPage;
}());

//# sourceMappingURL=plan-menu.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicMenuPage = /** @class */ (function () {
    function TopicMenuPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
    }
    TopicMenuPage.prototype.close = function (opt) {
        // console.log('p=', this.item);
        this.viewCtrl.dismiss(opt, this.item);
    };
    TopicMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-menu',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/topic-menu/topic-menu.html"*/'<ion-content class="no-scroll">\n  <div style="color: green;" (click)="close(\'goal\', p)">\n    <ion-icon name="star"></ion-icon>\n    Add an Outcome\n  </div>\n  <div style="color: blue;" (click)="close(\'intervention\', p)">\n    <ion-icon name="construct"></ion-icon>\n    Add an Intervention\n  </div>\n  <div (click)="close(\'delete\', p)">\n    <ion-icon name="trash"></ion-icon>\n    Delete this Topic\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/topic-menu/topic-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TopicMenuPage);
    return TopicMenuPage;
}());

//# sourceMappingURL=topic-menu.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lookup_plan_lookup_plan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_master_plans_master_plans__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddPlanPage = /** @class */ (function () {
    function AddPlanPage(navCtrl, navParams, alertCtrl, plt, toast, auth, PPP, MPP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.toast = toast;
        this.auth = auth;
        this.PPP = PPP;
        this.MPP = MPP;
        this.newPlan = { name: "", text: "", created: "", updated: "" };
    }
    AddPlanPage.prototype.nameChange = function () {
        // console.log('checking');
        this.canUseName = this.PPP.checkPlanName(this.newPlan['name'].trim());
        // console.log('checking=', this.canUseName);
    };
    AddPlanPage.prototype.addPlan = function (type) {
        // console.log(this.newPlan.name, this.newPlan.text);
        if (this.PPP.checkPlanName(this.newPlan['name'])) { }
        this.PPP.addPlan(this.newPlan, type);
        if (this.plt.is('mobile')) {
            this.toast.show('Added ' + this.newPlan['name'], '1500', 'center').subscribe(function (t) { });
        }
        this.navCtrl.pop();
    };
    AddPlanPage.prototype.stdPlan = function () {
        // newPlan should have name & text from this page
        // new plan is otherwise empty at this point
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__lookup_plan_lookup_plan__["a" /* LookupPlanPage */], {
            types: "conditions",
            type: "condition",
            searchName: "Condition",
            target: this.newPlan,
            fromPage: 'plans'
        });
    };
    AddPlanPage.prototype.copyPlan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__lookup_plan_lookup_plan__["a" /* LookupPlanPage */], {
            types: "",
            type: "My Plan",
            searchName: "Your Plan",
            target: this.newPlan,
            fromPage: 'plans'
        });
    };
    AddPlanPage.prototype.cancelEdit = function () {
        this.navCtrl.pop();
    };
    AddPlanPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__help_help__["a" /* HelpPage */]);
    };
    AddPlanPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    AddPlanPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    AddPlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-plan',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/add-plan/add-plan.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Add a Care Plan</ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n        <ion-icon name="unlock"></ion-icon>\n      </button>\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n        <ion-icon name="lock"></ion-icon>\n      </button>\n      <button ion-button (click)="help()">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p class="helpful">Creating a new Care Plan.\n  </p>\n  <br>\n  <ion-item text-wrap>\n    <ion-textarea type="text" rows=2 placeholder="Name the New plan" [(ngModel)]="newPlan.name" (ngModelChange)="nameChange()">\n    </ion-textarea>\n  </ion-item>\n  <ion-item text-wrap>\n    <ion-textarea type="text" rows=4 placeholder="Describe the New plan" [(ngModel)]="newPlan.text">\n    </ion-textarea>\n  </ion-item>\n\n  <ion-item no-lines>\n    <p>There are different ways to create a new plan</p>\n    <!-- <ul>\n      <li>You may create an "empty" plan and add topics, outcomes, and interventions to it later.</li>\n      <li>You may create from a "guided" starter plan, which suggests care focus areas, to which you can add your outcomes and interventions.</li>\n       <span *ngIf="auth.userLoggedIn"><li>You may also add standard plans or discipline topics from the Red Book.</li></span> \n      <li>You may copy an existing Plan from your My Care Plans.</li>\n      </ul> -->\n  </ion-item>\n  <ion-item no-lines>\n    <p>\n      You may create an "empty" plan and add topics, outcomes, and interventions to it later.\n    </p>\n  </ion-item>\n  <ion-item no-lines>\n    <button ion-button [disabled]="(!canUseName || !newPlan.name)" (click)="addPlan(\'empty\')">Add Care Plan</button>\n  </ion-item>\n  <ion-item no-lines>\n    <p>You may create from a "guided" starter plan, which suggests care focus areas, to which you can add your outcomes\n      and interventions.</p>\n  </ion-item>\n  <ion-item no-lines>\n    <button ion-button [disabled]="(!canUseName || !newPlan.name)" (click)="addPlan(\'guided\')">Add Guided Care Plan</button>\n  </ion-item>\n  <!-- <ion-item *ngIf="auth.userLoggedIn" no-lines> -->\n  <ion-item no-lines>\n    <p>You may also add standard plans or discipline topics from the Red Book.</p>\n  </ion-item>\n  <ion-item *ngIf="auth.userLoggedIn" no-lines>\n    <button ion-button [disabled]="(!canUseName || !newPlan.name)" (click)="stdPlan()">Add a\n      Standard Plan from the Red Book</button>\n  </ion-item>\n  <ion-item *ngIf="!auth.userLoggedIn" no-lines>\n    <button ion-button [disabled]="(!canUseName || !newPlan.name)" (click)="login()">Log in to Add from the Red Book</button>\n  </ion-item>\n  <ion-item no-lines>\n    <p>You may copy an existing Plan from your My Care Plans.</p>\n  </ion-item>\n  <ion-item no-lines>\n    <button ion-button [disabled]="(!canUseName || !newPlan.name)" (click)="copyPlan()">Copy One of My Plans</button>\n  </ion-item>\n  <ion-item no-lines>\n    <p>The newly-created plan will be shown at the end of your My Care Plans list. You may need to scroll down to see\n      it.</p>\n  </ion-item>\n  <ion-item no-lines>\n    <p>Please remember to respect applicable privacy regulations, as well as good professional practice, when naming\n      your care plans.</p>\n  </ion-item>\n  <ion-item no-lines>\n    <button ion-button (click)="cancelEdit()">Cancel Adding a Plan</button>\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/add-plan/add-plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_master_plans_master_plans__["a" /* MasterPlansProvider */]])
    ], AddPlanPage);
    return AddPlanPage;
}());

//# sourceMappingURL=add-plan.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample_detail_sample_detail__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subselect_subselect__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SamplePage = /** @class */ (function () {
    function SamplePage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.itemsList = [
            { text: "Alzheimer's & Dementia" },
            { text: "Amyotrophic Lateral Sclerosis (ALS)" },
            { text: "Bedridden" },
            { text: "Brain Tumor" },
            { text: "Breast Cancer" },
            { text: "Cancer" },
            { text: "Cardiac" },
            { text: "Cerebrovascular accident (CVA)" },
            { text: "Children" },
            { text: "Constipation & Impaction" },
            { text: "Depression & Psychiatric" },
            { text: "Diabetes" },
            { text: "Functional Decline" },
            { text: "Enteral & Total parenteral nutrition (TPN)" },
            { text: "Head & Neck Cancer" },
            { text: "Hospice Nurse" },
            { text: "Human Immunodeficiency Virus/Acquired Immune Deficiency Syndrome (HIV/AIDS)" },
            { text: "Imminent Death" },
            { text: "Infection Control and Prevention" },
            { text: "Infusion" },
            { text: "Lung/Respiratory" },
            { text: "Ostomy" },
            { text: "Oxygen Use" },
            { text: "Pain Management" },
            { text: "Prostate Cancer" },
            { text: "Renal Disease" },
            { text: "Urinary Catheter" },
            { text: "Wound and Pressure Injury" }
        ];
    }
    SamplePage.prototype.showAlz = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sample_detail_sample_detail__["a" /* SampleDetailPage */]);
    };
    SamplePage.prototype.subscribe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__subselect_subselect__["a" /* SubselectPage */]);
    };
    SamplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sample',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/sample/sample.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Standard Plans</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="help()">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>Subscribe to the Red Book for pre-defined standard care plans that you can customize to your patients.\n    Conditions are added periodically.\n  </p>\n  <!-- <p>Standard plans may be used alone or may be merged to compose plans for patients with multiple conditions.\n  </p> -->\n  <p>Standard plans are comprehensive with much opportunity to customize for your patient.\n    Similar, alternative outcomes and interventions are suggested, so you can select the best fit.\n    In the app, you\'ll be able to select just the items you want before importing.\n  </p>\n  <div align="right">\n    <button ion-button (click)="showAlz()">\n      See a complete example: Alzheimer\'s\n    </button>\n  </div>\n  <br>\n  <div>\n    <p>Current Standard Plans</p>\n    <ion-list>\n      <div ion-item no-lines *ngFor="let z of itemsList">\n        <p style="color: black;">{{z.text}}</p>\n      </div>\n    </ion-list>\n  </div>\n  <div *ngIf="!auth.userLoggedIn">\n    <button ion-button (click)="subscribe()">\n      Subscribe\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/sample/sample.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], SamplePage);
    return SamplePage;
}());

//# sourceMappingURL=sample.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SampleDetailPage = /** @class */ (function () {
    function SampleDetailPage() {
        this.samplePlan = {
            problems: [
                {
                    text: "General Observation/Assessment",
                    goals: [],
                    interventions: [
                        {
                            text: "Assessment of all systems of patient with Alzheimer's admitted for hospice for _____"
                        },
                        {
                            text: "Assessment of the patient with dementia and support/coping skills of family and caregivers"
                        }
                    ]
                },
                {
                    text: "Teaching, Training & Coaching",
                    goals: [
                        {
                            text: "Caregiver/Family will be taught to care for patient as demonstrated by observation/interview regarding _____ by _____"
                        },
                        {
                            text: "Family/Caregiver will be able to list adverse reactions, potential complications, signs/symptoms of infection by _____ "
                        },
                        {
                            text: "Family/Caregiver will be effective in care management and will know whom to call for questions/concerns by _____"
                        },
                        {
                            text: "Family/Caregiver will demonstrate _____% compliance with instructions related to care by _____"
                        },
                        {
                            text: "Family/Caregiver will integrate information and care regarding implications of disease and terminal nature as evidenced by _____ by ____"
                        },
                        {
                            text: "Family/Caregivers will demonstrate information taught, including the role of reassurance and consistency in activities and schedules by _____ "
                        },
                        {
                            text: "Patient will present comfortable; family/caregiver will report no/decreased fear/anxiety/frustration by _____ "
                        },
                        {
                            text: "Patient's daily, consistent routine will be maintained as noted in caregiver log/notes"
                        }
                    ],
                    interventions: [
                        {
                            text: "Teach family/caregiver current/new/changed pain control measures and medication regimen"
                        },
                        {
                            text: "Teach patient/caregiver/family's about disease process and management"
                        }
                    ]
                },
                {
                    text: "Comfort Care/Symptom Control",
                    goals: [
                        {
                            text: "Death with dignity,  maximum comfort through effective symptom control with specialized hospice support will be maintained in setting of patient/caregiver/family choice"
                        }
                    ],
                    interventions: [
                        {
                            text: "Assess pain/problems/symptoms, and evaluate the pain/symptom control management's effectiveness"
                        },
                        {
                            text: "Assess and address pain, symptom, and relief measures"
                        }
                    ]
                },
                {
                    text: "Safety & Mobility",
                    goals: [
                        {
                            text: "Teaching program related to the prevention of infection and injuries will be demonstrated by family/caregiver by _____ "
                        },
                        {
                            text: "Family/caregiver will be taught and supported regarding the need for a safe, consistent, and nurturing physical environment by _____ "
                        },
                        {
                            text: "Family/Caregiver will adhere to the plan of care (POC) as evidenced by demonstration and ability of safe and supportive care by ____ "
                        }
                    ],
                    interventions: [
                        {
                            text: "Teach family/caregiver regarding importance of observation of patient's safety"
                        },
                        {
                            text: "Teach family/caregiver regarding safety of patient in home"
                        }
                    ]
                },
                {
                    text: "Emotional/Spiritual",
                    goals: [],
                    interventions: [
                        {
                            text: "Provide spiritual counseling/support to patient/caregiver/family who are verbalizing the reason for or meaning of suffering"
                        }
                    ]
                },
                {
                    text: "Skin Care",
                    goals: [
                        {
                            text: "Support/Maintain optimal skin integrity through care."
                        }
                    ],
                    interventions: [
                        {
                            text: "Assessment/Observation of skin and patient's physical status"
                        },
                        {
                            text: "Teach family/caregiver regarding patient's skin care needs"
                        }
                    ]
                },
                {
                    text: "Hydration/Nutrition/Elimination",
                    goals: [
                        {
                            text: "Family/Caregiver will verbalize understanding of and adhere to care and medication regimen by _____ "
                        },
                        {
                            text: "Nutritional needs will be maintained/addressed as evidenced by patient's weight maintained/increased by _____ lbs, by _____. (specify date)"
                        }
                    ],
                    interventions: [
                        {
                            text: "Assess/Implement and monitor bowel regimen, and teach program to family/caregiver"
                        },
                        {
                            text: "Assessment/Observation/Evaluation of bladder elimination habits and management of incontinence, and assess need for indwelling catheter"
                        },
                        {
                            text: "Assess amount and frequency of urinary output"
                        },
                        {
                            text: "Encourage hand held foods to encourage self feeding"
                        },
                        {
                            text: "Assess/Monitor hydration and nutrition status"
                        },
                        {
                            text: "Evaluate for weight loss, weigh patient every visit, and record weight "
                        },
                        {
                            text: "Assess for electrolyte imbalance"
                        },
                        {
                            text: "Diet counseling for patient with anorexia"
                        }
                    ]
                },
                {
                    text: "Therapeutic/Medication",
                    goals: [],
                    interventions: [
                        {
                            text: "Assess/Monitor medication management for psychotic behavior and other effects of therapy and/or integrations"
                        },
                        {
                            text: "Assess/Monitor effects of tranquilizers given for severe agitation/anxiety"
                        },
                        {
                            text: "Obtain venipuncture for _____ and monitor lab results as ordered every _____"
                        },
                        {
                            text: "Teach family/caregiver current/new/changed medications and effects"
                        }
                    ]
                },
                {
                    text: "Care Coordination/Discharge",
                    goals: [
                        {
                            text: "Patient will be maintained in home with family/caregiver stating/demonstrating adherence to POC"
                        },
                        {
                            text: "Patient/Caregiver/Family centered hospice care will be provided based on the patient's/family's unique situation and needs throughout hospice care"
                        }
                    ],
                    interventions: []
                },
                {
                    text: "Other Considerations",
                    goals: [],
                    interventions: [
                        {
                            text: "Assist family/caregiver in setting up patient centered routine and stress the importance of adhering to the routine once established"
                        }
                    ]
                }
            ]
        };
    }
    SampleDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sample-detail',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/sample-detail/sample-detail.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Sample Standard Plan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h2>Alzheimer\'s & Dementia</h2>\n  <!-- <h1 class="h1text">Alzheimer\'s & Dementia</h1> -->\n  <h1 class="h1text">Red Book Standard Care Plan</h1>\n  <div *ngFor="let p of samplePlan.problems">\n    <p class="ptext prob">{{p.text}}</p>\n    <div>\n      <div class="goal"><em>Outcomes</em></div>\n      <div *ngFor="let g of p.goals">\n        <label class="ptext goal"><em>{{g.term}}</em> {{g.text}}</label>\n      </div>\n      <div class="int"><em>Interventions</em></div>\n      <div *ngFor="let n of p.interventions">\n        <label class="ptext int">{{n.text}}</label>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/sample-detail/sample-detail.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], SampleDetailPage);
    return SampleDetailPage;
}());

//# sourceMappingURL=sample-detail.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPlansProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cpapi_cpapi__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__local_store_local_store__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__master_plans_master_plans__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connection_connection__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var STORAGE_KEY = 'plans'; // note CacheProvider ignores this key on clearCache
// user local data encrypted with common key because user may never log in, or subscribe
var LOCAL_ENCRYPT_KEY = 'Askance to watch the working of his lie'; // childe roland, 3rd line, browning 1855
// user web data encrypted with user's own key phrase
var PersonalPlansProvider = /** @class */ (function () {
    function PersonalPlansProvider(http, events, conn, LSP, auth, cpapi, MPP) {
        this.http = http;
        this.events = events;
        this.conn = conn;
        this.LSP = LSP;
        this.auth = auth;
        this.cpapi = cpapi;
        this.MPP = MPP;
        this.plans = [];
        this.foundLocal = false;
        this.localAttemptComplete = false;
        this.foundWeb = false;
        this.webAttemptComplete = false;
        this.loadingNow = false;
        console.log('Constructor PersonalPlansProvider Provider');
    }
    // .userLoggedIn determines if user can search from master
    PersonalPlansProvider.prototype.loadPlans = function () {
        // clear out plans before reading,
        //    in case different user has signed in
        this.initPlans();
        // always get the local copy regardless of internet
        this.loadPlansLocal();
        if (this.auth.userLoggedIn) {
            // console.log('loadPlans logged in=', this.auth.userLoggedIn);
            // if we can, also get the web copy
            this.loadPlansWeb();
            this.checkRecent(); // use the most recent if we've read both web & local
        }
        else {
            // can't read the web
            // console.log('loadPlans (userLoggedIn- else path)');
            this.foundWeb = false;
            this.webAttemptComplete = true;
            this.checkRecent(); // let the standard logic choose local
            // this.plans = this.local["plans"];
        }
    };
    // add new plan
    PersonalPlansProvider.prototype.addPlan = function (np, type) {
        // initialize the plan structure for a new one
        var newPlan;
        if (type === 'empty') {
            newPlan = { name: np.name, text: np.text, created: "", updated: "", problems: [] };
        }
        else {
            newPlan = this.deepCopy(GUIDED_PLAN);
            newPlan.name = np.name;
            newPlan.text = np.text;
        }
        var d = new Date();
        newPlan.created = d.toLocaleDateString();
        newPlan.updated = d.toLocaleDateString();
        // if (!this.plans) { this.initPlans(); }
        this.plans.push(newPlan);
        // console.log(this.plans);
        this.write();
    };
    // // add standard plan section
    PersonalPlansProvider.prototype.standardPlan = function (np, condition) {
        var _this = this;
        // add a standard plan
        var newPlan;
        newPlan = { name: np.name, text: np.text, created: "", updated: "", problems: [] };
        if (newPlan.text === "") {
            newPlan.text = condition["text"];
        }
        var d = new Date();
        newPlan.created = d.toLocaleDateString();
        newPlan.updated = d.toLocaleDateString();
        this.MPP.getMaster(condition["file"])
            .then(function (data) {
            var cond = JSON.parse(data);
            _this.mergePlans(newPlan, cond);
            _this.plans.push(newPlan);
            // console.log(this.plans);
            _this.write();
        });
    };
    PersonalPlansProvider.prototype.mergePlans = function (targetPlan, sourcePlan) {
        var _this = this;
        if (targetPlan["problems"]) {
            sourcePlan["problems"].forEach(function (p) {
                var found = false;
                for (var i = 0; i < targetPlan.problems.length; i++) {
                    // is a problem from the newly-added content already in the plan?
                    if (targetPlan.problems[i].text === p["text"]) {
                        found = true;
                        // these lines will cause problem to which we've added to be expanded
                        p["icon"] = "arrow-dropdown";
                        p["expanded"] = true;
                        // add all the goals and interventions to the existing problem
                        // console.log("goals");
                        _this.addUndupItems(p["goals"], "text", targetPlan.problems[i].goals);
                        // console.log("interventions");
                        _this.addUndupItems(p["interventions"], "text", targetPlan.problems[i].interventions);
                        break; // no need to look further
                    }
                }
                if (!found) {
                    // console.log('not found, whole problem');
                    p["icon"] = "arrow-dropdown";
                    p["expanded"] = true;
                    var t = _this.deepCopy(p);
                    // console.log(t);
                    targetPlan.problems.push(t);
                }
            });
        }
        else {
            sourcePlan["problems"].forEach(function (p) {
                p["icon"] = "arrow-dropdown";
                p["expanded"] = true;
            });
            targetPlan["problems"] = this.deepCopy(sourcePlan["problems"]);
            // console.log('after merge', targetPlan["problems"]);
        }
    };
    PersonalPlansProvider.prototype.addUndupItems = function (source, element, target) {
        // console.log('addUndupItems');
        // only insert items not already found
        var work = source;
        var found;
        for (var i = 0; i < target.length; i++) {
            found = undefined;
            for (var j = 0; j < work.length; j++) {
                if (work[j][element] == target[i][element]) {
                    found = j;
                }
            }
            if (found < work.length) {
                // remove from working array
                work.splice(found, 1);
            }
        }
        ;
        // now add the remaining, those not duplicate/removed
        if (work.length > 0) {
            for (var k = 0; k < work.length; k++) {
                target.push(this.deepCopy(work[k]));
            }
        }
    };
    PersonalPlansProvider.prototype.deletePlan = function (plan) {
        // remove the designated plan from plans
        var index = this.plans.indexOf(plan, 0);
        if (index > -1) {
            this.plans.splice(index, 1);
        }
        // console.log(this.plans);
        this.write();
    };
    ;
    PersonalPlansProvider.prototype.initPlans = function () {
        // create an empty plans array
        this.plans = [];
    };
    PersonalPlansProvider.prototype.listPlans = function () {
        return this.plans;
    };
    // reading/writing plans section  ===================
    PersonalPlansProvider.prototype.loadPlansLocal = function () {
        var _this = this;
        // reset flags
        this.foundLocal = false;
        this.localAttemptComplete = false;
        this.local = {}; // init/re-init first
        this.readFromLocal()
            .then(function (data) {
            // console.log(data);
            _this.local = JSON.parse(data);
            // console.log('size of local plans', this.local["plans"].length);
            _this.foundLocal = true;
            _this.localAttemptComplete = true;
            if (typeof _this.local !== "object") {
                _this.local = { plans: [] };
            }
            _this.checkRecent();
        })
            .catch(function (error) {
            console.log('loadPlansLocal error', error);
            _this.foundLocal = false; // didn't get one
            _this.localAttemptComplete = true; // but the reading is done
            _this.local = { plans: [] }; // create an empty
            _this.checkRecent();
        });
    };
    PersonalPlansProvider.prototype.loadPlansWeb = function () {
        var _this = this;
        // reset flags
        this.foundWeb = false;
        this.webAttemptComplete = false;
        // clear first in case re-read w different userid
        this.web = {};
        // check connection
        this.conn.checkConnection();
        if (this.conn.internet) {
            this.readFromWeb()
                .then(function (data) {
                _this.web = JSON.parse(data);
                // console.log('size of web plans', this.web["plans"].length);
                _this.foundWeb = true;
                _this.webAttemptComplete = true;
                _this.checkRecent();
            })
                .catch(function (error) {
                console.log('loadplansweb', error);
                _this.foundWeb = false; // didn't get one
                _this.webAttemptComplete = true; // but the getting is done
                _this.checkRecent();
            });
        }
        else {
            console.log('no internet for loadPlansWeb');
            this.foundWeb = false; // didn't get one
            this.webAttemptComplete = true; // but the getting is done
            this.checkRecent();
        }
    };
    PersonalPlansProvider.prototype.checkRecent = function () {
        // this pretty hacky
        // expect this to be called (at least) twice, 
        // once after local read and once after web read
        // can't check currency until both read attempts are completed,
        // but web read might not be completed at all (if subscrptn expired, eg)
        // so set local, then override with web if web is newer
        if (this.localAttemptComplete && this.webAttemptComplete) {
            // choose which to use
            if (this.foundLocal && this.foundWeb) {
                // got both, 
                // compare dates
                if (this.local["lastWrite"] < this.web["lastWrite"]) {
                    // web newer
                    console.log('web newer');
                    this.plans = this.web["plans"];
                }
                else {
                    // local newer
                    console.log('local newer');
                    this.plans = this.local["plans"];
                }
            }
            if (this.foundLocal && !this.foundWeb) {
                // only got a local, but no web
                // use local
                console.log('local only, no web');
                this.plans = this.local["plans"];
            }
            if (!this.foundLocal && this.foundWeb) {
                // only got a web, but no local
                // use web
                console.log('web only, no local');
                this.plans = this.web["plans"];
            }
            if (!this.foundLocal && !this.foundWeb) {
                // got neither, init to empty
                this.initPlans();
            }
            // notify loading completed
            this.events.publish('loadComplete', Date.now());
        }
    };
    PersonalPlansProvider.prototype.pullWeb = function () {
        var _this = this;
        // console.log("pullWeb");
        this.conn.checkConnection();
        if (this.conn.internet) {
            this.readFromWeb()
                .then(function (data) {
                // ensure we got other than empty plans[]
                // console.log(data);
                _this.webAttemptComplete = true;
                _this.web = JSON.parse(data);
                if (_this.web["plans"]) {
                    if (_this.web["plans"].length > 0) {
                        _this.foundWeb = true;
                        _this.plans = _this.web["plans"];
                        _this.saveToLocal();
                    }
                    else {
                        console.log('readFromWeb empty result');
                    }
                }
                else {
                    console.log('readFromWeb empty result');
                    // don't disturb the current plans[] content if read unsuccessful
                }
            })
                .catch(function (error) {
                console.log('loadplansweb', error);
                // don't disturb the current plans[] content if read unsuccessful
            });
        }
    };
    PersonalPlansProvider.prototype.pushWeb = function () {
        // console.log("pushWeb");
        if (this.auth.userLoggedIn) {
            // console.log('write logged in=', this.auth.userLoggedIn);
            this.saveToWeb(); // always also save to web, if connected
        }
    };
    PersonalPlansProvider.prototype.write = function () {
        console.log('writing');
        // console.log('user', this.auth.user);
        // console.log('logged in', this.auth.userLoggedIn);
        // if (this.pltfrm.is('mobile')) {
        this.saveToLocal();
        // }
        // console.log('write logged in=', this.auth.userLoggedIn);
        if (this.auth.userLoggedIn) {
            console.log('write logged in=', this.auth.userLoggedIn);
            this.saveToWeb(); // always also save to web, if connected
        }
    };
    PersonalPlansProvider.prototype.saveToLocal = function () {
        // console.log("saveToLocal");
        var p = this.packagePlans();
        p = this.encrypt(p, LOCAL_ENCRYPT_KEY);
        var userStorageKey = STORAGE_KEY + '_' + this.auth.user;
        this.LSP.set(userStorageKey, p)
            .then(function (result) { return console.log("saved local"); })
            .catch(function (e) { return console.log("error: " + e); });
    };
    PersonalPlansProvider.prototype.readFromLocal = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var userStorageKey = STORAGE_KEY + '_' + _this.auth.user;
            _this.LSP.get(userStorageKey)
                .then(function (data) {
                // console.log('read local with', userStorageKey);
                // console.log(data);
                if (data) {
                    resolve(_this.decrypt(data, LOCAL_ENCRYPT_KEY));
                }
                else {
                    console.log('read nothing local, resolving empty plans');
                    resolve({ plans: [] });
                }
            });
            // .catch(e => reject => console.log("error: " + e));
        });
    };
    PersonalPlansProvider.prototype.saveToWeb = function () {
        // console.log("saveToWeb");
        this.conn.checkConnection();
        if (this.conn.internet) {
            var e = this.packagePlans();
            e = this.encrypt(e, this.auth.key);
            var p = { plans: e };
            var api = this.cpapi.apiURL + "data/" + this.auth.user;
            this.http.post(api, p)
                .subscribe(function (data) { console.log("saved to web"); }, function (error) {
                //  if no web connection?
                console.log(error);
            });
        }
        else {
            console.log('not saved to web, no internet');
        }
    };
    PersonalPlansProvider.prototype.readFromWeb = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var api = _this.cpapi.apiURL + "data/" + _this.auth.user;
            try {
                _this.http.get(api)
                    .subscribe(function (data) {
                    // console.log('read from web with', this.auth.user);
                    if (data) {
                        // console.log(this.auth.key);
                        var d = _this.decrypt(data["plans"], _this.auth.key);
                        resolve(d);
                    }
                    else {
                        var d = { plans: [] };
                        resolve(d);
                    }
                });
            }
            catch (err) {
                console.log(err);
                var d = { plans: [] };
                resolve(d);
            }
        });
    };
    PersonalPlansProvider.prototype.packagePlans = function () {
        var p;
        p = '{ "lastWrite": ' + Date.now().valueOf() + ',';
        p += ' "plans": ';
        p += JSON.stringify(this.plans);
        p += '}';
        return p;
    };
    PersonalPlansProvider.prototype.encrypt = function (data, key) {
        // console.log("encrypting");
        // console.log('key', key);
        return __WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.AES.encrypt(JSON.stringify(data), key).toString();
    };
    PersonalPlansProvider.prototype.decrypt = function (data, key) {
        // console.log('decrypting');
        // console.log('key', key);
        var bytes = __WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.AES.decrypt(data, key);
        // console.log(bytes.toString(CryptoJS.enc.Utf8));
        return JSON.parse(bytes.toString(__WEBPACK_IMPORTED_MODULE_3_crypto_js___default.a.enc.Utf8));
    };
    PersonalPlansProvider.prototype.checkPlanName = function (name) {
        // see if the name's already in use
        var canUseName = true;
        this.plans.forEach(function (p) {
            if (p["name"].trim() == name) {
                canUseName = false;
            }
        });
        return canUseName;
    };
    // helper
    PersonalPlansProvider.prototype.deepCopy = function (obj) {
        var copy;
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj)
            return obj;
        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.deepCopy(obj[i]);
            }
            return copy;
        }
        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr))
                    copy[attr] = this.deepCopy(obj[attr]);
            }
            return copy;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    };
    PersonalPlansProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_6__local_store_local_store__["a" /* LocalStoreProvider */],
            __WEBPACK_IMPORTED_MODULE_5__authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_4__cpapi_cpapi__["a" /* CPAPI */],
            __WEBPACK_IMPORTED_MODULE_7__master_plans_master_plans__["a" /* MasterPlansProvider */]])
    ], PersonalPlansProvider);
    return PersonalPlansProvider;
}());

// pre-defined outline/starter plan
var GUIDED_PLAN = {
    name: "",
    text: "Guided Starter Plan",
    created: "",
    updated: "",
    problems: [
        {
            text: "General Observation/Assessment",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        },
        {
            text: "Teaching, Training & Coaching",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        },
        {
            text: "Comfort Care/Symptom Control",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        },
        {
            text: "Safety & Mobility",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        },
        {
            text: "Emotional/Spiritual",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        },
        {
            text: "Skin Care",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        },
        {
            text: "Hydration/Nutrition/Elimination",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        },
        {
            text: "Therapeutic/Medication",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        },
        {
            text: "Care Coordination/Discharge",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        },
        {
            text: "Other Considerations",
            hint: "",
            goals: [],
            interventions: [],
            expanded: true,
            icon: "arrow-dropdown"
        }
    ]
};
//# sourceMappingURL=personal-plans.js.map

/***/ }),

/***/ 206:
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
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_printer__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_terms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subselect_subselect__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, auth, printer, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.printer = printer;
        this.plt = plt;
        this.canPrint = false;
        this.content = "<p class='aside'>If you're in a hurry, you can scroll down to <span class='hilite'>Getting Started</span> and the <span class='hilite'>Quick Guide</span> first.</p><h1>How to use Red Book Care Planning</h1><ul><li>Choose content from Tina Marrelli's Red Book</li><li>Care plans are stored securely in the cloud</li><li>Plan on multiple devices</li><li>Care planning you do while offline is synchronized the next time you connect</li></ul><p>The Red Book library is your assurance of high quality content that is:</p><ul><li>Evidence-based</li><li>US Regulatory Compliant</li><li>Pragmatic, tuned by real-world experience</li></ul><p>The library includes starter templates, baseline plans you can incorporate into your own templates, and tailor toyour patients. These are deliberately extensive to provide alternatives that fit your practice, and to remind ofthings that may be important to your patient. Select the template by condition; it is quick and easy to remove anycontent not applicable to your situation. Then customize.</p><p>Access to the library for writing plans, and access to cloud storage for synching your devices is only available,of course, when you are connected to the internet. Care planning you do offline will be sync'd when you connectagain.</p><p>You use your subscription to select the <span class='hilite'>Add ... from the Red Book</span> buttons from various pages in the app.  These include:</p><ul class='hilite'><li>Add a Standard Plan from the Red Book</li><li>Add a Condition from the Red Book</li><li>Add a Discipline from the Red Book</li><li>Add a Care Topic from the Red Book</li><li>Add an Outcome from the Red Book</li><li>Add an Intervention from the Red Book</li></ul><p>Each button presents a list of the corresponding items from the Red Book, for your incorporation into your customized care plans.</p><h3>How Subscribing Works</h3><p>The subscription is an In-App Purchase.</p><p>When you tap Subscribe, the app will show you the subscription option(s) for your selection.  If you choose <span class='hilite'>Purchase</span>, the subscription purchase is completed through Apple's standard iOS iTunes account purchase process.  Payment for the subscription will be charged to your iTunes account, once you've confirmed.</p><p>When this version of the app was released, the subscription was offered monthly.  The period or length of the subscription may change from time to time.  However, you will keep the subscription terms you originally signed up for, unless you change it yourself.</p><p>The subscription renews automatically for another period, if you don't cancel it.  Your iTunes account will be charegd for renewal within 24 hours of the end of the current period.  The charge for the renewal will be the same as the initial charge, but sometimes special promotions may be in effect.</p><p>When this version of the app was released, the cost was 5.99 USD per month, or the equivalent in your local currency.  Renewals will always be the price you originally signed up for, unless you specifically agree to a change, even if the price may be increased for new subscribers.</p><p>If you've taken advantage of a free trial period, then when you subscribe the remaining portion, if any, of your free trial period is forfeit, and your subscription begins immediately</p><h2 id='without'>Without a Subscription</h2><p>You can use Care Planning without a subscription to the Red Book library. Simply select WORK OFFLINE from thewelcome page. You can still enjoy the thoughtful structure and ease of use, you'll just be providing your owncontent. Even with your own content, creating templates, copying and customizing plans, and using the text or pdfoutput in your documentation (or documentation system) will still save you countless hours, simplify your planning,and improve the quality of your documentation.</p><h1 id='templates'>Create Care Plans faster with templates</h1><p>Templates provide a quick and easy way to include most-used content in your care plans, while enablingindividual patient specificity. The following instructions assume you've subscribed to the Red Book content, butit works nearly the same to re-use your own content.</p><p>To create templates, follow these steps.</p><ul><li>From My Care Plans, choose <span class='hilite'>CREATE A NEW PLAN</span>. We suggest naming your plan something easyto find later, such as 'CHF Template'. You may want to name all your templates so that they appear in the samesection of Care Plans, such as 'Template <em>(condition)</em>.'  You may also add a description.</li><li><span class='hilite'>Add a Standard Care Plan from the Red Book</span> Available for many common diseases orconditions, these standard care plans include suggested topics, outcomes, and interventions, which will be added foryou. Standard Plans generally include all nursing interventions.</li><li>Preview the standard plan. Select All or individually select the outcomes and interventions you prefer.  Scroll to the bottom of the screen to <span class='hilite'>SAVE</span>.</li><li>Once added, the newly-created plan will appear at the end of your My Care Plans list. Tap to open.</li></ul><p>To refine your template, you may extend the initial plan</p><ul>Using the upper left menu <ion-icon name='menu'></ion-icon> :<li>Add an additional condition, if needed.  Use this option to create co-morbid or combined templates.  You can choose <span class='hilite'>Add A Condition</span> to incorporate another Red Book Standard Care Plan.You can also add in one of your own plans, if you've already created one.  Choose 'Add from My Plans.' </li><li>Add a discipline, if needed. If you add a discipline, you have to option to Select All or individually choose outcomes and interventions.</li><li>Add a care topic to the plan if needed. Care topics may be problems, disciplines, or simply carefocus areas. You can select from the Red Book, or define your own.</li></ul><ul>Using the menu <ion-icon name='menu'></ion-icon> to the right of each Care Topic:<li>Add or edit outcomes associated with the topic. If you've selected a condition or discipline fromthe Red Book, you would have selected outcomes and interventions in the preview. You may edit or removethese as needed. Of course you may also create your own outcome statements, or add others from the Red Book library. Leave the blanks provided for specifics (because this will be a template.) Add blanks of your own, as needed.</li><li>Add or edit interventions associated with the care topic. Interventions may also have been selected fromthe Red Book. Again, you may select other interventions from Red Book or create your own. Or remove or editany as you see fit. Leave the blanks here too.</li><li>When your changes are complete and the template plan is satisfactory, you're all done. No need to saveexplicitly, the app will save at intervals as you work.</li></ul><p>To begin planning for an individual patient, copy a template first.</p><ul><li>From My Care Plans, choose <span class='hilite'>CREATE A NEW CARE PLAN</span>.</li><li>On the Add a Care Plan Page, name the new plan. The name can be anything you like, but we suggest using care toobserve patient privacy concerns. [See the <span class='hilite'>Patient Privacy Note</span>.]</li><li>Note the 'Add' and 'Copy' buttons will be disabled if the new name duplicates an old name. The buttons becomeavailable immediately, as you type, if the new name hasn't already been used.</li><li>Choose <span class='hilite'>Copy One of My Plans.</span></li>  <li>  Select the Template you want to use for your patient.  As with conditions and disciplines, you will have the opportunity to preview and select the contents you want before saving.</li><li>You will be returned to the My Care Plans page. You'll need to find the new oneyou just created before proceeding (it will be at the bottom of your list of plans).</li></ul><p> Open the new plan (tap on it's name to open its contents), then add or remove topics, outcomes, or interventionsto meet your individual patient's needs. Fill in the blanks to provide necessary specifics.</p><p>We also suggest you add all your co-morbid conditions for a patient at the same time, because the app will removeany duplication as you merge in additional conditions or disciplines. You're then able to refine your resultingtemplate or plan thereafter.</p><p>To merge in a co-morbid condition, you have two options. You can merge in additional conditions from the Red Book,or you can merge in one of your own care plans. If using your own, typically you would choose a discipline orcondition template you've created.</p><p>To merge in another condition from the Red Book:</p><ul><li>Open the new plan if it's not already open.</li><li>Tap the menu <ion-icon name='menu'></ion-icon> icon </li><li>Choose <span class='hilite'>Add a Condition.</span>  As before, you'll be able to preview and select topics, outcomes, and interventions to be added.</li><li>Proceed with adding, removing or modifying topics, outcomes, or interventions as needed.</li></ul><p>To merge in one of your own Plans:</p><ul><li>Open the new plan if it's not alreaedy open.</li><li>Tap the menu <ion-icon name='menu'></ion-icon> icon </li><li>Choose Add from My Plan</li><li>Select the desired plan from the Select list.</li><li>Choose your preferred contents from the preview. <span class='hilite'>SAVE</span> when ready.</li><li>Proceed with adding, removing or modifying topics, outcomes, or interventions as needed.</li></ul><p>Merging Notes: topics, outcomes, and interventions that are not in the plan are added. Those that arealready in the plan will not be added again.</p><p>The merge compares topics, outcomes, and interventions exactly, letter for letter.  If you've filled in some blanks in an item, thatitem will no longer match a like item exactly, and therefore will present again.  This is a good reason to do all your merging first, and do your individualizing care after.</p><p>When merging in a second condition or additional disciplines, the app will expand the care topic(in the Care Plan page) into which items were merged, as a way of showing you where content was added.</p><p>Consider making multiple templates to apply to the most common conditions you encounter in your practice.</p><p>You may also choose to make co-morbid or multi-condition templates. To do so, simply add the set of topics,outcomes, and interventions that apply to those conditions. For example, you may have a Diabetes-HypertensionTemplate, or a Cancer-Opiod Management Template.</p><h1 id='privacy'>Patient Privacy Note</h1><p>As health care professionals, we expect to maintain utmost confidentiality in treating patients' privateinformation. In most countries, laws protect patient privacy, and many provide for severe penalties for violating thistrust.  Red Book Care Planning strongly recommends you do not identify care plans with individual patient names, or anyother protected health information. We suggest using a mnemonic of some kind instead. As the basic idea behind the app is toenable you to compose plans to be easily inserted into some other documentation or documentation system, we suggest youidentify the plan to the specific patient only in the context of a separate, secure system. While care plans stored inthe cloud are encrypted and secure, we nonetheless feel minimizing exposure is the best approach.</p><h1 id='quick'>Quick Guide</h1><h1 id='more'>On Every Page</h1><p>A heading at the top of the page tells you which page you’re on. </p><p>Back option: Most pages will have a Back option, an arrow pointing to the left, at the left side of theheading.  Use this to return to the previous page. On pages where you're adding or editing, 'back' will work just like'cancel'.</p><p>LogIn: Most pages will have an unlock <ion-icon name='unlock'></ion-icon> icon with which you can log in to your Red Book subscription.  If you're currently logged in, the icon will be a lock<ion-icon name='lock'></ion-icon> instead, which you can use to log out (which you rarely need to do).</p><p>Help: Most pages will have a help, '?' <ion-icon name='help'></ion-icon> icon with which you can reach this help page. Of course you already knew that,or you wouldn’t be here.</p><h1>The Welcome Page</h1><p>This is the page you see first when the app starts. Depending on how you last used Care Plans, you willsee different options, described below.</p><h2 id='start'>Getting Started</h2><p>If this is your very first time using the app, you will use <span class='hilite'>WORK OFFLINE</span> to getstarted. Once you've entered the app, you'll be able to subscribe to Red Book content with an In-App Purchase.</p><p>On your first visit, your <span class='hilite'>My Care Plans</span> page will be empty, nearly blank. This isnormal; this is the page where all your plans are listed, and of course you don't have any yet! You'll start with thebig red <span class='hilite'>CREATE A NEW PLAN</span> button. See how to create a plan below.</p><h2>If you've been here before</h2><p><span class='hilite'>LOGIN</span> or <span class='hilite'>WORK OFFLINE</span> to enter the app. Log in toenable access to the Red Book care plan content. Work Offline to work only with your own content.  You may also see <span class='hilite'>WELCOME BACK</span> if you were logged in when you left last time.</p><p>If you were signed in when you last used the app, you may see <span class='hilite'>WELCOME BACK, YOU'RELOGGED IN</span>, and a <span class='hilite'>CONTINUE</span> option.Tap to continue. </p><p>If you were off line when you last used the app, and you have an active internet connection you'll havethe option to <span class='hilite'>LOGIN</span> to sign into your Red Book Care Plans library subscription.</p><p>If you were off line when last used, you are off line now, or you have never subscribed, or if you simplyprefer to, you may also select <span class='hilite'>WORK OFFLINE</span> to continue without using the library.</p><p>If you'd like to subscribe, choose the <span class='hilite'>LOGIN</span> option. You'll have anopportunity to subscribe from the login page. Or just tap this:</p><button ion-button (click)='subscribe()'>Subscribe Now</button><br><h2>The Login Page</h2><p>Reach this page from <span class='hilite'>LOGIN</span> on the Welcome page, or from the menu. You may wantto sign in from the menu if you've been offline.</p><p>No surprises, enter your user ID and password, select <span class='hilite'>LOGIN</span>. Log In will onlybe available if you're connected to the internet. If you're not already subscribed, or if your subscription has expired,you will have the option to <span class='hilite'>SUBSCRIBE</span>.You may select <span class='hilite'>WORK OFFLINE</span> to continue without signing in.</p><h2>My Care Plans Page</h2><p>This is your home page. You got here because you</p><ul><li>were <span class='hilite'>WELCOMED BACK</span>, or</li><li>successfully signed in on the Login page, or</li><li>selected <span class='hilite'>WORK OFFLINE</span> on the Welcome page, or</li><li>selected <span class='hilite'>WORK OFFLINE</span> on the Login page.</li></ul><p>On this page, all your care plans are listed. You will normally start out with an empty list, beforeyou create your first plan. Listed plans may be templates you've created to be copied (see above,) or plans you'vewritten for individual patients (see <a href='#privacy'>Patient Privacy</a> note and <span (click)='terms()'>terms and conditions</span>.)</p><p>There's a big red <span class='hilite'>CREATE A NEW PLAN</span> button at the top of the page. Selectthat button to create a new plan, whether you intend to make a template or an individual patient's plan.</p><p>Each plan listed on the page is identified by the name you gave when you created it. Following thename, thereis anicon<ion-icon name='create' class='tool'></ion-icon>. Tap anywhere on the name or<ion-icon name='create' class='tool'></ion-icon>, to work with the Care Plan, including changing itsname,copying it,deleting it, adding or changing contents, or sharing the plan.</p><p>At the right of the title bar, you may also see upload <ion-icon name='cloud-upload' class='hilite'></ion-icon>and download <ion-icon name='cloud-download' class='hilite'></ion-icon> icons. These will appear if you are logged in.These are to force an upload of your device's current version of your care plans, or to force adownload of the current cloud version.  Usually, these are not needed, as the app takes care of syncing to the cloud as you use it.</p><p>However, sometimes it's helpful for you to control exactly when the sync is done. For example, these may be used to quickly move your plans if you've made changes in one device and need it onanother, that is, you may upload from the device with the changes, and download to the device that needs them.  You may alsoneed to download if someone else has signed into their Red Book subscription on the device you're using, and you need to restore your own plans to the device from the cloud.</p><p>Note all the plans you have created are downloaded or uploaded together, so you don't want to have thelatest of one plan on one device, and the latest of another plan on a different device.</p><h2>(specific) Care Plan Page</h2><p>Where all the work happens. The plan you selected on Care Plans Page is shown. The name of the planappears at the top. To the left of the plan name is a menu  <ion-icon name='menu'></ion-icon> icon.</p><p><ion-icon class='hilite' name='book'></ion-icon>Add a Condition, only if you are logged in to your Red Book subscription.</p><p><ion-icon class='hilite' name='book'></ion-icon>Add a Discipline, only if you are logged in to your Red Book subscription.</p><p><ion-icon name='shuffle'></ion-icon> Add from My Plan, used to merge one of your other plans into this plan.</p><p><ion-icon name='add'></ion-icon>Add Care Topic</p><p><ion-icon name='share'></ion-icon>Share, opens the Text Care Plan Page, from which you may clipboard, email, or make a PDF of your plan.</p><p><ion-icon name='trash'></ion-icon>Delete, after confirmation, will remove the care plan permanently.</p><p>Below the name, care topics are listed in Red. These topics may be aspects of care, physiology, disciplines,or otherfocus areas. This area will be blank initially, as you are creating a new plan. Each care topic has an option on the left to expand <ion-icon name='arrow-dropright'></ion-icon> or collapse <ion-icon name='arrow-dropdown'></ion-icon> its content, to enable easier navigation. The topics arelisted in the order they were added to the plan.</p><p>On the right of each Topic is a menu <ion-icon name='menu'></ion-icon> option to:</p><ul><li><ion-icon name='star'></ion-icon> Add an Outcome</li><li><ion-icon name='construct'></ion-icon> Add an Intervention</li><li><ion-icon name='trash'></ion-icon> Delete this Topic</li></ul><p>When expanded, outcomes and interventions related to the care topic are listed. Outcomes are listed first in Green, followed by interventions in Blue.</p><p>Both outcomes and interventions are listed in the order originally entered. You can drag and drop torearrange outcomes or interventions within their topics, and within that screen view.  (That is, the screen won't scroll while dragging.) </p><p>Outcomes may indicate short or long term with “ST” or “LT” preceding the outcome text. Interventions may indicate the applicable discipline(s),listed after the intervention text.</p><p>Each has a Delete <ion-icon name='trash'></ion-icon> option to the right of the item.</p><h1>How To</h1><h2>To create a new plan: </h2><p>on My Care Plans page, tap the big red <span class='hilite'>CREATE A NEW PLAN</span>.</p><p>Name the new plan. Description is optional.</p><p>You can create a plan four ways:</p><ol><li><span class='hilite'>Add Care Plan</span> creates an 'empty' plan.</li><li><span class='hilite'>Add Guided Care Plan</span> creates a plan with suggested Topics only.</li><li><span class='hilite'>Add a Standard Care Plan</span> available only if you're subscribed and logged in to the Red Book.</li><li><span class='hilite'>Copy One of My Plans</span> creates a new plan as a copy; useful for templates.</li></ol><p>After completing create, you will return to the My Care Plans page.</p><h2>To add content to a care plan:</h2><p>On My Care Plans page, tap the care plan name.</p><p>On Care Plan page (the name of the plan is shown at the top), select the menu <ion-icon name='menu'></ion-icon> to the left of the name, and</p><p>tap <span class='hilite'><ion-icon name='book'></ion-icon> Add a Condition</span> (available if you are logged in), OR</p><p>tap <span class='hilite'><ion-icon name='book'></ion-icon> Add a Discipline</span> (available if you are logged in), OR</p><p>tap <ion-icon name='shuffle'></ion-icon>Add from My Plan, OR</p><p>tap <ion-icon name='add'></ion-icon>Add a Care Topic</p><h3>Add your own topic (problem, category, or focus area):</h3><p>On Care Plan page, select the left menu <ion-icon name='menu'></ion-icon> and tap <ion-icon name='add'></ion-icon>Add a Care Topic</p><p>On the Add A Care Topic page, type the topic name and save. Description is optional.</p><h3>Add a topic from the Red Book:</h3><p>Make sure you’re on line and logged in. Verify the lock <ion-icon name='lock'></ion-icon> in the page heading.</p><p>On Care Plan page, select the left menu <ion-icon name='menu'></ion-icon> and tap <ion-icon name='add'></ion-icon>Add a Care Topic</p><p>On the Add A Care Topic page,</p><p>Tap <span class='hilite'>ADD FROM THE RED BOOK</span> button.</p><p>Optionally, search for a topic.</p><p>Tap your selected topic in the list.</p><p>You will return to the Add Care Topic page.</p><p>Change the text of the topic as you wish.</p><p>Tap <span class='hilite'>SAVE</span>.</p><h2>To add an outcome:</h2><h3>Add your own:</h3><p>On Care Plan page, select the menu <ion-icon name='menu'></ion-icon> to the right of the Topic to which you want to add.</p>      <p>Tap <ion-icon name='star'></ion-icon>Add an Outcome</p>      <p>On the Add an Outcome page, enter the outcome description.</p><p>Short Term/Long Term is optional.</p><p>Tap <span class='hilite'>SAVE</span>.</p><h3>Add from the Red Book:</h3><p>Make sure you’re on line and logged in. Verify the<ion-icon name='lock'></ion-icon> in the page heading.</p><p>On Care Plan page, select the menu <ion-icon name='menu'></ion-icon> to the right of the Topic to which you want to add.</p>      <p>Tap <ion-icon name='star'></ion-icon>Add an Outcome</p>  <p>On the Add an Outcome page,</p><p>Tap <span class='hilite'>ADD FROM THE RED BOOK</span> button.</p><p>Optionally, search for an outcome.</p><p>Tap your selected outcome in the list.</p><p>You will return to the Add an Outcome page.</p><p>Change the text of the outcome as you wish, filling in blanks as needed.</p><p>Tap <span class='hilite'>SAVE</span>.</p><h2>To add an intervention:</h2><h3>Add your own:</h3><p>On Care Plan page, select the menu <ion-icon name='menu'></ion-icon> to the right of the Topic to which you want to add.</p>      <p>Tap <ion-icon name='construct'></ion-icon>Add an Intervention</p>  <p>On the Add an Intervention page, enter the intervention description.</p><p>Select one or more disciplines, or enter others as needed.</p><p>Tap <span class='hilite'>SAVE</span>.</p><h3>Add from the Red Book:</h3><p>Make sure you’re on line and logged in. Verify the<ion-icon name='lock'></ion-icon> in the page heading.</p><p>On Care Plan page, select the menu <ion-icon name='menu'></ion-icon> to the right of the Topic to which you want to add.</p>      <p>Tap <ion-icon name='construct'></ion-icon>Add an Intervention</p>  <p>On the Add an Intervention page,</p><p>Tap <span class='hilite'>ADD FROM THE RED BOOK</span> button.</p><p>Optionally, search for an intervention.</p><p>Tap your selected intervention in the list.</p><p>You will return to the Add an Intervention page.</p><p>Change the text of the intervention as you wish, filling in blanks as needed.</p><p>A discipline may have been suggested. Verify and select disciplines or enter others as needed.</p><p>Tap <span class='hilite'>SAVE</span>.</p><h2>To copy a plan:</h2><p>On My Care Plans page, choose <span class='hilite'>CREATE A NEW PLAN</span>. Name the new plan and choose <spanclass='hilite'>Copy One of My Plans</span>.</p><p>The button will be disabled until you type a name for the new plan. Your new name cannot be one you'veused before.</p><p>Choose one of your plans from the <span class='hilite'>Select</span> page.</p><p>On the preview page, choose <span class='hilite'>Select All</span> or individually select outcomes or interventions you want included.</p><p>Scroll down and tap <span class='hilite'>SAVE</span> at the bottom of the screen.</p><h2>To delete a plan:</h2><p>On My Care Plans page, tap the name of the care plan to be deleted.</p><p>On Care Plan page, open the left side menu <ion-icon name='menu'></ion-icon>.</p><p>Select <ion-icon name='trash'></ion-icon> Delete this Plan</p><p>Confirm when prompted.</p><h2>To share a plan, or send it for use outside the application:</h2><p>On Care Plans page, tap the name of the care plan to be shared.</p><p>On Care Plan page, open the left side menu <ion-icon name='menu'></ion-icon>.</p><p>Choose <ion-icon name='share'></ion-icon> Share this Plan</p><p>On the textual Care Plan page, share by selecting the<span class='hilite'><ion-icon name='send'></ion-icon></span> icon for email, the<span class='hilite'><ion-icon name='clipboard'></ion-icon></span> icon to copy the plan to the clipboard for pasting elsewhere,or the <span class='hilite'><ion-icon name='paper'></ion-icon>PDF</span> icon.</p><p>If you choose<span class='hilite'><ion-icon name='paper'></ion-icon>PDF</span>, your device should have a share option within your PDF viewer application.</p>";
        if (plt.is('mobile')) {
            this.canPrint = true;
        }
    }
    HelpPage.prototype.print = function () {
        console.log('print');
        this.printer.isAvailable().then(function () { }, function () { });
        var options = {
            name: 'Red Book Care Planning User Guide'
            // grayscale: true
        };
        this.printer.print(this.content, options).then(function () { }, function () { });
    };
    HelpPage.prototype.done = function () {
        this.navCtrl.pop();
    };
    HelpPage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__terms_terms__["a" /* TermsPage */]);
    };
    HelpPage.prototype.subscribe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__subselect_subselect__["a" /* SubselectPage */]);
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/help/help.html"*/'<ion-header>\n\n  <ion-navbar class=\'navbarStyle\' color=\'primary\'>\n\n    <ion-title>User Guide</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)=\'print()\'>\n\n        <ion-icon name=\'print\'></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p class=\'aside\'>If you\'re in a hurry, you can scroll down to <span class=\'hilite\'>Getting Started</span> and the\n\n    <span class=\'hilite\'>Quick Guide</span> first.</p>\n\n  <h1>How to use Red Book Care Planning</h1>\n\n  <ul>\n\n    <li>Choose content from Tina Marrelli\'s Red Book</li>\n\n    <li>Care plans are stored securely in the cloud</li>\n\n    <li>Plan on multiple devices</li>\n\n    <li>Care planning you do while offline is synchronized the next time you connect</li>\n\n  </ul>\n\n  <p>The Red Book library is your assurance of high quality content that is:</p>\n\n  <ul>\n\n    <li>Evidence-based</li>\n\n    <li>US Regulatory Compliant</li>\n\n    <li>Pragmatic, tuned by real-world experience</li>\n\n  </ul>\n\n  <p>The library includes starter templates, baseline plans you can incorporate into your own templates, and tailor to\n\n    your patients. These are deliberately extensive to provide alternatives that fit your practice, and to remind of\n\n    things that may be important to your patient. Select the template by condition; it is quick and easy to remove any\n\n    content not applicable to your situation. Then customize.</p>\n\n  <p>Access to the library for writing plans, and access to cloud storage for synching your devices is only available,\n\n    of course, when you are connected to the internet. Care planning you do offline will be sync\'d when you connect\n\n    again.</p>\n\n  <p>You use your subscription to select the <span class=\'hilite\'>Add ... from the Red Book</span> buttons from various\n\n    pages in the app. These include:</p>\n\n  <ul class=\'hilite\'>\n\n    <li>Add a Standard Plan from the Red Book</li>\n\n    <li>Add a Condition from the Red Book</li>\n\n    <li>Add a Discipline from the Red Book</li>\n\n    <li>Add a Care Topic from the Red Book</li>\n\n    <li>Add an Outcome from the Red Book</li>\n\n    <li>Add an Intervention from the Red Book</li>\n\n  </ul>\n\n  <p>Each button presents a list of the corresponding items from the Red Book, for your incorporation into your\n\n    customized care plans.</p>\n\n  <h3>How Subscribing Works</h3>\n\n  <p>The subscription is an In-App Purchase.</p>\n\n  <p>When you tap Subscribe, the app will show you the subscription option(s) for your selection. If you choose <span\n\n      class=\'hilite\'>Purchase</span>, the subscription purchase is completed through Apple\'s standard iOS iTunes account\n\n    purchase process. Payment for the subscription will be charged to your iTunes account, once you\'ve confirmed.</p>\n\n  <p>When this version of the app was released, the subscription was offered monthly. The period or length of the\n\n    subscription may change from time to time. However, you will keep the subscription terms you originally signed up\n\n    for, unless you change it yourself.</p>\n\n  <p>The subscription renews automatically for another period, if you don\'t cancel it. Your iTunes account will be\n\n    charegd for renewal within 24 hours of the end of the current period. The charge for the renewal will be the same as\n\n    the initial charge, but sometimes special promotions may be in effect.</p>\n\n  <p>When this version of the app was released, the cost was 5.99 USD per month, or the equivalent in your local\n\n    currency. Renewals will always be the price you originally signed up for, unless you specifically agree to a change,\n\n    even if the price may be increased for new subscribers.</p>\n\n  <p>If you\'ve taken advantage of a free trial period, then when you subscribe the remaining portion, if any, of your\n\n    free trial period is forfeit, and your subscription begins immediately</p>\n\n\n\n  <button ion-button (click)=\'subscribe()\' *ngIf=\'!auth.userLoggedIn\'>Subscribe Now</button>\n\n  <p *ngIf=\'auth.userLoggedIn\' class=\'hilite\'>You\'re already subscribed and logged in, so you\'re good to go.</p>\n\n  <h2 id=\'without\'>Without a Subscription</h2>\n\n  <p>You can use Care Planning without a subscription to the Red Book library. Simply select WORK OFFLINE from the\n\n    welcome page. You can still enjoy the thoughtful structure and ease of use, you\'ll just be providing your own\n\n    content. Even with your own content, creating templates, copying and customizing plans, and using the text or pdf\n\n    output in your documentation (or documentation system) will still save you countless hours, simplify your planning,\n\n    and improve the quality of your documentation.\n\n  </p>\n\n\n\n  <h1 id=\'templates\'>Create Care Plans faster with templates</h1>\n\n  <p>Templates provide a quick and easy way to include most-used content in your care plans, while enabling\n\n    individual patient specificity. The following instructions assume you\'ve subscribed to the Red Book content, but\n\n    it works nearly the same to re-use your own content.</p>\n\n\n\n  <p>To create templates, follow these steps.</p>\n\n  <ul>\n\n    <li>From My Care Plans, choose <span class=\'hilite\'>CREATE A NEW PLAN</span>. We suggest naming your plan something\n\n      easy\n\n      to find later, such as \'CHF Template\'. You may want to name all your templates so that they appear in the same\n\n      section of Care Plans, such as \'Template <em>(condition)</em>.\' You may also add a description.</li>\n\n    <li><span class=\'hilite\'>Add a Standard Care Plan from the Red Book</span> Available for many common diseases or\n\n      conditions, these standard care plans include suggested topics, outcomes, and interventions, which will be added\n\n      for\n\n      you. Standard Plans generally include all nursing interventions.\n\n    </li>\n\n    <li>Preview the standard plan. Select All or individually select the outcomes and interventions you prefer. Scroll\n\n      to the bottom of the screen to <span class=\'hilite\'>SAVE</span>.\n\n    </li>\n\n    <li>Once added, the newly-created plan will appear at the end of your My Care Plans list. Tap to open.</li>\n\n  </ul>\n\n  <p>To refine your template, you may extend the initial plan</p>\n\n  <ul>Using the upper left menu <ion-icon name=\'menu\'></ion-icon> :\n\n    <li>Add an additional condition, if needed. Use this option to create co-morbid or combined templates. You can\n\n      choose <span class=\'hilite\'>Add A Condition</span> to incorporate another Red Book Standard Care Plan.\n\n      You can also add in one of your own plans, if you\'ve already created one. Choose \'Add from My Plans.\' </li>\n\n    <li>Add a discipline, if needed. If you add a discipline, you have to option to Select All or individually choose\n\n      outcomes and interventions.</li>\n\n    <li>Add a care topic to the plan if needed. Care topics may be problems, disciplines, or simply care\n\n      focus areas. You can select from the Red Book, or define your own.\n\n    </li>\n\n  </ul>\n\n  <ul>Using the menu <ion-icon name=\'menu\'></ion-icon> to the right of each Care Topic:\n\n    <li>Add or edit outcomes associated with the topic. If you\'ve selected a condition or discipline from\n\n      the Red Book, you would have selected outcomes and interventions in the preview. You may edit or remove\n\n      these as needed. Of course you may also create your own outcome statements, or add others from the Red Book\n\n      library.\n\n      Leave the blanks provided for specifics (because this will be a template.) Add blanks of your own, as needed.\n\n    </li>\n\n    <li>Add or edit interventions associated with the care topic. Interventions may also have been selected from\n\n      the Red Book. Again, you may select other interventions from Red Book or create your own. Or remove or edit\n\n      any as you see fit. Leave the blanks here too.\n\n    </li>\n\n    <li>When your changes are complete and the template plan is satisfactory, you\'re all done. No need to save\n\n      explicitly, the app will save at intervals as you work.</li>\n\n  </ul>\n\n  <p>To begin planning for an individual patient, copy a template first.</p>\n\n  <ul>\n\n    <li>From My Care Plans, choose <span class=\'hilite\'>CREATE A NEW CARE PLAN</span>.</li>\n\n    <li>On the Add a Care Plan Page, name the new plan. The name can be anything you like, but we suggest using care to\n\n      observe patient privacy concerns. [See the <span class=\'hilite\'>Patient Privacy Note</span>.]</li>\n\n    <li>Note the \'Add\' and \'Copy\' buttons will be disabled if the new name duplicates an old name. The buttons become\n\n      available immediately, as you type, if the new name hasn\'t already been used.</li>\n\n    <li>Choose <span class=\'hilite\'>Copy One of My Plans.</span></li>\n\n    <li> Select the Template you want to use for your patient. As with conditions and disciplines, you will have the\n\n      opportunity to preview and select the contents you want before saving.</li>\n\n    <li>You will be returned to the My Care Plans page. You\'ll need to find the new one\n\n      you just created before proceeding (it will be at the bottom of your list of plans).</li>\n\n  </ul>\n\n  <p> Open the new plan (tap on it\'s name to open its contents), then add or remove topics, outcomes, or interventions\n\n    to meet your individual patient\'s needs. Fill in the blanks to provide necessary specifics.</p>\n\n  <p>We also suggest you add all your co-morbid conditions for a patient at the same time, because the app will remove\n\n    any duplication as you merge in additional conditions or disciplines. You\'re then able to refine your resulting\n\n    template or plan thereafter.</p>\n\n  <p>To merge in a co-morbid condition, you have two options. You can merge in additional conditions from the Red Book,\n\n    or you can merge in one of your own care plans. If using your own, typically you would choose a discipline or\n\n    condition template you\'ve created.</p>\n\n  <p>To merge in another condition from the Red Book:</p>\n\n  <ul>\n\n    <li>Open the new plan if it\'s not already open.</li>\n\n    <li>Tap the menu <ion-icon name=\'menu\'></ion-icon> icon </li>\n\n    <li>Choose <span class=\'hilite\'>Add a Condition.</span> As before, you\'ll be able to preview and select topics,\n\n      outcomes, and interventions to be added.</li>\n\n    <li>Proceed with adding, removing or modifying topics, outcomes, or interventions as needed.</li>\n\n  </ul>\n\n  <p>To merge in one of your own Plans:</p>\n\n  <ul>\n\n    <li>Open the new plan if it\'s not alreaedy open.</li>\n\n    <li>Tap the menu <ion-icon name=\'menu\'></ion-icon> icon </li>\n\n    <li>Choose Add from My Plan</li>\n\n    <li>Select the desired plan from the Select list.</li>\n\n    <li>Choose your preferred contents from the preview. <span class=\'hilite\'>SAVE</span> when ready.</li>\n\n    <li>Proceed with adding, removing or modifying topics, outcomes, or interventions as needed.</li>\n\n  </ul>\n\n  <p>Merging Notes: topics, outcomes, and interventions that are not in the plan are added. Those that are\n\n    already in the plan will not be added again.</p>\n\n  <p>The merge compares topics, outcomes, and interventions exactly, letter for letter. If you\'ve filled in some blanks\n\n    in an item, that\n\n    item will no longer match a like item exactly, and therefore will present again. This is a good reason to do all\n\n    your merging first, and do your individualizing care after.</p>\n\n  <p>When merging in a second condition or additional disciplines, the app will expand the care topic\n\n    (in the Care Plan page) into which items were merged, as a way of showing you where content was added.</p>\n\n  <p>Consider making multiple templates to apply to the most common conditions you encounter in your practice.</p>\n\n  <p>You may also choose to make co-morbid or multi-condition templates. To do so, simply add the set of topics,\n\n    outcomes, and interventions that apply to those conditions. For example, you may have a Diabetes-Hypertension\n\n    Template, or a Cancer-Opiod Management Template.</p>\n\n\n\n  <h1 id=\'privacy\'>Patient Privacy Note</h1>\n\n  <p>As health care professionals, we expect to maintain utmost confidentiality in treating patients\' private\n\n    information. In most countries, laws protect patient privacy, and many provide for severe penalties for violating\n\n    this\n\n    trust. Red Book Care Planning strongly recommends you do not identify care plans with individual patient names, or\n\n    any\n\n    other protected health information. We suggest using a mnemonic of some kind instead. As the basic idea behind the\n\n    app is to\n\n    enable you to compose plans to be easily inserted into some other documentation or documentation system, we suggest\n\n    you\n\n    identify the plan to the specific patient only in the context of a separate, secure system. While care plans stored\n\n    in\n\n    the cloud are encrypted and secure, we nonetheless feel minimizing exposure is the best approach.</p>\n\n  <h1 id=\'quick\'>Quick Guide</h1>\n\n\n\n\n\n  <h1 id=\'more\'>On Every Page</h1>\n\n  <p>A heading at the top of the page tells you which page you’re on. </p>\n\n  <p>Back option: Most pages will have a Back option, an arrow pointing to the left, at the left side of the\n\n    heading. Use this to return to the previous page. On pages where you\'re adding or editing, \'back\' will work just\n\n    like\n\n    \'cancel\'.</p>\n\n  <p>LogIn: Most pages will have an unlock\n\n    <ion-icon name=\'unlock\'></ion-icon> icon with which you can log in to your Red Book subscription.\n\n    If you\'re currently logged in, the icon will be a lock\n\n    <ion-icon name=\'lock\'></ion-icon> instead, which you can use to log out (which you rarely need to do).\n\n  </p>\n\n  <p>Help: Most pages will have a help, \'?\'\n\n    <ion-icon name=\'help\'></ion-icon> icon with which you can reach this help page. Of course you already knew that,\n\n    or you wouldn’t be here.\n\n  </p>\n\n\n\n  <h1>The Welcome Page</h1>\n\n  <p>This is the page you see first when the app starts. Depending on how you last used Care Plans, you will\n\n    see different options, described below.</p>\n\n  <h2 id=\'start\'>Getting Started</h2>\n\n  <p>If this is your very first time using the app, you will use <span class=\'hilite\'>WORK OFFLINE</span> to get\n\n    started. Once you\'ve entered the app, you\'ll be able to subscribe to Red Book content with an In-App Purchase.</p>\n\n  <p>On your first visit, your <span class=\'hilite\'>My Care Plans</span> page will be empty, nearly blank. This is\n\n    normal; this is the page where all your plans are listed, and of course you don\'t have any yet! You\'ll start with\n\n    the\n\n    big red <span class=\'hilite\'>CREATE A NEW PLAN</span> button. See how to create a plan below.</p>\n\n  <h2>If you\'ve been here before</h2>\n\n  <p><span class=\'hilite\'>LOGIN</span> or <span class=\'hilite\'>WORK OFFLINE</span> to enter the app. Log in to\n\n    enable access to the Red Book care plan content. Work Offline to work only with your own content. You may also see\n\n    <span class=\'hilite\'>WELCOME BACK</span> if you were logged in when you left last time.</p>\n\n\n\n  <p>If you were signed in when you last used the app, you may see <span class=\'hilite\'>WELCOME BACK, YOU\'RE\n\n      LOGGED IN</span>, and a <span class=\'hilite\'>CONTINUE</span> option.\n\n    Tap to continue. </p>\n\n  <p>If you were off line when you last used the app, and you have an active internet connection you\'ll have\n\n    the option to <span class=\'hilite\'>LOGIN</span> to sign into your Red Book Care Plans library subscription.</p>\n\n  <p>If you were off line when last used, you are off line now, or you have never subscribed, or if you simply\n\n    prefer to, you may also select <span class=\'hilite\'>WORK OFFLINE</span> to continue without using the library.</p>\n\n  <p>If you\'d like to subscribe, choose the <span class=\'hilite\'>LOGIN</span> option. You\'ll have an\n\n    opportunity to subscribe from the login page. Or just tap this:</p>\n\n  <button ion-button (click)=\'subscribe()\'>Subscribe Now</button>\n\n  <br>\n\n  <h2>The Login Page</h2>\n\n  <p>Reach this page from <span class=\'hilite\'>LOGIN</span> on the Welcome page, or from the menu. You may want\n\n    to sign in from the menu if you\'ve been offline.</p>\n\n  <p>No surprises, enter your user ID and password, select <span class=\'hilite\'>LOGIN</span>. Log In will only\n\n    be available if you\'re connected to the internet. If you\'re not already subscribed, or if your subscription has\n\n    expired,\n\n    you will have the option to <span class=\'hilite\'>SUBSCRIBE</span>.\n\n    You may select <span class=\'hilite\'>WORK OFFLINE</span> to continue without signing in.\n\n  </p>\n\n\n\n  <h2>My Care Plans Page</h2>\n\n  <p>This is your home page. You got here because you</p>\n\n  <ul>\n\n    <li>were <span class=\'hilite\'>WELCOMED BACK</span>, or</li>\n\n    <li>successfully signed in on the Login page, or</li>\n\n    <li>selected <span class=\'hilite\'>WORK OFFLINE</span> on the Welcome page, or</li>\n\n    <li>selected <span class=\'hilite\'>WORK OFFLINE</span> on the Login page.</li>\n\n  </ul>\n\n  <p>On this page, all your care plans are listed. You will normally start out with an empty list, before\n\n    you create your first plan. Listed plans may be templates you\'ve created to be copied (see above,) or plans you\'ve\n\n    written for individual patients (see <a href=\'#privacy\'>Patient Privacy</a> note and <span (click)=\'terms()\'>terms\n\n      and conditions</span>.)</p>\n\n  <p>There\'s a big red <span class=\'hilite\'>CREATE A NEW PLAN</span> button at the top of the page. Select\n\n    that button to create a new plan, whether you intend to make a template or an individual patient\'s plan.</p>\n\n  <p>Each plan listed on the page is identified by the name you gave when you created it. Following the\n\n    name, there\n\n    is an\n\n    icon\n\n    <ion-icon name=\'create\' class=\'tool\'></ion-icon>. Tap anywhere on the name or\n\n    <ion-icon name=\'create\' class=\'tool\'></ion-icon>, to work with the Care Plan, including changing its\n\n    name,\n\n    copying it,\n\n    deleting it, adding or changing contents, or sharing the plan.\n\n  </p>\n\n  <p>At the right of the title bar, you may also see upload <ion-icon name=\'cloud-upload\' class=\'hilite\'></ion-icon>\n\n    and download\n\n    <ion-icon name=\'cloud-download\' class=\'hilite\'></ion-icon> icons. These will appear if you are logged in.\n\n    These are to force an upload of your device\'s current version of your care plans, or to force a\n\n    download of the current cloud version. Usually, these are not needed, as the app takes care of syncing to the cloud\n\n    as you use it.</p>\n\n  <p>However, sometimes it\'s helpful for you to control exactly when the sync is done. For example, these may be used to\n\n    quickly move your plans if you\'ve made changes in one device and need it on\n\n    another, that is, you may upload from the device with the changes, and download to the device that needs them. You\n\n    may also\n\n    need to download if someone else has signed into their Red Book subscription on the device you\'re using,\n\n    and you need to restore your own plans to the device from the cloud.</p>\n\n  <p>Note all the plans you have created are downloaded or uploaded together, so you don\'t want to have the\n\n    latest of one plan on one device, and the latest of another plan on a different device.\n\n  </p>\n\n\n\n  <h2>(specific) Care Plan Page</h2>\n\n  <p>Where all the work happens. The plan you selected on Care Plans Page is shown. The name of the plan\n\n    appears at the top. To the left of the plan name is a menu <ion-icon name=\'menu\'></ion-icon> icon.</p>\n\n  <p>\n\n    <ion-icon class=\'hilite\' name=\'book\'></ion-icon>Add a Condition, only if you are logged in to your Red Book\n\n    subscription.\n\n  </p>\n\n  <p>\n\n    <ion-icon class=\'hilite\' name=\'book\'></ion-icon>Add a Discipline, only if you are logged in to your Red Book\n\n    subscription.\n\n  </p>\n\n  <p>\n\n    <ion-icon name=\'shuffle\'></ion-icon> Add from My Plan, used to merge one of your other plans into this plan.\n\n  </p>\n\n  <p>\n\n    <ion-icon name=\'add\'></ion-icon>Add Care Topic\n\n  </p>\n\n  <p>\n\n    <ion-icon name=\'share\'></ion-icon>Share, opens the Text Care Plan Page, from which you may clipboard, email, or make\n\n    a PDF of your plan.\n\n  </p>\n\n  <p>\n\n    <ion-icon name=\'trash\'></ion-icon>Delete, after confirmation, will remove the care plan permanently.\n\n  </p>\n\n  <p>Below the name, care topics are listed in Red. These topics may be aspects of care, physiology, disciplines,\n\n    or otherfocus areas. This area will be blank initially, as you are creating a new plan. Each care topic has an\n\n    option on the left\n\n    to expand <ion-icon name=\'arrow-dropright\'></ion-icon> or collapse <ion-icon name=\'arrow-dropdown\'></ion-icon> its\n\n    content, to enable easier navigation. The topics are\n\n    listed in the order they were added to the plan.\n\n  </p>\n\n  <p>On the right of each Topic is a menu <ion-icon name=\'menu\'></ion-icon> option to:</p>\n\n  <ul>\n\n    <li>\n\n      <ion-icon name=\'star\'></ion-icon> Add an Outcome\n\n    </li>\n\n    <li>\n\n      <ion-icon name=\'construct\'></ion-icon> Add an Intervention\n\n    </li>\n\n    <li>\n\n      <ion-icon name=\'trash\'></ion-icon> Delete this Topic\n\n    </li>\n\n  </ul>\n\n  <p>\n\n    When expanded, outcomes and interventions related to the care topic are listed. Outcomes are listed\n\n    first in Green, followed by interventions in Blue.\n\n  </p>\n\n  <p>Both outcomes and interventions are listed in the order originally entered. You can drag and drop to\n\n    rearrange outcomes or interventions within their topics, and within that screen view. (That is, the screen won\'t\n\n    scroll while dragging.)\n\n  </p>\n\n  <p>Outcomes may indicate short or long term with “ST” or “LT” preceding the outcome text. Interventions may indicate\n\n    the applicable discipline(s),\n\n    listed after the intervention text.\n\n  </p>\n\n  <p>Each has a Delete <ion-icon name=\'trash\'></ion-icon> option to the right of the item.\n\n  </p>\n\n\n\n  <h1>How To</h1>\n\n\n\n  <h2>To create a new plan: </h2>\n\n  <p>on My Care Plans page, tap the big red <span class=\'hilite\'>CREATE A NEW PLAN</span>.</p>\n\n  <p>Name the new plan. Description is optional.</p>\n\n  <p>You can create a plan four ways:</p>\n\n  <ol>\n\n    <li><span class=\'hilite\'>Add Care Plan</span> creates an \'empty\' plan.</li>\n\n    <li><span class=\'hilite\'>Add Guided Care Plan</span> creates a plan with suggested Topics only.</li>\n\n    <li><span class=\'hilite\'>Add a Standard Care Plan</span> available only if you\'re subscribed and logged in to the\n\n      Red Book.</li>\n\n    <li><span class=\'hilite\'>Copy One of My Plans</span> creates a new plan as a copy; useful for templates.</li>\n\n  </ol>\n\n  <p>After completing create, you will return to the My Care Plans page.</p>\n\n  <h2>To add content to a care plan:</h2>\n\n  <p>On My Care Plans page, tap the care plan name.</p>\n\n  <p>On Care Plan page (the name of the plan is shown at the top), select the menu <ion-icon name=\'menu\'></ion-icon> to\n\n    the left of the name, and</p>\n\n  <p>tap <span class=\'hilite\'>\n\n      <ion-icon name=\'book\'></ion-icon> Add a Condition\n\n    </span> (available if you are logged in), OR\n\n  </p>\n\n  <p>tap <span class=\'hilite\'>\n\n      <ion-icon name=\'book\'></ion-icon> Add a Discipline\n\n    </span> (available if you are logged in), OR\n\n  </p>\n\n  <p>tap <ion-icon name=\'shuffle\'></ion-icon>Add from My Plan, OR\n\n  </p>\n\n  <p>tap <ion-icon name=\'add\'></ion-icon>Add a Care Topic\n\n  </p>\n\n  <h3>Add your own topic (problem, category, or focus area):</h3>\n\n  <p>On Care Plan page, select the left menu <ion-icon name=\'menu\'></ion-icon> and tap <ion-icon name=\'add\'></ion-icon>\n\n    Add a Care Topic\n\n  </p>\n\n  <p>On the Add A Care Topic page, type the topic name and save. Description is optional.</p>\n\n  <h3>Add a topic from the Red Book:</h3>\n\n  <p>Make sure you’re on line and logged in. Verify the lock <ion-icon name=\'lock\'></ion-icon> in the page heading.\n\n  </p>\n\n  <p>On Care Plan page, select the left menu <ion-icon name=\'menu\'></ion-icon> and tap <ion-icon name=\'add\'></ion-icon>\n\n    Add a Care Topic\n\n  </p>\n\n  <p>On the Add A Care Topic page,</p>\n\n  <p>Tap <span class=\'hilite\'>ADD FROM THE RED BOOK</span> button.</p>\n\n  <p>Optionally, search for a topic.</p>\n\n  <p>Tap your selected topic in the list.</p>\n\n  <p>You will return to the Add Care Topic page.</p>\n\n  <p>Change the text of the topic as you wish.</p>\n\n  <p>Tap <span class=\'hilite\'>SAVE</span>.</p>\n\n  <h2>To add an outcome:</h2>\n\n  <h3>Add your own:</h3>\n\n  <p>On Care Plan page, select the menu <ion-icon name=\'menu\'></ion-icon> to the right of the Topic to which you want to\n\n    add.\n\n  </p>\n\n  <p>Tap <ion-icon name=\'star\'></ion-icon>Add an Outcome\n\n  </p>\n\n  <p>On the Add an Outcome page, enter the outcome description.</p>\n\n  <p>Short Term/Long Term is optional.</p>\n\n  <p>Tap <span class=\'hilite\'>SAVE</span>.</p>\n\n  <h3>Add from the Red Book:</h3>\n\n  <p>Make sure you’re on line and logged in. Verify the\n\n    <ion-icon name=\'lock\'></ion-icon> in the page heading.\n\n  </p>\n\n  <p>On Care Plan page, select the menu <ion-icon name=\'menu\'></ion-icon> to the right of the Topic to which you want to\n\n    add.\n\n  </p>\n\n  <p>Tap <ion-icon name=\'star\'></ion-icon>Add an Outcome\n\n  </p>\n\n  <p>On the Add an Outcome page,</p>\n\n  <p>Tap <span class=\'hilite\'>ADD FROM THE RED BOOK</span> button.</p>\n\n  <p>Optionally, search for an outcome.</p>\n\n  <p>Tap your selected outcome in the list.</p>\n\n  <p>You will return to the Add an Outcome page.</p>\n\n  <p>Change the text of the outcome as you wish, filling in blanks as needed.</p>\n\n  <p>Tap <span class=\'hilite\'>SAVE</span>.</p>\n\n\n\n  <h2>To add an intervention:</h2>\n\n  <h3>Add your own:</h3>\n\n  <p>On Care Plan page, select the menu <ion-icon name=\'menu\'></ion-icon> to the right of the Topic to which you want to\n\n    add.\n\n  </p>\n\n  <p>Tap <ion-icon name=\'construct\'></ion-icon>Add an Intervention\n\n  </p>\n\n  <p>On the Add an Intervention page, enter the intervention description.</p>\n\n  <p>Select one or more disciplines, or enter others as needed.</p>\n\n  <p>Tap <span class=\'hilite\'>SAVE</span>.</p>\n\n  <h3>Add from the Red Book:</h3>\n\n  <p>Make sure you’re on line and logged in. Verify the\n\n    <ion-icon name=\'lock\'></ion-icon> in the page heading.\n\n  </p>\n\n  <p>On Care Plan page, select the menu <ion-icon name=\'menu\'></ion-icon> to the right of the Topic to which you want to\n\n    add.\n\n  </p>\n\n  <p>Tap <ion-icon name=\'construct\'></ion-icon>Add an Intervention\n\n  </p>\n\n  <p>On the Add an Intervention page,</p>\n\n  <p>Tap <span class=\'hilite\'>ADD FROM THE RED BOOK</span> button.</p>\n\n  <p>Optionally, search for an intervention.</p>\n\n  <p>Tap your selected intervention in the list.</p>\n\n  <p>You will return to the Add an Intervention page.</p>\n\n  <p>Change the text of the intervention as you wish, filling in blanks as needed.</p>\n\n  <p>A discipline may have been suggested. Verify and select disciplines or enter others as needed.</p>\n\n  <p>Tap <span class=\'hilite\'>SAVE</span>.</p>\n\n  <h2>To copy a plan:</h2>\n\n  <p>On My Care Plans page, choose <span class=\'hilite\'>CREATE A NEW PLAN</span>. Name the new plan and choose <span\n\n      class=\'hilite\'>Copy One of My Plans</span>.</p>\n\n  <p>The button will be disabled until you type a name for the new plan. Your new name cannot be one you\'ve\n\n    used before.</p>\n\n  <p>Choose one of your plans from the <span class=\'hilite\'>Select</span> page.</p>\n\n  <p>On the preview page, choose <span class=\'hilite\'>Select All</span> or individually select outcomes or interventions\n\n    you want included.</p>\n\n  <p>Scroll down and tap <span class=\'hilite\'>SAVE</span> at the bottom of the screen.</p>\n\n  <h2>To delete a plan:</h2>\n\n  <p>On My Care Plans page, tap the name of the care plan to be deleted.</p>\n\n  <p>On Care Plan page, open the left side menu <ion-icon name=\'menu\'></ion-icon>.</p>\n\n  <p>Select <ion-icon name=\'trash\'></ion-icon> Delete this Plan</p>\n\n  <p>Confirm when prompted.</p>\n\n  <h2>To share a plan, or send it for use outside the application:</h2>\n\n  <p>On Care Plans page, tap the name of the care plan to be shared.</p>\n\n  <p>On Care Plan page, open the left side menu <ion-icon name=\'menu\'></ion-icon>.</p>\n\n  <p>Choose <ion-icon name=\'share\'></ion-icon> Share this Plan</p>\n\n  <p>On the textual Care Plan page, share by selecting the\n\n    <span class=\'hilite\'>\n\n      <ion-icon name=\'send\'></ion-icon>\n\n    </span> icon for email, the\n\n    <span class=\'hilite\'>\n\n      <ion-icon name=\'clipboard\'></ion-icon>\n\n    </span> icon to copy the plan to the clipboard for pasting elsewhere,\n\n    or the <span class=\'hilite\'>\n\n      <ion-icon name=\'paper\'></ion-icon>PDF\n\n    </span> icon.\n\n  </p>\n\n  <p>If you choose\n\n    <span class=\'hilite\'>\n\n      <ion-icon name=\'paper\'></ion-icon>PDF\n\n    </span>, your device should have a share option within your PDF viewer application.</p>\n\n  <br><br>\n\n  <button ion-button (click)=\'terms()\'>See the License Agreement</button>\n\n  <br>\n\n  <p class=\'aside\'>This is version 1.2.1.0.</p>\n\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_printer__["a" /* Printer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-goal/add-goal.module": [
		759,
		23
	],
	"../pages/add-intervention/add-intervention.module": [
		760,
		22
	],
	"../pages/add-plan/add-plan.module": [
		761,
		21
	],
	"../pages/add-problem/add-problem.module": [
		762,
		20
	],
	"../pages/careplan/careplan.module": [
		763,
		19
	],
	"../pages/contents/contents.module": [
		780,
		18
	],
	"../pages/edit-goal/edit-goal.module": [
		764,
		17
	],
	"../pages/edit-intervention/edit-intervention.module": [
		765,
		16
	],
	"../pages/edit-plan/edit-plan.module": [
		766,
		15
	],
	"../pages/edit-problem/edit-problem.module": [
		767,
		14
	],
	"../pages/help/help.module": [
		782,
		13
	],
	"../pages/login/login.module": [
		768,
		12
	],
	"../pages/lookup-plan/lookup-plan.module": [
		769,
		11
	],
	"../pages/lookup/lookup.module": [
		770,
		10
	],
	"../pages/plan-menu/plan-menu.module": [
		771,
		9
	],
	"../pages/preview/preview.module": [
		772,
		8
	],
	"../pages/sample-detail/sample-detail.module": [
		774,
		7
	],
	"../pages/sample/sample.module": [
		773,
		6
	],
	"../pages/subscribe/subscribe.module": [
		776,
		5
	],
	"../pages/subselect/subselect.module": [
		775,
		4
	],
	"../pages/terms/terms.module": [
		777,
		3
	],
	"../pages/text-plan/text-plan.module": [
		781,
		2
	],
	"../pages/topic-menu/topic-menu.module": [
		778,
		1
	],
	"../pages/welcome/welcome.module": [
		779,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 250;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_master_plans_master_plans__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_connection_connection__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subselect_subselect__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__terms_terms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welcome_welcome__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__careplan_careplan__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











// TODO this should use oauth, google, facebook, linkedin
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, events, loadCtrl, conn, MPP, PPP, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadCtrl = loadCtrl;
        this.conn = conn;
        this.MPP = MPP;
        this.PPP = PPP;
        this.auth = auth;
        this.userId = this.auth.user;
        console.log('Login constructor: user', this.userId);
        conn.checkConnection();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.pwd = ''; // ensure local pwd not retained from prior uses
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('loadComplete');
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.auth.user = this.userId.trim().toLowerCase();
                        this.auth.password = this.pwd;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auth.authenticate()];
                    case 2:
                        _a.sent();
                        if (this.auth.userLoggedIn) {
                            this.goToWork();
                        }
                        else {
                            // OR just stay here, make 'em go back on their own
                            // BUT they may want to choose subscribe, if log in failed
                            // AND might have failed bc expired
                            // goes back to wherever, which would be
                            // careplanpage or wecomepage
                            // this.navCtrl.pop();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        alert('UserId or Password not recognized');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.goToWork = function () {
        var _this = this;
        // this logic repeated in welcome.ts
        console.log('loading plans from login');
        var loading = this.loadCtrl.create({
            content: 'Getting your plans...'
        });
        loading.present();
        this.PPP.loadPlans();
        // cause we don't have async on loadPlans,
        this.events.subscribe('loadComplete', function (time) {
            console.log('got event loadComplete');
            try {
                loading.dismiss();
                _this.navCtrl.setPages([{ page: __WEBPACK_IMPORTED_MODULE_9__welcome_welcome__["a" /* WelcomePage */] }, { page: __WEBPACK_IMPORTED_MODULE_10__careplan_careplan__["a" /* CarePlanPage */] }]);
            }
            catch (err) {
                console.log('load timeout before complete');
            }
        });
        // insurance
        setTimeout(function () {
            try {
                loading.dismiss();
                _this.navCtrl.setPages([{ page: __WEBPACK_IMPORTED_MODULE_9__welcome_welcome__["a" /* WelcomePage */] }, { page: __WEBPACK_IMPORTED_MODULE_10__careplan_careplan__["a" /* CarePlanPage */] }]);
            }
            catch (err) {
                console.log('load complete before timeout');
            }
        }, 5000);
    };
    LoginPage.prototype.subscribe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__subselect_subselect__["a" /* SubselectPage */]);
    };
    LoginPage.prototype.workOffline = function () {
        // proceed without signing in
        // reset the stack, so that "back" goes to welcome instead of login
        this.auth.userLoggedIn = false;
        this.navCtrl.setPages([{ page: __WEBPACK_IMPORTED_MODULE_9__welcome_welcome__["a" /* WelcomePage */] }, { page: __WEBPACK_IMPORTED_MODULE_10__careplan_careplan__["a" /* CarePlanPage */] }]);
    };
    LoginPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__help_help__["a" /* HelpPage */]);
    };
    LoginPage.prototype.showTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__terms_terms__["a" /* TermsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Log In to Red Book</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="help()">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>User ID</ion-label>\n    <ion-input [(ngModel)]="userId"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="pwd"></ion-input>\n  </ion-item>\n  <ion-item no-lines *ngIf="!conn.internet">\n    <div>No internet connection? Could not connect to Red Book cloud.</div>\n  </ion-item>\n  <ion-item no-lines *ngIf="conn.internet">\n    <button ion-button [disabled]="!(pwd && userId)" (click)="login()">LOG IN</button><br>\n    <div>Log in to your Red Book account.</div>\n  </ion-item>\n  <br><br>\n  <div>Don\'t have a Red Book id yet?</div>\n  <ion-item no-lines *ngIf="conn.internet && !auth.userLoggedIn">\n    <button ion-button (click)="subscribe()">SUBSCRIBE</button><br>\n    <div>Subscribe to use the Red Book content in your care plans.</div>\n  </ion-item>\n  <ion-item>\n    <br><br>\n    <button ion-button (click)="workOffline()">WORK OFFLINE</button>\n    <br>\n    <div>Work Offline to work on plans on your device only, without saving to the cloud. If you have a subscription,\n      your changes will be synced to the cloud when you log in again.</div>\n  </ion-item>\n  <br>\n  <ion-item>\n    <div>\n    <p>This Application is protected by copyright and you may use this Application only as provided in the complete\n      <span (click)="showTerms()" style="text-decoration: underline">End User License Agreement (EULA)</span>. </p>\n    <p>Application is intended for use ONLY by professional and qualified health care or wellness providers duly\n      licensed in accordance with their jurisdictional requirements (Qualified Healthcare Professionals) and by accessing this\n      Application you warrant that you are a Qualified Healthcare Professional. </p>\n    <p>Users are solely and exclusively responsible for compliance with all applicable laws and are expressly\n      prohibited from accessing, transmitting, saving, or otherwise using the Application in violation of any applicable\n      healthcare or patient privacy laws, rules or regulations.</p>\n    <p>By purchasing or using this Application, you warrant that you are a Qualified Healthcare Professional and that\n      you have read and agreed to the EULA.</p>\n</div>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_master_plans_master_plans__["a" /* MasterPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(401);

// import { enableProdMode } from '@angular/core';

// enableProdMode();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPlansProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cpapi_cpapi__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache_cache__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MASTER_KEY = 'my first thought was he lied in every word'; // from childe rowland to the dark tower came, browning, 1855
// master-plans uses this key for encryption in common for any/all users
var MasterPlansProvider = /** @class */ (function () {
    function MasterPlansProvider(cpapi, auth, cache) {
        this.cpapi = cpapi;
        this.auth = auth;
        this.cache = cache;
        // used to pass selections from lookup pages
        this._listSelection = "";
        console.log('Constructor MasterPlansProvider Provider');
    }
    Object.defineProperty(MasterPlansProvider.prototype, "listSelection", {
        get: function () {
            // const ls = this._listSelection;
            // this._listSelection = "";
            return this._listSelection;
        },
        set: function (v) {
            this._listSelection = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MasterPlansProvider.prototype, "previewSelection", {
        get: function () {
            // const ls = this._listSelection;
            // this._listSelection = "";
            return this._previewSelection;
        },
        set: function (v) {
            this._previewSelection = v;
        },
        enumerable: true,
        configurable: true
    });
    MasterPlansProvider.prototype.getMaster = function (type, filter) {
        // **************** for debugging
        // this.cache.remove(type);
        // **************** for debugging
        var _this = this;
        if (this.auth.userLoggedIn) {
            return new Promise(function (resolve) {
                // check cache first
                _this.cache.read(type, MASTER_KEY, filter)
                    .then(function (data) { return resolve(data); })
                    .catch(function () {
                    // not in cache, read from cpi
                    var path = _this.cpapi.apiURL + "master/" + type;
                    if (filter) {
                        path = path + "?f=" + filter;
                    }
                    _this.cpapi.getData(path)
                        .then(function (data) {
                        _this.cache.write(type, MASTER_KEY, data);
                        resolve(data);
                    });
                });
            });
        }
    };
    MasterPlansProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cpapi_cpapi__["a" /* CPAPI */],
            __WEBPACK_IMPORTED_MODULE_1__authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__cache_cache__["a" /* CacheProvider */]])
    ], MasterPlansProvider);
    return MasterPlansProvider;
}());

//# sourceMappingURL=master-plans.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_document_viewer__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_purchase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_printer__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_dragula__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_master_plans_master_plans__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_cpapi_cpapi__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_local_store_local_store__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_cache_cache__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_connection_connection__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_welcome_welcome__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_careplan_careplan__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_edit_plan_edit_plan__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_contents_contents__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_add_plan_add_plan__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_add_problem_add_problem__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_add_goal_add_goal__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_add_intervention_add_intervention__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_edit_problem_edit_problem__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_edit_goal_edit_goal__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_edit_intervention_edit_intervention__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_lookup_lookup__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_lookup_plan_lookup_plan__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_subscribe_subscribe__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_text_plan_text_plan__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_subselect_subselect__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_preview_preview__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_plan_menu_plan_menu__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_topic_menu_topic_menu__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_sample_sample__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_sample_detail_sample_detail__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_24__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_careplan_careplan__["a" /* CarePlanPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_contents_contents__["a" /* ContentsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_add_plan_add_plan__["a" /* AddPlanPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_add_problem_add_problem__["a" /* AddProblemPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_add_goal_add_goal__["a" /* AddGoalPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_add_intervention_add_intervention__["a" /* AddInterventionPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_lookup_lookup__["a" /* LookupPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_lookup_plan_lookup_plan__["a" /* LookupPlanPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_edit_plan_edit_plan__["a" /* EditPlanPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_edit_problem_edit_problem__["a" /* EditProblemPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_edit_goal_edit_goal__["a" /* EditGoalPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_edit_intervention_edit_intervention__["a" /* EditInterventionPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_text_plan_text_plan__["a" /* TextPlanPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_subscribe_subscribe__["a" /* SubscribePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_subselect_subselect__["a" /* SubselectPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_preview_preview__["a" /* PreviewPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_plan_menu_plan_menu__["a" /* PlanMenuPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_topic_menu_topic_menu__["a" /* TopicMenuPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_sample_sample__["a" /* SamplePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_sample_detail_sample_detail__["a" /* SampleDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {
                    pageTransition: "ios-transition"
                }, {
                    links: [
                        { loadChildren: '../pages/add-goal/add-goal.module#AddGoalPageModule', name: 'AddGoalPage', segment: 'add-goal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-intervention/add-intervention.module#AddInterventionPageModule', name: 'AddInterventionPage', segment: 'add-intervention', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-plan/add-plan.module#AddPlanPageModule', name: 'AddPlanPage', segment: 'add-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-problem/add-problem.module#AddProblemPageModule', name: 'AddProblemPage', segment: 'add-problem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/careplan/careplan.module#CarePlanPageModule', name: 'CarePlanPage', segment: 'careplan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-goal/edit-goal.module#EditGoalPageModule', name: 'EditGoalPage', segment: 'edit-goal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-intervention/edit-intervention.module#EditInterventionPageModule', name: 'EditInterventionPage', segment: 'edit-intervention', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-plan/edit-plan.module#EditPlanPageModule', name: 'EditPlanPage', segment: 'edit-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-problem/edit-problem.module#EditProblemPageModule', name: 'EditProblemPage', segment: 'edit-problem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lookup-plan/lookup-plan.module#LookupPlanPageModule', name: 'LookupPlanPage', segment: 'lookup-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lookup/lookup.module#LookupPageModule', name: 'LookupPage', segment: 'lookup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan-menu/plan-menu.module#PlanMenuPageModule', name: 'PlanMenuPage', segment: 'plan-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preview/preview.module#PreviewPageModule', name: 'PreviewPage', segment: 'preview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sample/sample.module#SamplePageModule', name: 'SamplePage', segment: 'sample', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sample-detail/sample-detail.module#SampleDetailPageModule', name: 'SampleDetailPage', segment: 'sample-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subselect/subselect.module#SubselectPageModule', name: 'SubselectPage', segment: 'subselect', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscribe/subscribe.module#SubscribePageModule', name: 'SubscribePage', segment: 'subscribe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topic-menu/topic-menu.module#TopicMenuPageModule', name: 'TopicMenuPage', segment: 'topic-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contents/contents.module#ContentsPageModule', name: 'ContentsPage', segment: 'contents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/text-plan/text-plan.module#TextPlanPageModule', name: 'TextPlanPage', segment: 'text-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ng2_dragula__["a" /* DragulaModule */].forRoot() // ngDragula documentation says this way
                // DragulaModule // example at devdactic says this way--prolly cause example single page
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_24__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_careplan_careplan__["a" /* CarePlanPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_contents_contents__["a" /* ContentsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_add_plan_add_plan__["a" /* AddPlanPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_add_problem_add_problem__["a" /* AddProblemPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_add_goal_add_goal__["a" /* AddGoalPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_add_intervention_add_intervention__["a" /* AddInterventionPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_lookup_lookup__["a" /* LookupPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_lookup_plan_lookup_plan__["a" /* LookupPlanPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_edit_plan_edit_plan__["a" /* EditPlanPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_edit_problem_edit_problem__["a" /* EditProblemPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_edit_goal_edit_goal__["a" /* EditGoalPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_edit_intervention_edit_intervention__["a" /* EditInterventionPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_text_plan_text_plan__["a" /* TextPlanPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_subscribe_subscribe__["a" /* SubscribePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_subselect_subselect__["a" /* SubselectPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_preview_preview__["a" /* PreviewPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_plan_menu_plan_menu__["a" /* PlanMenuPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_topic_menu_topic_menu__["a" /* TopicMenuPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_sample_sample__["a" /* SamplePage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_sample_detail_sample_detail__["a" /* SampleDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__providers_authentication_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_cpapi_cpapi__["a" /* CPAPI */],
                __WEBPACK_IMPORTED_MODULE_21__providers_local_store_local_store__["a" /* LocalStoreProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_master_plans_master_plans__["a" /* MasterPlansProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_connection_connection__["a" /* ConnectionProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_cache_cache__["a" /* CacheProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_printer__["a" /* Printer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */]
                // Storage,
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__careplan_careplan__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_connection_connection__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__terms_terms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sample_sample__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__subselect_subselect__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { InAppBrowserOriginal } from '@ionic-native/in-app-browser';
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, events, loadCtrl, alertCtrl, 
        // private iab: InAppBrowserOriginal,
        auth, conn, PPP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.conn = conn;
        this.PPP = PPP;
        this.acceptedTerms = false;
        this.onLine = false;
        console.log('Constructor Welcome');
        conn.checkConnection();
        auth.readAuthState();
        if (this.auth.firstTime) {
            this.auth.authenticate()
                .then(function (r) { _this.auth.firstTime = false; });
        }
    }
    WelcomePage_1 = WelcomePage;
    WelcomePage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe('loadComplete');
    };
    WelcomePage.prototype.workOnline = function () {
        var _this = this;
        console.log('welcome workOnline');
        // this logic repeated in login.ts
        // console.log('loading plans from welcome');
        var loading = this.loadCtrl.create({
            content: 'Getting your plans...'
        });
        loading.present();
        this.PPP.loadPlans();
        // cause we don't have async on loadPlans,
        this.events.subscribe('loadComplete', function (time) {
            // console.log('got event loadComplete');
            try {
                loading.dismiss();
                _this.navCtrl.setPages([{ page: WelcomePage_1 }, { page: __WEBPACK_IMPORTED_MODULE_4__careplan_careplan__["a" /* CarePlanPage */] }]);
            }
            catch (err) {
                console.log('load timeout before complete');
            }
        });
        // insurance
        setTimeout(function () {
            // console.log('in timer');
            try {
                loading.dismiss();
                _this.navCtrl.setPages([{ page: WelcomePage_1 }, { page: __WEBPACK_IMPORTED_MODULE_4__careplan_careplan__["a" /* CarePlanPage */] }]);
            }
            catch (err) {
                console.log('load complete before timeout');
            }
        }, 5000);
    };
    WelcomePage.prototype.workOffline = function () {
        console.log('welcome workOffline');
        // set userLoggedIn=false, causes reading local plans only (in PPP.loadPlans) 
        this.auth.userLoggedIn = false;
        this.workOnline();
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    WelcomePage.prototype.subscribe = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__subselect_subselect__["a" /* SubselectPage */]);
    };
    WelcomePage.prototype.previewStd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__sample_sample__["a" /* SamplePage */]);
    };
    WelcomePage.prototype.showTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__terms_terms__["a" /* TermsPage */]);
    };
    WelcomePage = WelcomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/welcome/welcome.html"*/'<ion-header>\n\n\n\n  <ion-navbar class="navbarStyle" color="primary">\n\n    <ion-title><em>welcome to</em></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="welcome">\n\n\n\n  <div text-center>\n\n    <h2><em>Tina Marrelli\'s</em></h2>\n\n    <img src="assets/imgs/TMFun600.png" class="logo" />\n\n    <h1>Red Book Hospice Care Planning</h1>\n\n    <h5>Copyright ©2019 Marrelli and Associates, Inc.</h5>\n\n  </div>\n\n  <br>\n\n  <div text-center>\n\n    <h2 *ngIf="conn.internet && auth.userLoggedIn">Welcome Back! You\'re logged in as {{auth.user}}.</h2>\n\n  </div>\n\n  <div text-center>\n\n    <button ion-button *ngIf="conn.internet && auth.userLoggedIn" (click)="workOnline()">\n\n      CONTINUE\n\n    </button>\n\n    <button ion-button *ngIf="conn.internet && !auth.userLoggedIn" (click)="login()">\n\n      LOG IN\n\n    </button>\n\n    <button ion-button *ngIf="conn.internet && auth.userLoggedIn" (click)="logout()">\n\n      LOG OUT\n\n    </button>\n\n    <h3 *ngIf="!conn.internet">No internet connection? Could not connect to Red Book cloud.</h3>\n\n    <button ion-button (click)="workOffline()">\n\n      WORK OFFLINE\n\n    </button>\n\n    <h2 class="underline" (click)="subscribe()">Not a subscriber? Subscribe now</h2>\n\n    <h2>\n\n      <a style="color: white;" href="#"\n\n      onclick="window.open(\'https://marrelli.com/app-support/video/\', \'_blank\', \'location=no\'); return false;">Watch a\n\n      HOW-TO Video</a>\n\n    </h2>\n\n    <h2 class="underline" (click)="previewStd()">Preview Red Book Standard Plans</h2>\n\n    <br>\n\n    <h4 (click)="showTerms()">Using the app indicates you accept the <span class="underline">License Agreement.</span>\n\n    </h4>\n\n  </div>\n\n  <p style="color: white; font-size: xx-small; text-align: center">v1.2.1.0</p>\n\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], WelcomePage);
    return WelcomePage;
    var WelcomePage_1;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.accept = function () {
        alert('accepted');
        // save this somewhere
        this.navCtrl.pop();
    };
    TermsPage.prototype.decline = function () {
        alert('declined');
        // kick 'em out
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/terms/terms.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Terms and Conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <h1>End User License Agreement</h1>\n<p><span style="text-decoration: underline;">Agreement.</span> Marrelli & Associates, Inc. (Marrelli) and you (User)\n  acknowledge this End User License Agreement (Agreement) is executed between Marrelli and User. The Agreement is not\n  with Apple. Marrelli, not Apple, is solely responsible for the mobile application, including all content therein\n  (together, Application).</p>\n<p><span style="text-decoration: underline;">Professional Users</span>. The Application provides guidance for\n  developing care plans (Care Plans) for persons with illness or other conditions requiring or benefitting from care by\n  professional health or wellness providers. Marrelli intends that the Application be used ONLY by professional and\n  qualified health care or wellness providers duly licensed for such services consistent with the laws and regulations\n  of the jurisdiction in which used (Qualified Healthcare Professionals). By downloading, User warrants that he/she is\n  a Qualified Healthcare Professional. </p>\n<p>Because every patient’s needs are different, caregiving should be professionally tailored to each patient’s\n  condition. Users, not Marrelli and not Apple, are solely responsible for determining the composition,\n  appropriateness, and application of materials prepared with this Application. Materials provided by Marrelli are\n  based on various conditions and should be included in Care Plans only where in the sole professional judgment of the\n  qualified User such materials are appropriate and beneficial to the person(s) for whom the Care Plans are prepared.\n</p>\n<p>Although every reasonable effort has been made to provide current and accurate information, no guide can address\n  every situation or anticipate advances in research and methods. Because caregiving is undergoing continual change,\n  the information in this Application is subject to change, and Users are advised to remain updated on industry or\n  other changes. Any claims, losses, liabilities, damages, costs or expenses alleged or attributed through legal\n  process that result from application of Care Plans prepared with the Application shall be the sole responsibility of\n  the User.</p>\n<p><span style="text-decoration: underline;">Regulatory Compliance</span>. Users are solely and exclusively responsible\n  for compliance with all applicable laws and are expressly prohibited from accessing, transmitting, saving, or\n  otherwise using the Application or any Content in violation of any applicable healthcare or patient privacy laws,\n  rules or regulations.</p>\n<p><span style="text-decoration: underline;">License</span>. You, the User, are granted a non-transferrable license to\n  download, install and use (a) the Red Book Hospice Care Planning mobile application (the Application) in perpetuity,\n  and (b) if applicable, any Premium Content (below), for the specified term of the subscription, all strictly in\n  accordance with this Agreement.</p>\n<p><span style="text-decoration: underline;">Devices</span>. The User\'s non-transferable license to use the Application\n  extends to any Apple-branded product that the User owns or controls, including Apple accounts the user owns or those\n  other accounts associated with the User via Family Sharing or volume purchasing.</p>\n<p><span style="text-decoration: underline;">Prohibited Use</span>. User agrees not to use or encourage others to use\n  the Application in a way that could harm or impair others’ use of the Application.</p>\n<p><span style="text-decoration: underline;">Subscription to Premium Content</span>. User may choose to subscribe to\n  "red book" master content published in "Handbook of Home Health Standards: Quality, Documentation, and Reimbursement,\n  6th Edition," Chapter 4, "Hospice" (Premium Content) through an In-App Purchase in the Application.</p>\n  <p>If User is subscribed to Premium Content, and for as long as such subscription is maintained in good standing:</p>\n<p style="padding-left: 40px;">User may search and retrieve conditions, care topics, outcomes, and interventions from\n  the Premium Content and may use Premium Content in composing Care Plans for User\'s individual use, either personally\n  or while providing care in a professional capacity.</p>\n<p style="padding-left: 40px;">User may not distribute Care Plans, or partial Care Plans, to another provider or\n  providers, for example, to other providers in the agency by whom User is employed, unless such other provider is a\n  subscriber of Premium Content in good standing. This means User may create his/her own Care Plans but may not create\n  Care Plans on behalf of another provider unless such other provider is also a subscriber.</p>\n<p style="padding-left: 40px;">If User’s subscription lapses or ends, User may no longer distribute any Care Plans\n  containing Premium Content or use any Premium Content composing any new Care Plans. However, User may continue to\n  use, but not distribute, those Care Plans composed prior to the lapse or end of user’s subscription.</p>\n<p><span style="text-decoration: underline;">Ownership</span>. All Content (including Premium Content) is protected by\n  copyright law. User is strictly prohibited from publishing, selling, reproducing, recording, transmitting,\n  displaying, producing or creating derivative works or other materials from, transferring or otherwise using any\n  Content, in whole or in part, and whether or not for commercial gain, except as expressly permitted herein. </p>\n<p><span style="text-decoration: underline;">Privacy</span>. In order to operate and provide the Application, Marrelli\n  may collect certain information from you. Marrelli uses and protects that information in accordance with its Privacy\n  Notice, currently posted at https://marrelli.com/privacy-policy/.</p>\n<p><span style="text-decoration: underline;">Limited Maintenance and Support</span>. Application is provided without\n  maintenance or support, except that Marrelli may, in its sole discretion, provide product updates. Marrelli is solely\n  responsible for any maintenance and support of the Application provided hereunder or required by law. Apple has no\n  obligation to furnish maintenance or support services with respect to this Application.</p>\n<p><span style="text-decoration: underline;">NO WARRANTY</span>. YOUR USE OF THE APPLICATION IS AT YOUR SOLE RISK. THE\n  APPLICATION IS PROVIDED “AS IS” and “AS AVAILABLE” BASIS. MARRELLI EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND,\n  WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF SUITABILITY, MERCHANTABILITY, FITNESS FOR A\n  PARTICULAR PURPOSE, NON-INFRINGEMENT, AND REGULATORY OR LICENSURE COMPLIANCE, EXCEPT WHERE PROHIBITED BY LAW. </p>\n<p>MARRELLI DOES NOT WARRANT THAT THE APPLICATION WILL MEET USER’S REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, WILL BE\n  ERROR FREE, OR WILL BE APPROPRIATE FOR USE IN ANY JURISDICTION IN WHICH USER IS LICENSED OR PROVIDES CARE OR UNDER\n  PROFESSIONAL REGULATIONS OR RULES APPLICABLE TO USER OR THAT ANY INCLUDED OR LINKED URLS OR THIRD-PARTY CONTENT OR\n  WEBSITES ARE ACCURATE OR CONSISTENT OR UP-TO-DATE. USER IS SOLELY AND EXCLUSIVELY RESPONSIBLE FOR DETERMINING WHETHER\n  HIS/HER USE OF THE APPLICATION COMPLIES WITH ALL RULES, REGULATIONS, STATUTES, LAWS OR OTHER REQUIREMENTS APPLICABLE\n  TO USER AS A QUALIFIED HEALTHCARE PROFESSIONAL OR OTHERWISE. Some jurisdictions do not allow the disclaimer of\n  certain warranties, so all or part of the above limitation may not apply. No warranties may be created or extended by\n  sales representatives or written sales materials.</p>\n<p>In the event that the Application should fail to conform to any applicable warranty, the User may notify Apple, and\n  Apple will refund the purchase price for the Application to that User. To the maximum extent permitted by applicable\n  law, Apple will have no other warranty obligation whatsoever with respect to the Application, and Marrelli is\n  responsible for addressing any other claims, losses, liabilities, damages, costs or expenses attributable to any such\n  failure by legal due process.</p>\n<p><span style="text-decoration: underline;">Product Claims</span>. Marrelli, not Apple, is responsible for addressing\n  any claims that the User or any third-party relating to the Application or the User\'s possession and/or use of the\n  Application, including, but not limited to (a) product liability claims, (b) any claim that the Application fails to\n  conform to any applicable legal or regulatory requirement, and (iii) claims arising under consumer protection,\n  privacy, or similar legislation, including in connection with the Application\'s use (if any) of the HealthKit and\n  HomeKit frameworks.</p>\n<p><span style="text-decoration: underline;">Intellectual Property Rights</span>. Marrelli and User acknowledge that,\n  in the event of any third party claim that the Application or the User\'s possession and use of the Application\n  infringes upon that third party\'s intellectual property rights; Marrelli, not Apple, will be solely responsible for\n  investigating, defending, settling and/or discharging any such intellectual property infringement claim.</p>\n<p><span style="text-decoration: underline;">Legal Compliance</span>. User represents and warrants that (a) he/she is\n  not located in a country that is subject to a US Government embargo, or that has been designated by the US Government\n  as a "terrorist supporting" country; and (b) he/she is not listed on any US Government list of prohibited or\n  restricted parties.</p>\n<p><span style="text-decoration: underline;">Third Party Terms of Agreement</span>. User must comply with any\n  applicable third party terms of agreement when using the Application; for example, terms governing your Internet\n  access, use of public Wi-Fi, VOIP applications, printing services, or any other service with or through which you\n  access the Application.</p>\n<p><span style="text-decoration: underline;">Third Party Beneficiary</span>. Marrelli and User acknowledge and agree\n  that Apple, and Apple\'s subsidiaries, are third party beneficiaries of this agreement. Upon acceptance, Marrelli and\n  User agree that Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement\n  against the User as a third party beneficiary thereof.</p>\n<p><span style="text-decoration: underline;">Acknowledgement and Agreement</span>: By purchasing, downloading and/or\n  using the Application, User expressly warrants that he/she is a Qualified Healthcare Professional and he/she has read\n  and agreed to the terms of this Agreement. </p>\n\n<p>© 2018 Marrelli & Associates, Inc. All rights reserved.</p>\n\n  </ion-item>\n  <!-- <button ion-button (click)="accept()">I Accept</button>\n  <button ion-button (click)="decline()">I Decline</button> -->\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubselectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// import { AuthenticationProvider } from '../../providers/authentication/authentication';





var SubselectPage = /** @class */ (function () {
    function SubselectPage(navCtrl, navParams, auth, loadCtrl, alertCtrl, plt, iap) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.iap = iap;
        this.success = false;
        // this.auth.reportState('constructor subselect');
        if (this.plt.is('cordova')) {
            this.initStore();
        }
        else {
            this.mockInitStore();
        }
    }
    SubselectPage.prototype.mockInitStore = function () {
        console.log('mockInitStore');
        alert('mockInitStore');
        this.products = [
            {
                title: 'cp3submonthly',
                price: 5.99
            }
        ];
        // ios
        // this.products = [
        //   {
        //     title: 'CP3SubMonthly',
        //     price: 5.99
        //   }
        // ]
    };
    SubselectPage.prototype.initStore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.iap.getProducts(['CP3SubMonthly', 'cp3submonthly'])];
                    case 1:
                        _a.products = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log('store error', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SubselectPage.prototype.subscribe = function (p, rs) {
        var _this = this;
        // check:
        // can make payments--if not, don't show the subscribe at all
        if (this.plt.is('cordova')) {
            var loading_1 = this.loadCtrl.create({
                content: 'Purchasing subscription...'
            });
            loading_1.present();
            // alert(p.productId);  // debug on device
            this.iap.subscribe(p.productId)
                .then(function (data) {
                // TODO?  may need to "consume" purchase on android
                // return iap.consume(data.productType, data.receipt, data.signature);
                loading_1.dismiss();
                console.log('subscribe success', data);
                _this.success = true;
                var prompt = _this.alertCtrl.create({
                    title: (rs == 'subscribe') ? 'Subscribed!' : 'Renewed!',
                    message: 'Welcome to the Red Book.',
                    buttons: [{ text: "Continue", role: 'cancel' }]
                });
                prompt.present()
                    .then(function () {
                    if (rs === 'subscribe') {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__["a" /* SubscribePage */], { id: p.productId });
                    }
                    else {
                        // authenticate, go to plans page
                        // authenticate includes reconcileSubscription 
                        //  which will resolve newly-renewed sub
                        _this.auth.authenticate().then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
                        });
                    }
                });
            })
                .catch(function (err) {
                loading_1.dismiss();
                _this.success = false;
                console.log('subscribe error', err);
                if (err.code == -6) {
                    alert(err.text);
                }
                var prompt = _this.alertCtrl.create({
                    title: 'Store Error',
                    message: 'Unable to complete purchase.',
                    buttons: [{ text: "Continue", role: 'cancel' }]
                });
                prompt.present()
                    .then(function () {
                    // go back to where we came from
                    _this.navCtrl.pop();
                });
            });
        }
        else {
            // redirect to the web store, someday?
            var prompt_1 = this.alertCtrl.create({
                title: 'Sorry',
                message: 'You may only subscribe from a mobile device.',
                buttons: [{ text: "Continue", role: 'cancel' }]
            });
            prompt_1.present()
                .then(function () {
                // go back to where we came from
                _this.navCtrl.pop();
            });
        }
        // }
        // MOCK =====================================
        // for testing on browser
        // let loading = this.loadCtrl.create({
        //   content: 'Purchasing subscription...'
        // });
        // loading.present();
        // loading.dismiss();
        // console.log('subscribe success');
        // this.success = true;
        // let prompt = this.alertCtrl.create({
        //   title: (rs == 'subscribed') ? 'Subscribed!' : 'Renewed!',
        //   message: 'Welcome to the Red Book.',
        //   buttons: [{ text: "Continue", role: 'cancel' }]
        // });
        // prompt.present()
        //   .then(() => {
        //     if (rs === 'subscribe') {
        //       this.navCtrl.push(SubscribePage, { id: p.productId });
        //     } else { // ==='renew'
        //       // authenticate, go to plans page
        //       // authenticate includes reconcileSubscription 
        //       //  which will resolve newly-renewed sub
        //       this.auth.authenticate().then(() => {
        //         this.navCtrl.setRoot(WelcomePage);
        //       });
        //     }
        //   });
        // MOCK =====================================
        // }
    };
    // test() {
    //   // if (this.plt.is('browser')) {
    //   this.navCtrl.push(SubscribePage, { id: 'CP3SubMonthly' });
    //   // }
    // }
    SubselectPage.prototype.cancelEdit = function () {
        this.navCtrl.pop();
    };
    SubselectPage.prototype.seeTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* TermsPage */]);
    };
    SubselectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subselect',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/subselect/subselect.html"*/'<ion-header>\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Subscribe</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="auth.userLoggedIn && auth.subState==\'current\'">\n    <ion-item no-lines>\n      <h1>You\'re already subscribed, logged in, and ready to go.</h1>\n    </ion-item>\n  </div>\n  <ion-item no-lines *ngIf="auth.subState==\'expired\'">\n    <h1>Your subscription has expired. Choose \'Renew\' to re-subscribe with your existing user ID.</h1>\n  </ion-item>\n  <ion-item no-lines *ngIf="(!auth.userLoggedIn) && (auth.subState!=\'current\') && (auth.subState!=\'expired\')">\n    <h1>Subscribe to use Red Book Care Plan content.</h1>\n  </ion-item>\n  <ion-item no-lines *ngIf="!auth.userLoggedIn">\n    <div ion-item no-lines *ngFor="let p of products" class="hilite">\n      <div>{{p.title}} {{p.price}}\n        <button ion-button *ngIf="(!auth.userLoggedIn) && (auth.subState!=\'current\') && (auth.subState!=\'expired\')" (click)="subscribe(p, \'subscribe\')">Purchase</button>\n        <button ion-button *ngIf="auth.subState==\'expired\'" (click)="subscribe(p, \'renew\')">Renew</button>\n      </div>\n    </div>\n  </ion-item>\n  <div *ngIf="!auth.userLoggedIn">\n    <ion-item no-lines>\n      <h3 class="hilite">Subscribing is a <em>two-step</em> process:</h3>\n    </ion-item>\n    <ion-item no-lines>\n      <div>\n        <span class="hilite">1)</span> After tapping <span class="hilite">Purchase</span> you will confirm with the\n        Store.\n      </div>\n    </ion-item>\n    <ion-item no-lines>\n      <div><span class="hilite">2)</span> Then, after a successful purchase, you\'ll <span class="hilite">set up your\n          subscriber information</span> with the Red Book.</div>\n      <!-- <div><span class="hilite">2)</span> Then, after a successful purchase, you\'ll <span class="hilite">set up your\n          subscriber information</span> with the Red Book, including a unique user ID, a password, and your personal encryption key for securing\n          your plans in the cloud.</div> -->\n    </ion-item>\n  </div>\n  <br>\n  <ion-item no-lines>\n    <div>\n      Subscribing gives you access to content to use in your own care\n      planning.</div>\n    <ul>\n      <li>High Quality</li>\n      <li>Evidence-based</li>\n      <li>Practice Validated</li>\n    </ul>\n    <div>\n      Includes\n    </div>\n    <ul>\n      <li><em>Complete Model Care Plans</em> for you to adapt</li>\n      <li>Care Topics</li>\n      <li>Outcomes</li>\n      <li>Interventions</li>\n      <li>All Disciplines</li>\n    </ul>\n    <div>\n      Content provided with the subscription comes from the\n      "Handbook of Home Health Standards, 6th Edition" written by Tina M. Marrelli, the "Red Book."</div>\n    <br>\n    <div>The content is offered as a subscription service.\n      <ul>\n        <li>The subscription option is called "Hospice Monthly"</li>\n        <!-- <li>The purpose of the subscription is to provide access to professional care plan content.</li> -->\n        <li>The price for monthly subscription is $5.99 US per month.</li>\n        <li>When you confirm your purchase, payment will be charged to your iTunes Account.</li>\n        <li>The subscription renews automatically for the selected term (monthly), unless you cancel it.</li>\n        <li>You cancel by turning off auto-renew in your iTunes "Manage Your Subscriptions." (In Settings->iTunes & App\n          Store.)</li>\n        <li>You\'ll have to cancel at least 24 hours before the end of the current period.</li>\n        <li>Payment for each period\'s automatic renewal is also charged to your iTunes Account.</li>\n        <li>The price of renewal each period is the same as the initial period. That is, $5.99 when you subscribed\n          monthly.</li>\n        <li>If at any time a free trial period is offered, any unused portion of the free trial period is forfeited\n          if/when you purchase a subscription.</li>\n      </ul>\n      <p>You may see the end-user license agreement <span style="color: red" (click)="seeTerms()">here</span> within the\n        application, or <a href="https://marrelli.com/cpeula/apple">here</a> on the web.</p>\n      <p>You may see our privacy policy <a href="https://marrelli.com/privacy-policy/">here</a> on the web.</p>\n    </div>\n  </ion-item>\n  <br>\n\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/subselect/subselect.html"*/,
        })
        // subselect comes first where purchase is done; 
        // then comes subscribe, where account is set up
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__["a" /* InAppPurchase */]])
    ], SubselectPage);
    return SubselectPage;
}());

//# sourceMappingURL=subselect.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CPAPI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
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


var CPAPI = /** @class */ (function () {
    function CPAPI(http) {
        this.http = http;
        this.apiURL = 'http://api.cpmez.com:22000/CarePlan/';
        // local apiURL = 'http://127.0.0.1:22000/CarePlan/';
        // elastice ip apiURL = 'http://ec2-34-195-4-230.compute-1.amazonaws.com:22000/CarePlan/';
        // no longer valid ip apiURL = 'http://34.229.7.109:22000/CarePlan/';
        // old instance apiURL = 'http://ec2-34-229-7-109.compute-1.amazonaws.com:22000/CarePlan/';
        this.MASTER_KEY = "Half a league, half a league, Half a league onward,";
        console.log('Constructor CPAPI Provider');
    }
    // first 2 lines of charge of the light brigade
    CPAPI.prototype.getData = function (type) {
        var _this = this;
        console.log('getData', type);
        return new Promise(function (resolve, reject) {
            _this.http.get(type)
                .timeout(7100)
                .subscribe(function (data) { return resolve(JSON.stringify(data)); }, function (err) { return reject(err); });
        });
    };
    CPAPI = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CPAPI);
    return CPAPI;
}());

//# sourceMappingURL=cpapi.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_welcome_welcome__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, splashScreen) {
        var _this = this;
        platform.ready().then(function () {
            console.log('platform ready');
            if (platform.is('cordova')) {
                console.log('cordova');
            }
            _this.timer = setTimeout(function () {
                if (platform.is('cordova')) {
                    // for ios quirks
                    splashScreen.hide();
                }
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_welcome_welcome__["a" /* WelcomePage */];
            }, 2000);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_master_plans_master_plans__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LookupPage = /** @class */ (function () {
    function LookupPage(navCtrl, lc, navParams, MPP) {
        this.navCtrl = navCtrl;
        this.lc = lc;
        this.navParams = navParams;
        this.MPP = MPP;
        this.types = this.navParams.get('types');
        this.type = this.navParams.get('type');
        this.searchTerm = this.navParams.get('searchTerm');
        this.searchName = this.navParams.get('searchName');
        this.planName = this.navParams.get('planName');
        this.item = this.navParams.get('item');
    }
    LookupPage.prototype.ionViewDidEnter = function () {
        this.getList();
    };
    LookupPage.prototype.getList = function () {
        var _this = this;
        // wait indicator
        var loading = this.lc.create({
            content: 'Getting the list...'
        });
        loading.present();
        this.MPP.getMaster(this.types, this.searchTerm)
            .then(function (data) {
            loading.dismiss();
            var d = JSON.parse(data);
            _this.itemsList = d[_this.types];
        });
    };
    LookupPage.prototype.choose = function (which) {
        this.MPP.listSelection = which;
        this.navCtrl.pop();
    };
    LookupPage.prototype.presentLoadingDefault = function () {
        var loading = this.lc.create({
            content: 'Getting the list...'
        });
        loading.present();
        // setTimeout(() => {
        //   loading.dismiss();
        // }, 5000);
    };
    LookupPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */]);
    };
    LookupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lookup',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/lookup/lookup.html"*/'<ion-header>\n\n  <ion-navbar class="navbarStyle" color="primary">\n    <ion-title>Select {{searchName}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="help()">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p class="helpful">Searching the Red Book for {{searchName}}\n    to be added to {{planName}}\n  </p>\n  <br>\n  <ion-toolbar color=primary>\n    <ion-searchbar class="search" [(ngModel)]="searchTerm" debounce=1000 placeholder="Search" (ionInput)="getList()">\n    </ion-searchbar>\n  </ion-toolbar>\n  <!-- <button class="search" (click)="getList()"><ion-icon name="search" class="tool"></ion-icon>Search</button> -->\n  <div *ngIf="itemsList">\n    <ion-list>\n      <div ion-item no-lines *ngFor="let z of itemsList">\n        <p [class]="types"\n         (click)="choose(z)">{{z.text}}</p>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/lookup/lookup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_master_plans_master_plans__["a" /* MasterPlansProvider */]])
    ], LookupPage);
    return LookupPage;
}());

//# sourceMappingURL=lookup.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarePlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contents_contents__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_plan_add_plan__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_help__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_cache_cache__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_dragula__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CarePlanPage = /** @class */ (function () {
    function CarePlanPage(navCtrl, navParams, plt, alertCtrl, toast, ds, auth, cache, PPP) {
        // event listeners
        // save if swapped out
        // this.plt.pause.subscribe(() => {
        //   // think this fails because async takes too long?
        //   this.PPP.write();
        // });
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.ds = ds;
        this.auth = auth;
        this.cache = cache;
        this.PPP = PPP;
        this.ddChanges = false;
        this.nowDragging = false;
        this.subs = new __WEBPACK_IMPORTED_MODULE_11_rxjs__["Subscription"]();
        // dragging stuff
        // disable scroll when dragging
        document.addEventListener('touchstart', function (e) {
            if (_this.nowDragging) {
                e.preventDefault();
            }
        }, { passive: false });
        document.addEventListener('touchmove', function (e) {
            // console.log('touchmove event', this.nowDragging);
            if (_this.nowDragging) {
                e.preventDefault();
            }
        }, { passive: false });
        this.subs.add(this.ds.drag()
            .subscribe(function (_a) {
            var name = _a.name;
            _this.nowDragging = true;
            // console.log('drag event', name, this.nowDragging);
        }));
        this.subs.add(this.ds.dragend()
            .subscribe(function (_a) {
            var name = _a.name;
            _this.nowDragging = false;
            // console.log('dragend event', name, this.nowDragging);
        }));
        // drag/drop events
        this.subs.add(this.ds.dropModel("plan-list")
            .subscribe(function (_a) {
            var el = _a.el, targetModel = _a.targetModel;
            _this.nowDragging = false;
            // reassignment to this.plans.problems[] fails if not explicit,
            //    this works on both source and target when dragging from one problem to another, 
            //      without assigning source explicitly.
            //      i don't understand it but it works. (so leave it alone)
            var t = el.getElementsByClassName('planId');
            var c = parseInt(t[0].innerHTML);
            _this.PPP.plans[c] = targetModel;
            _this.ddChanges = true;
        }));
    }
    CarePlanPage.prototype.ionViewDidEnter = function () {
        this.ddChanges = false; // init/re-init on load
    };
    CarePlanPage.prototype.ionViewWillLeave = function () {
        // console.log('ddchanges', this.ddChanges);
        if (this.ddChanges) {
            this.PPP.write();
            this.ddChanges = false; // reset after save--overkill if on exit from page
        }
        // console.log(this.subs);
    };
    CarePlanPage.prototype.ionViewWillUnload = function () {
        this.subs.unsubscribe();
        document.removeEventListener('touchmove', function () { });
        document.removeEventListener('touchend', function () { });
    };
    CarePlanPage.prototype.contents = function (plan) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contents_contents__["a" /* ContentsPage */], {
            plan: plan
        });
    };
    CarePlanPage.prototype.addPlan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_plan_add_plan__["a" /* AddPlanPage */], {});
    };
    CarePlanPage.prototype.pushToWeb = function () {
        this.PPP.pushWeb();
        if (this.plt.is('mobile')) {
            this.toast.show('Uploaded to Cloud', '1500', 'center').subscribe(function (t) { });
        }
    };
    CarePlanPage.prototype.pullFromWeb = function () {
        this.PPP.pullWeb();
        if (this.plt.is('mobile')) {
            this.toast.show('Downloaded from Cloud', '1500', 'center').subscribe(function (t) { });
        }
    };
    CarePlanPage.prototype.clearCache = function () {
        this.cache.clearCache();
        if (this.plt.is('mobile')) {
            this.toast.show('Cache Cleared', '1000', 'center').subscribe(function (t) { });
        }
    };
    CarePlanPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__help_help__["a" /* HelpPage */]);
    };
    CarePlanPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    CarePlanPage.prototype.testEmpty = function () {
        // this.PPP.initPlans();
    };
    CarePlanPage.prototype.logout = function () {
        var _this = this;
        // confirm before logout
        var prompt = this.alertCtrl.create({
            title: 'Confirm Log Out',
            buttons: [
                {
                    text: "No, don't log out",
                    role: 'cancel'
                },
                {
                    text: 'Yes, log out',
                    handler: function () {
                        // this.PPP.write();
                        _this.auth.logout();
                    }
                }
            ]
        });
        prompt.present();
    };
    CarePlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-careplan',template:/*ion-inline-start:"/mnt/F/Projects/CP/cp3/src/pages/careplan/careplan.html"*/'<ion-header>\n\n\n\n\n\n  <ion-navbar class="navbarStyle" color="primary">\n\n    <!-- dbclick easter egg -->\n\n    <ion-title (press)="clearCache()" (dblclick)="clearCache()">My Care Plans</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button *ngIf="!auth.userLoggedIn" (click)="login()">\n\n        <ion-icon name="unlock"></ion-icon>\n\n      </button>\n\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="logout()">\n\n        <ion-icon name="lock"></ion-icon>\n\n      </button>\n\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="pushToWeb()">\n\n        <ion-icon name="cloud-upload"></ion-icon>\n\n      </button>\n\n      <button ion-button *ngIf="auth.userLoggedIn" (click)="pullFromWeb()">\n\n        <ion-icon name="cloud-download"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="help()">\n\n        <ion-icon name="help"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <div class="helptext">touch the name or the icon <ion-icon name="create" class="tool"></ion-icon>to work with the contents of a plan</div>\n\n    <br> -->\n\n  <div align="right">\n\n    <button ion-button icon-left (click)="addPlan()">\n\n      <ion-icon name="add"></ion-icon>\n\n      Create a New Plan\n\n    </button>\n\n  </div>\n\n  <p class="helpful" *ngIf="PPP.plans.length > 0">Care plans I\'ve created:</p>\n\n  <p class="helpful" *ngIf="PPP.plans.length == 0">You haven\'t created any plans yet--select Create a New Plan to get started.</p>\n\n  <!-- <ion-list> -->\n\n  <ion-list [dragula]=\'"plan-list"\' [(dragulaModel)]="PPP.plans">\n\n    <div ion-item text-wrap no-lines *ngFor="let p of PPP.plans; let i = index">\n\n      <p class="plan">\n\n        <span class="planId" hidden>{{i}}</span>\n\n        <span (click)="contents(p)">\n\n          {{p.name}}\n\n          <ion-icon name="create" class="tool"></ion-icon>\n\n        </span>\n\n      </p>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/mnt/F/Projects/CP/cp3/src/pages/careplan/careplan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_dragula__["b" /* DragulaService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_cache_cache__["a" /* CacheProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_personal_plans_personal_plans__["a" /* PersonalPlansProvider */]])
    ], CarePlanPage);
    return CarePlanPage;
}());

//# sourceMappingURL=careplan.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStoreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import 'rxjs/add/operator/map';

var LocalStoreProvider = /** @class */ (function () {
    function LocalStoreProvider(storage) {
        this.storage = storage;
        console.log('Constructor LocalStoreProvider Provider');
    }
    LocalStoreProvider.prototype.set = function (key, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.set(key, value)
                .then(function (result) { return resolve(true); })
                .catch(function (reason) {
                console.info(reason);
                reject(reason);
            });
        });
    };
    LocalStoreProvider.prototype.get = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(key)
                .then(function (result) { return resolve(result); })
                .catch(function (reason) {
                console.info(reason);
                reject(reason);
            });
        });
    };
    LocalStoreProvider.prototype.remove = function (key) {
        this.storage.remove(key);
    };
    LocalStoreProvider.prototype.clear = function () {
        this.storage.clear();
    };
    LocalStoreProvider.prototype.keys = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.keys()
                .then(function (result) { return resolve(result); })
                .catch(function (reason) {
                console.info(reason);
                reject(reason);
            });
        });
    };
    LocalStoreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], LocalStoreProvider);
    return LocalStoreProvider;
}());

// setObject(key: string, object: Object) {
//   return this.storage.set(key, JSON.stringify(object)).then(result => {
//     console.log("set Object in storage: " + result);
//     return true;
//   }).catch(function (reason) {
//     console.info(reason);
//     return false;
//   });
// }
// getObject(key: string): Promise<any> {
//   return this.storage.get(key).then(result => {
//     if (result != null) { return JSON.parse(result) }
//     return null;
//   }).catch(function (reason) {
//     console.info(reason);
//     return null;
//   });
// }
//# sourceMappingURL=local-store.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cpapi_cpapi__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Network } from '@ionic-native/network';

var ConnectionProvider = /** @class */ (function () {
    function ConnectionProvider(http, 
        // private network: Network,
        cpapi) {
        this.http = http;
        this.cpapi = cpapi;
        // connected = false;
        this.internet = false;
        console.log('Constructor ConnectionProvider Provider');
        // periodically check network connection?
        // 30 seconds
        // setInterval(() => {
        //   this.checkConnection();
        // }, 30000);
    }
    ConnectionProvider.prototype.checkConnection = function () {
        var _this = this;
        // now see if there's api access
        console.log('checkConnection');
        var route = this.cpapi.apiURL + "master/";
        this.http.options(route)
            .subscribe(function (data) {
            console.log('internet on');
            _this.internet = true;
        }),
            function (err) {
                console.log('internet off');
                _this.internet = false;
            };
    };
    ConnectionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__cpapi_cpapi__["a" /* CPAPI */]])
    ], ConnectionProvider);
    return ConnectionProvider;
}());

//# sourceMappingURL=connection.js.map

/***/ })

},[396]);
//# sourceMappingURL=main.js.map