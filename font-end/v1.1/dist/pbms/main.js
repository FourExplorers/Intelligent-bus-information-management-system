(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./homepage/homepage.module": [
		"./src/app/homepage/homepage.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _people_search_nav_bar_search_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people/search-nav-bar/search-nav-bar.component */ "./src/app/people/search-nav-bar/search-nav-bar.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _people_driver_dsearch_dsearch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./people/driver/dsearch/dsearch.component */ "./src/app/people/driver/dsearch/dsearch.component.ts");
/* harmony import */ var _people_citizen_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./people/citizen/search/search.component */ "./src/app/people/citizen/search/search.component.ts");
/* harmony import */ var _people_citizen_search_map_search_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./people/citizen/search-map/search-map.component */ "./src/app/people/citizen/search-map/search-map.component.ts");
/* harmony import */ var _people_manager_mhsearch_mhsearch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./people/manager/mhsearch/mhsearch.component */ "./src/app/people/manager/mhsearch/mhsearch.component.ts");
/* harmony import */ var _people_manager_mfindsub_mfindsub_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./people/manager/mfindsub/mfindsub.component */ "./src/app/people/manager/mfindsub/mfindsub.component.ts");
/* harmony import */ var _people_manager_msubsub_msubsub_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./people/manager/msubsub/msubsub.component */ "./src/app/people/manager/msubsub/msubsub.component.ts");
/* harmony import */ var _people_boss_bossnavbar_bossnavbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./people/boss/bossnavbar/bossnavbar.component */ "./src/app/people/boss/bossnavbar/bossnavbar.component.ts");
/* harmony import */ var _people_boss_proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./people/boss/proposal-list/proposal-list.component */ "./src/app/people/boss/proposal-list/proposal-list.component.ts");
/* harmony import */ var _people_boss_proposal_detail_proposal_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./people/boss/proposal-detail/proposal-detail.component */ "./src/app/people/boss/proposal-detail/proposal-detail.component.ts");
/* harmony import */ var _people_msearchnavbar_msearchnavbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./people/msearchnavbar/msearchnavbar.component */ "./src/app/people/msearchnavbar/msearchnavbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '', component: _people_search_nav_bar_search_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchNavBarComponent"]
    },
    {
        path: 'citizen', redirectTo: '', pathMatch: 'full'
    },
    {
        path: 'homepage',
        canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        loadChildren: './homepage/homepage.module#HomepageModule'
    },
    {
        path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'login', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'driver', component: _people_driver_dsearch_dsearch_component__WEBPACK_IMPORTED_MODULE_6__["DsearchComponent"]
    },
    {
        path: 'manager',
        component: _people_msearchnavbar_msearchnavbar_component__WEBPACK_IMPORTED_MODULE_15__["MsearchnavbarComponent"],
    },
    {
        path: 'ceo',
        component: _people_boss_bossnavbar_bossnavbar_component__WEBPACK_IMPORTED_MODULE_12__["BossnavbarComponent"],
    },
    {
        path: 'search', component: _people_citizen_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]
    },
    {
        path: 'search1', component: _people_citizen_search_map_search_map_component__WEBPACK_IMPORTED_MODULE_8__["SearchMapComponent"]
    },
    { path: 'history', component: _people_manager_mhsearch_mhsearch_component__WEBPACK_IMPORTED_MODULE_9__["MhsearchComponent"] },
    { path: 'submit', component: _people_manager_mfindsub_mfindsub_component__WEBPACK_IMPORTED_MODULE_10__["MfindsubComponent"] },
    { path: 'subsubmit', component: _people_manager_msubsub_msubsub_component__WEBPACK_IMPORTED_MODULE_11__["MsubsubComponent"] },
    { path: 'proposals', component: _people_boss_proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_13__["ProposalListComponent"] },
    { path: 'proposal/:id', component: _people_boss_proposal_detail_proposal_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProposalDetailComponent"] },
    {
        path: '##',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
    },
    {
        path: '**',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\r\n    height: 150px;\r\n    background: #5CB85C;\r\n    box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);\r\n}\r\nh1{\r\n    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\r\n    font-weight: 700 !important;\r\n    text-align: center;\r\n    font-size: 3.5rem;\r\n    font-family: \"Titillium Web\", sans-serif;\r\n    color: white;\r\n    padding-top: 10px\r\n}\r\n.banner p{\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 300 !important;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<div class=\"banner\">\r\n    <div class=\"container\">\r\n      <h1 class=\"logo-font\">PBMS</h1>\r\n      <p>A platform to manage bus</p>\r\n    </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pbmanagement';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _first_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first/main/main.component */ "./src/app/first/main/main.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _first_init_init_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first/init/init.component */ "./src/app/first/init/init.component.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.module */ "./src/app/homepage/homepage.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _people_search_nav_bar_search_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./people/search-nav-bar/search-nav-bar.component */ "./src/app/people/search-nav-bar/search-nav-bar.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _people_driver_dsearch_dsearch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./people/driver/dsearch/dsearch.component */ "./src/app/people/driver/dsearch/dsearch.component.ts");
/* harmony import */ var _people_manager_mdsearch_mdsearch_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./people/manager/mdsearch/mdsearch.component */ "./src/app/people/manager/mdsearch/mdsearch.component.ts");
/* harmony import */ var _service_submit_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/submit.service */ "./src/app/service/submit.service.ts");
/* harmony import */ var _people_boss_bosschange_bosschange_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./people/boss/bosschange/bosschange.component */ "./src/app/people/boss/bosschange/bosschange.component.ts");
/* harmony import */ var _people_boss_bossnavbar_bossnavbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./people/boss/bossnavbar/bossnavbar.component */ "./src/app/people/boss/bossnavbar/bossnavbar.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _people_citizen_search_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./people/citizen/search/search.component */ "./src/app/people/citizen/search/search.component.ts");
/* harmony import */ var _people_citizen_search_map_search_map_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./people/citizen/search-map/search-map.component */ "./src/app/people/citizen/search-map/search-map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _people_msearchnavbar_msearchnavbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./people/msearchnavbar/msearchnavbar.component */ "./src/app/people/msearchnavbar/msearchnavbar.component.ts");
/* harmony import */ var _people_manager_mhsearch_mhsearch_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./people/manager/mhsearch/mhsearch.component */ "./src/app/people/manager/mhsearch/mhsearch.component.ts");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var _people_manager_mfindsub_mfindsub_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./people/manager/mfindsub/mfindsub.component */ "./src/app/people/manager/mfindsub/mfindsub.component.ts");
/* harmony import */ var _people_manager_msubsub_msubsub_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./people/manager/msubsub/msubsub.component */ "./src/app/people/manager/msubsub/msubsub.component.ts");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./service/driver.service */ "./src/app/service/driver.service.ts");
/* harmony import */ var _service_popup_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./service/popup.service */ "./src/app/service/popup.service.ts");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/toast/toast.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _people_boss_proposals_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./people/boss/proposals.module */ "./src/app/people/boss/proposals.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _first_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _first_init_init_component__WEBPACK_IMPORTED_MODULE_6__["InitComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"],
                _people_driver_dsearch_dsearch_component__WEBPACK_IMPORTED_MODULE_15__["DsearchComponent"],
                _people_boss_bossnavbar_bossnavbar_component__WEBPACK_IMPORTED_MODULE_19__["BossnavbarComponent"],
                _people_manager_mdsearch_mdsearch_component__WEBPACK_IMPORTED_MODULE_16__["MdsearchComponent"],
                _people_boss_bosschange_bosschange_component__WEBPACK_IMPORTED_MODULE_18__["BosschangeComponent"],
                _people_search_nav_bar_search_nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["SearchNavBarComponent"],
                _people_citizen_search_search_component__WEBPACK_IMPORTED_MODULE_21__["SearchComponent"],
                _people_msearchnavbar_msearchnavbar_component__WEBPACK_IMPORTED_MODULE_24__["MsearchnavbarComponent"],
                _people_manager_mhsearch_mhsearch_component__WEBPACK_IMPORTED_MODULE_25__["MhsearchComponent"],
                _people_manager_mfindsub_mfindsub_component__WEBPACK_IMPORTED_MODULE_27__["MfindsubComponent"],
                _people_citizen_search_map_search_map_component__WEBPACK_IMPORTED_MODULE_22__["SearchMapComponent"],
                _people_manager_msubsub_msubsub_component__WEBPACK_IMPORTED_MODULE_28__["MsubsubComponent"],
                _toast_toast_component__WEBPACK_IMPORTED_MODULE_31__["ToastComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_10__["HomepageModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_20__["Ng2SmartTableModule"],
                _people_boss_proposals_module__WEBPACK_IMPORTED_MODULE_34__["ProposalsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["NoopAnimationsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_23__["AgmCoreModule"].forRoot({
                    // apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ' //Google API key for maps
                    apiKey: 'AIzaSyDURIknn5X5lPJfiH55SbKm6WtPA7uGQvo'
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["BrowserAnimationsModule"]
            ],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _service_submit_service__WEBPACK_IMPORTED_MODULE_17__["SubmitService"], _service_history_service__WEBPACK_IMPORTED_MODULE_26__["HistoryService"], _service_driver_service__WEBPACK_IMPORTED_MODULE_29__["DriverService"], _service_popup_service__WEBPACK_IMPORTED_MODULE_30__["PopupService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/driver.service */ "./src/app/service/driver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded.');
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [
                {
                    provide: 'auth',
                    useClass: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
                },
                {
                    provide: 'user',
                    useClass: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
                },
                {
                    provide: 'driver',
                    useClass: _service_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"]
                },
                _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/domain/auth.ts":
/*!********************************!*\
  !*** ./src/app/domain/auth.ts ***!
  \********************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
var Auth = /** @class */ (function () {
    function Auth() {
    }
    return Auth;
}());



/***/ }),

/***/ "./src/app/domain/user.ts":
/*!********************************!*\
  !*** ./src/app/domain/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  404 not found\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/first/init/init.component.html":
/*!************************************************!*\
  !*** ./src/app/first/init/init.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p>这里是主界面</p>\r\n  <button (click)=\"gotosignin()\">Sign in</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/first/init/init.component.ts":
/*!**********************************************!*\
  !*** ./src/app/first/init/init.component.ts ***!
  \**********************************************/
/*! exports provided: InitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitComponent", function() { return InitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InitComponent = /** @class */ (function () {
    function InitComponent(router) {
        this.router = router;
    }
    InitComponent.prototype.ngOnInit = function () {
    };
    InitComponent.prototype.gotosignin = function () {
        this.router.navigateByUrl('/login');
    };
    InitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-init',
            template: __webpack_require__(/*! ./init.component.html */ "./src/app/first/init/init.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InitComponent);
    return InitComponent;
}());



/***/ }),

/***/ "./src/app/first/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/first/main/main.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\r\n    padding: 200px 20px;\r\n}\r\n.login > form {\r\n    border: solid 1px #999;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n}"

/***/ }),

/***/ "./src/app/first/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/first/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div>\r\n  <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value)\">\r\n    <fieldset ngModelGroup=\"login\">\r\n      <div>\r\n        <label class =\"mark\">Username: </label>\r\n        <input name=\"username\" type=\"text\" [(ngModel)]=\"username\" #usernameRef=\"ngModel\" required minlength=\"3\">\r\n        <label *ngIf=\"usernameRef.errors?.required\">this is required</label>\r\n        <label *ngIf=\"usernameRef.errors?.minlength\">should be at least 3 charactors</label>\r\n        <label *ngIf=\"auth?.hasError\">{{auth.errMsg}}</label>\r\n      </div>\r\n      <div>\r\n        <label class =\"mark\">Password: </label>\r\n        <input name=\"password\" type=\"password\" [(ngModel)]=\"password\" #passwordRef=\"ngModel\" required>\r\n        <label *ngIf=\"passwordRef.errors?.required\">this is required</label>\r\n      </div>\r\n      <button type=\"submit\">Login</button>\r\n    </fieldset>\r\n    {{formRef.value | json}}\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/first/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/first/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MainComponent = /** @class */ (function () {
    function MainComponent(service, router) {
        this.service = service;
        this.router = router;
        this.username = "";
        this.password = "";
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.onSubmit = function (formvalue) {
        var _this = this;
        console.log("gggggg");
        console.dir(formvalue);
        this.service.loginWithCredentials(formvalue.login.username, formvalue.login.password)
            .then(function (auth) {
            var redirectUrl = (auth.redirectUrl === null) ? '/homepage' : auth.redirectUrl;
            if (!auth.hasError) {
                _this.router.navigate([redirectUrl]);
                localStorage.removeItem('redirectUrl');
                location.reload();
            }
            else {
                _this.auth = Object.assign({}, auth);
            }
        });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/first/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/first/main/main.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/homepage-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomepageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageRoutingModule", function() { return HomepageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'homepage',
        component: _homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"],
        canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }
];
var HomepageRoutingModule = /** @class */ (function () {
    function HomepageRoutingModule() {
    }
    HomepageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomepageRoutingModule);
    return HomepageRoutingModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n    <head>\r\n        <meta charset=\"UTF-8\">\r\n        <title></title>\r\n        <style type=\"text/css\">\r\n        /*隐藏checked复选框*/\r\n            #sidemenu{\r\n                display: none;\r\n            }\r\n\r\n            #sidemenu:checked + aside {\r\n                /*为被选中的sidemenu后的aside设置属性（紧邻）*/\r\n                left: 0;\r\n                /*点击按钮即选中checked后,侧边栏位置变为贴着左边,配合ease-out使用,有渐变滑出的效果*/\r\n            }\r\n\r\n            #sidemenu:checked ~ #wrap {\r\n                /*为被选中的sidemenu后的wrap设置属性（非紧邻）*/\r\n                padding-left: 220px;\r\n            }\r\n\r\n            aside {\r\n                /*侧边栏,初始位置为-200px，即隐藏效果*/\r\n                position: absolute;\r\n                top: 0;\r\n                bottom: 0;\r\n                left: -200px;\r\n                width: 200px;\r\n                background: black;\r\n                transition: 0.2s ease-out;\r\n                /*动画效果的执行方式是ease-out，即侧边栏滑动效果为渐变式，而不是生硬的突然变化*/\r\n            }\r\n\r\n            h2 {\r\n                color: white;\r\n                text-align: center;\r\n                font-size: 2em;\r\n            }\r\n\r\n            /*控制侧边栏进出的按钮（外部包裹）*/\r\n            #wrap {\r\n                margin-left: 20px;\r\n                padding: 10px;\r\n                transition: 0.2s ease-out;\r\n            }\r\n\r\n            /*控制侧边栏进出的按钮（内部文字样式）*/\r\n            label {\r\n                /*控制侧边栏进出的按钮*/\r\n                background: white;\r\n                border-radius: 70px;\r\n                color: orange;\r\n                cursor: pointer;\r\n                display: block;\r\n                font-family: Courier New;\r\n                font-size: 2em;\r\n                width: 1.5em;\r\n                height: 1.5em;\r\n                line-height: 1.5em;\r\n                text-align: center;\r\n                display: inline-block;\r\n            }\r\n\r\n            label:hover {\r\n                background: #000;\r\n            }\r\n\r\n            #sideul li {\r\n                list-style: none;\r\n                color: white;\r\n                width: 100%;\r\n                height: 1.8em;\r\n                font-size: 1.5em;\r\n                text-align: center;\r\n            }\r\n\r\n            a {\r\n                text-decoration: none;\r\n            }\r\n\r\n            #sideul li:hover {\r\n                color: orange;\r\n            }\r\n        </style>\r\n    </head>\r\n\r\n    <body>\r\n        <input type='checkbox' id='sidemenu'>\r\n        <aside>\r\n            <h2>Profile</h2>\r\n            <br />\r\n            <ul id=\"sideul\">\r\n                <a routerLink={{s}} routerLinkActive=\"active\">\r\n                    <li>主页</li>\r\n                </a>\r\n                <a href=\"**\">\r\n                    <li style=\"color: orange;\">My Message</li>\r\n                </a>\r\n                <a href=\"**\">\r\n                    <li>Notification</li>\r\n                </a>\r\n                <a href=\"**\">\r\n                    <li>Setting</li>\r\n                </a>\r\n            </ul>\r\n        </aside>\r\n        <div id='wrap'>\r\n            <label id='sideMenuControl' for='sidemenu'>≡</label>\r\n            <!--for 属性规定 label 与哪个表单元素绑定，即将这个控制侧边栏进出的按钮与checkbox绑定-->\r\n        </div>\r\n\r\n    </body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(service) {
        this.service = service;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.Userid = localStorage.getItem('userId');
        console.log(this.Userid);
        this.s = '/' + localStorage.belongclass;
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('user')),
        __metadata("design:paramtypes", [Object])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage-routing.module */ "./src/app/homepage/homepage-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _homepage_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomepageRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            ]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n  touch-action: manipulation;\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    border-radius: 4px; \r\n    cursor: pointer;\r\n      position: relative;\r\n      padding-top: 0.5rem;\r\n      padding-right: 1rem;\r\n      padding-left: 1rem;\r\n    display: block;\r\n    padding-top: .425rem;\r\n    padding-bottom: .425rem;\r\n  }\r\nnav ul{\r\n  list-style-type: none;\r\n  margin:0;\r\n  padding:0;\r\n  display:block;\r\n}\r\nli{\r\n  float:right;\r\n\r\n}\r\nnav a:visited,\r\n  nav a:link {\r\n    color: rgba(0, 0, 0, 0.3);\r\n    font-family: \"Source Sans Pro\", sans-serif;\r\n  }\r\n.extra{\r\n  clear: both;\r\n}\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\nnav{\r\n    display: inline;\r\n  }"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"navb\">\r\n   <ul>\r\n     <li><a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\" id=\"main\">Main</a></li>\r\n     <li><a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\" id=\"signin\">Signin</a></li>\r\n     <li><a class=\"nav-link\" (click)=\"logout()\" id=\"Logout\">Logout</a></li>\r\n     <li><a class=\"nav-link\" routerLink='/register' routerLinkActive=\"active\" id=\"Register\">Signup</a></li>\r\n     <li><a class=\"nav-link\" routerLink=\"/homepage\" routerLinkActive=\"active\" id=\"home\">Profile</a></li>\r\n   </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"extra\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var divLogin = document.getElementById('signin');
        var divLogout = document.getElementById('Logout');
        var divreg = document.getElementById('Register');
        this.userId = -1;
        if (localStorage.getItem('userId') !== null) {
            //已登录
            divLogin.style.display = 'none';
            divreg.style.display = 'none';
            this.userId = localStorage.getItem('userId');
        }
        else {
            //未登录
            divLogout.style.display = 'none';
        }
        if (divLogout.style.display === 'none') {
            this.router.navigate([""]);
        }
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('userId');
        this.userId = -1;
        location.reload();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/people/boss/bosschange/bosschange.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/people/boss/bosschange/bosschange.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/people/boss/bosschange/bosschange.component.html":
/*!******************************************************************!*\
  !*** ./src/app/people/boss/bosschange/bosschange.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bosschange works!\n</p>\n"

/***/ }),

/***/ "./src/app/people/boss/bosschange/bosschange.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/people/boss/bosschange/bosschange.component.ts ***!
  \****************************************************************/
/*! exports provided: BosschangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BosschangeComponent", function() { return BosschangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BosschangeComponent = /** @class */ (function () {
    function BosschangeComponent() {
    }
    BosschangeComponent.prototype.ngOnInit = function () {
    };
    BosschangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bosschange',
            template: __webpack_require__(/*! ./bosschange.component.html */ "./src/app/people/boss/bosschange/bosschange.component.html"),
            styles: [__webpack_require__(/*! ./bosschange.component.css */ "./src/app/people/boss/bosschange/bosschange.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BosschangeComponent);
    return BosschangeComponent;
}());



/***/ }),

/***/ "./src/app/people/boss/bossnavbar/bossnavbar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/people/boss/bossnavbar/bossnavbar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navigation link styles */\r\n\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\n\r\nnav a:visited,\r\n  a:link {\r\n    color: #607D8B;\r\n  }\r\n\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n  }\r\n\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n\r\n.nv{\r\n    float: none;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/people/boss/bossnavbar/bossnavbar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/people/boss/bossnavbar/bossnavbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nv\">\n<nav>\n  <a routerLink=\"/proposals\" routerLinkActive=\"active\" id=\"p11\">添加</a>\n  <a routerLink=\"/proposal/:id\" routerLinkActive=\"active\" id=\"p12\">查询</a>\n</nav>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/people/boss/bossnavbar/bossnavbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/people/boss/bossnavbar/bossnavbar.component.ts ***!
  \****************************************************************/
/*! exports provided: BossnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BossnavbarComponent", function() { return BossnavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BossnavbarComponent = /** @class */ (function () {
    function BossnavbarComponent() {
    }
    BossnavbarComponent.prototype.ngOnInit = function () {
    };
    BossnavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bossnavbar',
            template: __webpack_require__(/*! ./bossnavbar.component.html */ "./src/app/people/boss/bossnavbar/bossnavbar.component.html"),
            styles: [__webpack_require__(/*! ./bossnavbar.component.css */ "./src/app/people/boss/bossnavbar/bossnavbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BossnavbarComponent);
    return BossnavbarComponent;
}());



/***/ }),

/***/ "./src/app/people/boss/proposal-detail/proposal-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/people/boss/proposal-detail/proposal-detail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  display: inline-block;\r\n  width: 7em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n  width: 30em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/people/boss/proposal-detail/proposal-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/people/boss/proposal-detail/proposal-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"proposal\">\n  <h2>{{proposal.name}}'s details</h2>\n  <div><label>id: </label>{{proposal.id}}</div>\n  <div>\n    <label>lineId: </label>\n    <input [(ngModel)] = \"proposal.lineId\" placeholder = \"lineId\" />\n  </div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)] = \"proposal.name\" placeholder = \"name\" />\n  </div>\n  <div>\n    <label>oldStations: </label>\n    <input [(ngModel)] = \"proposal.oldStations\" placeholder = \"oldStations\" />\n  </div>\n  <div>\n    <label>newStations: </label>\n    <input [(ngModel)] = \"proposal.newStations\" placeholder = \"newStations\" />\n  </div>\n  <div>\n    <label>reason: </label>\n    <input [(ngModel)] = \"proposal.reason\" placeholder = \"reason\" />\n  </div>\n  <button (click) = \"goBack()\">Back</button>\n  <button (click) = \"save()\">Save</button>\n  <button (click) = \"accept()\">Accept</button>\n  <button class = \"reject\" (click) = \"reject(); $event.stopPropagation()\">Reject</button>\n</div>\n"

/***/ }),

/***/ "./src/app/people/boss/proposal-detail/proposal-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/people/boss/proposal-detail/proposal-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProposalDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalDetailComponent", function() { return ProposalDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_proposal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/proposal.service */ "./src/app/service/proposal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProposalDetailComponent = /** @class */ (function () {
    function ProposalDetailComponent(proposalService, route, location) {
        this.proposalService = proposalService;
        this.route = route;
        this.location = location;
    }
    ProposalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.proposalService.getProposalById(id)
                    .then(function (proposal) { return _this.proposal = proposal; });
            }
        });
    };
    ProposalDetailComponent.prototype.save = function () {
        var _this = this;
        this.proposalService.updateProposal(this.proposal)
            .then(function () { return _this.goBack(); });
    };
    ProposalDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProposalDetailComponent.prototype.accept = function () {
        var _this = this;
        this.proposalService.updateLine(this.proposal)
            .then(function () {
            _this.reject();
        });
    };
    ProposalDetailComponent.prototype.reject = function () {
        var _this = this;
        this.proposalService.deleteProposal(this.proposal)
            .then(function () { return _this.goBack(); });
    };
    ProposalDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proposal-detail',
            template: __webpack_require__(/*! ./proposal-detail.component.html */ "./src/app/people/boss/proposal-detail/proposal-detail.component.html"),
            styles: [__webpack_require__(/*! ./proposal-detail.component.css */ "./src/app/people/boss/proposal-detail/proposal-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_proposal_service__WEBPACK_IMPORTED_MODULE_3__["ProposalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ProposalDetailComponent);
    return ProposalDetailComponent;
}());



/***/ }),

/***/ "./src/app/people/boss/proposal-list/proposal-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/people/boss/proposal-list/proposal-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".proposals {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 30em;\r\n}\r\n.proposals li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.proposals li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.proposals .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.proposals .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n.selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n.proposals li.selected:hover {\r\n  background-color: #BBD8DC !important;\r\n  color: white;\r\n}\r\nbutton {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  float:right;\r\n  margin-top: 2px;\r\n  margin-right: .8em;\r\n  background-color: gray !important;\r\n  color:white;\r\n}\r\nlabel {\r\n  display: inline-block;\r\n  width: 7em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n  width: 30em;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/people/boss/proposal-list/proposal-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/people/boss/proposal-list/proposal-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create New Proposals</h2>>\n<div>\n  <label>LineId:</label> <input #proposalLineId />\n  <button (click) = \"proposalLineId.value = ''\">Clear</button>\n</div>\n<div>\n  <label>Name:</label> <input #proposalName />\n  <button (click) = \"proposalName.value = ''\">Clear</button>\n</div>\n<div>\n  <label>OldStations:</label> <input #proposalOldStations />\n  <button (click) = \"proposalOldStations.value = ''\">Clear</button>\n</div>\n<div>\n  <label>NewStations:</label> <input #proposalNewStations />\n  <button (click) = \"proposalNewStations.value = ''\">Clear</button>\n</div>\n<div>\n  <label>Reason:</label> <input #proposalReason />\n  <button (click) = \"proposalReason.value = ''\">Clear</button>\n</div>\n<div>\n  <button (click) = \"add(proposalLineId.value, proposalName.value, proposalOldStations.value, proposalNewStations.value, proposalReason.value);\">\n    Add\n  </button>\n</div>\n<hr>\n<h2>Proposal List</h2>\n<ul class = \"proposals\">\n  <li *ngFor = \"let proposal of proposals\"\n   [class.selected] = \"proposal === selectedProposal\"\n   (click) = \"onSelect(proposal)\" >\n    <span class = \"badge\">{{proposal.id}}</span>\n    <span>{{proposal.name}}</span>\n    <button class = \"delete\" (click) = \"delete(proposal); $event.stopPropagation()\">X</button>\n  </li>\n</ul>\n<!-- proposalId.value = ''; proposalLineID.value = ''; proposalName.value = ''; proposalNewStations.value = ''; proposalOldStations.value = ''; proposalReason.value = ''; -->\n"

/***/ }),

/***/ "./src/app/people/boss/proposal-list/proposal-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/people/boss/proposal-list/proposal-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProposalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalListComponent", function() { return ProposalListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_proposal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/proposal.service */ "./src/app/service/proposal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { PROPOSALS } from '../../temp-proposals';


var ProposalListComponent = /** @class */ (function () {
    function ProposalListComponent(proposalService, router) {
        this.proposalService = proposalService;
        this.router = router;
    }
    ProposalListComponent.prototype.getProposals = function () {
        var _this = this;
        this.proposalService.getProposals().then(function (proposals) { return _this.proposals = proposals; });
    };
    ProposalListComponent.prototype.ngOnInit = function () {
        this.getProposals();
    };
    ProposalListComponent.prototype.add = function (_lineId, _name, _oldStations, _newStations, _reason) {
        var _this = this;
        _name = _name.trim();
        _oldStations = _oldStations.trim();
        _newStations = _newStations.trim();
        _reason = _reason.trim();
        var newProposal = {
            id: this.proposals.length + 1,
            lineId: _lineId,
            name: _name,
            oldStations: _oldStations,
            newStations: _newStations,
            reason: _reason
        };
        this.proposalService.createProposal(newProposal)
            .then(function (proposal) {
            _this.proposals.push(proposal);
            _this.selectedProposal = null;
        });
    };
    ProposalListComponent.prototype.delete = function (proposal) {
        var _this = this;
        this.proposalService.deleteProposalById(proposal.id)
            .then(function () {
            _this.proposals = _this.proposals.filter(function (p) { return p !== proposal; });
            if (_this.selectedProposal === proposal) {
                _this.selectedProposal = null;
            }
        });
    };
    ProposalListComponent.prototype.onSelect = function (proposal) {
        this.selectedProposal = proposal;
        this.gotoDetail();
    };
    ProposalListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/proposal', this.selectedProposal.id]);
    };
    ProposalListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proposal-list',
            template: __webpack_require__(/*! ./proposal-list.component.html */ "./src/app/people/boss/proposal-list/proposal-list.component.html"),
            styles: [__webpack_require__(/*! ./proposal-list.component.css */ "./src/app/people/boss/proposal-list/proposal-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_proposal_service__WEBPACK_IMPORTED_MODULE_1__["ProposalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProposalListComponent);
    return ProposalListComponent;
}());



/***/ }),

/***/ "./src/app/people/boss/proposals-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/people/boss/proposals-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProposalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalsRoutingModule", function() { return ProposalsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proposal-list/proposal-list.component */ "./src/app/people/boss/proposal-list/proposal-list.component.ts");
/* harmony import */ var _proposal_detail_proposal_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proposal-detail/proposal-detail.component */ "./src/app/people/boss/proposal-detail/proposal-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: './proposals', component: _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_2__["ProposalListComponent"] },
    { path: './proposal/:id', component: _proposal_detail_proposal_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProposalDetailComponent"] }
];
var ProposalsRoutingModule = /** @class */ (function () {
    function ProposalsRoutingModule() {
    }
    ProposalsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProposalsRoutingModule);
    return ProposalsRoutingModule;
}());



/***/ }),

/***/ "./src/app/people/boss/proposals.module.ts":
/*!*************************************************!*\
  !*** ./src/app/people/boss/proposals.module.ts ***!
  \*************************************************/
/*! exports provided: ProposalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalsModule", function() { return ProposalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proposal-list/proposal-list.component */ "./src/app/people/boss/proposal-list/proposal-list.component.ts");
/* harmony import */ var _proposal_detail_proposal_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proposal-detail/proposal-detail.component */ "./src/app/people/boss/proposal-detail/proposal-detail.component.ts");
/* harmony import */ var _proposals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proposals-routing.module */ "./src/app/people/boss/proposals-routing.module.ts");
/* harmony import */ var _service_proposal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/proposal.service */ "./src/app/service/proposal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProposalsModule = /** @class */ (function () {
    function ProposalsModule() {
    }
    ProposalsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _proposals_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProposalsRoutingModule"]
            ],
            declarations: [
                _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_3__["ProposalListComponent"],
                _proposal_detail_proposal_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProposalDetailComponent"]
            ],
            providers: [_service_proposal_service__WEBPACK_IMPORTED_MODULE_6__["ProposalService"]]
        })
    ], ProposalsModule);
    return ProposalsModule;
}());



/***/ }),

/***/ "./src/app/people/citizen/search-map/search-map.component.css":
/*!********************************************************************!*\
  !*** ./src/app/people/citizen/search-map/search-map.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n    width: 400px;\r\n}"

/***/ }),

/***/ "./src/app/people/citizen/search-map/search-map.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/people/citizen/search-map/search-map.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>"

/***/ }),

/***/ "./src/app/people/citizen/search-map/search-map.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/people/citizen/search-map/search-map.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMapComponent", function() { return SearchMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchMapComponent = /** @class */ (function () {
    function SearchMapComponent() {
        this.lat = 39.1090299823;
        this.lng = 117.1729745409;
    }
    SearchMapComponent.prototype.ngOnInit = function () {
    };
    SearchMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-map',
            template: __webpack_require__(/*! ./search-map.component.html */ "./src/app/people/citizen/search-map/search-map.component.html"),
            styles: [__webpack_require__(/*! ./search-map.component.css */ "./src/app/people/citizen/search-map/search-map.component.css")]
        })
        // declare var  AMap: any;    // 一定要声明AMap，要不然报错找不到AMap
        ,
        __metadata("design:paramtypes", [])
    ], SearchMapComponent);
    return SearchMapComponent;
}());



/***/ }),

/***/ "./src/app/people/citizen/search/search.component.css":
/*!************************************************************!*\
  !*** ./src/app/people/citizen/search/search.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:host /deep/ ng2-smart-table { \r\n  font-size: 16px; \r\n  color:#6f8dc5;\r\n \r\n}\r\n\r\n:host /deep/ ng2-smart-table table{\r\n  border-style: inset;\r\n  border-color: initial;\r\n  -o-border-image: initial;\r\n     border-image: initial;\r\n  border-width: 5px;\r\n  \r\n  display: table;\r\n  border-spacing: 2px;\r\n}\r\n\r\n/* grid lines */\r\n\r\n:host /deep/ ng2-smart-table table > tbody > tr > td {\r\n  box-sizing: border-box;\r\n  border: 1px solid grey;\r\n}\r\n\r\n/* headers grid color*/\r\n\r\n:host /deep/ ng2-smart-table thead > tr > th  { \r\n  border: 1px  grey;\r\n  background-color:#ddd9b0;\r\n}\r\n\r\n/*font size*/\r\n\r\n:host /deep/ ng2-smart-table {\r\n  font-size:16px;\r\n}"

/***/ }),

/***/ "./src/app/people/citizen/search/search.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/people/citizen/search/search.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_line_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/line.service */ "./src/app/service/line.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(lineService) {
        this.lineService = lineService;
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            columns: {
                lineId: {
                    title: '路线号',
                    filter: false
                },
                stations: {
                    title: '包括站点',
                    filter: false
                }
            },
            attr: {
                class: 'table table-bordered'
            }
        };
        this.data = [{ "id": 1, "lineId": "1", "stations": "hi" }, { "id": 1, "lineId": "1", "stations": "hi" }];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lineService.getLines().then(function (lines) { return _this.lines = lines; });
    };
    SearchComponent.prototype.onSelect = function ($event) {
        console.log($event.target);
    };
    SearchComponent.prototype.onSave = function ($event) {
        console.log($event.target);
        var l1 = { id: 1,
            lineId: "1",
            stations: "hi" };
        console.log(l1);
        var l2 = { id: 1,
            lineId: "1",
            stations: "hi" };
        console.log(l1);
        var la = [];
        la.push(l1);
        la.push(l2);
        // this.data = JSON.stringify(la);
        console.log(JSON.stringify(la));
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"](this.lines);
    };
    SearchComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'lineId',
                search: query
            },
            {
                field: 'stations',
                search: query
            }
        ], false);
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/people/citizen/search/search.component.css")],
            template: "\n   <br>\n   <button (click)=\"onSave($event)\">\u67E5\u8BE2\u516C\u4EA4\u4FE1\u606F</button>\n   \n   <br> \n   <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n   <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n    \n   \n   "
        }),
        __metadata("design:paramtypes", [_service_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/people/driver/dsearch/dsearch.component.css":
/*!*************************************************************!*\
  !*** ./src/app/people/driver/dsearch/dsearch.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:host /deep/ ng2-smart-table { \r\n    font-size: 16px; \r\n    color:#6f8dc5;\r\n   \r\n  }\r\n  \r\n  :host /deep/ ng2-smart-table table{\r\n    border-style: inset;\r\n    border-color: initial;\r\n    -o-border-image: initial;\r\n       border-image: initial;\r\n    border-width: 5px;\r\n    \r\n    display: table;\r\n    border-spacing: 2px;\r\n  }\r\n  \r\n  /* grid lines */\r\n  \r\n  :host /deep/ ng2-smart-table table > tbody > tr > td {\r\n    box-sizing: border-box;\r\n    border: 1px solid grey;\r\n  }\r\n  \r\n  /* headers grid color*/\r\n  \r\n  :host /deep/ ng2-smart-table thead > tr > th  { \r\n    border: 1px  grey;\r\n    background-color:#ddd9b0;\r\n  }\r\n  \r\n  /*font size*/\r\n  \r\n  :host /deep/ ng2-smart-table {\r\n    font-size:16px;\r\n  }"

/***/ }),

/***/ "./src/app/people/driver/dsearch/dsearch.component.html":
/*!**************************************************************!*\
  !*** ./src/app/people/driver/dsearch/dsearch.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<button (click)=\"onSave($event)\">查询工作信息</button>\r\n\r\n<br> \r\n<input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\r\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>"

/***/ }),

/***/ "./src/app/people/driver/dsearch/dsearch.component.ts":
/*!************************************************************!*\
  !*** ./src/app/people/driver/dsearch/dsearch.component.ts ***!
  \************************************************************/
/*! exports provided: DsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsearchComponent", function() { return DsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DsearchComponent = /** @class */ (function () {
    function DsearchComponent(driverService) {
        this.driverService = driverService;
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            columns: {
                driverId: {
                    title: '驾驶员编号',
                },
                fromtime: {
                    title: '上班时间',
                    filter: false
                },
                totime: {
                    title: '下班时间',
                    filter: false
                },
                workline: {
                    title: '工作路线',
                }
            },
            attr: {
                class: 'table table-bordered'
            }
        };
    }
    DsearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.driverService.getDrivers.then(drivers => this.drivers = drivers);
        console.log("init");
        this.driverService.getDrivers().then(function (dri) { return _this.drivers = dri; });
    };
    DsearchComponent.prototype.onSelect = function ($event) {
        console.log($event.target);
    };
    DsearchComponent.prototype.onSave = function ($event) {
        var _this = this;
        console.log($event.target);
        var l1 = { id: 1,
            driverId: "1",
            fromtime: "hi",
            totime: "hi",
            workline: "jjkk"
        };
        console.log(l1);
        var l2 = { id: 1,
            driverId: "1",
            fromtime: "hi",
            totime: "hi",
            workline: "jjkk"
        };
        console.log(l1);
        var la = [];
        la.push(l1);
        la.push(l2);
        //  this.data = JSON.stringify(la);
        console.log(JSON.stringify(la));
        this.driverService.getDrivers().then(function (dri) { return _this.drivers = dri; });
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](this.drivers);
        // this.driverService.getDrivers.then(drivers => this.drivers = drivers);
    };
    DsearchComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'driverId',
                search: query
            },
            {
                field: 'workline',
                search: query
            }
        ], false);
    };
    DsearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dsearch',
            template: __webpack_require__(/*! ./dsearch.component.html */ "./src/app/people/driver/dsearch/dsearch.component.html"),
            styles: [__webpack_require__(/*! ./dsearch.component.css */ "./src/app/people/driver/dsearch/dsearch.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('driver')),
        __metadata("design:paramtypes", [Object])
    ], DsearchComponent);
    return DsearchComponent;
}());



/***/ }),

/***/ "./src/app/people/manager/mdsearch/mdsearch.component.css":
/*!****************************************************************!*\
  !*** ./src/app/people/manager/mdsearch/mdsearch.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:host /deep/ ng2-smart-table { \r\n    font-size: 16px; \r\n    color:#6f8dc5;\r\n   \r\n  }\r\n  \r\n  :host /deep/ ng2-smart-table table{\r\n    border-style: inset;\r\n    border-color: initial;\r\n    -o-border-image: initial;\r\n       border-image: initial;\r\n    border-width: 5px;\r\n    \r\n    display: table;\r\n    border-spacing: 2px;\r\n  }\r\n  \r\n  /* grid lines */\r\n  \r\n  :host /deep/ ng2-smart-table table > tbody > tr > td {\r\n    box-sizing: border-box;\r\n    border: 1px solid grey;\r\n  }\r\n  \r\n  /* headers grid color*/\r\n  \r\n  :host /deep/ ng2-smart-table thead > tr > th  { \r\n    border: 1px  grey;\r\n    background-color:#c2f1db;\r\n  }\r\n  \r\n  /*font size*/\r\n  \r\n  :host /deep/ ng2-smart-table {\r\n    font-size:16px;\r\n  }"

/***/ }),

/***/ "./src/app/people/manager/mdsearch/mdsearch.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/people/manager/mdsearch/mdsearch.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<button (click)=\"onSave($event)\">查询工作信息</button>\n\n<br> \n<!--<input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">-->\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n\n\n"

/***/ }),

/***/ "./src/app/people/manager/mdsearch/mdsearch.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/people/manager/mdsearch/mdsearch.component.ts ***!
  \***************************************************************/
/*! exports provided: MdsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdsearchComponent", function() { return MdsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _service_driver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/driver.service */ "./src/app/service/driver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdsearchComponent = /** @class */ (function () {
    function MdsearchComponent(driverService) {
        this.driverService = driverService;
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            columns: {
                driverId: {
                    title: '驾驶员编号',
                },
                fromtime: {
                    title: '上班时间',
                    filter: false
                },
                totime: {
                    title: '下班时间',
                    filter: false
                },
                workline: {
                    title: '工作路线',
                }
            },
            attr: {
                class: 'table table-bordered'
            }
        };
    }
    MdsearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init");
        this.driverService.getDrivers().then(function (dri) { return _this.drivers = dri; });
    };
    MdsearchComponent.prototype.onSelect = function ($event) {
        console.log($event.target);
    };
    MdsearchComponent.prototype.onSave = function ($event) {
        var _this = this;
        console.log($event.target);
        var l1 = { id: 1,
            driverId: "1",
            fromtime: "hi",
            totime: "hi",
            workline: "jjkk"
        };
        console.log(l1);
        var l2 = { id: 1,
            driverId: "1",
            fromtime: "hi",
            totime: "hi",
            workline: "jjkk"
        };
        console.log(l1);
        var la = [];
        la.push(l1);
        la.push(l2);
        //  this.data = JSON.stringify(la);
        console.log(JSON.stringify(la));
        this.driverService.getDrivers().then(function (dri) { return _this.drivers = dri; });
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](this.drivers);
        // this.driverService.getDrivers.then(drivers => this.drivers = drivers);
    };
    MdsearchComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'driverId',
                search: query
            },
            {
                field: 'workline',
                search: query
            }
        ], false);
    };
    MdsearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mdsearch',
            template: __webpack_require__(/*! ./mdsearch.component.html */ "./src/app/people/manager/mdsearch/mdsearch.component.html"),
            styles: [__webpack_require__(/*! ./mdsearch.component.css */ "./src/app/people/manager/mdsearch/mdsearch.component.css")]
        }),
        __metadata("design:paramtypes", [_service_driver_service__WEBPACK_IMPORTED_MODULE_2__["DriverService"]])
    ], MdsearchComponent);
    return MdsearchComponent;
}());



/***/ }),

/***/ "./src/app/people/manager/mfindsub/mfindsub.component.css":
/*!****************************************************************!*\
  !*** ./src/app/people/manager/mfindsub/mfindsub.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:host /deep/ ng2-smart-table { \r\n  font-size: 16px; \r\n  color:#6f8dc5;\r\n \r\n}\r\n\r\n:host /deep/ ng2-smart-table table{\r\n  border-style: inset;\r\n  border-color: initial;\r\n  -o-border-image: initial;\r\n     border-image: initial;\r\n  border-width: 5px;\r\n  \r\n  display: table;\r\n  border-spacing: 2px;\r\n}\r\n\r\n/* grid lines */\r\n\r\n:host /deep/ ng2-smart-table table > tbody > tr > td {\r\n  box-sizing: border-box;\r\n  border: 1px solid grey;\r\n}\r\n\r\n/* headers grid color*/\r\n\r\n:host /deep/ ng2-smart-table thead > tr > th  { \r\n  border: 1px  grey;\r\n  background-color:#c2f1db;\r\n}\r\n\r\n/*font size*/\r\n\r\n:host /deep/ ng2-smart-table {\r\n  font-size:16px;\r\n}"

/***/ }),

/***/ "./src/app/people/manager/mfindsub/mfindsub.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/people/manager/mfindsub/mfindsub.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<button (click)=\"onSave($event)\">查询修改建议</button>\n\n<br> \n<input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n\n\n"

/***/ }),

/***/ "./src/app/people/manager/mfindsub/mfindsub.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/people/manager/mfindsub/mfindsub.component.ts ***!
  \***************************************************************/
/*! exports provided: MfindsubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfindsubComponent", function() { return MfindsubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _service_submit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/submit.service */ "./src/app/service/submit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MfindsubComponent = /** @class */ (function () {
    function MfindsubComponent(submitService) {
        this.submitService = submitService;
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            columns: {
                subLine: {
                    title: '减少的路线',
                    filter: false
                },
                subNumber: {
                    title: '减少路线的车辆',
                    filter: false
                },
                addLine: {
                    title: '增加的路线',
                    filter: false
                },
                addNumber: {
                    title: '增加路线的车辆',
                    filter: false
                }
            },
            attr: {
                class: 'table table-bordered'
            }
        };
    }
    MfindsubComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init");
        this.submitService.getSubmits().then(function (hi) { return _this.submits = hi; });
    };
    MfindsubComponent.prototype.onSelect = function ($event) {
        console.log($event.target);
    };
    MfindsubComponent.prototype.onSave = function ($event) {
        var _this = this;
        console.log($event.target);
        this.submitService.getSubmits().then(function (dri) { return _this.submits = dri; });
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](this.submits);
        // this.driverService.getDrivers.then(drivers => this.drivers = drivers);
    };
    MfindsubComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'subLine',
                search: query
            },
            {
                field: 'addLine',
                search: query
            }
        ], false);
    };
    MfindsubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mfindsub',
            template: __webpack_require__(/*! ./mfindsub.component.html */ "./src/app/people/manager/mfindsub/mfindsub.component.html"),
            styles: [__webpack_require__(/*! ./mfindsub.component.css */ "./src/app/people/manager/mfindsub/mfindsub.component.css")]
        }),
        __metadata("design:paramtypes", [_service_submit_service__WEBPACK_IMPORTED_MODULE_2__["SubmitService"]])
    ], MfindsubComponent);
    return MfindsubComponent;
}());



/***/ }),

/***/ "./src/app/people/manager/mhsearch/mhsearch.component.css":
/*!****************************************************************!*\
  !*** ./src/app/people/manager/mhsearch/mhsearch.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n:host /deep/ ng2-smart-table { \r\n  font-size: 16px; \r\n  color:#6f8dc5;\r\n \r\n}\r\n\r\n:host /deep/ ng2-smart-table table{\r\n  border-style: inset;\r\n  border-color: initial;\r\n  -o-border-image: initial;\r\n     border-image: initial;\r\n  border-width: 5px;\r\n  \r\n  display: table;\r\n  border-spacing: 2px;\r\n}\r\n\r\n/* grid lines */\r\n\r\n:host /deep/ ng2-smart-table table > tbody > tr > td {\r\n  box-sizing: border-box;\r\n  border: 1px solid grey;\r\n}\r\n\r\n/* headers grid color*/\r\n\r\n:host /deep/ ng2-smart-table thead > tr > th  { \r\n  border: 1px  grey;\r\n  background-color:#c2f1db;\r\n}\r\n\r\n/*font size*/\r\n\r\n:host /deep/ ng2-smart-table {\r\n  font-size:16px;\r\n}"

/***/ }),

/***/ "./src/app/people/manager/mhsearch/mhsearch.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/people/manager/mhsearch/mhsearch.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<button (click)=\"onSave($event)\">查询工作信息</button>\n\n<br> \n<input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n\n\n"

/***/ }),

/***/ "./src/app/people/manager/mhsearch/mhsearch.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/people/manager/mhsearch/mhsearch.component.ts ***!
  \***************************************************************/
/*! exports provided: MhsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MhsearchComponent", function() { return MhsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/history.service */ "./src/app/service/history.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MhsearchComponent = /** @class */ (function () {
    function MhsearchComponent(historyService) {
        this.historyService = historyService;
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            columns: {
                line: {
                    title: '路线id',
                    filter: false
                },
                numberPeople: {
                    title: '单位时间人流量',
                    filter: false
                }
            },
            attr: {
                class: 'table table-bordered'
            }
        };
    }
    MhsearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("init");
        this.historyService.getHistorys().then(function (hi) { return _this.historys = hi; });
    };
    MhsearchComponent.prototype.onSelect = function ($event) {
        console.log($event.target);
    };
    MhsearchComponent.prototype.onSave = function ($event) {
        var _this = this;
        console.log($event.target);
        var l1 = { id: 1,
            line: "hi",
            numberPeople: "hi",
        };
        console.log(l1);
        var l2 = {
            id: 1,
            line: "hi",
            numberPeople: "hi",
        };
        console.log(l1);
        var la = [];
        la.push(l1);
        la.push(l2);
        //  this.data = JSON.stringify(la);
        console.log(JSON.stringify(la));
        this.historyService.getHistorys().then(function (dri) { return _this.historys = dri; });
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](this.historys);
        // this.driverService.getDrivers.then(drivers => this.drivers = drivers);
    };
    MhsearchComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'driverId',
                search: query
            },
            {
                field: 'workline',
                search: query
            }
        ], false);
    };
    MhsearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mhsearch',
            template: __webpack_require__(/*! ./mhsearch.component.html */ "./src/app/people/manager/mhsearch/mhsearch.component.html"),
            styles: [__webpack_require__(/*! ./mhsearch.component.css */ "./src/app/people/manager/mhsearch/mhsearch.component.css")]
        }),
        __metadata("design:paramtypes", [_service_history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"]])
    ], MhsearchComponent);
    return MhsearchComponent;
}());



/***/ }),

/***/ "./src/app/people/manager/msubsub/msubsub.component.css":
/*!**************************************************************!*\
  !*** ./src/app/people/manager/msubsub/msubsub.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/people/manager/msubsub/msubsub.component.html":
/*!***************************************************************!*\
  !*** ./src/app/people/manager/msubsub/msubsub.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2> 您好！请提交你要修改的内容</h2>\n\n\n<div>\n  <label>提交ID号：</label>\n  <input [(ngModel)]=\"submit.id\" >\n</div>\n<div>\n  <label>要减少数量的路线：</label>\n  <input [(ngModel)]=\"submit.subLine\" >\n</div>\n<div>\n  <label>减少的数量：</label>\n  <input [(ngModel)]=\"submit.subNumber\" >\n</div>\n<div>\n  <label>要增加数量的路线：</label>\n  <input [(ngModel)]=\"submit.addLine\" >\n</div>\n<div>\n  <label>增加的数量：</label>\n  <input [(ngModel)]=\"submit.addNumber\" >\n</div>\n\n\n\n<label>是否提交</label>\n<button (click)=\"onClick()\"> 确认 </button>\n\n"

/***/ }),

/***/ "./src/app/people/manager/msubsub/msubsub.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/people/manager/msubsub/msubsub.component.ts ***!
  \*************************************************************/
/*! exports provided: MsubsubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsubsubComponent", function() { return MsubsubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_submit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/submit.service */ "./src/app/service/submit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsubsubComponent = /** @class */ (function () {
    function MsubsubComponent(submitService) {
        this.submitService = submitService;
        this.submit = {
            id: 1,
            subLine: "0",
            subNumber: "0",
            addLine: "0",
            addNumber: "0"
        };
    }
    MsubsubComponent.prototype.ngOnInit = function () {
    };
    MsubsubComponent.prototype.onClick = function () {
        var _this = this;
        console.log("ok");
        var a = 1;
        this.submitService.createSubmit(this.submit).then(function (dri) { return _this.submit = dri; });
    };
    MsubsubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-msubsub',
            template: __webpack_require__(/*! ./msubsub.component.html */ "./src/app/people/manager/msubsub/msubsub.component.html"),
            styles: [__webpack_require__(/*! ./msubsub.component.css */ "./src/app/people/manager/msubsub/msubsub.component.css")]
        }),
        __metadata("design:paramtypes", [_service_submit_service__WEBPACK_IMPORTED_MODULE_1__["SubmitService"]])
    ], MsubsubComponent);
    return MsubsubComponent;
}());



/***/ }),

/***/ "./src/app/people/msearchnavbar/msearchnavbar.component.css":
/*!******************************************************************!*\
  !*** ./src/app/people/msearchnavbar/msearchnavbar.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navigation link styles */\r\n\r\n.nv{\r\n    float: none;\r\n    text-align: center;\r\n}\r\n\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\n\r\nnav a:visited,\r\n  a:link {\r\n    color: #607D8B;\r\n  }\r\n\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n  }\r\n\r\nnav a.active {\r\n    color: #039be5;\r\n  }"

/***/ }),

/***/ "./src/app/people/msearchnavbar/msearchnavbar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/people/msearchnavbar/msearchnavbar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nv\">\n \n  <nav>\n    <a routerLink=\"/manager\" routerLinkActive=\"active\" id=\"1\">查询驾驶员信息</a>\n    <a routerLink=\"/history\" routerLinkActive=\"active\" id=\"2\">查询历史客运量</a>\n    <a routerLink=\"/subsubmit\" routerLinkActive=\"active\" id=\"3\">提交修改计划</a>\n    <a routerLink=\"/submit\" routerLinkActive=\"active\" id=\"4\">查询修改计划</a>\n  </nav>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/people/msearchnavbar/msearchnavbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/people/msearchnavbar/msearchnavbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: MsearchnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsearchnavbarComponent", function() { return MsearchnavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MsearchnavbarComponent = /** @class */ (function () {
    function MsearchnavbarComponent() {
    }
    MsearchnavbarComponent.prototype.ngOnInit = function () {
    };
    MsearchnavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-msearchnavbar',
            template: __webpack_require__(/*! ./msearchnavbar.component.html */ "./src/app/people/msearchnavbar/msearchnavbar.component.html"),
            styles: [__webpack_require__(/*! ./msearchnavbar.component.css */ "./src/app/people/msearchnavbar/msearchnavbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MsearchnavbarComponent);
    return MsearchnavbarComponent;
}());



/***/ }),

/***/ "./src/app/people/search-nav-bar/search-nav-bar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/people/search-nav-bar/search-nav-bar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navigation link styles */\r\n\r\n.nv{\r\n    float: none;\r\n    text-align: center;\r\n}\r\n\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\n\r\nnav a:visited,\r\n  a:link {\r\n    color: #607D8B;\r\n  }\r\n\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n  }\r\n\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/people/search-nav-bar/search-nav-bar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/people/search-nav-bar/search-nav-bar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nv\">\r\n  <nav>\r\n    <a routerLink=\"/search\" routerLinkActive=\"active\" id=\"查询公交信息\">查询公交信息</a>\r\n    <a routerLink=\"/search1\" routerLinkActive=\"active\" id=\"查看地图\">查看地图</a>\r\n  </nav>\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/people/search-nav-bar/search-nav-bar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/people/search-nav-bar/search-nav-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNavBarComponent", function() { return SearchNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchNavBarComponent = /** @class */ (function () {
    function SearchNavBarComponent() {
    }
    SearchNavBarComponent.prototype.ngOnInit = function () {
    };
    SearchNavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-nav-bar',
            template: __webpack_require__(/*! ./search-nav-bar.component.html */ "./src/app/people/search-nav-bar/search-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-nav-bar.component.css */ "./src/app/people/search-nav-bar/search-nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchNavBarComponent);
    return SearchNavBarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.text-xs-center {\r\n    font-family: \"Source Sans Pro\", sans-serif;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: #373a3c;\r\n    background-color: #fff;\r\n        text-align: center !important; }\r\n\r\n    a:-webkit-any-link {\r\n        color: blue;\r\n        cursor: pointer;\r\n        text-decoration: underline;\r\n        -webkit-text-decoration-line: underline;\r\n                text-decoration-line: underline;\r\n        -webkit-text-decoration-style: initial;\r\n                text-decoration-style: initial;\r\n        -webkit-text-decoration-color: yellow;\r\n                text-decoration-color: yellow;\r\n    }\r\n\r\n    fieldset {\r\n        min-width: 0;\r\n        padding: 0;\r\n        margin: 0;\r\n        border: 0;\r\n        display: block;\r\n        \r\n    -webkit-margin-start: 2px;\r\n    -webkit-margin-end: 2px;\r\n    -webkit-padding-before: 0.35em;\r\n    -webkit-padding-start: 0.75em;\r\n    -webkit-padding-end: 0.75em;\r\n    -webkit-padding-after: 0.625em;\r\n    }\r\n\r\n    .form-control {\r\n        display: block;\r\n        width: 100%;\r\n        padding: 0.5rem 0.75rem;\r\n        font-size: 1rem;\r\n        line-height: 1.25;\r\n        color: #55595c;\r\n        background-color: #fff;\r\n        background-image: none;\r\n        background-clip: padding-box;\r\n        border: 1px solid rgba(0, 0, 0, 0.15);\r\n        border-radius: 0.25rem;\r\n    }\r\n\r\n    .pull-xs-right {\r\n                    float: right !important; }\r\n\r\n    .btn {\r\n                        display: inline-block;\r\n                        font-weight: normal;\r\n                        line-height: 1.25;\r\n                        text-align: center;\r\n                        white-space: nowrap;\r\n                        vertical-align: middle;\r\n                        cursor: pointer;\r\n                        -webkit-user-select: none;\r\n                           -moz-user-select: none;\r\n                            -ms-user-select: none;\r\n                                user-select: none;\r\n                        border: 1px solid transparent;\r\n                        padding: 0.5rem 1rem;\r\n                        font-size: 1rem;\r\n                        border-radius: 0.25rem;\r\n                        color: #fff;\r\n                        background-color: #5CB85C;\r\n                        border-color: #5CB85C;\r\n                    }\r\n\r\n    .row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-left: -15px;\r\n    margin-right: -15px;\r\n}\r\n\r\n    *, *::before, *::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\n    div {\r\n    display: block;\r\n}\r\n\r\n    body {\r\n    font-family: \"Source Sans Pro\", sans-serif;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: #373a3c;\r\n    background-color: #fff;\r\n}\r\n\r\n    .col-md-6{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page\">\r\n    <div class=\"container page\">\r\n      <div class=\"row\">\r\n  \r\n        <div class=\"col-md-6 offset-md-3 col-xs-12\">\r\n          <h1 class=\"text-xs-center\">{{ title }}</h1>\r\n          <p class=\"text-xs-center\">\r\n            <a [routerLink]=\"['/login']\" *ngIf=\"authType == 'register'\">Have an account?</a>\r\n            <a [routerLink]=\"['/register']\" *ngIf=\"authType == 'login'\">Need an account?</a>\r\n          </p>\r\n          <form [formGroup]=\"authForm\" (ngSubmit)=\"submitForm()\">\r\n            <fieldset  [disabled]=\"isSubmitting\">\r\n              <fieldset class=\"form-group\">\r\n                <input\r\n                  formControlName=\"name\"\r\n                  placeholder=\"name\"\r\n                  class=\"form-control form-control-lg\"\r\n                  type=\"text\"\r\n                  *ngIf=\"authType == 'register'\" />\r\n              </fieldset>\r\n              <fieldset class=\"form-group\">\r\n                <input\r\n                  formControlName=\"username\"\r\n                  placeholder=\"username\"\r\n                  class=\"form-control form-control-lg\"\r\n                  type=\"text\" />\r\n                <label *ngIf=\"auth?.hasError\">{{auth.errMsg}}</label>\r\n              </fieldset>\r\n              <fieldset class=\"form-group\">\r\n                <input\r\n                  formControlName=\"password\"\r\n                  placeholder=\"Password\"\r\n                  class=\"form-control form-control-lg\"\r\n                  type=\"password\" />\r\n              </fieldset>\r\n              <button class=\"btn btn-lg btn-primary pull-xs-right\" [disabled]=\"!authForm.valid\" type=\"submit\">\r\n                {{ title }}\r\n              </button>\r\n            </fieldset>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n </div>\r\n  "

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _domain_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/user */ "./src/app/domain/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, fb, router, service, userservice) {
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.userservice = userservice;
        this.authType = '';
        this.title = '';
        this.isSubmitting = false;
        this.username = "";
        this.password = "";
        this.us = new _domain_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.authForm = this.fb.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (data) {
            _this.authType = data[data.length - 1].path;
            _this.title = (_this.authType === "login") ? 'Sign in' : 'Sign up';
            if (_this.authType === 'register') {
                _this.authForm.addControl('name', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
            }
        });
    };
    /*test(){
      this.popupSVC.toast({
          img: '弹出图片地址！',
          title: '弹出消息内容！',
          duration: 2000,  //toast多久后消失，默认为500ms
      });
  }*/
    RegisterComponent.prototype.submitForm = function () {
        var _this = this;
        var credentials = this.authForm.value;
        if (this.authType === 'login') {
            this.service.loginWithCredentials(credentials)
                .then(function (auth) {
                var redirectUrl = (auth.redirectUrl === null) ? '' : auth.redirectUrl;
                if (!auth.hasError) {
                    _this.us = auth.user;
                    console.log("cavadv");
                    if (_this.us.belongclass === "driver") {
                        _this.router.navigate(["/driver"]);
                    }
                    else if (_this.us.belongclass === "ceo") {
                        _this.router.navigate(["/ceo"]);
                    }
                    else if (_this.us.belongclass === "manager") {
                        console.log('can to here');
                        _this.router.navigate(["/manager"]);
                    }
                    else {
                        _this.router.navigate([redirectUrl]);
                    }
                    //this.router.navigate(["error"]);
                    //this.router.navigate([redirectUrl]);
                    console.log(_this.us.belongclass);
                    console.log(auth.redirectUrl);
                    localStorage.removeItem('redirectUrl');
                    location.reload();
                }
                else {
                    _this.auth = Object.assign({}, auth);
                }
            });
        }
        else if (this.authType === 'register') {
            this.userservice.createUser(credentials).then(function (us) {
                if (us) {
                    _this.router.navigateByUrl('login');
                }
            });
        }
        this.isSubmitting = true;
        console.log(this.authForm.value);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('auth')),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('user')),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, Object])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService.prototype.getUrl = function () {
        return 'http://localhost:3004';
    };
    ApiService.prototype.getLineUrl = function () {
        return 'http://localhost:3000';
    };
    ApiService.prototype.getProposalUrl = function () {
        return 'http://localhost:3005';
    };
    ApiService.prototype.getDriverUrl = function () {
        return 'http://localhost:3001';
    };
    ApiService.prototype.getHistoryUrl = function () {
        return 'http://localhost:3002';
    };
    ApiService.prototype.getSubmitUrl = function () {
        return 'http://localhost:3003';
    };
    ApiService.prototype.getHeaders = function () {
        return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        console.log(url);
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        //已登录
        if (localStorage.getItem('userId') !== null) {
            //返回true，放行
            return true;
        }
        //未登录
        else {
            //首先将要访问的URL暂存
            localStorage.setItem('redirectUrl', url);
            //然后导航到登录页面
            this.router.navigate(['/login']);
            //返回false，取消本次导航
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/auth */ "./src/app/domain/auth.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AuthService = /** @class */ (function () {
    function AuthService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    AuthService.prototype.loginWithCredentials = function (us) {
        return this.userService.getUserByUsername(us.username) //在使用有真正的后端时，应该发送username到后端//调用UserService中的方法来查找user
            .then(function (user) {
            var auth = new _domain_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"]();
            localStorage.removeItem('userId'); //首先移除当前本地存储的userId
            //登陆时不同权限的人跳转到不同界面
            //登陆后访问时的权限情况在auth-guard 服务中
            //登陆后 有些组件对于不同的人有不同的显示
            var redirectUrl = (localStorage.getItem('redirectUrl') === null) ?
                '' : localStorage.getItem('redirectUrl');
            auth.redirectUrl = redirectUrl; //存储原本要访问的Url
            if (null === user) {
                //没找到user
                auth.hasError = true;
                auth.errMsg = 'user not found';
            }
            else if (us.password === user.password) {
                //找到user并与密码匹配成功
                auth.user = Object.assign({}, user);
                auth.hasError = false;
                localStorage.setItem('userId', user.id);
                localStorage.setItem('belongclass', user.belongclass);
            }
            else {
                //密码错误
                //做出一些修改 添加一些信息
                auth.hasError = true;
                auth.errMsg = 'password not match';
            }
            console.log(auth);
            return auth;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('user')),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], Object])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/driver.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/driver.service.ts ***!
  \*******************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverService = /** @class */ (function () {
    function DriverService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.DRIVERS = [{ id: 1,
                driverId: "1",
                fromtime: "hi",
                totime: "hi",
                workline: "jjkk" }];
        this.api_url = apiService.getDriverUrl() + '/driver';
        this.headers = apiService.getHeaders();
    }
    DriverService.prototype.getDrivers = function () {
        var url = "" + this.api_url;
        console.log(url);
        console.log("are you ok");
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // getDrivers():Promise<Driver[]>
    // {
    //   return Promise.resolve(this.DRIVERS);
    // }
    DriverService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    DriverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], DriverService);
    return DriverService;
}());



/***/ }),

/***/ "./src/app/service/history.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/history.service.ts ***!
  \********************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryService = /** @class */ (function () {
    function HistoryService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.HISTORYS = [{
                id: 1,
                line: "1",
                numberPeople: "1000"
            }];
        this.api_url = apiService.getHistoryUrl() + '/history';
        this.headers = apiService.getHeaders();
    }
    HistoryService.prototype.getHistorys = function () {
        var url = "" + this.api_url;
        console.log(url);
        console.log("are you ok");
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HistoryService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    HistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ }),

/***/ "./src/app/service/line.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/line.service.ts ***!
  \*****************************************/
/*! exports provided: LineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineService", function() { return LineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/toPromise';
var LineService = /** @class */ (function () {
    function LineService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.api_url = apiService.getLineUrl() + '/line';
        this.headers = apiService.getHeaders();
    }
    LineService.prototype.getLines = function () {
        var url = "" + this.api_url;
        console.log(url);
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LineService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], LineService);
    return LineService;
}());



/***/ }),

/***/ "./src/app/service/popup.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/popup.service.ts ***!
  \******************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupService = /** @class */ (function () {
    function PopupService(router) {
        this.router = router;
    }
    PopupService.prototype.toast = function (_params) {
        var _this = this;
        this.toastParams = _params;
        var _duration;
        if (_params.duration) {
            _duration = _params.duration;
        }
        else {
            _duration = 500;
        }
        var _outlets = { 'popup': 'toast' };
        this.router.navigate([{ outlets: _outlets }]);
        setTimeout(function () {
            var _outlets2 = { 'popup': null };
            _this.router.navigate([{ outlets: _outlets2 }]);
        }, _duration);
    };
    PopupService.prototype.getToastParams = function () {
        return this.toastParams;
    };
    PopupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "./src/app/service/proposal.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/proposal.service.ts ***!
  \*********************************************/
/*! exports provided: ProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalService", function() { return ProposalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { PROPOSALS } from '../temp-proposals';


var ProposalService = /** @class */ (function () {
    function ProposalService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.api_url = apiService.getProposalUrl() + '/proposals';
        this.headers = apiService.getHeaders();
    }
    ProposalService.prototype.getProposals = function () {
        var url = "" + this.api_url;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // 按照 id 获取 proposal
    ProposalService.prototype.getProposalById = function (id) {
        var url = this.api_url + "/" + id;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // 新建 proposal
    ProposalService.prototype.createProposal = function (proposal) {
        var url = "" + this.api_url;
        return this.http
            .post(url, JSON.stringify(proposal), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // 按name新建proposal
    ProposalService.prototype.createProposalByName = function (name) {
        var proposal = {
            name: name
        };
        var url = "" + this.api_url;
        return this.http
            .post(url, JSON.stringify(proposal), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // 修改 proposal
    ProposalService.prototype.updateProposal = function (proposal) {
        var url = this.api_url + "/" + proposal.id;
        return this.http
            .put(url, JSON.stringify(proposal), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // 修改 line
    ProposalService.prototype.updateLine = function (proposal) {
        var lineUrl = this.apiService.getLineUrl() + '/line';
        var url = lineUrl + "/" + proposal.id;
        console.log(url);
        var line = {
            id: proposal.id,
            lineId: proposal.lineId,
            stations: proposal.newStations
        };
        return this.http
            .put(url, JSON.stringify(line), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // 删除某个 proposal
    ProposalService.prototype.deleteProposal = function (proposal) {
        var url = this.api_url + "/" + proposal.id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // 按id删除某个 proposal
    ProposalService.prototype.deleteProposalById = function (id) {
        var url = this.api_url + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ProposalService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    ProposalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProposalService);
    return ProposalService;
}());



/***/ }),

/***/ "./src/app/service/submit.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/submit.service.ts ***!
  \*******************************************/
/*! exports provided: SubmitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitService", function() { return SubmitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmitService = /** @class */ (function () {
    function SubmitService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.SUBMITS = [{
                id: 1,
                subLine: "1",
                subNumber: "1000",
                addLine: "2",
                addNumber: "1000"
            }];
        this.api_url = apiService.getSubmitUrl() + '/submit';
        this.headers = apiService.getHeaders();
    }
    SubmitService.prototype.getSubmits = function () {
        var url = "" + this.api_url;
        console.log(url);
        console.log("are you ok");
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SubmitService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    //新建submit
    SubmitService.prototype.createSubmit = function (submit) {
        var url = "" + this.api_url;
        return this.http
            .post(url, JSON.stringify(submit), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SubmitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SubmitService);
    return SubmitService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.api_url = apiService.getUrl() + '/users';
        this.headers = apiService.getHeaders();
    }
    UserService.prototype.getUsers = function () {
        var url = "" + this.api_url;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserByUsername = function (username) {
        console.log(username);
        var url = this.api_url + "/?username=" + username;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var users = res.json();
            return (users.length > 0) ? users[0] : null;
        })
            .catch(this.handleError);
    };
    UserService.prototype.createUser = function (user) {
        var url = "" + this.api_url;
        user.belongclass = 'driver';
        return this.http
            .post(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            res.json();
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.getUserById = function (id) {
        var url = this.api_url + "/" + id;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/toast/toast.component.css":
/*!*******************************************!*\
  !*** ./src/app/toast/toast.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/toast/toast.component.html":
/*!********************************************!*\
  !*** ./src/app/toast/toast.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"toast-box\">\n      <p class=\"toast-title\">提示</p>\n      <div class=\"toast-content\">\n          <ng-container *ngIf=\"toastParams.img\">\n              <img src=\"{{toastParams.img}}\" class=\"toast-content-img\">\n          </ng-container>\n          <ng-container *ngIf=\"toastParams.title\">\n              <p class=\"toast-content-p\">{{toastParams.title}}</p>\n          </ng-container>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/toast/toast.component.ts":
/*!******************************************!*\
  !*** ./src/app/toast/toast.component.ts ***!
  \******************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
    }
    ToastComponent.prototype.ngOnInit = function () {
        this.toastParams = this.popupSVC.getToastParams();
    };
    ToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toast',
            template: __webpack_require__(/*! ./toast.component.html */ "./src/app/toast/toast.component.html"),
            styles: [__webpack_require__(/*! ./toast.component.css */ "./src/app/toast/toast.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\mygit\Intelligent-bus-information-management-system\font-end\v1.1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map