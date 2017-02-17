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
	var angular2_modal_1 = __webpack_require__(74);
	var bootstrap_1 = __webpack_require__(75);
	var navmenu_component_1 = __webpack_require__(18);
	var status_panel_component_1 = __webpack_require__(22);
	var message_bar_component_1 = __webpack_require__(27);
	var labelled_input_component_1 = __webpack_require__(29);
	var table_input_component_1 = __webpack_require__(31);
	var confirmation_component_1 = __webpack_require__(33);
	var input_box_component_1 = __webpack_require__(37);
	var dashboard_component_1 = __webpack_require__(41);
	var settings_component_1 = __webpack_require__(45);
	var groups_component_1 = __webpack_require__(50);
	var venues_component_1 = __webpack_require__(54);
	var venue_editor_component_1 = __webpack_require__(56);
	var universe_editor_component_1 = __webpack_require__(57);
	var fixture_options_editor_component_1 = __webpack_require__(58);
	var fixture_definitions_component_1 = __webpack_require__(70);
	var fixture_definition_editor_component_1 = __webpack_require__(72);
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
	            venues_component_1.VenuesComponent,
	            venue_editor_component_1.VenueEditorComponent,
	            universe_editor_component_1.UniverseEditorComponent,
	            fixture_options_editor_component_1.FixtureOptionsEditorComponent,
	            fixture_definitions_component_1.FixtureDefinitionsComponent,
	            fixture_definition_editor_component_1.FixtureDefinitionEditorComponent,
	            index_1.MINMAX_DIRECTIVES,
	            unique_directive_1.UniqueValidator,
	            navmenu_component_1.NavMenuComponent,
	            status_panel_component_1.StatusPanelComponent,
	            message_bar_component_1.MessageBarComponent,
	            labelled_input_component_1.LabelledInputComponent,
	            table_input_component_1.TableInputComponent,
	            confirmation_component_1.ConfirmationComponent,
	            input_box_component_1.InputBoxComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            forms_1.FormsModule,
	            http_1.HttpModule,
	            angular2_modal_1.ModalModule.forRoot(),
	            bootstrap_1.BootstrapModalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
	                { path: 'settings', component: settings_component_1.SettingsComponent },
	                { path: 'groups', component: groups_component_1.GroupsComponent },
	                { path: 'venues', component: venues_component_1.VenuesComponent },
	                { path: 'venues/new', component: venue_editor_component_1.VenueEditorComponent },
	                { path: 'venues/:id', component: venue_editor_component_1.VenueEditorComponent },
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

	module.exports = "<nav-menu></nav-menu>\n<div class=\"container body-content\">\n    <router-outlet></router-outlet>\n</div>"

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

	module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span> \r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Kadmium OSC DMX</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/dashboard\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                        <span class=\"glyphicon glyphicon-cog\"></span> Setup\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/settings\">Settings</a></li>\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/groups\">Groups</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/venues\"> <span class=\"glyphicon glyphicon-th-list\"></span> Venues</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/fixture-definitions\"> <span class=\"glyphicon glyphicon-th-list\"></span> Fixture Definitions</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

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

	module.exports = "<div [ngClass]=\"{'has-error': model.errors && model.touched }\">\r\n    <ng-content></ng-content>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.required\">This field is required</div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.min\">This field has a minimum value of {{model.errors?.min.minValue}}</div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.max\">This field has a maximum value of {{model.errors?.max.maxValue}}</div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.unique\">Entries in this field must be unique</div>\r\n</div>"

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
	var InputBoxComponent = (function () {
	    function InputBoxComponent(renderer) {
	        this.renderer = renderer;
	        this.visible = false;
	        this.visibleAnimate = false;
	        this.response = "";
	    }
	    InputBoxComponent.prototype.show = function (header, body, acceptVerb, cancelVerb) {
	        var _this = this;
	        this.header = header;
	        this.body = body;
	        this.acceptVerb = acceptVerb;
	        this.cancelVerb = cancelVerb;
	        this.visible = true;
	        setTimeout(function () { return _this.visibleAnimate = true; });
	        var promise = new Promise(function (resolve, reject) {
	            _this.resolve = resolve;
	            _this.reject = reject;
	        });
	        return promise;
	    };
	    InputBoxComponent.prototype.hide = function () {
	        var _this = this;
	        this.visibleAnimate = false;
	        setTimeout(function () { return _this.visible = false; }, 300);
	    };
	    InputBoxComponent.prototype.acceptClick = function () {
	        this.resolve(this.response);
	        this.hide();
	    };
	    InputBoxComponent.prototype.cancelClick = function () {
	        this.reject();
	        this.hide();
	    };
	    return InputBoxComponent;
	}());
	InputBoxComponent = __decorate([
	    core_1.Component({
	        selector: 'input-box',
	        template: __webpack_require__(38),
	        styles: [__webpack_require__(39)]
	    }),
	    __metadata("design:paramtypes", [core_1.Renderer])
	], InputBoxComponent);
	exports.InputBoxComponent = InputBoxComponent;


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <form class=\"form-horizontal\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"cancelClick()\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{header}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <labelled-input [label]=\"body\">\r\n                        <input #input #model=\"ngModel\" [(ngModel)]=\"response\" class=\"form-control\" required [name]=\"input\" />\r\n                    </labelled-input>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"acceptClick()\" data-dismiss=\"modal\">{{acceptVerb}}</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelClick()\" data-dismiss=\"modal\">{{cancelVerb}}</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(40);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}", ""]);
	
	// exports


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
	var core_1 = __webpack_require__(3);
	var status_panel_component_1 = __webpack_require__(22);
	var message_bar_component_1 = __webpack_require__(27);
	var venue_service_1 = __webpack_require__(42);
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
	        template: __webpack_require__(44),
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
	__webpack_require__(43);
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
	    VenueService.prototype.put = function (id, venue) {
	        return this.http.put(this.venueUrl + "/" + id, venue)
	            .toPromise()
	            .then(function () { });
	    };
	    return VenueService;
	}());
	VenueService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], VenueService);
	exports.VenueService = VenueService;


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Dashboard</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <status-panel #venue name=\"Venue\">\r\n            <div class=\"dropdown\" *ngIf=\"venueNames\">\r\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Load Venue\r\n                <span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li *ngFor=\"let venueName of venueNames\">\r\n                        <a (click)=\"activateVenue(venueName)\">{{venueName}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #sacnTransmitter name=\"sACN Transmitter\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/sacnTransmitterLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #oscListener name=\"OSC Listener\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/oscListenerLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #fixtures name=\"Fixtures\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/fixturesLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n</div>"

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
	var message_bar_component_1 = __webpack_require__(27);
	var settings_service_1 = __webpack_require__(46);
	var settings_1 = __webpack_require__(47);
	var $ = __webpack_require__(48);
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
	        template: __webpack_require__(49),
	        providers: [settings_service_1.SettingsService]
	    }),
	    __metadata("design:paramtypes", [settings_service_1.SettingsService])
	], SettingsComponent);
	exports.SettingsComponent = SettingsComponent;


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
	__webpack_require__(43);
	var settings_1 = __webpack_require__(47);
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
/* 47 */
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
/* 48 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Settings</h1>\r\n</div>\r\n<p *ngIf=\"!settings\">Loading...</p>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"settings\" class=\"form-horizontal\" #settingsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"HTTP Port:\">\r\n            <input #input type=\"number\" name=\"webPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.webPort\" #model=\"ngModel\"\r\n            />\r\n        </labelled-input>\r\n        <labelled-input label=\"OSC Port:\">\r\n            <input #input required type=\"number\" name=\"oscPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.oscPort\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\">\r\n            <input #input type=\"number\" name=\"sacnTransmitterDelay\" class=\"form-control\" min=\"0\" max=\"10000\" [(ngModel)]=\"settings.sacnTransmitter.delay\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Multicast:\">\r\n            <div class=\"checkbox\">\r\n                <label><input #input type=\"checkbox\" name=\"sacnMulticast\" [(ngModel)]=\"settings.sacnTransmitter.multicast\" #sacnMulticast=\"ngModel\" #model=\"ngModel\" >Multicast</label>\r\n            </div>\r\n        </labelled-input>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">sACN Unicast Targets</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Address</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let target of settings.sacnTransmitter.unicast; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input required type=\"text\" class=\"form-control col-sm-8\" [(ngModel)]=\"settings.sacnTransmitter.unicast[i].target\" [name]=\"'unicast[' + i + ']'\"\r\n                                        #input #model=\"ngModel\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeTarget(i)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\"><button class=\"btn btn-success\" (click)=\"addTarget()\"><span class=\"glyphicon glyphicon-plus\"></span></button></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!settingsForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

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
	var group_service_1 = __webpack_require__(51);
	var group_1 = __webpack_require__(52);
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
	        template: __webpack_require__(53),
	        providers: [group_service_1.GroupService]
	    }),
	    __metadata("design:paramtypes", [group_service_1.GroupService])
	], GroupsComponent);
	exports.GroupsComponent = GroupsComponent;


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
	__webpack_require__(43);
	var group_1 = __webpack_require__(52);
	var GroupService = (function () {
	    function GroupService(http) {
	        this.http = http;
	        this.groupsUrl = "/api/Group";
	    }
	    GroupService.prototype.get = function () {
	        return this.http.get(this.groupsUrl)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data.map(function (value) { return new group_1.Group(value); });
	        });
	    };
	    GroupService.prototype.put = function (groups) {
	        return this.http.put(this.groupsUrl, groups.map(function (value) { return value.name; }))
	            .toPromise()
	            .then(function (response) { });
	    };
	    return GroupService;
	}());
	GroupService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], GroupService);
	exports.GroupService = GroupService;


/***/ },
/* 52 */
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
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Groups</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"groups\" #groupsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Order</th>\r\n                    <th>Name</th>\r\n                    <th>Remove</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let group of groups; let i = index\">\r\n                    <td>\r\n                        <button class=\"btn\" (click)=\"move(group, -1)\" [disabled]=\"i == 0\"><span class=\"glyphicon glyphicon-arrow-up\"></span></button>\r\n                        <button class=\"btn\" (click)=\"move(group, 1)\" [disabled]=\"i == groups.length - 1\"><span class=\"glyphicon glyphicon-arrow-down\"></span></button>\r\n                    </td>\r\n                    <td>\r\n                        <table-input>\r\n                            <input required [unique]=\"groupNames\" #input #model=\"ngModel\" class=\"form-control\" type=\"text\" [(ngModel)]=\"group.name\" [name]=\"'groupName[' + i + ']'\">\r\n                        </table-input>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"btn-group\">\r\n                            <button class=\"btn btn-danger\" (click)=\"delete(group)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span> Add</button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" [disabled]=\"!groupsForm.valid\" (click)=\"save()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

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
	var message_bar_component_1 = __webpack_require__(27);
	var venue_service_1 = __webpack_require__(42);
	var VenuesComponent = (function () {
	    function VenuesComponent(venueService) {
	        var _this = this;
	        this.venueService = venueService;
	        this.venueService
	            .getNames()
	            .then(function (value) { return _this.data = value; })
	            .catch(function (reason) { return _this.messageBar; });
	    }
	    VenuesComponent.prototype.getEditUrl = function (entry) {
	        return "venues/" + entry.name;
	    };
	    Object.defineProperty(VenuesComponent.prototype, "venues", {
	        get: function () {
	            return this.data.map(function (value) { return { name: value }; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return VenuesComponent;
	}());
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], VenuesComponent.prototype, "messageBar", void 0);
	VenuesComponent = __decorate([
	    core_1.Component({
	        selector: 'venues',
	        template: __webpack_require__(55),
	        providers: [venue_service_1.VenueService]
	    }),
	    __metadata("design:paramtypes", [venue_service_1.VenueService])
	], VenuesComponent);
	exports.VenuesComponent = VenuesComponent;
	var VenueSkeleton = (function () {
	    function VenueSkeleton() {
	    }
	    return VenueSkeleton;
	}());


/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Venues</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<table class=\"table table-striped\" *ngIf=\"data\">\r\n    <thead>\r\n        <tr>\r\n            <th>Venue</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of venues\">\r\n            <td>{{entry.name}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n<confirmation #confirmation></confirmation>"

/***/ },
/* 56 */
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
	var router_1 = __webpack_require__(7);
	var message_bar_component_1 = __webpack_require__(27);
	var confirmation_component_1 = __webpack_require__(33);
	var universe_editor_component_1 = __webpack_require__(57);
	var fixture_options_editor_component_1 = __webpack_require__(58);
	var input_box_component_1 = __webpack_require__(37);
	var venue_1 = __webpack_require__(61);
	var venue_service_1 = __webpack_require__(42);
	var VenueEditorComponent = (function () {
	    function VenueEditorComponent(route, venueService) {
	        this.route = route;
	        this.venueService = venueService;
	        this.saving = false;
	    }
	    VenueEditorComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.originalName = this.route.snapshot.params['id'];
	        if (this.isNewItem()) {
	            this.venue = new venue_1.Venue();
	            var universe = new venue_1.Universe();
	            universe.name = "Default Universe";
	            universe.universeID = 1;
	            this.venue.universes.push(universe);
	            this.selectedUniverse = universe;
	        }
	        else {
	            this.venueService
	                .get(this.originalName)
	                .then(function (value) {
	                _this.venue = value;
	                _this.selectedUniverse = _this.venue.universes.length > 0 ? _this.venue.universes[0] : null;
	            })
	                .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	        }
	    };
	    VenueEditorComponent.prototype.isNewItem = function () {
	        return this.originalName == null;
	    };
	    VenueEditorComponent.prototype.addUniverse = function () {
	        var universe = new venue_1.Universe();
	        universe.name = "New Universe";
	        var maxNumber = 0;
	        this.venue.universes.forEach(function (value) { if (value.universeID > maxNumber) {
	            maxNumber = value.universeID;
	        } });
	        universe.universeID = maxNumber + 1;
	        this.venue.universes.push(universe);
	    };
	    VenueEditorComponent.prototype.removeUniverse = function (index) {
	        var universe = this.venue.universes[index];
	        this.venue.universes.splice(index, 1);
	        if (this.selectedUniverse == universe) {
	            this.selectedUniverse = this.venue.universes[index - 1];
	        }
	    };
	    VenueEditorComponent.prototype.save = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var key, error_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        this.saving = true;
	                        key = this.isNewItem() ? this.venue.name : this.originalName;
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, 4, 5]);
	                        return [4 /*yield*/, this.venueService.put(this.originalName, this.venue)];
	                    case 2:
	                        _a.sent();
	                        window.location.href = "/venues";
	                        return [3 /*break*/, 5];
	                    case 3:
	                        error_1 = _a.sent();
	                        this.messageBar.add("Error", error_1);
	                        return [3 /*break*/, 5];
	                    case 4:
	                        this.saving = false;
	                        return [7 /*endfinally*/];
	                    case 5: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    return VenueEditorComponent;
	}());
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], VenueEditorComponent.prototype, "messageBar", void 0);
	__decorate([
	    core_1.ViewChild("confirmation"),
	    __metadata("design:type", confirmation_component_1.ConfirmationComponent)
	], VenueEditorComponent.prototype, "confirmation", void 0);
	__decorate([
	    core_1.ViewChild("universeEditor"),
	    __metadata("design:type", universe_editor_component_1.UniverseEditorComponent)
	], VenueEditorComponent.prototype, "universeEditor", void 0);
	__decorate([
	    core_1.ViewChild("inputBox"),
	    __metadata("design:type", input_box_component_1.InputBoxComponent)
	], VenueEditorComponent.prototype, "inputBox", void 0);
	__decorate([
	    core_1.ViewChild("fixtureOptionsEditor"),
	    __metadata("design:type", fixture_options_editor_component_1.FixtureOptionsEditorComponent)
	], VenueEditorComponent.prototype, "fixtureOptionsEditor", void 0);
	VenueEditorComponent = __decorate([
	    core_1.Component({
	        selector: 'venue-editor',
	        template: __webpack_require__(69),
	        providers: [venue_service_1.VenueService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, venue_service_1.VenueService])
	], VenueEditorComponent);
	exports.VenueEditorComponent = VenueEditorComponent;


/***/ },
/* 57 */
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
	var fixture_options_editor_component_1 = __webpack_require__(58);
	var message_bar_component_1 = __webpack_require__(27);
	var input_box_component_1 = __webpack_require__(37);
	var angular2_modal_1 = __webpack_require__(74);
	var bootstrap_1 = __webpack_require__(75);
	var fixture_definitions_service_1 = __webpack_require__(59);
	var venue_preset_service_1 = __webpack_require__(65);
	var group_service_1 = __webpack_require__(51);
	var venue_1 = __webpack_require__(61);
	var UniverseEditorComponent = (function () {
	    function UniverseEditorComponent(fixtureDefinitionsService, venuePresetService, groupService, overlay, vcRef, modal) {
	        var _this = this;
	        this.fixtureDefinitionsService = fixtureDefinitionsService;
	        this.venuePresetService = venuePresetService;
	        this.groupService = groupService;
	        this.modal = modal;
	        overlay.defaultViewContainer = vcRef;
	        this.selectedFixtures = [];
	        this.venuePresetService
	            .getNames()
	            .then(function (value) { return _this.venuePresetNames = value; })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	        this.fixtureDefinitionsService
	            .getSkeletons()
	            .then(function (value) { return _this.skeletons = value; })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	        this.groupService
	            .get()
	            .then(function (value) { return _this.groups = value.map(function (grp) { return grp.name; }); })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	    }
	    UniverseEditorComponent.prototype.getManufacturers = function () {
	        return this.skeletons
	            .map(function (value) { return value.manufacturer; })
	            .filter(function (value, index, array) { return array.indexOf(value) == index; });
	    };
	    UniverseEditorComponent.prototype.getModels = function (manufacturer) {
	        return this.skeletons
	            .filter(function (value) { return value.manufacturer == manufacturer; })
	            .map(function (value) { return value.model; });
	    };
	    UniverseEditorComponent.prototype.editOptions = function (fixture) {
	        this.fixtureOptionsEditor
	            .show(fixture)
	            .then(function (value) { return fixture.options = value; })
	            .catch(function () { });
	    };
	    UniverseEditorComponent.prototype.removeFixture = function (index) {
	        this.universe.fixtures.splice(index, 1);
	    };
	    UniverseEditorComponent.prototype.addFixture = function () {
	        var fixture = new venue_1.Fixture();
	        fixture.type.manufacturer = this.getManufacturers()[0];
	        fixture.type.model = this.getModels(fixture.type.manufacturer)[0];
	        this.universe.fixtures.push(fixture);
	    };
	    UniverseEditorComponent.prototype.isSelected = function (fixture) {
	        return this.selectedFixtures.indexOf(fixture) != -1;
	    };
	    UniverseEditorComponent.prototype.selectFixture = function (fixture, selected) {
	        var index = this.selectedFixtures.indexOf(fixture);
	        if (selected && index == -1) {
	            this.selectedFixtures.push(fixture);
	        }
	        else if (!selected && index != -1) {
	            this.selectedFixtures.splice(index, 1);
	        }
	    };
	    UniverseEditorComponent.prototype.savePreset = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            var preset, _a, error_1;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        preset = new venue_1.VenuePreset();
	                        _b.label = 1;
	                    case 1:
	                        _b.trys.push([1, 3, , 4]);
	                        _a = preset;
	                        return [4 /*yield*/, this.inputBox.show("Select a name", "Name:", "Save", "Cancel")];
	                    case 2:
	                        _a.name = _b.sent();
	                        preset.fixtures = this.selectedFixtures;
	                        this.venuePresetService
	                            .put(preset.name, preset)
	                            .then(function () {
	                            _this.selectedFixtures = [];
	                            _this.messageBar.add("Success", preset.name + " saved successfully");
	                            _this.venuePresetNames.push(preset.name);
	                        })
	                            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	                        return [3 /*break*/, 4];
	                    case 3:
	                        error_1 = _b.sent();
	                        return [3 /*break*/, 4];
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    UniverseEditorComponent.prototype.loadPreset = function (name) {
	        var _this = this;
	        this.venuePresetService
	            .get(name)
	            .then(function (value) {
	            for (var _i = 0, _a = value.fixtures; _i < _a.length; _i++) {
	                var fixture = _a[_i];
	                _this.universe.fixtures.push(fixture);
	            }
	        })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	    };
	    UniverseEditorComponent.prototype.removePreset = function (name) {
	        return __awaiter(this, void 0, void 0, function () {
	            var promise, result, index, error_2, error_3;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.modal.confirm()
	                            .title("Are you sure?")
	                            .body("Are you sure you want to delete " + name + "?")
	                            .isBlocking(true)
	                            .open()];
	                    case 1:
	                        promise = _a.sent();
	                        _a.label = 2;
	                    case 2:
	                        _a.trys.push([2, 8, , 9]);
	                        return [4 /*yield*/, promise.result];
	                    case 3:
	                        result = _a.sent();
	                        if (!result)
	                            return [3 /*break*/, 7];
	                        _a.label = 4;
	                    case 4:
	                        _a.trys.push([4, 6, , 7]);
	                        return [4 /*yield*/, this.venuePresetService.delete(name)];
	                    case 5:
	                        _a.sent();
	                        index = this.venuePresetNames.indexOf(name);
	                        this.venuePresetNames.splice(index, 1);
	                        this.messageBar.add("Success", name + " successfully removed");
	                        return [3 /*break*/, 7];
	                    case 6:
	                        error_2 = _a.sent();
	                        this.messageBar.add("Error", error_2);
	                        return [3 /*break*/, 7];
	                    case 7: return [3 /*break*/, 9];
	                    case 8:
	                        error_3 = _a.sent();
	                        return [3 /*break*/, 9];
	                    case 9: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    return UniverseEditorComponent;
	}());
	__decorate([
	    core_1.Input("universe"),
	    __metadata("design:type", venue_1.Universe)
	], UniverseEditorComponent.prototype, "universe", void 0);
	__decorate([
	    core_1.Input("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], UniverseEditorComponent.prototype, "messageBar", void 0);
	__decorate([
	    core_1.Input("inputBox"),
	    __metadata("design:type", input_box_component_1.InputBoxComponent)
	], UniverseEditorComponent.prototype, "inputBox", void 0);
	__decorate([
	    core_1.ViewChild("fixtureOptionsEditor"),
	    __metadata("design:type", fixture_options_editor_component_1.FixtureOptionsEditorComponent)
	], UniverseEditorComponent.prototype, "fixtureOptionsEditor", void 0);
	UniverseEditorComponent = __decorate([
	    core_1.Component({
	        selector: 'universe-editor',
	        template: __webpack_require__(66),
	        styles: [__webpack_require__(67)],
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService, venue_preset_service_1.VenuePresetService, group_service_1.GroupService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService, venue_preset_service_1.VenuePresetService, group_service_1.GroupService,
	        angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
	], UniverseEditorComponent);
	exports.UniverseEditorComponent = UniverseEditorComponent;


/***/ },
/* 58 */
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
	var fixture_definitions_service_1 = __webpack_require__(59);
	var venue_1 = __webpack_require__(61);
	var FixtureOptionsEditorComponent = (function () {
	    function FixtureOptionsEditorComponent(fixtureDefinitionsService) {
	        this.fixtureDefinitionsService = fixtureDefinitionsService;
	        this.visible = false;
	        this.visibleAnimate = false;
	    }
	    FixtureOptionsEditorComponent.prototype.hide = function () {
	        var _this = this;
	        this.visibleAnimate = false;
	        setTimeout(function () { return _this.visible = false; }, 300);
	    };
	    FixtureOptionsEditorComponent.prototype.show = function (fixture) {
	        var _this = this;
	        var promise = new Promise(function (resolve, reject) {
	            _this.resolve = resolve;
	            _this.reject = reject;
	        });
	        this.visible = true;
	        setTimeout(function () { return _this.visibleAnimate = true; });
	        this.fixture = fixture;
	        this.fixtureDefinitionsService
	            .get(this.fixture.type.manufacturer, this.fixture.type.model)
	            .then(function (value) {
	            _this.definition = value;
	            _this.restrictionAxis = _this.definition.movements
	                .map(function (value) {
	                var axisOptions = new AxisOptions();
	                axisOptions.name = value.name;
	                var restrictionMatch = _this.fixture.options.axisRestrictions.find(function (item) { return item.name == axisOptions.name; });
	                axisOptions.restricted = restrictionMatch != null;
	                if (axisOptions.restricted) {
	                    axisOptions.restrictionMin = restrictionMatch.min;
	                    axisOptions.restrictionMax = restrictionMatch.max;
	                }
	                else {
	                    axisOptions.restrictionMin = _this.getAxisMin(axisOptions.name);
	                    axisOptions.restrictionMax = _this.getAxisMax(axisOptions.name);
	                }
	                var inversionMatch = _this.fixture.options.axisInversions.find(function (item) { return item == axisOptions.name; });
	                axisOptions.inverted = inversionMatch != null;
	                return axisOptions;
	            });
	        });
	        return promise;
	    };
	    Object.defineProperty(FixtureOptionsEditorComponent.prototype, "moving", {
	        get: function () {
	            return this.definition.movements.length > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FixtureOptionsEditorComponent.prototype.getAxisMin = function (name) {
	        return this.definition.movements.find(function (value) { return value.name == name; }).min;
	    };
	    FixtureOptionsEditorComponent.prototype.getAxisMax = function (name) {
	        return this.definition.movements.find(function (value) { return value.name == name; }).max;
	    };
	    FixtureOptionsEditorComponent.prototype.acceptClick = function () {
	        var options = new venue_1.FixtureDefinitionOptions();
	        options.axisInversions = this.restrictionAxis
	            .filter(function (value) { return value.inverted; })
	            .map(function (value) { return value.name; });
	        options.axisRestrictions = this.restrictionAxis
	            .filter(function (value) { return value.restricted; })
	            .map(function (value) {
	            var opts = new venue_1.AxisRestrictionOptions();
	            opts.name = value.name;
	            opts.min = value.restrictionMin;
	            opts.max = value.restrictionMax;
	            return opts;
	        });
	        this.resolve(options);
	        this.hide();
	    };
	    FixtureOptionsEditorComponent.prototype.cancelClick = function () {
	        this.reject();
	        this.hide();
	    };
	    return FixtureOptionsEditorComponent;
	}());
	FixtureOptionsEditorComponent = __decorate([
	    core_1.Component({
	        selector: 'fixture-options-editor',
	        template: __webpack_require__(62),
	        styles: [__webpack_require__(63)],
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureOptionsEditorComponent);
	exports.FixtureOptionsEditorComponent = FixtureOptionsEditorComponent;
	var AxisOptions = (function () {
	    function AxisOptions() {
	    }
	    return AxisOptions;
	}());


/***/ },
/* 59 */
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
	__webpack_require__(43);
	var fixture_definition_1 = __webpack_require__(60);
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
/* 60 */
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var fixture_definition_1 = __webpack_require__(60);
	var Venue = (function () {
	    function Venue() {
	        this.name = "";
	        this.universes = [];
	    }
	    return Venue;
	}());
	exports.Venue = Venue;
	var Universe = (function () {
	    function Universe() {
	        this.name = "";
	        this.universeID = 1;
	        this.fixtures = [];
	    }
	    return Universe;
	}());
	exports.Universe = Universe;
	var Fixture = (function () {
	    function Fixture() {
	        this.channel = 1;
	        this.group = "";
	        this.type = new fixture_definition_1.FixtureDefinitionSkeleton();
	        this.options = new FixtureDefinitionOptions();
	    }
	    return Fixture;
	}());
	exports.Fixture = Fixture;
	var FixtureDefinitionOptions = (function () {
	    function FixtureDefinitionOptions() {
	        this.maxBrightness = 1;
	        this.axisInversions = [];
	        this.axisRestrictions = [];
	    }
	    return FixtureDefinitionOptions;
	}());
	exports.FixtureDefinitionOptions = FixtureDefinitionOptions;
	var AxisRestrictionOptions = (function () {
	    function AxisRestrictionOptions() {
	        this.name = "";
	        this.min = 0;
	        this.max = 0;
	    }
	    return AxisRestrictionOptions;
	}());
	exports.AxisRestrictionOptions = AxisRestrictionOptions;
	var VenuePreset = (function () {
	    function VenuePreset() {
	    }
	    return VenuePreset;
	}());
	exports.VenuePreset = VenuePreset;


/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"fixture && definition\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <form class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"cancelClick()\">&times;</button>\r\n                    <h4 class=\"modal-title\">Editing {{fixture.type.manufacturer}} {{fixture.type.model}} on Channel {{fixture.channel}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <labelled-input label=\"Max Brightness:\">\r\n                        <input #input #model=\"ngModel\" class=\"form-control\" [(ngModel)]=\"fixture.options.maxBrightness\" type=\"number\" min=\"0\" max=\"1\"\r\n                            step=\"0.01\" name=\"maxBrightness\" />\r\n                    </labelled-input>\r\n                    <div *ngIf=\"moving\" class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">Axis Options</div>\r\n                        <div class=\"panel-body\">\r\n                            <table class=\"table table-striped\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Name</th>\r\n                                        <th>Inverted</th>\r\n                                        <th>Restricted</th>\r\n                                        <th>Min (degrees)</th>\r\n                                        <th>Max (degrees)</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let axis of restrictionAxis\">\r\n                                        <td>{{axis.name}}</td>\r\n                                        <td>\r\n                                            <div class=\"checkbox\">\r\n                                                <label>\r\n                                                    <input type=\"checkbox\" [(ngModel)]=\"axis.inverted\" [name]=\"'inverted[' + axis.name + ']'\" >\r\n                                                    Inverted\r\n                                                </label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"checkbox\">\r\n                                                <label>\r\n                                                    <input type=\"checkbox\" [(ngModel)]=\"axis.restricted\" [name]=\"'restricted[' + axis.name + ']'\" >\r\n                                                    Restricted\r\n                                                </label>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <table-input>\r\n                                                <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"axis.restrictionMin\" [name]=\"'restrictionMin[' + axis.name + ']'\"\r\n                                                    [min]=\"getAxisMin(axis.name)\" [max]=\"getAxisMax(axis.name)\" [disabled]=\"!axis.restricted\"\r\n                                                />\r\n                                            </table-input>\r\n                                        </td>\r\n                                        <td>\r\n                                            <table-input>\r\n                                                <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"axis.restrictionMax\" [name]=\"'restrictionMax[' + axis.name + ']'\"\r\n                                                    [min]=\"getAxisMin(axis.name)\" [max]=\"getAxisMax(axis.name)\" [disabled]=\"!axis.restricted\"\r\n                                                />\r\n                                            </table-input>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"acceptClick()\" [disabled]=\"!editorForm.valid\">OK</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelClick()\">Cancel</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(64);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 65 */
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
	__webpack_require__(43);
	var VenuePresetService = (function () {
	    function VenuePresetService(http) {
	        this.http = http;
	        this.venuePresetUrl = "/api/VenuePreset";
	    }
	    VenuePresetService.prototype.get = function (id) {
	        return this.http.get(this.venuePresetUrl + "/" + id)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data;
	        });
	    };
	    VenuePresetService.prototype.getNames = function () {
	        return this.http.get(this.venuePresetUrl)
	            .toPromise()
	            .then(function (response) {
	            var data = response.json();
	            return data;
	        });
	    };
	    VenuePresetService.prototype.activate = function (id) {
	        return this.http.get(this.venuePresetUrl + "/activate/" + id)
	            .toPromise()
	            .then(function (response) { });
	    };
	    VenuePresetService.prototype.put = function (id, venuePreset) {
	        return this.http.put(this.venuePresetUrl + "/" + id, venuePreset)
	            .toPromise()
	            .then(function () { });
	    };
	    VenuePresetService.prototype.delete = function (id) {
	        return this.http.delete(this.venuePresetUrl + "/" + id)
	            .toPromise()
	            .then(function () { });
	    };
	    return VenuePresetService;
	}());
	VenuePresetService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], VenuePresetService);
	exports.VenuePresetService = VenuePresetService;


/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\" *ngIf=\"universe && skeletons\">\r\n    <div class=\"panel-heading\">Fixtures</div>\r\n    <div class=\"panel-body\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Selected</th>\r\n                    <th>Manufacturer</th>\r\n                    <th>Model</th>\r\n                    <th>Channel</th>\r\n                    <th>Group</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let fixture of universe.fixtures; let i = index\">\r\n                    <td>\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" [ngModel]=\"isSelected(fixture)\" (ngModelChange)=\"selectFixture(fixture, $event)\" [name]=\"'selected[' + i + ']'\" >\r\n                            </label>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <table-input>\r\n                            <select class=\"form-control\" [(ngModel)]=\"fixture.type.manufacturer\" #input #model=\"ngModel\" [name]=\"'manufacturer[' + i +']'\">\r\n                                <option *ngFor=\"let manufacturer of getManufacturers()\">{{manufacturer}}</option>\r\n                            </select>\r\n                        </table-input>\r\n                    </td>\r\n                    <td>\r\n                        <table-input>\r\n                            <select class=\"form-control\" [(ngModel)]=\"fixture.type.model\" #input #model=\"ngModel\" [name]=\"'model[' + i +']'\">\r\n                                <option *ngFor=\"let model of getModels(fixture.type.manufacturer)\">{{model}}</option>\r\n                            </select>\r\n                        </table-input>\r\n                    </td>\r\n                    <td>\r\n                        <table-input>\r\n                            <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" min=\"1\" max=\"512\" [(ngModel)]=\"fixture.channel\" [name]=\"'channel[' + i + ']'\"\r\n                            />\r\n                        </table-input>\r\n                    </td>\r\n                    <td>\r\n                        <table-input>\r\n                            <select class=\"form-control\" [(ngModel)]=\"fixture.group\" #input #model=\"ngModel\" [name]=\"'group[' + i + ']'\">\r\n                                <option *ngFor=\"let group of groups\">{{group}}</option>\r\n                            </select>\r\n                        </table-input>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"editOptions(fixture)\"><span class=\"glyphicon glyphicon-edit\"></span></button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeFixture(i)\"><span class=\"glyphicon glyphicon-remove\"></span> </button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <button class=\"btn btn-success\" (click)=\"addFixture()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n            <div class=\"col-sm-8 text-right\">\r\n                <div class=\"col-sm-8\">\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectedPresetName\" name=\"selectedPreset\">\r\n                    <option *ngFor=\"let venuePresetName of venuePresetNames\">{{venuePresetName}}</option>\r\n                </select>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <button type=\"button\" class=\"btn btn-success\" [disabled]=\"selectedPresetName == null\" (click)=\"loadPreset(selectedPresetName)\">\r\n                    <span class=\"glyphicon glyphicon-floppy-open\"></span>\r\n                </button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"selectedFixtures.length == 0\" (click)=\"savePreset()\">\r\n                    <span class=\"glyphicon glyphicon-floppy-save\"></span>\r\n                </button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" [disabled]=\"selectedPresetName == null\" (click)=\"removePreset(selectedPresetName)\">\r\n                    <span class=\"glyphicon glyphicon-remove\"></span>\r\n                </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3 text-right\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<fixture-options-editor #fixtureOptionsEditor></fixture-options-editor>"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(68);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}", ""]);
	
	// exports


/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Venue Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"venue\" class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"Name:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"venue.name\" #model=\"ngModel\">\r\n        </labelled-input>\r\n\r\n        <div role=\"tabpanel\">\r\n            <!-- Nav tabs -->\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li *ngFor=\"let universe of venue.universes; let i = index\" [ngClass]=\"{'active': selectedUniverse == universe}\" class=\"active\">\r\n                    <a (click)=\"selectedUniverse = universe\">{{universe.name}}\r\n                        <span *ngIf=\"i > 0\" class=\"glyphicon glyphicon-remove\" (click)=\"removeUniverse(i)\"></span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"btn\" (click)=\"addUniverse()\"><span class=\"glyphicon glyphicon-plus\"></span></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"panel panel-default\" *ngIf=\"selectedUniverse\">\r\n            <div class=\"panel-body\">\r\n                <labelled-input label=\"Name:\">\r\n                    <input required #input #model=\"ngModel\" [(ngModel)]=\"selectedUniverse.name\" type=\"text\" class=\"form-control\" [name]=\"'universeName[' + i + ']'\"\r\n                    />\r\n                </labelled-input>\r\n                <labelled-input label=\"Universe ID:\">\r\n                    <input #input #model=\"ngModel\" [(ngModel)]=\"selectedUniverse.universeID\" type=\"number\" class=\"form-control\" min=\"1\" max=\"65535\"\r\n                        [name]=\"'universeNumber[' + i + ']'\" />\r\n                </labelled-input>\r\n            </div>\r\n\r\n            <universe-editor [universe]=\"selectedUniverse\" [messageBar]=\"messageBar\" [inputBox]=\"inputBox\"></universe-editor>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!editorForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>\r\n<input-box #inputBox></input-box>"

/***/ },
/* 70 */
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
	var fixture_definitions_service_1 = __webpack_require__(59);
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
	        template: __webpack_require__(71),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureDefinitionsComponent);
	exports.FixtureDefinitionsComponent = FixtureDefinitionsComponent;


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definitions</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"form-group form-inline\" *ngIf=\"data\">\r\n    <div class=\"checkbox\">\r\n        <label>\r\n            <input type=\"checkbox\" [(ngModel)]=\"manufacturerFilterEnabled\" />\r\n            Filter by manufacturer\r\n        </label>\r\n    </div>\r\n    <select required class=\"form-control\" [disabled]=\"!manufacturerFilterEnabled\" [(ngModel)]=\"manufacturerFilter\">\r\n        <option *ngFor=\"let manufacturer of manufacturers\">{{manufacturer}}</option>\r\n    </select>\r\n</div>\r\n<table class=\"table table-striped\" *ngIf=\"data\">\r\n    <thead>\r\n        <tr>\r\n            <th>Manufacturer</th>\r\n            <th>Model</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of filteredData\">\r\n            <td>{{entry.manufacturer}}</td>\r\n            <td>{{entry.model}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n<confirmation #confirmation></confirmation>"

/***/ },
/* 72 */
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
	var fixture_definition_1 = __webpack_require__(60);
	var fixture_definitions_service_1 = __webpack_require__(59);
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
	        template: __webpack_require__(73),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureDefinitionEditorComponent);
	exports.FixtureDefinitionEditorComponent = FixtureDefinitionEditorComponent;


/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definition Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"definition\" class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <datalist id=\"allManufacturers\">\r\n            <option *ngFor=\"let manufacturer of allManufacturers\">{{manufacturer}}</option>\r\n        </datalist>\r\n        <labelled-input label=\"Manufacturer:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"manufacturer\" [(ngModel)]=\"definition.manufacturer\" #model=\"ngModel\"\r\n                list=\"allManufacturers\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Model:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"model\" [(ngModel)]=\"definition.name\" #model=\"ngModel\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Type:\">\r\n            <select #input #model=\"ngModel\" class=\"form-control\" name=\"type\" [(ngModel)]=\"definition.type\">\r\n            <option>LED</option>\r\n            <option>Tungsten</option>\r\n            <option>Effect</option>\r\n        </select>\r\n        </labelled-input>\r\n        <datalist id=\"channelList\" name=\"channelList\">\r\n            <option>Master</option>\r\n            <option>Strobe</option>\r\n            <option>Red</option>\r\n            <option>Green</option>\r\n            <option>Blue</option>\r\n            <option>UV</option>\r\n            <option>ColorWheel</option>\r\n            <option>PanCoarse</option>\r\n            <option>PanFine</option>\r\n            <option>TiltCoarse</option>\r\n            <option>TiltFine</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Channels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>DMX</th>\r\n                            <th>Name</th>\r\n                            <th>Min</th>\r\n                            <th>Max</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let channel of definition.channels; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.dmx\" min=\"1\" max=\"512\" [name]=\"'channelDMX[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required [(unique)]=\"channelNames\" class=\"form-control\" type=\"text\" [(ngModel)]=\"channel.name\"\r\n                                        [name]=\"'channelName[' + i + ']'\" list=\"channelList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.min\" min=\"0\" max=\"255\" [name]=\"'channelMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.max\" min=\"0\" max=\"255\" [name]=\"'channelMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeChannel(channel)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addChannel()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <datalist id=\"axisList\" name=\"axisList\">\r\n            <option>Pan</option>\r\n            <option>Tilt</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Movement Axis</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Min (degrees)</th>\r\n                            <th>Max (degrees)</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let movement of definition.movements; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" [unique]=\"colorWheelNames\" type=\"text\" [(ngModel)]=\"movement.name\"\r\n                                        [name]=\"'axisName[' + i + ']'\" list=\"axisList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.min\" [name]=\"'axisMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.max\" [name]=\"'axisMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeAxis(movement)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addAxis()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Color Wheels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Color</th>\r\n                            <th>DMX Start</th>\r\n                            <th>DMX End</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let entry of definition.colorWheel; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" [unique]=\"colorWheelNames\" required class=\"form-control\" type=\"text\" [(ngModel)]=\"entry.name\"\r\n                                        [name]=\"'colorWheelName[' + i + ']'\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"color\" [(ngModel)]=\"entry.color\" [name]=\"'colorWheelColor[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxStart\" [name]=\"'colorWheelMin[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxEnd\" [name]=\"'colorWheelMax[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeColorWheelEntry(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addColorWheelEntry()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!editorForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("angular2-modal");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("angular2-modal/plugins/bootstrap");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDk2MWY3MjAxZWYyYjYxMDY0YTkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3M/NGVhYyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzP2IyOTAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LmNzcz9hNzBjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXAuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLWVkaXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LmNzcz82ZjFmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtcHJlc2V0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LmNzcz8yZDVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLW1vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9i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QUM7S0FDTCx1Q0FBQztBQUFELEVBQUM7QUFsSjRCO0tBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOytCQUFhLDJDQUFtQjtxRUFBQztBQUM5QjtLQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQzsrQkFBZSw4Q0FBcUI7dUVBQUM7QUFIdEQsaUNBQWdDO0tBTDVDLGdCQUFTLENBQUM7U0FDUCxRQUFRLEVBQUUsNEJBQTRCO1NBQ3RDLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQTRDLENBQUM7U0FDL0QsU0FBUyxFQUFFLENBQUMsdURBQXlCLENBQUM7TUFDekMsQ0FBQztzQ0FlNkIsdUJBQWMsRUFBMEIsdURBQXlCO0lBZG5GLGdDQUFnQyxDQW9KNUM7QUFwSlksNkVBQWdDOzs7Ozs7O0FDZjdDLDZYQUE0WCxjQUFjLDAvREFBMC9ELDIvRkFBMi9GLG04RUFBbThFLHk5RTs7Ozs7O0FDQWwwUCw0Qzs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkOTYxZjcyMDFlZjJiNjEwNjRhOSIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcblxuaW1wb3J0IHsgTUlOTUFYX0RJUkVDVElWRVMgfSBmcm9tICcuL2NvbXBvbmVudHMvbWlubWF4L2luZGV4JztcbmltcG9ydCB7IE1heFZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XG5pbXBvcnQgeyBVbmlxdWVWYWxpZGF0b3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3VuaXF1ZS91bmlxdWUuZGlyZWN0aXZlXCI7XG5cbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xuaW1wb3J0IHsgQm9vdHN0cmFwTW9kYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcCc7XG5cbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGF0dXNQYW5lbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYWJlbGxlZElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYmxlSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRCb3hDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JvdXBzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50JztcbmltcG9ydCB7IFZlbnVlc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFZlbnVlRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZXMvdmVudWUtZWRpdG9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVW5pdmVyc2VFZGl0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWZW51ZVByZXNldFNlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1wcmVzZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgR3JvdXBTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncm91cHMvZ3JvdXAuc2VydmljZVwiO1xuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIEdyb3Vwc0NvbXBvbmVudCxcbiAgICAgICAgVmVudWVzQ29tcG9uZW50LFxuICAgICAgICBWZW51ZUVkaXRvckNvbXBvbmVudCxcbiAgICAgICAgVW5pdmVyc2VFZGl0b3JDb21wb25lbnQsXG4gICAgICAgIEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50LFxuICAgICAgICBGaXh0dXJlRGVmaW5pdGlvbnNDb21wb25lbnQsXG4gICAgICAgIEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50LFxuXG4gICAgICAgIE1JTk1BWF9ESVJFQ1RJVkVTLFxuICAgICAgICBVbmlxdWVWYWxpZGF0b3IsXG5cbiAgICAgICAgTmF2TWVudUNvbXBvbmVudCxcbiAgICAgICAgU3RhdHVzUGFuZWxDb21wb25lbnQsXG4gICAgICAgIE1lc3NhZ2VCYXJDb21wb25lbnQsXG4gICAgICAgIExhYmVsbGVkSW5wdXRDb21wb25lbnQsXG4gICAgICAgIFRhYmxlSW5wdXRDb21wb25lbnQsXG4gICAgICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcbiAgICAgICAgSW5wdXRCb3hDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG5cbiAgICAgICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBCb290c3RyYXBNb2RhbE1vZHVsZSxcblxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnZGFzaGJvYXJkJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdzZXR0aW5ncycsIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2dyb3VwcycsIGNvbXBvbmVudDogR3JvdXBzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd2ZW51ZXMnLCBjb21wb25lbnQ6IFZlbnVlc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAndmVudWVzL25ldycsIGNvbXBvbmVudDogVmVudWVFZGl0b3JDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3ZlbnVlcy86aWQnLCBjb21wb25lbnQ6IFZlbnVlRWRpdG9yQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdmaXh0dXJlLWRlZmluaXRpb25zJywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbnNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMvbmV3JywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZml4dHVyZS1kZWZpbml0aW9ucy86bWFudWZhY3R1cmVyLzptb2RlbCcsIGNvbXBvbmVudDogRml4dHVyZURlZmluaXRpb25FZGl0b3JDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ3NldHMnIH1cbiAgICAgICAgXSlcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlXG57XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgYm9keS1jb250ZW50XFxcIj5cXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xcbiAgICAuYm9keS1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0ICogZnJvbSAnLi9taW4tdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWF4LXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgTWluVmFsdWVWYWxpZGF0b3IgfSBmcm9tICcuL21pbi12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWF4VmFsdWVWYWxpZGF0b3IgfSBmcm9tICcuL21heC12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBjb25zdCBNSU5NQVhfRElSRUNUSVZFUzogW2FueV0gPSBbTWluVmFsdWVWYWxpZGF0b3IsIE1heFZhbHVlVmFsaWRhdG9yXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwiaW1wb3J0IHsgQXR0cmlidXRlLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTUlOX1ZBTFVFX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1pblZhbHVlVmFsaWRhdG9yKSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW21pbl1bZm9ybUNvbnRyb2xOYW1lXSxbbWluXVtmb3JtQ29udHJvbF0sW21pbl1bbmdNb2RlbF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbTUlOX1ZBTFVFX1ZBTElEQVRPUl0sXHJcbiAgICBob3N0OiB7ICdbYXR0ci5taW5dJzogJ21pbiA/IG1pbiA6IDAnIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNaW5WYWx1ZVZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25DaGFuZ2VzXHJcbntcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XHJcblxyXG4gICAgQElucHV0KCkgbWluOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIEBBdHRyaWJ1dGUoJ21pbicpIG1uOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG1uICE9PSB1bmRlZmluZWQgJiYgbW4gIT09IG51bGwpXHJcbiAgICAgICAge1x0Ly8gaXNQcmVzZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHBhcnNlSW50KG1uLCAxMCk7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oYXR0clZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW4gPSBtbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbWluQ2hhbmdlID0gY2hhbmdlc1snbWluJ107XHJcbiAgICAgICAgaWYgKG1pbkNoYW5nZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVWYWxpZGF0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IE1pblZhbHVlVmFsaWRhdG9yLm1pbihwYXJzZUludCh0aGlzLm1pbiwgMTApKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcihjKTsgfVxyXG5cclxuICAgIHN0YXRpYyBtaW4obW46IG51bWJlcik6IFZhbGlkYXRvckZuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9ICtjb250cm9sLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gKHYgPCBtbiA/IHsgJ21pbic6IHsgJ21pblZhbHVlJzogbW4sICdhY3R1YWxWYWx1ZSc6IHYgfSB9IDogbnVsbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L21pbi12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgQXR0cmlidXRlLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjb25zdCBNQVhfVkFMVUVfVkFMSURBVE9SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF4VmFsdWVWYWxpZGF0b3IpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbWF4XVtmb3JtQ29udHJvbE5hbWVdLFttaW5dW2Zvcm1Db250cm9sXSxbbWluXVtuZ01vZGVsXScsXHJcbiAgICBwcm92aWRlcnM6IFtNQVhfVkFMVUVfVkFMSURBVE9SXSxcclxuICAgIGhvc3Q6IHsgJ1thdHRyLm1heF0nOiAnbWF4ID8gbWF4IDogMCcgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1heFZhbHVlVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkNoYW5nZXNcclxue1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcclxuXHJcbiAgICBASW5wdXQoKSBtYXg6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQEF0dHJpYnV0ZSgnbWF4JykgbXg6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAobXggIT09IHVuZGVmaW5lZCAmJiBteCAhPT0gbnVsbClcclxuICAgICAgICB7XHQvLyBpc1ByZXNlbnRcclxuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gcGFyc2VJbnQobXgsIDEwKTtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihhdHRyVmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heCA9IG14O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtYXhDaGFuZ2UgPSBjaGFuZ2VzWydtYXgnXTtcclxuICAgICAgICBpZiAobWF4Q2hhbmdlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gTWF4VmFsdWVWYWxpZGF0b3IubWF4KHBhcnNlSW50KHRoaXMubWF4LCAxMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0geyByZXR1cm4gdGhpcy5fdmFsaWRhdG9yKGMpOyB9XHJcblxyXG4gICAgc3RhdGljIG1heChteDogbnVtYmVyKTogVmFsaWRhdG9yRm5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gK2NvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiAodiA+IG14ID8geyAnbWF4JzogeyAnbWF4VmFsdWUnOiBteCwgJ2FjdHVhbFZhbHVlJzogdiB9IH0gOiBudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWF4LXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEVsZW1lbnRSZWYsIElucHV0LCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3VuaXF1ZV1bbmdNb2RlbF0sW3VuaXF1ZV1bZm9ybUNvbnRyb2xdJyxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVW5pcXVlVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsaWRhdG9yXHJcbntcclxuICAgIEBJbnB1dCgpIHVuaXF1ZTogYW55W107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHZhbGlkYXRlKGM6IEZvcm1Db250cm9sKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnVuaXF1ZSA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYXRjaGVzID0gdGhpcy51bmlxdWUuZmlsdGVyKCh2YWx1ZTogYW55KSA9PiBjLnZhbHVlID09PSB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGMuZGlydHkgJiYgbWF0Y2hlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdW5pcXVlOiB7IHZhbGlkOiBmYWxzZSB9IH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91bmlxdWUvdW5pcXVlLmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudFxue1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI215TmF2YmFyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj4gXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiI1xcXCI+S2FkbWl1bSBPU0MgRE1YPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcXFwiIGlkPVxcXCJteU5hdmJhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9kYXNoYm9hcmRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWhvbWVcXFwiPjwvc3Bhbj4gSG9tZTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY29nXFxcIj48L3NwYW4+IFNldHVwXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9zZXR0aW5nc1xcXCI+U2V0dGluZ3M8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48YSByb3V0ZXJMaW5rPVxcXCIvZ3JvdXBzXFxcIj5Hcm91cHM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiL3ZlbnVlc1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3RcXFwiPjwvc3Bhbj4gVmVudWVzPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi9maXh0dXJlLWRlZmluaXRpb25zXFxcIj4gPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdFxcXCI+PC9zcGFuPiBGaXh0dXJlIERlZmluaXRpb25zPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9uYXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdGF0dXMtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNQYW5lbENvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdHVzOiBTdGF0dXM7XHJcbiAgICBASW5wdXQoXCJuYW1lXCIpIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBuZXcgU3RhdHVzKFwiVW5rbm93blwiLCBcIlVua25vd25cIik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIFN0YXR1c1xyXG57XHJcbiAgICBzdGF0aWMgU3RhdHVzVGFibGU6IFN0YXR1c1RhYmxlID0ge1xyXG4gICAgICAgIFN1Y2Nlc3M6IHsgYWxlcnRTdHlsZTogXCJhbGVydC1zdWNjZXNzXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24tb2stc2lnblwiIH0sXHJcbiAgICAgICAgRXJyb3I6IHsgYWxlcnRTdHlsZTogXCJhbGVydC1kYW5nZXJcIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1yZW1vdmUtc2lnblwiIH0sXHJcbiAgICAgICAgV2FybmluZzogeyBhbGVydFN0eWxlOiBcImFsZXJ0LXdhcm5pbmdcIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1pbmZvLXNpZ25cIiB9LFxyXG4gICAgICAgIFVua25vd246IHsgYWxlcnRTdHlsZTogXCJhbGVydC1pbmZvXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24tcXVlc3Rpb24tc2lnblwiIH1cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNvZGU6IFN0YXR1c0NvZGU7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvZGU6IFN0YXR1c0NvZGUsIG1lc3NhZ2U6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShjb2RlOiBTdGF0dXNDb2RlLCBtZXNzYWdlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWxlcnRTdHlsZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3RhdHVzLlN0YXR1c1RhYmxlW3RoaXMuY29kZV0uYWxlcnRTdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGdseXBoSWNvbigpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3RhdHVzLlN0YXR1c1RhYmxlW3RoaXMuY29kZV0uZ2x5cGhJY29uO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0dXNDb2RlID0gXCJVbmtub3duXCIgfCBcIkVycm9yXCIgfCBcIlN1Y2Nlc3NcIiB8IFwiV2FybmluZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0dXNUYWJsZVxyXG57XHJcbiAgICBba2V5OiBzdHJpbmddOiBTdGF0dXNJbmZvO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzSW5mb1xyXG57XHJcbiAgICBhbGVydFN0eWxlOiBzdHJpbmc7XHJcbiAgICBnbHlwaEljb246IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHQgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj57e25hbWV9fSA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgW25nQ2xhc3NdPVxcXCJzdGF0dXMuYWxlcnRTdHlsZVxcXCI+XFxyXFxuICAgICAgICB7e3N0YXR1cy5tZXNzYWdlfX08YnI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIHN0YXR1cy1nbHlwaFxcXCIgW25nQ2xhc3NdPVxcXCJzdGF0dXMuZ2x5cGhJY29uXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhdHVzLWdseXBoIHtcXHJcXG4gICAgZm9udC1zaXplOiA2ZW07XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzLCBTdGF0dXNDb2RlIH0gZnJvbSBcIi4uL3N0YXR1c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21lc3NhZ2UtYmFyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCYXJDb21wb25lbnRcclxue1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlczogU3RhdHVzW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZShzdGF0dXM6IFN0YXR1cylcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm1lc3NhZ2VzLmluZGV4T2Yoc3RhdHVzKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChzdGF0dXNDb2RlOiBTdGF0dXNDb2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBTdGF0dXMoc3RhdHVzQ29kZSwgbWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnRcXFwiIFtuZ0NsYXNzXT1cXFwibWVzc2FnZS5hbGVydFN0eWxlXFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjbG9zZVxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlKG1lc3NhZ2UpXFxcIiBhcmlhLWxhYmVsPVxcXCJjbG9zZVxcXCI+JnRpbWVzOzwvYT5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb25cXFwiIFtuZ0NsYXNzXT1cXFwibWVzc2FnZS5nbHlwaEljb25cXFwiPjwvc3Bhbj4ge3ttZXNzYWdlLm1lc3NhZ2V9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGFiZWxsZWQtaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxsZWRJbnB1dENvbXBvbmVudFxyXG57XHJcbiAgICBASW5wdXQoKSBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAQ29udGVudENoaWxkKFwibW9kZWxcIikgcHVibGljIG1vZGVsOiBFbGVtZW50UmVmO1xyXG4gICAgQENvbnRlbnRDaGlsZChcImlucHV0XCIpIHB1YmxpYyBpbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IG1vZGVsLmVycm9ycyAmJiBtb2RlbC50b3VjaGVkfVxcXCI+XFxyXFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtc20tMlxcXCIgW2F0dHIuZm9yXT1cXFwiaW5wdXQubmFtZVxcXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/LnJlcXVpcmVkXFxcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ubWluXFxcIj5UaGlzIGZpZWxkIGhhcyBhIG1pbmltdW0gdmFsdWUgb2Yge3ttb2RlbC5lcnJvcnM/Lm1pbi5taW5WYWx1ZX19PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ubWF4XFxcIj5UaGlzIGZpZWxkIGhhcyBhIG1heGltdW0gdmFsdWUgb2Yge3ttb2RlbC5lcnJvcnM/Lm1heC5tYXhWYWx1ZX19PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmRpcnR5ICYmIG1vZGVsLmVycm9ycz8udW5pcXVlXFxcIj5FbnRyaWVzIGluIHRoaXMgZmllbGQgbXVzdCBiZSB1bmlxdWU8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFibGUtaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGFibGUtaW5wdXQuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVJbnB1dENvbXBvbmVudFxyXG57XHJcbiAgICBASW5wdXQoKSBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAQ29udGVudENoaWxkKFwibW9kZWxcIikgcHVibGljIG1vZGVsOiBFbGVtZW50UmVmO1xyXG4gICAgQENvbnRlbnRDaGlsZChcImlucHV0XCIpIHB1YmxpYyBpbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzogbW9kZWwuZXJyb3JzICYmIG1vZGVsLnRvdWNoZWQgfVxcXCI+XFxyXFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/LnJlcXVpcmVkXFxcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5taW5cXFwiPlRoaXMgZmllbGQgaGFzIGEgbWluaW11bSB2YWx1ZSBvZiB7e21vZGVsLmVycm9ycz8ubWluLm1pblZhbHVlfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/Lm1heFxcXCI+VGhpcyBmaWVsZCBoYXMgYSBtYXhpbXVtIHZhbHVlIG9mIHt7bW9kZWwuZXJyb3JzPy5tYXgubWF4VmFsdWV9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8udW5pcXVlXFxcIj5FbnRyaWVzIGluIHRoaXMgZmllbGQgbXVzdCBiZSB1bmlxdWU8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb25maXJtYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKFwiLi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1wiKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwiY29uZmlybWF0aW9uXCIpIGNvbmZpcm1hdGlvbjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBoZWFkZXI6IHN0cmluZztcclxuICAgIGJvZHk6IHN0cmluZztcclxuICAgIGFjY2VwdFZlcmI6IHN0cmluZztcclxuICAgIGNhbmNlbFZlcmI6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB2aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHJlc29sdmU6ICh2YWx1ZT86IGJvb2xlYW4gfCBQcm9taXNlTGlrZTxib29sZWFuPikgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcilcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coaGVhZGVyOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgYWNjZXB0VmVyYjogc3RyaW5nLCBjYW5jZWxWZXJiOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICAgICAgICB0aGlzLmFjY2VwdFZlcmIgPSBhY2NlcHRWZXJiO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsVmVyYiA9IGNhbmNlbFZlcmI7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGVBbmltYXRlID0gdHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGUgPSBmYWxzZSwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0Q2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsQ2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgI2NvbmZpcm1hdGlvbiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBbbmdDbGFzc109XFxcInsnaW4nOiB2aXNpYmxlQW5pbWF0ZX1cXFwiIFtuZ1N0eWxlXT1cXFwieydkaXNwbGF5JzogdmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScsICdvcGFjaXR5JzogdmlzaWJsZUFuaW1hdGUgPyAxIDogMH1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcbiAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxDbGljaygpXFxcIj4mdGltZXM7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPnt7aGVhZGVyfX08L2g0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cD57e2JvZHl9fTwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiYWNjZXB0Q2xpY2soKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+e3thY2NlcHRWZXJifX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIChjbGljayk9XFxcImNhbmNlbENsaWNrKClcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPnt7Y2FuY2VsVmVyYn19PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaW5wdXQtYm94JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2lucHV0LWJveC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZShcIi4vaW5wdXQtYm94LmNvbXBvbmVudC5jc3NcIildXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEJveENvbXBvbmVudFxyXG57XHJcbiAgICBoZWFkZXI6IHN0cmluZztcclxuICAgIGJvZHk6IHN0cmluZztcclxuICAgIGFjY2VwdFZlcmI6IHN0cmluZztcclxuICAgIGNhbmNlbFZlcmI6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB2aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHN0cmluZyB8IFByb21pc2VMaWtlPHN0cmluZz4pID0+IHZvaWQ7XHJcbiAgICByZWplY3Q6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZXNwb25zZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KGhlYWRlcjogc3RyaW5nLCBib2R5OiBzdHJpbmcsIGFjY2VwdFZlcmI6IHN0cmluZywgY2FuY2VsVmVyYjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICAgICAgICB0aGlzLmFjY2VwdFZlcmIgPSBhY2NlcHRWZXJiO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsVmVyYiA9IGNhbmNlbFZlcmI7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGVBbmltYXRlID0gdHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGUgPSBmYWxzZSwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0Q2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsQ2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2luJzogdmlzaWJsZUFuaW1hdGV9XFxcIiBbbmdTdHlsZV09XFxcInsnZGlzcGxheSc6IHZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnLCAnb3BhY2l0eSc6IHZpc2libGVBbmltYXRlID8gMSA6IDB9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIj5cXHJcXG4gICAgICAgIDwhLS0gTW9kYWwgY29udGVudC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxDbGljaygpXFxcIj4mdGltZXM7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj57e2hlYWRlcn19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsbGVkLWlucHV0IFtsYWJlbF09XFxcImJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVzcG9uc2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkIFtuYW1lXT1cXFwiaW5wdXRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJhY2NlcHRDbGljaygpXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj57e2FjY2VwdFZlcmJ9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiY2FuY2VsQ2xpY2soKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+e3tjYW5jZWxWZXJifX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQtYm94LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWwge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNQYW5lbENvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi4vdmVudWVzL3ZlbnVlLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFN0YXR1c0NvZGUgfSBmcm9tIFwiLi4vc3RhdHVzL3N0YXR1c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1ZlbnVlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcInZlbnVlXCIpIHZlbnVlOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJzYWNuVHJhbnNtaXR0ZXJcIikgc2FjblRyYW5zbWl0dGVyOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJvc2NMaXN0ZW5lclwiKSBvc2NMaXN0ZW5lcjogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiZml4dHVyZXNcIikgZml4dHVyZXM6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgd2ViU29ja2V0OiBXZWJTb2NrZXQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ja2V0VVJMID0gZ2V0U29ja2V0VVJMKFwiSW5kZXhcIik7XHJcbiAgICBwcml2YXRlIHZlbnVlTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmVudWVTZXJ2aWNlOiBWZW51ZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdmVudWVTZXJ2aWNlLmdldE5hbWVzKClcclxuICAgICAgICAgICAgLnRoZW4obmFtZXMgPT4gdGhpcy52ZW51ZU5hbWVzID0gbmFtZXMpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uOiBhbnkpID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB0aGlzLndlYlNvY2tldCA9IG5ldyBXZWJTb2NrZXQoRGFzaGJvYXJkQ29tcG9uZW50LnNvY2tldFVSTCk7XHJcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2OiBNZXNzYWdlRXZlbnQpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gSlNPTi5wYXJzZShldi5kYXRhKSBhcyBTdGF0dXNEYXRhO1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzUGFuZWw6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cy5jb250cm9sbGVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiVmVudWVzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLnZlbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNBQ05UcmFuc21pdHRlcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMuc2FjblRyYW5zbWl0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk9TQ0xpc3RlbmVyc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy5vc2NMaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkZpeHR1cmVzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLmZpeHR1cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdHVzUGFuZWwuc3RhdHVzLnVwZGF0ZShzdGF0dXMuY29kZSwgc3RhdHVzLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlVmVudWUodmVudWVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52ZW51ZVNlcnZpY2VcclxuICAgICAgICAgICAgLmFjdGl2YXRlKHZlbnVlTmFtZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgdmVudWVOYW1lICsgXCIgc3VjY2Vzc2Z1bGx5IGxvYWRlZFwiKSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXR1c0RhdGFcclxue1xyXG4gICAgY29kZTogU3RhdHVzQ29kZTtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIGNvbnRyb2xsZXI6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U29ja2V0VVJMKGNvbnRyb2xsZXI6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYWN0aW9uVVJMID0gZ2V0QWN0aW9uVVJMKGNvbnRyb2xsZXIsIFwiU29ja2V0XCIpO1xyXG4gICAgbGV0IHNvY2tldFVSTCA9IGFjdGlvblVSTC5yZXBsYWNlKFwiaHR0cFwiLCBcIndzXCIpO1xyXG4gICAgcmV0dXJuIHNvY2tldFVSTDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWN0aW9uVVJMKC4uLnBhcnRzOiBzdHJpbmdbXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgb3JpZ2luYWxVUkw6IHN0cmluZyA9IGRvY3VtZW50LlVSTDtcclxuICAgIGxldCB1cmxQYXJ0czogc3RyaW5nW10gPSBkb2N1bWVudC5VUkwuc3BsaXQoXCIvXCIpO1xyXG4gICAgbGV0IHByb3RvY29sOiBzdHJpbmcgPSB1cmxQYXJ0c1swXTtcclxuICAgIGxldCBob3N0OiBzdHJpbmcgPSB1cmxQYXJ0c1syXTtcclxuXHJcbiAgICBsZXQgcm9vdDogc3RyaW5nID0gcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0O1xyXG5cclxuICAgIGxldCBwYXJ0c0pvaW5lZCA9IHBhcnRzLmpvaW4oXCIvXCIpO1xyXG5cclxuICAgIHJldHVybiByb290ICsgXCIvXCIgKyBwYXJ0c0pvaW5lZDtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBWZW51ZSB9IGZyb20gXCIuL3ZlbnVlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWZW51ZVNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSB2ZW51ZVVybCA9IFwiL2FwaS9WZW51ZVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldChpZDogc3RyaW5nKTogUHJvbWlzZTxWZW51ZT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlVXJsICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBWZW51ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5hbWVzKCk6IFByb21pc2U8c3RyaW5nW10+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBzdHJpbmdbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGl2YXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybCArIFwiL2FjdGl2YXRlL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXQoaWQ6IHN0cmluZywgdmVudWU6IFZlbnVlKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMudmVudWVVcmwgKyBcIi9cIiArIGlkLCB2ZW51ZSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPkRhc2hib2FyZDwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjdmVudWUgbmFtZT1cXFwiVmVudWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiAqbmdJZj1cXFwidmVudWVOYW1lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIj5Mb2FkIFZlbnVlXFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IHZlbnVlTmFtZSBvZiB2ZW51ZU5hbWVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJhY3RpdmF0ZVZlbnVlKHZlbnVlTmFtZSlcXFwiPnt7dmVudWVOYW1lfX08L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICNzYWNuVHJhbnNtaXR0ZXIgbmFtZT1cXFwic0FDTiBUcmFuc21pdHRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm91dGVyTGluaz1cXFwiL3NhY25UcmFuc21pdHRlckxpdmVcXFwiPkxpdmU8L2E+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI29zY0xpc3RlbmVyIG5hbWU9XFxcIk9TQyBMaXN0ZW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm91dGVyTGluaz1cXFwiL29zY0xpc3RlbmVyTGl2ZVxcXCI+TGl2ZTwvYT5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjZml4dHVyZXMgbmFtZT1cXFwiRml4dHVyZXNcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9maXh0dXJlc0xpdmVcXFwiPkxpdmU8L2E+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuL3NldHRpbmdzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3MsIFVuaWNhc3RUYXJnZXQgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuXHJcbnZhciAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZXR0aW5ncycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbU2V0dGluZ3NTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIHNldHRpbmdzOiBTZXR0aW5ncztcclxuICAgIHNhdmluZzogYm9vbGVhbjtcclxuICAgIHRlc3RFbGVtZW50OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nc1NlcnZpY2U6IFNldHRpbmdzU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRlc3RFbGVtZW50ID0gXCJzdHVmZlwiO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1NlcnZpY2UuZ2V0KCkudGhlbihkYXRhID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2F2ZSgpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXR0aW5nc1NlcnZpY2Uuc2F2ZSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgXCJTYXZlZCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChyZWFzb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRhcmdldCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIudW5pY2FzdC5wdXNoKG5ldyBVbmljYXN0VGFyZ2V0KFwiXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlVGFyZ2V0KGluZGV4OiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIudW5pY2FzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGF0ZVRhcmdldHMoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBiYWRUYXJnZXRzID0gdGhpcy5zZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIudW5pY2FzdC5maWx0ZXIoKHZhbHVlOiBVbmljYXN0VGFyZ2V0KSA9PiB2YWx1ZS50YXJnZXQgPT0gXCJcIiB8fCB2YWx1ZS50YXJnZXQgPT0gdW5kZWZpbmVkIHx8IHZhbHVlLnRhcmdldCA9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gYmFkVGFyZ2V0cy5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IFNldHRpbmdzLCBTZXR0aW5nc0RhdGEgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgc2V0dGluZ3NVcmwgPSBcIi9hcGkvU2V0dGluZ3NcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxTZXR0aW5ncz5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNldHRpbmdzVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIFNldHRpbmdzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3MuZGVzZXJpYWxpemUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZShkYXRhOiBTZXR0aW5ncyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXR0aW5nc1VybCwgZGF0YS5zZXJpYWxpemUoKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiBcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTsgLy8gZm9yIGRlbW8gcHVycG9zZXMgb25seVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIFNldHRpbmdzXHJcbntcclxuICAgIHdlYlBvcnQ6IG51bWJlcjtcclxuICAgIG9zY1BvcnQ6IG51bWJlcjtcclxuICAgIHNhY25UcmFuc21pdHRlcjogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud2ViUG9ydCA9IDgwO1xyXG4gICAgICAgIHRoaXMub3NjUG9ydCA9IDkwMDA7XHJcbiAgICAgICAgdGhpcy5zYWNuVHJhbnNtaXR0ZXIgPSBuZXcgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplKGRhdGE6IFNldHRpbmdzRGF0YSk6IFNldHRpbmdzXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XHJcbiAgICAgICAgc2V0dGluZ3Mud2ViUG9ydCA9IGRhdGEud2ViUG9ydDtcclxuICAgICAgICBzZXR0aW5ncy5vc2NQb3J0ID0gZGF0YS5vc2NQb3J0O1xyXG4gICAgICAgIHNldHRpbmdzLnNhY25UcmFuc21pdHRlciA9IFNBQ05UcmFuc21pdHRlclNldHRpbmdzLmRlc2VyaWFsaXplKGRhdGEuc2FjblRyYW5zbWl0dGVyKTtcclxuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBTZXR0aW5nc0RhdGFcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogU2V0dGluZ3NEYXRhID0ge1xyXG4gICAgICAgICAgICB3ZWJQb3J0OiB0aGlzLndlYlBvcnQsXHJcbiAgICAgICAgICAgIG9zY1BvcnQ6IHRoaXMub3NjUG9ydCxcclxuICAgICAgICAgICAgc2FjblRyYW5zbWl0dGVyOiB0aGlzLnNhY25UcmFuc21pdHRlci5zZXJpYWxpemUoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc1xyXG57XHJcbiAgICBkZWxheTogbnVtYmVyO1xyXG4gICAgbXVsdGljYXN0OiBib29sZWFuO1xyXG4gICAgdW5pY2FzdDogVW5pY2FzdFRhcmdldFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlbGF5ID0gMDtcclxuICAgICAgICB0aGlzLm11bHRpY2FzdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51bmljYXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZShkYXRhOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGEpOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc1xyXG4gICAge1xyXG4gICAgICAgIGxldCB0cmFuc21pdHRlciA9IG5ldyBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncygpO1xyXG4gICAgICAgIHRyYW5zbWl0dGVyLmRlbGF5ID0gZGF0YS5kZWxheTtcclxuICAgICAgICB0cmFuc21pdHRlci5tdWx0aWNhc3QgPSBkYXRhLm11bHRpY2FzdDtcclxuICAgICAgICB0cmFuc21pdHRlci51bmljYXN0ID0gZGF0YS51bmljYXN0Lm1hcCgodmFsdWU6IHN0cmluZykgPT4gbmV3IFVuaWNhc3RUYXJnZXQodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4gdHJhbnNtaXR0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGFcclxuICAgIHtcclxuICAgICAgICBsZXQgZGF0YTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhID0ge1xyXG4gICAgICAgICAgICBkZWxheTogdGhpcy5kZWxheSxcclxuICAgICAgICAgICAgbXVsdGljYXN0OiB0aGlzLm11bHRpY2FzdCxcclxuICAgICAgICAgICAgdW5pY2FzdDogdGhpcy51bmljYXN0Lm1hcCgodmFsdWU6IFVuaWNhc3RUYXJnZXQpID0+IHZhbHVlLnRhcmdldClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVW5pY2FzdFRhcmdldFxyXG57XHJcbiAgICB0YXJnZXQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzRGF0YVxyXG57XHJcbiAgICB3ZWJQb3J0OiBudW1iZXI7XHJcbiAgICBvc2NQb3J0OiBudW1iZXI7XHJcbiAgICBzYWNuVHJhbnNtaXR0ZXI6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGFcclxue1xyXG4gICAgZGVsYXk6IG51bWJlcjtcclxuICAgIG11bHRpY2FzdDogYm9vbGVhbjtcclxuICAgIHVuaWNhc3Q6IHN0cmluZ1tdO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5TZXR0aW5nczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPHAgKm5nSWY9XFxcIiFzZXR0aW5nc1xcXCI+TG9hZGluZy4uLjwvcD5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwic2V0dGluZ3NcXFwiIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiICNzZXR0aW5nc0Zvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgIDxmaWVsZHNldCBbZGlzYWJsZWRdPVxcXCJzYXZpbmdcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJIVFRQIFBvcnQ6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwid2ViUG9ydFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjY1NTM1XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Mud2ViUG9ydFxcXCIgI21vZGVsPVxcXCJuZ01vZGVsXFxcIlxcclxcbiAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJPU0MgUG9ydDpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgcmVxdWlyZWQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJvc2NQb3J0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNjU1MzVcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5vc2NQb3J0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIC8+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJzQUNOIFRyYW5zbWl0dGVyIERlbGF5IChtcyk6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwic2FjblRyYW5zbWl0dGVyRGVsYXlcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMDAwMFxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLnNhY25UcmFuc21pdHRlci5kZWxheVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiAvPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwic0FDTiBUcmFuc21pdHRlciBNdWx0aWNhc3Q6XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgI2lucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJzYWNuTXVsdGljYXN0XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLm11bHRpY2FzdFxcXCIgI3NhY25NdWx0aWNhc3Q9XFxcIm5nTW9kZWxcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgPk11bHRpY2FzdDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+c0FDTiBVbmljYXN0IFRhcmdldHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZGRyZXNzPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHRhcmdldCBvZiBzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIudW5pY2FzdDsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBjb2wtc20tOFxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0W2ldLnRhcmdldFxcXCIgW25hbWVdPVxcXCIndW5pY2FzdFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVUYXJnZXQoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGRUYXJnZXQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNhdmUoKVxcXCIgW2Rpc2FibGVkXT1cXFwiIXNldHRpbmdzRm9ybS52YWxpZFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gXCIuL2dyb3VwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi9ncm91cFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyb3VwcycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ncm91cHMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0dyb3VwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyb3Vwc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG5cclxuICAgIHNhdmluZzogYm9vbGVhbjtcclxuICAgIGdyb3VwczogR3JvdXBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyb3Vwc1NlcnZpY2U6IEdyb3VwU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBHcm91cFtdKSA9PiB0aGlzLmdyb3VwcyA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKG5ldyBHcm91cChcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGUoZ3JvdXA6IEdyb3VwKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlKGdyb3VwOiBHcm91cCwgb2Zmc2V0OiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9sZF9pbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xyXG4gICAgICAgIGxldCBuZXdfaW5kZXggPSBvbGRfaW5kZXggKyBvZmZzZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShuZXdfaW5kZXgsIDAsIHRoaXMuZ3JvdXBzLnNwbGljZShvbGRfaW5kZXgsIDEpWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5ncm91cHMuZXZlcnkoKHZhbHVlOiBHcm91cCkgPT4gdmFsdWUubmFtZSAhPSBcIlwiICYmIHZhbHVlLm5hbWUgIT0gdW5kZWZpbmVkICYmIHZhbHVlLm5hbWUgIT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBncm91cE5hbWVzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzLm1hcCgodmFsdWU6IEdyb3VwKSA9PiB2YWx1ZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ3JvdXBzU2VydmljZS5wdXQodGhpcy5ncm91cHMpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBcIlNhdmVkIHN1Y2Nlc3NmdWxseVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAocmVhc29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL2dyb3VwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm91cFNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBncm91cHNVcmwgPSBcIi9hcGkvR3JvdXBcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxHcm91cFtdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ3JvdXBzVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIHN0cmluZ1tdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsdWU6IHN0cmluZykgPT4gbmV3IEdyb3VwKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXQoZ3JvdXBzOiBHcm91cFtdKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuZ3JvdXBzVXJsLCBncm91cHMubWFwKCh2YWx1ZTogR3JvdXApID0+IHZhbHVlLm5hbWUpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXAuc2VydmljZS50cyIsImV4cG9ydCBjbGFzcyBHcm91cFxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXAudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+R3JvdXBzPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwiZ3JvdXBzXFxcIiAjZ3JvdXBzRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgPGZpZWxkc2V0IFtkaXNhYmxlZF09XFxcInNhdmluZ1xcXCI+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZGVyPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZ3JvdXAgb2YgZ3JvdXBzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIChjbGljayk9XFxcIm1vdmUoZ3JvdXAsIC0xKVxcXCIgW2Rpc2FibGVkXT1cXFwiaSA9PSAwXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy11cFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKGNsaWNrKT1cXFwibW92ZShncm91cCwgMSlcXFwiIFtkaXNhYmxlZF09XFxcImkgPT0gZ3JvdXBzLmxlbmd0aCAtIDFcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWRvd25cXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgW3VuaXF1ZV09XFxcImdyb3VwTmFtZXNcXFwiICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJncm91cC5uYW1lXFxcIiBbbmFtZV09XFxcIidncm91cE5hbWVbJyArIGkgKyAnXSdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGUoZ3JvdXApXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+IEFkZDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIFtkaXNhYmxlZF09XFxcIiFncm91cHNGb3JtLnZhbGlkXFxcIiAoY2xpY2spPVxcXCJzYXZlKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2ZpZWxkc2V0PlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZlbnVlU2VydmljZSB9IGZyb20gXCIuL3ZlbnVlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2ZW51ZXMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdmVudWVzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtWZW51ZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW51ZXNDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIGRhdGE6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmVudWVTZXJ2aWNlOiBWZW51ZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52ZW51ZVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldE5hbWVzKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBzdHJpbmdbXSkgPT4gdGhpcy5kYXRhID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RWRpdFVybChlbnRyeTogVmVudWVTa2VsZXRvbilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gXCJ2ZW51ZXMvXCIgKyBlbnRyeS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IHZlbnVlcygpOiBWZW51ZVNrZWxldG9uW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgodmFsdWU6IHN0cmluZykgPT4geyByZXR1cm4geyBuYW1lOiB2YWx1ZSB9IH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBWZW51ZVNrZWxldG9uXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5WZW51ZXM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCIgKm5nSWY9XFxcImRhdGFcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPlZlbnVlPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RoZWFkPlxcclxcbiAgICA8dGJvZHk+XFxyXFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgdmVudWVzXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+e3tlbnRyeS5uYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIFtocmVmXT1cXFwiZ2V0RWRpdFVybChlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlQ29uZmlybShlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG48Y29uZmlybWF0aW9uICNjb25maXJtYXRpb24+PC9jb25maXJtYXRpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuLi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVbml2ZXJzZUVkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRml4dHVyZU9wdGlvbnNFZGl0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnB1dEJveENvbXBvbmVudCB9IGZyb20gXCIuLi9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVmVudWUsIFVuaXZlcnNlLCBGaXh0dXJlIH0gZnJvbSBcIi4vdmVudWVcIjtcclxuXHJcbmltcG9ydCB7IFZlbnVlU2VydmljZSB9IGZyb20gXCIuL3ZlbnVlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2ZW51ZS1lZGl0b3InLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdmVudWUtZWRpdG9yLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtWZW51ZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZW51ZUVkaXRvckNvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImNvbmZpcm1hdGlvblwiKSBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbkNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJ1bml2ZXJzZUVkaXRvclwiKSB1bml2ZXJzZUVkaXRvcjogVW5pdmVyc2VFZGl0b3JDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiaW5wdXRCb3hcIikgaW5wdXRCb3g6IElucHV0Qm94Q29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImZpeHR1cmVPcHRpb25zRWRpdG9yXCIpIGZpeHR1cmVPcHRpb25zRWRpdG9yOiBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIG9yaWdpbmFsTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzYXZpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSB2ZW51ZTogVmVudWU7XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZFVuaXZlcnNlOiBVbml2ZXJzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSB2ZW51ZVNlcnZpY2U6IFZlbnVlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTmV3SXRlbSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52ZW51ZSA9IG5ldyBWZW51ZSgpO1xyXG4gICAgICAgICAgICBsZXQgdW5pdmVyc2UgPSBuZXcgVW5pdmVyc2UoKTtcclxuICAgICAgICAgICAgdW5pdmVyc2UubmFtZSA9IFwiRGVmYXVsdCBVbml2ZXJzZVwiO1xyXG4gICAgICAgICAgICB1bml2ZXJzZS51bml2ZXJzZUlEID0gMTtcclxuICAgICAgICAgICAgdGhpcy52ZW51ZS51bml2ZXJzZXMucHVzaCh1bml2ZXJzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVbml2ZXJzZSA9IHVuaXZlcnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZlbnVlU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLmdldCh0aGlzLm9yaWdpbmFsTmFtZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogVmVudWUpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW51ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVbml2ZXJzZSA9IHRoaXMudmVudWUudW5pdmVyc2VzLmxlbmd0aCA+IDAgPyB0aGlzLnZlbnVlLnVuaXZlcnNlc1swXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05ld0l0ZW0oKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsTmFtZSA9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVW5pdmVyc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB1bml2ZXJzZSA9IG5ldyBVbml2ZXJzZSgpO1xyXG4gICAgICAgIHVuaXZlcnNlLm5hbWUgPSBcIk5ldyBVbml2ZXJzZVwiO1xyXG4gICAgICAgIGxldCBtYXhOdW1iZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudmVudWUudW5pdmVyc2VzLmZvckVhY2godmFsdWUgPT4geyBpZiAodmFsdWUudW5pdmVyc2VJRCA+IG1heE51bWJlcikgeyBtYXhOdW1iZXIgPSB2YWx1ZS51bml2ZXJzZUlEIH0gfSk7XHJcbiAgICAgICAgdW5pdmVyc2UudW5pdmVyc2VJRCA9IG1heE51bWJlciArIDE7XHJcbiAgICAgICAgdGhpcy52ZW51ZS51bml2ZXJzZXMucHVzaCh1bml2ZXJzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVVbml2ZXJzZShpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB1bml2ZXJzZSA9IHRoaXMudmVudWUudW5pdmVyc2VzW2luZGV4XTtcclxuICAgICAgICB0aGlzLnZlbnVlLnVuaXZlcnNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVW5pdmVyc2UgPT0gdW5pdmVyc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVW5pdmVyc2UgPSB0aGlzLnZlbnVlLnVuaXZlcnNlc1tpbmRleCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5pc05ld0l0ZW0oKSA/IHRoaXMudmVudWUubmFtZSA6IHRoaXMub3JpZ2luYWxOYW1lO1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy52ZW51ZVNlcnZpY2UucHV0KHRoaXMub3JpZ2luYWxOYW1lLCB0aGlzLnZlbnVlKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi92ZW51ZXNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1lZGl0b3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IElucHV0Qm94Q29tcG9uZW50IH0gZnJvbSBcIi4uL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tIFwiYW5ndWxhcjItbW9kYWxcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIlxyXG5pbXBvcnQgeyBWZW51ZVByZXNldFNlcnZpY2UgfSBmcm9tIFwiLi92ZW51ZS1wcmVzZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcm91cFNlcnZpY2UgfSBmcm9tIFwiLi4vZ3JvdXBzL2dyb3VwLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24gfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgVW5pdmVyc2UsIEZpeHR1cmUsIEZpeHR1cmVEZWZpbml0aW9uT3B0aW9ucywgVmVudWVQcmVzZXQgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3VuaXZlcnNlLWVkaXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6IFtGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLCBWZW51ZVByZXNldFNlcnZpY2UsIEdyb3VwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlRWRpdG9yQ29tcG9uZW50XHJcbntcclxuICAgIEBJbnB1dChcInVuaXZlcnNlXCIpIHVuaXZlcnNlOiBVbml2ZXJzZTtcclxuICAgIEBJbnB1dChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBJbnB1dChcImlucHV0Qm94XCIpIGlucHV0Qm94OiBJbnB1dEJveENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJmaXh0dXJlT3B0aW9uc0VkaXRvclwiKSBmaXh0dXJlT3B0aW9uc0VkaXRvcjogRml4dHVyZU9wdGlvbnNFZGl0b3JDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEZpeHR1cmVzOiBGaXh0dXJlW107XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkUHJlc2V0TmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBza2VsZXRvbnM6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXTtcclxuICAgIHByaXZhdGUgdmVudWVQcmVzZXROYW1lczogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIGdyb3Vwczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlOiBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLCBwcml2YXRlIHZlbnVlUHJlc2V0U2VydmljZTogVmVudWVQcmVzZXRTZXJ2aWNlLCBwcml2YXRlIGdyb3VwU2VydmljZTogR3JvdXBTZXJ2aWNlLFxyXG4gICAgICAgIG92ZXJsYXk6IE92ZXJsYXksIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbClcclxuICAgIHtcclxuICAgICAgICBvdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyID0gdmNSZWY7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpeHR1cmVzID0gW107XHJcbiAgICAgICAgdGhpcy52ZW51ZVByZXNldFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldE5hbWVzKClcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gdGhpcy52ZW51ZVByZXNldE5hbWVzID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U2tlbGV0b25zKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB0aGlzLnNrZWxldG9ucyA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVhc29uID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB0aGlzLmdyb3VwU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gdGhpcy5ncm91cHMgPSB2YWx1ZS5tYXAoZ3JwID0+IGdycC5uYW1lKSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNYW51ZmFjdHVyZXJzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2tlbGV0b25zXHJcbiAgICAgICAgICAgIC5tYXAoKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiB2YWx1ZS5tYW51ZmFjdHVyZXIpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpID09IGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1vZGVscyhtYW51ZmFjdHVyZXI6IHN0cmluZyk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2tlbGV0b25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIodmFsdWUgPT4gdmFsdWUubWFudWZhY3R1cmVyID09IG1hbnVmYWN0dXJlcilcclxuICAgICAgICAgICAgLm1hcCh2YWx1ZSA9PiB2YWx1ZS5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlZGl0T3B0aW9ucyhmaXh0dXJlOiBGaXh0dXJlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZml4dHVyZU9wdGlvbnNFZGl0b3JcclxuICAgICAgICAgICAgLnNob3coZml4dHVyZSlcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gZml4dHVyZS5vcHRpb25zID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlRml4dHVyZShpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudW5pdmVyc2UuZml4dHVyZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEZpeHR1cmUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBmaXh0dXJlID0gbmV3IEZpeHR1cmUoKTtcclxuICAgICAgICBmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyID0gdGhpcy5nZXRNYW51ZmFjdHVyZXJzKClbMF07XHJcbiAgICAgICAgZml4dHVyZS50eXBlLm1vZGVsID0gdGhpcy5nZXRNb2RlbHMoZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlcilbMF07XHJcbiAgICAgICAgdGhpcy51bml2ZXJzZS5maXh0dXJlcy5wdXNoKGZpeHR1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNTZWxlY3RlZChmaXh0dXJlOiBGaXh0dXJlKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRml4dHVyZXMuaW5kZXhPZihmaXh0dXJlKSAhPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdEZpeHR1cmUoZml4dHVyZTogRml4dHVyZSwgc2VsZWN0ZWQ6IGJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEZpeHR1cmVzLmluZGV4T2YoZml4dHVyZSk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkICYmIGluZGV4ID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpeHR1cmVzLnB1c2goZml4dHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiBpbmRleCAhPSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaXh0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhdmVQcmVzZXQoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBwcmVzZXQgPSBuZXcgVmVudWVQcmVzZXQoKTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByZXNldC5uYW1lID0gYXdhaXQgdGhpcy5pbnB1dEJveC5zaG93KFwiU2VsZWN0IGEgbmFtZVwiLCBcIk5hbWU6XCIsIFwiU2F2ZVwiLCBcIkNhbmNlbFwiKTtcclxuICAgICAgICAgICAgcHJlc2V0LmZpeHR1cmVzID0gdGhpcy5zZWxlY3RlZEZpeHR1cmVzO1xyXG4gICAgICAgICAgICB0aGlzLnZlbnVlUHJlc2V0U2VydmljZVxyXG4gICAgICAgICAgICAgICAgLnB1dChwcmVzZXQubmFtZSwgcHJlc2V0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBwcmVzZXQubmFtZSArIFwiIHNhdmVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbnVlUHJlc2V0TmFtZXMucHVzaChwcmVzZXQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7IH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQcmVzZXQobmFtZTogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmVudWVQcmVzZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQobmFtZSlcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBWZW51ZVByZXNldCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZml4dHVyZSBvZiB2YWx1ZS5maXh0dXJlcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXZlcnNlLmZpeHR1cmVzLnB1c2goZml4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVtb3ZlUHJlc2V0KG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IGF3YWl0IHRoaXMubW9kYWwuY29uZmlybSgpXHJcbiAgICAgICAgICAgIC50aXRsZShcIkFyZSB5b3Ugc3VyZT9cIilcclxuICAgICAgICAgICAgLmJvZHkoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiICsgbmFtZSArIFwiP1wiKVxyXG4gICAgICAgICAgICAuaXNCbG9ja2luZyh0cnVlKVxyXG4gICAgICAgICAgICAub3BlbigpO1xyXG5cclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBwcm9taXNlLnJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJ5IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudmVudWVQcmVzZXRTZXJ2aWNlLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZlbnVlUHJlc2V0TmFtZXMuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbnVlUHJlc2V0TmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBuYW1lICsgXCIgc3VjY2Vzc2Z1bGx5IHJlbW92ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2Vycm9ycyBhcmUgZ2VuZXJhdGVkIHdoZW4gdGhlIG1lc3NhZ2UgYm94IGlzIGNhbmNlbGxlZFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiXHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlLCBGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnMsIEF4aXNSZXN0cmljdGlvbk9wdGlvbnMgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3InLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZShcIi4vZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuY3NzXCIpXSxcclxuICAgIHByb3ZpZGVyczogW0ZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudFxyXG57XHJcbiAgICBwcml2YXRlIGZpeHR1cmU6IEZpeHR1cmU7XHJcbiAgICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB2aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZGVmaW5pdGlvbjogRml4dHVyZURlZmluaXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSByZXN0cmljdGlvbkF4aXM6IEF4aXNPcHRpb25zW107XHJcblxyXG4gICAgcHJpdmF0ZSByZXNvbHZlOiAodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uT3B0aW9ucykgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgcmVqZWN0OiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZml4dHVyZURlZmluaXRpb25zU2VydmljZTogRml4dHVyZURlZmluaXRpb25zU2VydmljZSlcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGUgPSBmYWxzZSwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdyhmaXh0dXJlOiBGaXh0dXJlKTogUHJvbWlzZTxGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnM+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnM+KChyZXNvbHZlLCByZWplY3QpID0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGVBbmltYXRlID0gdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlID0gZml4dHVyZTtcclxuXHJcbiAgICAgICAgdGhpcy5maXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQodGhpcy5maXh0dXJlLnR5cGUubWFudWZhY3R1cmVyLCB0aGlzLmZpeHR1cmUudHlwZS5tb2RlbClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmluaXRpb24gPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0cmljdGlvbkF4aXMgPSB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh2YWx1ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF4aXNPcHRpb25zID0gbmV3IEF4aXNPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNPcHRpb25zLm5hbWUgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdHJpY3Rpb25NYXRjaCA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PSBheGlzT3B0aW9ucy5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc09wdGlvbnMucmVzdHJpY3RlZCA9IHJlc3RyaWN0aW9uTWF0Y2ggIT0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF4aXNPcHRpb25zLnJlc3RyaWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNPcHRpb25zLnJlc3RyaWN0aW9uTWluID0gcmVzdHJpY3Rpb25NYXRjaC5taW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlzT3B0aW9ucy5yZXN0cmljdGlvbk1heCA9IHJlc3RyaWN0aW9uTWF0Y2gubWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc09wdGlvbnMucmVzdHJpY3Rpb25NaW4gPSB0aGlzLmdldEF4aXNNaW4oYXhpc09wdGlvbnMubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlzT3B0aW9ucy5yZXN0cmljdGlvbk1heCA9IHRoaXMuZ2V0QXhpc01heChheGlzT3B0aW9ucy5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW52ZXJzaW9uTWF0Y2ggPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzSW52ZXJzaW9ucy5maW5kKGl0ZW0gPT4gaXRlbSA9PSBheGlzT3B0aW9ucy5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc09wdGlvbnMuaW52ZXJ0ZWQgPSBpbnZlcnNpb25NYXRjaCAhPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXhpc09wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbW92aW5nKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBeGlzTWluKG5hbWU6IHN0cmluZyk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLmZpbmQodmFsdWUgPT4gdmFsdWUubmFtZSA9PSBuYW1lKS5taW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF4aXNNYXgobmFtZTogc3RyaW5nKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMuZmluZCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IG5hbWUpLm1heDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFjY2VwdENsaWNrKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnMoKTtcclxuICAgICAgICBvcHRpb25zLmF4aXNJbnZlcnNpb25zID0gdGhpcy5yZXN0cmljdGlvbkF4aXNcclxuICAgICAgICAgICAgLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS5pbnZlcnRlZClcclxuICAgICAgICAgICAgLm1hcCh2YWx1ZSA9PiB2YWx1ZS5uYW1lKTtcclxuICAgICAgICBvcHRpb25zLmF4aXNSZXN0cmljdGlvbnMgPSB0aGlzLnJlc3RyaWN0aW9uQXhpc1xyXG4gICAgICAgICAgICAuZmlsdGVyKHZhbHVlID0+IHZhbHVlLnJlc3RyaWN0ZWQpXHJcbiAgICAgICAgICAgIC5tYXAodmFsdWUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdHMgPSBuZXcgQXhpc1Jlc3RyaWN0aW9uT3B0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgb3B0cy5uYW1lID0gdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgICAgIG9wdHMubWluID0gdmFsdWUucmVzdHJpY3Rpb25NaW47XHJcbiAgICAgICAgICAgICAgICBvcHRzLm1heCA9IHZhbHVlLnJlc3RyaWN0aW9uTWF4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZShvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbmNlbENsaWNrKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlamVjdCgpO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBeGlzT3B0aW9uc1xyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICByZXN0cmljdGlvbk1pbjogbnVtYmVyO1xyXG4gICAgcmVzdHJpY3Rpb25NYXg6IG51bWJlcjtcclxuICAgIHJlc3RyaWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBpbnZlcnRlZDogYm9vbGVhbjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiwgRml4dHVyZURlZmluaXRpb24sIEZpeHR1cmVEZWZpbml0aW9uRGF0YSB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIGZpeHR1cmVEZWZpbml0aW9uc1VybCA9IFwiL2FwaS9GaXh0dXJlRGVmaW5pdGlvblwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldFNrZWxldG9ucygpOiBQcm9taXNlPEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQobWFudWZhY3R1cmVyOiBzdHJpbmcsIG1vZGVsOiBzdHJpbmcpOiBQcm9taXNlPEZpeHR1cmVEZWZpbml0aW9uPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsICsgXCIvXCIgKyBtYW51ZmFjdHVyZXIgKyBcIi9cIiArIG1vZGVsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIEZpeHR1cmVEZWZpbml0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRml4dHVyZURlZmluaXRpb24ubG9hZChkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dChtYW51ZmFjdHVyZXI6IHN0cmluZywgbW9kZWw6IHN0cmluZywgZGVmaW5pdGlvbjogRml4dHVyZURlZmluaXRpb24pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5maXh0dXJlRGVmaW5pdGlvbnNVcmwgKyBcIi9cIiArIG1hbnVmYWN0dXJlciArIFwiL1wiICsgbW9kZWwsIGRlZmluaXRpb24pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoZml4dHVyZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1VybCArIFwiL1wiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIi9cIiArIGZpeHR1cmUubW9kZWwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uIGltcGxlbWVudHMgRml4dHVyZURlZmluaXRpb25EYXRhXHJcbntcclxuICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogXCJMRURcIiB8IFwiVHVuZ3N0ZW5cIiB8IFwiRWZmZWN0XCI7XHJcblxyXG4gICAgY2hhbm5lbHM6IERNWENoYW5uZWxbXTtcclxuICAgIG1vdmVtZW50czogQXhpc1tdO1xyXG4gICAgY29sb3JXaGVlbDogQ29sb3JXaGVlbEVudHJ5W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tYW51ZmFjdHVyZXIgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiTEVEXCI7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IFtdO1xyXG4gICAgICAgIHRoaXMubW92ZW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xvcldoZWVsID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQoZGF0YTogRml4dHVyZURlZmluaXRpb25EYXRhKTogRml4dHVyZURlZmluaXRpb25cclxuICAgIHtcclxuICAgICAgICBsZXQgZGVmaW5pdGlvbiA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmaW5pdGlvbiwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRml4dHVyZURlZmluaXRpb25EYXRhXHJcbntcclxuICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogXCJMRURcIiB8IFwiVHVuZ3N0ZW5cIiB8IFwiRWZmZWN0XCI7XHJcblxyXG4gICAgY2hhbm5lbHM6IERNWENoYW5uZWxbXTtcclxuICAgIG1vdmVtZW50czogQXhpc1tdO1xyXG4gICAgY29sb3JXaGVlbDogQ29sb3JXaGVlbEVudHJ5W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uXHJcbntcclxuICAgIHB1YmxpYyBtYW51ZmFjdHVyZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBtb2RlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRE1YQ2hhbm5lbFxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkbXg6IG51bWJlcjtcclxuICAgIG1pbjogbnVtYmVyO1xyXG4gICAgbWF4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgZG14PzogbnVtYmVyLCBtaW4/OiBudW1iZXIsIG1heD86IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lID8gbmFtZSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5kbXggPSBkbXggPyBkbXggOiAxO1xyXG4gICAgICAgIHRoaXMubWluID0gbWluID8gbWluIDogMDtcclxuICAgICAgICB0aGlzLm1heCA9IG1heCA/IG1heCA6IDI1NTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF4aXNcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yV2hlZWxFbnRyeVxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkbXhTdGFydDogbnVtYmVyO1xyXG4gICAgZG14RW5kOiBudW1iZXI7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIGRteFN0YXJ0PzogbnVtYmVyLCBkbXhFbmQ/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgPyBuYW1lIDogXCJcIjtcclxuICAgICAgICB0aGlzLmRteFN0YXJ0ID0gZG14U3RhcnQgPyBkbXhTdGFydCA6IDA7XHJcbiAgICAgICAgdGhpcy5kbXhFbmQgPSBkbXhFbmQgPyBkbXhFbmQgOiAyNTU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yID8gY29sb3IgOiBcIjAwMDAwMFwiO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLnRzIiwiaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlbnVlXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHVuaXZlcnNlczogVW5pdmVyc2VbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVuaXZlcnNlcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Vcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdW5pdmVyc2VJRDogbnVtYmVyO1xyXG4gICAgZml4dHVyZXM6IEZpeHR1cmVbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVuaXZlcnNlSUQgPSAxO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZXMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVcclxue1xyXG4gICAgY2hhbm5lbDogbnVtYmVyO1xyXG4gICAgZ3JvdXA6IHN0cmluZztcclxuICAgIHR5cGU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b247XHJcbiAgICBvcHRpb25zOiBGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IDE7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50eXBlID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24oKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgRml4dHVyZURlZmluaXRpb25PcHRpb25zKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnNcclxue1xyXG4gICAgbWF4QnJpZ2h0bmVzczogbnVtYmVyO1xyXG4gICAgYXhpc0ludmVyc2lvbnM6IHN0cmluZ1tdO1xyXG4gICAgYXhpc1Jlc3RyaWN0aW9uczogQXhpc1Jlc3RyaWN0aW9uT3B0aW9uc1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1heEJyaWdodG5lc3MgPSAxO1xyXG4gICAgICAgIHRoaXMuYXhpc0ludmVyc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmF4aXNSZXN0cmljdGlvbnMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF4aXNSZXN0cmljdGlvbk9wdGlvbnNcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1pbiA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmVudWVQcmVzZXRcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZml4dHVyZXM6IEZpeHR1cmVbXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwiZml4dHVyZSAmJiBkZWZpbml0aW9uXFxcIiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBbbmdDbGFzc109XFxcInsnaW4nOiB2aXNpYmxlQW5pbWF0ZX1cXFwiIFtuZ1N0eWxlXT1cXFwieydkaXNwbGF5JzogdmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScsICdvcGFjaXR5JzogdmlzaWJsZUFuaW1hdGUgPyAxIDogMH1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcXFwiPlxcclxcbiAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAjZWRpdG9yRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcImNhbmNlbENsaWNrKClcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPkVkaXRpbmcge3tmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyfX0ge3tmaXh0dXJlLnR5cGUubW9kZWx9fSBvbiBDaGFubmVsIHt7Zml4dHVyZS5jaGFubmVsfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk1heCBCcmlnaHRuZXNzOlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLm9wdGlvbnMubWF4QnJpZ2h0bmVzc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD1cXFwiMC4wMVxcXCIgbmFtZT1cXFwibWF4QnJpZ2h0bmVzc1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJtb3ZpbmdcXFwiIGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5BeGlzIE9wdGlvbnM8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkludmVydGVkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlc3RyaWN0ZWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWluIChkZWdyZWVzKTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXggKGRlZ3JlZXMpPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgYXhpcyBvZiByZXN0cmljdGlvbkF4aXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3theGlzLm5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgWyhuZ01vZGVsKV09XFxcImF4aXMuaW52ZXJ0ZWRcXFwiIFtuYW1lXT1cXFwiJ2ludmVydGVkWycgKyBheGlzLm5hbWUgKyAnXSdcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52ZXJ0ZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgWyhuZ01vZGVsKV09XFxcImF4aXMucmVzdHJpY3RlZFxcXCIgW25hbWVdPVxcXCIncmVzdHJpY3RlZFsnICsgYXhpcy5uYW1lICsgJ10nXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3RyaWN0ZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiYXhpcy5yZXN0cmljdGlvbk1pblxcXCIgW25hbWVdPVxcXCIncmVzdHJpY3Rpb25NaW5bJyArIGF4aXMubmFtZSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21pbl09XFxcImdldEF4aXNNaW4oYXhpcy5uYW1lKVxcXCIgW21heF09XFxcImdldEF4aXNNYXgoYXhpcy5uYW1lKVxcXCIgW2Rpc2FibGVkXT1cXFwiIWF4aXMucmVzdHJpY3RlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJheGlzLnJlc3RyaWN0aW9uTWF4XFxcIiBbbmFtZV09XFxcIidyZXN0cmljdGlvbk1heFsnICsgYXhpcy5uYW1lICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWluXT1cXFwiZ2V0QXhpc01pbihheGlzLm5hbWUpXFxcIiBbbWF4XT1cXFwiZ2V0QXhpc01heChheGlzLm5hbWUpXFxcIiBbZGlzYWJsZWRdPVxcXCIhYXhpcy5yZXN0cmljdGVkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcImFjY2VwdENsaWNrKClcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0b3JGb3JtLnZhbGlkXFxcIj5PSzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiY2FuY2VsQ2xpY2soKVxcXCI+Q2FuY2VsPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IFZlbnVlUHJlc2V0IH0gZnJvbSBcIi4vdmVudWVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZlbnVlUHJlc2V0U2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHZlbnVlUHJlc2V0VXJsID0gXCIvYXBpL1ZlbnVlUHJlc2V0XCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBzdHJpbmcpOiBQcm9taXNlPFZlbnVlUHJlc2V0PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVQcmVzZXRVcmwgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIFZlbnVlUHJlc2V0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmFtZXMoKTogUHJvbWlzZTxzdHJpbmdbXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlUHJlc2V0VXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIHN0cmluZ1tdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aXZhdGUoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlUHJlc2V0VXJsICsgXCIvYWN0aXZhdGUvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dChpZDogc3RyaW5nLCB2ZW51ZVByZXNldDogVmVudWVQcmVzZXQpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy52ZW51ZVByZXNldFVybCArIFwiL1wiICsgaWQsIHZlbnVlUHJlc2V0KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy52ZW51ZVByZXNldFVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1wcmVzZXQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIiAqbmdJZj1cXFwidW5pdmVyc2UgJiYgc2tlbGV0b25zXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+Rml4dHVyZXM8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlNlbGVjdGVkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5NYW51ZmFjdHVyZXI8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk1vZGVsPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5DaGFubmVsPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Hcm91cDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmaXh0dXJlIG9mIHVuaXZlcnNlLmZpeHR1cmVzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgW25nTW9kZWxdPVxcXCJpc1NlbGVjdGVkKGZpeHR1cmUpXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcInNlbGVjdEZpeHR1cmUoZml4dHVyZSwgJGV2ZW50KVxcXCIgW25hbWVdPVxcXCInc2VsZWN0ZWRbJyArIGkgKyAnXSdcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyXFxcIiAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBbbmFtZV09XFxcIidtYW51ZmFjdHVyZXJbJyArIGkgKyddJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1hbnVmYWN0dXJlciBvZiBnZXRNYW51ZmFjdHVyZXJzKClcXFwiPnt7bWFudWZhY3R1cmVyfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLnR5cGUubW9kZWxcXFwiICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIFtuYW1lXT1cXFwiJ21vZGVsWycgKyBpICsnXSdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBtb2RlbCBvZiBnZXRNb2RlbHMoZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlcilcXFwiPnt7bW9kZWx9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI1MTJcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLmNoYW5uZWxcXFwiIFtuYW1lXT1cXFwiJ2NoYW5uZWxbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLmdyb3VwXFxcIiAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBbbmFtZV09XFxcIidncm91cFsnICsgaSArICddJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGdyb3VwIG9mIGdyb3Vwc1xcXCI+e3tncm91cH19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJlZGl0T3B0aW9ucyhmaXh0dXJlKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVGaXh0dXJlKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj4gPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZEZpeHR1cmUoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04IHRleHQtcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFByZXNldE5hbWVcXFwiIG5hbWU9XFxcInNlbGVjdGVkUHJlc2V0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgdmVudWVQcmVzZXROYW1lIG9mIHZlbnVlUHJlc2V0TmFtZXNcXFwiPnt7dmVudWVQcmVzZXROYW1lfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwic2VsZWN0ZWRQcmVzZXROYW1lID09IG51bGxcXFwiIChjbGljayk9XFxcImxvYWRQcmVzZXQoc2VsZWN0ZWRQcmVzZXROYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktb3BlblxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBbZGlzYWJsZWRdPVxcXCJzZWxlY3RlZEZpeHR1cmVzLmxlbmd0aCA9PSAwXFxcIiAoY2xpY2spPVxcXCJzYXZlUHJlc2V0KClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LXNhdmVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBbZGlzYWJsZWRdPVxcXCJzZWxlY3RlZFByZXNldE5hbWUgPT0gbnVsbFxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlUHJlc2V0KHNlbGVjdGVkUHJlc2V0TmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgdGV4dC1yaWdodFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGZpeHR1cmUtb3B0aW9ucy1lZGl0b3IgI2ZpeHR1cmVPcHRpb25zRWRpdG9yPjwvZml4dHVyZS1vcHRpb25zLWVkaXRvcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+VmVudWUgRWRpdG9yPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwidmVudWVcXFwiIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiICNlZGl0b3JGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTmFtZTpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCAjaW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcInZlbnVlLm5hbWVcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCI+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcblxcclxcbiAgICAgICAgPGRpdiByb2xlPVxcXCJ0YWJwYW5lbFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLSBOYXYgdGFicyAtLT5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCIgcm9sZT1cXFwidGFibGlzdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB1bml2ZXJzZSBvZiB2ZW51ZS51bml2ZXJzZXM7IGxldCBpID0gaW5kZXhcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiBzZWxlY3RlZFVuaXZlcnNlID09IHVuaXZlcnNlfVxcXCIgY2xhc3M9XFxcImFjdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzZWxlY3RlZFVuaXZlcnNlID0gdW5pdmVyc2VcXFwiPnt7dW5pdmVyc2UubmFtZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImkgPiAwXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiIChjbGljayk9XFxcInJlbW92ZVVuaXZlcnNlKGkpXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG5cXFwiIChjbGljayk9XFxcImFkZFVuaXZlcnNlKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCIgKm5nSWY9XFxcInNlbGVjdGVkVW5pdmVyc2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk5hbWU6XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRVbml2ZXJzZS5uYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbbmFtZV09XFxcIid1bml2ZXJzZU5hbWVbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIlVuaXZlcnNlIElEOlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkVW5pdmVyc2UudW5pdmVyc2VJRFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNjU1MzVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVxcXCIndW5pdmVyc2VOdW1iZXJbJyArIGkgKyAnXSdcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPHVuaXZlcnNlLWVkaXRvciBbdW5pdmVyc2VdPVxcXCJzZWxlY3RlZFVuaXZlcnNlXFxcIiBbbWVzc2FnZUJhcl09XFxcIm1lc3NhZ2VCYXJcXFwiIFtpbnB1dEJveF09XFxcImlucHV0Qm94XFxcIj48L3VuaXZlcnNlLWVkaXRvcj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJzYXZlKClcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0b3JGb3JtLnZhbGlkXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XFxyXFxuPGlucHV0LWJveCAjaW5wdXRCb3g+PC9pbnB1dC1ib3g+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtZWRpdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuLi9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbRml4dHVyZURlZmluaXRpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImNvbmZpcm1hdGlvblwiKSBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbkNvbXBvbmVudDtcclxuICAgIG1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBtYW51ZmFjdHVyZXJGaWx0ZXI6IHN0cmluZztcclxuICAgIGRhdGE6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2U6IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRTa2VsZXRvbnMoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSkgPT4gdGhpcy5kYXRhID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgbWFudWZhY3R1cmVycygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFcclxuICAgICAgICAgICAgLm1hcCgodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pID0+IHZhbHVlLm1hbnVmYWN0dXJlcilcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGZpbHRlcmVkRGF0YSgpOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW11cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5tYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWx0ZXIoKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiB2YWx1ZS5tYW51ZmFjdHVyZXIgPT0gdGhpcy5tYW51ZmFjdHVyZXJGaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVkaXRVcmwoZml4dHVyZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbik6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcImZpeHR1cmUtZGVmaW5pdGlvbnNcIiArIFwiL1wiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIi9cIiArIGZpeHR1cmUubW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBkZWxldGVDb25maXJtKGZpeHR1cmU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuY29uZmlybWF0aW9uLnNob3coXHJcbiAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIGZpeHR1cmUgZGVmaW5pdGlvbiBmb3IgXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiIFwiICsgZml4dHVyZS5tb2RlbCArIFwiP1wiLFxyXG4gICAgICAgICAgICBcIkRlbGV0ZVwiLFxyXG4gICAgICAgICAgICBcIkNhbmNlbFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5maXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAuZGVsZXRlKGZpeHR1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIgXCIgKyBmaXh0dXJlLm1vZGVsICsgXCIgd2FzIGRlbGV0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kYXRhLmluZGV4T2YoZml4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgXCJDb3VsZCBub3QgZGVsZXRlIFwiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIiBcIiArIGZpeHR1cmUubW9kZWwgKyBcIi4gXCIgKyByZWFzb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZml4dHVyZS1kZWZpbml0aW9ucy9uZXdcIjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPkZpeHR1cmUgRGVmaW5pdGlvbnM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZm9ybS1pbmxpbmVcXFwiICpuZ0lmPVxcXCJkYXRhXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgWyhuZ01vZGVsKV09XFxcIm1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgRmlsdGVyIGJ5IG1hbnVmYWN0dXJlclxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxzZWxlY3QgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Rpc2FibGVkXT1cXFwiIW1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWRcXFwiIFsobmdNb2RlbCldPVxcXCJtYW51ZmFjdHVyZXJGaWx0ZXJcXFwiPlxcclxcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBtYW51ZmFjdHVyZXIgb2YgbWFudWZhY3R1cmVyc1xcXCI+e3ttYW51ZmFjdHVyZXJ9fTwvb3B0aW9uPlxcclxcbiAgICA8L3NlbGVjdD5cXHJcXG48L2Rpdj5cXHJcXG48dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiICpuZ0lmPVxcXCJkYXRhXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5NYW51ZmFjdHVyZXI8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5Nb2RlbDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIGZpbHRlcmVkRGF0YVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7ZW50cnkubWFudWZhY3R1cmVyfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57e2VudHJ5Lm1vZGVsfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIFtocmVmXT1cXFwiZ2V0RWRpdFVybChlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlQ29uZmlybShlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG48Y29uZmlybWF0aW9uICNjb25maXJtYXRpb24+PC9jb25maXJtYXRpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbiwgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiwgRE1YQ2hhbm5lbCwgQXhpcywgQ29sb3JXaGVlbEVudHJ5IH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZml4dHVyZS1kZWZpbml0aW9ucy1lZGl0b3InLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbRml4dHVyZURlZmluaXRpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiY29uZmlybWF0aW9uXCIpIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgb3JpZ2luYWxNYW51ZmFjdHVyZXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgb3JpZ2luYWxNb2RlbDogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgYWxsTWFudWZhY3R1cmVyczogc3RyaW5nW107XHJcblxyXG4gICAgcHJpdmF0ZSBkZWZpbml0aW9uOiBGaXh0dXJlRGVmaW5pdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIHNhdmluZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBmaXh0dXJlU2VydmljZTogRml4dHVyZURlZmluaXRpb25zU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFsbE1hbnVmYWN0dXJlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTWFudWZhY3R1cmVyID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ21hbnVmYWN0dXJlciddO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxNb2RlbCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydtb2RlbCddO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc05ld0l0ZW0oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZpeHR1cmVTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAuZ2V0KHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXIsIHRoaXMub3JpZ2luYWxNb2RlbClcclxuICAgICAgICAgICAgICAgIC50aGVuKGRlZmluaXRpb24gPT4gdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maXh0dXJlU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U2tlbGV0b25zKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10pID0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE1hbnVmYWN0dXJlcnMgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHNrZWxldG9uOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiBza2VsZXRvbi5tYW51ZmFjdHVyZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PSBpbmRleCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQ2hhbm5lbCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1heENoYW5uZWwgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jaGFubmVscy5mb3JFYWNoKCh2YWx1ZTogRE1YQ2hhbm5lbCkgPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZG14ID4gbWF4Q2hhbm5lbCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1heENoYW5uZWwgPSB2YWx1ZS5kbXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLnB1c2gobmV3IERNWENoYW5uZWwoXCJcIiwgbWF4Q2hhbm5lbCArIDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUNoYW5uZWwoY2hhbm5lbDogRE1YQ2hhbm5lbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMuaW5kZXhPZihjaGFubmVsKTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEF4aXMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMucHVzaChuZXcgQXhpcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUF4aXMoYXhpczogQXhpcyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLmluZGV4T2YoYXhpcyk7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQ29sb3JXaGVlbEVudHJ5KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWluVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLmZvckVhY2goKHZhbHVlOiBDb2xvcldoZWVsRW50cnkpID0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmRteEVuZCA+IG1pblZhbHVlKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSB2YWx1ZS5kbXhFbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtaW5WYWx1ZSA9IG1pblZhbHVlIDwgMjU1ID8gbWluVmFsdWUgKyAxIDogMjU1O1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLnB1c2gobmV3IENvbG9yV2hlZWxFbnRyeShcIlwiLCBtaW5WYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlQ29sb3JXaGVlbEVudHJ5KGNvbG9yV2hlZWxFbnRyeTogQ29sb3JXaGVlbEVudHJ5KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLmluZGV4T2YoY29sb3JXaGVlbEVudHJ5KTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY29sb3JXaGVlbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVOYW1lcygpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNoYW5uZWxOYW1lUHJvYmxlbXMgPSB0aGlzLmNoYW5uZWxOYW1lc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXg6IG51bWJlciwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpICE9IGluZGV4IHx8IHZhbHVlID09IFwiXCIpO1xyXG4gICAgICAgIGxldCBheGlzTmFtZVByb2JsZW1zID0gdGhpcy5heGlzTmFtZXNcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUsIGluZGV4OiBudW1iZXIsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSAhPSBpbmRleCB8fCB2YWx1ZSA9PSBcIlwiKTtcclxuICAgICAgICBsZXQgY29sb3JXaGVlbE5hbWVQcm9ibGVtcyA9IHRoaXMuY29sb3JXaGVlbE5hbWVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleDogbnVtYmVyLCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgIT0gaW5kZXggfHwgdmFsdWUgPT0gXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGFubmVsTmFtZVByb2JsZW1zLmxlbmd0aCA9PSAwICYmIGF4aXNOYW1lUHJvYmxlbXMubGVuZ3RoID09IDAgJiYgY29sb3JXaGVlbE5hbWVQcm9ibGVtcy5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBjaGFubmVsTmFtZXMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLm1hcCgodmFsdWU6IERNWENoYW5uZWwpID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGNvbG9yV2hlZWxOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24uY29sb3JXaGVlbC5tYXAoKHZhbHVlOiBDb2xvcldoZWVsRW50cnkpID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGF4aXNOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLm1hcCgodmFsdWU6IEF4aXMpID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNOZXdJdGVtKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbE1hbnVmYWN0dXJlciA9PSBudWxsICYmIHRoaXMub3JpZ2luYWxNb2RlbCA9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBtYW51ZmFjdHVyZXIgPSB0aGlzLmlzTmV3SXRlbSgpID8gdGhpcy5kZWZpbml0aW9uLm1hbnVmYWN0dXJlciA6IHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXI7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5pc05ld0l0ZW0oKSA/IHRoaXMuZGVmaW5pdGlvbi5uYW1lIDogdGhpcy5vcmlnaW5hbE1vZGVsO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZVNlcnZpY2VcclxuICAgICAgICAgICAgLnB1dChtYW51ZmFjdHVyZXIsIG1vZGVsLCB0aGlzLmRlZmluaXRpb24pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZml4dHVyZS1kZWZpbml0aW9uc1wiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5GaXh0dXJlIERlZmluaXRpb24gRWRpdG9yPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwiZGVmaW5pdGlvblxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgI2VkaXRvckZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgIDxmaWVsZHNldCBbZGlzYWJsZWRdPVxcXCJzYXZpbmdcXFwiPlxcclxcbiAgICAgICAgPGRhdGFsaXN0IGlkPVxcXCJhbGxNYW51ZmFjdHVyZXJzXFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1hbnVmYWN0dXJlciBvZiBhbGxNYW51ZmFjdHVyZXJzXFxcIj57e21hbnVmYWN0dXJlcn19PC9vcHRpb24+XFxyXFxuICAgICAgICA8L2RhdGFsaXN0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJNYW51ZmFjdHVyZXI6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgI2lucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm1hbnVmYWN0dXJlclxcXCIgWyhuZ01vZGVsKV09XFxcImRlZmluaXRpb24ubWFudWZhY3R1cmVyXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGxpc3Q9XFxcImFsbE1hbnVmYWN0dXJlcnNcXFwiPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTW9kZWw6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgI2lucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm1vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVmaW5pdGlvbi5uYW1lXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiVHlwZTpcXFwiPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidHlwZVxcXCIgWyhuZ01vZGVsKV09XFxcImRlZmluaXRpb24udHlwZVxcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5MRUQ8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlR1bmdzdGVuPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5FZmZlY3Q8L29wdGlvbj5cXHJcXG4gICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cXFwiY2hhbm5lbExpc3RcXFwiIG5hbWU9XFxcImNoYW5uZWxMaXN0XFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPk1hc3Rlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+U3Ryb2JlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5SZWQ8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkdyZWVuPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5CbHVlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5VVjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+Q29sb3JXaGVlbDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+UGFuQ29hcnNlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5QYW5GaW5lPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5UaWx0Q29hcnNlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5UaWx0RmluZTwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9kYXRhbGlzdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkNoYW5uZWxzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RE1YPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWluPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1heDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjaGFubmVsIG9mIGRlZmluaXRpb24uY2hhbm5lbHM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwuZG14XFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNTEyXFxcIiBbbmFtZV09XFxcIidjaGFubmVsRE1YWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIFsodW5pcXVlKV09XFxcImNoYW5uZWxOYW1lc1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVxcXCInY2hhbm5lbE5hbWVbJyArIGkgKyAnXSdcXFwiIGxpc3Q9XFxcImNoYW5uZWxMaXN0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJjaGFubmVsLm1pblxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgW25hbWVdPVxcXCInY2hhbm5lbE1pblsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJjaGFubmVsLm1heFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgW25hbWVdPVxcXCInY2hhbm5lbE1heFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZUNoYW5uZWwoY2hhbm5lbClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkQ2hhbm5lbCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cXFwiYXhpc0xpc3RcXFwiIG5hbWU9XFxcImF4aXNMaXN0XFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlBhbjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+VGlsdDwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9kYXRhbGlzdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPk1vdmVtZW50IEF4aXM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1pbiAoZGVncmVlcyk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF4IChkZWdyZWVzKTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBtb3ZlbWVudCBvZiBkZWZpbml0aW9uLm1vdmVtZW50czsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3VuaXF1ZV09XFxcImNvbG9yV2hlZWxOYW1lc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcIm1vdmVtZW50Lm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cXFwiJ2F4aXNOYW1lWycgKyBpICsgJ10nXFxcIiBsaXN0PVxcXCJheGlzTGlzdFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwibW92ZW1lbnQubWluXFxcIiBbbmFtZV09XFxcIidheGlzTWluWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcIm1vdmVtZW50Lm1heFxcXCIgW25hbWVdPVxcXCInYXhpc01heFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZUF4aXMobW92ZW1lbnQpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZEF4aXMoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5Db2xvciBXaGVlbHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbG9yPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRNWCBTdGFydDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ETVggRW5kPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIGRlZmluaXRpb24uY29sb3JXaGVlbDsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgW3VuaXF1ZV09XFxcImNvbG9yV2hlZWxOYW1lc1xcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5Lm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cXFwiJ2NvbG9yV2hlZWxOYW1lWycgKyBpICsgJ10nXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJjb2xvclxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5LmNvbG9yXFxcIiBbbmFtZV09XFxcIidjb2xvcldoZWVsQ29sb3JbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50cnkuZG14U3RhcnRcXFwiIFtuYW1lXT1cXFwiJ2NvbG9yV2hlZWxNaW5bJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIyNTVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5LmRteEVuZFxcXCIgW25hbWVdPVxcXCInY29sb3JXaGVlbE1heFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVDb2xvcldoZWVsRW50cnkoZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZENvbG9yV2hlZWxFbnRyeSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdG9yRm9ybS52YWxpZFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1tb2RhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLW1vZGFsXCJcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==