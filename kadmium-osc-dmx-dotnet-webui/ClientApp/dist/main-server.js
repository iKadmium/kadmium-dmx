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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(7);
	var angular2_universal_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(8);
	var app_component_1 = __webpack_require__(9);
	var index_1 = __webpack_require__(14);
	var unique_directive_1 = __webpack_require__(17);
	var angular2_modal_1 = __webpack_require__(18);
	var bootstrap_1 = __webpack_require__(19);
	var navmenu_component_1 = __webpack_require__(20);
	var status_panel_component_1 = __webpack_require__(24);
	var message_bar_component_1 = __webpack_require__(29);
	var labelled_input_component_1 = __webpack_require__(31);
	var table_input_component_1 = __webpack_require__(33);
	var input_box_component_1 = __webpack_require__(39);
	var dashboard_component_1 = __webpack_require__(43);
	var settings_component_1 = __webpack_require__(47);
	var groups_component_1 = __webpack_require__(52);
	var venues_component_1 = __webpack_require__(56);
	var venue_editor_component_1 = __webpack_require__(58);
	var universe_editor_component_1 = __webpack_require__(59);
	var fixture_options_editor_component_1 = __webpack_require__(60);
	var fixture_definitions_component_1 = __webpack_require__(72);
	var fixture_definition_editor_component_1 = __webpack_require__(74);
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
	        providers: [],
	        entryComponents: [fixture_options_editor_component_1.FixtureOptionsEditorComponent]
	    })
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
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<nav-menu></nav-menu>\r\n<div class=\"container body-content\">\r\n    <router-outlet></router-outlet>\r\n</div>"

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
	exports.push([module.id, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);
	
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
/***/ function(module, exports) {

	module.exports = require("angular2-modal");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("angular2-modal/plugins/bootstrap");

/***/ },
/* 20 */
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
	        template: __webpack_require__(21),
	        styles: [__webpack_require__(22)]
	    }),
	    __metadata("design:paramtypes", [])
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span> \r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Kadmium OSC DMX</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/dashboard\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                        <span class=\"glyphicon glyphicon-cog\"></span> Setup\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/settings\">Settings</a></li>\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/groups\">Groups</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/venues\"> <span class=\"glyphicon glyphicon-th-list\"></span> Venues</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/fixture-definitions\"> <span class=\"glyphicon glyphicon-th-list\"></span> Fixture Definitions</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(23);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 24 */
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
	var status_1 = __webpack_require__(25);
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
	        template: __webpack_require__(26),
	        styles: [__webpack_require__(27)]
	    }),
	    __metadata("design:paramtypes", [])
	], StatusPanelComponent);
	exports.StatusPanelComponent = StatusPanelComponent;


/***/ },
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default text-center\">\r\n    <div class=\"panel-heading\">{{name}} </div>\r\n    <div class=\"panel-body\" [ngClass]=\"status.alertStyle\">\r\n        {{status.message}}<br>\r\n        <span class=\"glyphicon status-glyph\" [ngClass]=\"status.glyphIcon\"></span>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(28);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".status-glyph {\r\n    font-size: 6em;\r\n}", ""]);
	
	// exports


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
	var status_1 = __webpack_require__(25);
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
	        template: __webpack_require__(30)
	    }),
	    __metadata("design:paramtypes", [])
	], MessageBarComponent);
	exports.MessageBarComponent = MessageBarComponent;


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div *ngFor=\"let message of messages\">\r\n    <div class=\"alert\" [ngClass]=\"message.alertStyle\">\r\n        <a class=\"close\" (click)=\"remove(message)\" aria-label=\"close\">&times;</a>\r\n        <span class=\"glyphicon\" [ngClass]=\"message.glyphIcon\"></span> {{message.message}}\r\n    </div>\r\n</div>"

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
	        template: __webpack_require__(32)
	    }),
	    __metadata("design:paramtypes", [])
	], LabelledInputComponent);
	exports.LabelledInputComponent = LabelledInputComponent;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\" [ngClass]=\"{'has-error': model.errors && model.touched}\">\r\n    <label class=\"control-label col-sm-2\" [attr.for]=\"input.name\">{{ label }}</label>\r\n    <div class=\"col-sm-10\">\r\n        <ng-content></ng-content>\r\n        <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.required\">This field is required</div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.min\">This field has a minimum value of {{model.errors?.min.minValue}}</div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.max\">This field has a maximum value of {{model.errors?.max.maxValue}}</div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.dirty && model.errors?.unique\">Entries in this field must be unique</div>\r\n    </div>\r\n</div>"

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
	        template: __webpack_require__(34)
	    }),
	    __metadata("design:paramtypes", [])
	], TableInputComponent);
	exports.TableInputComponent = TableInputComponent;


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div [ngClass]=\"{'has-error': model.errors && model.touched }\">\r\n    <ng-content></ng-content>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.required\">This field is required</div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.min\">This field has a minimum value of {{model.errors?.min.minValue}}</div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.max\">This field has a maximum value of {{model.errors?.max.maxValue}}</div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"model && model.touched && model.errors?.unique\">Entries in this field must be unique</div>\r\n</div>"

/***/ },
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
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
	        template: __webpack_require__(40),
	        styles: [__webpack_require__(41)]
	    }),
	    __metadata("design:paramtypes", [core_1.Renderer])
	], InputBoxComponent);
	exports.InputBoxComponent = InputBoxComponent;


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <form class=\"form-horizontal\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"cancelClick()\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{header}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <labelled-input [label]=\"body\">\r\n                        <input #input #model=\"ngModel\" [(ngModel)]=\"response\" class=\"form-control\" required [name]=\"input\" />\r\n                    </labelled-input>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"acceptClick()\" data-dismiss=\"modal\">{{acceptVerb}}</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelClick()\" data-dismiss=\"modal\">{{cancelVerb}}</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(42);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}", ""]);
	
	// exports


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
	var core_1 = __webpack_require__(3);
	var status_panel_component_1 = __webpack_require__(24);
	var message_bar_component_1 = __webpack_require__(29);
	var venue_service_1 = __webpack_require__(44);
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
	        template: __webpack_require__(46),
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
	__webpack_require__(45);
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
	    VenueService.prototype.delete = function (id) {
	        return this.http.delete(this.venueUrl + "/" + id)
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
/* 45 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Dashboard</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <status-panel #venue name=\"Venue\">\r\n            <div class=\"dropdown\" *ngIf=\"venueNames\">\r\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Load Venue\r\n                <span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li *ngFor=\"let venueName of venueNames\">\r\n                        <a (click)=\"activateVenue(venueName)\">{{venueName}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #sacnTransmitter name=\"sACN Transmitter\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/sacnTransmitterLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #oscListener name=\"OSC Listener\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/oscListenerLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #fixtures name=\"Fixtures\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/fixturesLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n</div>"

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
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
	var message_bar_component_1 = __webpack_require__(29);
	var settings_service_1 = __webpack_require__(48);
	var settings_1 = __webpack_require__(49);
	var $ = __webpack_require__(50);
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
	        template: __webpack_require__(51),
	        providers: [settings_service_1.SettingsService]
	    }),
	    __metadata("design:paramtypes", [settings_service_1.SettingsService])
	], SettingsComponent);
	exports.SettingsComponent = SettingsComponent;


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
	__webpack_require__(45);
	var settings_1 = __webpack_require__(49);
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
/* 49 */
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
/* 50 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Settings</h1>\r\n</div>\r\n<p *ngIf=\"!settings\">Loading...</p>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"settings\" class=\"form-horizontal\" #settingsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"HTTP Port:\">\r\n            <input #input type=\"number\" name=\"webPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.webPort\" #model=\"ngModel\"\r\n            />\r\n        </labelled-input>\r\n        <labelled-input label=\"OSC Port:\">\r\n            <input #input required type=\"number\" name=\"oscPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.oscPort\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\">\r\n            <input #input type=\"number\" name=\"sacnTransmitterDelay\" class=\"form-control\" min=\"0\" max=\"10000\" [(ngModel)]=\"settings.sacnTransmitter.delay\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Multicast:\">\r\n            <div class=\"checkbox\">\r\n                <label><input #input type=\"checkbox\" name=\"sacnMulticast\" [(ngModel)]=\"settings.sacnTransmitter.multicast\" #sacnMulticast=\"ngModel\" #model=\"ngModel\" >Multicast</label>\r\n            </div>\r\n        </labelled-input>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">sACN Unicast Targets</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Address</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let target of settings.sacnTransmitter.unicast; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input required type=\"text\" class=\"form-control col-sm-8\" [(ngModel)]=\"settings.sacnTransmitter.unicast[i].target\" [name]=\"'unicast[' + i + ']'\"\r\n                                        #input #model=\"ngModel\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeTarget(i)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\"><button class=\"btn btn-success\" (click)=\"addTarget()\"><span class=\"glyphicon glyphicon-plus\"></span></button></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!settingsForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },
/* 52 */
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
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
	var message_bar_component_1 = __webpack_require__(29);
	var group_service_1 = __webpack_require__(53);
	var group_1 = __webpack_require__(54);
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
	        template: __webpack_require__(55),
	        providers: [group_service_1.GroupService]
	    }),
	    __metadata("design:paramtypes", [group_service_1.GroupService])
	], GroupsComponent);
	exports.GroupsComponent = GroupsComponent;


/***/ },
/* 53 */
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
	__webpack_require__(45);
	var group_1 = __webpack_require__(54);
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
/* 54 */
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
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Groups</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"groups\" #groupsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Order</th>\r\n                    <th>Name</th>\r\n                    <th>Remove</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let group of groups; let i = index\">\r\n                    <td>\r\n                        <button class=\"btn\" (click)=\"move(group, -1)\" [disabled]=\"i == 0\"><span class=\"glyphicon glyphicon-arrow-up\"></span></button>\r\n                        <button class=\"btn\" (click)=\"move(group, 1)\" [disabled]=\"i == groups.length - 1\"><span class=\"glyphicon glyphicon-arrow-down\"></span></button>\r\n                    </td>\r\n                    <td>\r\n                        <table-input>\r\n                            <input required [unique]=\"groupNames\" #input #model=\"ngModel\" class=\"form-control\" type=\"text\" [(ngModel)]=\"group.name\" [name]=\"'groupName[' + i + ']'\">\r\n                        </table-input>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"btn-group\">\r\n                            <button class=\"btn btn-danger\" (click)=\"delete(group)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span> Add</button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" [disabled]=\"!groupsForm.valid\" (click)=\"save()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

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
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
	var message_bar_component_1 = __webpack_require__(29);
	var angular2_modal_1 = __webpack_require__(18);
	var bootstrap_1 = __webpack_require__(19);
	var venue_service_1 = __webpack_require__(44);
	var VenuesComponent = (function () {
	    function VenuesComponent(venueService, overlay, vcRef, modal) {
	        var _this = this;
	        this.venueService = venueService;
	        this.modal = modal;
	        overlay.defaultViewContainer = vcRef;
	        this.venueService
	            .getNames()
	            .then(function (value) { return _this.venues = value.map(function (value) {
	            var skeleton = new VenueSkeleton();
	            skeleton.name = value;
	            return skeleton;
	        }); })
	            .catch(function (reason) { return _this.messageBar; });
	    }
	    VenuesComponent.prototype.getEditUrl = function (entry) {
	        return "venues/" + entry.name;
	    };
	    VenuesComponent.prototype.deleteConfirm = function (index) {
	        return __awaiter(this, void 0, void 0, function () {
	            var venue, promise, result, error_1, error_2;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        venue = this.venues[index];
	                        return [4 /*yield*/, this.modal
	                                .confirm()
	                                .title("Are you sure?")
	                                .body("Are you sure you want to delete " + venue.name + "?")
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
	                        if (!result) return [3 /*break*/, 7];
	                        _a.label = 4;
	                    case 4:
	                        _a.trys.push([4, 6, , 7]);
	                        return [4 /*yield*/, this.venueService.delete(venue.name)];
	                    case 5:
	                        _a.sent();
	                        this.venues.splice(index, 1);
	                        this.messageBar.add("Success", venue.name + " successfully removed");
	                        return [3 /*break*/, 7];
	                    case 6:
	                        error_1 = _a.sent();
	                        this.messageBar.add("Error", error_1);
	                        return [3 /*break*/, 7];
	                    case 7: return [3 /*break*/, 9];
	                    case 8:
	                        error_2 = _a.sent();
	                        return [3 /*break*/, 9];
	                    case 9: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    return VenuesComponent;
	}());
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], VenuesComponent.prototype, "messageBar", void 0);
	VenuesComponent = __decorate([
	    core_1.Component({
	        selector: 'venues',
	        template: __webpack_require__(57),
	        providers: [venue_service_1.VenueService]
	    }),
	    __metadata("design:paramtypes", [venue_service_1.VenueService, angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
	], VenuesComponent);
	exports.VenuesComponent = VenuesComponent;
	var VenueSkeleton = (function () {
	    function VenueSkeleton() {
	    }
	    return VenueSkeleton;
	}());


/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Venues</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<table class=\"table table-striped\" *ngIf=\"venues\">\r\n    <thead>\r\n        <tr>\r\n            <th>Venue</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of venues; let i = index\">\r\n            <td>{{entry.name}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(i)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span></button>"

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
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
	var message_bar_component_1 = __webpack_require__(29);
	var universe_editor_component_1 = __webpack_require__(59);
	var fixture_options_editor_component_1 = __webpack_require__(60);
	var input_box_component_1 = __webpack_require__(39);
	var venue_1 = __webpack_require__(63);
	var venue_service_1 = __webpack_require__(44);
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
	        template: __webpack_require__(71),
	        providers: [venue_service_1.VenueService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, venue_service_1.VenueService])
	], VenueEditorComponent);
	exports.VenueEditorComponent = VenueEditorComponent;


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
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
	var message_bar_component_1 = __webpack_require__(29);
	var input_box_component_1 = __webpack_require__(39);
	var angular2_modal_1 = __webpack_require__(18);
	var bootstrap_1 = __webpack_require__(19);
	var fixture_definitions_service_1 = __webpack_require__(61);
	var venue_preset_service_1 = __webpack_require__(67);
	var group_service_1 = __webpack_require__(53);
	var venue_1 = __webpack_require__(63);
	var UniverseEditorComponent = (function () {
	    function UniverseEditorComponent(fixtureDefinitionsService, venuePresetService, groupService, overlay, vcRef, modal) {
	        var _this = this;
	        this.fixtureDefinitionsService = fixtureDefinitionsService;
	        this.venuePresetService = venuePresetService;
	        this.groupService = groupService;
	        this.vcRef = vcRef;
	        this.modal = modal;
	        overlay.defaultViewContainer = vcRef;
	        this.selectedFixtures = [];
	        this.selectedFixture = null;
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
	    UniverseEditorComponent.prototype.removeFixture = function (index) {
	        return __awaiter(this, void 0, void 0, function () {
	            var fixture, promise, result, error_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        fixture = this.universe.fixtures[index];
	                        return [4 /*yield*/, this.modal.confirm()
	                                .title("Are you sure?")
	                                .body("Are you sure you want to delete " + fixture.type.manufacturer + " " + fixture.type.model + "?")
	                                .isBlocking(true)
	                                .open()];
	                    case 1:
	                        promise = _a.sent();
	                        _a.label = 2;
	                    case 2:
	                        _a.trys.push([2, 4, , 5]);
	                        return [4 /*yield*/, promise.result];
	                    case 3:
	                        result = _a.sent();
	                        if (result) {
	                            this.universe.fixtures.splice(index, 1);
	                        }
	                        return [3 /*break*/, 5];
	                    case 4:
	                        error_1 = _a.sent();
	                        return [3 /*break*/, 5];
	                    case 5: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    UniverseEditorComponent.prototype.addFixture = function () {
	        var fixture = new venue_1.Fixture();
	        fixture.group = this.groups[0];
	        this.universe.fixtures.push(fixture);
	        this.selectedFixture = fixture;
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
	            var preset, _a, error_2;
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
	                        error_2 = _b.sent();
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
	            var promise, result, index, error_3, error_4;
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
	                        if (!result) return [3 /*break*/, 7];
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
	                        error_3 = _a.sent();
	                        this.messageBar.add("Error", error_3);
	                        return [3 /*break*/, 7];
	                    case 7: return [3 /*break*/, 9];
	                    case 8:
	                        error_4 = _a.sent();
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
	UniverseEditorComponent = __decorate([
	    core_1.Component({
	        selector: 'universe-editor',
	        template: __webpack_require__(68),
	        styles: [__webpack_require__(69)],
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService, venue_preset_service_1.VenuePresetService, group_service_1.GroupService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService, venue_preset_service_1.VenuePresetService, group_service_1.GroupService,
	        angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
	], UniverseEditorComponent);
	exports.UniverseEditorComponent = UniverseEditorComponent;


/***/ },
/* 60 */
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
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
	var fixture_definitions_service_1 = __webpack_require__(61);
	var group_service_1 = __webpack_require__(53);
	var venue_1 = __webpack_require__(63);
	var FixtureOptionsEditorComponent = (function () {
	    function FixtureOptionsEditorComponent(fixtureDefinitionsService, groupService) {
	        var _this = this;
	        this.fixtureDefinitionsService = fixtureDefinitionsService;
	        this.groupService = groupService;
	        this.visible = false;
	        this.visibleAnimate = false;
	        this.groupService
	            .get()
	            .then(function (value) { return _this.groups = value; });
	        this.fixtureDefinitionsService
	            .getSkeletons()
	            .then(function (value) { return _this.skeletons = value; });
	    }
	    FixtureOptionsEditorComponent.prototype.ngOnChanges = function (changes) {
	        if (changes["fixture"] != null) {
	            var fixtureChanges = changes["fixture"];
	            if (fixtureChanges.currentValue != null) {
	                var fixture = fixtureChanges.currentValue;
	                if (fixture.type.manufacturer == null || fixture.type.model == null) {
	                    fixture.type.manufacturer = this.getManufacturers()[0];
	                    fixture.type.model = this.getModels(fixture.type.manufacturer)[0];
	                }
	                this.updateDefinition(fixture.type.manufacturer, fixture.type.model);
	            }
	            else {
	                this.definition = null;
	                this.axisOptions = [];
	            }
	        }
	    };
	    FixtureOptionsEditorComponent.prototype.selectManufacturer = function (manufacturer) {
	        this.fixture.type.model = this.getModels(manufacturer)[0];
	        this.updateDefinition(manufacturer, this.fixture.type.model);
	    };
	    Object.defineProperty(FixtureOptionsEditorComponent.prototype, "moving", {
	        get: function () {
	            return this.definition.movements.length > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FixtureOptionsEditorComponent.prototype.getManufacturers = function () {
	        return this.skeletons
	            .map(function (value) { return value.manufacturer; })
	            .filter(function (value, index, array) { return array.indexOf(value) == index; });
	    };
	    FixtureOptionsEditorComponent.prototype.getModels = function (manufacturer) {
	        return this.skeletons
	            .filter(function (value) { return value.manufacturer == manufacturer; })
	            .map(function (value) { return value.model; });
	    };
	    FixtureOptionsEditorComponent.prototype.updateDefinition = function (manufacturer, model) {
	        return __awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            var _a;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        if (manufacturer != null && model == null) {
	                            model = this.getModels(manufacturer)[0];
	                        }
	                        if (!(manufacturer != null && model != null)) return [3 /*break*/, 2];
	                        _a = this;
	                        return [4 /*yield*/, this.fixtureDefinitionsService
	                                .get(manufacturer, model)];
	                    case 1:
	                        _a.definition = _b.sent();
	                        this.axisOptions = this.definition.movements
	                            .map(function (value) { return new AxisOptions(value.name, _this.fixture, _this.definition); });
	                        return [3 /*break*/, 3];
	                    case 2:
	                        this.definition = null;
	                        this.axisOptions = [];
	                        _b.label = 3;
	                    case 3: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    return FixtureOptionsEditorComponent;
	}());
	__decorate([
	    core_1.Input("fixture"),
	    __metadata("design:type", venue_1.Fixture)
	], FixtureOptionsEditorComponent.prototype, "fixture", void 0);
	FixtureOptionsEditorComponent = __decorate([
	    core_1.Component({
	        selector: 'fixture-options-editor',
	        template: __webpack_require__(64),
	        styles: [__webpack_require__(65)],
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService, group_service_1.GroupService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService, group_service_1.GroupService])
	], FixtureOptionsEditorComponent);
	exports.FixtureOptionsEditorComponent = FixtureOptionsEditorComponent;
	var AxisOptions = (function () {
	    function AxisOptions(name, fixture, definition) {
	        this.name = name;
	        this.fixture = fixture;
	        this.definition = definition;
	    }
	    Object.defineProperty(AxisOptions.prototype, "min", {
	        get: function () {
	            var _this = this;
	            return this.definition.movements.find(function (value) { return value.name == _this.name; }).min;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AxisOptions.prototype, "max", {
	        get: function () {
	            var _this = this;
	            return this.definition.movements.find(function (value) { return value.name == _this.name; }).max;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AxisOptions.prototype, "restrictionMin", {
	        get: function () {
	            var _this = this;
	            if (this.restricted) {
	                var restriction = this.fixture.options.axisRestrictions.find(function (value) { return value.name == _this.name; });
	                return restriction.min;
	            }
	            else {
	                return this.min;
	            }
	        },
	        set: function (value) {
	            var _this = this;
	            if (this.restricted) {
	                var restriction = this.fixture.options.axisRestrictions.find(function (value) { return value.name == _this.name; });
	                restriction.min = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AxisOptions.prototype, "restrictionMax", {
	        get: function () {
	            var _this = this;
	            if (this.restricted) {
	                var restriction = this.fixture.options.axisRestrictions.find(function (value) { return value.name == _this.name; });
	                return restriction.max;
	            }
	            else {
	                return this.max;
	            }
	        },
	        set: function (value) {
	            var _this = this;
	            if (this.restricted) {
	                var restriction = this.fixture.options.axisRestrictions.find(function (value) { return value.name == _this.name; });
	                restriction.max = value;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AxisOptions.prototype, "inverted", {
	        get: function () {
	            var _this = this;
	            var match = this.fixture.options.axisInversions.find(function (value) { return value == _this.name; });
	            return match != null;
	        },
	        set: function (value) {
	            if (value) {
	                this.fixture.options.axisInversions.push(this.name);
	            }
	            else {
	                var index = this.fixture.options.axisInversions.indexOf(this.name);
	                if (index != -1) {
	                    this.fixture.options.axisInversions.splice(index, 1);
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AxisOptions.prototype, "restricted", {
	        get: function () {
	            var _this = this;
	            var match = this.fixture.options.axisRestrictions.find(function (value) { return value.name == _this.name; });
	            return match != null;
	        },
	        set: function (value) {
	            var _this = this;
	            if (value) {
	                var options = new venue_1.AxisRestrictionOptions();
	                options.name = this.name;
	                options.min = this.min;
	                options.max = this.max;
	                this.fixture.options.axisRestrictions.push(options);
	            }
	            else {
	                var restriction = this.fixture.options.axisRestrictions.find(function (value) { return value.name == _this.name; });
	                var index = this.fixture.options.axisRestrictions.indexOf(restriction);
	                if (index != -1) {
	                    this.fixture.options.axisRestrictions.splice(index, 1);
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return AxisOptions;
	}());


/***/ },
/* 61 */
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
	__webpack_require__(45);
	var fixture_definition_1 = __webpack_require__(62);
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
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var fixture_definition_1 = __webpack_require__(62);
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
/* 64 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\" *ngIf=\"fixture\">\r\n    <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n            <fieldset name=\"commonFields\">\r\n                <labelled-input label=\"Manufacturer\">\r\n                    <select #input #model=\"ngModel\" name=\"manufacturer\" class=\"form-control\" [(ngModel)]=\"fixture.type.manufacturer\" (ngModelChange)=\"selectManufacturer($event)\">\r\n                        <option *ngFor=\"let manufacturer of getManufacturers()\">{{manufacturer}}</option>\r\n                    </select>\r\n                </labelled-input>\r\n                <labelled-input label=\"Model\">\r\n                    <select #input #model=\"ngModel\" name=\"model\" class=\"form-control\" [(ngModel)]=\"fixture.type.model\" (ngModelChange)=\"updateDefinition(fixture.type.manufacturer, $event)\" >\r\n                        <option *ngFor=\"let model of getModels(fixture.type.manufacturer)\">{{model}}</option>\r\n                    </select>\r\n                </labelled-input>\r\n                <labelled-input label=\"Channel\">\r\n                    <input #input #model=\"ngModel\" name=\"channel\" class=\"form-control\" min=\"1\" max=\"512\" type=\"number\" [(ngModel)]=\"fixture.channel\" />\r\n                </labelled-input>\r\n                <labelled-input label=\"Group\">\r\n                    <select #input #model=\"ngModel\" name=\"group\" class=\"form-control\" [(ngModel)]=\"fixture.group\" >\r\n                        <option *ngFor=\"let group of groups\">{{group.name}}</option>\r\n                    </select>\r\n                </labelled-input>\r\n            </fieldset>\r\n            <fieldset name=\"options\" *ngIf=\"definition\">\r\n                <labelled-input label=\"Max Brightness:\">\r\n                    <input #input #model=\"ngModel\" class=\"form-control\" [(ngModel)]=\"fixture.options.maxBrightness\" type=\"number\" min=\"0\" max=\"1\"\r\n                        step=\"0.01\" name=\"maxBrightness\" />\r\n                </labelled-input>\r\n                <div *ngIf=\"moving\" class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">Axis Options</div>\r\n                    <div class=\"panel-body\">\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Inverted</th>\r\n                                    <th>Restricted</th>\r\n                                    <th>Min (degrees)</th>\r\n                                    <th>Max (degrees)</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let axis of axisOptions\">\r\n                                    <td>{{axis.name}}</td>\r\n                                    <td>\r\n                                        <div class=\"checkbox\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"axis.inverted\" [name]=\"'inverted[' + axis.name + ']'\" >\r\n                                                Inverted\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"checkbox\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"axis.restricted\" [name]=\"'restricted[' + axis.name + ']'\" >\r\n                                                Restricted\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <table-input>\r\n                                            <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"axis.restrictionMin\" [name]=\"'restrictionMin[' + axis.name + ']'\"\r\n                                                [min]=\"axis.min\" [max]=\"axis.max\" [disabled]=\"!axis.restricted\"\r\n                                            />\r\n                                        </table-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <table-input>\r\n                                            <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"axis.restrictionMax\" [name]=\"'restrictionMax[' + axis.name + ']'\"\r\n                                                [min]=\"axis.min\" [max]=\"axis.max\" [disabled]=\"!axis.restricted\"\r\n                                            />\r\n                                        </table-input>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(66);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 67 */
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
	__webpack_require__(45);
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
/* 68 */
/***/ function(module, exports) {

	module.exports = "<div role=\"tabpanel\" *ngIf=\"universe && skeletons\">\r\n    <!-- Nav tabs -->\r\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n        <li [ngClass]=\"{'active': selectedFixture == null}\">\r\n            <a (click)=\"selectedFixture = null\">Fixtures</a>\r\n        </li>\r\n        <li *ngFor=\"let fixture of universe.fixtures; let i = index\" [ngClass]=\"{'active': selectedFixture == fixture}\">\r\n            <a (click)=\"selectedFixture = fixture\">{{fixture.channel}} {{fixture.type.manufacturer}} {{fixture.type.model}}\r\n                <span class=\"glyphicon glyphicon-remove\" (click)=\"removeFixture(i)\"></span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a class=\"btn\" (click)=\"addFixture()\"><span class=\"glyphicon glyphicon-plus\"></span></a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"panel panel-default\" *ngIf=\"universe && skeletons && selectedFixture == null\">\r\n    <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Selected</th>\r\n                        <th>Manufacturer</th>\r\n                        <th>Model</th>\r\n                        <th>Channel</th>\r\n                        <th>Group</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let fixture of universe.fixtures; let i = index\">\r\n                        <td>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" [ngModel]=\"isSelected(fixture)\" (ngModelChange)=\"selectFixture(fixture, $event)\" [name]=\"'selected[' + i + ']'\" >\r\n                                </label>\r\n                            </div>\r\n                        </td>\r\n                        <td>{{fixture.type.manufacturer}}</td>\r\n                        <td>{{fixture.type.model}}</td>\r\n                        <td>{{fixture.channel}}</td>\r\n                        <td>{{fixture.group}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n                <button class=\"btn btn-success\" (click)=\"addFixture()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n            <div class=\"col-sm-8 text-right\">\r\n                <div class=\"col-sm-8\">\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectedPresetName\" name=\"selectedPreset\">\r\n                    <option *ngFor=\"let venuePresetName of venuePresetNames\">{{venuePresetName}}</option>\r\n                </select>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <button type=\"button\" class=\"btn btn-success\" [disabled]=\"selectedPresetName == null\" (click)=\"loadPreset(selectedPresetName)\">\r\n                    <span class=\"glyphicon glyphicon-floppy-open\"></span>\r\n                </button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"selectedFixtures.length == 0\" (click)=\"savePreset()\">\r\n                    <span class=\"glyphicon glyphicon-floppy-save\"></span>\r\n                </button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" [disabled]=\"selectedPresetName == null\" (click)=\"removePreset(selectedPresetName)\">\r\n                    <span class=\"glyphicon glyphicon-remove\"></span>\r\n                </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<fixture-options-editor #fixtureOptionsEditor [fixture]=\"selectedFixture\" ></fixture-options-editor>"

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(70);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}", ""]);
	
	// exports


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Venue Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"venue\" class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"Name:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"venue.name\" #model=\"ngModel\">\r\n        </labelled-input>\r\n\r\n        <div role=\"tabpanel\">\r\n            <!-- Nav tabs -->\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li *ngFor=\"let universe of venue.universes; let i = index\" [ngClass]=\"{'active': selectedUniverse == universe}\" class=\"active\">\r\n                    <a (click)=\"selectedUniverse = universe\">{{universe.name}}\r\n                        <span *ngIf=\"i > 0\" class=\"glyphicon glyphicon-remove\" (click)=\"removeUniverse(i)\"></span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"btn\" (click)=\"addUniverse()\"><span class=\"glyphicon glyphicon-plus\"></span></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"panel panel-default\" *ngIf=\"selectedUniverse\">\r\n            <div class=\"panel-body\">\r\n                <labelled-input label=\"Name:\">\r\n                    <input required #input #model=\"ngModel\" [(ngModel)]=\"selectedUniverse.name\" type=\"text\" class=\"form-control\" [name]=\"'universeName[' + i + ']'\"\r\n                    />\r\n                </labelled-input>\r\n                <labelled-input label=\"Universe ID:\">\r\n                    <input #input #model=\"ngModel\" [(ngModel)]=\"selectedUniverse.universeID\" type=\"number\" class=\"form-control\" min=\"1\" max=\"65535\"\r\n                        [name]=\"'universeNumber[' + i + ']'\" />\r\n                </labelled-input>\r\n            </div>\r\n\r\n            <universe-editor [universe]=\"selectedUniverse\" [messageBar]=\"messageBar\" [inputBox]=\"inputBox\"></universe-editor>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!editorForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>\r\n<input-box #inputBox></input-box>"

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
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
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
	var message_bar_component_1 = __webpack_require__(29);
	var angular2_modal_1 = __webpack_require__(18);
	var bootstrap_1 = __webpack_require__(19);
	var fixture_definitions_service_1 = __webpack_require__(61);
	var FixtureDefinitionsComponent = (function () {
	    function FixtureDefinitionsComponent(fixtureDefinitionsService, overlay, vcRef, modal) {
	        var _this = this;
	        this.fixtureDefinitionsService = fixtureDefinitionsService;
	        this.modal = modal;
	        overlay.defaultViewContainer = vcRef;
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
	            var promise, result, index, reason_1, error_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.modal.confirm()
	                            .title("Are you sure?")
	                            .body("Are you sure you want to delete the definition for " + fixture.manufacturer + " " + fixture.model + "?")
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
	                        if (!result) return [3 /*break*/, 7];
	                        _a.label = 4;
	                    case 4:
	                        _a.trys.push([4, 6, , 7]);
	                        return [4 /*yield*/, this.fixtureDefinitionsService.delete(fixture)];
	                    case 5:
	                        _a.sent();
	                        this.messageBar.add("Success", fixture.manufacturer + " " + fixture.model + " was deleted");
	                        index = this.data.indexOf(fixture);
	                        this.data.splice(index, 1);
	                        return [3 /*break*/, 7];
	                    case 6:
	                        reason_1 = _a.sent();
	                        this.messageBar.add("Error", "Could not delete " + fixture.manufacturer + " " + fixture.model + ". " + reason_1);
	                        return [3 /*break*/, 7];
	                    case 7: return [3 /*break*/, 9];
	                    case 8:
	                        error_1 = _a.sent();
	                        return [3 /*break*/, 9];
	                    case 9: return [2 /*return*/];
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
	FixtureDefinitionsComponent = __decorate([
	    core_1.Component({
	        selector: 'fixture-definitions',
	        template: __webpack_require__(73),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService, angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
	], FixtureDefinitionsComponent);
	exports.FixtureDefinitionsComponent = FixtureDefinitionsComponent;


/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definitions</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"form-group form-inline\" *ngIf=\"data\">\r\n    <div class=\"checkbox\">\r\n        <label>\r\n            <input type=\"checkbox\" [(ngModel)]=\"manufacturerFilterEnabled\" />\r\n            Filter by manufacturer\r\n        </label>\r\n    </div>\r\n    <select required class=\"form-control\" [disabled]=\"!manufacturerFilterEnabled\" [(ngModel)]=\"manufacturerFilter\">\r\n        <option *ngFor=\"let manufacturer of manufacturers\">{{manufacturer}}</option>\r\n    </select>\r\n</div>\r\n<table class=\"table table-striped\" *ngIf=\"data\">\r\n    <thead>\r\n        <tr>\r\n            <th>Manufacturer</th>\r\n            <th>Model</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of filteredData\">\r\n            <td>{{entry.manufacturer}}</td>\r\n            <td>{{entry.model}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span></button>"

/***/ },
/* 74 */
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
	var message_bar_component_1 = __webpack_require__(29);
	var angular2_modal_1 = __webpack_require__(18);
	var bootstrap_1 = __webpack_require__(19);
	var fixture_definition_1 = __webpack_require__(62);
	var fixture_definitions_service_1 = __webpack_require__(61);
	var FixtureDefinitionEditorComponent = (function () {
	    function FixtureDefinitionEditorComponent(route, fixtureService, overlay, vcRef, modal) {
	        this.route = route;
	        this.fixtureService = fixtureService;
	        this.modal = modal;
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
	FixtureDefinitionEditorComponent = __decorate([
	    core_1.Component({
	        selector: 'fixture-definitions-editor',
	        template: __webpack_require__(75),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, fixture_definitions_service_1.FixtureDefinitionsService, angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
	], FixtureDefinitionEditorComponent);
	exports.FixtureDefinitionEditorComponent = FixtureDefinitionEditorComponent;


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definition Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"definition\" class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <datalist id=\"allManufacturers\">\r\n            <option *ngFor=\"let manufacturer of allManufacturers\">{{manufacturer}}</option>\r\n        </datalist>\r\n        <labelled-input label=\"Manufacturer:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"manufacturer\" [(ngModel)]=\"definition.manufacturer\" #model=\"ngModel\"\r\n                list=\"allManufacturers\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Model:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"model\" [(ngModel)]=\"definition.name\" #model=\"ngModel\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Type:\">\r\n            <select #input #model=\"ngModel\" class=\"form-control\" name=\"type\" [(ngModel)]=\"definition.type\">\r\n            <option>LED</option>\r\n            <option>Tungsten</option>\r\n            <option>Effect</option>\r\n        </select>\r\n        </labelled-input>\r\n        <datalist id=\"channelList\" name=\"channelList\">\r\n            <option>Master</option>\r\n            <option>Strobe</option>\r\n            <option>Red</option>\r\n            <option>Green</option>\r\n            <option>Blue</option>\r\n            <option>UV</option>\r\n            <option>ColorWheel</option>\r\n            <option>PanCoarse</option>\r\n            <option>PanFine</option>\r\n            <option>TiltCoarse</option>\r\n            <option>TiltFine</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Channels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>DMX</th>\r\n                            <th>Name</th>\r\n                            <th>Min</th>\r\n                            <th>Max</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let channel of definition.channels; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.dmx\" min=\"1\" max=\"512\" [name]=\"'channelDMX[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required [(unique)]=\"channelNames\" class=\"form-control\" type=\"text\" [(ngModel)]=\"channel.name\"\r\n                                        [name]=\"'channelName[' + i + ']'\" list=\"channelList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.min\" min=\"0\" max=\"255\" [name]=\"'channelMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.max\" min=\"0\" max=\"255\" [name]=\"'channelMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeChannel(channel)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addChannel()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <datalist id=\"axisList\" name=\"axisList\">\r\n            <option>Pan</option>\r\n            <option>Tilt</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Movement Axis</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Min (degrees)</th>\r\n                            <th>Max (degrees)</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let movement of definition.movements; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" [unique]=\"colorWheelNames\" type=\"text\" [(ngModel)]=\"movement.name\"\r\n                                        [name]=\"'axisName[' + i + ']'\" list=\"axisList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.min\" [name]=\"'axisMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.max\" [name]=\"'axisMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeAxis(movement)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addAxis()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Color Wheels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Color</th>\r\n                            <th>DMX Start</th>\r\n                            <th>DMX End</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let entry of definition.colorWheel; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" [unique]=\"colorWheelNames\" required class=\"form-control\" type=\"text\" [(ngModel)]=\"entry.name\"\r\n                                        [name]=\"'colorWheelName[' + i + ']'\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"color\" [(ngModel)]=\"entry.color\" [name]=\"'colorWheelColor[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxStart\" [name]=\"'colorWheelMin[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxEnd\" [name]=\"'colorWheelMax[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeColorWheelEntry(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addColorWheelEntry()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!editorForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGUyYTEyZWE1ZTI0NDBhMjI0MjYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzPzRlYWMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LmNzcz9hNzBjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXAuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLWVkaXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LmNzcz82ZjFmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtcHJlc2V0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LmNzcz8yZDVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHNCQUFjLEVBQUUsQ0FBQztBQUNqQixLQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFD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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZTJhMTJlYTVlMjQ0MGEyMjQyNiIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnem9uZS5qcyc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Wm9uZSA9IFpvbmUuY3VycmVudC5mb3JrKHtcclxuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLycsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgcHJlYm9vdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxhcHA+PC9hcHA+PC9ib2R5PjwvaHRtbD4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBlcnJvciBvY2N1cnMgd2hpbGUgcmVuZGVyaW5nIHRoZSBtb2R1bGUsIHJlamVjdCB0aGUgd2hvbGUgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Rab25lLnJ1bjxQcm9taXNlPHN0cmluZz4+KCgpID0+IHBsYXRmb3JtLnNlcmlhbGl6ZU1vZHVsZShBcHBNb2R1bGUpKS50aGVuKGh0bWwgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcclxuICAgICAgICB9LCByZWplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcclxuXHJcbmltcG9ydCB7IE1JTk1BWF9ESVJFQ1RJVkVTIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XHJcbmltcG9ydCB7IE1heFZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XHJcbmltcG9ydCB7IFVuaXF1ZVZhbGlkYXRvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmVcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xyXG5pbXBvcnQgeyBCb290c3RyYXBNb2RhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0YXR1c1BhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYWJlbGxlZElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGFibGVJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElucHV0Qm94Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JvdXBzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVudWVzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW51ZUVkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2VFZGl0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZlbnVlUHJlc2V0U2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLXByZXNldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcblxyXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxyXG4gICAgICAgIERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICBHcm91cHNDb21wb25lbnQsXHJcbiAgICAgICAgVmVudWVzQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbnVlRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIFVuaXZlcnNlRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudCxcclxuICAgICAgICBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCxcclxuXHJcbiAgICAgICAgTUlOTUFYX0RJUkVDVElWRVMsXHJcbiAgICAgICAgVW5pcXVlVmFsaWRhdG9yLFxyXG5cclxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIFN0YXR1c1BhbmVsQ29tcG9uZW50LFxyXG4gICAgICAgIE1lc3NhZ2VCYXJDb21wb25lbnQsXHJcbiAgICAgICAgTGFiZWxsZWRJbnB1dENvbXBvbmVudCxcclxuICAgICAgICBUYWJsZUlucHV0Q29tcG9uZW50LFxyXG4gICAgICAgIElucHV0Qm94Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuXHJcbiAgICAgICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIEJvb3RzdHJhcE1vZGFsTW9kdWxlLFxyXG5cclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdkYXNoYm9hcmQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdkYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdzZXR0aW5ncycsIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZ3JvdXBzJywgY29tcG9uZW50OiBHcm91cHNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndmVudWVzJywgY29tcG9uZW50OiBWZW51ZXNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndmVudWVzL25ldycsIGNvbXBvbmVudDogVmVudWVFZGl0b3JDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndmVudWVzLzppZCcsIGNvbXBvbmVudDogVmVudWVFZGl0b3JDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZml4dHVyZS1kZWZpbml0aW9ucycsIGNvbXBvbmVudDogRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMvbmV3JywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmaXh0dXJlLWRlZmluaXRpb25zLzptYW51ZmFjdHVyZXIvOm1vZGVsJywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdzZXRzJyB9XHJcbiAgICAgICAgXSlcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbRml4dHVyZU9wdGlvbnNFZGl0b3JDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGVcclxue1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYtbWVudT48L25hdi1tZW51PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBib2R5LWNvbnRlbnRcXFwiPlxcclxcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxyXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL21pbi12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuZXhwb3J0ICogZnJvbSAnLi9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBNaW5WYWx1ZVZhbGlkYXRvciB9IGZyb20gJy4vbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXhWYWx1ZVZhbGlkYXRvciB9IGZyb20gJy4vbWF4LXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1JTk1BWF9ESVJFQ1RJVkVTOiBbYW55XSA9IFtNaW5WYWx1ZVZhbGlkYXRvciwgTWF4VmFsdWVWYWxpZGF0b3JdO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvaW5kZXgudHMiLCJpbXBvcnQgeyBBdHRyaWJ1dGUsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjb25zdCBNSU5fVkFMVUVfVkFMSURBVE9SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWluVmFsdWVWYWxpZGF0b3IpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbWluXVtmb3JtQ29udHJvbE5hbWVdLFttaW5dW2Zvcm1Db250cm9sXSxbbWluXVtuZ01vZGVsXScsXHJcbiAgICBwcm92aWRlcnM6IFtNSU5fVkFMVUVfVkFMSURBVE9SXSxcclxuICAgIGhvc3Q6IHsgJ1thdHRyLm1pbl0nOiAnbWluID8gbWluIDogMCcgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1pblZhbHVlVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkNoYW5nZXNcclxue1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcclxuXHJcbiAgICBASW5wdXQoKSBtaW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQEF0dHJpYnV0ZSgnbWluJykgbW46IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAobW4gIT09IHVuZGVmaW5lZCAmJiBtbiAhPT0gbnVsbClcclxuICAgICAgICB7XHQvLyBpc1ByZXNlbnRcclxuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gcGFyc2VJbnQobW4sIDEwKTtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihhdHRyVmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbiA9IG1uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtaW5DaGFuZ2UgPSBjaGFuZ2VzWydtaW4nXTtcclxuICAgICAgICBpZiAobWluQ2hhbmdlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gTWluVmFsdWVWYWxpZGF0b3IubWluKHBhcnNlSW50KHRoaXMubWluLCAxMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0geyByZXR1cm4gdGhpcy5fdmFsaWRhdG9yKGMpOyB9XHJcblxyXG4gICAgc3RhdGljIG1pbihtbjogbnVtYmVyKTogVmFsaWRhdG9yRm5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gK2NvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiAodiA8IG1uID8geyAnbWluJzogeyAnbWluVmFsdWUnOiBtbiwgJ2FjdHVhbFZhbHVlJzogdiB9IH0gOiBudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBBdHRyaWJ1dGUsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BWF9WQUxVRV9WQUxJREFUT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXhWYWx1ZVZhbGlkYXRvciksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1ttYXhdW2Zvcm1Db250cm9sTmFtZV0sW21pbl1bZm9ybUNvbnRyb2xdLFttaW5dW25nTW9kZWxdJyxcclxuICAgIHByb3ZpZGVyczogW01BWF9WQUxVRV9WQUxJREFUT1JdLFxyXG4gICAgaG9zdDogeyAnW2F0dHIubWF4XSc6ICdtYXggPyBtYXggOiAwJyB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWF4VmFsdWVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uQ2hhbmdlc1xyXG57XHJcbiAgICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xyXG5cclxuICAgIEBJbnB1dCgpIG1heDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBAQXR0cmlidXRlKCdtYXgnKSBteDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChteCAhPT0gdW5kZWZpbmVkICYmIG14ICE9PSBudWxsKVxyXG4gICAgICAgIHtcdC8vIGlzUHJlc2VudFxyXG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBwYXJzZUludChteCwgMTApO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGF0dHJWYWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gbXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1heENoYW5nZSA9IGNoYW5nZXNbJ21heCddO1xyXG4gICAgICAgIGlmIChtYXhDaGFuZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlVmFsaWRhdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBNYXhWYWx1ZVZhbGlkYXRvci5tYXgocGFyc2VJbnQodGhpcy5tYXgsIDEwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7IHJldHVybiB0aGlzLl92YWxpZGF0b3IoYyk7IH1cclxuXHJcbiAgICBzdGF0aWMgbWF4KG14OiBudW1iZXIpOiBWYWxpZGF0b3JGblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHYgPSArY29udHJvbC52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICh2ID4gbXggPyB7ICdtYXgnOiB7ICdtYXhWYWx1ZSc6IG14LCAnYWN0dWFsVmFsdWUnOiB2IH0gfSA6IG51bGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgSW5wdXQsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdW5pcXVlXVtuZ01vZGVsXSxbdW5pcXVlXVtmb3JtQ29udHJvbF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVbmlxdWVWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWxpZGF0b3Jcclxue1xyXG4gICAgQElucHV0KCkgdW5pcXVlOiBhbnlbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMudW5pcXVlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hdGNoZXMgPSB0aGlzLnVuaXF1ZS5maWx0ZXIoKHZhbHVlOiBhbnkpID0+IGMudmFsdWUgPT09IHZhbHVlKTtcclxuICAgICAgICBpZiAoYy5kaXJ0eSAmJiBtYXRjaGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4geyB1bmlxdWU6IHsgdmFsaWQ6IGZhbHNlIH0gfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuaXF1ZS91bmlxdWUuZGlyZWN0aXZlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItbW9kYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1tb2RhbFwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHsgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItc3RhdGljLXRvcFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNteU5hdmJhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+IFxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPkthZG1pdW0gT1NDIERNWDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXFxcIiBpZD1cXFwibXlOYXZiYXJcXFwiPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48YSByb3V0ZXJMaW5rPVxcXCIvZGFzaGJvYXJkXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lXFxcIj48L3NwYW4+IEhvbWU8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZ1xcXCI+PC9zcGFuPiBTZXR1cFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48YSByb3V0ZXJMaW5rPVxcXCIvc2V0dGluZ3NcXFwiPlNldHRpbmdzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgcm91dGVyTGluaz1cXFwiL2dyb3Vwc1xcXCI+R3JvdXBzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi92ZW51ZXNcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0XFxcIj48L3NwYW4+IFZlbnVlczwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvZml4dHVyZS1kZWZpbml0aW9uc1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3RcXFwiPjwvc3Bhbj4gRml4dHVyZSBEZWZpbml0aW9uczwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvbmF2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tIFwiLi4vc3RhdHVzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RhdHVzLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdHVzUGFuZWxDb21wb25lbnRcclxue1xyXG4gICAgcHVibGljIHN0YXR1czogU3RhdHVzO1xyXG4gICAgQElucHV0KFwibmFtZVwiKSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gbmV3IFN0YXR1cyhcIlVua25vd25cIiwgXCJVbmtub3duXCIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC50cyIsImV4cG9ydCBjbGFzcyBTdGF0dXNcclxue1xyXG4gICAgc3RhdGljIFN0YXR1c1RhYmxlOiBTdGF0dXNUYWJsZSA9IHtcclxuICAgICAgICBTdWNjZXNzOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtc3VjY2Vzc1wiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLW9rLXNpZ25cIiB9LFxyXG4gICAgICAgIEVycm9yOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtZGFuZ2VyXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24tcmVtb3ZlLXNpZ25cIiB9LFxyXG4gICAgICAgIFdhcm5pbmc6IHsgYWxlcnRTdHlsZTogXCJhbGVydC13YXJuaW5nXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24taW5mby1zaWduXCIgfSxcclxuICAgICAgICBVbmtub3duOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtaW5mb1wiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ25cIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjb2RlOiBTdGF0dXNDb2RlO1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb2RlOiBTdGF0dXNDb2RlLCBtZXNzYWdlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoY29kZTogU3RhdHVzQ29kZSwgbWVzc2FnZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGFsZXJ0U3R5bGUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXR1cy5TdGF0dXNUYWJsZVt0aGlzLmNvZGVdLmFsZXJ0U3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBnbHlwaEljb24oKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXR1cy5TdGF0dXNUYWJsZVt0aGlzLmNvZGVdLmdseXBoSWNvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3RhdHVzQ29kZSA9IFwiVW5rbm93blwiIHwgXCJFcnJvclwiIHwgXCJTdWNjZXNzXCIgfCBcIldhcm5pbmdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzVGFibGVcclxue1xyXG4gICAgW2tleTogc3RyaW5nXTogU3RhdHVzSW5mbztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1c0luZm9cclxue1xyXG4gICAgYWxlcnRTdHlsZTogc3RyaW5nO1xyXG4gICAgZ2x5cGhJY29uOiBzdHJpbmc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+e3tuYW1lfX0gPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiIFtuZ0NsYXNzXT1cXFwic3RhdHVzLmFsZXJ0U3R5bGVcXFwiPlxcclxcbiAgICAgICAge3tzdGF0dXMubWVzc2FnZX19PGJyPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBzdGF0dXMtZ2x5cGhcXFwiIFtuZ0NsYXNzXT1cXFwic3RhdHVzLmdseXBoSWNvblxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YXR1cy1nbHlwaCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1cywgU3RhdHVzQ29kZSB9IGZyb20gXCIuLi9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtZXNzYWdlLWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9tZXNzYWdlLWJhci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQmFyQ29tcG9uZW50XHJcbntcclxuICAgIHByaXZhdGUgbWVzc2FnZXM6IFN0YXR1c1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmUoc3RhdHVzOiBTdGF0dXMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tZXNzYWdlcy5pbmRleE9mKHN0YXR1cyk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoc3RhdHVzQ29kZTogU3RhdHVzQ29kZSwgbWVzc2FnZTogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChuZXcgU3RhdHVzKHN0YXR1c0NvZGUsIG1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nRm9yPVxcXCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0XFxcIiBbbmdDbGFzc109XFxcIm1lc3NhZ2UuYWxlcnRTdHlsZVxcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcInJlbW92ZShtZXNzYWdlKVxcXCIgYXJpYS1sYWJlbD1cXFwiY2xvc2VcXFwiPiZ0aW1lczs8L2E+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uXFxcIiBbbmdDbGFzc109XFxcIm1lc3NhZ2UuZ2x5cGhJY29uXFxcIj48L3NwYW4+IHt7bWVzc2FnZS5tZXNzYWdlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xhYmVsbGVkLWlucHV0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsbGVkSW5wdXRDb21wb25lbnRcclxue1xyXG4gICAgQElucHV0KCkgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQENvbnRlbnRDaGlsZChcIm1vZGVsXCIpIHB1YmxpYyBtb2RlbDogRWxlbWVudFJlZjtcclxuICAgIEBDb250ZW50Q2hpbGQoXCJpbnB1dFwiKSBwdWJsaWMgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydoYXMtZXJyb3InOiBtb2RlbC5lcnJvcnMgJiYgbW9kZWwudG91Y2hlZH1cXFwiPlxcclxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTJcXFwiIFthdHRyLmZvcl09XFxcImlucHV0Lm5hbWVcXFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5yZXF1aXJlZFxcXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/Lm1pblxcXCI+VGhpcyBmaWVsZCBoYXMgYSBtaW5pbXVtIHZhbHVlIG9mIHt7bW9kZWwuZXJyb3JzPy5taW4ubWluVmFsdWV9fTwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/Lm1heFxcXCI+VGhpcyBmaWVsZCBoYXMgYSBtYXhpbXVtIHZhbHVlIG9mIHt7bW9kZWwuZXJyb3JzPy5tYXgubWF4VmFsdWV9fTwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5kaXJ0eSAmJiBtb2RlbC5lcnJvcnM/LnVuaXF1ZVxcXCI+RW50cmllcyBpbiB0aGlzIGZpZWxkIG11c3QgYmUgdW5pcXVlPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RhYmxlLWlucHV0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RhYmxlLWlucHV0LmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlSW5wdXRDb21wb25lbnRcclxue1xyXG4gICAgQElucHV0KCkgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQENvbnRlbnRDaGlsZChcIm1vZGVsXCIpIHB1YmxpYyBtb2RlbDogRWxlbWVudFJlZjtcclxuICAgIEBDb250ZW50Q2hpbGQoXCJpbnB1dFwiKSBwdWJsaWMgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IG1vZGVsLmVycm9ycyAmJiBtb2RlbC50b3VjaGVkIH1cXFwiPlxcclxcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5yZXF1aXJlZFxcXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ubWluXFxcIj5UaGlzIGZpZWxkIGhhcyBhIG1pbmltdW0gdmFsdWUgb2Yge3ttb2RlbC5lcnJvcnM/Lm1pbi5taW5WYWx1ZX19PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5tYXhcXFwiPlRoaXMgZmllbGQgaGFzIGEgbWF4aW11bSB2YWx1ZSBvZiB7e21vZGVsLmVycm9ycz8ubWF4Lm1heFZhbHVlfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/LnVuaXF1ZVxcXCI+RW50cmllcyBpbiB0aGlzIGZpZWxkIG11c3QgYmUgdW5pcXVlPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaW5wdXQtYm94JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2lucHV0LWJveC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZShcIi4vaW5wdXQtYm94LmNvbXBvbmVudC5jc3NcIildXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEJveENvbXBvbmVudFxyXG57XHJcbiAgICBoZWFkZXI6IHN0cmluZztcclxuICAgIGJvZHk6IHN0cmluZztcclxuICAgIGFjY2VwdFZlcmI6IHN0cmluZztcclxuICAgIGNhbmNlbFZlcmI6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB2aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHJlc29sdmU6ICh2YWx1ZT86IHN0cmluZyB8IFByb21pc2VMaWtlPHN0cmluZz4pID0+IHZvaWQ7XHJcbiAgICByZWplY3Q6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZXNwb25zZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KGhlYWRlcjogc3RyaW5nLCBib2R5OiBzdHJpbmcsIGFjY2VwdFZlcmI6IHN0cmluZywgY2FuY2VsVmVyYjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICAgICAgICB0aGlzLmFjY2VwdFZlcmIgPSBhY2NlcHRWZXJiO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsVmVyYiA9IGNhbmNlbFZlcmI7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGVBbmltYXRlID0gdHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoaWRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZpc2libGUgPSBmYWxzZSwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWNjZXB0Q2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsQ2xpY2soKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2luJzogdmlzaWJsZUFuaW1hdGV9XFxcIiBbbmdTdHlsZV09XFxcInsnZGlzcGxheSc6IHZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnLCAnb3BhY2l0eSc6IHZpc2libGVBbmltYXRlID8gMSA6IDB9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIj5cXHJcXG4gICAgICAgIDwhLS0gTW9kYWwgY29udGVudC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxDbGljaygpXFxcIj4mdGltZXM7PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj57e2hlYWRlcn19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsbGVkLWlucHV0IFtsYWJlbF09XFxcImJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVzcG9uc2VcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHJlcXVpcmVkIFtuYW1lXT1cXFwiaW5wdXRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJhY2NlcHRDbGljaygpXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj57e2FjY2VwdFZlcmJ9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiY2FuY2VsQ2xpY2soKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+e3tjYW5jZWxWZXJifX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQtYm94LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWwge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNQYW5lbENvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi4vdmVudWVzL3ZlbnVlLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFN0YXR1c0NvZGUgfSBmcm9tIFwiLi4vc3RhdHVzL3N0YXR1c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1ZlbnVlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcInZlbnVlXCIpIHZlbnVlOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJzYWNuVHJhbnNtaXR0ZXJcIikgc2FjblRyYW5zbWl0dGVyOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJvc2NMaXN0ZW5lclwiKSBvc2NMaXN0ZW5lcjogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiZml4dHVyZXNcIikgZml4dHVyZXM6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgd2ViU29ja2V0OiBXZWJTb2NrZXQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ja2V0VVJMID0gZ2V0U29ja2V0VVJMKFwiSW5kZXhcIik7XHJcbiAgICBwcml2YXRlIHZlbnVlTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmVudWVTZXJ2aWNlOiBWZW51ZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdmVudWVTZXJ2aWNlLmdldE5hbWVzKClcclxuICAgICAgICAgICAgLnRoZW4obmFtZXMgPT4gdGhpcy52ZW51ZU5hbWVzID0gbmFtZXMpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uOiBhbnkpID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB0aGlzLndlYlNvY2tldCA9IG5ldyBXZWJTb2NrZXQoRGFzaGJvYXJkQ29tcG9uZW50LnNvY2tldFVSTCk7XHJcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2OiBNZXNzYWdlRXZlbnQpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gSlNPTi5wYXJzZShldi5kYXRhKSBhcyBTdGF0dXNEYXRhO1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzUGFuZWw6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cy5jb250cm9sbGVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiVmVudWVzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLnZlbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNBQ05UcmFuc21pdHRlcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMuc2FjblRyYW5zbWl0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk9TQ0xpc3RlbmVyc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy5vc2NMaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkZpeHR1cmVzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLmZpeHR1cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdHVzUGFuZWwuc3RhdHVzLnVwZGF0ZShzdGF0dXMuY29kZSwgc3RhdHVzLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlVmVudWUodmVudWVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52ZW51ZVNlcnZpY2VcclxuICAgICAgICAgICAgLmFjdGl2YXRlKHZlbnVlTmFtZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgdmVudWVOYW1lICsgXCIgc3VjY2Vzc2Z1bGx5IGxvYWRlZFwiKSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXR1c0RhdGFcclxue1xyXG4gICAgY29kZTogU3RhdHVzQ29kZTtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIGNvbnRyb2xsZXI6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U29ja2V0VVJMKGNvbnRyb2xsZXI6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYWN0aW9uVVJMID0gZ2V0QWN0aW9uVVJMKGNvbnRyb2xsZXIsIFwiU29ja2V0XCIpO1xyXG4gICAgbGV0IHNvY2tldFVSTCA9IGFjdGlvblVSTC5yZXBsYWNlKFwiaHR0cFwiLCBcIndzXCIpO1xyXG4gICAgcmV0dXJuIHNvY2tldFVSTDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWN0aW9uVVJMKC4uLnBhcnRzOiBzdHJpbmdbXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgb3JpZ2luYWxVUkw6IHN0cmluZyA9IGRvY3VtZW50LlVSTDtcclxuICAgIGxldCB1cmxQYXJ0czogc3RyaW5nW10gPSBkb2N1bWVudC5VUkwuc3BsaXQoXCIvXCIpO1xyXG4gICAgbGV0IHByb3RvY29sOiBzdHJpbmcgPSB1cmxQYXJ0c1swXTtcclxuICAgIGxldCBob3N0OiBzdHJpbmcgPSB1cmxQYXJ0c1syXTtcclxuXHJcbiAgICBsZXQgcm9vdDogc3RyaW5nID0gcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0O1xyXG5cclxuICAgIGxldCBwYXJ0c0pvaW5lZCA9IHBhcnRzLmpvaW4oXCIvXCIpO1xyXG5cclxuICAgIHJldHVybiByb290ICsgXCIvXCIgKyBwYXJ0c0pvaW5lZDtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBWZW51ZSB9IGZyb20gXCIuL3ZlbnVlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWZW51ZVNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSB2ZW51ZVVybCA9IFwiL2FwaS9WZW51ZVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldChpZDogc3RyaW5nKTogUHJvbWlzZTxWZW51ZT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlVXJsICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBWZW51ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5hbWVzKCk6IFByb21pc2U8c3RyaW5nW10+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBzdHJpbmdbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGl2YXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybCArIFwiL2FjdGl2YXRlL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXQoaWQ6IHN0cmluZywgdmVudWU6IFZlbnVlKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMudmVudWVVcmwgKyBcIi9cIiArIGlkLCB2ZW51ZSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMudmVudWVVcmwgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI3ZlbnVlIG5hbWU9XFxcIlZlbnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgKm5nSWY9XFxcInZlbnVlTmFtZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+TG9hZCBWZW51ZVxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB2ZW51ZU5hbWUgb2YgdmVudWVOYW1lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiYWN0aXZhdGVWZW51ZSh2ZW51ZU5hbWUpXFxcIj57e3ZlbnVlTmFtZX19PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjc2FjblRyYW5zbWl0dGVyIG5hbWU9XFxcInNBQ04gVHJhbnNtaXR0ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9zYWNuVHJhbnNtaXR0ZXJMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICNvc2NMaXN0ZW5lciBuYW1lPVxcXCJPU0MgTGlzdGVuZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9vc2NMaXN0ZW5lckxpdmVcXFwiPkxpdmU8L2E+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI2ZpeHR1cmVzIG5hbWU9XFxcIkZpeHR1cmVzXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvZml4dHVyZXNMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXR0aW5ncy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzLCBVbmljYXN0VGFyZ2V0IH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcblxyXG52YXIgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1NldHRpbmdzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3M7XHJcbiAgICBzYXZpbmc6IGJvb2xlYW47XHJcbiAgICB0ZXN0RWxlbWVudDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3NTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50ZXN0RWxlbWVudCA9IFwic3R1ZmZcIjtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTZXJ2aWNlLmdldCgpLnRoZW4oZGF0YSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dGluZ3NTZXJ2aWNlLnNhdmUodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIFwiU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAocmVhc29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUYXJnZXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3QucHVzaChuZXcgVW5pY2FzdFRhcmdldChcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVRhcmdldChpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVUYXJnZXRzKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgYmFkVGFyZ2V0cyA9IHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3QuZmlsdGVyKCh2YWx1ZTogVW5pY2FzdFRhcmdldCkgPT4gdmFsdWUudGFyZ2V0ID09IFwiXCIgfHwgdmFsdWUudGFyZ2V0ID09IHVuZGVmaW5lZCB8fCB2YWx1ZS50YXJnZXQgPT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIGJhZFRhcmdldHMubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5ncywgU2V0dGluZ3NEYXRhIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHNldHRpbmdzVXJsID0gXCIvYXBpL1NldHRpbmdzXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8U2V0dGluZ3M+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXR0aW5nc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBTZXR0aW5nc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzLmRlc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoZGF0YTogU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2V0dGluZ3NVcmwsIGRhdGEuc2VyaWFsaXplKCkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4gXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7IC8vIGZvciBkZW1vIHB1cnBvc2VzIG9ubHlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsImV4cG9ydCBjbGFzcyBTZXR0aW5nc1xyXG57XHJcbiAgICB3ZWJQb3J0OiBudW1iZXI7XHJcbiAgICBvc2NQb3J0OiBudW1iZXI7XHJcbiAgICBzYWNuVHJhbnNtaXR0ZXI6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLndlYlBvcnQgPSA4MDtcclxuICAgICAgICB0aGlzLm9zY1BvcnQgPSA5MDAwO1xyXG4gICAgICAgIHRoaXMuc2FjblRyYW5zbWl0dGVyID0gbmV3IFNBQ05UcmFuc21pdHRlclNldHRpbmdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZShkYXRhOiBTZXR0aW5nc0RhdGEpOiBTZXR0aW5nc1xyXG4gICAge1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpO1xyXG4gICAgICAgIHNldHRpbmdzLndlYlBvcnQgPSBkYXRhLndlYlBvcnQ7XHJcbiAgICAgICAgc2V0dGluZ3Mub3NjUG9ydCA9IGRhdGEub3NjUG9ydDtcclxuICAgICAgICBzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIgPSBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncy5kZXNlcmlhbGl6ZShkYXRhLnNhY25UcmFuc21pdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogU2V0dGluZ3NEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFNldHRpbmdzRGF0YSA9IHtcclxuICAgICAgICAgICAgd2ViUG9ydDogdGhpcy53ZWJQb3J0LFxyXG4gICAgICAgICAgICBvc2NQb3J0OiB0aGlzLm9zY1BvcnQsXHJcbiAgICAgICAgICAgIHNhY25UcmFuc21pdHRlcjogdGhpcy5zYWNuVHJhbnNtaXR0ZXIuc2VyaWFsaXplKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3Ncclxue1xyXG4gICAgZGVsYXk6IG51bWJlcjtcclxuICAgIG11bHRpY2FzdDogYm9vbGVhbjtcclxuICAgIHVuaWNhc3Q6IFVuaWNhc3RUYXJnZXRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IDA7XHJcbiAgICAgICAgdGhpcy5tdWx0aWNhc3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudW5pY2FzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemUoZGF0YTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhKTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NcclxuICAgIHtcclxuICAgICAgICBsZXQgdHJhbnNtaXR0ZXIgPSBuZXcgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3MoKTtcclxuICAgICAgICB0cmFuc21pdHRlci5kZWxheSA9IGRhdGEuZGVsYXk7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIubXVsdGljYXN0ID0gZGF0YS5tdWx0aWNhc3Q7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIudW5pY2FzdCA9IGRhdGEudW5pY2FzdC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IG5ldyBVbmljYXN0VGFyZ2V0KHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbWl0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YSA9IHtcclxuICAgICAgICAgICAgZGVsYXk6IHRoaXMuZGVsYXksXHJcbiAgICAgICAgICAgIG11bHRpY2FzdDogdGhpcy5tdWx0aWNhc3QsXHJcbiAgICAgICAgICAgIHVuaWNhc3Q6IHRoaXMudW5pY2FzdC5tYXAoKHZhbHVlOiBVbmljYXN0VGFyZ2V0KSA9PiB2YWx1ZS50YXJnZXQpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVuaWNhc3RUYXJnZXRcclxue1xyXG4gICAgdGFyZ2V0OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0RhdGFcclxue1xyXG4gICAgd2ViUG9ydDogbnVtYmVyO1xyXG4gICAgb3NjUG9ydDogbnVtYmVyO1xyXG4gICAgc2FjblRyYW5zbWl0dGVyOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhXHJcbntcclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICBtdWx0aWNhc3Q6IGJvb2xlYW47XHJcbiAgICB1bmljYXN0OiBzdHJpbmdbXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpxdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+U2V0dGluZ3M8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxwICpuZ0lmPVxcXCIhc2V0dGluZ3NcXFwiPkxvYWRpbmcuLi48L3A+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGZvcm0gKm5nSWY9XFxcInNldHRpbmdzXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAjc2V0dGluZ3NGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiSFRUUCBQb3J0OlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcIndlYlBvcnRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI2NTUzNVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLndlYlBvcnRcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCJcXHJcXG4gICAgICAgICAgICAvPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiT1NDIFBvcnQ6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0IHJlcXVpcmVkIHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwib3NjUG9ydFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjY1NTM1XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Mub3NjUG9ydFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiAvPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwic0FDTiBUcmFuc21pdHRlciBEZWxheSAobXMpOlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcInNhY25UcmFuc21pdHRlckRlbGF5XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwMDBcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIuZGVsYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgLz5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcInNBQ04gVHJhbnNtaXR0ZXIgTXVsdGljYXN0OlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0ICNpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwic2Fjbk11bHRpY2FzdFxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLnNhY25UcmFuc21pdHRlci5tdWx0aWNhc3RcXFwiICNzYWNuTXVsdGljYXN0PVxcXCJuZ01vZGVsXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiID5NdWx0aWNhc3Q8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPnNBQ04gVW5pY2FzdCBUYXJnZXRzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWRkcmVzczwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB0YXJnZXQgb2Ygc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3Q7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgY29sLXNtLThcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIudW5pY2FzdFtpXS50YXJnZXRcXFwiIFtuYW1lXT1cXFwiJ3VuaWNhc3RbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlVGFyZ2V0KGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkVGFyZ2V0KClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJzYXZlKClcXFwiIFtkaXNhYmxlZF09XFxcIiFzZXR0aW5nc0Zvcm0udmFsaWRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2ZpZWxkc2V0PlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBHcm91cFNlcnZpY2UgfSBmcm9tIFwiLi9ncm91cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4vZ3JvdXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncm91cHMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3JvdXBzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtHcm91cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cHNDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuXHJcbiAgICBzYXZpbmc6IGJvb2xlYW47XHJcbiAgICBncm91cHM6IEdyb3VwW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncm91cHNTZXJ2aWNlOiBHcm91cFNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdyb3Vwc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogR3JvdXBbXSkgPT4gdGhpcy5ncm91cHMgPSB2YWx1ZSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMucHVzaChuZXcgR3JvdXAoXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlKGdyb3VwOiBHcm91cCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZShncm91cDogR3JvdXAsIG9mZnNldDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBvbGRfaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuICAgICAgICBsZXQgbmV3X2luZGV4ID0gb2xkX2luZGV4ICsgb2Zmc2V0O1xyXG5cclxuICAgICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UobmV3X2luZGV4LCAwLCB0aGlzLmdyb3Vwcy5zcGxpY2Uob2xkX2luZGV4LCAxKVswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZSgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ3JvdXBzLmV2ZXJ5KCh2YWx1ZTogR3JvdXApID0+IHZhbHVlLm5hbWUgIT0gXCJcIiAmJiB2YWx1ZS5uYW1lICE9IHVuZGVmaW5lZCAmJiB2YWx1ZS5uYW1lICE9IG51bGwpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgZ3JvdXBOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5tYXAoKHZhbHVlOiBHcm91cCkgPT4gdmFsdWUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzYXZlKCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdyb3Vwc1NlcnZpY2UucHV0KHRoaXMuZ3JvdXBzKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgXCJTYXZlZCBzdWNjZXNzZnVsbHlcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKHJlYXNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi9ncm91cFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JvdXBTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgZ3JvdXBzVXJsID0gXCIvYXBpL0dyb3VwXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8R3JvdXBbXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdyb3Vwc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBzdHJpbmdbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IG5ldyBHcm91cCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KGdyb3VwczogR3JvdXBbXSk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmdyb3Vwc1VybCwgZ3JvdXBzLm1hcCgodmFsdWU6IEdyb3VwKSA9PiB2YWx1ZS5uYW1lKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnNlcnZpY2UudHMiLCJleHBvcnQgY2xhc3MgR3JvdXBcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPkdyb3VwczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGZvcm0gKm5nSWY9XFxcImdyb3Vwc1xcXCIgI2dyb3Vwc0Zvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgIDxmaWVsZHNldCBbZGlzYWJsZWRdPVxcXCJzYXZpbmdcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5PcmRlcjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGdyb3VwIG9mIGdyb3VwczsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAoY2xpY2spPVxcXCJtb3ZlKGdyb3VwLCAtMSlcXFwiIFtkaXNhYmxlZF09XFxcImkgPT0gMFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXBcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIChjbGljayk9XFxcIm1vdmUoZ3JvdXAsIDEpXFxcIiBbZGlzYWJsZWRdPVxcXCJpID09IGdyb3Vwcy5sZW5ndGggLSAxXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1kb3duXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIFt1bmlxdWVdPVxcXCJncm91cE5hbWVzXFxcIiAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZ3JvdXAubmFtZVxcXCIgW25hbWVdPVxcXCInZ3JvdXBOYW1lWycgKyBpICsgJ10nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKGdyb3VwKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPiBBZGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBbZGlzYWJsZWRdPVxcXCIhZ3JvdXBzRm9ybS52YWxpZFxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSBcImFuZ3VsYXIyLW1vZGFsXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImFuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi92ZW51ZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmVudWVzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ZlbnVlcy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbVmVudWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVudWVzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICB2ZW51ZXM6IFZlbnVlU2tlbGV0b25bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZlbnVlU2VydmljZTogVmVudWVTZXJ2aWNlLCBvdmVybGF5OiBPdmVybGF5LCB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWwpXHJcbiAgICB7XHJcbiAgICAgICAgb3ZlcmxheS5kZWZhdWx0Vmlld0NvbnRhaW5lciA9IHZjUmVmO1xyXG4gICAgICAgIHRoaXMudmVudWVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXROYW1lcygpXHJcbiAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogc3RyaW5nW10pID0+IHRoaXMudmVudWVzID0gdmFsdWUubWFwKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBza2VsZXRvbiA9IG5ldyBWZW51ZVNrZWxldG9uKCk7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRvbi5uYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tlbGV0b247XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVkaXRVcmwoZW50cnk6IFZlbnVlU2tlbGV0b24pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFwidmVudWVzL1wiICsgZW50cnkubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGRlbGV0ZUNvbmZpcm0oaW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICBsZXQgdmVudWUgPSB0aGlzLnZlbnVlc1tpbmRleF07XHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBhd2FpdCB0aGlzLm1vZGFsXHJcbiAgICAgICAgICAgIC5jb25maXJtKClcclxuICAgICAgICAgICAgLnRpdGxlKFwiQXJlIHlvdSBzdXJlP1wiKVxyXG4gICAgICAgICAgICAuYm9keShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIgKyB2ZW51ZS5uYW1lICsgXCI/XCIpXHJcbiAgICAgICAgICAgIC5pc0Jsb2NraW5nKHRydWUpXHJcbiAgICAgICAgICAgIC5vcGVuKCk7XHJcblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb21pc2UucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy52ZW51ZVNlcnZpY2UuZGVsZXRlKHZlbnVlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVudWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgdmVudWUubmFtZSArIFwiIHN1Y2Nlc3NmdWxseSByZW1vdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9lcnJvcnMgYXJlIGdlbmVyYXRlZCB3aGVuIHRoZSBtZXNzYWdlIGJveCBpcyBjYW5jZWxsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFZlbnVlU2tlbGV0b25cclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPlZlbnVlczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIiAqbmdJZj1cXFwidmVudWVzXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5WZW51ZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIHZlbnVlczsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7ZW50cnkubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbaHJlZl09XFxcImdldEVkaXRVcmwoZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZUNvbmZpcm0oaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2VFZGl0b3JDb21wb25lbnQgfSBmcm9tIFwiLi91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW5wdXRCb3hDb21wb25lbnQgfSBmcm9tIFwiLi4vaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZlbnVlLCBVbml2ZXJzZSwgRml4dHVyZSB9IGZyb20gXCIuL3ZlbnVlXCI7XHJcblxyXG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi92ZW51ZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmVudWUtZWRpdG9yJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ZlbnVlLWVkaXRvci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbVmVudWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVudWVFZGl0b3JDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJ1bml2ZXJzZUVkaXRvclwiKSB1bml2ZXJzZUVkaXRvcjogVW5pdmVyc2VFZGl0b3JDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiaW5wdXRCb3hcIikgaW5wdXRCb3g6IElucHV0Qm94Q29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImZpeHR1cmVPcHRpb25zRWRpdG9yXCIpIGZpeHR1cmVPcHRpb25zRWRpdG9yOiBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIG9yaWdpbmFsTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzYXZpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSB2ZW51ZTogVmVudWU7XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZFVuaXZlcnNlOiBVbml2ZXJzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSB2ZW51ZVNlcnZpY2U6IFZlbnVlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTmV3SXRlbSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52ZW51ZSA9IG5ldyBWZW51ZSgpO1xyXG4gICAgICAgICAgICBsZXQgdW5pdmVyc2UgPSBuZXcgVW5pdmVyc2UoKTtcclxuICAgICAgICAgICAgdW5pdmVyc2UubmFtZSA9IFwiRGVmYXVsdCBVbml2ZXJzZVwiO1xyXG4gICAgICAgICAgICB1bml2ZXJzZS51bml2ZXJzZUlEID0gMTtcclxuICAgICAgICAgICAgdGhpcy52ZW51ZS51bml2ZXJzZXMucHVzaCh1bml2ZXJzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVbml2ZXJzZSA9IHVuaXZlcnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZlbnVlU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLmdldCh0aGlzLm9yaWdpbmFsTmFtZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogVmVudWUpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW51ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVbml2ZXJzZSA9IHRoaXMudmVudWUudW5pdmVyc2VzLmxlbmd0aCA+IDAgPyB0aGlzLnZlbnVlLnVuaXZlcnNlc1swXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05ld0l0ZW0oKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsTmFtZSA9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVW5pdmVyc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB1bml2ZXJzZSA9IG5ldyBVbml2ZXJzZSgpO1xyXG4gICAgICAgIHVuaXZlcnNlLm5hbWUgPSBcIk5ldyBVbml2ZXJzZVwiO1xyXG4gICAgICAgIGxldCBtYXhOdW1iZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudmVudWUudW5pdmVyc2VzLmZvckVhY2godmFsdWUgPT4geyBpZiAodmFsdWUudW5pdmVyc2VJRCA+IG1heE51bWJlcikgeyBtYXhOdW1iZXIgPSB2YWx1ZS51bml2ZXJzZUlEIH0gfSk7XHJcbiAgICAgICAgdW5pdmVyc2UudW5pdmVyc2VJRCA9IG1heE51bWJlciArIDE7XHJcbiAgICAgICAgdGhpcy52ZW51ZS51bml2ZXJzZXMucHVzaCh1bml2ZXJzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVVbml2ZXJzZShpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB1bml2ZXJzZSA9IHRoaXMudmVudWUudW5pdmVyc2VzW2luZGV4XTtcclxuICAgICAgICB0aGlzLnZlbnVlLnVuaXZlcnNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVW5pdmVyc2UgPT0gdW5pdmVyc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVW5pdmVyc2UgPSB0aGlzLnZlbnVlLnVuaXZlcnNlc1tpbmRleCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5pc05ld0l0ZW0oKSA/IHRoaXMudmVudWUubmFtZSA6IHRoaXMub3JpZ2luYWxOYW1lO1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy52ZW51ZVNlcnZpY2UucHV0KHRoaXMub3JpZ2luYWxOYW1lLCB0aGlzLnZlbnVlKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi92ZW51ZXNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1lZGl0b3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgSW5wdXRCb3hDb21wb25lbnQgfSBmcm9tIFwiLi4vaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZyB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiXHJcbmltcG9ydCB7IFZlbnVlUHJlc2V0U2VydmljZSB9IGZyb20gXCIuL3ZlbnVlLXByZXNldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gXCIuLi9ncm91cHMvZ3JvdXAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBVbml2ZXJzZSwgRml4dHVyZSwgRml4dHVyZURlZmluaXRpb25PcHRpb25zLCBWZW51ZVByZXNldCB9IGZyb20gXCIuL3ZlbnVlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndW5pdmVyc2UtZWRpdG9yJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW0ZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UsIFZlbnVlUHJlc2V0U2VydmljZSwgR3JvdXBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5pdmVyc2VFZGl0b3JDb21wb25lbnRcclxue1xyXG4gICAgQElucHV0KFwidW5pdmVyc2VcIikgdW5pdmVyc2U6IFVuaXZlcnNlO1xyXG4gICAgQElucHV0KFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgQElucHV0KFwiaW5wdXRCb3hcIikgaW5wdXRCb3g6IElucHV0Qm94Q29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRGaXh0dXJlOiBGaXh0dXJlO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEZpeHR1cmVzOiBGaXh0dXJlW107XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkUHJlc2V0TmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBza2VsZXRvbnM6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXTtcclxuICAgIHByaXZhdGUgdmVudWVQcmVzZXROYW1lczogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIGdyb3Vwczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlOiBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLCBwcml2YXRlIHZlbnVlUHJlc2V0U2VydmljZTogVmVudWVQcmVzZXRTZXJ2aWNlLCBwcml2YXRlIGdyb3VwU2VydmljZTogR3JvdXBTZXJ2aWNlLFxyXG4gICAgICAgIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsKVxyXG4gICAge1xyXG4gICAgICAgIG92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIgPSB2Y1JlZjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52ZW51ZVByZXNldFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldE5hbWVzKClcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gdGhpcy52ZW51ZVByZXNldE5hbWVzID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U2tlbGV0b25zKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB0aGlzLnNrZWxldG9ucyA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVhc29uID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB0aGlzLmdyb3VwU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gdGhpcy5ncm91cHMgPSB2YWx1ZS5tYXAoZ3JwID0+IGdycC5uYW1lKSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyByZW1vdmVGaXh0dXJlKGluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGZpeHR1cmUgPSB0aGlzLnVuaXZlcnNlLmZpeHR1cmVzW2luZGV4XTtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IGF3YWl0IHRoaXMubW9kYWwuY29uZmlybSgpXHJcbiAgICAgICAgICAgIC50aXRsZShcIkFyZSB5b3Ugc3VyZT9cIilcclxuICAgICAgICAgICAgLmJvZHkoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiICsgZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlciArIFwiIFwiICsgZml4dHVyZS50eXBlLm1vZGVsICsgXCI/XCIpXHJcbiAgICAgICAgICAgIC5pc0Jsb2NraW5nKHRydWUpXHJcbiAgICAgICAgICAgIC5vcGVuKCk7XHJcblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb21pc2UucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXZlcnNlLmZpeHR1cmVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9lcnJvcnMgYXJlIGdlbmVyYXRlZCB3aGVuIHRoZSBtZXNzYWdlIGJveCBpcyBjYW5jZWxsZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRGaXh0dXJlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgZml4dHVyZSA9IG5ldyBGaXh0dXJlKCk7XHJcbiAgICAgICAgZml4dHVyZS5ncm91cCA9IHRoaXMuZ3JvdXBzWzBdO1xyXG4gICAgICAgIHRoaXMudW5pdmVyc2UuZml4dHVyZXMucHVzaChmaXh0dXJlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZSA9IGZpeHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1NlbGVjdGVkKGZpeHR1cmU6IEZpeHR1cmUpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRGaXh0dXJlcy5pbmRleE9mKGZpeHR1cmUpICE9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0Rml4dHVyZShmaXh0dXJlOiBGaXh0dXJlLCBzZWxlY3RlZDogYm9vbGVhbilcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkRml4dHVyZXMuaW5kZXhPZihmaXh0dXJlKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgaW5kZXggPT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZXMucHVzaChmaXh0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXNlbGVjdGVkICYmIGluZGV4ICE9IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpeHR1cmVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2F2ZVByZXNldCgpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByZXNldCA9IG5ldyBWZW51ZVByZXNldCgpO1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJlc2V0Lm5hbWUgPSBhd2FpdCB0aGlzLmlucHV0Qm94LnNob3coXCJTZWxlY3QgYSBuYW1lXCIsIFwiTmFtZTpcIiwgXCJTYXZlXCIsIFwiQ2FuY2VsXCIpO1xyXG4gICAgICAgICAgICBwcmVzZXQuZml4dHVyZXMgPSB0aGlzLnNlbGVjdGVkRml4dHVyZXM7XHJcbiAgICAgICAgICAgIHRoaXMudmVudWVQcmVzZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAucHV0KHByZXNldC5uYW1lLCBwcmVzZXQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaXh0dXJlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIHByZXNldC5uYW1lICsgXCIgc2F2ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVudWVQcmVzZXROYW1lcy5wdXNoKHByZXNldC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVhc29uID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHsgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFByZXNldChuYW1lOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52ZW51ZVByZXNldFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldChuYW1lKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IFZlbnVlUHJlc2V0KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaXh0dXJlIG9mIHZhbHVlLmZpeHR1cmVzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdmVyc2UuZml4dHVyZXMucHVzaChmaXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyByZW1vdmVQcmVzZXQobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gYXdhaXQgdGhpcy5tb2RhbC5jb25maXJtKClcclxuICAgICAgICAgICAgLnRpdGxlKFwiQXJlIHlvdSBzdXJlP1wiKVxyXG4gICAgICAgICAgICAuYm9keShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIgKyBuYW1lICsgXCI/XCIpXHJcbiAgICAgICAgICAgIC5pc0Jsb2NraW5nKHRydWUpXHJcbiAgICAgICAgICAgIC5vcGVuKCk7XHJcblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb21pc2UucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy52ZW51ZVByZXNldFNlcnZpY2UuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMudmVudWVQcmVzZXROYW1lcy5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVudWVQcmVzZXROYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIG5hbWUgKyBcIiBzdWNjZXNzZnVsbHkgcmVtb3ZlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZXJyb3JzIGFyZSBnZW5lcmF0ZWQgd2hlbiB0aGUgbWVzc2FnZSBib3ggaXMgY2FuY2VsbGVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gXCIuLi9ncm91cHMvZ3JvdXAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi4vZ3JvdXBzL2dyb3VwXCI7XHJcbmltcG9ydCB7IEZpeHR1cmUsIEZpeHR1cmVEZWZpbml0aW9uT3B0aW9ucywgQXhpc1Jlc3RyaWN0aW9uT3B0aW9ucyB9IGZyb20gXCIuL3ZlbnVlXCI7XHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uLCBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uIH0gZnJvbSBcIi4uL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZml4dHVyZS1vcHRpb25zLWVkaXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKFwiLi9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC5jc3NcIildLFxyXG4gICAgcHJvdmlkZXJzOiBbRml4dHVyZURlZmluaXRpb25zU2VydmljZSwgR3JvdXBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRml4dHVyZU9wdGlvbnNFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcclxue1xyXG4gICAgQElucHV0KFwiZml4dHVyZVwiKSBmaXh0dXJlOiBGaXh0dXJlO1xyXG4gICAgcHVibGljIHZpc2libGUgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdmlzaWJsZUFuaW1hdGUgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGF4aXNPcHRpb25zOiBBeGlzT3B0aW9uc1tdO1xyXG5cclxuICAgIHByaXZhdGUgZGVmaW5pdGlvbjogRml4dHVyZURlZmluaXRpb247XHJcbiAgICBwcml2YXRlIHNrZWxldG9uczogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdO1xyXG4gICAgcHJpdmF0ZSBncm91cHM6IEdyb3VwW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlOiBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLCBwcml2YXRlIGdyb3VwU2VydmljZTogR3JvdXBTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB0aGlzLmdyb3VwcyA9IHZhbHVlKTtcclxuICAgICAgICB0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldFNrZWxldG9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHRoaXMuc2tlbGV0b25zID0gdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoY2hhbmdlc1tcImZpeHR1cmVcIl0gIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmaXh0dXJlQ2hhbmdlcyA9IGNoYW5nZXNbXCJmaXh0dXJlXCJdO1xyXG4gICAgICAgICAgICBpZihmaXh0dXJlQ2hhbmdlcy5jdXJyZW50VmFsdWUgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpeHR1cmU6IEZpeHR1cmUgPSBmaXh0dXJlQ2hhbmdlcy5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyID09IG51bGwgfHwgZml4dHVyZS50eXBlLm1vZGVsID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlciA9IHRoaXMuZ2V0TWFudWZhY3R1cmVycygpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpeHR1cmUudHlwZS5tb2RlbCA9IHRoaXMuZ2V0TW9kZWxzKGZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXIpWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZWZpbml0aW9uKGZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXIsIGZpeHR1cmUudHlwZS5tb2RlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmluaXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlzT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0TWFudWZhY3R1cmVyKG1hbnVmYWN0dXJlcjogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZml4dHVyZS50eXBlLm1vZGVsID0gdGhpcy5nZXRNb2RlbHMobWFudWZhY3R1cmVyKVswXTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURlZmluaXRpb24obWFudWZhY3R1cmVyLCB0aGlzLmZpeHR1cmUudHlwZS5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtb3ZpbmcoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNYW51ZmFjdHVyZXJzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2tlbGV0b25zXHJcbiAgICAgICAgICAgIC5tYXAoKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiB2YWx1ZS5tYW51ZmFjdHVyZXIpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpID09IGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1vZGVscyhtYW51ZmFjdHVyZXI6IHN0cmluZyk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2tlbGV0b25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIodmFsdWUgPT4gdmFsdWUubWFudWZhY3R1cmVyID09IG1hbnVmYWN0dXJlcilcclxuICAgICAgICAgICAgLm1hcCh2YWx1ZSA9PiB2YWx1ZS5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGVEZWZpbml0aW9uKG1hbnVmYWN0dXJlcjogc3RyaW5nLCBtb2RlbDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIGlmKG1hbnVmYWN0dXJlciAhPSBudWxsICYmIG1vZGVsID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtb2RlbCA9IHRoaXMuZ2V0TW9kZWxzKG1hbnVmYWN0dXJlcilbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1hbnVmYWN0dXJlciAhPSBudWxsICYmIG1vZGVsICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmluaXRpb24gPSBhd2FpdCB0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5nZXQobWFudWZhY3R1cmVyLCBtb2RlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpc09wdGlvbnMgPSB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAubWFwKHZhbHVlID0+IG5ldyBBeGlzT3B0aW9ucyh2YWx1ZS5uYW1lLCB0aGlzLmZpeHR1cmUsIHRoaXMuZGVmaW5pdGlvbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmluaXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmF4aXNPcHRpb25zID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBeGlzT3B0aW9uc1xyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIGZpeHR1cmU6IEZpeHR1cmU7XHJcbiAgICBkZWZpbml0aW9uOiBGaXh0dXJlRGVmaW5pdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGZpeHR1cmU6IEZpeHR1cmUsIGRlZmluaXRpb246IEZpeHR1cmVEZWZpbml0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlID0gZml4dHVyZTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWluKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLmZpbmQodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0aGlzLm5hbWUpLm1pbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1heCgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5maW5kKHZhbHVlID0+IHZhbHVlLm5hbWUgPT0gdGhpcy5uYW1lKS5tYXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZXN0cmljdGlvbk1pbigpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnJlc3RyaWN0ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdHJpY3Rpb24gPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzUmVzdHJpY3Rpb25zLmZpbmQodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdHJpY3Rpb24ubWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5taW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcmVzdHJpY3Rpb25NaW4odmFsdWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnJlc3RyaWN0ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdHJpY3Rpb24gPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzUmVzdHJpY3Rpb25zLmZpbmQodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICByZXN0cmljdGlvbi5taW4gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZXN0cmljdGlvbk1heCgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnJlc3RyaWN0ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdHJpY3Rpb24gPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzUmVzdHJpY3Rpb25zLmZpbmQodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdHJpY3Rpb24ubWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcmVzdHJpY3Rpb25NYXgodmFsdWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnJlc3RyaWN0ZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdHJpY3Rpb24gPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzUmVzdHJpY3Rpb25zLmZpbmQodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICByZXN0cmljdGlvbi5tYXggPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpbnZlcnRlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1hdGNoID0gdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc0ludmVyc2lvbnMuZmluZCh2YWx1ZSA9PiB2YWx1ZSA9PSB0aGlzLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiBtYXRjaCAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaW52ZXJ0ZWQodmFsdWU6IGJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgaWYodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzSW52ZXJzaW9ucy5wdXNoKHRoaXMubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNJbnZlcnNpb25zLmluZGV4T2YodGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgaWYoaW5kZXggIT0gLTEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNJbnZlcnNpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZXN0cmljdGVkKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzUmVzdHJpY3Rpb25zLmZpbmQodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0aGlzLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiBtYXRjaCAhPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcmVzdHJpY3RlZCh2YWx1ZTogYm9vbGVhbilcclxuICAgIHtcclxuICAgICAgICBpZih2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gbmV3IEF4aXNSZXN0cmljdGlvbk9wdGlvbnMoKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5uYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICBvcHRpb25zLm1pbiA9IHRoaXMubWluO1xyXG4gICAgICAgICAgICBvcHRpb25zLm1heCA9IHRoaXMubWF4O1xyXG4gICAgICAgICAgICB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzUmVzdHJpY3Rpb25zLnB1c2gob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN0cmljdGlvbiA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMuZmluZCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IHRoaXMubmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMuaW5kZXhPZihyZXN0cmljdGlvbik7XHJcbiAgICAgICAgICAgIGlmKGluZGV4ICE9IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzUmVzdHJpY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uLCBGaXh0dXJlRGVmaW5pdGlvbiwgRml4dHVyZURlZmluaXRpb25EYXRhIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgZml4dHVyZURlZmluaXRpb25zVXJsID0gXCIvYXBpL0ZpeHR1cmVEZWZpbml0aW9uXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2tlbGV0b25zKCk6IFByb21pc2U8Rml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChtYW51ZmFjdHVyZXI6IHN0cmluZywgbW9kZWw6IHN0cmluZyk6IFByb21pc2U8Rml4dHVyZURlZmluaXRpb24+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5maXh0dXJlRGVmaW5pdGlvbnNVcmwgKyBcIi9cIiArIG1hbnVmYWN0dXJlciArIFwiL1wiICsgbW9kZWwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgRml4dHVyZURlZmluaXRpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGaXh0dXJlRGVmaW5pdGlvbi5sb2FkKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KG1hbnVmYWN0dXJlcjogc3RyaW5nLCBtb2RlbDogc3RyaW5nLCBkZWZpbml0aW9uOiBGaXh0dXJlRGVmaW5pdGlvbik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1VybCArIFwiL1wiICsgbWFudWZhY3R1cmVyICsgXCIvXCIgKyBtb2RlbCwgZGVmaW5pdGlvbilcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShmaXh0dXJlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsICsgXCIvXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiL1wiICsgZml4dHVyZS5tb2RlbClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2UudHMiLCJleHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb24gaW1wbGVtZW50cyBGaXh0dXJlRGVmaW5pdGlvbkRhdGFcclxue1xyXG4gICAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBcIkxFRFwiIHwgXCJUdW5nc3RlblwiIHwgXCJFZmZlY3RcIjtcclxuXHJcbiAgICBjaGFubmVsczogRE1YQ2hhbm5lbFtdO1xyXG4gICAgbW92ZW1lbnRzOiBBeGlzW107XHJcbiAgICBjb2xvcldoZWVsOiBDb2xvcldoZWVsRW50cnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1hbnVmYWN0dXJlciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJMRURcIjtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0gW107XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbG9yV2hlZWwgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZChkYXRhOiBGaXh0dXJlRGVmaW5pdGlvbkRhdGEpOiBGaXh0dXJlRGVmaW5pdGlvblxyXG4gICAge1xyXG4gICAgICAgIGxldCBkZWZpbml0aW9uID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZpbml0aW9uLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaXh0dXJlRGVmaW5pdGlvbkRhdGFcclxue1xyXG4gICAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBcIkxFRFwiIHwgXCJUdW5nc3RlblwiIHwgXCJFZmZlY3RcIjtcclxuXHJcbiAgICBjaGFubmVsczogRE1YQ2hhbm5lbFtdO1xyXG4gICAgbW92ZW1lbnRzOiBBeGlzW107XHJcbiAgICBjb2xvcldoZWVsOiBDb2xvcldoZWVsRW50cnlbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25cclxue1xyXG4gICAgcHVibGljIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgcHVibGljIG1vZGVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBETVhDaGFubmVsXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRteDogbnVtYmVyO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nLCBkbXg/OiBudW1iZXIsIG1pbj86IG51bWJlciwgbWF4PzogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgPyBuYW1lIDogXCJcIjtcclxuICAgICAgICB0aGlzLmRteCA9IGRteCA/IGRteCA6IDE7XHJcbiAgICAgICAgdGhpcy5taW4gPSBtaW4gPyBtaW4gOiAwO1xyXG4gICAgICAgIHRoaXMubWF4ID0gbWF4ID8gbWF4IDogMjU1O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXhpc1xyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtaW46IG51bWJlcjtcclxuICAgIG1heDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JXaGVlbEVudHJ5XHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRteFN0YXJ0OiBudW1iZXI7XHJcbiAgICBkbXhFbmQ6IG51bWJlcjtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgZG14U3RhcnQ/OiBudW1iZXIsIGRteEVuZD86IG51bWJlciwgY29sb3I/OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSA/IG5hbWUgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuZG14U3RhcnQgPSBkbXhTdGFydCA/IGRteFN0YXJ0IDogMDtcclxuICAgICAgICB0aGlzLmRteEVuZCA9IGRteEVuZCA/IGRteEVuZCA6IDI1NTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3IgPyBjb2xvciA6IFwiMDAwMDAwXCI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24udHMiLCJpbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uIH0gZnJvbSBcIi4uL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVudWVcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdW5pdmVyc2VzOiBVbml2ZXJzZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudW5pdmVyc2VzID0gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbml2ZXJzZVxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB1bml2ZXJzZUlEOiBudW1iZXI7XHJcbiAgICBmaXh0dXJlczogRml4dHVyZVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudW5pdmVyc2VJRCA9IDE7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRml4dHVyZVxyXG57XHJcbiAgICBjaGFubmVsOiBudW1iZXI7XHJcbiAgICBncm91cDogc3RyaW5nO1xyXG4gICAgdHlwZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbjtcclxuICAgIG9wdGlvbnM6IEZpeHR1cmVEZWZpbml0aW9uT3B0aW9ucztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jaGFubmVsID0gMTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gXCJcIjtcclxuICAgICAgICB0aGlzLnR5cGUgPSBuZXcgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbigpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uT3B0aW9uc1xyXG57XHJcbiAgICBtYXhCcmlnaHRuZXNzOiBudW1iZXI7XHJcbiAgICBheGlzSW52ZXJzaW9uczogc3RyaW5nW107XHJcbiAgICBheGlzUmVzdHJpY3Rpb25zOiBBeGlzUmVzdHJpY3Rpb25PcHRpb25zW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWF4QnJpZ2h0bmVzcyA9IDE7XHJcbiAgICAgICAgdGhpcy5heGlzSW52ZXJzaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXhpc1Jlc3RyaWN0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXhpc1Jlc3RyaWN0aW9uT3B0aW9uc1xyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtaW46IG51bWJlcjtcclxuICAgIG1heDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubWluID0gMDtcclxuICAgICAgICB0aGlzLm1heCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZW51ZVByZXNldFxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBmaXh0dXJlczogRml4dHVyZVtdO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIiAqbmdJZj1cXFwiZml4dHVyZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgI2VkaXRvckZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGZpZWxkc2V0IG5hbWU9XFxcImNvbW1vbkZpZWxkc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTWFudWZhY3R1cmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgbmFtZT1cXFwibWFudWZhY3R1cmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwiZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlclxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJzZWxlY3RNYW51ZmFjdHVyZXIoJGV2ZW50KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBtYW51ZmFjdHVyZXIgb2YgZ2V0TWFudWZhY3R1cmVycygpXFxcIj57e21hbnVmYWN0dXJlcn19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJNb2RlbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIG5hbWU9XFxcIm1vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwiZml4dHVyZS50eXBlLm1vZGVsXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcInVwZGF0ZURlZmluaXRpb24oZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlciwgJGV2ZW50KVxcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgbW9kZWwgb2YgZ2V0TW9kZWxzKGZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXIpXFxcIj57e21vZGVsfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIkNoYW5uZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIG5hbWU9XFxcImNoYW5uZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI1MTJcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImZpeHR1cmUuY2hhbm5lbFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJHcm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIG5hbWU9XFxcImdyb3VwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwiZml4dHVyZS5ncm91cFxcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgZ3JvdXAgb2YgZ3JvdXBzXFxcIj57e2dyb3VwLm5hbWV9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgPC9maWVsZHNldD5cXHJcXG4gICAgICAgICAgICA8ZmllbGRzZXQgbmFtZT1cXFwib3B0aW9uc1xcXCIgKm5nSWY9XFxcImRlZmluaXRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk1heCBCcmlnaHRuZXNzOlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcImZpeHR1cmUub3B0aW9ucy5tYXhCcmlnaHRuZXNzXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XFxcIjAuMDFcXFwiIG5hbWU9XFxcIm1heEJyaWdodG5lc3NcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm1vdmluZ1xcXCIgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+QXhpcyBPcHRpb25zPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JbnZlcnRlZDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlc3RyaWN0ZWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NaW4gKGRlZ3JlZXMpPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF4IChkZWdyZWVzKTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgYXhpcyBvZiBheGlzT3B0aW9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7YXhpcy5uYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgWyhuZ01vZGVsKV09XFxcImF4aXMuaW52ZXJ0ZWRcXFwiIFtuYW1lXT1cXFwiJ2ludmVydGVkWycgKyBheGlzLm5hbWUgKyAnXSdcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZlcnRlZFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFsobmdNb2RlbCldPVxcXCJheGlzLnJlc3RyaWN0ZWRcXFwiIFtuYW1lXT1cXFwiJ3Jlc3RyaWN0ZWRbJyArIGF4aXMubmFtZSArICddJ1xcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3RyaWN0ZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiYXhpcy5yZXN0cmljdGlvbk1pblxcXCIgW25hbWVdPVxcXCIncmVzdHJpY3Rpb25NaW5bJyArIGF4aXMubmFtZSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWluXT1cXFwiYXhpcy5taW5cXFwiIFttYXhdPVxcXCJheGlzLm1heFxcXCIgW2Rpc2FibGVkXT1cXFwiIWF4aXMucmVzdHJpY3RlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJheGlzLnJlc3RyaWN0aW9uTWF4XFxcIiBbbmFtZV09XFxcIidyZXN0cmljdGlvbk1heFsnICsgYXhpcy5uYW1lICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttaW5dPVxcXCJheGlzLm1pblxcXCIgW21heF09XFxcImF4aXMubWF4XFxcIiBbZGlzYWJsZWRdPVxcXCIhYXhpcy5yZXN0cmljdGVkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgVmVudWVQcmVzZXQgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmVudWVQcmVzZXRTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgdmVudWVQcmVzZXRVcmwgPSBcIi9hcGkvVmVudWVQcmVzZXRcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8VmVudWVQcmVzZXQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVByZXNldFVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgVmVudWVQcmVzZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lcygpOiBQcm9taXNlPHN0cmluZ1tdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVQcmVzZXRVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVQcmVzZXRVcmwgKyBcIi9hY3RpdmF0ZS9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KGlkOiBzdHJpbmcsIHZlbnVlUHJlc2V0OiBWZW51ZVByZXNldCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnZlbnVlUHJlc2V0VXJsICsgXCIvXCIgKyBpZCwgdmVudWVQcmVzZXQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLnZlbnVlUHJlc2V0VXJsICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLXByZXNldC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgcm9sZT1cXFwidGFicGFuZWxcXFwiICpuZ0lmPVxcXCJ1bml2ZXJzZSAmJiBza2VsZXRvbnNcXFwiPlxcclxcbiAgICA8IS0tIE5hdiB0YWJzIC0tPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCIgcm9sZT1cXFwidGFibGlzdFxcXCI+XFxyXFxuICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IHNlbGVjdGVkRml4dHVyZSA9PSBudWxsfVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2VsZWN0ZWRGaXh0dXJlID0gbnVsbFxcXCI+Rml4dHVyZXM8L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IGZpeHR1cmUgb2YgdW5pdmVyc2UuZml4dHVyZXM7IGxldCBpID0gaW5kZXhcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiBzZWxlY3RlZEZpeHR1cmUgPT0gZml4dHVyZX1cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNlbGVjdGVkRml4dHVyZSA9IGZpeHR1cmVcXFwiPnt7Zml4dHVyZS5jaGFubmVsfX0ge3tmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyfX0ge3tmaXh0dXJlLnR5cGUubW9kZWx9fVxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiIChjbGljayk9XFxcInJlbW92ZUZpeHR1cmUoaSlcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG5cXFwiIChjbGljayk9XFxcImFkZEZpeHR1cmUoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCIgKm5nSWY9XFxcInVuaXZlcnNlICYmIHNrZWxldG9ucyAmJiBzZWxlY3RlZEZpeHR1cmUgPT0gbnVsbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TZWxlY3RlZDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hbnVmYWN0dXJlcjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vZGVsPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2hhbm5lbDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdyb3VwPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmaXh0dXJlIG9mIHVuaXZlcnNlLmZpeHR1cmVzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFtuZ01vZGVsXT1cXFwiaXNTZWxlY3RlZChmaXh0dXJlKVxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJzZWxlY3RGaXh0dXJlKGZpeHR1cmUsICRldmVudClcXFwiIFtuYW1lXT1cXFwiJ3NlbGVjdGVkWycgKyBpICsgJ10nXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2ZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXJ9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7Zml4dHVyZS50eXBlLm1vZGVsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2ZpeHR1cmUuY2hhbm5lbH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tmaXh0dXJlLmdyb3VwfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkRml4dHVyZSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggdGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS04XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkUHJlc2V0TmFtZVxcXCIgbmFtZT1cXFwic2VsZWN0ZWRQcmVzZXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCB2ZW51ZVByZXNldE5hbWUgb2YgdmVudWVQcmVzZXROYW1lc1xcXCI+e3t2ZW51ZVByZXNldE5hbWV9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbZGlzYWJsZWRdPVxcXCJzZWxlY3RlZFByZXNldE5hbWUgPT0gbnVsbFxcXCIgKGNsaWNrKT1cXFwibG9hZFByZXNldChzZWxlY3RlZFByZXNldE5hbWUpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1vcGVuXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIFtkaXNhYmxlZF09XFxcInNlbGVjdGVkRml4dHVyZXMubGVuZ3RoID09IDBcXFwiIChjbGljayk9XFxcInNhdmVQcmVzZXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktc2F2ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIFtkaXNhYmxlZF09XFxcInNlbGVjdGVkUHJlc2V0TmFtZSA9PSBudWxsXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVQcmVzZXQoc2VsZWN0ZWRQcmVzZXROYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxmaXh0dXJlLW9wdGlvbnMtZWRpdG9yICNmaXh0dXJlT3B0aW9uc0VkaXRvciBbZml4dHVyZV09XFxcInNlbGVjdGVkRml4dHVyZVxcXCIgPjwvZml4dHVyZS1vcHRpb25zLWVkaXRvcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+VmVudWUgRWRpdG9yPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwidmVudWVcXFwiIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiICNlZGl0b3JGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTmFtZTpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCAjaW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcInZlbnVlLm5hbWVcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCI+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcblxcclxcbiAgICAgICAgPGRpdiByb2xlPVxcXCJ0YWJwYW5lbFxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLSBOYXYgdGFicyAtLT5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCIgcm9sZT1cXFwidGFibGlzdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB1bml2ZXJzZSBvZiB2ZW51ZS51bml2ZXJzZXM7IGxldCBpID0gaW5kZXhcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiBzZWxlY3RlZFVuaXZlcnNlID09IHVuaXZlcnNlfVxcXCIgY2xhc3M9XFxcImFjdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzZWxlY3RlZFVuaXZlcnNlID0gdW5pdmVyc2VcXFwiPnt7dW5pdmVyc2UubmFtZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImkgPiAwXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiIChjbGljayk9XFxcInJlbW92ZVVuaXZlcnNlKGkpXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG5cXFwiIChjbGljayk9XFxcImFkZFVuaXZlcnNlKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCIgKm5nSWY9XFxcInNlbGVjdGVkVW5pdmVyc2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk5hbWU6XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRVbml2ZXJzZS5uYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbbmFtZV09XFxcIid1bml2ZXJzZU5hbWVbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIlVuaXZlcnNlIElEOlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkVW5pdmVyc2UudW5pdmVyc2VJRFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNjU1MzVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVxcXCIndW5pdmVyc2VOdW1iZXJbJyArIGkgKyAnXSdcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPHVuaXZlcnNlLWVkaXRvciBbdW5pdmVyc2VdPVxcXCJzZWxlY3RlZFVuaXZlcnNlXFxcIiBbbWVzc2FnZUJhcl09XFxcIm1lc3NhZ2VCYXJcXFwiIFtpbnB1dEJveF09XFxcImlucHV0Qm94XFxcIj48L3VuaXZlcnNlLWVkaXRvcj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJzYXZlKClcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0b3JGb3JtLnZhbGlkXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XFxyXFxuPGlucHV0LWJveCAjaW5wdXRCb3g+PC9pbnB1dC1ib3g+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtZWRpdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSBcImFuZ3VsYXIyLW1vZGFsXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImFuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZml4dHVyZS1kZWZpbml0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBtYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkOiBib29sZWFuO1xyXG4gICAgbWFudWZhY3R1cmVyRmlsdGVyOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlOiBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLCBvdmVybGF5OiBPdmVybGF5LCB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWwpXHJcbiAgICB7XHJcbiAgICAgICAgb3ZlcmxheS5kZWZhdWx0Vmlld0NvbnRhaW5lciA9IHZjUmVmO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U2tlbGV0b25zKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10pID0+IHRoaXMuZGF0YSA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IG1hbnVmYWN0dXJlcnMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhXHJcbiAgICAgICAgICAgIC5tYXAoKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiB2YWx1ZS5tYW51ZmFjdHVyZXIpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBmaWx0ZXJlZERhdGEoKTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFudWZhY3R1cmVyRmlsdGVyRW5hYmxlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlsdGVyKCh2YWx1ZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbikgPT4gdmFsdWUubWFudWZhY3R1cmVyID09IHRoaXMubWFudWZhY3R1cmVyRmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFZGl0VXJsKGZpeHR1cmU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gXCJmaXh0dXJlLWRlZmluaXRpb25zXCIgKyBcIi9cIiArIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIvXCIgKyBmaXh0dXJlLm1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZGVsZXRlQ29uZmlybShmaXh0dXJlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gYXdhaXQgdGhpcy5tb2RhbC5jb25maXJtKClcclxuICAgICAgICAgICAgLnRpdGxlKFwiQXJlIHlvdSBzdXJlP1wiKVxyXG4gICAgICAgICAgICAuYm9keShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIGRlZmluaXRpb24gZm9yIFwiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIiBcIiArIGZpeHR1cmUubW9kZWwgKyBcIj9cIilcclxuICAgICAgICAgICAgLmlzQmxvY2tpbmcodHJ1ZSlcclxuICAgICAgICAgICAgLm9wZW4oKTtcclxuXHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcHJvbWlzZS5yZXN1bHQ7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZS5kZWxldGUoZml4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIiBcIiArIGZpeHR1cmUubW9kZWwgKyBcIiB3YXMgZGVsZXRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRhdGEuaW5kZXhPZihmaXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChyZWFzb24pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIFwiQ291bGQgbm90IGRlbGV0ZSBcIiArIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIgXCIgKyBmaXh0dXJlLm1vZGVsICsgXCIuIFwiICsgcmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2Vycm9ycyBhcmUgZ2VuZXJhdGVkIHdoZW4gdGhlIG1lc3NhZ2UgYm94IGlzIGNhbmNlbGxlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9maXh0dXJlLWRlZmluaXRpb25zL25ld1wiO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+Rml4dHVyZSBEZWZpbml0aW9uczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBmb3JtLWlubGluZVxcXCIgKm5nSWY9XFxcImRhdGFcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBbKG5nTW9kZWwpXT1cXFwibWFudWZhY3R1cmVyRmlsdGVyRW5hYmxlZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICBGaWx0ZXIgYnkgbWFudWZhY3R1cmVyXFxyXFxuICAgICAgICA8L2xhYmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHNlbGVjdCByZXF1aXJlZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbZGlzYWJsZWRdPVxcXCIhbWFudWZhY3R1cmVyRmlsdGVyRW5hYmxlZFxcXCIgWyhuZ01vZGVsKV09XFxcIm1hbnVmYWN0dXJlckZpbHRlclxcXCI+XFxyXFxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1hbnVmYWN0dXJlciBvZiBtYW51ZmFjdHVyZXJzXFxcIj57e21hbnVmYWN0dXJlcn19PC9vcHRpb24+XFxyXFxuICAgIDwvc2VsZWN0PlxcclxcbjwvZGl2Plxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCIgKm5nSWY9XFxcImRhdGFcXFwiPlxcclxcbiAgICA8dGhlYWQ+XFxyXFxuICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoPk1hbnVmYWN0dXJlcjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPk1vZGVsPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3RoZWFkPlxcclxcbiAgICA8dGJvZHk+XFxyXFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgZmlsdGVyZWREYXRhXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQ+e3tlbnRyeS5tYW51ZmFjdHVyZXJ9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPnt7ZW50cnkubW9kZWx9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2hyZWZdPVxcXCJnZXRFZGl0VXJsKGVudHJ5KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGVDb25maXJtKGVudHJ5KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tIFwiYW5ndWxhcjItbW9kYWxcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uLCBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uLCBETVhDaGFubmVsLCBBeGlzLCBDb2xvcldoZWVsRW50cnkgfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaXh0dXJlLWRlZmluaXRpb25zLWVkaXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb25FZGl0b3JDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIG9yaWdpbmFsTWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG9yaWdpbmFsTW9kZWw6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGFsbE1hbnVmYWN0dXJlcnM6IHN0cmluZ1tdO1xyXG5cclxuICAgIHByaXZhdGUgZGVmaW5pdGlvbjogRml4dHVyZURlZmluaXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgZml4dHVyZVNlcnZpY2U6IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UsIG92ZXJsYXk6IE92ZXJsYXksIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFsbE1hbnVmYWN0dXJlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTWFudWZhY3R1cmVyID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ21hbnVmYWN0dXJlciddO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxNb2RlbCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydtb2RlbCddO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc05ld0l0ZW0oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZpeHR1cmVTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAuZ2V0KHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXIsIHRoaXMub3JpZ2luYWxNb2RlbClcclxuICAgICAgICAgICAgICAgIC50aGVuKGRlZmluaXRpb24gPT4gdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maXh0dXJlU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U2tlbGV0b25zKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10pID0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE1hbnVmYWN0dXJlcnMgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHNrZWxldG9uOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiBza2VsZXRvbi5tYW51ZmFjdHVyZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PSBpbmRleCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQ2hhbm5lbCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1heENoYW5uZWwgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jaGFubmVscy5mb3JFYWNoKCh2YWx1ZTogRE1YQ2hhbm5lbCkgPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZG14ID4gbWF4Q2hhbm5lbCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1heENoYW5uZWwgPSB2YWx1ZS5kbXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLnB1c2gobmV3IERNWENoYW5uZWwoXCJcIiwgbWF4Q2hhbm5lbCArIDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUNoYW5uZWwoY2hhbm5lbDogRE1YQ2hhbm5lbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMuaW5kZXhPZihjaGFubmVsKTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEF4aXMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMucHVzaChuZXcgQXhpcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUF4aXMoYXhpczogQXhpcyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLmluZGV4T2YoYXhpcyk7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQ29sb3JXaGVlbEVudHJ5KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWluVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLmZvckVhY2goKHZhbHVlOiBDb2xvcldoZWVsRW50cnkpID0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmRteEVuZCA+IG1pblZhbHVlKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSB2YWx1ZS5kbXhFbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtaW5WYWx1ZSA9IG1pblZhbHVlIDwgMjU1ID8gbWluVmFsdWUgKyAxIDogMjU1O1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLnB1c2gobmV3IENvbG9yV2hlZWxFbnRyeShcIlwiLCBtaW5WYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlQ29sb3JXaGVlbEVudHJ5KGNvbG9yV2hlZWxFbnRyeTogQ29sb3JXaGVlbEVudHJ5KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLmluZGV4T2YoY29sb3JXaGVlbEVudHJ5KTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY29sb3JXaGVlbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVOYW1lcygpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNoYW5uZWxOYW1lUHJvYmxlbXMgPSB0aGlzLmNoYW5uZWxOYW1lc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXg6IG51bWJlciwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpICE9IGluZGV4IHx8IHZhbHVlID09IFwiXCIpO1xyXG4gICAgICAgIGxldCBheGlzTmFtZVByb2JsZW1zID0gdGhpcy5heGlzTmFtZXNcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUsIGluZGV4OiBudW1iZXIsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSAhPSBpbmRleCB8fCB2YWx1ZSA9PSBcIlwiKTtcclxuICAgICAgICBsZXQgY29sb3JXaGVlbE5hbWVQcm9ibGVtcyA9IHRoaXMuY29sb3JXaGVlbE5hbWVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleDogbnVtYmVyLCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgIT0gaW5kZXggfHwgdmFsdWUgPT0gXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGFubmVsTmFtZVByb2JsZW1zLmxlbmd0aCA9PSAwICYmIGF4aXNOYW1lUHJvYmxlbXMubGVuZ3RoID09IDAgJiYgY29sb3JXaGVlbE5hbWVQcm9ibGVtcy5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBjaGFubmVsTmFtZXMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLm1hcCgodmFsdWU6IERNWENoYW5uZWwpID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGNvbG9yV2hlZWxOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24uY29sb3JXaGVlbC5tYXAoKHZhbHVlOiBDb2xvcldoZWVsRW50cnkpID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGF4aXNOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLm1hcCgodmFsdWU6IEF4aXMpID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNOZXdJdGVtKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbE1hbnVmYWN0dXJlciA9PSBudWxsICYmIHRoaXMub3JpZ2luYWxNb2RlbCA9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBtYW51ZmFjdHVyZXIgPSB0aGlzLmlzTmV3SXRlbSgpID8gdGhpcy5kZWZpbml0aW9uLm1hbnVmYWN0dXJlciA6IHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXI7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5pc05ld0l0ZW0oKSA/IHRoaXMuZGVmaW5pdGlvbi5uYW1lIDogdGhpcy5vcmlnaW5hbE1vZGVsO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZVNlcnZpY2VcclxuICAgICAgICAgICAgLnB1dChtYW51ZmFjdHVyZXIsIG1vZGVsLCB0aGlzLmRlZmluaXRpb24pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZml4dHVyZS1kZWZpbml0aW9uc1wiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5GaXh0dXJlIERlZmluaXRpb24gRWRpdG9yPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwiZGVmaW5pdGlvblxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgI2VkaXRvckZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgIDxmaWVsZHNldCBbZGlzYWJsZWRdPVxcXCJzYXZpbmdcXFwiPlxcclxcbiAgICAgICAgPGRhdGFsaXN0IGlkPVxcXCJhbGxNYW51ZmFjdHVyZXJzXFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1hbnVmYWN0dXJlciBvZiBhbGxNYW51ZmFjdHVyZXJzXFxcIj57e21hbnVmYWN0dXJlcn19PC9vcHRpb24+XFxyXFxuICAgICAgICA8L2RhdGFsaXN0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJNYW51ZmFjdHVyZXI6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgI2lucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm1hbnVmYWN0dXJlclxcXCIgWyhuZ01vZGVsKV09XFxcImRlZmluaXRpb24ubWFudWZhY3R1cmVyXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGxpc3Q9XFxcImFsbE1hbnVmYWN0dXJlcnNcXFwiPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTW9kZWw6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgI2lucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm1vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVmaW5pdGlvbi5uYW1lXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiVHlwZTpcXFwiPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidHlwZVxcXCIgWyhuZ01vZGVsKV09XFxcImRlZmluaXRpb24udHlwZVxcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5MRUQ8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlR1bmdzdGVuPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5FZmZlY3Q8L29wdGlvbj5cXHJcXG4gICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cXFwiY2hhbm5lbExpc3RcXFwiIG5hbWU9XFxcImNoYW5uZWxMaXN0XFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPk1hc3Rlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+U3Ryb2JlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5SZWQ8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkdyZWVuPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5CbHVlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5VVjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+Q29sb3JXaGVlbDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+UGFuQ29hcnNlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5QYW5GaW5lPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5UaWx0Q29hcnNlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5UaWx0RmluZTwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9kYXRhbGlzdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkNoYW5uZWxzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RE1YPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWluPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1heDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjaGFubmVsIG9mIGRlZmluaXRpb24uY2hhbm5lbHM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwuZG14XFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNTEyXFxcIiBbbmFtZV09XFxcIidjaGFubmVsRE1YWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIFsodW5pcXVlKV09XFxcImNoYW5uZWxOYW1lc1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVxcXCInY2hhbm5lbE5hbWVbJyArIGkgKyAnXSdcXFwiIGxpc3Q9XFxcImNoYW5uZWxMaXN0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJjaGFubmVsLm1pblxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgW25hbWVdPVxcXCInY2hhbm5lbE1pblsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJjaGFubmVsLm1heFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgW25hbWVdPVxcXCInY2hhbm5lbE1heFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZUNoYW5uZWwoY2hhbm5lbClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkQ2hhbm5lbCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cXFwiYXhpc0xpc3RcXFwiIG5hbWU9XFxcImF4aXNMaXN0XFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlBhbjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+VGlsdDwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9kYXRhbGlzdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPk1vdmVtZW50IEF4aXM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1pbiAoZGVncmVlcyk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF4IChkZWdyZWVzKTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBtb3ZlbWVudCBvZiBkZWZpbml0aW9uLm1vdmVtZW50czsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3VuaXF1ZV09XFxcImNvbG9yV2hlZWxOYW1lc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcIm1vdmVtZW50Lm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cXFwiJ2F4aXNOYW1lWycgKyBpICsgJ10nXFxcIiBsaXN0PVxcXCJheGlzTGlzdFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwibW92ZW1lbnQubWluXFxcIiBbbmFtZV09XFxcIidheGlzTWluWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcIm1vdmVtZW50Lm1heFxcXCIgW25hbWVdPVxcXCInYXhpc01heFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZUF4aXMobW92ZW1lbnQpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZEF4aXMoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5Db2xvciBXaGVlbHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbG9yPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRNWCBTdGFydDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ETVggRW5kPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIGRlZmluaXRpb24uY29sb3JXaGVlbDsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgW3VuaXF1ZV09XFxcImNvbG9yV2hlZWxOYW1lc1xcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5Lm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cXFwiJ2NvbG9yV2hlZWxOYW1lWycgKyBpICsgJ10nXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJjb2xvclxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5LmNvbG9yXFxcIiBbbmFtZV09XFxcIidjb2xvcldoZWVsQ29sb3JbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50cnkuZG14U3RhcnRcXFwiIFtuYW1lXT1cXFwiJ2NvbG9yV2hlZWxNaW5bJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIyNTVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5LmRteEVuZFxcXCIgW25hbWVdPVxcXCInY29sb3JXaGVlbE1heFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVDb2xvcldoZWVsRW50cnkoZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZENvbG9yV2hlZWxFbnRyeSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdG9yRm9ybS52YWxpZFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9