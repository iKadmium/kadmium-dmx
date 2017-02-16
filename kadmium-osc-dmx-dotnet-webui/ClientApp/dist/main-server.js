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
	var unique_directive_1 = __webpack_require__(17);
	var navmenu_component_1 = __webpack_require__(18);
	var status_panel_component_1 = __webpack_require__(22);
	var message_bar_component_1 = __webpack_require__(27);
	var labelled_input_component_1 = __webpack_require__(29);
	var table_input_component_1 = __webpack_require__(31);
	var confirmation_component_1 = __webpack_require__(33);
	var dashboard_component_1 = __webpack_require__(37);
	var settings_component_1 = __webpack_require__(41);
	var groups_component_1 = __webpack_require__(46);
	var fixture_definitions_component_1 = __webpack_require__(50);
	var fixture_definition_editor_component_1 = __webpack_require__(54);
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
	            unique_directive_1.UniqueValidator,
	            navmenu_component_1.NavMenuComponent,
	            status_panel_component_1.StatusPanelComponent,
	            message_bar_component_1.MessageBarComponent,
	            labelled_input_component_1.LabelledInputComponent,
	            table_input_component_1.TableInputComponent,
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
	var forms_1 = __webpack_require__(6);
	var UniqueValidator = UniqueValidator_1 = (function () {
	    function UniqueValidator() {
	    }
	    UniqueValidator.prototype.validate = function (c) {
	        if (this.unique == null) {
	            return null;
	        }
	        var matches = this.unique.filter(function (value) { return c.value === value; });
	        if (c.dirty && matches.length > 0) {
	            return { unique: { valid: false } };
	        }
	    };
	    return UniqueValidator;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Array)
	], UniqueValidator.prototype, "unique", void 0);
	UniqueValidator = UniqueValidator_1 = __decorate([
	    core_1.Directive({
	        selector: '[unique][ngModel],[unique][formControl]',
	        providers: [
	            { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return UniqueValidator_1; }), multi: true }
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], UniqueValidator);
	exports.UniqueValidator = UniqueValidator;
	var UniqueValidator_1;


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
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(19),
	        styles: [__webpack_require__(20)]
	    }),
	    __metadata("design:paramtypes", [])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span> \r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Kadmium OSC DMX</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/dashboard\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                        <span class=\"glyphicon glyphicon-cog\"></span> Setup\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/settings\">Settings</a></li>\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/groups\">Groups</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/fixture-definitions\"> <span class=\"glyphicon glyphicon-th-list\"></span> Fixture Definitions</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(21);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 22 */
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
	var status_1 = __webpack_require__(23);
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
	        template: __webpack_require__(24),
	        styles: [__webpack_require__(25)]
	    }),
	    __metadata("design:paramtypes", [])
	], StatusPanelComponent);
	exports.StatusPanelComponent = StatusPanelComponent;


/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default text-center\">\r\n    <div class=\"panel-heading\">{{name}} </div>\r\n    <div class=\"panel-body\" [ngClass]=\"status.alertStyle\">\r\n        {{status.message}}<br>\r\n        <span class=\"glyphicon status-glyph\" [ngClass]=\"status.glyphIcon\"></span>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(26);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".status-glyph {\r\n    font-size: 6em;\r\n}", ""]);
	
	// exports


/***/ },
/* 27 */
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
	var status_1 = __webpack_require__(23);
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
	        template: __webpack_require__(28)
	    }),
	    __metadata("design:paramtypes", [])
	], MessageBarComponent);
	exports.MessageBarComponent = MessageBarComponent;


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div *ngFor=\"let message of messages\">\r\n    <div class=\"alert\" [ngClass]=\"message.alertStyle\">\r\n        <a class=\"close\" (click)=\"remove(message)\" aria-label=\"close\">&times;</a>\r\n        <span class=\"glyphicon\" [ngClass]=\"message.glyphIcon\"></span> {{message.message}}\r\n    </div>\r\n</div>"

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
	    core_1.ContentChild("model"),
	    __metadata("design:type", core_1.ElementRef)
	], LabelledInputComponent.prototype, "model", void 0);
	__decorate([
	    core_1.ContentChild("input"),
	    __metadata("design:type", core_1.ElementRef)
	], LabelledInputComponent.prototype, "input", void 0);
	LabelledInputComponent = __decorate([
	    core_1.Component({
	        selector: 'labelled-input',
	        template: __webpack_require__(30)
	    }),
	    __metadata("design:paramtypes", [])
	], LabelledInputComponent);
	exports.LabelledInputComponent = LabelledInputComponent;


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\" [ngClass]=\"{'has-error': model.errors && model.touched}\">\r\n    <label class=\"control-label col-sm-2\" [attr.for]=\"input.name\">{{ label }}</label>\r\n    <div class=\"col-sm-10\">\r\n        <ng-content></ng-content>\r\n        <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.required\">This field is required</div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.min\">This field has a minimum value of {{model.errors?.min.minValue}}</div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.max\">This field has a maximum value of {{model.errors?.max.maxValue}}</div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.dirty && model.errors?.unique\">Entries in this field must be unique</div>\r\n    </div>\r\n</div>"

/***/ },
/* 31 */
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
	var TableInputComponent = (function () {
	    function TableInputComponent() {
	    }
	    return TableInputComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], TableInputComponent.prototype, "label", void 0);
	__decorate([
	    core_1.ContentChild("model"),
	    __metadata("design:type", core_1.ElementRef)
	], TableInputComponent.prototype, "model", void 0);
	__decorate([
	    core_1.ContentChild("input"),
	    __metadata("design:type", core_1.ElementRef)
	], TableInputComponent.prototype, "input", void 0);
	TableInputComponent = __decorate([
	    core_1.Component({
	        selector: 'table-input',
	        template: __webpack_require__(32)
	    }),
	    __metadata("design:paramtypes", [])
	], TableInputComponent);
	exports.TableInputComponent = TableInputComponent;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div [ngClass]=\"{'has-error': model.errors && model.touched && model.dirty}\">\r\n    <ng-content></ng-content>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.required\">This field is required</div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.min\">This field has a minimum value of {{model.errors?.min.minValue}}</div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.max\">This field has a maximum value of {{model.errors?.max.maxValue}}</div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.unique\">Entries in this field must be unique</div>\r\n</div>"

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
	        template: __webpack_require__(34),
	        styles: [__webpack_require__(35)]
	    }),
	    __metadata("design:paramtypes", [core_1.Renderer])
	], ConfirmationComponent);
	exports.ConfirmationComponent = ConfirmationComponent;


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div #confirmation class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"cancelClick()\">&times;</button>\r\n                <h4 class=\"modal-title\">{{header}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>{{body}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"acceptClick()\" data-dismiss=\"modal\">{{acceptVerb}}</button>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelClick()\" data-dismiss=\"modal\">{{cancelVerb}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(36);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}", ""]);
	
	// exports


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
	var status_panel_component_1 = __webpack_require__(22);
	var message_bar_component_1 = __webpack_require__(27);
	var venue_service_1 = __webpack_require__(38);
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
	        template: __webpack_require__(40),
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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(8);
	__webpack_require__(39);
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
/* 39 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Dashboard</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <status-panel #venue name=\"Venue\">\r\n            <div class=\"dropdown\" *ngIf=\"venueNames\">\r\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Load Venue\r\n                <span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li *ngFor=\"let venueName of venueNames\">\r\n                        <a (click)=\"activateVenue(venueName)\">{{venueName}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #sacnTransmitter name=\"sACN Transmitter\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/sacnTransmitterLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #oscListener name=\"OSC Listener\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/oscListenerLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #fixtures name=\"Fixtures\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/fixturesLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n</div>"

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
	var message_bar_component_1 = __webpack_require__(27);
	var settings_service_1 = __webpack_require__(42);
	var settings_1 = __webpack_require__(43);
	var $ = __webpack_require__(44);
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
	        template: __webpack_require__(45),
	        providers: [settings_service_1.SettingsService]
	    }),
	    __metadata("design:paramtypes", [settings_service_1.SettingsService])
	], SettingsComponent);
	exports.SettingsComponent = SettingsComponent;


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
	__webpack_require__(39);
	var settings_1 = __webpack_require__(43);
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
/* 43 */
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
/* 44 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Settings</h1>\r\n</div>\r\n<p *ngIf=\"!settings\">Loading...</p>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"settings\" class=\"form-horizontal\" #settingsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"HTTP Port:\">\r\n            <input #input type=\"number\" name=\"webPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.webPort\" #model=\"ngModel\"\r\n            />\r\n        </labelled-input>\r\n        <labelled-input label=\"OSC Port:\">\r\n            <input #input required type=\"number\" name=\"oscPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.oscPort\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\">\r\n            <input #input type=\"number\" name=\"sacnTransmitterDelay\" class=\"form-control\" min=\"0\" max=\"10000\" [(ngModel)]=\"settings.sacnTransmitter.delay\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\">\r\n            <div class=\"checkbox\">\r\n                <label><input #input type=\"checkbox\" name=\"sacnMulticast\" [(ngModel)]=\"settings.sacnTransmitter.multicast\" #sacnMulticast=\"ngModel\" #model=\"ngModel\" >Multicast</label>\r\n            </div>\r\n        </labelled-input>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"sacnTransmitterDelay\">sACN Unicast Targets:</label>\r\n            <div class=\"col-sm-10\">\r\n                <div class=\"form-group\" *ngFor=\"let target of settings.sacnTransmitter.unicast; let i = index\" id=\"unicast\" name=\"unicast\">\r\n                    <div class=\"col-sm-8\" [ngClass]=\"{'has-error': targetName.errors && targetName.touched}\">\r\n                        <input required type=\"text\" class=\"form-control col-sm-8\" [(ngModel)]=\"settings.sacnTransmitter.unicast[i].target\" [name]=\"'unicast[' + i + ']'\"\r\n                            #targetName=\"ngModel\" />\r\n                        <div class=\"alert alert-danger\" *ngIf=\"targetName.errors && targetName.touched\">This field is required</div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <button class=\"btn btn-danger\" (click)=\"removeTarget(i)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                    </div>\r\n                </div>\r\n                <button class=\"btn btn-success clearfix\" (click)=\"addTarget()\"><span class=\"glyphicon glyphicon-plus\"></span> Add Target</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!settingsForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n</form>"

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
	var message_bar_component_1 = __webpack_require__(27);
	var groups_service_1 = __webpack_require__(47);
	var group_1 = __webpack_require__(48);
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
	    Object.defineProperty(GroupsComponent.prototype, "groupNames", {
	        get: function () {
	            return this.groups.map(function (value) { return value.name; });
	        },
	        enumerable: true,
	        configurable: true
	    });
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
	        template: __webpack_require__(49),
	        providers: [groups_service_1.GroupsService]
	    }),
	    __metadata("design:paramtypes", [groups_service_1.GroupsService])
	], GroupsComponent);
	exports.GroupsComponent = GroupsComponent;


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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(8);
	__webpack_require__(39);
	var group_1 = __webpack_require__(48);
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
/* 48 */
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
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Groups</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"groups\" #groupsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Order</th>\r\n                    <th>Name</th>\r\n                    <th>Remove</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let group of groups; let i = index\">\r\n                    <td>\r\n                        <button class=\"btn\" (click)=\"move(group, -1)\" [disabled]=\"i == 0\"><span class=\"glyphicon glyphicon-arrow-up\"></span></button>\r\n                        <button class=\"btn\" (click)=\"move(group, 1)\" [disabled]=\"i == groups.length - 1\"><span class=\"glyphicon glyphicon-arrow-down\"></span></button>\r\n                    </td>\r\n                    <td>\r\n                        <table-input>\r\n                            <input required [unique]=\"groupNames\" #input #model=\"ngModel\" class=\"form-control\" type=\"text\" [(ngModel)]=\"group.name\" [name]=\"'groupName[' + i + ']'\">\r\n                        </table-input>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"btn-group\">\r\n                            <button class=\"btn btn-danger\" (click)=\"delete(group)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span> Add</button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" [disabled]=\"!groupsForm.valid\" (click)=\"save()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },
/* 50 */
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
	var message_bar_component_1 = __webpack_require__(27);
	var confirmation_component_1 = __webpack_require__(33);
	var fixture_definitions_service_1 = __webpack_require__(51);
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
	    FixtureDefinitionsComponent.prototype.add = function () {
	        window.location.href = "/fixture-definitions/new";
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
	        template: __webpack_require__(53),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureDefinitionsComponent);
	exports.FixtureDefinitionsComponent = FixtureDefinitionsComponent;


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
	var http_1 = __webpack_require__(8);
	__webpack_require__(39);
	var fixture_definition_1 = __webpack_require__(52);
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
	    FixtureDefinitionsService.prototype.put = function (manufacturer, model, definition) {
	        return this.http.put(this.fixtureDefinitionsUrl + "/" + manufacturer + "/" + model, definition)
	            .toPromise()
	            .then(function (response) { });
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
/* 52 */
/***/ function(module, exports) {

	"use strict";
	var FixtureDefinition = (function () {
	    function FixtureDefinition() {
	        this.name = "";
	        this.manufacturer = "";
	        this.type = "LED";
	        this.channels = [];
	        this.movements = [];
	        this.colorWheel = [];
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
	var DMXChannel = (function () {
	    function DMXChannel(name, dmx, min, max) {
	        this.name = name ? name : "";
	        this.dmx = dmx ? dmx : 1;
	        this.min = min ? min : 0;
	        this.max = max ? max : 255;
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
	    function ColorWheelEntry(name, dmxStart, dmxEnd, color) {
	        this.name = name ? name : "";
	        this.dmxStart = dmxStart ? dmxStart : 0;
	        this.dmxEnd = dmxEnd ? dmxEnd : 255;
	        this.color = color ? color : "000000";
	    }
	    return ColorWheelEntry;
	}());
	exports.ColorWheelEntry = ColorWheelEntry;


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definitions</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"form-group form-inline\" *ngIf=\"data\">\r\n    <div class=\"checkbox\">\r\n        <label>\r\n            <input type=\"checkbox\" [(ngModel)]=\"manufacturerFilterEnabled\" />\r\n            Filter by manufacturer\r\n        </label>\r\n    </div>\r\n    <select required class=\"form-control\" [disabled]=\"!manufacturerFilterEnabled\" [(ngModel)]=\"manufacturerFilter\">\r\n        <option *ngFor=\"let manufacturer of manufacturers\">{{manufacturer}}</option>\r\n    </select>\r\n</div>\r\n<table class=\"table table-striped\" *ngIf=\"data\">\r\n    <thead>\r\n        <tr>\r\n            <th>Manufacturer</th>\r\n            <th>Model</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of filteredData\">\r\n            <td>{{entry.manufacturer}}</td>\r\n            <td>{{entry.model}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n<confirmation #confirmation></confirmation>"

/***/ },
/* 54 */
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
	var message_bar_component_1 = __webpack_require__(27);
	var confirmation_component_1 = __webpack_require__(33);
	var fixture_definition_1 = __webpack_require__(52);
	var fixture_definitions_service_1 = __webpack_require__(51);
	var FixtureDefinitionEditorComponent = (function () {
	    function FixtureDefinitionEditorComponent(route, fixtureService) {
	        this.route = route;
	        this.fixtureService = fixtureService;
	        this.allManufacturers = [];
	        this.saving = false;
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
	    FixtureDefinitionEditorComponent.prototype.addChannel = function () {
	        var maxChannel = 0;
	        this.definition.channels.forEach(function (value) {
	            if (value.dmx > maxChannel) {
	                maxChannel = value.dmx;
	            }
	        });
	        this.definition.channels.push(new fixture_definition_1.DMXChannel("", maxChannel + 1));
	    };
	    FixtureDefinitionEditorComponent.prototype.removeChannel = function (channel) {
	        var index = this.definition.channels.indexOf(channel);
	        this.definition.channels.splice(index, 1);
	    };
	    FixtureDefinitionEditorComponent.prototype.addAxis = function () {
	        this.definition.movements.push(new fixture_definition_1.Axis());
	    };
	    FixtureDefinitionEditorComponent.prototype.removeAxis = function (axis) {
	        var index = this.definition.movements.indexOf(axis);
	        this.definition.movements.splice(index, 1);
	    };
	    FixtureDefinitionEditorComponent.prototype.addColorWheelEntry = function () {
	        var minValue = 0;
	        this.definition.colorWheel.forEach(function (value) {
	            if (value.dmxEnd > minValue) {
	                minValue = value.dmxEnd;
	            }
	        });
	        minValue = minValue < 255 ? minValue + 1 : 255;
	        this.definition.colorWheel.push(new fixture_definition_1.ColorWheelEntry("", minValue));
	    };
	    FixtureDefinitionEditorComponent.prototype.removeColorWheelEntry = function (colorWheelEntry) {
	        var index = this.definition.colorWheel.indexOf(colorWheelEntry);
	        this.definition.colorWheel.splice(index, 1);
	    };
	    FixtureDefinitionEditorComponent.prototype.validateNames = function () {
	        var channelNameProblems = this.channelNames
	            .filter(function (value, index, array) { return array.indexOf(value) != index || value == ""; });
	        var axisNameProblems = this.axisNames
	            .filter(function (value, index, array) { return array.indexOf(value) != index || value == ""; });
	        var colorWheelNameProblems = this.colorWheelNames
	            .filter(function (value, index, array) { return array.indexOf(value) != index || value == ""; });
	        return channelNameProblems.length == 0 && axisNameProblems.length == 0 && colorWheelNameProblems.length == 0;
	    };
	    Object.defineProperty(FixtureDefinitionEditorComponent.prototype, "channelNames", {
	        get: function () {
	            return this.definition.channels.map(function (value) { return value.name; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FixtureDefinitionEditorComponent.prototype, "colorWheelNames", {
	        get: function () {
	            return this.definition.colorWheel.map(function (value) { return value.name; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FixtureDefinitionEditorComponent.prototype, "axisNames", {
	        get: function () {
	            return this.definition.movements.map(function (value) { return value.name; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FixtureDefinitionEditorComponent.prototype.isNewItem = function () {
	        return this.originalManufacturer == null && this.originalModel == null;
	    };
	    FixtureDefinitionEditorComponent.prototype.save = function () {
	        var _this = this;
	        this.saving = true;
	        var manufacturer = this.isNewItem() ? this.definition.manufacturer : this.originalManufacturer;
	        var model = this.isNewItem() ? this.definition.name : this.originalModel;
	        this.fixtureService
	            .put(manufacturer, model, this.definition)
	            .then(function () {
	            window.location.href = "/fixture-definitions";
	        })
	            .catch(function (reason) {
	            _this.messageBar.add("Error", reason);
	            _this.saving = false;
	        });
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
	        template: __webpack_require__(55),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureDefinitionEditorComponent);
	exports.FixtureDefinitionEditorComponent = FixtureDefinitionEditorComponent;


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definition Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"definition\" class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <datalist id=\"allManufacturers\">\r\n            <option *ngFor=\"let manufacturer of allManufacturers\">{{manufacturer}}</option>\r\n        </datalist>\r\n        <labelled-input label=\"Manufacturer:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"manufacturer\" [(ngModel)]=\"definition.manufacturer\" #model=\"ngModel\"\r\n                list=\"allManufacturers\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Model:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"model\" [(ngModel)]=\"definition.name\" #model=\"ngModel\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Type:\">\r\n            <select #input #model=\"ngModel\" class=\"form-control\" name=\"type\" [(ngModel)]=\"definition.type\">\r\n            <option>LED</option>\r\n            <option>Tungsten</option>\r\n            <option>Effect</option>\r\n        </select>\r\n        </labelled-input>\r\n        <datalist id=\"channelList\" name=\"channelList\">\r\n            <option>Master</option>\r\n            <option>Strobe</option>\r\n            <option>Red</option>\r\n            <option>Green</option>\r\n            <option>Blue</option>\r\n            <option>UV</option>\r\n            <option>ColorWheel</option>\r\n            <option>PanCoarse</option>\r\n            <option>PanFine</option>\r\n            <option>TiltCoarse</option>\r\n            <option>TiltFine</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Channels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>DMX</th>\r\n                            <th>Name</th>\r\n                            <th>Min</th>\r\n                            <th>Max</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let channel of definition.channels; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.dmx\" min=\"1\" max=\"512\" [name]=\"'channelDMX[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required [(unique)]=\"channelNames\" class=\"form-control\" type=\"text\" [(ngModel)]=\"channel.name\"\r\n                                        [name]=\"'channelName[' + i + ']'\" list=\"channelList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.min\" min=\"0\" max=\"255\" [name]=\"'channelMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.max\" min=\"0\" max=\"255\" [name]=\"'channelMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeChannel(channel)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addChannel()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <datalist id=\"axisList\" name=\"axisList\">\r\n            <option>Pan</option>\r\n            <option>Tilt</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Movement Axis</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Min (degrees)</th>\r\n                            <th>Max (degrees)</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let movement of definition.movements; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" [unique]=\"colorWheelNames\" type=\"text\" [(ngModel)]=\"movement.name\"\r\n                                        [name]=\"'axisName[' + i + ']'\" list=\"axisList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.min\" [name]=\"'axisMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.max\" [name]=\"'axisMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeAxis(movement)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addAxis()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Color Wheels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Color</th>\r\n                            <th>DMX Start</th>\r\n                            <th>DMX End</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let entry of definition.colorWheel; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" [unique]=\"colorWheelNames\" required class=\"form-control\" type=\"text\" [(ngModel)]=\"entry.name\"\r\n                                        [name]=\"'colorWheelName[' + i + ']'\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"color\" [(ngModel)]=\"entry.color\" [name]=\"'colorWheelColor[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxStart\" [name]=\"'colorWheelMin[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxEnd\" [name]=\"'colorWheelMax[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeColorWheelEntry(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addColorWheelEntry()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!editorForm.valid || !validateNames()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGJjOTJjYTUxYzEwYThjMzFjNzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3M/NGVhYyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzP2IyOTAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlL3ZlbnVlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHdCQUFzQztBQUN0Qyx3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07U0FDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEMsSUFBSSxFQUFFLDJCQUEyQjthQUNqQyxVQUFVLEVBQUU7aUJBQ1IsT0FBTyxFQUFFLEdBQUc7aUJBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2lCQUN0QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1B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QyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3hCLENBQUMsQ0FBQyxDQUFDO0tBQ1gsQ0FBQztLQUNMLHVDQUFDO0FBQUQsRUFBQztBQWxKNEI7S0FBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7K0JBQWEsMkNBQW1CO3FFQUFDO0FBQzlCO0tBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDOytCQUFlLDhDQUFxQjt1RUFBQztBQUh0RCxpQ0FBZ0M7S0FMNUMsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSw0QkFBNEI7U0FDdEMsUUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBNEMsQ0FBQztTQUMvRCxTQUFTLEVBQUUsQ0FBQyx1REFBeUIsQ0FBQztNQUN6QyxDQUFDO3NDQWU2Qix1QkFBYyxFQUEwQix1REFBeUI7SUFkbkYsZ0NBQWdDLENBb0o1QztBQXBKWSw2RUFBZ0M7Ozs7Ozs7QUNmN0MsNlhBQTRYLGNBQWMsMC9EQUEwL0QsMi9GQUEyL0YsbThFQUFtOEUsNitFIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGJjOTJjYTUxYzEwYThjMzFjNzgiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnXG5cbmltcG9ydCB7IE1JTk1BWF9ESVJFQ1RJVkVTIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XG5pbXBvcnQgeyBNYXhWYWx1ZVZhbGlkYXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9taW5tYXgvaW5kZXgnO1xuaW1wb3J0IHsgVW5pcXVlVmFsaWRhdG9yIH0gZnJvbSBcIi4vY29tcG9uZW50cy91bmlxdWUvdW5pcXVlLmRpcmVjdGl2ZVwiO1xuXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhdHVzUGFuZWxDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGFiZWxsZWRJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJsZUlucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcm91cHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25FZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHsgVmVudWVTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZS92ZW51ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHcm91cHNTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcblxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudCxcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgICAgICBHcm91cHNDb21wb25lbnQsXG4gICAgICAgIEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgRml4dHVyZURlZmluaXRpb25FZGl0b3JDb21wb25lbnQsXG5cbiAgICAgICAgTUlOTUFYX0RJUkVDVElWRVMsXG4gICAgICAgIFVuaXF1ZVZhbGlkYXRvcixcblxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBTdGF0dXNQYW5lbENvbXBvbmVudCxcbiAgICAgICAgTWVzc2FnZUJhckNvbXBvbmVudCxcbiAgICAgICAgTGFiZWxsZWRJbnB1dENvbXBvbmVudCxcbiAgICAgICAgVGFibGVJbnB1dENvbXBvbmVudCxcbiAgICAgICAgQ29uZmlybWF0aW9uQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdkYXNoYm9hcmQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZ3JvdXBzJywgY29tcG9uZW50OiBHcm91cHNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMnLCBjb21wb25lbnQ6IEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZml4dHVyZS1kZWZpbml0aW9ucy9uZXcnLCBjb21wb25lbnQ6IEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdmaXh0dXJlLWRlZmluaXRpb25zLzptYW51ZmFjdHVyZXIvOm1vZGVsJywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnc2V0cycgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGVcbntcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYtbWVudT48L25hdi1tZW51PlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL21heC12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IE1pblZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9taW4tdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1heFZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTUlOTUFYX0RJUkVDVElWRVM6IFthbnldID0gW01pblZhbHVlVmFsaWRhdG9yLCBNYXhWYWx1ZVZhbGlkYXRvcl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9pbmRleC50cyIsImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1JTl9WQUxVRV9WQUxJREFUT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNaW5WYWx1ZVZhbGlkYXRvciksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1ttaW5dW2Zvcm1Db250cm9sTmFtZV0sW21pbl1bZm9ybUNvbnRyb2xdLFttaW5dW25nTW9kZWxdJyxcclxuICAgIHByb3ZpZGVyczogW01JTl9WQUxVRV9WQUxJREFUT1JdLFxyXG4gICAgaG9zdDogeyAnW2F0dHIubWluXSc6ICdtaW4gPyBtaW4gOiAwJyB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWluVmFsdWVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uQ2hhbmdlc1xyXG57XHJcbiAgICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xyXG5cclxuICAgIEBJbnB1dCgpIG1pbjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBAQXR0cmlidXRlKCdtaW4nKSBtbjogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChtbiAhPT0gdW5kZWZpbmVkICYmIG1uICE9PSBudWxsKVxyXG4gICAgICAgIHtcdC8vIGlzUHJlc2VudFxyXG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBwYXJzZUludChtbiwgMTApO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGF0dHJWYWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluID0gbW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1pbkNoYW5nZSA9IGNoYW5nZXNbJ21pbiddO1xyXG4gICAgICAgIGlmIChtaW5DaGFuZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlVmFsaWRhdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBNaW5WYWx1ZVZhbGlkYXRvci5taW4ocGFyc2VJbnQodGhpcy5taW4sIDEwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7IHJldHVybiB0aGlzLl92YWxpZGF0b3IoYyk7IH1cclxuXHJcbiAgICBzdGF0aWMgbWluKG1uOiBudW1iZXIpOiBWYWxpZGF0b3JGblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHYgPSArY29udHJvbC52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICh2IDwgbW4gPyB7ICdtaW4nOiB7ICdtaW5WYWx1ZSc6IG1uLCAnYWN0dWFsVmFsdWUnOiB2IH0gfSA6IG51bGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9taW4tdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFYX1ZBTFVFX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1heFZhbHVlVmFsaWRhdG9yKSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW21heF1bZm9ybUNvbnRyb2xOYW1lXSxbbWluXVtmb3JtQ29udHJvbF0sW21pbl1bbmdNb2RlbF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbTUFYX1ZBTFVFX1ZBTElEQVRPUl0sXHJcbiAgICBob3N0OiB7ICdbYXR0ci5tYXhdJzogJ21heCA/IG1heCA6IDAnIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXhWYWx1ZVZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25DaGFuZ2VzXHJcbntcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XHJcblxyXG4gICAgQElucHV0KCkgbWF4OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIEBBdHRyaWJ1dGUoJ21heCcpIG14OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG14ICE9PSB1bmRlZmluZWQgJiYgbXggIT09IG51bGwpXHJcbiAgICAgICAge1x0Ly8gaXNQcmVzZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHBhcnNlSW50KG14LCAxMCk7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oYXR0clZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXggPSBteDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbWF4Q2hhbmdlID0gY2hhbmdlc1snbWF4J107XHJcbiAgICAgICAgaWYgKG1heENoYW5nZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVWYWxpZGF0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IE1heFZhbHVlVmFsaWRhdG9yLm1heChwYXJzZUludCh0aGlzLm1heCwgMTApKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcihjKTsgfVxyXG5cclxuICAgIHN0YXRpYyBtYXgobXg6IG51bWJlcik6IFZhbGlkYXRvckZuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9ICtjb250cm9sLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gKHYgPiBteCA/IHsgJ21heCc6IHsgJ21heFZhbHVlJzogbXgsICdhY3R1YWxWYWx1ZSc6IHYgfSB9IDogbnVsbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L21heC12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmLCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1bmlxdWVdW25nTW9kZWxdLFt1bmlxdWVdW2Zvcm1Db250cm9sXScsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFVuaXF1ZVZhbGlkYXRvciksIG11bHRpOiB0cnVlIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbGlkYXRvclxyXG57XHJcbiAgICBASW5wdXQoKSB1bmlxdWU6IGFueVtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy51bmlxdWUgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWF0Y2hlcyA9IHRoaXMudW5pcXVlLmZpbHRlcigodmFsdWU6IGFueSkgPT4gYy52YWx1ZSA9PT0gdmFsdWUpO1xyXG4gICAgICAgIGlmIChjLmRpcnR5ICYmIG1hdGNoZXMubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHVuaXF1ZTogeyB2YWxpZDogZmFsc2UgfSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnRcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWludmVyc2VcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbXlOYXZiYXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPiBcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBocmVmPVxcXCIjXFxcIj5LYWRtaXVtIE9TQyBETVg8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVxcXCIgaWQ9XFxcIm15TmF2YmFyXFxcIj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgcm91dGVyTGluaz1cXFwiL2Rhc2hib2FyZFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24taG9tZVxcXCI+PC9zcGFuPiBIb21lPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jb2dcXFwiPjwvc3Bhbj4gU2V0dXBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgcm91dGVyTGluaz1cXFwiL3NldHRpbmdzXFxcIj5TZXR0aW5nczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9ncm91cHNcXFwiPkdyb3VwczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvZml4dHVyZS1kZWZpbml0aW9uc1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3RcXFwiPjwvc3Bhbj4gRml4dHVyZSBEZWZpbml0aW9uczwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvbmF2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vc3RhdHVzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RhdHVzLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdHVzUGFuZWxDb21wb25lbnRcclxue1xyXG4gICAgcHVibGljIHN0YXR1czogU3RhdHVzO1xyXG4gICAgQElucHV0KFwibmFtZVwiKSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gbmV3IFN0YXR1cyhcIlVua25vd25cIiwgXCJVbmtub3duXCIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBTdGF0dXNcclxue1xyXG4gICAgc3RhdGljIFN0YXR1c1RhYmxlOiBTdGF0dXNUYWJsZSA9IHtcclxuICAgICAgICBTdWNjZXNzOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtc3VjY2Vzc1wiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLW9rLXNpZ25cIiB9LFxyXG4gICAgICAgIEVycm9yOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtZGFuZ2VyXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24tcmVtb3ZlLXNpZ25cIiB9LFxyXG4gICAgICAgIFdhcm5pbmc6IHsgYWxlcnRTdHlsZTogXCJhbGVydC13YXJuaW5nXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24taW5mby1zaWduXCIgfSxcclxuICAgICAgICBVbmtub3duOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtaW5mb1wiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ25cIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjb2RlOiBTdGF0dXNDb2RlO1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb2RlOiBTdGF0dXNDb2RlLCBtZXNzYWdlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoY29kZTogU3RhdHVzQ29kZSwgbWVzc2FnZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFsZXJ0U3R5bGUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXR1cy5TdGF0dXNUYWJsZVt0aGlzLmNvZGVdLmFsZXJ0U3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBnbHlwaEljb24oKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXR1cy5TdGF0dXNUYWJsZVt0aGlzLmNvZGVdLmdseXBoSWNvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3RhdHVzQ29kZSA9IFwiVW5rbm93blwiIHwgXCJFcnJvclwiIHwgXCJTdWNjZXNzXCIgfCBcIldhcm5pbmdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzVGFibGVcclxue1xyXG4gICAgW2tleTogc3RyaW5nXTogU3RhdHVzSW5mbztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1c0luZm9cclxue1xyXG4gICAgYWxlcnRTdHlsZTogc3RyaW5nO1xyXG4gICAgZ2x5cGhJY29uOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+e3tuYW1lfX0gPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiIFtuZ0NsYXNzXT1cXFwic3RhdHVzLmFsZXJ0U3R5bGVcXFwiPlxcclxcbiAgICAgICAge3tzdGF0dXMubWVzc2FnZX19PGJyPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBzdGF0dXMtZ2x5cGhcXFwiIFtuZ0NsYXNzXT1cXFwic3RhdHVzLmdseXBoSWNvblxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YXR1cy1nbHlwaCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1cywgU3RhdHVzQ29kZSB9IGZyb20gXCIuLi9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtZXNzYWdlLWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tZXNzYWdlLWJhci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQmFyQ29tcG9uZW50XHJcbntcclxuICAgIHByaXZhdGUgbWVzc2FnZXM6IFN0YXR1c1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmUoc3RhdHVzOiBTdGF0dXMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tZXNzYWdlcy5pbmRleE9mKHN0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoc3RhdHVzQ29kZTogU3RhdHVzQ29kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXcgU3RhdHVzKHN0YXR1c0NvZGUsIG1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nRm9yPVxcXCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0XFxcIiBbbmdDbGFzc109XFxcIm1lc3NhZ2UuYWxlcnRTdHlsZVxcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcInJlbW92ZShtZXNzYWdlKVxcXCIgYXJpYS1sYWJlbD1cXFwiY2xvc2VcXFwiPiZ0aW1lczs8L2E+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uXFxcIiBbbmdDbGFzc109XFxcIm1lc3NhZ2UuZ2x5cGhJY29uXFxcIj48L3NwYW4+IHt7bWVzc2FnZS5tZXNzYWdlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xhYmVsbGVkLWlucHV0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsbGVkSW5wdXRDb21wb25lbnRcclxue1xyXG4gICAgQElucHV0KCkgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQENvbnRlbnRDaGlsZChcIm1vZGVsXCIpIHB1YmxpYyBtb2RlbDogRWxlbWVudFJlZjtcclxuICAgIEBDb250ZW50Q2hpbGQoXCJpbnB1dFwiKSBwdWJsaWMgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydoYXMtZXJyb3InOiBtb2RlbC5lcnJvcnMgJiYgbW9kZWwudG91Y2hlZH1cXFwiPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTJcXFwiIFthdHRyLmZvcl09XFxcImlucHV0Lm5hbWVcXFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5yZXF1aXJlZFxcXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/Lm1pblxcXCI+VGhpcyBmaWVsZCBoYXMgYSBtaW5pbXVtIHZhbHVlIG9mIHt7bW9kZWwuZXJyb3JzPy5taW4ubWluVmFsdWV9fTwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/Lm1heFxcXCI+VGhpcyBmaWVsZCBoYXMgYSBtYXhpbXVtIHZhbHVlIG9mIHt7bW9kZWwuZXJyb3JzPy5tYXgubWF4VmFsdWV9fTwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5kaXJ0eSAmJiBtb2RlbC5lcnJvcnM/LnVuaXF1ZVxcXCI+RW50cmllcyBpbiB0aGlzIGZpZWxkIG11c3QgYmUgdW5pcXVlPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RhYmxlLWlucHV0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RhYmxlLWlucHV0LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlSW5wdXRDb21wb25lbnRcclxue1xyXG4gICAgQElucHV0KCkgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQENvbnRlbnRDaGlsZChcIm1vZGVsXCIpIHB1YmxpYyBtb2RlbDogRWxlbWVudFJlZjtcclxuICAgIEBDb250ZW50Q2hpbGQoXCJpbnB1dFwiKSBwdWJsaWMgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IG1vZGVsLmVycm9ycyAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmRpcnR5fVxcXCI+XFxyXFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/LnJlcXVpcmVkXFxcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5taW5cXFwiPlRoaXMgZmllbGQgaGFzIGEgbWluaW11bSB2YWx1ZSBvZiB7e21vZGVsLmVycm9ycz8ubWluLm1pblZhbHVlfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/Lm1heFxcXCI+VGhpcyBmaWVsZCBoYXMgYSBtYXhpbXVtIHZhbHVlIG9mIHt7bW9kZWwuZXJyb3JzPy5tYXgubWF4VmFsdWV9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8udW5pcXVlXFxcIj5FbnRyaWVzIGluIHRoaXMgZmllbGQgbXVzdCBiZSB1bmlxdWU8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb25maXJtYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKFwiLi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1wiKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwiY29uZmlybWF0aW9uXCIpIGNvbmZpcm1hdGlvbjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBoZWFkZXI6IHN0cmluZztcclxuICAgIGJvZHk6IHN0cmluZztcclxuICAgIGFjY2VwdFZlcmI6IHN0cmluZztcclxuICAgIGNhbmNlbFZlcmI6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB2aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHJlc29sdmU6ICh2YWx1ZT86IGJvb2xlYW4gfCBQcm9taXNlTGlrZTxib29sZWFuPikgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcilcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coaGVhZGVyOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgYWNjZXB0VmVyYjogc3RyaW5nLCBjYW5jZWxWZXJiOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICAgICAgICB0aGlzLmFjY2VwdFZlcmIgPSBhY2NlcHRWZXJiO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsVmVyYiA9IGNhbmNlbFZlcmI7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGVBbmltYXRlID0gdHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGUgPSBmYWxzZSwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0Q2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsQ2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgI2NvbmZpcm1hdGlvbiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBbbmdDbGFzc109XFxcInsnaW4nOiB2aXNpYmxlQW5pbWF0ZX1cXFwiIFtuZ1N0eWxlXT1cXFwieydkaXNwbGF5JzogdmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScsICdvcGFjaXR5JzogdmlzaWJsZUFuaW1hdGUgPyAxIDogMH1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcbiAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxDbGljaygpXFxcIj4mdGltZXM7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPnt7aGVhZGVyfX08L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD57e2JvZHl9fTwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiYWNjZXB0Q2xpY2soKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+e3thY2NlcHRWZXJifX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcImNhbmNlbENsaWNrKClcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPnt7Y2FuY2VsVmVyYn19PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1c1BhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZlbnVlU2VydmljZSB9IGZyb20gXCIuLi92ZW51ZS92ZW51ZS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNDb2RlIH0gZnJvbSBcIi4uL3N0YXR1cy9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtWZW51ZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJ2ZW51ZVwiKSB2ZW51ZTogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwic2FjblRyYW5zbWl0dGVyXCIpIHNhY25UcmFuc21pdHRlcjogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwib3NjTGlzdGVuZXJcIikgb3NjTGlzdGVuZXI6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImZpeHR1cmVzXCIpIGZpeHR1cmVzOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIHdlYlNvY2tldDogV2ViU29ja2V0O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNvY2tldFVSTCA9IGdldFNvY2tldFVSTChcIkluZGV4XCIpO1xyXG4gICAgcHJpdmF0ZSB2ZW51ZU5hbWVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZlbnVlU2VydmljZTogVmVudWVTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHZlbnVlU2VydmljZS5nZXROYW1lcygpXHJcbiAgICAgICAgICAgIC50aGVuKG5hbWVzID0+IHRoaXMudmVudWVOYW1lcyA9IG5hbWVzKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KERhc2hib2FyZENvbXBvbmVudC5zb2NrZXRVUkwpO1xyXG4gICAgICAgIHRoaXMud2ViU29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldjogTWVzc2FnZUV2ZW50KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IEpTT04ucGFyc2UoZXYuZGF0YSkgYXMgU3RhdHVzRGF0YTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1c1BhbmVsOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMuY29udHJvbGxlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlZlbnVlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy52ZW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTQUNOVHJhbnNtaXR0ZXJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLnNhY25UcmFuc21pdHRlcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJPU0NMaXN0ZW5lcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMub3NjTGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGaXh0dXJlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy5maXh0dXJlc1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXR1c1BhbmVsLnN0YXR1cy51cGRhdGUoc3RhdHVzLmNvZGUsIHN0YXR1cy5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZVZlbnVlKHZlbnVlTmFtZTogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmVudWVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5hY3RpdmF0ZSh2ZW51ZU5hbWUpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIHZlbnVlTmFtZSArIFwiIHN1Y2Nlc3NmdWxseSBsb2FkZWRcIikpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0dXNEYXRhXHJcbntcclxuICAgIGNvZGU6IFN0YXR1c0NvZGU7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBjb250cm9sbGVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNvY2tldFVSTChjb250cm9sbGVyOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFjdGlvblVSTCA9IGdldEFjdGlvblVSTChjb250cm9sbGVyLCBcIlNvY2tldFwiKTtcclxuICAgIGxldCBzb2NrZXRVUkwgPSBhY3Rpb25VUkwucmVwbGFjZShcImh0dHBcIiwgXCJ3c1wiKTtcclxuICAgIHJldHVybiBzb2NrZXRVUkw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFjdGlvblVSTCguLi5wYXJ0czogc3RyaW5nW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IG9yaWdpbmFsVVJMOiBzdHJpbmcgPSBkb2N1bWVudC5VUkw7XHJcbiAgICBsZXQgdXJsUGFydHM6IHN0cmluZ1tdID0gZG9jdW1lbnQuVVJMLnNwbGl0KFwiL1wiKTtcclxuICAgIGxldCBwcm90b2NvbDogc3RyaW5nID0gdXJsUGFydHNbMF07XHJcbiAgICBsZXQgaG9zdDogc3RyaW5nID0gdXJsUGFydHNbMl07XHJcblxyXG4gICAgbGV0IHJvb3Q6IHN0cmluZyA9IHByb3RvY29sICsgXCIvL1wiICsgaG9zdDtcclxuXHJcbiAgICBsZXQgcGFydHNKb2luZWQgPSBwYXJ0cy5qb2luKFwiL1wiKTtcclxuXHJcbiAgICByZXR1cm4gcm9vdCArIFwiL1wiICsgcGFydHNKb2luZWQ7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgVmVudWUgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmVudWVTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgdmVudWVVcmwgPSBcIi9hcGkvVmVudWVcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8VmVudWU+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgVmVudWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lcygpOiBQcm9taXNlPHN0cmluZ1tdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwgKyBcIi9hY3RpdmF0ZS9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZS92ZW51ZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI3ZlbnVlIG5hbWU9XFxcIlZlbnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgKm5nSWY9XFxcInZlbnVlTmFtZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+TG9hZCBWZW51ZVxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB2ZW51ZU5hbWUgb2YgdmVudWVOYW1lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiYWN0aXZhdGVWZW51ZSh2ZW51ZU5hbWUpXFxcIj57e3ZlbnVlTmFtZX19PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjc2FjblRyYW5zbWl0dGVyIG5hbWU9XFxcInNBQ04gVHJhbnNtaXR0ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9zYWNuVHJhbnNtaXR0ZXJMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICNvc2NMaXN0ZW5lciBuYW1lPVxcXCJPU0MgTGlzdGVuZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9vc2NMaXN0ZW5lckxpdmVcXFwiPkxpdmU8L2E+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI2ZpeHR1cmVzIG5hbWU9XFxcIkZpeHR1cmVzXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvZml4dHVyZXNMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXR0aW5ncy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzLCBVbmljYXN0VGFyZ2V0IH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcblxyXG52YXIgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1NldHRpbmdzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3M7XHJcbiAgICBzYXZpbmc6IGJvb2xlYW47XHJcbiAgICB0ZXN0RWxlbWVudDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3NTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50ZXN0RWxlbWVudCA9IFwic3R1ZmZcIjtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTZXJ2aWNlLmdldCgpLnRoZW4oZGF0YSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dGluZ3NTZXJ2aWNlLnNhdmUodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIFwiU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAocmVhc29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUYXJnZXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3QucHVzaChuZXcgVW5pY2FzdFRhcmdldChcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVRhcmdldChpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVUYXJnZXRzKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgYmFkVGFyZ2V0cyA9IHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3QuZmlsdGVyKCh2YWx1ZTogVW5pY2FzdFRhcmdldCkgPT4gdmFsdWUudGFyZ2V0ID09IFwiXCIgfHwgdmFsdWUudGFyZ2V0ID09IHVuZGVmaW5lZCB8fCB2YWx1ZS50YXJnZXQgPT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIGJhZFRhcmdldHMubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5ncywgU2V0dGluZ3NEYXRhIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHNldHRpbmdzVXJsID0gXCIvYXBpL1NldHRpbmdzXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8U2V0dGluZ3M+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXR0aW5nc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBTZXR0aW5nc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzLmRlc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoZGF0YTogU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2V0dGluZ3NVcmwsIGRhdGEuc2VyaWFsaXplKCkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4gXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7IC8vIGZvciBkZW1vIHB1cnBvc2VzIG9ubHlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsImV4cG9ydCBjbGFzcyBTZXR0aW5nc1xyXG57XHJcbiAgICB3ZWJQb3J0OiBudW1iZXI7XHJcbiAgICBvc2NQb3J0OiBudW1iZXI7XHJcbiAgICBzYWNuVHJhbnNtaXR0ZXI6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLndlYlBvcnQgPSA4MDtcclxuICAgICAgICB0aGlzLm9zY1BvcnQgPSA5MDAwO1xyXG4gICAgICAgIHRoaXMuc2FjblRyYW5zbWl0dGVyID0gbmV3IFNBQ05UcmFuc21pdHRlclNldHRpbmdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZShkYXRhOiBTZXR0aW5nc0RhdGEpOiBTZXR0aW5nc1xyXG4gICAge1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpO1xyXG4gICAgICAgIHNldHRpbmdzLndlYlBvcnQgPSBkYXRhLndlYlBvcnQ7XHJcbiAgICAgICAgc2V0dGluZ3Mub3NjUG9ydCA9IGRhdGEub3NjUG9ydDtcclxuICAgICAgICBzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIgPSBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncy5kZXNlcmlhbGl6ZShkYXRhLnNhY25UcmFuc21pdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogU2V0dGluZ3NEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFNldHRpbmdzRGF0YSA9IHtcclxuICAgICAgICAgICAgd2ViUG9ydDogdGhpcy53ZWJQb3J0LFxyXG4gICAgICAgICAgICBvc2NQb3J0OiB0aGlzLm9zY1BvcnQsXHJcbiAgICAgICAgICAgIHNhY25UcmFuc21pdHRlcjogdGhpcy5zYWNuVHJhbnNtaXR0ZXIuc2VyaWFsaXplKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3Ncclxue1xyXG4gICAgZGVsYXk6IG51bWJlcjtcclxuICAgIG11bHRpY2FzdDogYm9vbGVhbjtcclxuICAgIHVuaWNhc3Q6IFVuaWNhc3RUYXJnZXRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IDA7XHJcbiAgICAgICAgdGhpcy5tdWx0aWNhc3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudW5pY2FzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemUoZGF0YTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhKTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NcclxuICAgIHtcclxuICAgICAgICBsZXQgdHJhbnNtaXR0ZXIgPSBuZXcgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3MoKTtcclxuICAgICAgICB0cmFuc21pdHRlci5kZWxheSA9IGRhdGEuZGVsYXk7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIubXVsdGljYXN0ID0gZGF0YS5tdWx0aWNhc3Q7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIudW5pY2FzdCA9IGRhdGEudW5pY2FzdC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IG5ldyBVbmljYXN0VGFyZ2V0KHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbWl0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YSA9IHtcclxuICAgICAgICAgICAgZGVsYXk6IHRoaXMuZGVsYXksXHJcbiAgICAgICAgICAgIG11bHRpY2FzdDogdGhpcy5tdWx0aWNhc3QsXHJcbiAgICAgICAgICAgIHVuaWNhc3Q6IHRoaXMudW5pY2FzdC5tYXAoKHZhbHVlOiBVbmljYXN0VGFyZ2V0KSA9PiB2YWx1ZS50YXJnZXQpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVuaWNhc3RUYXJnZXRcclxue1xyXG4gICAgdGFyZ2V0OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0RhdGFcclxue1xyXG4gICAgd2ViUG9ydDogbnVtYmVyO1xyXG4gICAgb3NjUG9ydDogbnVtYmVyO1xyXG4gICAgc2FjblRyYW5zbWl0dGVyOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhXHJcbntcclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICBtdWx0aWNhc3Q6IGJvb2xlYW47XHJcbiAgICB1bmljYXN0OiBzdHJpbmdbXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpxdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+U2V0dGluZ3M8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxwICpuZ0lmPVxcXCIhc2V0dGluZ3NcXFwiPkxvYWRpbmcuLi48L3A+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGZvcm0gKm5nSWY9XFxcInNldHRpbmdzXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAjc2V0dGluZ3NGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiSFRUUCBQb3J0OlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcIndlYlBvcnRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI2NTUzNVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLndlYlBvcnRcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCJcXHJcXG4gICAgICAgICAgICAvPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiT1NDIFBvcnQ6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0IHJlcXVpcmVkIHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwib3NjUG9ydFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjY1NTM1XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Mub3NjUG9ydFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiAvPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwic0FDTiBUcmFuc21pdHRlciBEZWxheSAobXMpOlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcInNhY25UcmFuc21pdHRlckRlbGF5XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwMDBcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIuZGVsYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgLz5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcInNBQ04gVHJhbnNtaXR0ZXIgRGVsYXkgKG1zKTpcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCAjaW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInNhY25NdWx0aWNhc3RcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIubXVsdGljYXN0XFxcIiAjc2Fjbk11bHRpY2FzdD1cXFwibmdNb2RlbFxcXCIgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiA+TXVsdGljYXN0PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTJcXFwiIGZvcj1cXFwic2FjblRyYW5zbWl0dGVyRGVsYXlcXFwiPnNBQ04gVW5pY2FzdCBUYXJnZXRzOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nRm9yPVxcXCJsZXQgdGFyZ2V0IG9mIHNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0OyBsZXQgaSA9IGluZGV4XFxcIiBpZD1cXFwidW5pY2FzdFxcXCIgbmFtZT1cXFwidW5pY2FzdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IHRhcmdldE5hbWUuZXJyb3JzICYmIHRhcmdldE5hbWUudG91Y2hlZH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGNvbC1zbS04XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3RbaV0udGFyZ2V0XFxcIiBbbmFtZV09XFxcIid1bmljYXN0WycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGFyZ2V0TmFtZT1cXFwibmdNb2RlbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJ0YXJnZXROYW1lLmVycm9ycyAmJiB0YXJnZXROYW1lLnRvdWNoZWRcXFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVUYXJnZXQoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgY2xlYXJmaXhcXFwiIChjbGljayk9XFxcImFkZFRhcmdldCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+IEFkZCBUYXJnZXQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIiBbZGlzYWJsZWRdPVxcXCIhc2V0dGluZ3NGb3JtLnZhbGlkXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgR3JvdXBzU2VydmljZSB9IGZyb20gXCIuL2dyb3Vwcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4vZ3JvdXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncm91cHMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3JvdXBzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtHcm91cHNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcblxyXG4gICAgc2F2aW5nOiBib29sZWFuO1xyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvdXBzU2VydmljZTogR3JvdXBzU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBHcm91cFtdKSA9PiB0aGlzLmdyb3VwcyA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKG5ldyBHcm91cChcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGUoZ3JvdXA6IEdyb3VwKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlKGdyb3VwOiBHcm91cCwgb2Zmc2V0OiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9sZF9pbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xyXG4gICAgICAgIGxldCBuZXdfaW5kZXggPSBvbGRfaW5kZXggKyBvZmZzZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShuZXdfaW5kZXgsIDAsIHRoaXMuZ3JvdXBzLnNwbGljZShvbGRfaW5kZXgsIDEpWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5ncm91cHMuZXZlcnkoKHZhbHVlOiBHcm91cCkgPT4gdmFsdWUubmFtZSAhPSBcIlwiICYmIHZhbHVlLm5hbWUgIT0gdW5kZWZpbmVkICYmIHZhbHVlLm5hbWUgIT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBncm91cE5hbWVzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLm1hcCgodmFsdWU6IEdyb3VwKSA9PiB2YWx1ZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ3JvdXBzU2VydmljZS5wdXQodGhpcy5ncm91cHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBcIlNhdmVkIHN1Y2Nlc3NmdWxseVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAocmVhc29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL2dyb3VwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm91cHNTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgZ3JvdXBzVXJsID0gXCIvYXBpL0dyb3VwXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8R3JvdXBbXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdyb3Vwc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBzdHJpbmdbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IG5ldyBHcm91cCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KGdyb3VwczogR3JvdXBbXSk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmdyb3Vwc1VybCwgZ3JvdXBzLm1hcCgodmFsdWU6IEdyb3VwKSA9PiB2YWx1ZS5uYW1lKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIEdyb3VwXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5Hcm91cHM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJncm91cHNcXFwiICNncm91cHNGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JkZXI8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBncm91cCBvZiBncm91cHM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKGNsaWNrKT1cXFwibW92ZShncm91cCwgLTEpXFxcIiBbZGlzYWJsZWRdPVxcXCJpID09IDBcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAoY2xpY2spPVxcXCJtb3ZlKGdyb3VwLCAxKVxcXCIgW2Rpc2FibGVkXT1cXFwiaSA9PSBncm91cHMubGVuZ3RoIC0gMVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93blxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBbdW5pcXVlXT1cXFwiZ3JvdXBOYW1lc1xcXCIgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImdyb3VwLm5hbWVcXFwiIFtuYW1lXT1cXFwiJ2dyb3VwTmFtZVsnICsgaSArICddJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZShncm91cClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj4gQWRkPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgW2Rpc2FibGVkXT1cXFwiIWdyb3Vwc0Zvcm0udmFsaWRcXFwiIChjbGljayk9XFxcInNhdmUoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24gfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaXh0dXJlLWRlZmluaXRpb25zJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0ZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbnNDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtYXRpb25cIikgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Db21wb25lbnQ7XHJcbiAgICBtYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkOiBib29sZWFuO1xyXG4gICAgbWFudWZhY3R1cmVyRmlsdGVyOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlOiBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U2tlbGV0b25zKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10pID0+IHRoaXMuZGF0YSA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IG1hbnVmYWN0dXJlcnMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhXHJcbiAgICAgICAgICAgIC5tYXAoKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiB2YWx1ZS5tYW51ZmFjdHVyZXIpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBmaWx0ZXJlZERhdGEoKTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFudWZhY3R1cmVyRmlsdGVyRW5hYmxlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKCh2YWx1ZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbikgPT4gdmFsdWUubWFudWZhY3R1cmVyID09IHRoaXMubWFudWZhY3R1cmVyRmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFZGl0VXJsKGZpeHR1cmU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gXCJmaXh0dXJlLWRlZmluaXRpb25zXCIgKyBcIi9cIiArIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIvXCIgKyBmaXh0dXJlLm1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZGVsZXRlQ29uZmlybShmaXh0dXJlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLmNvbmZpcm1hdGlvbi5zaG93KFxyXG4gICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBmaXh0dXJlIGRlZmluaXRpb24gZm9yIFwiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIiBcIiArIGZpeHR1cmUubW9kZWwgKyBcIj9cIixcclxuICAgICAgICAgICAgXCJEZWxldGVcIixcclxuICAgICAgICAgICAgXCJDYW5jZWxcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLmRlbGV0ZShmaXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiIFwiICsgZml4dHVyZS5tb2RlbCArIFwiIHdhcyBkZWxldGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGF0YS5pbmRleE9mKGZpeHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIFwiQ291bGQgbm90IGRlbGV0ZSBcIiArIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIgXCIgKyBmaXh0dXJlLm1vZGVsICsgXCIuIFwiICsgcmVhc29uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZpeHR1cmUtZGVmaW5pdGlvbnMvbmV3XCI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uLCBGaXh0dXJlRGVmaW5pdGlvbiwgRml4dHVyZURlZmluaXRpb25EYXRhIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgZml4dHVyZURlZmluaXRpb25zVXJsID0gXCIvYXBpL0ZpeHR1cmVEZWZpbml0aW9uXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2tlbGV0b25zKCk6IFByb21pc2U8Rml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChtYW51ZmFjdHVyZXI6IHN0cmluZywgbW9kZWw6IHN0cmluZyk6IFByb21pc2U8Rml4dHVyZURlZmluaXRpb24+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5maXh0dXJlRGVmaW5pdGlvbnNVcmwgKyBcIi9cIiArIG1hbnVmYWN0dXJlciArIFwiL1wiICsgbW9kZWwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgRml4dHVyZURlZmluaXRpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGaXh0dXJlRGVmaW5pdGlvbi5sb2FkKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KG1hbnVmYWN0dXJlcjogc3RyaW5nLCBtb2RlbDogc3RyaW5nLCBkZWZpbml0aW9uOiBGaXh0dXJlRGVmaW5pdGlvbik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1VybCArIFwiL1wiICsgbWFudWZhY3R1cmVyICsgXCIvXCIgKyBtb2RlbCwgZGVmaW5pdGlvbilcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShmaXh0dXJlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsICsgXCIvXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiL1wiICsgZml4dHVyZS5tb2RlbClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2UudHMiLCJleHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb24gaW1wbGVtZW50cyBGaXh0dXJlRGVmaW5pdGlvbkRhdGFcclxue1xyXG4gICAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBcIkxFRFwiIHwgXCJUdW5nc3RlblwiIHwgXCJFZmZlY3RcIjtcclxuXHJcbiAgICBjaGFubmVsczogRE1YQ2hhbm5lbFtdO1xyXG4gICAgbW92ZW1lbnRzOiBBeGlzW107XHJcbiAgICBjb2xvcldoZWVsOiBDb2xvcldoZWVsRW50cnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1hbnVmYWN0dXJlciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJMRURcIjtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0gW107XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbG9yV2hlZWwgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZChkYXRhOiBGaXh0dXJlRGVmaW5pdGlvbkRhdGEpOiBGaXh0dXJlRGVmaW5pdGlvblxyXG4gICAge1xyXG4gICAgICAgIGxldCBkZWZpbml0aW9uID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZpbml0aW9uLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaXh0dXJlRGVmaW5pdGlvbkRhdGFcclxue1xyXG4gICAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBcIkxFRFwiIHwgXCJUdW5nc3RlblwiIHwgXCJFZmZlY3RcIjtcclxuXHJcbiAgICBjaGFubmVsczogRE1YQ2hhbm5lbFtdO1xyXG4gICAgbW92ZW1lbnRzOiBBeGlzW107XHJcbiAgICBjb2xvcldoZWVsOiBDb2xvcldoZWVsRW50cnlbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25cclxue1xyXG4gICAgcHVibGljIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgcHVibGljIG1vZGVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBETVhDaGFubmVsXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRteDogbnVtYmVyO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nLCBkbXg/OiBudW1iZXIsIG1pbj86IG51bWJlciwgbWF4PzogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgPyBuYW1lIDogXCJcIjtcclxuICAgICAgICB0aGlzLmRteCA9IGRteCA/IGRteCA6IDE7XHJcbiAgICAgICAgdGhpcy5taW4gPSBtaW4gPyBtaW4gOiAwO1xyXG4gICAgICAgIHRoaXMubWF4ID0gbWF4ID8gbWF4IDogMjU1O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXhpc1xyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtaW46IG51bWJlcjtcclxuICAgIG1heDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JXaGVlbEVudHJ5XHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRteFN0YXJ0OiBudW1iZXI7XHJcbiAgICBkbXhFbmQ6IG51bWJlcjtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgZG14U3RhcnQ/OiBudW1iZXIsIGRteEVuZD86IG51bWJlciwgY29sb3I/OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSA/IG5hbWUgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuZG14U3RhcnQgPSBkbXhTdGFydCA/IGRteFN0YXJ0IDogMDtcclxuICAgICAgICB0aGlzLmRteEVuZCA9IGRteEVuZCA/IGRteEVuZCA6IDI1NTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3IgPyBjb2xvciA6IFwiMDAwMDAwXCI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24udHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+Rml4dHVyZSBEZWZpbml0aW9uczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBmb3JtLWlubGluZVxcXCIgKm5nSWY9XFxcImRhdGFcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBbKG5nTW9kZWwpXT1cXFwibWFudWZhY3R1cmVyRmlsdGVyRW5hYmxlZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICBGaWx0ZXIgYnkgbWFudWZhY3R1cmVyXFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHNlbGVjdCByZXF1aXJlZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZGlzYWJsZWRdPVxcXCIhbWFudWZhY3R1cmVyRmlsdGVyRW5hYmxlZFxcXCIgWyhuZ01vZGVsKV09XFxcIm1hbnVmYWN0dXJlckZpbHRlclxcXCI+XFxyXFxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1hbnVmYWN0dXJlciBvZiBtYW51ZmFjdHVyZXJzXFxcIj57e21hbnVmYWN0dXJlcn19PC9vcHRpb24+XFxyXFxuICAgIDwvc2VsZWN0PlxcclxcbjwvZGl2Plxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCIgKm5nSWY9XFxcImRhdGFcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPk1hbnVmYWN0dXJlcjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPk1vZGVsPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RoZWFkPlxcclxcbiAgICA8dGJvZHk+XFxyXFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgZmlsdGVyZWREYXRhXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+e3tlbnRyeS5tYW51ZmFjdHVyZXJ9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPnt7ZW50cnkubW9kZWx9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2hyZWZdPVxcXCJnZXRFZGl0VXJsKGVudHJ5KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGVDb25maXJtKGVudHJ5KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbjxjb25maXJtYXRpb24gI2NvbmZpcm1hdGlvbj48L2NvbmZpcm1hdGlvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi4vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uLCBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uLCBETVhDaGFubmVsLCBBeGlzLCBDb2xvcldoZWVsRW50cnkgfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaXh0dXJlLWRlZmluaXRpb25zLWVkaXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb25FZGl0b3JDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtYXRpb25cIikgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Db21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbE1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbE1vZGVsOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBhbGxNYW51ZmFjdHVyZXJzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBwcml2YXRlIGRlZmluaXRpb246IEZpeHR1cmVEZWZpbml0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgc2F2aW5nOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGZpeHR1cmVTZXJ2aWNlOiBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWxsTWFudWZhY3R1cmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXIgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snbWFudWZhY3R1cmVyJ107XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbE1vZGVsID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ21vZGVsJ107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTmV3SXRlbSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZml4dHVyZVNlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5nZXQodGhpcy5vcmlnaW5hbE1hbnVmYWN0dXJlciwgdGhpcy5vcmlnaW5hbE1vZGVsKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGVmaW5pdGlvbiA9PiB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpeHR1cmVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRTa2VsZXRvbnMoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSkgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsTWFudWZhY3R1cmVycyA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc2tlbGV0b246IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pID0+IHNrZWxldG9uLm1hbnVmYWN0dXJlcilcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGFycmF5LmluZGV4T2YodmFsdWUpID09IGluZGV4KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRDaGFubmVsKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWF4Q2hhbm5lbCA9IDA7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLmZvckVhY2goKHZhbHVlOiBETVhDaGFubmVsKSA9PiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5kbXggPiBtYXhDaGFubmVsKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWF4Q2hhbm5lbCA9IHZhbHVlLmRteDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMucHVzaChuZXcgRE1YQ2hhbm5lbChcIlwiLCBtYXhDaGFubmVsICsgMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlQ2hhbm5lbChjaGFubmVsOiBETVhDaGFubmVsKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbi5jaGFubmVscy5pbmRleE9mKGNoYW5uZWwpO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jaGFubmVscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQXhpcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5wdXNoKG5ldyBBeGlzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlQXhpcyhheGlzOiBBeGlzKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMuaW5kZXhPZihheGlzKTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRDb2xvcldoZWVsRW50cnkoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtaW5WYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbG9yV2hlZWwuZm9yRWFjaCgodmFsdWU6IENvbG9yV2hlZWxFbnRyeSkgPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZG14RW5kID4gbWluVmFsdWUpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IHZhbHVlLmRteEVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1pblZhbHVlID0gbWluVmFsdWUgPCAyNTUgPyBtaW5WYWx1ZSArIDEgOiAyNTU7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbG9yV2hlZWwucHVzaChuZXcgQ29sb3JXaGVlbEVudHJ5KFwiXCIsIG1pblZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVDb2xvcldoZWVsRW50cnkoY29sb3JXaGVlbEVudHJ5OiBDb2xvcldoZWVsRW50cnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9uLmNvbG9yV2hlZWwuaW5kZXhPZihjb2xvcldoZWVsRW50cnkpO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZU5hbWVzKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgY2hhbm5lbE5hbWVQcm9ibGVtcyA9IHRoaXMuY2hhbm5lbE5hbWVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleDogbnVtYmVyLCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgIT0gaW5kZXggfHwgdmFsdWUgPT0gXCJcIik7XHJcbiAgICAgICAgbGV0IGF4aXNOYW1lUHJvYmxlbXMgPSB0aGlzLmF4aXNOYW1lc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXg6IG51bWJlciwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpICE9IGluZGV4IHx8IHZhbHVlID09IFwiXCIpO1xyXG4gICAgICAgIGxldCBjb2xvcldoZWVsTmFtZVByb2JsZW1zID0gdGhpcy5jb2xvcldoZWVsTmFtZXNcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUsIGluZGV4OiBudW1iZXIsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSAhPSBpbmRleCB8fCB2YWx1ZSA9PSBcIlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWxOYW1lUHJvYmxlbXMubGVuZ3RoID09IDAgJiYgYXhpc05hbWVQcm9ibGVtcy5sZW5ndGggPT0gMCAmJiBjb2xvcldoZWVsTmFtZVByb2JsZW1zLmxlbmd0aCA9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGNoYW5uZWxOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMubWFwKCh2YWx1ZTogRE1YQ2hhbm5lbCkgPT4gdmFsdWUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgY29sb3JXaGVlbE5hbWVzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLm1hcCgodmFsdWU6IENvbG9yV2hlZWxFbnRyeSkgPT4gdmFsdWUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgYXhpc05hbWVzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMubWFwKCh2YWx1ZTogQXhpcykgPT4gdmFsdWUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05ld0l0ZW0oKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsTWFudWZhY3R1cmVyID09IG51bGwgJiYgdGhpcy5vcmlnaW5hbE1vZGVsID09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IG1hbnVmYWN0dXJlciA9IHRoaXMuaXNOZXdJdGVtKCkgPyB0aGlzLmRlZmluaXRpb24ubWFudWZhY3R1cmVyIDogdGhpcy5vcmlnaW5hbE1hbnVmYWN0dXJlcjtcclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLmlzTmV3SXRlbSgpID8gdGhpcy5kZWZpbml0aW9uLm5hbWUgOiB0aGlzLm9yaWdpbmFsTW9kZWw7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlU2VydmljZVxyXG4gICAgICAgICAgICAucHV0KG1hbnVmYWN0dXJlciwgbW9kZWwsIHRoaXMuZGVmaW5pdGlvbilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9maXh0dXJlLWRlZmluaXRpb25zXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPkZpeHR1cmUgRGVmaW5pdGlvbiBFZGl0b3I8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJkZWZpbml0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAjZWRpdG9yRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgPGZpZWxkc2V0IFtkaXNhYmxlZF09XFxcInNhdmluZ1xcXCI+XFxyXFxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XFxcImFsbE1hbnVmYWN0dXJlcnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgbWFudWZhY3R1cmVyIG9mIGFsbE1hbnVmYWN0dXJlcnNcXFwiPnt7bWFudWZhY3R1cmVyfX08L29wdGlvbj5cXHJcXG4gICAgICAgIDwvZGF0YWxpc3Q+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk1hbnVmYWN0dXJlcjpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCAjaW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibWFudWZhY3R1cmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVmaW5pdGlvbi5tYW51ZmFjdHVyZXJcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgbGlzdD1cXFwiYWxsTWFudWZhY3R1cmVyc1xcXCI+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJNb2RlbDpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCAjaW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJkZWZpbml0aW9uLm5hbWVcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCI+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJUeXBlOlxcXCI+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0eXBlXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVmaW5pdGlvbi50eXBlXFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkxFRDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+VHVuZ3N0ZW48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkVmZmVjdDwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGRhdGFsaXN0IGlkPVxcXCJjaGFubmVsTGlzdFxcXCIgbmFtZT1cXFwiY2hhbm5lbExpc3RcXFwiPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+TWFzdGVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5TdHJvYmU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlJlZDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+R3JlZW48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkJsdWU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlVWPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5Db2xvcldoZWVsPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5QYW5Db2Fyc2U8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlBhbkZpbmU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlRpbHRDb2Fyc2U8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlRpbHRGaW5lPC9vcHRpb24+XFxyXFxuICAgICAgICA8L2RhdGFsaXN0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+Q2hhbm5lbHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ETVg8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NaW48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF4PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGNoYW5uZWwgb2YgZGVmaW5pdGlvbi5jaGFubmVsczsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hhbm5lbC5kbXhcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI1MTJcXFwiIFtuYW1lXT1cXFwiJ2NoYW5uZWxETVhbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgWyh1bmlxdWUpXT1cXFwiY2hhbm5lbE5hbWVzXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hhbm5lbC5uYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XFxcIidjaGFubmVsTmFtZVsnICsgaSArICddJ1xcXCIgbGlzdD1cXFwiY2hhbm5lbExpc3RcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwubWluXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMjU1XFxcIiBbbmFtZV09XFxcIidjaGFubmVsTWluWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwubWF4XFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMjU1XFxcIiBbbmFtZV09XFxcIidjaGFubmVsTWF4WycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlQ2hhbm5lbChjaGFubmVsKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGRDaGFubmVsKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRhdGFsaXN0IGlkPVxcXCJheGlzTGlzdFxcXCIgbmFtZT1cXFwiYXhpc0xpc3RcXFwiPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+UGFuPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5UaWx0PC9vcHRpb24+XFxyXFxuICAgICAgICA8L2RhdGFsaXN0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+TW92ZW1lbnQgQXhpczwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWluIChkZWdyZWVzKTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXggKGRlZ3JlZXMpPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IG1vdmVtZW50IG9mIGRlZmluaXRpb24ubW92ZW1lbnRzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdW5pcXVlXT1cXFwiY29sb3JXaGVlbE5hbWVzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwibW92ZW1lbnQubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVxcXCInYXhpc05hbWVbJyArIGkgKyAnXSdcXFwiIGxpc3Q9XFxcImF4aXNMaXN0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJtb3ZlbWVudC5taW5cXFwiIFtuYW1lXT1cXFwiJ2F4aXNNaW5bJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwibW92ZW1lbnQubWF4XFxcIiBbbmFtZV09XFxcIidheGlzTWF4WycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlQXhpcyhtb3ZlbWVudClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkQXhpcygpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkNvbG9yIFdoZWVsczwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29sb3I8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RE1YIFN0YXJ0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRNWCBFbmQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgZGVmaW5pdGlvbi5jb2xvcldoZWVsOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBbdW5pcXVlXT1cXFwiY29sb3JXaGVlbE5hbWVzXFxcIiByZXF1aXJlZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50cnkubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVxcXCInY29sb3JXaGVlbE5hbWVbJyArIGkgKyAnXSdcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcImNvbG9yXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50cnkuY29sb3JcXFwiIFtuYW1lXT1cXFwiJ2NvbG9yV2hlZWxDb2xvclsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJlbnRyeS5kbXhTdGFydFxcXCIgW25hbWVdPVxcXCInY29sb3JXaGVlbE1pblsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50cnkuZG14RW5kXFxcIiBbbmFtZV09XFxcIidjb2xvcldoZWVsTWF4WycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XFxcIjBcXFwiIG1heD1cXFwiMjU1XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZUNvbG9yV2hlZWxFbnRyeShlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkQ29sb3JXaGVlbEVudHJ5KClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJzYXZlKClcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0b3JGb3JtLnZhbGlkIHx8ICF2YWxpZGF0ZU5hbWVzKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2ZpZWxkc2V0PlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==