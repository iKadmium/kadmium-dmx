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
	var index_1 = __webpack_require__(14);
	var navmenu_component_1 = __webpack_require__(17);
	var status_panel_component_1 = __webpack_require__(21);
	var message_bar_component_1 = __webpack_require__(26);
	var labelled_input_component_1 = __webpack_require__(28);
	var confirmation_component_1 = __webpack_require__(30);
	var dashboard_component_1 = __webpack_require__(32);
	var settings_component_1 = __webpack_require__(36);
	var groups_component_1 = __webpack_require__(41);
	var fixture_definitions_component_1 = __webpack_require__(45);
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
	            fixture_definitions_component_1.FixtureDefinitionsComponent,
	            index_1.MINMAX_DIRECTIVES,
	            navmenu_component_1.NavMenuComponent,
	            status_panel_component_1.StatusPanelComponent,
	            message_bar_component_1.MessageBarComponent,
	            labelled_input_component_1.LabelledInputComponent,
	            confirmation_component_1.ConfirmationComponent
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
	                { path: 'fixture-definitions', component: fixture_definitions_component_1.FixtureDefinitionsComponent },
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
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	var min_value_validator_directive_1 = __webpack_require__(15);
	var max_value_validator_directive_1 = __webpack_require__(16);
	exports.MINMAX_DIRECTIVES = [min_value_validator_directive_1.MinValueValidator, max_value_validator_directive_1.MaxValueValidator];


/***/ },
/* 15 */
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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	exports.MIN_VALUE_VALIDATOR = {
	    provide: forms_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MinValueValidator; }),
	    multi: true
	};
	var MinValueValidator = MinValueValidator_1 = (function () {
	    function MinValueValidator(mn) {
	        if (mn !== undefined && mn !== null) {
	            var attrValue = parseInt(mn, 10);
	            if (!isNaN(attrValue)) {
	                this.min = mn;
	                this._createValidator();
	            }
	        }
	    }
	    MinValueValidator.prototype.ngOnChanges = function (changes) {
	        var minChange = changes['min'];
	        if (minChange) {
	            this._createValidator();
	        }
	    };
	    MinValueValidator.prototype._createValidator = function () {
	        this._validator = MinValueValidator_1.min(parseInt(this.min, 10));
	    };
	    MinValueValidator.prototype.validate = function (c) { return this._validator(c); };
	    MinValueValidator.min = function (mn) {
	        return function (control) {
	            var v = +control.value;
	            return (v < mn ? { 'min': { 'minValue': mn, 'actualValue': v } } : null);
	        };
	    };
	    return MinValueValidator;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], MinValueValidator.prototype, "min", void 0);
	MinValueValidator = MinValueValidator_1 = __decorate([
	    core_1.Directive({
	        selector: '[min][formControlName],[min][formControl],[min][ngModel]',
	        providers: [exports.MIN_VALUE_VALIDATOR],
	        host: { '[attr.min]': 'min ? min : 0' }
	    }),
	    __param(0, core_1.Attribute('min')),
	    __metadata("design:paramtypes", [String])
	], MinValueValidator);
	exports.MinValueValidator = MinValueValidator;
	var MinValueValidator_1;


/***/ },
/* 16 */
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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	exports.MAX_VALUE_VALIDATOR = {
	    provide: forms_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MaxValueValidator; }),
	    multi: true
	};
	var MaxValueValidator = MaxValueValidator_1 = (function () {
	    function MaxValueValidator(mx) {
	        if (mx !== undefined && mx !== null) {
	            var attrValue = parseInt(mx, 10);
	            if (!isNaN(attrValue)) {
	                this.max = mx;
	                this._createValidator();
	            }
	        }
	    }
	    MaxValueValidator.prototype.ngOnChanges = function (changes) {
	        var maxChange = changes['max'];
	        if (maxChange) {
	            this._createValidator();
	        }
	    };
	    MaxValueValidator.prototype._createValidator = function () {
	        this._validator = MaxValueValidator_1.max(parseInt(this.max, 10));
	    };
	    MaxValueValidator.prototype.validate = function (c) { return this._validator(c); };
	    MaxValueValidator.max = function (mx) {
	        return function (control) {
	            var v = +control.value;
	            return (v > mx ? { 'max': { 'maxValue': mx, 'actualValue': v } } : null);
	        };
	    };
	    return MaxValueValidator;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], MaxValueValidator.prototype, "max", void 0);
	MaxValueValidator = MaxValueValidator_1 = __decorate([
	    core_1.Directive({
	        selector: '[max][formControlName],[min][formControl],[min][ngModel]',
	        providers: [exports.MAX_VALUE_VALIDATOR],
	        host: { '[attr.max]': 'max ? max : 0' }
	    }),
	    __param(0, core_1.Attribute('max')),
	    __metadata("design:paramtypes", [String])
	], MaxValueValidator);
	exports.MaxValueValidator = MaxValueValidator;
	var MaxValueValidator_1;


/***/ },
/* 17 */
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
	        template: __webpack_require__(18),
	        styles: [__webpack_require__(19)]
	    }),
	    __metadata("design:paramtypes", [])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span> \r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Kadmium OSC DMX</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/dashboard\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                        <span class=\"glyphicon glyphicon-cog\"></span> Setup\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/settings\">Settings</a></li>\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/groups\">Groups</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/fixture-definitions\"> <span class=\"glyphicon glyphicon-th-list\"></span> Fixture Definitions</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(20);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 21 */
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
	var status_1 = __webpack_require__(22);
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
	        template: __webpack_require__(23),
	        styles: [__webpack_require__(24)]
	    }),
	    __metadata("design:paramtypes", [])
	], StatusPanelComponent);
	exports.StatusPanelComponent = StatusPanelComponent;


/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default text-center\">\r\n    <div class=\"panel-heading\">{{name}} </div>\r\n    <div class=\"panel-body\" [ngClass]=\"status.alertStyle\">\r\n        {{status.message}}<br>\r\n        <span class=\"glyphicon status-glyph\" [ngClass]=\"status.glyphIcon\"></span>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(25);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".status-glyph {\r\n    font-size: 6em;\r\n}", ""]);
	
	// exports


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
	var status_1 = __webpack_require__(22);
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
	        template: __webpack_require__(27)
	    }),
	    __metadata("design:paramtypes", [])
	], MessageBarComponent);
	exports.MessageBarComponent = MessageBarComponent;


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div *ngFor=\"let message of messages\">\r\n    <div class=\"alert\" [ngClass]=\"message.alertStyle\">\r\n        <a class=\"close\" (click)=\"remove(message)\" aria-label=\"close\">&times;</a>\r\n        <span class=\"glyphicon\" [ngClass]=\"message.glyphIcon\"></span> {{message.message}}\r\n    </div>\r\n</div>"

/***/ },
/* 28 */
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
	var LabelledInputComponent = (function () {
	    function LabelledInputComponent() {
	    }
	    return LabelledInputComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], LabelledInputComponent.prototype, "label", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], LabelledInputComponent.prototype, "inputElement", void 0);
	LabelledInputComponent = __decorate([
	    core_1.Component({
	        selector: 'labelled-input',
	        template: __webpack_require__(29)
	    }),
	    __metadata("design:paramtypes", [])
	], LabelledInputComponent);
	exports.LabelledInputComponent = LabelledInputComponent;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\" [ngClass]=\"{'has-error': inputElement.errors}\">\r\n    <label class=\"control-label col-sm-2\" [attr.for]=\"inputElement.name\">{{ label }}</label>\r\n    <div class=\"col-sm-10\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

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
	var ConfirmationComponent = (function () {
	    function ConfirmationComponent(renderer) {
	        this.renderer = renderer;
	        this.visible = false;
	        this.visibleAnimate = false;
	    }
	    ConfirmationComponent.prototype.show = function (header, body, acceptVerb, cancelVerb) {
	        var _this = this;
	        this.header = header;
	        this.body = body;
	        this.acceptVerb = acceptVerb;
	        this.cancelVerb = cancelVerb;
	        this.visible = true;
	        setTimeout(function () { return _this.visibleAnimate = true; });
	        var promise = new Promise(function (resolve, reject) {
	            _this.resolve = resolve;
	        });
	        return promise;
	    };
	    ConfirmationComponent.prototype.hide = function () {
	        var _this = this;
	        this.visibleAnimate = false;
	        setTimeout(function () { return _this.visible = false; }, 300);
	    };
	    ConfirmationComponent.prototype.acceptClick = function () {
	        this.resolve(true);
	        this.hide();
	    };
	    ConfirmationComponent.prototype.cancelClick = function () {
	        this.resolve(false);
	        this.hide();
	    };
	    return ConfirmationComponent;
	}());
	__decorate([
	    core_1.ViewChild("confirmation"),
	    __metadata("design:type", core_1.ElementRef)
	], ConfirmationComponent.prototype, "confirmation", void 0);
	ConfirmationComponent = __decorate([
	    core_1.Component({
	        selector: 'confirmation',
	        template: __webpack_require__(31),
	        styles: [__webpack_require__(48)]
	    }),
	    __metadata("design:paramtypes", [core_1.Renderer])
	], ConfirmationComponent);
	exports.ConfirmationComponent = ConfirmationComponent;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div #confirmation class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"cancelClick()\">&times;</button>\r\n                <h4 class=\"modal-title\">{{header}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>{{body}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"acceptClick()\" data-dismiss=\"modal\">{{acceptVerb}}</button>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelClick()\" data-dismiss=\"modal\">{{cancelVerb}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 32 */
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
	var status_panel_component_1 = __webpack_require__(21);
	var message_bar_component_1 = __webpack_require__(26);
	var venue_service_1 = __webpack_require__(33);
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
	        template: __webpack_require__(35),
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
/* 33 */
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
	__webpack_require__(34);
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
/* 34 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Dashboard</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <status-panel #venue name=\"Venue\">\r\n            <div class=\"dropdown\" *ngIf=\"venueNames\">\r\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Load Venue\r\n                <span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li *ngFor=\"let venueName of venueNames\">\r\n                        <a (click)=\"activateVenue(venueName)\">{{venueName}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #sacnTransmitter name=\"sACN Transmitter\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/sacnTransmitterLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #oscListener name=\"OSC Listener\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/oscListenerLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #fixtures name=\"Fixtures\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/fixturesLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n</div>"

/***/ },
/* 36 */
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
	var message_bar_component_1 = __webpack_require__(26);
	var settings_service_1 = __webpack_require__(37);
	var settings_1 = __webpack_require__(38);
	var $ = __webpack_require__(39);
	var SettingsComponent = (function () {
	    function SettingsComponent(settingsService) {
	        var _this = this;
	        this.settingsService = settingsService;
	        this.testElement = "stuff";
	        this.saving = false;
	        this.settingsService.get().then(function (data) {
	            _this.settings = data;
	        });
	    }
	    SettingsComponent.prototype.save = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var reason_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        this.saving = true;
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, 4, 5]);
	                        return [4 /*yield*/, this.settingsService.save(this.settings)];
	                    case 2:
	                        _a.sent();
	                        this.messageBar.add("Success", "Saved Successfully");
	                        return [3 /*break*/, 5];
	                    case 3:
	                        reason_1 = _a.sent();
	                        this.messageBar.add("Error", reason_1);
	                        return [3 /*break*/, 5];
	                    case 4:
	                        this.saving = false;
	                        return [7 /*endfinally*/];
	                    case 5: return [2 /*return*/];
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
	    SettingsComponent.prototype.validateTargets = function () {
	        var badTargets = this.settings.sacnTransmitter.unicast.filter(function (value) { return value.target == "" || value.target == undefined || value.target == null; });
	        return badTargets.length == 0;
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
	        template: __webpack_require__(40),
	        providers: [settings_service_1.SettingsService]
	    }),
	    __metadata("design:paramtypes", [settings_service_1.SettingsService])
	], SettingsComponent);
	exports.SettingsComponent = SettingsComponent;


/***/ },
/* 37 */
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
	__webpack_require__(34);
	var settings_1 = __webpack_require__(38);
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
/* 38 */
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
/* 39 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Settings</h1>\r\n</div>\r\n<p *ngIf=\"!settings\">Loading...</p>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"settings\" class=\"form-horizontal\" #settingsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"HTTP Port:\" [inputElement]=\"webPort\">\r\n            <input type=\"number\" name=\"webPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.webPort\" #webPort=\"ngModel\"\r\n            />\r\n            <div class=\"alert alert-danger\" *ngIf=\"webPort.errors\">The port must be between 1 and 65535</div>\r\n        </labelled-input>\r\n        <labelled-input label=\"OSC Port:\" [inputElement]=\"oscPort\">\r\n            <input required type=\"number\" name=\"oscPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.oscPort\" #oscPort=\"ngModel\"\r\n            />\r\n            <div class=\"alert alert-danger\" *ngIf=\"oscPort.errors\">The port must be between 1 and 65535</div>\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\" [inputElement]=\"oscPort\">\r\n            <input type=\"number\" name=\"sacnTransmitterDelay\" class=\"form-control\" min=\"0\" max=\"10000\" [(ngModel)]=\"settings.sacnTransmitter.delay\"\r\n                #sacnTransmitterDelay=\"ngModel\" />\r\n            <div class=\"alert alert-danger\" *ngIf=\"sacnTransmitterDelay.errors\">Delay must be betwene 0 and 10000ms</div>\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\" [inputElement]=\"sacnMulticast\">\r\n            <div class=\"checkbox\">\r\n                <label><input type=\"checkbox\" name=\"sacnMulticast\" [(ngModel)]=\"settings.sacnTransmitter.multicast\" #sacnMulticast=\"ngModel\">Multicast</label>\r\n            </div>\r\n        </labelled-input>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"sacnTransmitterDelay\">sACN Unicast Targets:</label>\r\n            <div class=\"col-sm-10\">\r\n                <div class=\"form-group\" *ngFor=\"let target of settings.sacnTransmitter.unicast; let idx = index\" id=\"unicast\" name=\"unicast\">\r\n                    <div class=\"col-sm-8\" [ngClass]=\"{'has-error': targetName.errors && targetName.touched}\">\r\n                        <input required type=\"text\" class=\"form-control col-sm-8\" [(ngModel)]=\"settings.sacnTransmitter.unicast[idx].target\" [ngModelOptions]=\"{standalone: true}\"\r\n                            #targetName=\"ngModel\" />\r\n                        <div class=\"alert alert-danger\" *ngIf=\"targetName.errors && targetName.touched\">This field is required</div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <button class=\"btn btn-danger\" (click)=\"removeTarget(idx)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn btn-success clearfix\" (click)=\"addTarget()\"><span class=\"glyphicon glyphicon-plus\"></span> Add Target</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!settingsForm.valid || !validateTargets()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },
/* 41 */
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
	var message_bar_component_1 = __webpack_require__(26);
	var groups_service_1 = __webpack_require__(42);
	var group_1 = __webpack_require__(43);
	var GroupsComponent = (function () {
	    function GroupsComponent(groupsService) {
	        var _this = this;
	        this.groupsService = groupsService;
	        this.saving = false;
	        this.groupsService
	            .get()
	            .then(function (value) { return _this.groups = value; })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	    }
	    GroupsComponent.prototype.add = function () {
	        this.groups.push(new group_1.Group(""));
	    };
	    GroupsComponent.prototype.delete = function (group) {
	        var index = this.groups.indexOf(group);
	        this.groups.splice(index, 1);
	    };
	    GroupsComponent.prototype.move = function (group, offset) {
	        var old_index = this.groups.indexOf(group);
	        var new_index = old_index + offset;
	        this.groups.splice(new_index, 0, this.groups.splice(old_index, 1)[0]);
	    };
	    GroupsComponent.prototype.validate = function () {
	        var result = this.groups.every(function (value) { return value.name != "" && value.name != undefined && value.name != null; });
	        return result;
	    };
	    GroupsComponent.prototype.save = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var reason_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        this.saving = true;
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, 4, 5]);
	                        return [4 /*yield*/, this.groupsService.put(this.groups)];
	                    case 2:
	                        _a.sent();
	                        this.messageBar.add("Success", "Saved successfully");
	                        return [3 /*break*/, 5];
	                    case 3:
	                        reason_1 = _a.sent();
	                        this.messageBar.add("Error", reason_1);
	                        return [3 /*break*/, 5];
	                    case 4:
	                        this.saving = false;
	                        return [7 /*endfinally*/];
	                    case 5: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    return GroupsComponent;
	}());
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], GroupsComponent.prototype, "messageBar", void 0);
	GroupsComponent = __decorate([
	    core_1.Component({
	        selector: 'groups',
	        template: __webpack_require__(44),
	        providers: [groups_service_1.GroupsService]
	    }),
	    __metadata("design:paramtypes", [groups_service_1.GroupsService])
	], GroupsComponent);
	exports.GroupsComponent = GroupsComponent;


/***/ },
/* 42 */
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
	__webpack_require__(34);
	var group_1 = __webpack_require__(43);
	var GroupsService = (function () {
	    function GroupsService(http) {
	        this.http = http;
	        this.groupsUrl = "/api/Group";
	    }
	    GroupsService.prototype.get = function () {
	        return this.http.get(this.groupsUrl)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data.map(function (value) { return new group_1.Group(value); });
	        });
	    };
	    GroupsService.prototype.put = function (groups) {
	        return this.http.put(this.groupsUrl, groups.map(function (value) { return value.name; }))
	            .toPromise()
	            .then(function (response) { });
	    };
	    return GroupsService;
	}());
	GroupsService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], GroupsService);
	exports.GroupsService = GroupsService;


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	var Group = (function () {
	    function Group(name) {
	        this.name = name;
	    }
	    return Group;
	}());
	exports.Group = Group;


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Groups</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"groups\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Order</th>\r\n                    <th>Name</th>\r\n                    <th>Remove</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let group of groups; let idx = index\">\r\n                    <td>\r\n                        <button class=\"btn\" (click)=\"move(group, -1)\" [disabled]=\"idx == 0\"><span class=\"glyphicon glyphicon-arrow-up\"></span></button>\r\n                        <button class=\"btn\" (click)=\"move(group, 1)\" [disabled]=\"idx == groups.length - 1\"><span class=\"glyphicon glyphicon-arrow-down\"></span></button>\r\n                    </td>\r\n                    <td [ngClass]=\"{'has-error': name.errors}\">\r\n                        <input required class=\"form-control\" type=\"text\" [(ngModel)]=\"group.name\" [ngModelOptions]=\"{standalone: true}\" #name=\"ngModel\">\r\n                        <div class=\"alert alert-danger\" *ngIf=\"name.errors && name.touched\">\r\n                            A name is required\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"btn-group\">\r\n                            <button class=\"btn btn-danger\" (click)=\"delete(group)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span> Add</button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" [disabled]=\"!validate()\" (click)=\"save()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },
/* 45 */
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
	var message_bar_component_1 = __webpack_require__(26);
	var confirmation_component_1 = __webpack_require__(30);
	var fixture_definitions_service_1 = __webpack_require__(46);
	var FixtureDefinitionsComponent = (function () {
	    function FixtureDefinitionsComponent(fixtureDefinitionsService) {
	        var _this = this;
	        this.fixtureDefinitionsService = fixtureDefinitionsService;
	        this.fixtureDefinitionsService
	            .get()
	            .then(function (value) { return _this.data = value; })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	    }
	    Object.defineProperty(FixtureDefinitionsComponent.prototype, "manufacturers", {
	        get: function () {
	            return this.data
	                .map(function (value) { return value.manufacturer; })
	                .filter(function (value, index, array) { return array.indexOf(value) === index; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FixtureDefinitionsComponent.prototype, "filteredData", {
	        get: function () {
	            var _this = this;
	            if (this.manufacturerFilterEnabled) {
	                return this.data.filter(function (value) { return value.manufacturer == _this.manufacturerFilter; });
	            }
	            else {
	                return this.data;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FixtureDefinitionsComponent.prototype.edit = function (fixture) {
	    };
	    FixtureDefinitionsComponent.prototype.deleteConfirm = function (fixture) {
	        return __awaiter(this, void 0, void 0, function () {
	            var result;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.confirmation.show("Are you sure?", "Are you sure you want to delete the fixture definition for " + fixture.manufacturer + " " + fixture.model + "?", "Delete", "Cancel")];
	                    case 1:
	                        result = _a.sent();
	                        if (result) {
	                            this.messageBar.add("Success", "");
	                        }
	                        else {
	                            this.messageBar.add("Error", "");
	                        }
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    return FixtureDefinitionsComponent;
	}());
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], FixtureDefinitionsComponent.prototype, "messageBar", void 0);
	__decorate([
	    core_1.ViewChild("confirmation"),
	    __metadata("design:type", confirmation_component_1.ConfirmationComponent)
	], FixtureDefinitionsComponent.prototype, "confirmation", void 0);
	FixtureDefinitionsComponent = __decorate([
	    core_1.Component({
	        selector: 'fixture-definitions',
	        template: __webpack_require__(47),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureDefinitionsComponent);
	exports.FixtureDefinitionsComponent = FixtureDefinitionsComponent;


/***/ },
/* 46 */
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
	__webpack_require__(34);
	var FixtureDefinitionsService = (function () {
	    function FixtureDefinitionsService(http) {
	        this.http = http;
	        this.groupsUrl = "/api/FixtureDefinition";
	    }
	    FixtureDefinitionsService.prototype.get = function () {
	        return this.http.get(this.groupsUrl)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data;
	        });
	    };
	    return FixtureDefinitionsService;
	}());
	FixtureDefinitionsService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], FixtureDefinitionsService);
	exports.FixtureDefinitionsService = FixtureDefinitionsService;


/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definitions</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"form-group form-inline\" *ngIf=\"data\">\r\n    <div class=\"checkbox\">\r\n        <label>\r\n            <input type=\"checkbox\" [(ngModel)]=\"manufacturerFilterEnabled\" />\r\n            Filter by manufacturer\r\n        </label>\r\n    </div>\r\n    <select class=\"form-control\" [disabled]=\"!manufacturerFilterEnabled\" [(ngModel)]=\"manufacturerFilter\">\r\n        <option *ngFor=\"let manufacturer of manufacturers\">{{manufacturer}}</option>\r\n    </select>\r\n</div>\r\n<table class=\"table table-striped\" *ngIf=\"data\">\r\n    <thead>\r\n        <tr>\r\n            <th>Manufacturer</th>\r\n            <th>Model</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of filteredData\">\r\n            <td>{{entry.manufacturer}}</td>\r\n            <td>{{entry.model}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-default\" (click)=\"edit(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></button>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<confirmation #confirmation></confirmation>"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(49);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzQ4M2YxNjMxNDhmZjRkMjE0NDkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzcz80ZWFjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWUvdmVudWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzP2IyOTAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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K0RBQXlCOzs7Ozs7O0FDUHRDLHVrQkFBc2tCLGNBQWMseVZBQXlWLG9CQUFvQiwyQkFBMkIsYUFBYSxrZjs7Ozs7OztBQ0N6K0I7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxtQ0FBa0Msa0NBQWtDLEtBQUs7O0FBRXpFIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzQ4M2YxNjMxNDhmZjRkMjE0NDkiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXG5cbmltcG9ydCB7IE1JTk1BWF9ESVJFQ1RJVkVTIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XG5pbXBvcnQgeyBNYXhWYWx1ZVZhbGlkYXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9taW5tYXgvaW5kZXgnO1xuXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhdHVzUGFuZWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGFiZWxsZWRJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JvdXBzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50JztcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlL3ZlbnVlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdyb3Vwc1NlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuc2VydmljZVwiO1xuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIEdyb3Vwc0NvbXBvbmVudCxcbiAgICAgICAgRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50LFxuXG4gICAgICAgIE1JTk1BWF9ESVJFQ1RJVkVTLFxuXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIFN0YXR1c1BhbmVsQ29tcG9uZW50LFxuICAgICAgICBNZXNzYWdlQmFyQ29tcG9uZW50LFxuICAgICAgICBMYWJlbGxlZElucHV0Q29tcG9uZW50LFxuICAgICAgICBDb25maXJtYXRpb25Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG5cbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2Rhc2hib2FyZCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdkYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnc2V0dGluZ3MnLCBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdncm91cHMnLCBjb21wb25lbnQ6IEdyb3Vwc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZml4dHVyZS1kZWZpbml0aW9ucycsIGNvbXBvbmVudDogRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdzZXRzJyB9XG4gICAgICAgIF0pXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZVxue1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcbiAgICAuYm9keS1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9taW4tdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWF4LXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgTWluVmFsdWVWYWxpZGF0b3IgfSBmcm9tICcuL21pbi12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWF4VmFsdWVWYWxpZGF0b3IgfSBmcm9tICcuL21heC12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBjb25zdCBNSU5NQVhfRElSRUNUSVZFUzogW2FueV0gPSBbTWluVmFsdWVWYWxpZGF0b3IsIE1heFZhbHVlVmFsaWRhdG9yXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwiaW1wb3J0IHsgQXR0cmlidXRlLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTUlOX1ZBTFVFX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1pblZhbHVlVmFsaWRhdG9yKSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW21pbl1bZm9ybUNvbnRyb2xOYW1lXSxbbWluXVtmb3JtQ29udHJvbF0sW21pbl1bbmdNb2RlbF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbTUlOX1ZBTFVFX1ZBTElEQVRPUl0sXHJcbiAgICBob3N0OiB7ICdbYXR0ci5taW5dJzogJ21pbiA/IG1pbiA6IDAnIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNaW5WYWx1ZVZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25DaGFuZ2VzXHJcbntcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XHJcblxyXG4gICAgQElucHV0KCkgbWluOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIEBBdHRyaWJ1dGUoJ21pbicpIG1uOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG1uICE9PSB1bmRlZmluZWQgJiYgbW4gIT09IG51bGwpXHJcbiAgICAgICAge1x0Ly8gaXNQcmVzZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHBhcnNlSW50KG1uLCAxMCk7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oYXR0clZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW4gPSBtbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbWluQ2hhbmdlID0gY2hhbmdlc1snbWluJ107XHJcbiAgICAgICAgaWYgKG1pbkNoYW5nZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVWYWxpZGF0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IE1pblZhbHVlVmFsaWRhdG9yLm1pbihwYXJzZUludCh0aGlzLm1pbiwgMTApKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcihjKTsgfVxyXG5cclxuICAgIHN0YXRpYyBtaW4obW46IG51bWJlcik6IFZhbGlkYXRvckZuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9ICtjb250cm9sLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gKHYgPCBtbiA/IHsgJ21pbic6IHsgJ21pblZhbHVlJzogbW4sICdhY3R1YWxWYWx1ZSc6IHYgfSB9IDogbnVsbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L21pbi12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgQXR0cmlidXRlLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfVkFMVUVfVkFMSURBVE9SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF4VmFsdWVWYWxpZGF0b3IpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbWF4XVtmb3JtQ29udHJvbE5hbWVdLFttaW5dW2Zvcm1Db250cm9sXSxbbWluXVtuZ01vZGVsXScsXHJcbiAgICBwcm92aWRlcnM6IFtNQVhfVkFMVUVfVkFMSURBVE9SXSxcclxuICAgIGhvc3Q6IHsgJ1thdHRyLm1heF0nOiAnbWF4ID8gbWF4IDogMCcgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1heFZhbHVlVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkNoYW5nZXNcclxue1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcclxuXHJcbiAgICBASW5wdXQoKSBtYXg6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQEF0dHJpYnV0ZSgnbWF4JykgbXg6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAobXggIT09IHVuZGVmaW5lZCAmJiBteCAhPT0gbnVsbClcclxuICAgICAgICB7XHQvLyBpc1ByZXNlbnRcclxuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gcGFyc2VJbnQobXgsIDEwKTtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihhdHRyVmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heCA9IG14O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtYXhDaGFuZ2UgPSBjaGFuZ2VzWydtYXgnXTtcclxuICAgICAgICBpZiAobWF4Q2hhbmdlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gTWF4VmFsdWVWYWxpZGF0b3IubWF4KHBhcnNlSW50KHRoaXMubWF4LCAxMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0geyByZXR1cm4gdGhpcy5fdmFsaWRhdG9yKGMpOyB9XHJcblxyXG4gICAgc3RhdGljIG1heChteDogbnVtYmVyKTogVmFsaWRhdG9yRm5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gK2NvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiAodiA+IG14ID8geyAnbWF4JzogeyAnbWF4VmFsdWUnOiBteCwgJ2FjdHVhbFZhbHVlJzogdiB9IH0gOiBudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWF4LXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnRcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWludmVyc2VcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbXlOYXZiYXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPiBcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBocmVmPVxcXCIjXFxcIj5LYWRtaXVtIE9TQyBETVg8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVxcXCIgaWQ9XFxcIm15TmF2YmFyXFxcIj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgcm91dGVyTGluaz1cXFwiL2Rhc2hib2FyZFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24taG9tZVxcXCI+PC9zcGFuPiBIb21lPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jb2dcXFwiPjwvc3Bhbj4gU2V0dXBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgcm91dGVyTGluaz1cXFwiL3NldHRpbmdzXFxcIj5TZXR0aW5nczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9ncm91cHNcXFwiPkdyb3VwczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvZml4dHVyZS1kZWZpbml0aW9uc1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3RcXFwiPjwvc3Bhbj4gRml4dHVyZSBEZWZpbml0aW9uczwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvbmF2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vc3RhdHVzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RhdHVzLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdHVzUGFuZWxDb21wb25lbnRcclxue1xyXG4gICAgcHVibGljIHN0YXR1czogU3RhdHVzO1xyXG4gICAgQElucHV0KFwibmFtZVwiKSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gbmV3IFN0YXR1cyhcIlVua25vd25cIiwgXCJVbmtub3duXCIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBTdGF0dXNcclxue1xyXG4gICAgc3RhdGljIFN0YXR1c1RhYmxlOiBTdGF0dXNUYWJsZSA9IHtcclxuICAgICAgICBTdWNjZXNzOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtc3VjY2Vzc1wiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLW9rLXNpZ25cIiB9LFxyXG4gICAgICAgIEVycm9yOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtZGFuZ2VyXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24tcmVtb3ZlLXNpZ25cIiB9LFxyXG4gICAgICAgIFdhcm5pbmc6IHsgYWxlcnRTdHlsZTogXCJhbGVydC13YXJuaW5nXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24taW5mby1zaWduXCIgfSxcclxuICAgICAgICBVbmtub3duOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtaW5mb1wiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ25cIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjb2RlOiBTdGF0dXNDb2RlO1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb2RlOiBTdGF0dXNDb2RlLCBtZXNzYWdlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoY29kZTogU3RhdHVzQ29kZSwgbWVzc2FnZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFsZXJ0U3R5bGUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXR1cy5TdGF0dXNUYWJsZVt0aGlzLmNvZGVdLmFsZXJ0U3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBnbHlwaEljb24oKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXR1cy5TdGF0dXNUYWJsZVt0aGlzLmNvZGVdLmdseXBoSWNvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3RhdHVzQ29kZSA9IFwiVW5rbm93blwiIHwgXCJFcnJvclwiIHwgXCJTdWNjZXNzXCIgfCBcIldhcm5pbmdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzVGFibGVcclxue1xyXG4gICAgW2tleTogc3RyaW5nXTogU3RhdHVzSW5mbztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1c0luZm9cclxue1xyXG4gICAgYWxlcnRTdHlsZTogc3RyaW5nO1xyXG4gICAgZ2x5cGhJY29uOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+e3tuYW1lfX0gPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiIFtuZ0NsYXNzXT1cXFwic3RhdHVzLmFsZXJ0U3R5bGVcXFwiPlxcclxcbiAgICAgICAge3tzdGF0dXMubWVzc2FnZX19PGJyPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBzdGF0dXMtZ2x5cGhcXFwiIFtuZ0NsYXNzXT1cXFwic3RhdHVzLmdseXBoSWNvblxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YXR1cy1nbHlwaCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1cywgU3RhdHVzQ29kZSB9IGZyb20gXCIuLi9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtZXNzYWdlLWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tZXNzYWdlLWJhci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQmFyQ29tcG9uZW50XHJcbntcclxuICAgIHByaXZhdGUgbWVzc2FnZXM6IFN0YXR1c1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmUoc3RhdHVzOiBTdGF0dXMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tZXNzYWdlcy5pbmRleE9mKHN0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoc3RhdHVzQ29kZTogU3RhdHVzQ29kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXcgU3RhdHVzKHN0YXR1c0NvZGUsIG1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nRm9yPVxcXCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0XFxcIiBbbmdDbGFzc109XFxcIm1lc3NhZ2UuYWxlcnRTdHlsZVxcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcInJlbW92ZShtZXNzYWdlKVxcXCIgYXJpYS1sYWJlbD1cXFwiY2xvc2VcXFwiPiZ0aW1lczs8L2E+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uXFxcIiBbbmdDbGFzc109XFxcIm1lc3NhZ2UuZ2x5cGhJY29uXFxcIj48L3NwYW4+IHt7bWVzc2FnZS5tZXNzYWdlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xhYmVsbGVkLWlucHV0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsbGVkSW5wdXRDb21wb25lbnRcclxue1xyXG4gICAgQElucHV0KCkgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzogaW5wdXRFbGVtZW50LmVycm9yc31cXFwiPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTJcXFwiIFthdHRyLmZvcl09XFxcImlucHV0RWxlbWVudC5uYW1lXFxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbmZpcm1hdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoXCIuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzXCIpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtYXRpb25cIikgY29uZmlybWF0aW9uOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGhlYWRlcjogc3RyaW5nO1xyXG4gICAgYm9keTogc3RyaW5nO1xyXG4gICAgYWNjZXB0VmVyYjogc3RyaW5nO1xyXG4gICAgY2FuY2VsVmVyYjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyB2aXNpYmxlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcblxyXG4gICAgcmVzb2x2ZTogKHZhbHVlPzogYm9vbGVhbiB8IFByb21pc2VMaWtlPGJvb2xlYW4+KSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdyhoZWFkZXI6IHN0cmluZywgYm9keTogc3RyaW5nLCBhY2NlcHRWZXJiOiBzdHJpbmcsIGNhbmNlbFZlcmI6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj5cclxuICAgIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gICAgICAgIHRoaXMuYWNjZXB0VmVyYiA9IGFjY2VwdFZlcmI7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxWZXJiID0gY2FuY2VsVmVyYjtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmlzaWJsZUFuaW1hdGUgPSB0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUFuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmlzaWJsZSA9IGZhbHNlLCAzMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHRDbGljaygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWxDbGljaygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAjY29uZmlybWF0aW9uIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIFtuZ0NsYXNzXT1cXFwieydpbic6IHZpc2libGVBbmltYXRlfVxcXCIgW25nU3R5bGVdPVxcXCJ7J2Rpc3BsYXknOiB2aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJywgJ29wYWNpdHknOiB2aXNpYmxlQW5pbWF0ZSA/IDEgOiAwfVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxyXFxuICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcImNhbmNlbENsaWNrKClcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+e3toZWFkZXJ9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwPnt7Ym9keX19PC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJhY2NlcHRDbGljaygpXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj57e2FjY2VwdFZlcmJ9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiY2FuY2VsQ2xpY2soKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+e3tjYW5jZWxWZXJifX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNQYW5lbENvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi4vdmVudWUvdmVudWUuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzQ29kZSB9IGZyb20gXCIuLi9zdGF0dXMvc3RhdHVzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGFzaGJvYXJkJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbVmVudWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwidmVudWVcIikgdmVudWU6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcInNhY25UcmFuc21pdHRlclwiKSBzYWNuVHJhbnNtaXR0ZXI6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcIm9zY0xpc3RlbmVyXCIpIG9zY0xpc3RlbmVyOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJmaXh0dXJlc1wiKSBmaXh0dXJlczogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSB3ZWJTb2NrZXQ6IFdlYlNvY2tldDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzb2NrZXRVUkwgPSBnZXRTb2NrZXRVUkwoXCJJbmRleFwiKTtcclxuICAgIHByaXZhdGUgdmVudWVOYW1lczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2ZW51ZVNlcnZpY2U6IFZlbnVlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB2ZW51ZVNlcnZpY2UuZ2V0TmFtZXMoKVxyXG4gICAgICAgICAgICAudGhlbihuYW1lcyA9PiB0aGlzLnZlbnVlTmFtZXMgPSBuYW1lcylcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgICAgIHRoaXMud2ViU29ja2V0ID0gbmV3IFdlYlNvY2tldChEYXNoYm9hcmRDb21wb25lbnQuc29ja2V0VVJMKTtcclxuICAgICAgICB0aGlzLndlYlNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXY6IE1lc3NhZ2VFdmVudCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBKU09OLnBhcnNlKGV2LmRhdGEpIGFzIFN0YXR1c0RhdGE7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXNQYW5lbDogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLmNvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJWZW51ZXNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMudmVudWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiU0FDTlRyYW5zbWl0dGVyc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy5zYWNuVHJhbnNtaXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiT1NDTGlzdGVuZXJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLm9zY0xpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRml4dHVyZXNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMuZml4dHVyZXNcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0dXNQYW5lbC5zdGF0dXMudXBkYXRlKHN0YXR1cy5jb2RlLCBzdGF0dXMubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVWZW51ZSh2ZW51ZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZlbnVlU2VydmljZVxyXG4gICAgICAgICAgICAuYWN0aXZhdGUodmVudWVOYW1lKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCB2ZW51ZU5hbWUgKyBcIiBzdWNjZXNzZnVsbHkgbG9hZGVkXCIpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdHVzRGF0YVxyXG57XHJcbiAgICBjb2RlOiBTdGF0dXNDb2RlO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgY29udHJvbGxlcjogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTb2NrZXRVUkwoY29udHJvbGxlcjogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhY3Rpb25VUkwgPSBnZXRBY3Rpb25VUkwoY29udHJvbGxlciwgXCJTb2NrZXRcIik7XHJcbiAgICBsZXQgc29ja2V0VVJMID0gYWN0aW9uVVJMLnJlcGxhY2UoXCJodHRwXCIsIFwid3NcIik7XHJcbiAgICByZXR1cm4gc29ja2V0VVJMO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBY3Rpb25VUkwoLi4ucGFydHM6IHN0cmluZ1tdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBvcmlnaW5hbFVSTDogc3RyaW5nID0gZG9jdW1lbnQuVVJMO1xyXG4gICAgbGV0IHVybFBhcnRzOiBzdHJpbmdbXSA9IGRvY3VtZW50LlVSTC5zcGxpdChcIi9cIik7XHJcbiAgICBsZXQgcHJvdG9jb2w6IHN0cmluZyA9IHVybFBhcnRzWzBdO1xyXG4gICAgbGV0IGhvc3Q6IHN0cmluZyA9IHVybFBhcnRzWzJdO1xyXG5cclxuICAgIGxldCByb290OiBzdHJpbmcgPSBwcm90b2NvbCArIFwiLy9cIiArIGhvc3Q7XHJcblxyXG4gICAgbGV0IHBhcnRzSm9pbmVkID0gcGFydHMuam9pbihcIi9cIik7XHJcblxyXG4gICAgcmV0dXJuIHJvb3QgKyBcIi9cIiArIHBhcnRzSm9pbmVkO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IFZlbnVlIH0gZnJvbSBcIi4vdmVudWVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZlbnVlU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHZlbnVlVXJsID0gXCIvYXBpL1ZlbnVlXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBzdHJpbmcpOiBQcm9taXNlPFZlbnVlPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIFZlbnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmFtZXMoKTogUHJvbWlzZTxzdHJpbmdbXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIHN0cmluZ1tdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aXZhdGUoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlVXJsICsgXCIvYWN0aXZhdGUvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWUvdmVudWUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+RGFzaGJvYXJkPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICN2ZW51ZSBuYW1lPVxcXCJWZW51ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiICpuZ0lmPVxcXCJ2ZW51ZU5hbWVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPkxvYWQgVmVudWVcXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgdmVudWVOYW1lIG9mIHZlbnVlTmFtZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImFjdGl2YXRlVmVudWUodmVudWVOYW1lKVxcXCI+e3t2ZW51ZU5hbWV9fTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI3NhY25UcmFuc21pdHRlciBuYW1lPVxcXCJzQUNOIFRyYW5zbWl0dGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvc2FjblRyYW5zbWl0dGVyTGl2ZVxcXCI+TGl2ZTwvYT5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjb3NjTGlzdGVuZXIgbmFtZT1cXFwiT1NDIExpc3RlbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvb3NjTGlzdGVuZXJMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICNmaXh0dXJlcyBuYW1lPVxcXCJGaXh0dXJlc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm91dGVyTGluaz1cXFwiL2ZpeHR1cmVzTGl2ZVxcXCI+TGl2ZTwvYT5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vc2V0dGluZ3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgVW5pY2FzdFRhcmdldCB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5cclxudmFyICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NldHRpbmdzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtTZXR0aW5nc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG4gICAgc2F2aW5nOiBib29sZWFuO1xyXG4gICAgdGVzdEVsZW1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzU2VydmljZTogU2V0dGluZ3NTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGVzdEVsZW1lbnQgPSBcInN0dWZmXCI7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU2VydmljZS5nZXQoKS50aGVuKGRhdGEgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzYXZlKCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzU2VydmljZS5zYXZlKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBcIlNhdmVkIFN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKHJlYXNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVGFyZ2V0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0LnB1c2gobmV3IFVuaWNhc3RUYXJnZXQoXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVUYXJnZXQoaW5kZXg6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlVGFyZ2V0cygpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGJhZFRhcmdldHMgPSB0aGlzLnNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0LmZpbHRlcigodmFsdWU6IFVuaWNhc3RUYXJnZXQpID0+IHZhbHVlLnRhcmdldCA9PSBcIlwiIHx8IHZhbHVlLnRhcmdldCA9PSB1bmRlZmluZWQgfHwgdmFsdWUudGFyZ2V0ID09IG51bGwpO1xyXG4gICAgICAgIHJldHVybiBiYWRUYXJnZXRzLmxlbmd0aCA9PSAwO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgU2V0dGluZ3MsIFNldHRpbmdzRGF0YSB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nc1VybCA9IFwiL2FwaS9TZXR0aW5nc1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCgpOiBQcm9taXNlPFNldHRpbmdzPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2V0dGluZ3NVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgU2V0dGluZ3NEYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5ncy5kZXNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlKGRhdGE6IFNldHRpbmdzKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnNldHRpbmdzVXJsLCBkYXRhLnNlcmlhbGl6ZSgpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IFxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpOyAvLyBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiLCJleHBvcnQgY2xhc3MgU2V0dGluZ3Ncclxue1xyXG4gICAgd2ViUG9ydDogbnVtYmVyO1xyXG4gICAgb3NjUG9ydDogbnVtYmVyO1xyXG4gICAgc2FjblRyYW5zbWl0dGVyOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53ZWJQb3J0ID0gODA7XHJcbiAgICAgICAgdGhpcy5vc2NQb3J0ID0gOTAwMDtcclxuICAgICAgICB0aGlzLnNhY25UcmFuc21pdHRlciA9IG5ldyBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemUoZGF0YTogU2V0dGluZ3NEYXRhKTogU2V0dGluZ3NcclxuICAgIHtcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcclxuICAgICAgICBzZXR0aW5ncy53ZWJQb3J0ID0gZGF0YS53ZWJQb3J0O1xyXG4gICAgICAgIHNldHRpbmdzLm9zY1BvcnQgPSBkYXRhLm9zY1BvcnQ7XHJcbiAgICAgICAgc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyID0gU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3MuZGVzZXJpYWxpemUoZGF0YS5zYWNuVHJhbnNtaXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IFNldHRpbmdzRGF0YVxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRhOiBTZXR0aW5nc0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHdlYlBvcnQ6IHRoaXMud2ViUG9ydCxcclxuICAgICAgICAgICAgb3NjUG9ydDogdGhpcy5vc2NQb3J0LFxyXG4gICAgICAgICAgICBzYWNuVHJhbnNtaXR0ZXI6IHRoaXMuc2FjblRyYW5zbWl0dGVyLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNBQ05UcmFuc21pdHRlclNldHRpbmdzXHJcbntcclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICBtdWx0aWNhc3Q6IGJvb2xlYW47XHJcbiAgICB1bmljYXN0OiBVbmljYXN0VGFyZ2V0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xyXG4gICAgICAgIHRoaXMubXVsdGljYXN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVuaWNhc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplKGRhdGE6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YSk6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRyYW5zbWl0dGVyID0gbmV3IFNBQ05UcmFuc21pdHRlclNldHRpbmdzKCk7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIuZGVsYXkgPSBkYXRhLmRlbGF5O1xyXG4gICAgICAgIHRyYW5zbWl0dGVyLm11bHRpY2FzdCA9IGRhdGEubXVsdGljYXN0O1xyXG4gICAgICAgIHRyYW5zbWl0dGVyLnVuaWNhc3QgPSBkYXRhLnVuaWNhc3QubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiBuZXcgVW5pY2FzdFRhcmdldCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc21pdHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YVxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRhOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGEgPSB7XHJcbiAgICAgICAgICAgIGRlbGF5OiB0aGlzLmRlbGF5LFxyXG4gICAgICAgICAgICBtdWx0aWNhc3Q6IHRoaXMubXVsdGljYXN0LFxyXG4gICAgICAgICAgICB1bmljYXN0OiB0aGlzLnVuaWNhc3QubWFwKCh2YWx1ZTogVW5pY2FzdFRhcmdldCkgPT4gdmFsdWUudGFyZ2V0KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbmljYXN0VGFyZ2V0XHJcbntcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NEYXRhXHJcbntcclxuICAgIHdlYlBvcnQ6IG51bWJlcjtcclxuICAgIG9zY1BvcnQ6IG51bWJlcjtcclxuICAgIHNhY25UcmFuc21pdHRlcjogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YVxyXG57XHJcbiAgICBkZWxheTogbnVtYmVyO1xyXG4gICAgbXVsdGljYXN0OiBib29sZWFuO1xyXG4gICAgdW5pY2FzdDogc3RyaW5nW107XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqcXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPlNldHRpbmdzPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48cCAqbmdJZj1cXFwiIXNldHRpbmdzXFxcIj5Mb2FkaW5nLi4uPC9wPlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJzZXR0aW5nc1xcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgI3NldHRpbmdzRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgPGZpZWxkc2V0IFtkaXNhYmxlZF09XFxcInNhdmluZ1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIkhUVFAgUG9ydDpcXFwiIFtpbnB1dEVsZW1lbnRdPVxcXCJ3ZWJQb3J0XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJ3ZWJQb3J0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNjU1MzVcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy53ZWJQb3J0XFxcIiAjd2ViUG9ydD1cXFwibmdNb2RlbFxcXCJcXHJcXG4gICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIndlYlBvcnQuZXJyb3JzXFxcIj5UaGUgcG9ydCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNjU1MzU8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk9TQyBQb3J0OlxcXCIgW2lucHV0RWxlbWVudF09XFxcIm9zY1BvcnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcIm9zY1BvcnRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI2NTUzNVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLm9zY1BvcnRcXFwiICNvc2NQb3J0PVxcXCJuZ01vZGVsXFxcIlxcclxcbiAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwib3NjUG9ydC5lcnJvcnNcXFwiPlRoZSBwb3J0IG11c3QgYmUgYmV0d2VlbiAxIGFuZCA2NTUzNTwvZGl2PlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwic0FDTiBUcmFuc21pdHRlciBEZWxheSAobXMpOlxcXCIgW2lucHV0RWxlbWVudF09XFxcIm9zY1BvcnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcInNhY25UcmFuc21pdHRlckRlbGF5XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwMDBcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIuZGVsYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICNzYWNuVHJhbnNtaXR0ZXJEZWxheT1cXFwibmdNb2RlbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJzYWNuVHJhbnNtaXR0ZXJEZWxheS5lcnJvcnNcXFwiPkRlbGF5IG11c3QgYmUgYmV0d2VuZSAwIGFuZCAxMDAwMG1zPC9kaXY+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJzQUNOIFRyYW5zbWl0dGVyIERlbGF5IChtcyk6XFxcIiBbaW5wdXRFbGVtZW50XT1cXFwic2Fjbk11bHRpY2FzdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJzYWNuTXVsdGljYXN0XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLm11bHRpY2FzdFxcXCIgI3NhY25NdWx0aWNhc3Q9XFxcIm5nTW9kZWxcXFwiPk11bHRpY2FzdDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS0yXFxcIiBmb3I9XFxcInNhY25UcmFuc21pdHRlckRlbGF5XFxcIj5zQUNOIFVuaWNhc3QgVGFyZ2V0czo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0Zvcj1cXFwibGV0IHRhcmdldCBvZiBzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIudW5pY2FzdDsgbGV0IGlkeCA9IGluZGV4XFxcIiBpZD1cXFwidW5pY2FzdFxcXCIgbmFtZT1cXFwidW5pY2FzdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IHRhcmdldE5hbWUuZXJyb3JzICYmIHRhcmdldE5hbWUudG91Y2hlZH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGNvbC1zbS04XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3RbaWR4XS50YXJnZXRcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3RhcmdldE5hbWU9XFxcIm5nTW9kZWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwidGFyZ2V0TmFtZS5lcnJvcnMgJiYgdGFyZ2V0TmFtZS50b3VjaGVkXFxcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlVGFyZ2V0KGlkeClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgY2xlYXJmaXhcXFwiIChjbGljayk9XFxcImFkZFRhcmdldCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+IEFkZCBUYXJnZXQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIiBbZGlzYWJsZWRdPVxcXCIhc2V0dGluZ3NGb3JtLnZhbGlkIHx8ICF2YWxpZGF0ZVRhcmdldHMoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEdyb3Vwc1NlcnZpY2UgfSBmcm9tIFwiLi9ncm91cHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL2dyb3VwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JvdXBzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2dyb3Vwcy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbR3JvdXBzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyb3Vwc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG5cclxuICAgIHNhdmluZzogYm9vbGVhbjtcclxuICAgIGdyb3VwczogR3JvdXBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyb3Vwc1NlcnZpY2U6IEdyb3Vwc1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdyb3Vwc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogR3JvdXBbXSkgPT4gdGhpcy5ncm91cHMgPSB2YWx1ZSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMucHVzaChuZXcgR3JvdXAoXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlKGdyb3VwOiBHcm91cCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZShncm91cDogR3JvdXAsIG9mZnNldDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBvbGRfaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuICAgICAgICBsZXQgbmV3X2luZGV4ID0gb2xkX2luZGV4ICsgb2Zmc2V0O1xyXG5cclxuICAgICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UobmV3X2luZGV4LCAwLCB0aGlzLmdyb3Vwcy5zcGxpY2Uob2xkX2luZGV4LCAxKVswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZSgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ3JvdXBzLmV2ZXJ5KCh2YWx1ZTogR3JvdXApID0+IHZhbHVlLm5hbWUgIT0gXCJcIiAmJiB2YWx1ZS5uYW1lICE9IHVuZGVmaW5lZCAmJiB2YWx1ZS5uYW1lICE9IG51bGwpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzYXZlKCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdyb3Vwc1NlcnZpY2UucHV0KHRoaXMuZ3JvdXBzKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgXCJTYXZlZCBzdWNjZXNzZnVsbHlcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKHJlYXNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi9ncm91cFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JvdXBzU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIGdyb3Vwc1VybCA9IFwiL2FwaS9Hcm91cFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCgpOiBQcm9taXNlPEdyb3VwW10+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ncm91cHNVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiBuZXcgR3JvdXAodmFsdWUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dChncm91cHM6IEdyb3VwW10pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5ncm91cHNVcmwsIGdyb3Vwcy5tYXAoKHZhbHVlOiBHcm91cCkgPT4gdmFsdWUubmFtZSkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuc2VydmljZS50cyIsImV4cG9ydCBjbGFzcyBHcm91cFxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXAudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+R3JvdXBzPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwiZ3JvdXBzXFxcIj5cXHJcXG4gICAgPGZpZWxkc2V0IFtkaXNhYmxlZF09XFxcInNhdmluZ1xcXCI+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZGVyPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZ3JvdXAgb2YgZ3JvdXBzOyBsZXQgaWR4ID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKGNsaWNrKT1cXFwibW92ZShncm91cCwgLTEpXFxcIiBbZGlzYWJsZWRdPVxcXCJpZHggPT0gMFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXBcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIChjbGljayk9XFxcIm1vdmUoZ3JvdXAsIDEpXFxcIiBbZGlzYWJsZWRdPVxcXCJpZHggPT0gZ3JvdXBzLmxlbmd0aCAtIDFcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWRvd25cXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IG5hbWUuZXJyb3JzfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJncm91cC5uYW1lXFxcIiBbbmdNb2RlbE9wdGlvbnNdPVxcXCJ7c3RhbmRhbG9uZTogdHJ1ZX1cXFwiICNuYW1lPVxcXCJuZ01vZGVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJuYW1lLmVycm9ycyAmJiBuYW1lLnRvdWNoZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIG5hbWUgaXMgcmVxdWlyZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZShncm91cClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj4gQWRkPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgW2Rpc2FibGVkXT1cXFwiIXZhbGlkYXRlKClcXFwiIChjbGljayk9XFxcInNhdmUoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24gfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaXh0dXJlLWRlZmluaXRpb25zJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0ZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbnNDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtYXRpb25cIikgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Db21wb25lbnQ7XHJcbiAgICBtYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkOiBib29sZWFuO1xyXG4gICAgbWFudWZhY3R1cmVyRmlsdGVyOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlOiBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10pID0+IHRoaXMuZGF0YSA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IG1hbnVmYWN0dXJlcnMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhXHJcbiAgICAgICAgICAgIC5tYXAoKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiB2YWx1ZS5tYW51ZmFjdHVyZXIpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBmaWx0ZXJlZERhdGEoKTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFudWZhY3R1cmVyRmlsdGVyRW5hYmxlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKCh2YWx1ZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbikgPT4gdmFsdWUubWFudWZhY3R1cmVyID09IHRoaXMubWFudWZhY3R1cmVyRmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlZGl0KGZpeHR1cmU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZGVsZXRlQ29uZmlybShmaXh0dXJlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvbmZpcm1hdGlvbi5zaG93KFxyXG4gICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBmaXh0dXJlIGRlZmluaXRpb24gZm9yIFwiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIiBcIiArIGZpeHR1cmUubW9kZWwgKyBcIj9cIixcclxuICAgICAgICAgICAgXCJEZWxldGVcIixcclxuICAgICAgICAgICAgXCJDYW5jZWxcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiwgRml4dHVyZURlZmluaXRpb24gfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBncm91cHNVcmwgPSBcIi9hcGkvRml4dHVyZURlZmluaXRpb25cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ncm91cHNVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5GaXh0dXJlIERlZmluaXRpb25zPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGZvcm0taW5saW5lXFxcIiAqbmdJZj1cXFwiZGF0YVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFsobmdNb2RlbCldPVxcXCJtYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgIEZpbHRlciBieSBtYW51ZmFjdHVyZXJcXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtkaXNhYmxlZF09XFxcIiFtYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkXFxcIiBbKG5nTW9kZWwpXT1cXFwibWFudWZhY3R1cmVyRmlsdGVyXFxcIj5cXHJcXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgbWFudWZhY3R1cmVyIG9mIG1hbnVmYWN0dXJlcnNcXFwiPnt7bWFudWZhY3R1cmVyfX08L29wdGlvbj5cXHJcXG4gICAgPC9zZWxlY3Q+XFxyXFxuPC9kaXY+XFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIiAqbmdJZj1cXFwiZGF0YVxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+TWFudWZhY3R1cmVyPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+TW9kZWw8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBmaWx0ZXJlZERhdGFcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD57e2VudHJ5Lm1hbnVmYWN0dXJlcn19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3tlbnRyeS5tb2RlbH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcImVkaXQoZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlQ29uZmlybShlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcbjxjb25maXJtYXRpb24gI2NvbmZpcm1hdGlvbj48L2NvbmZpcm1hdGlvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWwge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=