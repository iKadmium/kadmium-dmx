(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(7);
	var angular2_universal_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(8);
	var app_component_1 = __webpack_require__(9);
	var navmenu_component_1 = __webpack_require__(14);
	var status_panel_component_1 = __webpack_require__(18);
	var message_bar_component_1 = __webpack_require__(23);
	var dashboard_component_1 = __webpack_require__(25);
	var settings_component_1 = __webpack_require__(29);
	var groups_component_1 = __webpack_require__(34);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            settings_component_1.SettingsComponent,
	            dashboard_component_1.DashboardComponent,
	            groups_component_1.GroupsComponent,
	            navmenu_component_1.NavMenuComponent,
	            status_panel_component_1.StatusPanelComponent,
	            message_bar_component_1.MessageBarComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            forms_1.FormsModule,
	            http_1.HttpModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
	                { path: 'settings', component: settings_component_1.SettingsComponent },
	                { path: 'groups', component: groups_component_1.GroupsComponent },
	                { path: '**', redirectTo: 'sets' }
	            ])
	        ],
	        providers: []
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(10),
	        styles: [__webpack_require__(11)]
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<nav-menu></nav-menu>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(12);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(15),
	        styles: [__webpack_require__(16)]
	    }),
	    __metadata("design:paramtypes", [])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span> \r\n      </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Kadmium OSC DMX</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/dashboard\">Home</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                        <span class=\"glyphicon glyphicon-cog\"></span> Setup\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/settings\">Settings</a></li>\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/groups\">Groups</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(17);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var status_1 = __webpack_require__(19);
	var StatusPanelComponent = (function () {
	    function StatusPanelComponent() {
	        this.status = new status_1.Status("Unknown", "Unknown");
	    }
	    return StatusPanelComponent;
	}());
	__decorate([
	    core_1.Input("name"),
	    __metadata("design:type", String)
	], StatusPanelComponent.prototype, "name", void 0);
	StatusPanelComponent = __decorate([
	    core_1.Component({
	        selector: 'status-panel',
	        template: __webpack_require__(20),
	        styles: [__webpack_require__(21)]
	    }),
	    __metadata("design:paramtypes", [])
	], StatusPanelComponent);
	exports.StatusPanelComponent = StatusPanelComponent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	var Status = (function () {
	    function Status(code, message) {
	        this.code = code;
	        this.message = message;
	    }
	    Status.prototype.update = function (code, message) {
	        this.code = code;
	        this.message = message;
	    };
	    Object.defineProperty(Status.prototype, "alertStyle", {
	        get: function () {
	            return Status.StatusTable[this.code].alertStyle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Status.prototype, "glyphIcon", {
	        get: function () {
	            return Status.StatusTable[this.code].glyphIcon;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Status;
	}());
	Status.StatusTable = {
	    Success: { alertStyle: "alert-success", glyphIcon: "glyphicon-ok-sign" },
	    Error: { alertStyle: "alert-danger", glyphIcon: "glyphicon-remove-sign" },
	    Warning: { alertStyle: "alert-warning", glyphIcon: "glyphicon-info-sign" },
	    Unknown: { alertStyle: "alert-info", glyphIcon: "glyphicon-question-sign" }
	};
	exports.Status = Status;


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default text-center\">\r\n    <div class=\"panel-heading\">{{name}} </div>\r\n    <div class=\"panel-body\" [ngClass]=\"status.alertStyle\">\r\n        {{status.message}}<br>\r\n        <span class=\"glyphicon status-glyph\" [ngClass]=\"status.glyphIcon\"></span>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(22);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".status-glyph {\r\n    font-size: 6em;\r\n}", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var status_1 = __webpack_require__(19);
	var MessageBarComponent = (function () {
	    function MessageBarComponent() {
	        this.messages = [];
	    }
	    MessageBarComponent.prototype.remove = function (status) {
	        var index = this.messages.indexOf(status);
	        this.messages.splice(index, 1);
	    };
	    MessageBarComponent.prototype.add = function (statusCode, message) {
	        this.messages.push(new status_1.Status(statusCode, message));
	    };
	    return MessageBarComponent;
	}());
	MessageBarComponent = __decorate([
	    core_1.Component({
	        selector: 'message-bar',
	        template: __webpack_require__(24)
	    }),
	    __metadata("design:paramtypes", [])
	], MessageBarComponent);
	exports.MessageBarComponent = MessageBarComponent;


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div *ngFor=\"let message of messages\">\r\n    <div class=\"alert\" [ngClass]=\"message.alertStyle\">\r\n        <a class=\"close\" (click)=\"remove(message)\" aria-label=\"close\">&times;</a>\r\n        <span class=\"glyphicon\" [ngClass]=\"message.glyphIcon\"></span> {{message.message}}\r\n    </div>\r\n</div>"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var status_panel_component_1 = __webpack_require__(18);
	var message_bar_component_1 = __webpack_require__(23);
	var venue_service_1 = __webpack_require__(26);
	var DashboardComponent = DashboardComponent_1 = (function () {
	    function DashboardComponent(venueService) {
	        var _this = this;
	        this.venueService = venueService;
	        venueService.getNames()
	            .then(function (names) { return _this.venueNames = names; })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	        this.webSocket = new WebSocket(DashboardComponent_1.socketURL);
	        this.webSocket.addEventListener("message", function (ev) {
	            var status = JSON.parse(ev.data);
	            var statusPanel;
	            switch (status.controller) {
	                case "Venues":
	                    statusPanel = _this.venue;
	                    break;
	                case "SACNTransmitters":
	                    statusPanel = _this.sacnTransmitter;
	                    break;
	                case "OSCListeners":
	                    statusPanel = _this.oscListener;
	                    break;
	                case "Fixtures":
	                    statusPanel = _this.fixtures;
	                    break;
	                default:
	                    return;
	            }
	            statusPanel.status.update(status.code, status.message);
	        });
	    }
	    DashboardComponent.prototype.activateVenue = function (venueName) {
	        var _this = this;
	        this.venueService
	            .activate(venueName)
	            .then(function () { return _this.messageBar.add("Success", venueName + " successfully loaded"); })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	    };
	    return DashboardComponent;
	}());
	DashboardComponent.socketURL = getSocketURL("Index");
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], DashboardComponent.prototype, "messageBar", void 0);
	__decorate([
	    core_1.ViewChild("venue"),
	    __metadata("design:type", status_panel_component_1.StatusPanelComponent)
	], DashboardComponent.prototype, "venue", void 0);
	__decorate([
	    core_1.ViewChild("sacnTransmitter"),
	    __metadata("design:type", status_panel_component_1.StatusPanelComponent)
	], DashboardComponent.prototype, "sacnTransmitter", void 0);
	__decorate([
	    core_1.ViewChild("oscListener"),
	    __metadata("design:type", status_panel_component_1.StatusPanelComponent)
	], DashboardComponent.prototype, "oscListener", void 0);
	__decorate([
	    core_1.ViewChild("fixtures"),
	    __metadata("design:type", status_panel_component_1.StatusPanelComponent)
	], DashboardComponent.prototype, "fixtures", void 0);
	DashboardComponent = DashboardComponent_1 = __decorate([
	    core_1.Component({
	        selector: 'dashboard',
	        template: __webpack_require__(28),
	        providers: [venue_service_1.VenueService]
	    }),
	    __metadata("design:paramtypes", [venue_service_1.VenueService])
	], DashboardComponent);
	exports.DashboardComponent = DashboardComponent;
	function getSocketURL(controller) {
	    var actionURL = getActionURL(controller, "Socket");
	    var socketURL = actionURL.replace("http", "ws");
	    return socketURL;
	}
	function getActionURL() {
	    var parts = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        parts[_i] = arguments[_i];
	    }
	    var originalURL = document.URL;
	    var urlParts = document.URL.split("/");
	    var protocol = urlParts[0];
	    var host = urlParts[2];
	    var root = protocol + "//" + host;
	    var partsJoined = parts.join("/");
	    return root + "/" + partsJoined;
	}
	var DashboardComponent_1;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(8);
	__webpack_require__(27);
	var VenueService = (function () {
	    function VenueService(http) {
	        this.http = http;
	        this.venueUrl = "/api/Venue";
	    }
	    VenueService.prototype.get = function (id) {
	        return this.http.get(this.venueUrl + "/" + id)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data;
	        });
	    };
	    VenueService.prototype.getNames = function () {
	        return this.http.get(this.venueUrl)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data;
	        });
	    };
	    VenueService.prototype.activate = function (id) {
	        return this.http.get(this.venueUrl + "/activate/" + id)
	            .toPromise()
	            .then(function (response) { });
	    };
	    return VenueService;
	}());
	VenueService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], VenueService);
	exports.VenueService = VenueService;


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Dashboard</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <status-panel #venue name=\"Venue\">\r\n            <div class=\"dropdown\" *ngIf=\"venueNames\">\r\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Load Venue\r\n                <span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li *ngFor=\"let venueName of venueNames\">\r\n                        <a (click)=\"activateVenue(venueName)\">{{venueName}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #sacnTransmitter name=\"sACN Transmitter\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/sacnTransmitterLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #oscListener name=\"OSC Listener\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/oscListenerLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #fixtures name=\"Fixtures\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/fixturesLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n</div>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
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
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
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
	var core_1 = __webpack_require__(3);
	var message_bar_component_1 = __webpack_require__(23);
	var settings_service_1 = __webpack_require__(30);
	var settings_1 = __webpack_require__(31);
	var $ = __webpack_require__(32);
	var SettingsComponent = (function () {
	    function SettingsComponent(settingsService) {
	        var _this = this;
	        this.settingsService = settingsService;
	        this.settingsService.get().then(function (data) {
	            _this.settings = data;
	        });
	    }
	    SettingsComponent.prototype.save = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        this.settingsService
	                            .save(this.settings)
	                            .then(function () { return _this.messageBar.add("Success", "Saved Successfully"); })
	                            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	                        return [4 /*yield*/, this.settingsService.save(this.settings)];
	                    case 1:
	                        _a.sent();
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    SettingsComponent.prototype.addTarget = function () {
	        this.settings.sacnTransmitter.unicast.push(new settings_1.UnicastTarget(""));
	    };
	    SettingsComponent.prototype.removeTarget = function (index) {
	        this.settings.sacnTransmitter.unicast.splice(index, 1);
	    };
	    return SettingsComponent;
	}());
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], SettingsComponent.prototype, "messageBar", void 0);
	SettingsComponent = __decorate([
	    core_1.Component({
	        selector: 'settings',
	        template: __webpack_require__(33),
	        providers: [settings_service_1.SettingsService]
	    }),
	    __metadata("design:paramtypes", [settings_service_1.SettingsService])
	], SettingsComponent);
	exports.SettingsComponent = SettingsComponent;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(8);
	__webpack_require__(27);
	var settings_1 = __webpack_require__(31);
	var SettingsService = (function () {
	    function SettingsService(http) {
	        this.http = http;
	        this.settingsUrl = "/api/Settings";
	    }
	    SettingsService.prototype.get = function () {
	        return this.http.get(this.settingsUrl)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return settings_1.Settings.deserialize(data);
	        })
	            .catch(this.handleError);
	    };
	    SettingsService.prototype.save = function (data) {
	        return this.http.post(this.settingsUrl, data.serialize())
	            .toPromise()
	            .then(function (response) {
	        })
	            .catch(this.handleError);
	    };
	    SettingsService.prototype.handleError = function (error) {
	        console.error('An error occurred', error); // for demo purposes only
	        return Promise.reject(error.message || error);
	    };
	    return SettingsService;
	}());
	SettingsService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], SettingsService);
	exports.SettingsService = SettingsService;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	var Settings = (function () {
	    function Settings() {
	        this.webPort = 80;
	        this.oscPort = 9000;
	        this.sacnTransmitter = new SACNTransmitterSettings();
	    }
	    Settings.deserialize = function (data) {
	        var settings = new Settings();
	        settings.webPort = data.webPort;
	        settings.oscPort = data.oscPort;
	        settings.sacnTransmitter = SACNTransmitterSettings.deserialize(data.sacnTransmitter);
	        return settings;
	    };
	    Settings.prototype.serialize = function () {
	        var data = {
	            webPort: this.webPort,
	            oscPort: this.oscPort,
	            sacnTransmitter: this.sacnTransmitter.serialize()
	        };
	        return data;
	    };
	    return Settings;
	}());
	exports.Settings = Settings;
	var SACNTransmitterSettings = (function () {
	    function SACNTransmitterSettings() {
	        this.delay = 0;
	        this.multicast = true;
	        this.unicast = [];
	    }
	    SACNTransmitterSettings.deserialize = function (data) {
	        var transmitter = new SACNTransmitterSettings();
	        transmitter.delay = data.delay;
	        transmitter.multicast = data.multicast;
	        transmitter.unicast = data.unicast.map(function (value) { return new UnicastTarget(value); });
	        return transmitter;
	    };
	    SACNTransmitterSettings.prototype.serialize = function () {
	        var data = {
	            delay: this.delay,
	            multicast: this.multicast,
	            unicast: this.unicast.map(function (value) { return value.target; })
	        };
	        return data;
	    };
	    return SACNTransmitterSettings;
	}());
	exports.SACNTransmitterSettings = SACNTransmitterSettings;
	var UnicastTarget = (function () {
	    function UnicastTarget(target) {
	        this.target = target;
	    }
	    return UnicastTarget;
	}());
	exports.UnicastTarget = UnicastTarget;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Settings</h1>\r\n</div>\r\n<p *ngIf=\"!settings\">Loading...</p>\r\n<message-bar #messageBar></message-bar>\r\n<div *ngIf=\"settings\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"webPort\">HTTP Port:</label>\r\n        <div class=\"col-sm-10\">\r\n            <input type=\"number\" name=\"webPort\" id=\"webPort\" class=\"form-control\" min=\"0\" max=\"65535\" [(ngModel)]=\"settings.webPort\">\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"oscPort\">OSC Port:</label>\r\n        <div class=\"col-sm-10\">\r\n            <input type=\"number\" name=\"oscPort\" id=\"oscPort\" class=\"form-control\" min=\"0\" max=\"65535\" [(ngModel)]=\"settings.oscPort\">\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"sacnTransmitterDelay\">sACN Transmitter Delay:</label>\r\n        <div class=\"col-sm-10\">\r\n            <input type=\"number\" name=\"sacnTransmitterDelay\" id=\"sacnTransmitterDelay\" class=\"form-control\" min=\"0\" max=\"10000\" [(ngModel)]=\"settings.sacnTransmitter.delay\">\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"sacnMulticast\">sACN Multicast:</label>\r\n        <div class=\"col-sm-10\">\r\n            <div class=\"checkbox\">\r\n                <label><input type=\"checkbox\" name=\"sacnMulticast\"  id=\"sacnMulticast\" [(ngModel)]=\"settings.sacnTransmitter.multicast\">Multicast</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"sacnTransmitterDelay\">sACN Unicast Targets:</label>\r\n        <div class=\"col-sm-10\">\r\n            <div class=\"form-group\" *ngFor=\"let target of settings.sacnTransmitter.unicast; let idx = index\" id=\"unicast\" name=\"unicast\">\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control col-sm-8\" [(ngModel)]=\"settings.sacnTransmitter.unicast[idx].target\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <button class=\"btn btn-danger\" (click)=\"removeTarget(idx)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-success clearfix\" (click)=\"addTarget()\">Add Target</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var message_bar_component_1 = __webpack_require__(23);
	var groups_service_1 = __webpack_require__(35);
	var GroupsComponent = (function () {
	    function GroupsComponent(groupsService) {
	        var _this = this;
	        this.groupsService = groupsService;
	        this.groupsService
	            .getNames()
	            .then(function (value) { return _this.groups = value; })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	    }
	    return GroupsComponent;
	}());
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], GroupsComponent.prototype, "messageBar", void 0);
	GroupsComponent = __decorate([
	    core_1.Component({
	        selector: 'groups',
	        template: __webpack_require__(36),
	        providers: [groups_service_1.GroupsService]
	    }),
	    __metadata("design:paramtypes", [groups_service_1.GroupsService])
	], GroupsComponent);
	exports.GroupsComponent = GroupsComponent;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(8);
	__webpack_require__(27);
	var GroupsService = (function () {
	    function GroupsService(http) {
	        this.http = http;
	        this.groupsUrl = "/api/Group";
	    }
	    GroupsService.prototype.get = function (id) {
	        return this.http.get(this.groupsUrl + "/" + id)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data;
	        });
	    };
	    GroupsService.prototype.getNames = function () {
	        return this.http.get(this.groupsUrl)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data;
	        });
	    };
	    return GroupsService;
	}());
	GroupsService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], GroupsService);
	exports.GroupsService = GroupsService;


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Groups</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<ul class='list-group' *ngIf=\"groups\">\r\n    <li *ngFor=\"let group of groups\" class=\"list-group-item clearfix\">\r\n        {{ group }}\r\n        <div class=\"btn-group pull-right\">\r\n            <button class=\"btn btn-default\" (click)=\"edit(group)\"><span class=\"glyphicon glyphicon-pencil\"></span> Edit</button>\r\n            <button class=\"btn btn-danger\" (click)=\"delete(group)\"><span class=\"glyphicon glyphicon-remove\"></span> Delete</button>\r\n        </div>\r\n    </li>\r\n</ul>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzlkNTEwZTZiZmYxNjNjNWI5ZjEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzcz80ZWFjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZS92ZW51ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUs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TSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Y0FDL0IsU0FBUyxFQUFFO2NBQ1gsSUFBSSxDQUFDLGtCQUFRO2FBRVYsSUFBSSxJQUFJLEdBQUksUUFBUSxDQUFDLElBQUksRUFBZSxDQUFDO2FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDaEIsQ0FBQyxDQUFDLENBQUM7S0FDWCxDQUFDO0tBQ0wsb0JBQUM7QUFBRCxFQUFDO0FBM0JZLGNBQWE7S0FEekIsaUJBQVUsRUFBRTtzQ0FLaUIsV0FBSTtJQUpyQixhQUFhLENBMkJ6QjtBQTNCWSx1Q0FBYTs7Ozs7OztBQ1AxQixrUUFBaVEsU0FBUyxnWCIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM5ZDUxMGU2YmZmMTYzYzViOWYxIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhdHVzUGFuZWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3Vwc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHsgVmVudWVTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZS92ZW51ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHcm91cHNTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIEdyb3Vwc0NvbXBvbmVudCxcblxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBTdGF0dXNQYW5lbENvbXBvbmVudCxcbiAgICAgICAgTWVzc2FnZUJhckNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcblxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnZGFzaGJvYXJkJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdzZXR0aW5ncycsIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2dyb3VwcycsIGNvbXBvbmVudDogR3JvdXBzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdzZXRzJyB9XG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZVxue1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcbiAgICAuYm9keS1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50XG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI215TmF2YmFyXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj4gXFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiI1xcXCI+S2FkbWl1bSBPU0MgRE1YPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcXFwiIGlkPVxcXCJteU5hdmJhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9kYXNoYm9hcmRcXFwiPkhvbWU8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZ1xcXCI+PC9zcGFuPiBTZXR1cFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48YSByb3V0ZXJMaW5rPVxcXCIvc2V0dGluZ3NcXFwiPlNldHRpbmdzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgcm91dGVyTGluaz1cXFwiL2dyb3Vwc1xcXCI+R3JvdXBzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9uYXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdGF0dXMtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNQYW5lbENvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdHVzOiBTdGF0dXM7XHJcbiAgICBASW5wdXQoXCJuYW1lXCIpIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBuZXcgU3RhdHVzKFwiVW5rbm93blwiLCBcIlVua25vd25cIik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIFN0YXR1c1xyXG57XHJcbiAgICBzdGF0aWMgU3RhdHVzVGFibGU6IFN0YXR1c1RhYmxlID0ge1xyXG4gICAgICAgIFN1Y2Nlc3M6IHsgYWxlcnRTdHlsZTogXCJhbGVydC1zdWNjZXNzXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24tb2stc2lnblwiIH0sXHJcbiAgICAgICAgRXJyb3I6IHsgYWxlcnRTdHlsZTogXCJhbGVydC1kYW5nZXJcIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1yZW1vdmUtc2lnblwiIH0sXHJcbiAgICAgICAgV2FybmluZzogeyBhbGVydFN0eWxlOiBcImFsZXJ0LXdhcm5pbmdcIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1pbmZvLXNpZ25cIiB9LFxyXG4gICAgICAgIFVua25vd246IHsgYWxlcnRTdHlsZTogXCJhbGVydC1pbmZvXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24tcXVlc3Rpb24tc2lnblwiIH1cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNvZGU6IFN0YXR1c0NvZGU7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvZGU6IFN0YXR1c0NvZGUsIG1lc3NhZ2U6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShjb2RlOiBTdGF0dXNDb2RlLCBtZXNzYWdlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWxlcnRTdHlsZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3RhdHVzLlN0YXR1c1RhYmxlW3RoaXMuY29kZV0uYWxlcnRTdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGdseXBoSWNvbigpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3RhdHVzLlN0YXR1c1RhYmxlW3RoaXMuY29kZV0uZ2x5cGhJY29uO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0dXNDb2RlID0gXCJVbmtub3duXCIgfCBcIkVycm9yXCIgfCBcIlN1Y2Nlc3NcIiB8IFwiV2FybmluZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0dXNUYWJsZVxyXG57XHJcbiAgICBba2V5OiBzdHJpbmddOiBTdGF0dXNJbmZvO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzSW5mb1xyXG57XHJcbiAgICBhbGVydFN0eWxlOiBzdHJpbmc7XHJcbiAgICBnbHlwaEljb246IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHQgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj57e25hbWV9fSA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgW25nQ2xhc3NdPVxcXCJzdGF0dXMuYWxlcnRTdHlsZVxcXCI+XFxyXFxuICAgICAgICB7e3N0YXR1cy5tZXNzYWdlfX08YnI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIHN0YXR1cy1nbHlwaFxcXCIgW25nQ2xhc3NdPVxcXCJzdGF0dXMuZ2x5cGhJY29uXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhdHVzLWdseXBoIHtcXHJcXG4gICAgZm9udC1zaXplOiA2ZW07XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzLCBTdGF0dXNDb2RlIH0gZnJvbSBcIi4uL3N0YXR1c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21lc3NhZ2UtYmFyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCYXJDb21wb25lbnRcclxue1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlczogU3RhdHVzW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZShzdGF0dXM6IFN0YXR1cylcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm1lc3NhZ2VzLmluZGV4T2Yoc3RhdHVzKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChzdGF0dXNDb2RlOiBTdGF0dXNDb2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBTdGF0dXMoc3RhdHVzQ29kZSwgbWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnRcXFwiIFtuZ0NsYXNzXT1cXFwibWVzc2FnZS5hbGVydFN0eWxlXFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjbG9zZVxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlKG1lc3NhZ2UpXFxcIiBhcmlhLWxhYmVsPVxcXCJjbG9zZVxcXCI+JnRpbWVzOzwvYT5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb25cXFwiIFtuZ0NsYXNzXT1cXFwibWVzc2FnZS5nbHlwaEljb25cXFwiPjwvc3Bhbj4ge3ttZXNzYWdlLm1lc3NhZ2V9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1c1BhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZlbnVlU2VydmljZSB9IGZyb20gXCIuLi92ZW51ZS92ZW51ZS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNDb2RlIH0gZnJvbSBcIi4uL3N0YXR1cy9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtWZW51ZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJ2ZW51ZVwiKSB2ZW51ZTogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwic2FjblRyYW5zbWl0dGVyXCIpIHNhY25UcmFuc21pdHRlcjogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwib3NjTGlzdGVuZXJcIikgb3NjTGlzdGVuZXI6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImZpeHR1cmVzXCIpIGZpeHR1cmVzOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIHdlYlNvY2tldDogV2ViU29ja2V0O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNvY2tldFVSTCA9IGdldFNvY2tldFVSTChcIkluZGV4XCIpO1xyXG4gICAgcHJpdmF0ZSB2ZW51ZU5hbWVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZlbnVlU2VydmljZTogVmVudWVTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHZlbnVlU2VydmljZS5nZXROYW1lcygpXHJcbiAgICAgICAgICAgIC50aGVuKG5hbWVzID0+IHRoaXMudmVudWVOYW1lcyA9IG5hbWVzKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KERhc2hib2FyZENvbXBvbmVudC5zb2NrZXRVUkwpO1xyXG4gICAgICAgIHRoaXMud2ViU29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldjogTWVzc2FnZUV2ZW50KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IEpTT04ucGFyc2UoZXYuZGF0YSkgYXMgU3RhdHVzRGF0YTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1c1BhbmVsOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMuY29udHJvbGxlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlZlbnVlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy52ZW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTQUNOVHJhbnNtaXR0ZXJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLnNhY25UcmFuc21pdHRlcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJPU0NMaXN0ZW5lcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMub3NjTGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGaXh0dXJlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy5maXh0dXJlc1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXR1c1BhbmVsLnN0YXR1cy51cGRhdGUoc3RhdHVzLmNvZGUsIHN0YXR1cy5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZVZlbnVlKHZlbnVlTmFtZTogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmVudWVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5hY3RpdmF0ZSh2ZW51ZU5hbWUpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIHZlbnVlTmFtZSArIFwiIHN1Y2Nlc3NmdWxseSBsb2FkZWRcIikpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0dXNEYXRhXHJcbntcclxuICAgIGNvZGU6IFN0YXR1c0NvZGU7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBjb250cm9sbGVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNvY2tldFVSTChjb250cm9sbGVyOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFjdGlvblVSTCA9IGdldEFjdGlvblVSTChjb250cm9sbGVyLCBcIlNvY2tldFwiKTtcclxuICAgIGxldCBzb2NrZXRVUkwgPSBhY3Rpb25VUkwucmVwbGFjZShcImh0dHBcIiwgXCJ3c1wiKTtcclxuICAgIHJldHVybiBzb2NrZXRVUkw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFjdGlvblVSTCguLi5wYXJ0czogc3RyaW5nW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IG9yaWdpbmFsVVJMOiBzdHJpbmcgPSBkb2N1bWVudC5VUkw7XHJcbiAgICBsZXQgdXJsUGFydHM6IHN0cmluZ1tdID0gZG9jdW1lbnQuVVJMLnNwbGl0KFwiL1wiKTtcclxuICAgIGxldCBwcm90b2NvbDogc3RyaW5nID0gdXJsUGFydHNbMF07XHJcbiAgICBsZXQgaG9zdDogc3RyaW5nID0gdXJsUGFydHNbMl07XHJcblxyXG4gICAgbGV0IHJvb3Q6IHN0cmluZyA9IHByb3RvY29sICsgXCIvL1wiICsgaG9zdDtcclxuXHJcbiAgICBsZXQgcGFydHNKb2luZWQgPSBwYXJ0cy5qb2luKFwiL1wiKTtcclxuXHJcbiAgICByZXR1cm4gcm9vdCArIFwiL1wiICsgcGFydHNKb2luZWQ7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgVmVudWUgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmVudWVTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgdmVudWVVcmwgPSBcIi9hcGkvVmVudWVcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8VmVudWU+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgVmVudWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lcygpOiBQcm9taXNlPHN0cmluZ1tdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwgKyBcIi9hY3RpdmF0ZS9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZS92ZW51ZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI3ZlbnVlIG5hbWU9XFxcIlZlbnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgKm5nSWY9XFxcInZlbnVlTmFtZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+TG9hZCBWZW51ZVxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB2ZW51ZU5hbWUgb2YgdmVudWVOYW1lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiYWN0aXZhdGVWZW51ZSh2ZW51ZU5hbWUpXFxcIj57e3ZlbnVlTmFtZX19PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjc2FjblRyYW5zbWl0dGVyIG5hbWU9XFxcInNBQ04gVHJhbnNtaXR0ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9zYWNuVHJhbnNtaXR0ZXJMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICNvc2NMaXN0ZW5lciBuYW1lPVxcXCJPU0MgTGlzdGVuZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9vc2NMaXN0ZW5lckxpdmVcXFwiPkxpdmU8L2E+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI2ZpeHR1cmVzIG5hbWU9XFxcIkZpeHR1cmVzXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvZml4dHVyZXNMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXR0aW5ncy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzLCBVbmljYXN0VGFyZ2V0IH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcblxyXG52YXIgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1NldHRpbmdzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nc1NlcnZpY2U6IFNldHRpbmdzU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU2VydmljZS5nZXQoKS50aGVuKGRhdGEgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzYXZlKCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU2VydmljZVxyXG4gICAgICAgICAgICAuc2F2ZSh0aGlzLnNldHRpbmdzKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBcIlNhdmVkIFN1Y2Nlc3NmdWxseVwiKSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzU2VydmljZS5zYXZlKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUYXJnZXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3QucHVzaChuZXcgVW5pY2FzdFRhcmdldChcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVRhcmdldChpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IFNldHRpbmdzLCBTZXR0aW5nc0RhdGEgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgc2V0dGluZ3NVcmwgPSBcIi9hcGkvU2V0dGluZ3NcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxTZXR0aW5ncz5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNldHRpbmdzVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIFNldHRpbmdzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3MuZGVzZXJpYWxpemUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZShkYXRhOiBTZXR0aW5ncyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXR0aW5nc1VybCwgZGF0YS5zZXJpYWxpemUoKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiBcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTsgLy8gZm9yIGRlbW8gcHVycG9zZXMgb25seVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIFNldHRpbmdzXHJcbntcclxuICAgIHdlYlBvcnQ6IG51bWJlcjtcclxuICAgIG9zY1BvcnQ6IG51bWJlcjtcclxuICAgIHNhY25UcmFuc21pdHRlcjogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud2ViUG9ydCA9IDgwO1xyXG4gICAgICAgIHRoaXMub3NjUG9ydCA9IDkwMDA7XHJcbiAgICAgICAgdGhpcy5zYWNuVHJhbnNtaXR0ZXIgPSBuZXcgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplKGRhdGE6IFNldHRpbmdzRGF0YSk6IFNldHRpbmdzXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XHJcbiAgICAgICAgc2V0dGluZ3Mud2ViUG9ydCA9IGRhdGEud2ViUG9ydDtcclxuICAgICAgICBzZXR0aW5ncy5vc2NQb3J0ID0gZGF0YS5vc2NQb3J0O1xyXG4gICAgICAgIHNldHRpbmdzLnNhY25UcmFuc21pdHRlciA9IFNBQ05UcmFuc21pdHRlclNldHRpbmdzLmRlc2VyaWFsaXplKGRhdGEuc2FjblRyYW5zbWl0dGVyKTtcclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBTZXR0aW5nc0RhdGFcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogU2V0dGluZ3NEYXRhID0ge1xyXG4gICAgICAgICAgICB3ZWJQb3J0OiB0aGlzLndlYlBvcnQsXHJcbiAgICAgICAgICAgIG9zY1BvcnQ6IHRoaXMub3NjUG9ydCxcclxuICAgICAgICAgICAgc2FjblRyYW5zbWl0dGVyOiB0aGlzLnNhY25UcmFuc21pdHRlci5zZXJpYWxpemUoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc1xyXG57XHJcbiAgICBkZWxheTogbnVtYmVyO1xyXG4gICAgbXVsdGljYXN0OiBib29sZWFuO1xyXG4gICAgdW5pY2FzdDogVW5pY2FzdFRhcmdldFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlbGF5ID0gMDtcclxuICAgICAgICB0aGlzLm11bHRpY2FzdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51bmljYXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZShkYXRhOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGEpOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc1xyXG4gICAge1xyXG4gICAgICAgIGxldCB0cmFuc21pdHRlciA9IG5ldyBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncygpO1xyXG4gICAgICAgIHRyYW5zbWl0dGVyLmRlbGF5ID0gZGF0YS5kZWxheTtcclxuICAgICAgICB0cmFuc21pdHRlci5tdWx0aWNhc3QgPSBkYXRhLm11bHRpY2FzdDtcclxuICAgICAgICB0cmFuc21pdHRlci51bmljYXN0ID0gZGF0YS51bmljYXN0Lm1hcCgodmFsdWU6IHN0cmluZykgPT4gbmV3IFVuaWNhc3RUYXJnZXQodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4gdHJhbnNtaXR0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGFcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhID0ge1xyXG4gICAgICAgICAgICBkZWxheTogdGhpcy5kZWxheSxcclxuICAgICAgICAgICAgbXVsdGljYXN0OiB0aGlzLm11bHRpY2FzdCxcclxuICAgICAgICAgICAgdW5pY2FzdDogdGhpcy51bmljYXN0Lm1hcCgodmFsdWU6IFVuaWNhc3RUYXJnZXQpID0+IHZhbHVlLnRhcmdldClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVW5pY2FzdFRhcmdldFxyXG57XHJcbiAgICB0YXJnZXQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzRGF0YVxyXG57XHJcbiAgICB3ZWJQb3J0OiBudW1iZXI7XHJcbiAgICBvc2NQb3J0OiBudW1iZXI7XHJcbiAgICBzYWNuVHJhbnNtaXR0ZXI6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGFcclxue1xyXG4gICAgZGVsYXk6IG51bWJlcjtcclxuICAgIG11bHRpY2FzdDogYm9vbGVhbjtcclxuICAgIHVuaWNhc3Q6IHN0cmluZ1tdO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5TZXR0aW5nczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPHAgKm5nSWY9XFxcIiFzZXR0aW5nc1xcXCI+TG9hZGluZy4uLjwvcD5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48ZGl2ICpuZ0lmPVxcXCJzZXR0aW5nc1xcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS0yXFxcIiBmb3I9XFxcIndlYlBvcnRcXFwiPkhUVFAgUG9ydDo8L2xhYmVsPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJ3ZWJQb3J0XFxcIiBpZD1cXFwid2ViUG9ydFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjY1NTM1XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Mud2ViUG9ydFxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS0yXFxcIiBmb3I9XFxcIm9zY1BvcnRcXFwiPk9TQyBQb3J0OjwvbGFiZWw+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcIm9zY1BvcnRcXFwiIGlkPVxcXCJvc2NQb3J0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiNjU1MzVcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5vc2NQb3J0XFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTJcXFwiIGZvcj1cXFwic2FjblRyYW5zbWl0dGVyRGVsYXlcXFwiPnNBQ04gVHJhbnNtaXR0ZXIgRGVsYXk6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwic2FjblRyYW5zbWl0dGVyRGVsYXlcXFwiIGlkPVxcXCJzYWNuVHJhbnNtaXR0ZXJEZWxheVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwMDAwXFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLmRlbGF5XFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTJcXFwiIGZvcj1cXFwic2Fjbk11bHRpY2FzdFxcXCI+c0FDTiBNdWx0aWNhc3Q6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJzYWNuTXVsdGljYXN0XFxcIiAgaWQ9XFxcInNhY25NdWx0aWNhc3RcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIubXVsdGljYXN0XFxcIj5NdWx0aWNhc3Q8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtc20tMlxcXCIgZm9yPVxcXCJzYWNuVHJhbnNtaXR0ZXJEZWxheVxcXCI+c0FDTiBVbmljYXN0IFRhcmdldHM6PC9sYWJlbD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nRm9yPVxcXCJsZXQgdGFyZ2V0IG9mIHNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0OyBsZXQgaWR4ID0gaW5kZXhcXFwiIGlkPVxcXCJ1bmljYXN0XFxcIiBuYW1lPVxcXCJ1bmljYXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLThcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgY29sLXNtLThcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIudW5pY2FzdFtpZHhdLnRhcmdldFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlVGFyZ2V0KGlkeClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgY2xlYXJmaXhcXFwiIChjbGljayk9XFxcImFkZFRhcmdldCgpXFxcIj5BZGQgVGFyZ2V0PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJzYXZlKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBHcm91cHNTZXJ2aWNlIH0gZnJvbSBcIi4vZ3JvdXBzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi9ncm91cFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyb3VwcycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ncm91cHMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0dyb3Vwc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cHNDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuXHJcbiAgICBncm91cHM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvdXBzU2VydmljZTogR3JvdXBzU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdyb3Vwc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldE5hbWVzKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBzdHJpbmdbXSkgPT4gdGhpcy5ncm91cHMgPSB2YWx1ZSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL2dyb3VwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm91cHNTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgZ3JvdXBzVXJsID0gXCIvYXBpL0dyb3VwXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ3JvdXBzVXJsICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBHcm91cCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5hbWVzKCk6IFByb21pc2U8c3RyaW5nW10+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ncm91cHNVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5Hcm91cHM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjx1bCBjbGFzcz0nbGlzdC1ncm91cCcgKm5nSWY9XFxcImdyb3Vwc1xcXCI+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCBncm91cCBvZiBncm91cHNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gY2xlYXJmaXhcXFwiPlxcclxcbiAgICAgICAge3sgZ3JvdXAgfX1cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBwdWxsLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcImVkaXQoZ3JvdXApXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPjwvc3Bhbj4gRWRpdDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoZ3JvdXApXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj4gRGVsZXRlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9saT5cXHJcXG48L3VsPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==