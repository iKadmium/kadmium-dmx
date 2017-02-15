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
	var dashboard_component_1 = __webpack_require__(34);
	var settings_component_1 = __webpack_require__(38);
	var groups_component_1 = __webpack_require__(43);
	var fixture_definitions_component_1 = __webpack_require__(47);
	var fixture_definition_editor_component_1 = __webpack_require__(51);
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
	            fixture_definition_editor_component_1.FixtureDefinitionEditorComponent,
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
	                { path: 'fixture-definitions/new', component: fixture_definition_editor_component_1.FixtureDefinitionEditorComponent },
	                { path: 'fixture-definitions/:manufacturer/:model', component: fixture_definition_editor_component_1.FixtureDefinitionEditorComponent },
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
	        styles: [__webpack_require__(32)]
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

	
	        var result = __webpack_require__(33);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}", ""]);
	
	// exports


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
	var status_panel_component_1 = __webpack_require__(21);
	var message_bar_component_1 = __webpack_require__(26);
	var venue_service_1 = __webpack_require__(35);
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
	        template: __webpack_require__(37),
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
	__webpack_require__(36);
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
/* 36 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Dashboard</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <status-panel #venue name=\"Venue\">\r\n            <div class=\"dropdown\" *ngIf=\"venueNames\">\r\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Load Venue\r\n                <span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li *ngFor=\"let venueName of venueNames\">\r\n                        <a (click)=\"activateVenue(venueName)\">{{venueName}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #sacnTransmitter name=\"sACN Transmitter\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/sacnTransmitterLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #oscListener name=\"OSC Listener\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/oscListenerLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #fixtures name=\"Fixtures\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/fixturesLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n</div>"

/***/ },
/* 38 */
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
	var settings_service_1 = __webpack_require__(39);
	var settings_1 = __webpack_require__(40);
	var $ = __webpack_require__(41);
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
	        template: __webpack_require__(42),
	        providers: [settings_service_1.SettingsService]
	    }),
	    __metadata("design:paramtypes", [settings_service_1.SettingsService])
	], SettingsComponent);
	exports.SettingsComponent = SettingsComponent;


/***/ },
/* 39 */
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
	__webpack_require__(36);
	var settings_1 = __webpack_require__(40);
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
/* 40 */
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
/* 41 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Settings</h1>\r\n</div>\r\n<p *ngIf=\"!settings\">Loading...</p>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"settings\" class=\"form-horizontal\" #settingsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"HTTP Port:\" [inputElement]=\"webPort\">\r\n            <input type=\"number\" name=\"webPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.webPort\" #webPort=\"ngModel\"\r\n            />\r\n            <div class=\"alert alert-danger\" *ngIf=\"webPort.errors\">The port must be between 1 and 65535</div>\r\n        </labelled-input>\r\n        <labelled-input label=\"OSC Port:\" [inputElement]=\"oscPort\">\r\n            <input required type=\"number\" name=\"oscPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.oscPort\" #oscPort=\"ngModel\"\r\n            />\r\n            <div class=\"alert alert-danger\" *ngIf=\"oscPort.errors\">The port must be between 1 and 65535</div>\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\" [inputElement]=\"oscPort\">\r\n            <input type=\"number\" name=\"sacnTransmitterDelay\" class=\"form-control\" min=\"0\" max=\"10000\" [(ngModel)]=\"settings.sacnTransmitter.delay\"\r\n                #sacnTransmitterDelay=\"ngModel\" />\r\n            <div class=\"alert alert-danger\" *ngIf=\"sacnTransmitterDelay.errors\">Delay must be betwene 0 and 10000ms</div>\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\" [inputElement]=\"sacnMulticast\">\r\n            <div class=\"checkbox\">\r\n                <label><input type=\"checkbox\" name=\"sacnMulticast\" [(ngModel)]=\"settings.sacnTransmitter.multicast\" #sacnMulticast=\"ngModel\">Multicast</label>\r\n            </div>\r\n        </labelled-input>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"sacnTransmitterDelay\">sACN Unicast Targets:</label>\r\n            <div class=\"col-sm-10\">\r\n                <div class=\"form-group\" *ngFor=\"let target of settings.sacnTransmitter.unicast; let idx = index\" id=\"unicast\" name=\"unicast\">\r\n                    <div class=\"col-sm-8\" [ngClass]=\"{'has-error': targetName.errors && targetName.touched}\">\r\n                        <input required type=\"text\" class=\"form-control col-sm-8\" [(ngModel)]=\"settings.sacnTransmitter.unicast[idx].target\" [ngModelOptions]=\"{standalone: true}\"\r\n                            #targetName=\"ngModel\" />\r\n                        <div class=\"alert alert-danger\" *ngIf=\"targetName.errors && targetName.touched\">This field is required</div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <button class=\"btn btn-danger\" (click)=\"removeTarget(idx)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn btn-success clearfix\" (click)=\"addTarget()\"><span class=\"glyphicon glyphicon-plus\"></span> Add Target</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!settingsForm.valid || !validateTargets()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },
/* 43 */
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
	var groups_service_1 = __webpack_require__(44);
	var group_1 = __webpack_require__(45);
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
	        template: __webpack_require__(46),
	        providers: [groups_service_1.GroupsService]
	    }),
	    __metadata("design:paramtypes", [groups_service_1.GroupsService])
	], GroupsComponent);
	exports.GroupsComponent = GroupsComponent;


/***/ },
/* 44 */
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
	__webpack_require__(36);
	var group_1 = __webpack_require__(45);
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
/* 45 */
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
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Groups</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"groups\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Order</th>\r\n                    <th>Name</th>\r\n                    <th>Remove</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let group of groups; let idx = index\">\r\n                    <td>\r\n                        <button class=\"btn\" (click)=\"move(group, -1)\" [disabled]=\"idx == 0\"><span class=\"glyphicon glyphicon-arrow-up\"></span></button>\r\n                        <button class=\"btn\" (click)=\"move(group, 1)\" [disabled]=\"idx == groups.length - 1\"><span class=\"glyphicon glyphicon-arrow-down\"></span></button>\r\n                    </td>\r\n                    <td [ngClass]=\"{'has-error': name.errors}\">\r\n                        <input required class=\"form-control\" type=\"text\" [(ngModel)]=\"group.name\" [ngModelOptions]=\"{standalone: true}\" #name=\"ngModel\">\r\n                        <div class=\"alert alert-danger\" *ngIf=\"name.errors && name.touched\">\r\n                            A name is required\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"btn-group\">\r\n                            <button class=\"btn btn-danger\" (click)=\"delete(group)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span> Add</button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" [disabled]=\"!validate()\" (click)=\"save()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },
/* 47 */
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
	var fixture_definitions_service_1 = __webpack_require__(48);
	var FixtureDefinitionsComponent = (function () {
	    function FixtureDefinitionsComponent(fixtureDefinitionsService) {
	        var _this = this;
	        this.fixtureDefinitionsService = fixtureDefinitionsService;
	        this.fixtureDefinitionsService
	            .getSkeletons()
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
	    FixtureDefinitionsComponent.prototype.getEditUrl = function (fixture) {
	        return "fixture-definitions" + "/" + fixture.manufacturer + "/" + fixture.model;
	    };
	    FixtureDefinitionsComponent.prototype.deleteConfirm = function (fixture) {
	        return __awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            var result;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.confirmation.show("Are you sure?", "Are you sure you want to delete the fixture definition for " + fixture.manufacturer + " " + fixture.model + "?", "Delete", "Cancel")];
	                    case 1:
	                        result = _a.sent();
	                        if (result) {
	                            this.fixtureDefinitionsService
	                                .delete(fixture)
	                                .then(function () {
	                                _this.messageBar.add("Success", fixture.manufacturer + " " + fixture.model + " was deleted");
	                                var index = _this.data.indexOf(fixture);
	                                _this.data.splice(index, 1);
	                            })
	                                .catch(function (reason) { return _this.messageBar.add("Error", "Could not delete " + fixture.manufacturer + " " + fixture.model + ". " + reason); });
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
	        template: __webpack_require__(50),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureDefinitionsComponent);
	exports.FixtureDefinitionsComponent = FixtureDefinitionsComponent;


/***/ },
/* 48 */
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
	__webpack_require__(36);
	var fixture_definition_1 = __webpack_require__(49);
	var FixtureDefinitionsService = (function () {
	    function FixtureDefinitionsService(http) {
	        this.http = http;
	        this.fixtureDefinitionsUrl = "/api/FixtureDefinition";
	    }
	    FixtureDefinitionsService.prototype.getSkeletons = function () {
	        return this.http.get(this.fixtureDefinitionsUrl)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data;
	        });
	    };
	    FixtureDefinitionsService.prototype.get = function (manufacturer, model) {
	        return this.http.get(this.fixtureDefinitionsUrl + "/" + manufacturer + "/" + model)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return fixture_definition_1.FixtureDefinition.load(data);
	        });
	    };
	    FixtureDefinitionsService.prototype.delete = function (fixture) {
	        return this.http.delete(this.fixtureDefinitionsUrl + "/" + fixture.manufacturer + "/" + fixture.model)
	            .toPromise()
	            .then(function (response) { });
	    };
	    return FixtureDefinitionsService;
	}());
	FixtureDefinitionsService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], FixtureDefinitionsService);
	exports.FixtureDefinitionsService = FixtureDefinitionsService;


/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	var FixtureDefinition = (function () {
	    function FixtureDefinition() {
	    }
	    FixtureDefinition.load = function (data) {
	        var definition = new FixtureDefinition();
	        Object.assign(definition, data);
	        return definition;
	    };
	    return FixtureDefinition;
	}());
	exports.FixtureDefinition = FixtureDefinition;
	var FixtureDefinitionSkeleton = (function () {
	    function FixtureDefinitionSkeleton() {
	    }
	    return FixtureDefinitionSkeleton;
	}());
	exports.FixtureDefinitionSkeleton = FixtureDefinitionSkeleton;
	var FixtureType;
	(function (FixtureType) {
	    FixtureType[FixtureType["LED"] = 0] = "LED";
	    FixtureType[FixtureType["Tungsten"] = 1] = "Tungsten";
	    FixtureType[FixtureType["Effect"] = 2] = "Effect";
	})(FixtureType = exports.FixtureType || (exports.FixtureType = {}));
	var DMXChannel = (function () {
	    function DMXChannel() {
	    }
	    return DMXChannel;
	}());
	exports.DMXChannel = DMXChannel;
	var Axis = (function () {
	    function Axis() {
	    }
	    return Axis;
	}());
	exports.Axis = Axis;
	var ColorWheelEntry = (function () {
	    function ColorWheelEntry() {
	    }
	    return ColorWheelEntry;
	}());
	exports.ColorWheelEntry = ColorWheelEntry;


/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definitions</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"form-group form-inline\" *ngIf=\"data\">\r\n    <div class=\"checkbox\">\r\n        <label>\r\n            <input type=\"checkbox\" [(ngModel)]=\"manufacturerFilterEnabled\" />\r\n            Filter by manufacturer\r\n        </label>\r\n    </div>\r\n    <select class=\"form-control\" [disabled]=\"!manufacturerFilterEnabled\" [(ngModel)]=\"manufacturerFilter\">\r\n        <option *ngFor=\"let manufacturer of manufacturers\">{{manufacturer}}</option>\r\n    </select>\r\n</div>\r\n<table class=\"table table-striped\" *ngIf=\"data\">\r\n    <thead>\r\n        <tr>\r\n            <th>Manufacturer</th>\r\n            <th>Model</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of filteredData\">\r\n            <td>{{entry.manufacturer}}</td>\r\n            <td>{{entry.model}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<confirmation #confirmation></confirmation>"

/***/ },
/* 51 */
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
	var router_1 = __webpack_require__(7);
	var message_bar_component_1 = __webpack_require__(26);
	var confirmation_component_1 = __webpack_require__(30);
	var fixture_definition_1 = __webpack_require__(49);
	var fixture_definitions_service_1 = __webpack_require__(48);
	var FixtureDefinitionEditorComponent = (function () {
	    function FixtureDefinitionEditorComponent(route, fixtureService) {
	        this.route = route;
	        this.fixtureService = fixtureService;
	        this.allManufacturers = [];
	    }
	    FixtureDefinitionEditorComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.originalManufacturer = this.route.snapshot.params['manufacturer'];
	        this.originalModel = this.route.snapshot.params['model'];
	        if (this.isNewItem()) {
	            this.definition = new fixture_definition_1.FixtureDefinition();
	        }
	        else {
	            this.fixtureService
	                .get(this.originalManufacturer, this.originalModel)
	                .then(function (definition) { return _this.definition = definition; })
	                .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	        }
	        this.fixtureService
	            .getSkeletons()
	            .then(function (value) {
	            _this.allManufacturers = value
	                .map(function (skeleton) { return skeleton.manufacturer; })
	                .filter(function (value, index, array) { return array.indexOf(value) == index; });
	        })
	            .catch(function (reason) { });
	    };
	    FixtureDefinitionEditorComponent.prototype.isNewItem = function () {
	        return this.originalManufacturer == null && this.originalModel == null;
	    };
	    return FixtureDefinitionEditorComponent;
	}());
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], FixtureDefinitionEditorComponent.prototype, "messageBar", void 0);
	__decorate([
	    core_1.ViewChild("confirmation"),
	    __metadata("design:type", confirmation_component_1.ConfirmationComponent)
	], FixtureDefinitionEditorComponent.prototype, "confirmation", void 0);
	FixtureDefinitionEditorComponent = __decorate([
	    core_1.Component({
	        selector: 'fixture-definitions-editor',
	        template: __webpack_require__(52),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureDefinitionEditorComponent);
	exports.FixtureDefinitionEditorComponent = FixtureDefinitionEditorComponent;


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definition Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"definition\" class=\"form-horizontal\">\r\n    <datalist id=\"allManufacturers\">\r\n        <option *ngFor=\"let manufacturer of allManufacturers\">{{manufacturer}}</option>\r\n    </datalist>\r\n    <labelled-input label=\"Manufacturer:\" [inputElement]=\"manufacturer\">\r\n        <input class=\"form-control\" type=\"text\" name=\"manufacturer\" [(ngModel)]=\"definition.manufacturer\" #manufacturer=\"ngModel\"\r\n            list=\"allManufacturers\">\r\n    </labelled-input>\r\n    <labelled-input label=\"Model:\" [inputElement]=\"model\">\r\n        <input class=\"form-control\" type=\"text\" name=\"model\" [(ngModel)]=\"definition.name\" #model=\"ngModel\">\r\n    </labelled-input>\r\n</form>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWNkZjVkMDQwMzY0NGIxMWZhNTIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzcz80ZWFjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3M/YjI5MCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWUvdmVudWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJCO2FBQ2pDLFVBQVUsRUFBRTtpQkFDUixPQUFPLEVBQUUsR0FBRztpQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7aUJBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDeEIsT0FBTyxFQUFFLEtBQUs7aUJBQ2QsNkZBQTZGO2lCQUM3Riw2REFBNkQ7aUJBQzdELFFBQVEsRUFBRSxtRUFBbUU7Y0FDaEY7YUFDRCxhQUFhLEVBQUUsVUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLO2lCQUN0RCw2RUFBNkU7aUJBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2hCLENBQUM7VUFDSixDQUFD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LENBQUM7U0FDL0QsU0FBUyxFQUFFLENBQUMsdURBQXlCLENBQUM7TUFDekMsQ0FBQztzQ0FhNkIsdUJBQWMsRUFBMEIsdURBQXlCO0lBWm5GLGdDQUFnQyxDQWlENUM7QUFqRFksNkVBQWdDOzs7Ozs7O0FDZjdDLHNUQUFxVCxjQUFjLCtoQiIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVjZGY1ZDA0MDM2NDRiMTFmYTUyIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuXG5pbXBvcnQgeyBNSU5NQVhfRElSRUNUSVZFUyB9IGZyb20gJy4vY29tcG9uZW50cy9taW5tYXgvaW5kZXgnO1xuaW1wb3J0IHsgTWF4VmFsdWVWYWxpZGF0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvbWlubWF4L2luZGV4JztcblxuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0YXR1c1BhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7IExhYmVsbGVkSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3Vwc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlL3ZlbnVlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdyb3Vwc1NlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuc2VydmljZVwiO1xuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIEdyb3Vwc0NvbXBvbmVudCxcbiAgICAgICAgRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50LFxuICAgICAgICBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCxcblxuICAgICAgICBNSU5NQVhfRElSRUNUSVZFUyxcblxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBTdGF0dXNQYW5lbENvbXBvbmVudCxcbiAgICAgICAgTWVzc2FnZUJhckNvbXBvbmVudCxcbiAgICAgICAgTGFiZWxsZWRJbnB1dENvbXBvbmVudCxcbiAgICAgICAgQ29uZmlybWF0aW9uQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdkYXNoYm9hcmQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZ3JvdXBzJywgY29tcG9uZW50OiBHcm91cHNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMnLCBjb21wb25lbnQ6IEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZml4dHVyZS1kZWZpbml0aW9ucy9uZXcnLCBjb21wb25lbnQ6IEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdmaXh0dXJlLWRlZmluaXRpb25zLzptYW51ZmFjdHVyZXIvOm1vZGVsJywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnc2V0cycgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGVcbntcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYtbWVudT48L25hdi1tZW51PlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL21heC12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IE1pblZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9taW4tdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1heFZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTUlOTUFYX0RJUkVDVElWRVM6IFthbnldID0gW01pblZhbHVlVmFsaWRhdG9yLCBNYXhWYWx1ZVZhbGlkYXRvcl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9pbmRleC50cyIsImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1JTl9WQUxVRV9WQUxJREFUT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNaW5WYWx1ZVZhbGlkYXRvciksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1ttaW5dW2Zvcm1Db250cm9sTmFtZV0sW21pbl1bZm9ybUNvbnRyb2xdLFttaW5dW25nTW9kZWxdJyxcclxuICAgIHByb3ZpZGVyczogW01JTl9WQUxVRV9WQUxJREFUT1JdLFxyXG4gICAgaG9zdDogeyAnW2F0dHIubWluXSc6ICdtaW4gPyBtaW4gOiAwJyB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWluVmFsdWVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uQ2hhbmdlc1xyXG57XHJcbiAgICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xyXG5cclxuICAgIEBJbnB1dCgpIG1pbjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBAQXR0cmlidXRlKCdtaW4nKSBtbjogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChtbiAhPT0gdW5kZWZpbmVkICYmIG1uICE9PSBudWxsKVxyXG4gICAgICAgIHtcdC8vIGlzUHJlc2VudFxyXG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBwYXJzZUludChtbiwgMTApO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGF0dHJWYWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluID0gbW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1pbkNoYW5nZSA9IGNoYW5nZXNbJ21pbiddO1xyXG4gICAgICAgIGlmIChtaW5DaGFuZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlVmFsaWRhdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBNaW5WYWx1ZVZhbGlkYXRvci5taW4ocGFyc2VJbnQodGhpcy5taW4sIDEwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7IHJldHVybiB0aGlzLl92YWxpZGF0b3IoYyk7IH1cclxuXHJcbiAgICBzdGF0aWMgbWluKG1uOiBudW1iZXIpOiBWYWxpZGF0b3JGblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHYgPSArY29udHJvbC52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICh2IDwgbW4gPyB7ICdtaW4nOiB7ICdtaW5WYWx1ZSc6IG1uLCAnYWN0dWFsVmFsdWUnOiB2IH0gfSA6IG51bGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9taW4tdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFYX1ZBTFVFX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1heFZhbHVlVmFsaWRhdG9yKSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW21heF1bZm9ybUNvbnRyb2xOYW1lXSxbbWluXVtmb3JtQ29udHJvbF0sW21pbl1bbmdNb2RlbF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbTUFYX1ZBTFVFX1ZBTElEQVRPUl0sXHJcbiAgICBob3N0OiB7ICdbYXR0ci5tYXhdJzogJ21heCA/IG1heCA6IDAnIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXhWYWx1ZVZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25DaGFuZ2VzXHJcbntcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XHJcblxyXG4gICAgQElucHV0KCkgbWF4OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIEBBdHRyaWJ1dGUoJ21heCcpIG14OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG14ICE9PSB1bmRlZmluZWQgJiYgbXggIT09IG51bGwpXHJcbiAgICAgICAge1x0Ly8gaXNQcmVzZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHBhcnNlSW50KG14LCAxMCk7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oYXR0clZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXggPSBteDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbWF4Q2hhbmdlID0gY2hhbmdlc1snbWF4J107XHJcbiAgICAgICAgaWYgKG1heENoYW5nZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVWYWxpZGF0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IE1heFZhbHVlVmFsaWRhdG9yLm1heChwYXJzZUludCh0aGlzLm1heCwgMTApKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcihjKTsgfVxyXG5cclxuICAgIHN0YXRpYyBtYXgobXg6IG51bWJlcik6IFZhbGlkYXRvckZuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9ICtjb250cm9sLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gKHYgPiBteCA/IHsgJ21heCc6IHsgJ21heFZhbHVlJzogbXgsICdhY3R1YWxWYWx1ZSc6IHYgfSB9IDogbnVsbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L21heC12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50XG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI215TmF2YmFyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj4gXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiI1xcXCI+S2FkbWl1bSBPU0MgRE1YPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcXFwiIGlkPVxcXCJteU5hdmJhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9kYXNoYm9hcmRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWhvbWVcXFwiPjwvc3Bhbj4gSG9tZTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY29nXFxcIj48L3NwYW4+IFNldHVwXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9zZXR0aW5nc1xcXCI+U2V0dGluZ3M8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48YSByb3V0ZXJMaW5rPVxcXCIvZ3JvdXBzXFxcIj5Hcm91cHM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiL2ZpeHR1cmUtZGVmaW5pdGlvbnNcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0XFxcIj48L3NwYW4+IEZpeHR1cmUgRGVmaW5pdGlvbnM8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L25hdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL3N0YXR1c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0YXR1cy1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdGF0dXMtcGFuZWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXR1c1BhbmVsQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBzdGF0dXM6IFN0YXR1cztcclxuICAgIEBJbnB1dChcIm5hbWVcIikgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IG5ldyBTdGF0dXMoXCJVbmtub3duXCIsIFwiVW5rbm93blwiKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgU3RhdHVzXHJcbntcclxuICAgIHN0YXRpYyBTdGF0dXNUYWJsZTogU3RhdHVzVGFibGUgPSB7XHJcbiAgICAgICAgU3VjY2VzczogeyBhbGVydFN0eWxlOiBcImFsZXJ0LXN1Y2Nlc3NcIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1vay1zaWduXCIgfSxcclxuICAgICAgICBFcnJvcjogeyBhbGVydFN0eWxlOiBcImFsZXJ0LWRhbmdlclwiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLXJlbW92ZS1zaWduXCIgfSxcclxuICAgICAgICBXYXJuaW5nOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtd2FybmluZ1wiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLWluZm8tc2lnblwiIH0sXHJcbiAgICAgICAgVW5rbm93bjogeyBhbGVydFN0eWxlOiBcImFsZXJ0LWluZm9cIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1xdWVzdGlvbi1zaWduXCIgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY29kZTogU3RhdHVzQ29kZTtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29kZTogU3RhdHVzQ29kZSwgbWVzc2FnZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGNvZGU6IFN0YXR1c0NvZGUsIG1lc3NhZ2U6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhbGVydFN0eWxlKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTdGF0dXMuU3RhdHVzVGFibGVbdGhpcy5jb2RlXS5hbGVydFN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZ2x5cGhJY29uKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTdGF0dXMuU3RhdHVzVGFibGVbdGhpcy5jb2RlXS5nbHlwaEljb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0YXR1c0NvZGUgPSBcIlVua25vd25cIiB8IFwiRXJyb3JcIiB8IFwiU3VjY2Vzc1wiIHwgXCJXYXJuaW5nXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1c1RhYmxlXHJcbntcclxuICAgIFtrZXk6IHN0cmluZ106IFN0YXR1c0luZm87XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0dXNJbmZvXHJcbntcclxuICAgIGFsZXJ0U3R5bGU6IHN0cmluZztcclxuICAgIGdseXBoSWNvbjogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdCB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPnt7bmFtZX19IDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiBbbmdDbGFzc109XFxcInN0YXR1cy5hbGVydFN0eWxlXFxcIj5cXHJcXG4gICAgICAgIHt7c3RhdHVzLm1lc3NhZ2V9fTxicj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gc3RhdHVzLWdseXBoXFxcIiBbbmdDbGFzc109XFxcInN0YXR1cy5nbHlwaEljb25cXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGF0dXMtZ2x5cGgge1xcclxcbiAgICBmb250LXNpemU6IDZlbTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXMsIFN0YXR1c0NvZGUgfSBmcm9tIFwiLi4vc3RhdHVzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWVzc2FnZS1iYXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbWVzc2FnZS1iYXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJhckNvbXBvbmVudFxyXG57XHJcbiAgICBwcml2YXRlIG1lc3NhZ2VzOiBTdGF0dXNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlKHN0YXR1czogU3RhdHVzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubWVzc2FnZXMuaW5kZXhPZihzdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHN0YXR1c0NvZGU6IFN0YXR1c0NvZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3IFN0YXR1cyhzdGF0dXNDb2RlLCBtZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0Zvcj1cXFwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCIgW25nQ2xhc3NdPVxcXCJtZXNzYWdlLmFsZXJ0U3R5bGVcXFwiPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcImNsb3NlXFxcIiAoY2xpY2spPVxcXCJyZW1vdmUobWVzc2FnZSlcXFwiIGFyaWEtbGFiZWw9XFxcImNsb3NlXFxcIj4mdGltZXM7PC9hPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvblxcXCIgW25nQ2xhc3NdPVxcXCJtZXNzYWdlLmdseXBoSWNvblxcXCI+PC9zcGFuPiB7e21lc3NhZ2UubWVzc2FnZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsYWJlbGxlZC1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbGxlZElucHV0Q29tcG9uZW50XHJcbntcclxuICAgIEBJbnB1dCgpIHByaXZhdGUgbGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHByaXZhdGUgaW5wdXRFbGVtZW50OiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IGlucHV0RWxlbWVudC5lcnJvcnN9XFxcIj5cXHJcXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS0yXFxcIiBbYXR0ci5mb3JdPVxcXCJpbnB1dEVsZW1lbnQubmFtZVxcXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb25maXJtYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKFwiLi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1wiKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwiY29uZmlybWF0aW9uXCIpIGNvbmZpcm1hdGlvbjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBoZWFkZXI6IHN0cmluZztcclxuICAgIGJvZHk6IHN0cmluZztcclxuICAgIGFjY2VwdFZlcmI6IHN0cmluZztcclxuICAgIGNhbmNlbFZlcmI6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB2aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHJlc29sdmU6ICh2YWx1ZT86IGJvb2xlYW4gfCBQcm9taXNlTGlrZTxib29sZWFuPikgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcilcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coaGVhZGVyOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgYWNjZXB0VmVyYjogc3RyaW5nLCBjYW5jZWxWZXJiOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICAgICAgICB0aGlzLmFjY2VwdFZlcmIgPSBhY2NlcHRWZXJiO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsVmVyYiA9IGNhbmNlbFZlcmI7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGVBbmltYXRlID0gdHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGUgPSBmYWxzZSwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0Q2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsQ2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgI2NvbmZpcm1hdGlvbiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBbbmdDbGFzc109XFxcInsnaW4nOiB2aXNpYmxlQW5pbWF0ZX1cXFwiIFtuZ1N0eWxlXT1cXFwieydkaXNwbGF5JzogdmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScsICdvcGFjaXR5JzogdmlzaWJsZUFuaW1hdGUgPyAxIDogMH1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcbiAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxDbGljaygpXFxcIj4mdGltZXM7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPnt7aGVhZGVyfX08L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD57e2JvZHl9fTwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiYWNjZXB0Q2xpY2soKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+e3thY2NlcHRWZXJifX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcImNhbmNlbENsaWNrKClcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPnt7Y2FuY2VsVmVyYn19PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1c1BhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZlbnVlU2VydmljZSB9IGZyb20gXCIuLi92ZW51ZS92ZW51ZS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNDb2RlIH0gZnJvbSBcIi4uL3N0YXR1cy9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtWZW51ZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJ2ZW51ZVwiKSB2ZW51ZTogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwic2FjblRyYW5zbWl0dGVyXCIpIHNhY25UcmFuc21pdHRlcjogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwib3NjTGlzdGVuZXJcIikgb3NjTGlzdGVuZXI6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImZpeHR1cmVzXCIpIGZpeHR1cmVzOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIHdlYlNvY2tldDogV2ViU29ja2V0O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNvY2tldFVSTCA9IGdldFNvY2tldFVSTChcIkluZGV4XCIpO1xyXG4gICAgcHJpdmF0ZSB2ZW51ZU5hbWVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZlbnVlU2VydmljZTogVmVudWVTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHZlbnVlU2VydmljZS5nZXROYW1lcygpXHJcbiAgICAgICAgICAgIC50aGVuKG5hbWVzID0+IHRoaXMudmVudWVOYW1lcyA9IG5hbWVzKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KERhc2hib2FyZENvbXBvbmVudC5zb2NrZXRVUkwpO1xyXG4gICAgICAgIHRoaXMud2ViU29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldjogTWVzc2FnZUV2ZW50KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IEpTT04ucGFyc2UoZXYuZGF0YSkgYXMgU3RhdHVzRGF0YTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1c1BhbmVsOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMuY29udHJvbGxlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlZlbnVlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy52ZW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTQUNOVHJhbnNtaXR0ZXJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLnNhY25UcmFuc21pdHRlcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJPU0NMaXN0ZW5lcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMub3NjTGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGaXh0dXJlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy5maXh0dXJlc1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXR1c1BhbmVsLnN0YXR1cy51cGRhdGUoc3RhdHVzLmNvZGUsIHN0YXR1cy5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZVZlbnVlKHZlbnVlTmFtZTogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmVudWVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5hY3RpdmF0ZSh2ZW51ZU5hbWUpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIHZlbnVlTmFtZSArIFwiIHN1Y2Nlc3NmdWxseSBsb2FkZWRcIikpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0dXNEYXRhXHJcbntcclxuICAgIGNvZGU6IFN0YXR1c0NvZGU7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBjb250cm9sbGVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNvY2tldFVSTChjb250cm9sbGVyOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFjdGlvblVSTCA9IGdldEFjdGlvblVSTChjb250cm9sbGVyLCBcIlNvY2tldFwiKTtcclxuICAgIGxldCBzb2NrZXRVUkwgPSBhY3Rpb25VUkwucmVwbGFjZShcImh0dHBcIiwgXCJ3c1wiKTtcclxuICAgIHJldHVybiBzb2NrZXRVUkw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFjdGlvblVSTCguLi5wYXJ0czogc3RyaW5nW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IG9yaWdpbmFsVVJMOiBzdHJpbmcgPSBkb2N1bWVudC5VUkw7XHJcbiAgICBsZXQgdXJsUGFydHM6IHN0cmluZ1tdID0gZG9jdW1lbnQuVVJMLnNwbGl0KFwiL1wiKTtcclxuICAgIGxldCBwcm90b2NvbDogc3RyaW5nID0gdXJsUGFydHNbMF07XHJcbiAgICBsZXQgaG9zdDogc3RyaW5nID0gdXJsUGFydHNbMl07XHJcblxyXG4gICAgbGV0IHJvb3Q6IHN0cmluZyA9IHByb3RvY29sICsgXCIvL1wiICsgaG9zdDtcclxuXHJcbiAgICBsZXQgcGFydHNKb2luZWQgPSBwYXJ0cy5qb2luKFwiL1wiKTtcclxuXHJcbiAgICByZXR1cm4gcm9vdCArIFwiL1wiICsgcGFydHNKb2luZWQ7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgVmVudWUgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmVudWVTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgdmVudWVVcmwgPSBcIi9hcGkvVmVudWVcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8VmVudWU+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgVmVudWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lcygpOiBQcm9taXNlPHN0cmluZ1tdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwgKyBcIi9hY3RpdmF0ZS9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZS92ZW51ZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI3ZlbnVlIG5hbWU9XFxcIlZlbnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgKm5nSWY9XFxcInZlbnVlTmFtZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+TG9hZCBWZW51ZVxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB2ZW51ZU5hbWUgb2YgdmVudWVOYW1lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiYWN0aXZhdGVWZW51ZSh2ZW51ZU5hbWUpXFxcIj57e3ZlbnVlTmFtZX19PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjc2FjblRyYW5zbWl0dGVyIG5hbWU9XFxcInNBQ04gVHJhbnNtaXR0ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9zYWNuVHJhbnNtaXR0ZXJMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICNvc2NMaXN0ZW5lciBuYW1lPVxcXCJPU0MgTGlzdGVuZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9vc2NMaXN0ZW5lckxpdmVcXFwiPkxpdmU8L2E+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI2ZpeHR1cmVzIG5hbWU9XFxcIkZpeHR1cmVzXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvZml4dHVyZXNMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXR0aW5ncy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzLCBVbmljYXN0VGFyZ2V0IH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcblxyXG52YXIgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1NldHRpbmdzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3M7XHJcbiAgICBzYXZpbmc6IGJvb2xlYW47XHJcbiAgICB0ZXN0RWxlbWVudDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3NTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50ZXN0RWxlbWVudCA9IFwic3R1ZmZcIjtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTZXJ2aWNlLmdldCgpLnRoZW4oZGF0YSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dGluZ3NTZXJ2aWNlLnNhdmUodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIFwiU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAocmVhc29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUYXJnZXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3QucHVzaChuZXcgVW5pY2FzdFRhcmdldChcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVRhcmdldChpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVUYXJnZXRzKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgYmFkVGFyZ2V0cyA9IHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3QuZmlsdGVyKCh2YWx1ZTogVW5pY2FzdFRhcmdldCkgPT4gdmFsdWUudGFyZ2V0ID09IFwiXCIgfHwgdmFsdWUudGFyZ2V0ID09IHVuZGVmaW5lZCB8fCB2YWx1ZS50YXJnZXQgPT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIGJhZFRhcmdldHMubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5ncywgU2V0dGluZ3NEYXRhIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHNldHRpbmdzVXJsID0gXCIvYXBpL1NldHRpbmdzXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8U2V0dGluZ3M+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXR0aW5nc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBTZXR0aW5nc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzLmRlc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoZGF0YTogU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2V0dGluZ3NVcmwsIGRhdGEuc2VyaWFsaXplKCkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4gXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7IC8vIGZvciBkZW1vIHB1cnBvc2VzIG9ubHlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsImV4cG9ydCBjbGFzcyBTZXR0aW5nc1xyXG57XHJcbiAgICB3ZWJQb3J0OiBudW1iZXI7XHJcbiAgICBvc2NQb3J0OiBudW1iZXI7XHJcbiAgICBzYWNuVHJhbnNtaXR0ZXI6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLndlYlBvcnQgPSA4MDtcclxuICAgICAgICB0aGlzLm9zY1BvcnQgPSA5MDAwO1xyXG4gICAgICAgIHRoaXMuc2FjblRyYW5zbWl0dGVyID0gbmV3IFNBQ05UcmFuc21pdHRlclNldHRpbmdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZShkYXRhOiBTZXR0aW5nc0RhdGEpOiBTZXR0aW5nc1xyXG4gICAge1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpO1xyXG4gICAgICAgIHNldHRpbmdzLndlYlBvcnQgPSBkYXRhLndlYlBvcnQ7XHJcbiAgICAgICAgc2V0dGluZ3Mub3NjUG9ydCA9IGRhdGEub3NjUG9ydDtcclxuICAgICAgICBzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIgPSBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncy5kZXNlcmlhbGl6ZShkYXRhLnNhY25UcmFuc21pdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogU2V0dGluZ3NEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFNldHRpbmdzRGF0YSA9IHtcclxuICAgICAgICAgICAgd2ViUG9ydDogdGhpcy53ZWJQb3J0LFxyXG4gICAgICAgICAgICBvc2NQb3J0OiB0aGlzLm9zY1BvcnQsXHJcbiAgICAgICAgICAgIHNhY25UcmFuc21pdHRlcjogdGhpcy5zYWNuVHJhbnNtaXR0ZXIuc2VyaWFsaXplKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3Ncclxue1xyXG4gICAgZGVsYXk6IG51bWJlcjtcclxuICAgIG11bHRpY2FzdDogYm9vbGVhbjtcclxuICAgIHVuaWNhc3Q6IFVuaWNhc3RUYXJnZXRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IDA7XHJcbiAgICAgICAgdGhpcy5tdWx0aWNhc3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudW5pY2FzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemUoZGF0YTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhKTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NcclxuICAgIHtcclxuICAgICAgICBsZXQgdHJhbnNtaXR0ZXIgPSBuZXcgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3MoKTtcclxuICAgICAgICB0cmFuc21pdHRlci5kZWxheSA9IGRhdGEuZGVsYXk7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIubXVsdGljYXN0ID0gZGF0YS5tdWx0aWNhc3Q7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIudW5pY2FzdCA9IGRhdGEudW5pY2FzdC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IG5ldyBVbmljYXN0VGFyZ2V0KHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbWl0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YSA9IHtcclxuICAgICAgICAgICAgZGVsYXk6IHRoaXMuZGVsYXksXHJcbiAgICAgICAgICAgIG11bHRpY2FzdDogdGhpcy5tdWx0aWNhc3QsXHJcbiAgICAgICAgICAgIHVuaWNhc3Q6IHRoaXMudW5pY2FzdC5tYXAoKHZhbHVlOiBVbmljYXN0VGFyZ2V0KSA9PiB2YWx1ZS50YXJnZXQpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVuaWNhc3RUYXJnZXRcclxue1xyXG4gICAgdGFyZ2V0OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0RhdGFcclxue1xyXG4gICAgd2ViUG9ydDogbnVtYmVyO1xyXG4gICAgb3NjUG9ydDogbnVtYmVyO1xyXG4gICAgc2FjblRyYW5zbWl0dGVyOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhXHJcbntcclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICBtdWx0aWNhc3Q6IGJvb2xlYW47XHJcbiAgICB1bmljYXN0OiBzdHJpbmdbXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpxdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+U2V0dGluZ3M8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxwICpuZ0lmPVxcXCIhc2V0dGluZ3NcXFwiPkxvYWRpbmcuLi48L3A+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGZvcm0gKm5nSWY9XFxcInNldHRpbmdzXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAjc2V0dGluZ3NGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiSFRUUCBQb3J0OlxcXCIgW2lucHV0RWxlbWVudF09XFxcIndlYlBvcnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcIndlYlBvcnRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI2NTUzNVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLndlYlBvcnRcXFwiICN3ZWJQb3J0PVxcXCJuZ01vZGVsXFxcIlxcclxcbiAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwid2ViUG9ydC5lcnJvcnNcXFwiPlRoZSBwb3J0IG11c3QgYmUgYmV0d2VlbiAxIGFuZCA2NTUzNTwvZGl2PlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiT1NDIFBvcnQ6XFxcIiBbaW5wdXRFbGVtZW50XT1cXFwib3NjUG9ydFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwib3NjUG9ydFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjY1NTM1XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Mub3NjUG9ydFxcXCIgI29zY1BvcnQ9XFxcIm5nTW9kZWxcXFwiXFxyXFxuICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJvc2NQb3J0LmVycm9yc1xcXCI+VGhlIHBvcnQgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDY1NTM1PC9kaXY+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJzQUNOIFRyYW5zbWl0dGVyIERlbGF5IChtcyk6XFxcIiBbaW5wdXRFbGVtZW50XT1cXFwib3NjUG9ydFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwic2FjblRyYW5zbWl0dGVyRGVsYXlcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMDAwMFxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLnNhY25UcmFuc21pdHRlci5kZWxheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgI3NhY25UcmFuc21pdHRlckRlbGF5PVxcXCJuZ01vZGVsXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcInNhY25UcmFuc21pdHRlckRlbGF5LmVycm9yc1xcXCI+RGVsYXkgbXVzdCBiZSBiZXR3ZW5lIDAgYW5kIDEwMDAwbXM8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcInNBQ04gVHJhbnNtaXR0ZXIgRGVsYXkgKG1zKTpcXFwiIFtpbnB1dEVsZW1lbnRdPVxcXCJzYWNuTXVsdGljYXN0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInNhY25NdWx0aWNhc3RcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIubXVsdGljYXN0XFxcIiAjc2Fjbk11bHRpY2FzdD1cXFwibmdNb2RlbFxcXCI+TXVsdGljYXN0PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTJcXFwiIGZvcj1cXFwic2FjblRyYW5zbWl0dGVyRGVsYXlcXFwiPnNBQ04gVW5pY2FzdCBUYXJnZXRzOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nRm9yPVxcXCJsZXQgdGFyZ2V0IG9mIHNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0OyBsZXQgaWR4ID0gaW5kZXhcXFwiIGlkPVxcXCJ1bmljYXN0XFxcIiBuYW1lPVxcXCJ1bmljYXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIiBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzogdGFyZ2V0TmFtZS5lcnJvcnMgJiYgdGFyZ2V0TmFtZS50b3VjaGVkfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgY29sLXNtLThcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIudW5pY2FzdFtpZHhdLnRhcmdldFxcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGFyZ2V0TmFtZT1cXFwibmdNb2RlbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJ0YXJnZXROYW1lLmVycm9ycyAmJiB0YXJnZXROYW1lLnRvdWNoZWRcXFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVUYXJnZXQoaWR4KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBjbGVhcmZpeFxcXCIgKGNsaWNrKT1cXFwiYWRkVGFyZ2V0KClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj4gQWRkIFRhcmdldDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJzYXZlKClcXFwiIFtkaXNhYmxlZF09XFxcIiFzZXR0aW5nc0Zvcm0udmFsaWQgfHwgIXZhbGlkYXRlVGFyZ2V0cygpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgR3JvdXBzU2VydmljZSB9IGZyb20gXCIuL2dyb3Vwcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4vZ3JvdXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncm91cHMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3JvdXBzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtHcm91cHNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcblxyXG4gICAgc2F2aW5nOiBib29sZWFuO1xyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvdXBzU2VydmljZTogR3JvdXBzU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBHcm91cFtdKSA9PiB0aGlzLmdyb3VwcyA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKG5ldyBHcm91cChcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGUoZ3JvdXA6IEdyb3VwKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlKGdyb3VwOiBHcm91cCwgb2Zmc2V0OiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9sZF9pbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xyXG4gICAgICAgIGxldCBuZXdfaW5kZXggPSBvbGRfaW5kZXggKyBvZmZzZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShuZXdfaW5kZXgsIDAsIHRoaXMuZ3JvdXBzLnNwbGljZShvbGRfaW5kZXgsIDEpWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5ncm91cHMuZXZlcnkoKHZhbHVlOiBHcm91cCkgPT4gdmFsdWUubmFtZSAhPSBcIlwiICYmIHZhbHVlLm5hbWUgIT0gdW5kZWZpbmVkICYmIHZhbHVlLm5hbWUgIT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ3JvdXBzU2VydmljZS5wdXQodGhpcy5ncm91cHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBcIlNhdmVkIHN1Y2Nlc3NmdWxseVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAocmVhc29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL2dyb3VwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm91cHNTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgZ3JvdXBzVXJsID0gXCIvYXBpL0dyb3VwXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8R3JvdXBbXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdyb3Vwc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBzdHJpbmdbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IG5ldyBHcm91cCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KGdyb3VwczogR3JvdXBbXSk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmdyb3Vwc1VybCwgZ3JvdXBzLm1hcCgodmFsdWU6IEdyb3VwKSA9PiB2YWx1ZS5uYW1lKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIEdyb3VwXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5Hcm91cHM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJncm91cHNcXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JkZXI8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBncm91cCBvZiBncm91cHM7IGxldCBpZHggPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAoY2xpY2spPVxcXCJtb3ZlKGdyb3VwLCAtMSlcXFwiIFtkaXNhYmxlZF09XFxcImlkeCA9PSAwXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy11cFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKGNsaWNrKT1cXFwibW92ZShncm91cCwgMSlcXFwiIFtkaXNhYmxlZF09XFxcImlkeCA9PSBncm91cHMubGVuZ3RoIC0gMVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93blxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzogbmFtZS5lcnJvcnN9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImdyb3VwLm5hbWVcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCIgI25hbWU9XFxcIm5nTW9kZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm5hbWUuZXJyb3JzICYmIG5hbWUudG91Y2hlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgbmFtZSBpcyByZXF1aXJlZFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKGdyb3VwKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPiBBZGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBbZGlzYWJsZWRdPVxcXCIhdmFsaWRhdGUoKVxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuLi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbRml4dHVyZURlZmluaXRpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImNvbmZpcm1hdGlvblwiKSBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbkNvbXBvbmVudDtcclxuICAgIG1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBtYW51ZmFjdHVyZXJGaWx0ZXI6IHN0cmluZztcclxuICAgIGRhdGE6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2U6IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRTa2VsZXRvbnMoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSkgPT4gdGhpcy5kYXRhID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgbWFudWZhY3R1cmVycygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFcclxuICAgICAgICAgICAgLm1hcCgodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pID0+IHZhbHVlLm1hbnVmYWN0dXJlcilcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGZpbHRlcmVkRGF0YSgpOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW11cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5tYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWx0ZXIoKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiB2YWx1ZS5tYW51ZmFjdHVyZXIgPT0gdGhpcy5tYW51ZmFjdHVyZXJGaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVkaXRVcmwoZml4dHVyZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbik6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcImZpeHR1cmUtZGVmaW5pdGlvbnNcIiArIFwiL1wiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIi9cIiArIGZpeHR1cmUubW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBkZWxldGVDb25maXJtKGZpeHR1cmU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29uZmlybWF0aW9uLnNob3coXHJcbiAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIGZpeHR1cmUgZGVmaW5pdGlvbiBmb3IgXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiIFwiICsgZml4dHVyZS5tb2RlbCArIFwiP1wiLFxyXG4gICAgICAgICAgICBcIkRlbGV0ZVwiLFxyXG4gICAgICAgICAgICBcIkNhbmNlbFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5maXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAuZGVsZXRlKGZpeHR1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIgXCIgKyBmaXh0dXJlLm1vZGVsICsgXCIgd2FzIGRlbGV0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kYXRhLmluZGV4T2YoZml4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgXCJDb3VsZCBub3QgZGVsZXRlIFwiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIiBcIiArIGZpeHR1cmUubW9kZWwgKyBcIi4gXCIgKyByZWFzb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uLCBGaXh0dXJlRGVmaW5pdGlvbiwgRml4dHVyZURlZmluaXRpb25EYXRhIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgZml4dHVyZURlZmluaXRpb25zVXJsID0gXCIvYXBpL0ZpeHR1cmVEZWZpbml0aW9uXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2tlbGV0b25zKCk6IFByb21pc2U8Rml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChtYW51ZmFjdHVyZXI6IHN0cmluZywgbW9kZWw6IHN0cmluZyk6IFByb21pc2U8Rml4dHVyZURlZmluaXRpb24+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5maXh0dXJlRGVmaW5pdGlvbnNVcmwgKyBcIi9cIiArIG1hbnVmYWN0dXJlciArIFwiL1wiICsgbW9kZWwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgRml4dHVyZURlZmluaXRpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGaXh0dXJlRGVmaW5pdGlvbi5sb2FkKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGZpeHR1cmU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5maXh0dXJlRGVmaW5pdGlvbnNVcmwgKyBcIi9cIiArIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIvXCIgKyBmaXh0dXJlLm1vZGVsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZS50cyIsImV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbiBpbXBsZW1lbnRzIEZpeHR1cmVEZWZpbml0aW9uRGF0YVxyXG57XHJcbiAgICBtYW51ZmFjdHVyZXI6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHR5cGU6IEZpeHR1cmVUeXBlO1xyXG5cclxuICAgIGNoYW5uZWxzOiBETVhDaGFubmVsW107XHJcbiAgICBtb3ZlbWVudHM6IEF4aXNbXTtcclxuICAgIGNvbG9yV2hlZWw6IENvbG9yV2hlZWxFbnRyeVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQoZGF0YTogRml4dHVyZURlZmluaXRpb25EYXRhKTogRml4dHVyZURlZmluaXRpb25cclxuICAgIHtcclxuICAgICAgICBsZXQgZGVmaW5pdGlvbiA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmaW5pdGlvbiwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRml4dHVyZURlZmluaXRpb25EYXRhXHJcbntcclxuICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogRml4dHVyZVR5cGU7XHJcblxyXG4gICAgY2hhbm5lbHM6IERNWENoYW5uZWxbXTtcclxuICAgIG1vdmVtZW50czogQXhpc1tdO1xyXG4gICAgY29sb3JXaGVlbDogQ29sb3JXaGVlbEVudHJ5W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uXHJcbntcclxuICAgIHB1YmxpYyBtYW51ZmFjdHVyZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBtb2RlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBGaXh0dXJlVHlwZVxyXG57XHJcbiAgICBMRUQsXHJcbiAgICBUdW5nc3RlbixcclxuICAgIEVmZmVjdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRE1YQ2hhbm5lbFxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkbXg6IG51bWJlcjtcclxuICAgIG1pbjogbnVtYmVyO1xyXG4gICAgbWF4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBeGlzXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG1pbjogbnVtYmVyO1xyXG4gICAgbWF4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvcldoZWVsRW50cnlcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZG14U3RhcnQ6IG51bWJlcjtcclxuICAgIGRteEVuZDogbnVtYmVyO1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5GaXh0dXJlIERlZmluaXRpb25zPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGZvcm0taW5saW5lXFxcIiAqbmdJZj1cXFwiZGF0YVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFsobmdNb2RlbCldPVxcXCJtYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgIEZpbHRlciBieSBtYW51ZmFjdHVyZXJcXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtkaXNhYmxlZF09XFxcIiFtYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkXFxcIiBbKG5nTW9kZWwpXT1cXFwibWFudWZhY3R1cmVyRmlsdGVyXFxcIj5cXHJcXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgbWFudWZhY3R1cmVyIG9mIG1hbnVmYWN0dXJlcnNcXFwiPnt7bWFudWZhY3R1cmVyfX08L29wdGlvbj5cXHJcXG4gICAgPC9zZWxlY3Q+XFxyXFxuPC9kaXY+XFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIiAqbmdJZj1cXFwiZGF0YVxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+TWFudWZhY3R1cmVyPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+TW9kZWw8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBmaWx0ZXJlZERhdGFcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD57e2VudHJ5Lm1hbnVmYWN0dXJlcn19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3tlbnRyeS5tb2RlbH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbaHJlZl09XFxcImdldEVkaXRVcmwoZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZUNvbmZpcm0oZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG48Y29uZmlybWF0aW9uICNjb25maXJtYXRpb24+PC9jb25maXJtYXRpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbiwgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMtZWRpdG9yJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0ZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImNvbmZpcm1hdGlvblwiKSBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbkNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIG9yaWdpbmFsTWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG9yaWdpbmFsTW9kZWw6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGFsbE1hbnVmYWN0dXJlcnM6IHN0cmluZ1tdO1xyXG5cclxuICAgIHByaXZhdGUgZGVmaW5pdGlvbjogRml4dHVyZURlZmluaXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgZml4dHVyZVNlcnZpY2U6IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hbGxNYW51ZmFjdHVyZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXIgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snbWFudWZhY3R1cmVyJ107XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbE1vZGVsID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ21vZGVsJ107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTmV3SXRlbSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZml4dHVyZVNlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5nZXQodGhpcy5vcmlnaW5hbE1hbnVmYWN0dXJlciwgdGhpcy5vcmlnaW5hbE1vZGVsKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGVmaW5pdGlvbiA9PiB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpeHR1cmVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRTa2VsZXRvbnMoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSkgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsTWFudWZhY3R1cmVycyA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc2tlbGV0b246IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pID0+IHNrZWxldG9uLm1hbnVmYWN0dXJlcilcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGFycmF5LmluZGV4T2YodmFsdWUpID09IGluZGV4KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05ld0l0ZW0oKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsTWFudWZhY3R1cmVyID09IG51bGwgJiYgdGhpcy5vcmlnaW5hbE1vZGVsID09IG51bGw7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5GaXh0dXJlIERlZmluaXRpb24gRWRpdG9yPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwiZGVmaW5pdGlvblxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgIDxkYXRhbGlzdCBpZD1cXFwiYWxsTWFudWZhY3R1cmVyc1xcXCI+XFxyXFxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1hbnVmYWN0dXJlciBvZiBhbGxNYW51ZmFjdHVyZXJzXFxcIj57e21hbnVmYWN0dXJlcn19PC9vcHRpb24+XFxyXFxuICAgIDwvZGF0YWxpc3Q+XFxyXFxuICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTWFudWZhY3R1cmVyOlxcXCIgW2lucHV0RWxlbWVudF09XFxcIm1hbnVmYWN0dXJlclxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibWFudWZhY3R1cmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVmaW5pdGlvbi5tYW51ZmFjdHVyZXJcXFwiICNtYW51ZmFjdHVyZXI9XFxcIm5nTW9kZWxcXFwiXFxyXFxuICAgICAgICAgICAgbGlzdD1cXFwiYWxsTWFudWZhY3R1cmVyc1xcXCI+XFxyXFxuICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTW9kZWw6XFxcIiBbaW5wdXRFbGVtZW50XT1cXFwibW9kZWxcXFwiPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm1vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVmaW5pdGlvbi5uYW1lXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiPlxcclxcbiAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==