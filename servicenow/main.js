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

module.exports = "<!-- NO ROUTER HAS BEEN ADDED SINCE ITS NOT GOING TO NAVIGATE FROM THE PAGE -->\n<div>\n  <header class=\"header fixed\">\n    <h1>ServiceNow || Abhishek Khuntia</h1>\n    <input type=\"text\" placeholder=\"Search by name!\" [(ngModel)]=\"filterBy\" (input)=\"checkNReset($event)\" />\n  </header>\n  <div class=\"container\">\n      <div class=\"content\">\n          <list-component [listData]=\"usersData\"  [filterBy]=\"filterBy\"></list-component>\n      </div>\n  </div>\n    \n</div>\n<div *ngIf=\"showLoader\" class=\"modal-shade\">\n    <img src=\"assets/loader.gif\" alt=\"\">\n</div>"

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
/* harmony import */ var _services_todo_motto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/todo-motto.service */ "./src/app/services/todo-motto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.usersData = [];
        this.filterBy = '';
        this.fetchDefaultUserList();
    }
    AppComponent.prototype.onScroll = function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if (!this.stopLoading && !this.showLoader) {
                this.fetchDefaultUserList();
            }
        }
    };
    AppComponent.prototype.onResize = function () {
        console.log("Window Resizing!!! .. Calculating the header height");
        var relElm = document.querySelector('.header');
        var tarElem = document.querySelector('.container');
        if (relElm && tarElem) {
            tarElem.style.marginTop = relElm.offsetHeight + 'px';
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onResize();
    };
    AppComponent.prototype.checkNReset = function () {
        if (!this.filterBy.length) {
            this.currentPage = 0;
            this.usersData = [];
        }
        this.stopLoading = false;
        this.fetchDefaultUserList();
    };
    AppComponent.prototype.fetchDefaultUserList = function () {
        var _this = this;
        this.currentPage = this.currentPage || 0;
        var params = {
            page: ++this.currentPage,
            limit: 10
        };
        if (this.filterBy && this.filterBy.length) {
            params['search'] = this.filterBy;
        }
        this.showLoader = true;
        this.userService.getUserDataByParams(params)
            .subscribe(function (data) {
            console.log("Default data", data);
            _this.usersData = _this.usersData.concat(data);
            if (_this.usersData && _this.usersData.length && data && Object.keys(data).length == 0) {
                _this.stopLoading = true;
            }
            _this.showLoader = false;
        }, function (error) {
            console.log("Error in fetchDefaul >>", error);
        });
    };
    AppComponent.prototype.searchUsersByName = function (event) {
        console.log("Search Users By Name >>", event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_todo_motto_service__WEBPACK_IMPORTED_MODULE_1__["TodoMottoService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_list_component_list_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-component/list-component.component */ "./src/app/components/list-component/list-component.component.ts");
/* harmony import */ var _services_todo_motto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/todo-motto.service */ "./src/app/services/todo-motto.service.ts");
/* harmony import */ var _filters_search_by_name_search_by_name_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/search-by-name/search-by-name.pipe */ "./src/app/filters/search-by-name/search-by-name.pipe.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_list_component_list_component_component__WEBPACK_IMPORTED_MODULE_5__["ListComponentComponent"],
                _filters_search_by_name_search_by_name_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchByNamePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _services_todo_motto_service__WEBPACK_IMPORTED_MODULE_6__["TodoMottoService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/list-component/list-component.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/list-component/list-component.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-ul{\n    padding: 20px 10px;\n}\n.list-ul li{\n    list-style: none;\n    padding: 10px;\n    border-bottom: 1px solid #484848;\n}\n.list-ul li img{\n    height: 75px;\n    width: 75px;\n    border: 5px solid #428C67;\n}\n.list-ul li h2{\n    margin: 0px;\n}\n.droppable{\n    border: 1px solid dashed #484848;\n    background: #428C67;\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/components/list-component/list-component.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/list-component/list-component.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul class=\"list-ul\" #draggable>\n    <li draggable=\"true\" (dragend)=\"dragend($event)\"  (drag)=\"dragStart($event, index)\" (dragover)=\"dropped($event, index)\" class=\"profile-list\" *ngFor=\"let item of listData | searchByName: filterBy; let index = index;\">\n      <div>\n          <img [src]=\"item.avatar\" [alt]=\"item.name\"/>\n      </div>\n      <div> \n        <h2>{{item.name}}</h2>\n        <h2>{{item.Company}}</h2>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/list-component/list-component.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/list-component/list-component.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponentComponent", function() { return ListComponentComponent; });
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

var ListComponentComponent = /** @class */ (function () {
    function ListComponentComponent() {
    }
    ListComponentComponent.prototype.ngOnInit = function () {
    };
    ListComponentComponent.prototype.sorting = function ($event, index) {
        $event.preventDefault();
    };
    ListComponentComponent.prototype.dropped = function ($event, toIndex) {
        var temp = this.listData[this.dragStartIndex];
        this.listData.splice(this.dragStartIndex, 1);
        this.listData.splice(toIndex, 0, temp);
    };
    ListComponentComponent.prototype.dragend = function (ev) {
        var ele = this.getListElement(ev.target);
        if (ele) {
            ele.classList.remove('droppable');
        }
    };
    ListComponentComponent.prototype.dragStart = function (ev, index) {
        this.dragStartIndex = index;
        var ele = this.getListElement(ev.target);
        if (ele) {
            ele.classList.add('droppable');
        }
    };
    ListComponentComponent.prototype.getListElement = function (ele) {
        if (ele && ele.tagName == 'LI' && ele.hasAttribute('draggable')) {
            return ele;
        }
        else if (ele.parentElement) {
            return this.getListElement(ele.parentElement);
        }
        else {
            return undefined;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponentComponent.prototype, "listData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListComponentComponent.prototype, "filterBy", void 0);
    ListComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-component',
            template: __webpack_require__(/*! ./list-component.component.html */ "./src/app/components/list-component/list-component.component.html"),
            styles: [__webpack_require__(/*! ./list-component.component.css */ "./src/app/components/list-component/list-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponentComponent);
    return ListComponentComponent;
}());



/***/ }),

/***/ "./src/app/filters/search-by-name/search-by-name.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/filters/search-by-name/search-by-name.pipe.ts ***!
  \***************************************************************/
/*! exports provided: SearchByNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByNamePipe", function() { return SearchByNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchByNamePipe = /** @class */ (function () {
    function SearchByNamePipe() {
    }
    SearchByNamePipe.prototype.transform = function (items, filterText) {
        if (!items) {
            return [];
        }
        else if (!filterText) {
            return items;
        }
        else {
            return items.filter(function (item) { return (item.name && (item.name.indexOf(filterText) != -1)); });
        }
    };
    SearchByNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchByName'
        })
    ], SearchByNamePipe);
    return SearchByNamePipe;
}());



/***/ }),

/***/ "./src/app/services/todo-motto.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/todo-motto.service.ts ***!
  \************************************************/
/*! exports provided: TodoMottoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoMottoService", function() { return TodoMottoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoMottoService = /** @class */ (function () {
    function TodoMottoService(http) {
        this.http = http;
        this.baseUrl = 'https://5bbf4f0572de1d001325376f.mockapi.io/api/fake-data/';
    }
    TodoMottoService.prototype.getUserDataByParams = function (paramsData) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (var i in paramsData) {
            params = params.set(i, paramsData[i]);
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + '/any-data', { headers: headers, params: params });
    };
    TodoMottoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoMottoService);
    return TodoMottoService;
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

module.exports = __webpack_require__(/*! /home/abhishek/code-UI/service-now/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map