(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>"

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
        this.title = 'EasyWaiter';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _waiter_view_waiter_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./waiter-view/waiter-view.component */ "./src/app/waiter-view/waiter-view.component.ts");
/* harmony import */ var _kitchen_view_kitchen_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kitchen-view/kitchen-view.component */ "./src/app/kitchen-view/kitchen-view.component.ts");
/* harmony import */ var _manager_view_manager_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manager-view/manager-view.component */ "./src/app/manager-view/manager-view.component.ts");
/* harmony import */ var _waiter_view_table_view_tabs_menu_tab_menu_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./waiter-view/table-view-tabs/menu-tab/menu-tab.component */ "./src/app/waiter-view/table-view-tabs/menu-tab/menu-tab.component.ts");
/* harmony import */ var _waiter_view_table_view_tabs_pending_tab_pending_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./waiter-view/table-view-tabs/pending-tab/pending-tab.component */ "./src/app/waiter-view/table-view-tabs/pending-tab/pending-tab.component.ts");
/* harmony import */ var _waiter_view_table_view_tabs_ordered_tab_ordered_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./waiter-view/table-view-tabs/ordered-tab/ordered-tab.component */ "./src/app/waiter-view/table-view-tabs/ordered-tab/ordered-tab.component.ts");
/* harmony import */ var _waiter_view_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./waiter-view/table-view/table-view.component */ "./src/app/waiter-view/table-view/table-view.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoute = [
    { path: 'waiter-view', component: _waiter_view_waiter_view_component__WEBPACK_IMPORTED_MODULE_8__["WaiterViewComponent"] },
    { path: 'table-view/:id', component: _waiter_view_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_14__["TableViewComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'kitchen-view', component: _kitchen_view_kitchen_view_component__WEBPACK_IMPORTED_MODULE_9__["KitchenViewComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _waiter_view_waiter_view_component__WEBPACK_IMPORTED_MODULE_8__["WaiterViewComponent"],
                _kitchen_view_kitchen_view_component__WEBPACK_IMPORTED_MODULE_9__["KitchenViewComponent"],
                _manager_view_manager_view_component__WEBPACK_IMPORTED_MODULE_10__["ManagerViewComponent"],
                _waiter_view_table_view_tabs_menu_tab_menu_tab_component__WEBPACK_IMPORTED_MODULE_11__["MenuTabComponent"],
                _waiter_view_table_view_tabs_pending_tab_pending_tab_component__WEBPACK_IMPORTED_MODULE_12__["PendingTabComponent"],
                _waiter_view_table_view_tabs_ordered_tab_ordered_tab_component__WEBPACK_IMPORTED_MODULE_13__["OrderedTabComponent"],
                _waiter_view_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_14__["TableViewComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_5__["DragAndDropModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoute, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/kitchen-view/kitchen-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/kitchen-view/kitchen-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kitchen-view/kitchen-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/kitchen-view/kitchen-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink = \"/waiter-view/\">Login Waiter</a>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-4 border\" mwlDroppable (drop) = 'moveToToDo($event.dropData)' >\n        To Do\n        <ul class=\"list-group\" *ngFor = 'let td of toDoOrders'>\n            <div mwlDraggable [dropData] = td>\n            <li class=\"list-group-item\">{{td.name}}  for Table:{{td.tableNumber}}\n            </li>\n        </div>\n          </ul>\n      </div>\n      <div class=\"col-4 border\" mwlDroppable (drop)='moveToInProg($event.dropData)'>\n        In Progress\n        <ul class=\"list-group\" *ngFor = 'let ip of inProgOrders'>\n            <div mwlDraggable [dropData] = ip>\n            <li class=\"list-group-item\">{{ip.name}} for Table:{{ip.tableNumber}}\n            </li>\n        </div>\n          </ul>\n      </div>\n      <div class=\"col-4 border\" mwlDroppable (drop)='moveToFinished($event.dropData)'>\n        Finished\n       <ul class=\"list-group\" *ngFor = 'let f of finishedOrders'>\n            <li class=\"list-group-item\">{{f.name}} for Table:{{f.tableNumber}}\n            </li>\n            \n          </ul>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/kitchen-view/kitchen-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/kitchen-view/kitchen-view.component.ts ***!
  \********************************************************/
/*! exports provided: KitchenViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenViewComponent", function() { return KitchenViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/order-model */ "./src/app/models/order-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KitchenViewComponent = /** @class */ (function () {
    function KitchenViewComponent(_restaurantService) {
        this._restaurantService = _restaurantService;
    }
    KitchenViewComponent.prototype.ngOnInit = function () {
        this.toDoOrders = this._restaurantService.getToDoOrders();
        this.inProgOrders = this._restaurantService.getInProgOrders();
        this.finishedOrders = this._restaurantService.getFinishedOrders();
    };
    KitchenViewComponent.prototype.getToDoOrders = function () {
        return this._restaurantService.getToDoOrders();
    };
    KitchenViewComponent.prototype.moveToToDo = function (order) {
        order.status = _models_order_model__WEBPACK_IMPORTED_MODULE_2__["ORDER_STATUS"].TO_DO;
        this.toDoOrders = this._restaurantService.getToDoOrders();
        this.inProgOrders = this._restaurantService.getInProgOrders();
    };
    KitchenViewComponent.prototype.moveToInProg = function (order) {
        order.status = _models_order_model__WEBPACK_IMPORTED_MODULE_2__["ORDER_STATUS"].IN_PROGRESS;
        this.toDoOrders = this._restaurantService.getToDoOrders();
        this.inProgOrders = this._restaurantService.getInProgOrders();
    };
    KitchenViewComponent.prototype.moveToFinished = function (order) {
        order.status = _models_order_model__WEBPACK_IMPORTED_MODULE_2__["ORDER_STATUS"].FINISHED;
        this.inProgOrders = this._restaurantService.getInProgOrders();
        this.finishedOrders = this._restaurantService.getFinishedOrders();
    };
    KitchenViewComponent.prototype.ngDoCheck = function () {
        this.toDoOrders = this._restaurantService.getToDoOrders();
    };
    KitchenViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen-view',
            template: __webpack_require__(/*! ./kitchen-view.component.html */ "./src/app/kitchen-view/kitchen-view.component.html"),
            styles: [__webpack_require__(/*! ./kitchen-view.component.css */ "./src/app/kitchen-view/kitchen-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"]])
    ], KitchenViewComponent);
    return KitchenViewComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <h1>Easy Waiter</h1>\n  </div>\n\n<a routerLink = \"/waiter-view/\">Login Waiter</a>\n<a routerLink = \"/kitchen-view/\">Login Kitchen</a>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    //Todo make purty
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manager-view/manager-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manager-view/manager-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manager-view/manager-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manager-view/manager-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  manager-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/manager-view/manager-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manager-view/manager-view.component.ts ***!
  \********************************************************/
/*! exports provided: ManagerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerViewComponent", function() { return ManagerViewComponent; });
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

var ManagerViewComponent = /** @class */ (function () {
    function ManagerViewComponent() {
    }
    ManagerViewComponent.prototype.ngOnInit = function () {
    };
    ManagerViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manager-view',
            template: __webpack_require__(/*! ./manager-view.component.html */ "./src/app/manager-view/manager-view.component.html"),
            styles: [__webpack_require__(/*! ./manager-view.component.css */ "./src/app/manager-view/manager-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagerViewComponent);
    return ManagerViewComponent;
}());



/***/ }),

/***/ "./src/app/models/food-model.ts":
/*!**************************************!*\
  !*** ./src/app/models/food-model.ts ***!
  \**************************************/
/*! exports provided: FOOD_CATEGORY, FoodModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOD_CATEGORY", function() { return FOOD_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodModel", function() { return FoodModel; });
var FOOD_CATEGORY;
(function (FOOD_CATEGORY) {
    FOOD_CATEGORY[FOOD_CATEGORY["APPETIZER"] = 0] = "APPETIZER";
    FOOD_CATEGORY[FOOD_CATEGORY["SIDE"] = 1] = "SIDE";
    FOOD_CATEGORY[FOOD_CATEGORY["ENTREE"] = 2] = "ENTREE";
    FOOD_CATEGORY[FOOD_CATEGORY["DESSERT"] = 3] = "DESSERT";
})(FOOD_CATEGORY || (FOOD_CATEGORY = {}));
;
var FoodModel = /** @class */ (function () {
    function FoodModel(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return FoodModel;
}());



/***/ }),

/***/ "./src/app/models/menu-model.ts":
/*!**************************************!*\
  !*** ./src/app/models/menu-model.ts ***!
  \**************************************/
/*! exports provided: MenuModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModel", function() { return MenuModel; });
/* harmony import */ var _food_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-model */ "./src/app/models/food-model.ts");

var MenuModel = /** @class */ (function () {
    function MenuModel() {
        this.appetizers = [];
        this.entrees = [];
        this.sides = [];
        this.desserts = [];
    }
    MenuModel.prototype.add_item = function (food) {
        switch (food.category) {
            case _food_model__WEBPACK_IMPORTED_MODULE_0__["FOOD_CATEGORY"].APPETIZER:
                this.appetizers.push(food);
                break;
            case _food_model__WEBPACK_IMPORTED_MODULE_0__["FOOD_CATEGORY"].ENTREE:
                this.entrees.push(food);
                break;
            case _food_model__WEBPACK_IMPORTED_MODULE_0__["FOOD_CATEGORY"].SIDE:
                this.sides.push(food);
                break;
            case _food_model__WEBPACK_IMPORTED_MODULE_0__["FOOD_CATEGORY"].DESSERT:
                this.desserts.push(food);
                break;
            default:
                break;
        }
    };
    return MenuModel;
}());



/***/ }),

/***/ "./src/app/models/order-model.ts":
/*!***************************************!*\
  !*** ./src/app/models/order-model.ts ***!
  \***************************************/
/*! exports provided: ORDER_STATUS, OrderModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_STATUS", function() { return ORDER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return OrderModel; });
/* harmony import */ var _food_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-model */ "./src/app/models/food-model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS[ORDER_STATUS["TO_DO"] = 0] = "TO_DO";
    ORDER_STATUS[ORDER_STATUS["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    ORDER_STATUS[ORDER_STATUS["FINISHED"] = 2] = "FINISHED";
    ORDER_STATUS[ORDER_STATUS["DELIVERED"] = 3] = "DELIVERED";
})(ORDER_STATUS || (ORDER_STATUS = {}));
;
var OrderModel = /** @class */ (function (_super) {
    __extends(OrderModel, _super);
    function OrderModel(food, tableNumber) {
        var _this = _super.call(this, food.name, food.price, food.category) || this;
        _this.status = ORDER_STATUS.TO_DO;
        _this.tableNumber = tableNumber;
        _this.status = ORDER_STATUS.TO_DO;
        return _this;
    }
    OrderModel.prototype.getStatusString = function () {
        return OrderModel.OrderStatusStrings[this.status];
    };
    OrderModel.OrderStatusStrings = ['To do', 'In Progress', 'Finished', 'Delivered'];
    return OrderModel;
}(_food_model__WEBPACK_IMPORTED_MODULE_0__["FoodModel"]));



/***/ }),

/***/ "./src/app/models/table-model.ts":
/*!***************************************!*\
  !*** ./src/app/models/table-model.ts ***!
  \***************************************/
/*! exports provided: TableModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModel", function() { return TableModel; });
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-model */ "./src/app/models/order-model.ts");

var TableModel = /** @class */ (function () {
    function TableModel(tableNumber, numSeats, assignedTo, isActive, orders, pendingOrder) {
        if (orders === void 0) { orders = []; }
        if (pendingOrder === void 0) { pendingOrder = []; }
        this.Orders = [];
        this.PendingOrders = [];
        this.tableNumber = tableNumber;
        this.numSeats = numSeats;
        this.assignedTo = assignedTo;
        this.isActive = isActive;
        this.Orders = orders;
        this.PendingOrders = pendingOrder;
    }
    TableModel.prototype.addToPending = function (foodItem) {
        var order = new _order_model__WEBPACK_IMPORTED_MODULE_0__["OrderModel"](foodItem, this.tableNumber);
        this.PendingOrders.push(order);
    };
    TableModel.prototype.removeFromPending = function (pendingItem) {
        this.PendingOrders.splice(this.PendingOrders.indexOf(pendingItem), 1);
    };
    TableModel.prototype.readyForPickup = function () {
        for (var _i = 0, _a = this.Orders; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o.status == _order_model__WEBPACK_IMPORTED_MODULE_0__["ORDER_STATUS"].FINISHED)
                return true;
        }
        return false;
    };
    return TableModel;
}());



/***/ }),

/***/ "./src/app/models/user-model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user-model.ts ***!
  \**************************************/
/*! exports provided: USER_TYPE, UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TYPE", function() { return USER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var USER_TYPE;
(function (USER_TYPE) {
    USER_TYPE[USER_TYPE["WAITER"] = 0] = "WAITER";
    USER_TYPE[USER_TYPE["MANAGER"] = 1] = "MANAGER";
    USER_TYPE[USER_TYPE["KITCHEN"] = 2] = "KITCHEN";
})(USER_TYPE || (USER_TYPE = {}));
;
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_menu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/menu-model */ "./src/app/models/menu-model.ts");
/* harmony import */ var _models_food_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/food-model */ "./src/app/models/food-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var foodList = [
    {
        name: 'Wings',
        price: 12.99,
        category: _models_food_model__WEBPACK_IMPORTED_MODULE_2__["FOOD_CATEGORY"].APPETIZER
    },
    {
        name: 'Steak',
        price: 22.99,
        category: _models_food_model__WEBPACK_IMPORTED_MODULE_2__["FOOD_CATEGORY"].ENTREE
    },
    {
        name: 'Fries',
        price: 2.99,
        category: _models_food_model__WEBPACK_IMPORTED_MODULE_2__["FOOD_CATEGORY"].SIDE
    },
    {
        name: 'Ice Cream',
        price: 7.99,
        category: _models_food_model__WEBPACK_IMPORTED_MODULE_2__["FOOD_CATEGORY"].DESSERT
    }
];
var MenuService = /** @class */ (function () {
    function MenuService() {
        this.menu = new _models_menu_model__WEBPACK_IMPORTED_MODULE_1__["MenuModel"]();
        for (var i = 0; i < foodList.length; i++) {
            this.menu.add_item(foodList[i]);
        }
    }
    MenuService.prototype.getMenu = function () {
        return this.menu;
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/services/restaurant.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/restaurant.service.ts ***!
  \************************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_table_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/table-model */ "./src/app/models/table-model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/order-model */ "./src/app/models/order-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestaurantService = /** @class */ (function () {
    function RestaurantService(_userServers) {
        this.tables = tableData;
        console.log('Restaurant service constructor');
    }
    RestaurantService.prototype.getWaitersTables = function (waiter) {
        return tableData.filter(function (t) { return t.assignedTo === waiter; });
    };
    RestaurantService.prototype.getToDoOrders = function () {
        var todoOrders = [];
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var table = _a[_i];
            if (table.isActive) {
                todoOrders = todoOrders.concat(table.Orders.filter(function (t) { return t.status === _models_order_model__WEBPACK_IMPORTED_MODULE_3__["ORDER_STATUS"].TO_DO; }));
            }
        }
        return todoOrders;
    };
    RestaurantService.prototype.getInProgOrders = function () {
        var inProgOrders = [];
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var table = _a[_i];
            if (table.isActive) {
                inProgOrders = inProgOrders.concat(table.Orders.filter(function (t) { return t.status === _models_order_model__WEBPACK_IMPORTED_MODULE_3__["ORDER_STATUS"].IN_PROGRESS; }));
            }
        }
        return inProgOrders;
    };
    RestaurantService.prototype.getFinishedOrders = function () {
        var finishedOrders = [];
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var table = _a[_i];
            if (table.isActive) {
                finishedOrders = finishedOrders.concat(table.Orders.filter(function (t) { return t.status === _models_order_model__WEBPACK_IMPORTED_MODULE_3__["ORDER_STATUS"].FINISHED; }));
            }
        }
        return finishedOrders;
    };
    RestaurantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RestaurantService);
    return RestaurantService;
}());

var tableData = [
    new _models_table_model__WEBPACK_IMPORTED_MODULE_1__["TableModel"](1, 4, _user_service__WEBPACK_IMPORTED_MODULE_2__["waiterData"][0], true),
    new _models_table_model__WEBPACK_IMPORTED_MODULE_1__["TableModel"](2, 5, _user_service__WEBPACK_IMPORTED_MODULE_2__["waiterData"][0], true),
    new _models_table_model__WEBPACK_IMPORTED_MODULE_1__["TableModel"](3, 6, _user_service__WEBPACK_IMPORTED_MODULE_2__["waiterData"][0], true),
    new _models_table_model__WEBPACK_IMPORTED_MODULE_1__["TableModel"](4, 8, _user_service__WEBPACK_IMPORTED_MODULE_2__["waiterData"][0], true)
];


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: waiterData, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waiterData", function() { return waiterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user-model */ "./src/app/models/user-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var waiterData = [{
        userName: 'thill1',
        userPassword: 'password',
        userEmail: 'thomas@easywaiter.com',
        userType: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["USER_TYPE"].WAITER
    },
    {
        userName: 'kahle2',
        userPassword: 'password2',
        userEmail: 'kahle2@easywaiter.com',
        userType: _models_user_model__WEBPACK_IMPORTED_MODULE_1__["USER_TYPE"].WAITER
    }];
var UserService = /** @class */ (function () {
    function UserService() {
        this.user = waiterData[0];
    }
    //might call database on initialization
    UserService.prototype.getCurrentUser = function () {
        return this.user;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/waiter-view/table-view-tabs/menu-tab/menu-tab.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/waiter-view/table-view-tabs/menu-tab/menu-tab.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/waiter-view/table-view-tabs/menu-tab/menu-tab.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/waiter-view/table-view-tabs/menu-tab/menu-tab.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered \">\n  <thead>\n    <th colspan=\"2\" class = \"text-center\">Appetizers</th>\n    \n  </thead>\n  <tbody>\n    <tr *ngFor=\"let a of menu.appetizers\">\n      <td width=\"50%\"> \n        {{a.name}} {{a.price}}\n      </td>\n      <td class=\"text-center\" width=\"50%\"> \n        <button class=\"btn btn-success\" (click) = 'addFoodToPending(a)'>Add</button>\n      </td>\n    </tr>\n  </tbody>\n  \n</table>\n\n<table class=\"table table-bordered \">\n  <thead>\n    <th colspan=\"2\" class = \"text-center\">Sides</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let s of menu.sides\">\n      <td width=\"50%\">\n        {{s.name}} {{s.price}}\n      </td>\n      <td class=\"text-center\" width=\"50%\">\n          <button class=\"btn btn-success\" (click) = 'addFoodToPending(s)'>Add</button>\n      </td>\n      \n    </tr>\n  </tbody>\n  \n</table>\n\n<table class=\"table table-bordered \">\n  <thead>\n    <th colspan=\"2\" class = \"text-center\">Entrees</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let e of menu.entrees\">\n      <td width=\"50%\">\n        {{e.name}} {{e.price}}\n      </td>\n      <td class=\"text-center\" width=\"50%\">\n          <button class=\"btn btn-success\" (click) = 'addFoodToPending(e)'>Add</button>\n      </td>\n    </tr>\n  </tbody>\n  \n</table>\n\n<table class=\"table table-bordered \">\n  <thead>\n    <th colspan=\"2\" class = \"text-center\">Desserts</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let d of menu.desserts\">\n      <td width=\"50%\"> \n        {{d.name}} {{d.price}}\n      </td>\n      <td class=\"text-center\" width=\"50%\">\n          <button class=\"btn btn-success\" (click) = 'addFoodToPending(d)'>Add</button>\n      </td>\n    </tr>\n  </tbody>\n  \n</table>"

/***/ }),

/***/ "./src/app/waiter-view/table-view-tabs/menu-tab/menu-tab.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/waiter-view/table-view-tabs/menu-tab/menu-tab.component.ts ***!
  \****************************************************************************/
/*! exports provided: MenuTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTabComponent", function() { return MenuTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var src_app_models_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/table-model */ "./src/app/models/table-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuTabComponent = /** @class */ (function () {
    function MenuTabComponent(_menuservice) {
        this._menuservice = _menuservice;
    }
    MenuTabComponent.prototype.addFoodToPending = function (food) {
        this.table.addToPending(food);
    };
    MenuTabComponent.prototype.ngOnInit = function () {
        this.menu = this._menuservice.getMenu();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_table_model__WEBPACK_IMPORTED_MODULE_2__["TableModel"])
    ], MenuTabComponent.prototype, "table", void 0);
    MenuTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-tab',
            template: __webpack_require__(/*! ./menu-tab.component.html */ "./src/app/waiter-view/table-view-tabs/menu-tab/menu-tab.component.html"),
            styles: [__webpack_require__(/*! ./menu-tab.component.css */ "./src/app/waiter-view/table-view-tabs/menu-tab/menu-tab.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], MenuTabComponent);
    return MenuTabComponent;
}());



/***/ }),

/***/ "./src/app/waiter-view/table-view-tabs/ordered-tab/ordered-tab.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/waiter-view/table-view-tabs/ordered-tab/ordered-tab.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/waiter-view/table-view-tabs/ordered-tab/ordered-tab.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/waiter-view/table-view-tabs/ordered-tab/ordered-tab.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='table-responsive'>\n<table class=\"table table-bordered \">\n    <thead>\n      <th colspan=\"2\" class = \"text-center\">Ordered Items</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let o of table.Orders\">\n        <td width=\"50%\">\n            {{o.name}}  \n        </td>\n        <td width=\"50%\">\n            {{o.getStatusString()}}\n          <div *ngIf='o.status == orderStatus.FINISHED'>\n            <button class = \"btn btn-success\" (click) = 'markFoodAsDelivered(o)' >Delivered</button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>"

/***/ }),

/***/ "./src/app/waiter-view/table-view-tabs/ordered-tab/ordered-tab.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/waiter-view/table-view-tabs/ordered-tab/ordered-tab.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OrderedTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedTabComponent", function() { return OrderedTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/order-model */ "./src/app/models/order-model.ts");
/* harmony import */ var src_app_models_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/table-model */ "./src/app/models/table-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderedTabComponent = /** @class */ (function () {
    function OrderedTabComponent() {
        this.orderStatus = _models_order_model__WEBPACK_IMPORTED_MODULE_1__["ORDER_STATUS"];
    }
    OrderedTabComponent.prototype.markFoodAsDelivered = function (order) {
        order.status = _models_order_model__WEBPACK_IMPORTED_MODULE_1__["ORDER_STATUS"].DELIVERED;
        console.log(order);
    };
    OrderedTabComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_table_model__WEBPACK_IMPORTED_MODULE_2__["TableModel"])
    ], OrderedTabComponent.prototype, "table", void 0);
    OrderedTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ordered-tab',
            template: __webpack_require__(/*! ./ordered-tab.component.html */ "./src/app/waiter-view/table-view-tabs/ordered-tab/ordered-tab.component.html"),
            styles: [__webpack_require__(/*! ./ordered-tab.component.css */ "./src/app/waiter-view/table-view-tabs/ordered-tab/ordered-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderedTabComponent);
    return OrderedTabComponent;
}());



/***/ }),

/***/ "./src/app/waiter-view/table-view-tabs/pending-tab/pending-tab.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/waiter-view/table-view-tabs/pending-tab/pending-tab.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/waiter-view/table-view-tabs/pending-tab/pending-tab.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/waiter-view/table-view-tabs/pending-tab/pending-tab.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table table-bordered \">\n    <thead>\n      <th colspan=\"2\" class = \"text-center\">Pending Items</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let p of table.PendingOrders\">\n        <td width=\"50%\">\n            {{p.name}} \n        </td>\n        <td class=\"text-center\" width=\"50%\">\n            <button class=\"btn btn-danger\" (click) = 'removeFoodFromPending(p)'>Remove</button>\n        </td>\n        \n      </tr>\n    </tbody>\n    \n  <tfoot>\n  <div *ngIf='table?.PendingOrders?.length >  0;else noPending'>\n  <button class = \"btn btn-success\" (click) = 'send()'>Send</button>\n</div>\n<ng-template #noPending>\n    <button class = \"btn btn-secondary\" disabled>Send</button>\n</ng-template>\n</tfoot>\n</table>"

/***/ }),

/***/ "./src/app/waiter-view/table-view-tabs/pending-tab/pending-tab.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/waiter-view/table-view-tabs/pending-tab/pending-tab.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PendingTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingTabComponent", function() { return PendingTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_table_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/table-model */ "./src/app/models/table-model.ts");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/order-model */ "./src/app/models/order-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PendingTabComponent = /** @class */ (function () {
    function PendingTabComponent() {
        this.orderStatus = _models_order_model__WEBPACK_IMPORTED_MODULE_2__["ORDER_STATUS"];
    }
    PendingTabComponent.prototype.removeFoodFromPending = function (order) {
        this.table.removeFromPending(order);
    };
    PendingTabComponent.prototype.send = function () {
        this.table.Orders = this.table.Orders.concat(this.table.PendingOrders);
        this.table.PendingOrders = [];
    };
    PendingTabComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_table_model__WEBPACK_IMPORTED_MODULE_1__["TableModel"])
    ], PendingTabComponent.prototype, "table", void 0);
    PendingTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-tab',
            template: __webpack_require__(/*! ./pending-tab.component.html */ "./src/app/waiter-view/table-view-tabs/pending-tab/pending-tab.component.html"),
            styles: [__webpack_require__(/*! ./pending-tab.component.css */ "./src/app/waiter-view/table-view-tabs/pending-tab/pending-tab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PendingTabComponent);
    return PendingTabComponent;
}());



/***/ }),

/***/ "./src/app/waiter-view/table-view/table-view.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/waiter-view/table-view/table-view.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/waiter-view/table-view/table-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/waiter-view/table-view/table-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink = \"/kitchen-view/\">Login Kitchen</a>\n<div class = 'row'>\n<div class='col-sm-12 text-center'>\n  <h1>Table {{selectedId}}\n  <button class = 'btn btn-danger float-sm-right' (click) = 'onBack()' >back</button>\n</h1>\n  <hr>\n</div>\n</div>\n<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)='openTab = OpenTab.MENU' [ngClass]=\"{'active':openTab== OpenTab.MENU}\">Menu</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)='openTab = OpenTab.IN_PROGRESS' [ngClass]=\"{'active':openTab== OpenTab.IN_PROGRESS}\">Pending</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)='openTab = OpenTab.ORDERED' [ngClass]=\"{'active':openTab== OpenTab.ORDERED}\">Ordered</a>\n  </li>\n</ul>\n\n<app-menu-tab *ngIf=\"openTab === OpenTab.MENU\" [table]=\"table\"></app-menu-tab>\n<app-pending-tab *ngIf=\"openTab === OpenTab.IN_PROGRESS\" [table]=\"table\"></app-pending-tab>\n<app-ordered-tab *ngIf=\"openTab === OpenTab.ORDERED\" [table]=\"table\"></app-ordered-tab>\n<!-- <pre>{{table|json}}</pre> -->"

/***/ }),

/***/ "./src/app/waiter-view/table-view/table-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/waiter-view/table-view/table-view.component.ts ***!
  \****************************************************************/
/*! exports provided: OPEN_TAB, TableViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_TAB", function() { return OPEN_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableViewComponent", function() { return TableViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/restaurant.service */ "./src/app/services/restaurant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OPEN_TAB;
(function (OPEN_TAB) {
    OPEN_TAB[OPEN_TAB["MENU"] = 0] = "MENU";
    OPEN_TAB[OPEN_TAB["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    OPEN_TAB[OPEN_TAB["ORDERED"] = 2] = "ORDERED";
})(OPEN_TAB || (OPEN_TAB = {}));
;
var TableViewComponent = /** @class */ (function () {
    function TableViewComponent(route, router, _restaurantService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._restaurantService = _restaurantService;
        this.OpenTab = OPEN_TAB;
        this.openTab = OPEN_TAB.MENU;
        this.selectedId = this.route.snapshot.params['id'];
        console.log(this.selectedId);
        this.table = this._restaurantService.tables.find(function (t) { return t.tableNumber == _this.selectedId; });
        console.log('table');
        console.log(this._restaurantService.tables);
        console.log(this.table);
    }
    TableViewComponent.prototype.onBack = function () {
        this.router.navigate(['waiter-view']);
        //todo popup if pending isn't empty
    };
    TableViewComponent.prototype.ngOnInit = function () {
    };
    TableViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-view',
            template: __webpack_require__(/*! ./table-view.component.html */ "./src/app/waiter-view/table-view/table-view.component.html"),
            styles: [__webpack_require__(/*! ./table-view.component.css */ "./src/app/waiter-view/table-view/table-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"]])
    ], TableViewComponent);
    return TableViewComponent;
}());



/***/ }),

/***/ "./src/app/waiter-view/waiter-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/waiter-view/waiter-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/waiter-view/waiter-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/waiter-view/waiter-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='table-responsive'>\n<table class=\"table\">\n  <thead>\n    <th colspan=\"2\" class = \"text-center\">Active</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let t of activeTables\">\n      <td>\n        <a routerLink = \"/table-view/{{t.tableNumber}}\">Table #{{t.tableNumber}}</a>\n      </td>\n      <td class=\"text-center\">\n        <div *ngIf = 't.readyForPickup();else notready'>\n        <button class=\"btn btn-success\">Ready For Pickup</button>\n      </div>\n        <ng-template #notready>\n            <button class=\"btn btn-secondary\" disabled >Ready For Pickup</button>\n        </ng-template>\n      </td>\n    </tr>\n  </tbody>\n  \n</table>\n</div>\n<div class = 'table-responsive'>\n<table class=\"table\">\n  <thead>\n    <th colspan=\"2\" class = \"text-center\">Inactive</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let t of inactiveTables\">\n      <td>\n        Table #{{t.tableNumber}}\n      </td>\n      <td class=\"text-center\"> \n        <button class=\"btn btn-secondary\" [disabled]=\"!t.is_active\">{{t.numSeats}}</button>\n      </td>\n    </tr>\n  </tbody>\n  \n</table>\n</div>\n<!-- <pre>{{my_tables|json}}</pre> -->\n\n\n"

/***/ }),

/***/ "./src/app/waiter-view/waiter-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/waiter-view/waiter-view.component.ts ***!
  \******************************************************/
/*! exports provided: WaiterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiterViewComponent", function() { return WaiterViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WaiterViewComponent = /** @class */ (function () {
    function WaiterViewComponent(_userService, _restaurantService) {
        this._userService = _userService;
        this._restaurantService = _restaurantService;
    }
    WaiterViewComponent.prototype.ngOnInit = function () {
        var waiter = this._userService.getCurrentUser();
        this.allTables = this._restaurantService.getWaitersTables(waiter);
        this.activeTables = this.allTables.filter(function (t) { return t.isActive; });
        this.inactiveTables = this.allTables.filter(function (t) { return !t.isActive; });
        console.log(waiter);
        console.log(this.allTables);
    };
    WaiterViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waiter-view',
            template: __webpack_require__(/*! ./waiter-view.component.html */ "./src/app/waiter-view/waiter-view.component.html"),
            styles: [__webpack_require__(/*! ./waiter-view.component.css */ "./src/app/waiter-view/waiter-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"]])
    ], WaiterViewComponent);
    return WaiterViewComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/GG46195x/Documents/School/EasyWaiter/EasyWaiterFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map