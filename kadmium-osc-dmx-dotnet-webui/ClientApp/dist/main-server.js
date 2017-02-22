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
	var angular2_modal_1 = __webpack_require__(18);
	var bootstrap_1 = __webpack_require__(19);
	var navmenu_component_1 = __webpack_require__(20);
	var status_panel_component_1 = __webpack_require__(24);
	var message_bar_component_1 = __webpack_require__(29);
	var labelled_input_component_1 = __webpack_require__(31);
	var table_input_component_1 = __webpack_require__(33);
	var input_box_component_1 = __webpack_require__(35);
	var dashboard_component_1 = __webpack_require__(39);
	var settings_component_1 = __webpack_require__(44);
	var groups_component_1 = __webpack_require__(49);
	var venues_component_1 = __webpack_require__(53);
	var venue_editor_component_1 = __webpack_require__(55);
	var universe_editor_component_1 = __webpack_require__(56);
	var fixture_options_editor_component_1 = __webpack_require__(64);
	var fixture_definitions_component_1 = __webpack_require__(69);
	var fixture_definition_editor_component_1 = __webpack_require__(71);
	var preview_2d_component_1 = __webpack_require__(73);
	var preview_2d_fixture_component_1 = __webpack_require__(76);
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
	            preview_2d_component_1.Preview2DComponent,
	            preview_2d_fixture_component_1.Preview2DFixtureComponent,
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
	                { path: 'preview2d', component: preview_2d_component_1.Preview2DComponent },
	                { path: '**', redirectTo: 'sets' }
	            ])
	        ],
	        providers: [],
	        entryComponents: [fixture_options_editor_component_1.FixtureOptionsEditorComponent]
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

	module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span> \r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Kadmium OSC DMX</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/dashboard\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                        <span class=\"glyphicon glyphicon-cog\"></span> Setup\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/settings\">Settings</a></li>\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/groups\">Groups</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/venues\"> <span class=\"glyphicon glyphicon-th-list\"></span> Venues</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/fixture-definitions\"> <span class=\"glyphicon glyphicon-th-list\"></span> Fixture Definitions</a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                        <span class=\"glyphicon glyphicon-cog\"></span> Diagnostics\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li routerLinkActive=\"active\"><a routerLink=\"/preview2d\">Preview</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

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
	        template: __webpack_require__(36),
	        styles: [__webpack_require__(37)]
	    }),
	    __metadata("design:paramtypes", [core_1.Renderer])
	], InputBoxComponent);
	exports.InputBoxComponent = InputBoxComponent;


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <form class=\"form-horizontal\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"cancelClick()\">&times;</button>\r\n                    <h4 class=\"modal-title\">{{header}}</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <labelled-input [label]=\"body\">\r\n                        <input #input #model=\"ngModel\" [(ngModel)]=\"response\" class=\"form-control\" required [name]=\"input\" />\r\n                    </labelled-input>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"acceptClick()\" data-dismiss=\"modal\">{{acceptVerb}}</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelClick()\" data-dismiss=\"modal\">{{cancelVerb}}</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(38);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}", ""]);
	
	// exports


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
	var status_panel_component_1 = __webpack_require__(24);
	var message_bar_component_1 = __webpack_require__(29);
	var venue_service_1 = __webpack_require__(40);
	var url_1 = __webpack_require__(42);
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
	DashboardComponent.socketURL = url_1.URL.getSocketURL("Index");
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
	        template: __webpack_require__(43),
	        providers: [venue_service_1.VenueService]
	    }),
	    __metadata("design:paramtypes", [venue_service_1.VenueService])
	], DashboardComponent);
	exports.DashboardComponent = DashboardComponent;
	var DashboardComponent_1;


/***/ },
/* 40 */
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
	__webpack_require__(41);
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
/* 41 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	var URL = (function () {
	    function URL() {
	    }
	    URL.getSocketURL = function (controller) {
	        var actionURL = URL.getActionURL(controller, "Socket");
	        var socketURL = actionURL.replace("http", "ws");
	        return socketURL;
	    };
	    URL.getActionURL = function () {
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
	    };
	    return URL;
	}());
	exports.URL = URL;


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Dashboard</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <status-panel #venue name=\"Venue\">\r\n            <div class=\"dropdown\" *ngIf=\"venueNames\">\r\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Load Venue\r\n                <span class=\"caret\"></span></button>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li *ngFor=\"let venueName of venueNames\">\r\n                        <a (click)=\"activateVenue(venueName)\">{{venueName}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #sacnTransmitter name=\"sACN Transmitter\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/sacnTransmitterLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #oscListener name=\"OSC Listener\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/oscListenerLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <status-panel #fixtures name=\"Fixtures\">\r\n            <a class=\"btn btn-primary\" routerLink=\"/fixturesLive\">Live</a>\r\n        </status-panel>\r\n    </div>\r\n</div>"

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
	var message_bar_component_1 = __webpack_require__(29);
	var settings_service_1 = __webpack_require__(45);
	var settings_1 = __webpack_require__(46);
	var $ = __webpack_require__(47);
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
	        template: __webpack_require__(48),
	        providers: [settings_service_1.SettingsService]
	    }),
	    __metadata("design:paramtypes", [settings_service_1.SettingsService])
	], SettingsComponent);
	exports.SettingsComponent = SettingsComponent;


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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(8);
	__webpack_require__(41);
	var settings_1 = __webpack_require__(46);
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
/* 46 */
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
/* 47 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Settings</h1>\r\n</div>\r\n<p *ngIf=\"!settings\">Loading...</p>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"settings\" class=\"form-horizontal\" #settingsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"HTTP Port:\">\r\n            <input #input type=\"number\" name=\"webPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.webPort\" #model=\"ngModel\"\r\n            />\r\n        </labelled-input>\r\n        <labelled-input label=\"OSC Port:\">\r\n            <input #input required type=\"number\" name=\"oscPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.oscPort\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\">\r\n            <input #input type=\"number\" name=\"sacnTransmitterDelay\" class=\"form-control\" min=\"0\" max=\"10000\" [(ngModel)]=\"settings.sacnTransmitter.delay\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Multicast:\">\r\n            <div class=\"checkbox\">\r\n                <label><input #input type=\"checkbox\" name=\"sacnMulticast\" [(ngModel)]=\"settings.sacnTransmitter.multicast\" #sacnMulticast=\"ngModel\" #model=\"ngModel\" >Multicast</label>\r\n            </div>\r\n        </labelled-input>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">sACN Unicast Targets</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Address</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let target of settings.sacnTransmitter.unicast; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input required type=\"text\" class=\"form-control col-sm-8\" [(ngModel)]=\"settings.sacnTransmitter.unicast[i].target\" [name]=\"'unicast[' + i + ']'\"\r\n                                        #input #model=\"ngModel\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeTarget(i)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\"><button class=\"btn btn-success\" (click)=\"addTarget()\"><span class=\"glyphicon glyphicon-plus\"></span></button></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!settingsForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },
/* 49 */
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
	var message_bar_component_1 = __webpack_require__(29);
	var group_service_1 = __webpack_require__(50);
	var group_1 = __webpack_require__(51);
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
	        template: __webpack_require__(52),
	        providers: [group_service_1.GroupService]
	    }),
	    __metadata("design:paramtypes", [group_service_1.GroupService])
	], GroupsComponent);
	exports.GroupsComponent = GroupsComponent;


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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(8);
	__webpack_require__(41);
	var group_1 = __webpack_require__(51);
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
/* 51 */
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
/* 52 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Groups</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"groups\" #groupsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Order</th>\r\n                    <th>Name</th>\r\n                    <th>Remove</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let group of groups; let i = index\">\r\n                    <td>\r\n                        <button class=\"btn\" (click)=\"move(group, -1)\" [disabled]=\"i == 0\"><span class=\"glyphicon glyphicon-arrow-up\"></span></button>\r\n                        <button class=\"btn\" (click)=\"move(group, 1)\" [disabled]=\"i == groups.length - 1\"><span class=\"glyphicon glyphicon-arrow-down\"></span></button>\r\n                    </td>\r\n                    <td>\r\n                        <table-input>\r\n                            <input required [unique]=\"groupNames\" #input #model=\"ngModel\" class=\"form-control\" type=\"text\" [(ngModel)]=\"group.name\" [name]=\"'groupName[' + i + ']'\">\r\n                        </table-input>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"btn-group\">\r\n                            <button class=\"btn btn-danger\" (click)=\"delete(group)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span> Add</button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" [disabled]=\"!groupsForm.valid\" (click)=\"save()\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

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
	var message_bar_component_1 = __webpack_require__(29);
	var angular2_modal_1 = __webpack_require__(18);
	var bootstrap_1 = __webpack_require__(19);
	var venue_service_1 = __webpack_require__(40);
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
	                        if (!result)
	                            return [3 /*break*/, 7];
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
	        template: __webpack_require__(54),
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
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Venues</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<table class=\"table table-striped\" *ngIf=\"venues\">\r\n    <thead>\r\n        <tr>\r\n            <th>Venue</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of venues; let i = index\">\r\n            <td>{{entry.name}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(i)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span></button>"

/***/ },
/* 55 */
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
	var message_bar_component_1 = __webpack_require__(29);
	var universe_editor_component_1 = __webpack_require__(56);
	var fixture_options_editor_component_1 = __webpack_require__(64);
	var input_box_component_1 = __webpack_require__(35);
	var venue_1 = __webpack_require__(60);
	var venue_service_1 = __webpack_require__(40);
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
	        template: __webpack_require__(68),
	        providers: [venue_service_1.VenueService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, venue_service_1.VenueService])
	], VenueEditorComponent);
	exports.VenueEditorComponent = VenueEditorComponent;


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
	var message_bar_component_1 = __webpack_require__(29);
	var input_box_component_1 = __webpack_require__(35);
	var angular2_modal_1 = __webpack_require__(18);
	var bootstrap_1 = __webpack_require__(19);
	var fixture_definitions_service_1 = __webpack_require__(57);
	var venue_preset_service_1 = __webpack_require__(59);
	var group_service_1 = __webpack_require__(50);
	var venue_1 = __webpack_require__(60);
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
	        template: __webpack_require__(61),
	        styles: [__webpack_require__(62)],
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService, venue_preset_service_1.VenuePresetService, group_service_1.GroupService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService, venue_preset_service_1.VenuePresetService, group_service_1.GroupService,
	        angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
	], UniverseEditorComponent);
	exports.UniverseEditorComponent = UniverseEditorComponent;


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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(8);
	__webpack_require__(41);
	var fixture_definition_1 = __webpack_require__(58);
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
/* 58 */
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
	__webpack_require__(41);
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var fixture_definition_1 = __webpack_require__(58);
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
/* 61 */
/***/ function(module, exports) {

	module.exports = "<div role=\"tabpanel\" *ngIf=\"universe && skeletons\">\r\n    <!-- Nav tabs -->\r\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n        <li [ngClass]=\"{'active': selectedFixture == null}\">\r\n            <a (click)=\"selectedFixture = null\">Fixtures</a>\r\n        </li>\r\n        <li *ngFor=\"let fixture of universe.fixtures; let i = index\" [ngClass]=\"{'active': selectedFixture == fixture}\">\r\n            <a (click)=\"selectedFixture = fixture\">{{fixture.channel}} {{fixture.type.manufacturer}} {{fixture.type.model}}\r\n                <span class=\"glyphicon glyphicon-remove\" (click)=\"removeFixture(i)\"></span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a class=\"btn\" (click)=\"addFixture()\"><span class=\"glyphicon glyphicon-plus\"></span></a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"panel panel-default\" *ngIf=\"universe && skeletons && selectedFixture == null\">\r\n    <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Selected</th>\r\n                        <th>Channel</th>\r\n                        <th>Manufacturer</th>\r\n                        <th>Model</th>\r\n                        <th>Group</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let fixture of universe.fixtures; let i = index\">\r\n                        <td>\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" [ngModel]=\"isSelected(fixture)\" (ngModelChange)=\"selectFixture(fixture, $event)\" [name]=\"'selected[' + i + ']'\" >\r\n                                </label>\r\n                            </div>\r\n                        </td>\r\n                        <td>{{fixture.channel}}</td>\r\n                        <td>{{fixture.type.manufacturer}}</td>\r\n                        <td>{{fixture.type.model}}</td>\r\n                        <td>{{fixture.group}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"selectedPreset\">Preset:</label>\r\n            <div class=\"col-sm-10\">\r\n                <select class=\"form-control\" [(ngModel)]=\"selectedPresetName\" name=\"selectedPreset\">\r\n                    <option *ngFor=\"let venuePresetName of venuePresetNames\">{{venuePresetName}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label col-sm-2\" for=\"selectedPreset\">Actions:</label>\r\n            <div class=\"col-sm-10\">\r\n                <button type=\"button\" class=\"btn btn-success\" [disabled]=\"selectedPresetName == null\" (click)=\"loadPreset(selectedPresetName)\">\r\n                    <span class=\"glyphicon glyphicon-floppy-open\"></span> Load\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"selectedFixtures.length == 0\" (click)=\"savePreset()\">\r\n                    <span class=\"glyphicon glyphicon-floppy-save\"></span> Save As\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger\" [disabled]=\"selectedPresetName == null\" (click)=\"removePreset(selectedPresetName)\">\r\n                    <span class=\"glyphicon glyphicon-remove\"></span> Delete\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<fixture-options-editor #fixtureOptionsEditor [fixture]=\"selectedFixture\"></fixture-options-editor>"

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(63);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}", ""]);
	
	// exports


/***/ },
/* 64 */
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
	var fixture_definitions_service_1 = __webpack_require__(57);
	var group_service_1 = __webpack_require__(50);
	var venue_1 = __webpack_require__(60);
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
	                        if (!(manufacturer != null && model != null))
	                            return [3 /*break*/, 2];
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
	        template: __webpack_require__(65),
	        styles: [__webpack_require__(66)],
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
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\" *ngIf=\"fixture\">\r\n    <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n            <fieldset name=\"commonFields\">\r\n                <labelled-input label=\"Manufacturer\">\r\n                    <select #input #model=\"ngModel\" name=\"manufacturer\" class=\"form-control\" [(ngModel)]=\"fixture.type.manufacturer\" (ngModelChange)=\"selectManufacturer($event)\">\r\n                        <option *ngFor=\"let manufacturer of getManufacturers()\">{{manufacturer}}</option>\r\n                    </select>\r\n                </labelled-input>\r\n                <labelled-input label=\"Model\">\r\n                    <select #input #model=\"ngModel\" name=\"model\" class=\"form-control\" [(ngModel)]=\"fixture.type.model\" (ngModelChange)=\"updateDefinition(fixture.type.manufacturer, $event)\" >\r\n                        <option *ngFor=\"let model of getModels(fixture.type.manufacturer)\">{{model}}</option>\r\n                    </select>\r\n                </labelled-input>\r\n                <labelled-input label=\"Channel\">\r\n                    <input #input #model=\"ngModel\" name=\"channel\" class=\"form-control\" min=\"1\" max=\"512\" type=\"number\" [(ngModel)]=\"fixture.channel\" />\r\n                </labelled-input>\r\n                <labelled-input label=\"Group\">\r\n                    <select #input #model=\"ngModel\" name=\"group\" class=\"form-control\" [(ngModel)]=\"fixture.group\" >\r\n                        <option *ngFor=\"let group of groups\">{{group.name}}</option>\r\n                    </select>\r\n                </labelled-input>\r\n            </fieldset>\r\n            <fieldset name=\"options\" *ngIf=\"definition\">\r\n                <labelled-input label=\"Max Brightness:\">\r\n                    <input #input #model=\"ngModel\" class=\"form-control\" [(ngModel)]=\"fixture.options.maxBrightness\" type=\"number\" min=\"0\" max=\"1\"\r\n                        step=\"0.01\" name=\"maxBrightness\" />\r\n                </labelled-input>\r\n                <div *ngIf=\"moving\" class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">Axis Options</div>\r\n                    <div class=\"panel-body\">\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Name</th>\r\n                                    <th>Inverted</th>\r\n                                    <th>Restricted</th>\r\n                                    <th>Min (degrees)</th>\r\n                                    <th>Max (degrees)</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let axis of axisOptions\">\r\n                                    <td>{{axis.name}}</td>\r\n                                    <td>\r\n                                        <div class=\"checkbox\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"axis.inverted\" [name]=\"'inverted[' + axis.name + ']'\" >\r\n                                                Inverted\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class=\"checkbox\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"axis.restricted\" [name]=\"'restricted[' + axis.name + ']'\" >\r\n                                                Restricted\r\n                                            </label>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <table-input>\r\n                                            <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"axis.restrictionMin\" [name]=\"'restrictionMin[' + axis.name + ']'\"\r\n                                                [min]=\"axis.min\" [max]=\"axis.max\" [disabled]=\"!axis.restricted\"\r\n                                            />\r\n                                        </table-input>\r\n                                    </td>\r\n                                    <td>\r\n                                        <table-input>\r\n                                            <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"axis.restrictionMax\" [name]=\"'restrictionMax[' + axis.name + ']'\"\r\n                                                [min]=\"axis.min\" [max]=\"axis.max\" [disabled]=\"!axis.restricted\"\r\n                                            />\r\n                                        </table-input>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(67);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Venue Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"venue\" class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"Name:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"venue.name\" #model=\"ngModel\">\r\n        </labelled-input>\r\n\r\n        <div role=\"tabpanel\">\r\n            <!-- Nav tabs -->\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li *ngFor=\"let universe of venue.universes; let i = index\" [ngClass]=\"{'active': selectedUniverse == universe}\" class=\"active\">\r\n                    <a (click)=\"selectedUniverse = universe\">{{universe.name}}\r\n                        <span *ngIf=\"i > 0\" class=\"glyphicon glyphicon-remove\" (click)=\"removeUniverse(i)\"></span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"btn\" (click)=\"addUniverse()\"><span class=\"glyphicon glyphicon-plus\"></span></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"panel panel-default\" *ngIf=\"selectedUniverse\">\r\n            <div class=\"panel-body\">\r\n                <labelled-input label=\"Name:\">\r\n                    <input required #input #model=\"ngModel\" [(ngModel)]=\"selectedUniverse.name\" type=\"text\" class=\"form-control\" [name]=\"'universeName[' + i + ']'\"\r\n                    />\r\n                </labelled-input>\r\n                <labelled-input label=\"Universe ID:\">\r\n                    <input #input #model=\"ngModel\" [(ngModel)]=\"selectedUniverse.universeID\" type=\"number\" class=\"form-control\" min=\"1\" max=\"65535\"\r\n                        [name]=\"'universeNumber[' + i + ']'\" />\r\n                </labelled-input>\r\n            </div>\r\n\r\n            <universe-editor [universe]=\"selectedUniverse\" [messageBar]=\"messageBar\" [inputBox]=\"inputBox\"></universe-editor>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!editorForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>\r\n<input-box #inputBox></input-box>"

/***/ },
/* 69 */
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
	var message_bar_component_1 = __webpack_require__(29);
	var angular2_modal_1 = __webpack_require__(18);
	var bootstrap_1 = __webpack_require__(19);
	var fixture_definitions_service_1 = __webpack_require__(57);
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
	                        if (!result)
	                            return [3 /*break*/, 7];
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
	        template: __webpack_require__(70),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService, angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
	], FixtureDefinitionsComponent);
	exports.FixtureDefinitionsComponent = FixtureDefinitionsComponent;


/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definitions</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"form-group form-inline\" *ngIf=\"data\">\r\n    <div class=\"checkbox\">\r\n        <label>\r\n            <input type=\"checkbox\" [(ngModel)]=\"manufacturerFilterEnabled\" />\r\n            Filter by manufacturer\r\n        </label>\r\n    </div>\r\n    <select required class=\"form-control\" [disabled]=\"!manufacturerFilterEnabled\" [(ngModel)]=\"manufacturerFilter\">\r\n        <option *ngFor=\"let manufacturer of manufacturers\">{{manufacturer}}</option>\r\n    </select>\r\n</div>\r\n<table class=\"table table-striped\" *ngIf=\"data\">\r\n    <thead>\r\n        <tr>\r\n            <th>Manufacturer</th>\r\n            <th>Model</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of filteredData\">\r\n            <td>{{entry.manufacturer}}</td>\r\n            <td>{{entry.model}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span></button>"

/***/ },
/* 71 */
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
	var fixture_definition_1 = __webpack_require__(58);
	var fixture_definitions_service_1 = __webpack_require__(57);
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
	        template: __webpack_require__(72),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, fixture_definitions_service_1.FixtureDefinitionsService, angular2_modal_1.Overlay, core_1.ViewContainerRef, bootstrap_1.Modal])
	], FixtureDefinitionEditorComponent);
	exports.FixtureDefinitionEditorComponent = FixtureDefinitionEditorComponent;


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definition Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"definition\" class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <datalist id=\"allManufacturers\">\r\n            <option *ngFor=\"let manufacturer of allManufacturers\">{{manufacturer}}</option>\r\n        </datalist>\r\n        <labelled-input label=\"Manufacturer:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"manufacturer\" [(ngModel)]=\"definition.manufacturer\" #model=\"ngModel\"\r\n                list=\"allManufacturers\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Model:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"model\" [(ngModel)]=\"definition.name\" #model=\"ngModel\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Type:\">\r\n            <select #input #model=\"ngModel\" class=\"form-control\" name=\"type\" [(ngModel)]=\"definition.type\">\r\n            <option>LED</option>\r\n            <option>Tungsten</option>\r\n            <option>Effect</option>\r\n        </select>\r\n        </labelled-input>\r\n        <datalist id=\"channelList\" name=\"channelList\">\r\n            <option>Master</option>\r\n            <option>Strobe</option>\r\n            <option>Red</option>\r\n            <option>Green</option>\r\n            <option>Blue</option>\r\n            <option>UV</option>\r\n            <option>ColorWheel</option>\r\n            <option>PanCoarse</option>\r\n            <option>PanFine</option>\r\n            <option>TiltCoarse</option>\r\n            <option>TiltFine</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Channels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>DMX</th>\r\n                            <th>Name</th>\r\n                            <th>Min</th>\r\n                            <th>Max</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let channel of definition.channels; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.dmx\" min=\"1\" max=\"512\" [name]=\"'channelDMX[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required [(unique)]=\"channelNames\" class=\"form-control\" type=\"text\" [(ngModel)]=\"channel.name\"\r\n                                        [name]=\"'channelName[' + i + ']'\" list=\"channelList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.min\" min=\"0\" max=\"255\" [name]=\"'channelMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.max\" min=\"0\" max=\"255\" [name]=\"'channelMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeChannel(channel)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addChannel()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <datalist id=\"axisList\" name=\"axisList\">\r\n            <option>Pan</option>\r\n            <option>Tilt</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Movement Axis</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Min (degrees)</th>\r\n                            <th>Max (degrees)</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let movement of definition.movements; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" [unique]=\"colorWheelNames\" type=\"text\" [(ngModel)]=\"movement.name\"\r\n                                        [name]=\"'axisName[' + i + ']'\" list=\"axisList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.min\" [name]=\"'axisMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.max\" [name]=\"'axisMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeAxis(movement)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addAxis()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Color Wheels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Color</th>\r\n                            <th>DMX Start</th>\r\n                            <th>DMX End</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let entry of definition.colorWheel; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" [unique]=\"colorWheelNames\" required class=\"form-control\" type=\"text\" [(ngModel)]=\"entry.name\"\r\n                                        [name]=\"'colorWheelName[' + i + ']'\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"color\" [(ngModel)]=\"entry.color\" [name]=\"'colorWheelColor[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxStart\" [name]=\"'colorWheelMin[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxEnd\" [name]=\"'colorWheelMax[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeColorWheelEntry(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addColorWheelEntry()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!editorForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ },
/* 73 */
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
	var message_bar_component_1 = __webpack_require__(29);
	var preview_service_1 = __webpack_require__(74);
	var Preview2DComponent = (function () {
	    function Preview2DComponent(previewService) {
	        var _this = this;
	        previewService
	            .get()
	            .then(function (value) {
	            _this.groups = value.groups;
	            _this.universes = new Map();
	            for (var _i = 0, _a = value.universes; _i < _a.length; _i++) {
	                var universe = _a[_i];
	                _this.universes.set(universe.name, universe);
	                _this.universeData = [];
	            }
	            _this.activeUniverse = _this.universes.get(_this.universes.keys().next().value);
	            previewService.subscribe(function (data) {
	                _this.universeData = data.values;
	            });
	        })
	            .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	    }
	    Preview2DComponent.prototype.getFixtures = function (universe, group) {
	        return universe.fixtures.filter(function (x) { return x.group == group; });
	    };
	    return Preview2DComponent;
	}());
	__decorate([
	    core_1.ViewChild("messageBar"),
	    __metadata("design:type", message_bar_component_1.MessageBarComponent)
	], Preview2DComponent.prototype, "messageBar", void 0);
	Preview2DComponent = __decorate([
	    core_1.Component({
	        selector: 'preview-2d',
	        template: __webpack_require__(75),
	        providers: [preview_service_1.PreviewService]
	    }),
	    __metadata("design:paramtypes", [preview_service_1.PreviewService])
	], Preview2DComponent);
	exports.Preview2DComponent = Preview2DComponent;


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
	var http_1 = __webpack_require__(8);
	__webpack_require__(41);
	var url_1 = __webpack_require__(42);
	var PreviewService = (function () {
	    function PreviewService(http) {
	        this.http = http;
	        this.previewUrl = "/api/Preview";
	        this.socketUrl = url_1.URL.getSocketURL("Preview");
	        this.socket = new WebSocket(this.socketUrl);
	    }
	    PreviewService.prototype.get = function () {
	        return this.http.get(this.previewUrl)
	            .toPromise()
	            .then(function (response) {
	            var rawData = response.json();
	            if (rawData.groups != null) {
	                var data = rawData;
	                return data;
	            }
	            else {
	                throw "No Venue Loaded";
	            }
	        });
	    };
	    PreviewService.prototype.subscribe = function (listener) {
	        this.socket.addEventListener("message", function (ev) {
	            var data = JSON.parse(ev.data);
	            listener(data);
	        });
	    };
	    return PreviewService;
	}());
	PreviewService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http])
	], PreviewService);
	exports.PreviewService = PreviewService;


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Preview</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"panel panel-default\" *ngFor=\"let group of groups\">\r\n    <div class=\"panel-heading\">{{group}}</div>\r\n    <div class=\"panel-body\">\r\n        <preview-2d-fixture *ngFor=\"let fixture of getFixtures(activeUniverse, group)\" [data]=\"universeData\" [fixture]=\"fixture\"></preview-2d-fixture>\r\n    </div>\r\n</div>"

/***/ },
/* 76 */
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
	var DMXPreviewFixture_1 = __webpack_require__(81);
	var Preview2DFixtureComponent = Preview2DFixtureComponent_1 = (function () {
	    function Preview2DFixtureComponent() {
	    }
	    Preview2DFixtureComponent.prototype.ngAfterContentInit = function () {
	        this.canvas = this.canvasRef.nativeElement;
	        this.ctx = this.canvas.getContext("2d");
	        this.fixture = new DMXPreviewFixture_1.DMXPreviewFixture(this.fixtureData);
	    };
	    Preview2DFixtureComponent.prototype.ngOnChanges = function (changes) {
	        if (changes["data"] != null && changes["data"].currentValue != null && this.canvas) {
	            var newData = changes["data"].currentValue;
	            this.fixture.update(newData);
	            this.render();
	        }
	    };
	    Preview2DFixtureComponent.prototype.render = function () {
	        this.ctx.fillStyle = this.fixture.fillStyle;
	        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	        this.ctx.strokeStyle = this.fixture.strokeStyle;
	        this.ctx.lineWidth = 2;
	        if (this.fixture.pan != null) {
	            var panX = this.fixture.pan * this.canvas.width;
	            this.ctx.beginPath();
	            this.ctx.moveTo(panX, 0);
	            this.ctx.lineTo(panX, this.canvas.width);
	            this.ctx.stroke();
	        }
	        if (this.fixture.tilt != null) {
	            var tiltY = this.fixture.tilt * this.canvas.height;
	            this.ctx.beginPath();
	            this.ctx.moveTo(0, tiltY);
	            this.ctx.lineTo(this.canvas.width, tiltY);
	            this.ctx.stroke();
	        }
	    };
	    return Preview2DFixtureComponent;
	}());
	Preview2DFixtureComponent.updateRate = 60; //hertz
	Preview2DFixtureComponent.updateTime = 1000 / Preview2DFixtureComponent_1.updateRate;
	__decorate([
	    core_1.Input("fixture"),
	    __metadata("design:type", Object)
	], Preview2DFixtureComponent.prototype, "fixtureData", void 0);
	__decorate([
	    core_1.Input("data"),
	    __metadata("design:type", Array)
	], Preview2DFixtureComponent.prototype, "data", void 0);
	__decorate([
	    core_1.ViewChild("canvas"),
	    __metadata("design:type", core_1.ElementRef)
	], Preview2DFixtureComponent.prototype, "canvasRef", void 0);
	Preview2DFixtureComponent = Preview2DFixtureComponent_1 = __decorate([
	    core_1.Component({
	        selector: 'preview-2d-fixture',
	        template: __webpack_require__(77),
	        styles: [__webpack_require__(78)]
	    }),
	    __metadata("design:paramtypes", [])
	], Preview2DFixtureComponent);
	exports.Preview2DFixtureComponent = Preview2DFixtureComponent;
	var Preview2DFixtureComponent_1;


/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">{{fixture.address}} {{fixture.manufacturer}} {{fixture.model}}</div>\r\n    <div class=\"panel-body\">\r\n        <canvas #canvas width=\"300\" height=\"300\" class=\"fixtureCanvas\"></canvas>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <div class=\"dropdown\">\r\n            <button (click)=\"fixture.expanded = !fixture.expanded\" class=\"btn btn-default text-center\">DMX</button>\r\n\r\n            <table *ngIf=\"fixture.expanded\" class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Channel</th>\r\n                        <th>Name</th>\r\n                        <th>Value</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let channel of fixture.channels\">\r\n                        <td>{{channel.dmx + fixture.address - 1}}</td>\r\n                        <td>{{channel.name}}</td>\r\n                        <td>{{channel.dmxValue}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(79);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".fixtureCanvas\r\n{\r\n    border: 1px solid black;\r\n}", ""]);
	
	// exports


/***/ },
/* 80 */,
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DMXPreviewChannel_1 = __webpack_require__(82);
	var Color_1 = __webpack_require__(83);
	var DMXPreviewFixture = (function () {
	    function DMXPreviewFixture(data) {
	        this.manufacturer = data.definition.manufacturer;
	        this.model = data.definition.name;
	        this.address = data.channel;
	        this.expanded = false;
	        this.channelNameMap = new Map();
	        this.channelNumberMap = new Map();
	        this.channels = [];
	        for (var _i = 0, _a = data.definition.channels; _i < _a.length; _i++) {
	            var channel = _a[_i];
	            var dmxChannel = new DMXPreviewChannel_1.DMXPreviewChannel(channel.name, channel.dmx, channel.min, channel.max);
	            this.channels.push(dmxChannel);
	            this.channelNameMap.set(dmxChannel.name, dmxChannel);
	            var array = this.channelNumberMap.get(dmxChannel.dmx);
	            if (array == null) {
	                array = [];
	                this.channelNumberMap.set(dmxChannel.dmx + data.channel - 2, array);
	            }
	            array.push(dmxChannel);
	        }
	    }
	    DMXPreviewFixture.prototype.update = function (data) {
	        for (var _i = 0, _a = this.channels; _i < _a.length; _i++) {
	            var channel = _a[_i];
	            var address = channel.dmx + this.address - 2;
	            channel.dmxValue = data[address];
	        }
	    };
	    Object.defineProperty(DMXPreviewFixture.prototype, "red", {
	        get: function () {
	            return this.optionalGetValue("Red") * this.optionalGetValue("Master", 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DMXPreviewFixture.prototype, "green", {
	        get: function () {
	            return this.optionalGetValue("Green") * this.optionalGetValue("Master", 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DMXPreviewFixture.prototype, "blue", {
	        get: function () {
	            return this.optionalGetValue("Blue") * this.optionalGetValue("Master", 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DMXPreviewFixture.prototype, "fillStyle", {
	        get: function () {
	            var ms = Date.now() % 50;
	            if (this.optionalGetValue("Strobe") > 0 && ms > 25) {
	                return "black";
	            }
	            else {
	                return "rgb(" + this.red * 255 + ", " + this.green * 255 + ", " + this.blue * 255;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DMXPreviewFixture.prototype, "strokeStyle", {
	        get: function () {
	            var stroke = new Color_1.RGB(this.red * 255, this.green * 255, this.blue * 255).invert();
	            return stroke.toString();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DMXPreviewFixture.prototype, "pan", {
	        get: function () {
	            if (this.channelNameMap.get("PanCoarse") != null) {
	                return this.channelNameMap.get("PanCoarse").value;
	            }
	            if (this.channelNameMap.get("Pan") != null) {
	                return this.channelNameMap.get("Pan").value;
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DMXPreviewFixture.prototype, "tilt", {
	        get: function () {
	            if (this.channelNameMap.get("TiltCoarse") != null) {
	                return this.channelNameMap.get("TiltCoarse").value;
	            }
	            if (this.channelNameMap.get("Tilt") != null) {
	                return this.channelNameMap.get("Tilt").value;
	            }
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DMXPreviewFixture.prototype.optionalGetValue = function (name, defaultValue) {
	        defaultValue = defaultValue || 0;
	        var channel = this.channelNameMap.get(name);
	        return channel ? channel.value : defaultValue;
	    };
	    return DMXPreviewFixture;
	}());
	exports.DMXPreviewFixture = DMXPreviewFixture;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var fixture_definition_1 = __webpack_require__(58);
	var DMXPreviewChannel = (function (_super) {
	    __extends(DMXPreviewChannel, _super);
	    function DMXPreviewChannel(name, dmx, min, max) {
	        var _this = _super.call(this, name, dmx, min, max) || this;
	        _this.value = 0;
	        return _this;
	    }
	    Object.defineProperty(DMXPreviewChannel.prototype, "range", {
	        get: function () {
	            return this.max - this.min;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DMXPreviewChannel.prototype, "dmxValue", {
	        get: function () {
	            return (this.value * this.range) + this.min;
	        },
	        set: function (value) {
	            if (value >= this.min && value <= this.max) {
	                this.value = (value - this.min) / this.range;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DMXPreviewChannel.load = function (channel) {
	        return new fixture_definition_1.DMXChannel(channel.name, channel.dmx, channel.min, channel.max);
	    };
	    return DMXPreviewChannel;
	}(fixture_definition_1.DMXChannel));
	exports.DMXPreviewChannel = DMXPreviewChannel;


/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";
	var Color = (function () {
	    function Color() {
	    }
	    Color.randomColor = function () {
	        var color;
	        color = Math.floor(Math.random() * 0x1000000); // integer between 0x0 and 0xFFFFFF
	        color = color.toString(16); // convert to hex
	        color = ("000000" + color).slice(-6); // pad with leading zeros
	        color = "#" + color; // prepend #
	        return color;
	    };
	    Color.invertCssColor = function (color) {
	        var rgb = RGB.parse(color).invert();
	        return rgb.toString();
	    };
	    Color.dec2hex = function (n) {
	        var hex = n.toString(16);
	        if (hex.length < 2) {
	            return '0' + hex;
	        }
	        return hex;
	    };
	    Color.clamp = function (n) {
	        if (n < 0) {
	            return 0;
	        }
	        if (n > 255) {
	            return 255;
	        }
	        return Math.floor(n);
	    };
	    return Color;
	}());
	exports.Color = Color;
	var RGB = (function () {
	    function RGB(red, green, blue) {
	        this.r = red;
	        this.g = green;
	        this.b = blue;
	    }
	    RGB.prototype.toYUV = function () {
	        var y = Color.clamp(this.r * 0.29900 + this.g * 0.587 + this.b * 0.114);
	        var u = Color.clamp(this.r * -0.16874 + this.g * -0.33126 + this.b * 0.50000 + 128);
	        var v = Color.clamp(this.r * 0.50000 + this.g * -0.41869 + this.b * -0.08131 + 128);
	        return new YUV(y, u, v);
	    };
	    RGB.prototype.toString = function () {
	        return '#' + Color.dec2hex(this.r) + Color.dec2hex(this.g) + Color.dec2hex(this.b);
	    };
	    RGB.parse = function (str) {
	        var color = str.substring(1); // remove #
	        return new RGB(parseInt(color.substring(0, 2), 16), parseInt(color.substring(2, 4), 16), parseInt(color.substring(4, 6), 16));
	    };
	    RGB.prototype.invert = function () {
	        var yuv = this.toYUV();
	        var factor = 90;
	        var threshold = 100;
	        yuv.y = Color.clamp(yuv.y + (yuv.y > threshold ? -factor : factor));
	        return yuv.toRGB();
	    };
	    return RGB;
	}());
	exports.RGB = RGB;
	var YUV = (function () {
	    function YUV(y, u, v) {
	        this.y = y;
	        this.u = u;
	        this.v = v;
	    }
	    YUV.prototype.toRGB = function () {
	        var y = this.y;
	        var u = this.u;
	        var v = this.v;
	        var r = Color.clamp(y + (v - 128) * 1.40200);
	        var g = Color.clamp(y + (u - 128) * -0.34414 + (v - 128) * -0.71414);
	        var b = Color.clamp(y + (u - 128) * 1.77200);
	        return new RGB(r, g, b);
	    };
	    return YUV;
	}());
	exports.YUV = YUV;


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDJkMmMyYmQ0M2YwODIzMTFhNTkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzPzRlYWMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LmNzcz9hNzBjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NoYXJlZC91cmwudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1lZGl0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtcHJlc2V0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuY3NzPzJkNWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LmNzcz82ZjFmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtZWRpdG9yLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ByZXZpZXctMmQvcHJldmlldy0yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXctMmQtZml4dHVyZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50LmNzcz85MGQ2Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXctMmQtZml4dHVyZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL0RNWFByZXZpZXdGaXh0dXJlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL0RNWFByZXZpZXdDaGFubmVsLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL0NvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHNCQUFjLEVBQUUsQ0FBQztBQUNqQixLQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFDO0FBRXZDLG9CQUF5QixNQUFXO0tBQ2hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1NBQy9CLElBQU0sV0FBVyxHQUFH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QUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUM3QyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JFLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1NBQzdDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVCLENBQUM7S0FDTCxVQUFDO0FBQUQsRUFBQztBQXZCWSxtQkFBRyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQyZDJjMmJkNDNmMDgyMzExYTU5IiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcclxuXHJcbmltcG9ydCB7IE1JTk1BWF9ESVJFQ1RJVkVTIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XHJcbmltcG9ydCB7IE1heFZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XHJcbmltcG9ydCB7IFVuaXF1ZVZhbGlkYXRvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmVcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xyXG5pbXBvcnQgeyBCb290c3RyYXBNb2RhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0YXR1c1BhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYWJlbGxlZElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGFibGVJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElucHV0Qm94Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JvdXBzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVudWVzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW51ZUVkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2VFZGl0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJldmlldzJEQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXctMmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByZXZpZXcyREZpeHR1cmVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ByZXZpZXctMmQvcHJldmlldy0yZC1maXh0dXJlLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZlbnVlU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmVudWVQcmVzZXRTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZXMvdmVudWUtcHJlc2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JvdXBTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncm91cHMvZ3JvdXAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuXHJcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIEdyb3Vwc0NvbXBvbmVudCxcclxuICAgICAgICBWZW51ZXNDb21wb25lbnQsXHJcbiAgICAgICAgVmVudWVFZGl0b3JDb21wb25lbnQsXHJcbiAgICAgICAgVW5pdmVyc2VFZGl0b3JDb21wb25lbnQsXHJcbiAgICAgICAgRml4dHVyZU9wdGlvbnNFZGl0b3JDb21wb25lbnQsXHJcbiAgICAgICAgRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50LFxyXG4gICAgICAgIEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIFByZXZpZXcyRENvbXBvbmVudCxcclxuICAgICAgICBQcmV2aWV3MkRGaXh0dXJlQ29tcG9uZW50LFxyXG5cclxuICAgICAgICBNSU5NQVhfRElSRUNUSVZFUyxcclxuICAgICAgICBVbmlxdWVWYWxpZGF0b3IsXHJcblxyXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgU3RhdHVzUGFuZWxDb21wb25lbnQsXHJcbiAgICAgICAgTWVzc2FnZUJhckNvbXBvbmVudCxcclxuICAgICAgICBMYWJlbGxlZElucHV0Q29tcG9uZW50LFxyXG4gICAgICAgIFRhYmxlSW5wdXRDb21wb25lbnQsXHJcbiAgICAgICAgSW5wdXRCb3hDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG5cclxuICAgICAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgQm9vdHN0cmFwTW9kYWxNb2R1bGUsXHJcblxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2Rhc2hib2FyZCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdncm91cHMnLCBjb21wb25lbnQ6IEdyb3Vwc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICd2ZW51ZXMnLCBjb21wb25lbnQ6IFZlbnVlc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICd2ZW51ZXMvbmV3JywgY29tcG9uZW50OiBWZW51ZUVkaXRvckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICd2ZW51ZXMvOmlkJywgY29tcG9uZW50OiBWZW51ZUVkaXRvckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmaXh0dXJlLWRlZmluaXRpb25zJywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbnNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZml4dHVyZS1kZWZpbml0aW9ucy9uZXcnLCBjb21wb25lbnQ6IEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMvOm1hbnVmYWN0dXJlci86bW9kZWwnLCBjb21wb25lbnQ6IEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3ByZXZpZXcyZCcsIGNvbXBvbmVudDogUHJldmlldzJEQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ3NldHMnIH1cclxuICAgICAgICBdKVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZVxyXG57XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdi1tZW51PjwvbmF2LW1lbnU+XFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGJvZHktY29udGVudFxcXCI+XFxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL21heC12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IE1pblZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9taW4tdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1heFZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTUlOTUFYX0RJUkVDVElWRVM6IFthbnldID0gW01pblZhbHVlVmFsaWRhdG9yLCBNYXhWYWx1ZVZhbGlkYXRvcl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9pbmRleC50cyIsImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1JTl9WQUxVRV9WQUxJREFUT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNaW5WYWx1ZVZhbGlkYXRvciksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1ttaW5dW2Zvcm1Db250cm9sTmFtZV0sW21pbl1bZm9ybUNvbnRyb2xdLFttaW5dW25nTW9kZWxdJyxcclxuICAgIHByb3ZpZGVyczogW01JTl9WQUxVRV9WQUxJREFUT1JdLFxyXG4gICAgaG9zdDogeyAnW2F0dHIubWluXSc6ICdtaW4gPyBtaW4gOiAwJyB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWluVmFsdWVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uQ2hhbmdlc1xyXG57XHJcbiAgICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xyXG5cclxuICAgIEBJbnB1dCgpIG1pbjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBAQXR0cmlidXRlKCdtaW4nKSBtbjogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChtbiAhPT0gdW5kZWZpbmVkICYmIG1uICE9PSBudWxsKVxyXG4gICAgICAgIHtcdC8vIGlzUHJlc2VudFxyXG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBwYXJzZUludChtbiwgMTApO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGF0dHJWYWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluID0gbW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1pbkNoYW5nZSA9IGNoYW5nZXNbJ21pbiddO1xyXG4gICAgICAgIGlmIChtaW5DaGFuZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlVmFsaWRhdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBNaW5WYWx1ZVZhbGlkYXRvci5taW4ocGFyc2VJbnQodGhpcy5taW4sIDEwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7IHJldHVybiB0aGlzLl92YWxpZGF0b3IoYyk7IH1cclxuXHJcbiAgICBzdGF0aWMgbWluKG1uOiBudW1iZXIpOiBWYWxpZGF0b3JGblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHYgPSArY29udHJvbC52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICh2IDwgbW4gPyB7ICdtaW4nOiB7ICdtaW5WYWx1ZSc6IG1uLCAnYWN0dWFsVmFsdWUnOiB2IH0gfSA6IG51bGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9taW4tdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTUFYX1ZBTFVFX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1heFZhbHVlVmFsaWRhdG9yKSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW21heF1bZm9ybUNvbnRyb2xOYW1lXSxbbWluXVtmb3JtQ29udHJvbF0sW21pbl1bbmdNb2RlbF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbTUFYX1ZBTFVFX1ZBTElEQVRPUl0sXHJcbiAgICBob3N0OiB7ICdbYXR0ci5tYXhdJzogJ21heCA/IG1heCA6IDAnIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXhWYWx1ZVZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25DaGFuZ2VzXHJcbntcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XHJcblxyXG4gICAgQElucHV0KCkgbWF4OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIEBBdHRyaWJ1dGUoJ21heCcpIG14OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG14ICE9PSB1bmRlZmluZWQgJiYgbXggIT09IG51bGwpXHJcbiAgICAgICAge1x0Ly8gaXNQcmVzZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHBhcnNlSW50KG14LCAxMCk7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oYXR0clZhbHVlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXggPSBteDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbWF4Q2hhbmdlID0gY2hhbmdlc1snbWF4J107XHJcbiAgICAgICAgaWYgKG1heENoYW5nZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVWYWxpZGF0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IE1heFZhbHVlVmFsaWRhdG9yLm1heChwYXJzZUludCh0aGlzLm1heCwgMTApKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcihjKTsgfVxyXG5cclxuICAgIHN0YXRpYyBtYXgobXg6IG51bWJlcik6IFZhbGlkYXRvckZuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdiA9ICtjb250cm9sLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gKHYgPiBteCA/IHsgJ21heCc6IHsgJ21heFZhbHVlJzogbXgsICdhY3R1YWxWYWx1ZSc6IHYgfSB9IDogbnVsbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L21heC12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmLCBJbnB1dCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1bmlxdWVdW25nTW9kZWxdLFt1bmlxdWVdW2Zvcm1Db250cm9sXScsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFVuaXF1ZVZhbGlkYXRvciksIG11bHRpOiB0cnVlIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbGlkYXRvclxyXG57XHJcbiAgICBASW5wdXQoKSB1bmlxdWU6IGFueVtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy51bmlxdWUgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWF0Y2hlcyA9IHRoaXMudW5pcXVlLmZpbHRlcigodmFsdWU6IGFueSkgPT4gYy52YWx1ZSA9PT0gdmFsdWUpO1xyXG4gICAgICAgIGlmIChjLmRpcnR5ICYmIG1hdGNoZXMubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHVuaXF1ZTogeyB2YWxpZDogZmFsc2UgfSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1tb2RhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLW1vZGFsXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50XG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1zdGF0aWMtdG9wXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI215TmF2YmFyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj4gXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgaHJlZj1cXFwiI1xcXCI+S2FkbWl1bSBPU0MgRE1YPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcXFwiIGlkPVxcXCJteU5hdmJhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9kYXNoYm9hcmRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWhvbWVcXFwiPjwvc3Bhbj4gSG9tZTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY29nXFxcIj48L3NwYW4+IFNldHVwXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9zZXR0aW5nc1xcXCI+U2V0dGluZ3M8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48YSByb3V0ZXJMaW5rPVxcXCIvZ3JvdXBzXFxcIj5Hcm91cHM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiL3ZlbnVlc1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3RcXFwiPjwvc3Bhbj4gVmVudWVzPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi9maXh0dXJlLWRlZmluaXRpb25zXFxcIj4gPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdFxcXCI+PC9zcGFuPiBGaXh0dXJlIERlZmluaXRpb25zPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcImRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgaHJlZj1cXFwiI1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tY29nXFxcIj48L3NwYW4+IERpYWdub3N0aWNzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9wcmV2aWV3MmRcXFwiPlByZXZpZXc8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L25hdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL3N0YXR1c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0YXR1cy1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdGF0dXMtcGFuZWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXR1c1BhbmVsQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBzdGF0dXM6IFN0YXR1cztcclxuICAgIEBJbnB1dChcIm5hbWVcIikgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IG5ldyBTdGF0dXMoXCJVbmtub3duXCIsIFwiVW5rbm93blwiKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgU3RhdHVzXHJcbntcclxuICAgIHN0YXRpYyBTdGF0dXNUYWJsZTogU3RhdHVzVGFibGUgPSB7XHJcbiAgICAgICAgU3VjY2VzczogeyBhbGVydFN0eWxlOiBcImFsZXJ0LXN1Y2Nlc3NcIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1vay1zaWduXCIgfSxcclxuICAgICAgICBFcnJvcjogeyBhbGVydFN0eWxlOiBcImFsZXJ0LWRhbmdlclwiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLXJlbW92ZS1zaWduXCIgfSxcclxuICAgICAgICBXYXJuaW5nOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtd2FybmluZ1wiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLWluZm8tc2lnblwiIH0sXHJcbiAgICAgICAgVW5rbm93bjogeyBhbGVydFN0eWxlOiBcImFsZXJ0LWluZm9cIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1xdWVzdGlvbi1zaWduXCIgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY29kZTogU3RhdHVzQ29kZTtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29kZTogU3RhdHVzQ29kZSwgbWVzc2FnZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGNvZGU6IFN0YXR1c0NvZGUsIG1lc3NhZ2U6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhbGVydFN0eWxlKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTdGF0dXMuU3RhdHVzVGFibGVbdGhpcy5jb2RlXS5hbGVydFN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZ2x5cGhJY29uKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTdGF0dXMuU3RhdHVzVGFibGVbdGhpcy5jb2RlXS5nbHlwaEljb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0YXR1c0NvZGUgPSBcIlVua25vd25cIiB8IFwiRXJyb3JcIiB8IFwiU3VjY2Vzc1wiIHwgXCJXYXJuaW5nXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1c1RhYmxlXHJcbntcclxuICAgIFtrZXk6IHN0cmluZ106IFN0YXR1c0luZm87XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0dXNJbmZvXHJcbntcclxuICAgIGFsZXJ0U3R5bGU6IHN0cmluZztcclxuICAgIGdseXBoSWNvbjogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdCB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPnt7bmFtZX19IDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiBbbmdDbGFzc109XFxcInN0YXR1cy5hbGVydFN0eWxlXFxcIj5cXHJcXG4gICAgICAgIHt7c3RhdHVzLm1lc3NhZ2V9fTxicj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gc3RhdHVzLWdseXBoXFxcIiBbbmdDbGFzc109XFxcInN0YXR1cy5nbHlwaEljb25cXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGF0dXMtZ2x5cGgge1xcclxcbiAgICBmb250LXNpemU6IDZlbTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXMsIFN0YXR1c0NvZGUgfSBmcm9tIFwiLi4vc3RhdHVzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWVzc2FnZS1iYXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbWVzc2FnZS1iYXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJhckNvbXBvbmVudFxyXG57XHJcbiAgICBwcml2YXRlIG1lc3NhZ2VzOiBTdGF0dXNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlKHN0YXR1czogU3RhdHVzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubWVzc2FnZXMuaW5kZXhPZihzdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHN0YXR1c0NvZGU6IFN0YXR1c0NvZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3IFN0YXR1cyhzdGF0dXNDb2RlLCBtZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0Zvcj1cXFwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCIgW25nQ2xhc3NdPVxcXCJtZXNzYWdlLmFsZXJ0U3R5bGVcXFwiPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcImNsb3NlXFxcIiAoY2xpY2spPVxcXCJyZW1vdmUobWVzc2FnZSlcXFwiIGFyaWEtbGFiZWw9XFxcImNsb3NlXFxcIj4mdGltZXM7PC9hPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvblxcXCIgW25nQ2xhc3NdPVxcXCJtZXNzYWdlLmdseXBoSWNvblxcXCI+PC9zcGFuPiB7e21lc3NhZ2UubWVzc2FnZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsYWJlbGxlZC1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbGxlZElucHV0Q29tcG9uZW50XHJcbntcclxuICAgIEBJbnB1dCgpIHByaXZhdGUgbGFiZWw6IHN0cmluZztcclxuICAgIEBDb250ZW50Q2hpbGQoXCJtb2RlbFwiKSBwdWJsaWMgbW9kZWw6IEVsZW1lbnRSZWY7XHJcbiAgICBAQ29udGVudENoaWxkKFwiaW5wdXRcIikgcHVibGljIGlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzogbW9kZWwuZXJyb3JzICYmIG1vZGVsLnRvdWNoZWR9XFxcIj5cXHJcXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS0yXFxcIiBbYXR0ci5mb3JdPVxcXCJpbnB1dC5uYW1lXFxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ucmVxdWlyZWRcXFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5taW5cXFwiPlRoaXMgZmllbGQgaGFzIGEgbWluaW11bSB2YWx1ZSBvZiB7e21vZGVsLmVycm9ycz8ubWluLm1pblZhbHVlfX08L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5tYXhcXFwiPlRoaXMgZmllbGQgaGFzIGEgbWF4aW11bSB2YWx1ZSBvZiB7e21vZGVsLmVycm9ycz8ubWF4Lm1heFZhbHVlfX08L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZGlydHkgJiYgbW9kZWwuZXJyb3JzPy51bmlxdWVcXFwiPkVudHJpZXMgaW4gdGhpcyBmaWVsZCBtdXN0IGJlIHVuaXF1ZTwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0YWJsZS1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90YWJsZS1pbnB1dC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUlucHV0Q29tcG9uZW50XHJcbntcclxuICAgIEBJbnB1dCgpIHByaXZhdGUgbGFiZWw6IHN0cmluZztcclxuICAgIEBDb250ZW50Q2hpbGQoXCJtb2RlbFwiKSBwdWJsaWMgbW9kZWw6IEVsZW1lbnRSZWY7XHJcbiAgICBAQ29udGVudENoaWxkKFwiaW5wdXRcIikgcHVibGljIGlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IFtuZ0NsYXNzXT1cXFwieydoYXMtZXJyb3InOiBtb2RlbC5lcnJvcnMgJiYgbW9kZWwudG91Y2hlZCB9XFxcIj5cXHJcXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ucmVxdWlyZWRcXFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/Lm1pblxcXCI+VGhpcyBmaWVsZCBoYXMgYSBtaW5pbXVtIHZhbHVlIG9mIHt7bW9kZWwuZXJyb3JzPy5taW4ubWluVmFsdWV9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ubWF4XFxcIj5UaGlzIGZpZWxkIGhhcyBhIG1heGltdW0gdmFsdWUgb2Yge3ttb2RlbC5lcnJvcnM/Lm1heC5tYXhWYWx1ZX19PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy51bmlxdWVcXFwiPkVudHJpZXMgaW4gdGhpcyBmaWVsZCBtdXN0IGJlIHVuaXF1ZTwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0LWJveCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9pbnB1dC1ib3guY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoXCIuL2lucHV0LWJveC5jb21wb25lbnQuY3NzXCIpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRCb3hDb21wb25lbnRcclxue1xyXG4gICAgaGVhZGVyOiBzdHJpbmc7XHJcbiAgICBib2R5OiBzdHJpbmc7XHJcbiAgICBhY2NlcHRWZXJiOiBzdHJpbmc7XHJcbiAgICBjYW5jZWxWZXJiOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHZpc2libGUgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdmlzaWJsZUFuaW1hdGUgPSBmYWxzZTtcclxuXHJcbiAgICByZXNvbHZlOiAodmFsdWU/OiBzdHJpbmcgfCBQcm9taXNlTGlrZTxzdHJpbmc+KSA9PiB2b2lkO1xyXG4gICAgcmVqZWN0OiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIHByaXZhdGUgcmVzcG9uc2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdyhoZWFkZXI6IHN0cmluZywgYm9keTogc3RyaW5nLCBhY2NlcHRWZXJiOiBzdHJpbmcsIGNhbmNlbFZlcmI6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRWZXJiID0gYWNjZXB0VmVyYjtcclxuICAgICAgICB0aGlzLmNhbmNlbFZlcmIgPSBjYW5jZWxWZXJiO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy52aXNpYmxlQW5pbWF0ZSA9IHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGlkZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy52aXNpYmxlID0gZmFsc2UsIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjY2VwdENsaWNrKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbENsaWNrKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlamVjdCgpO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIFtuZ0NsYXNzXT1cXFwieydpbic6IHZpc2libGVBbmltYXRlfVxcXCIgW25nU3R5bGVdPVxcXCJ7J2Rpc3BsYXknOiB2aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJywgJ29wYWNpdHknOiB2aXNpYmxlQW5pbWF0ZSA/IDEgOiAwfVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxyXFxuICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgKGNsaWNrKT1cXFwiY2FuY2VsQ2xpY2soKVxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+e3toZWFkZXJ9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbGxlZC1pbnB1dCBbbGFiZWxdPVxcXCJib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInJlc3BvbnNlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZXF1aXJlZCBbbmFtZV09XFxcImlucHV0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiYWNjZXB0Q2xpY2soKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+e3thY2NlcHRWZXJifX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImNhbmNlbENsaWNrKClcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPnt7Y2FuY2VsVmVyYn19PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2lucHV0LWJveC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzUGFuZWxDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVmVudWVTZXJ2aWNlIH0gZnJvbSBcIi4uL3ZlbnVlcy92ZW51ZS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNDb2RlIH0gZnJvbSBcIi4uL3N0YXR1cy9zdGF0dXNcIjtcclxuXHJcbmltcG9ydCB7IFVSTCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXJsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGFzaGJvYXJkJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbVmVudWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwidmVudWVcIikgdmVudWU6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcInNhY25UcmFuc21pdHRlclwiKSBzYWNuVHJhbnNtaXR0ZXI6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcIm9zY0xpc3RlbmVyXCIpIG9zY0xpc3RlbmVyOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJmaXh0dXJlc1wiKSBmaXh0dXJlczogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSB3ZWJTb2NrZXQ6IFdlYlNvY2tldDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzb2NrZXRVUkwgPSBVUkwuZ2V0U29ja2V0VVJMKFwiSW5kZXhcIik7XHJcbiAgICBwcml2YXRlIHZlbnVlTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmVudWVTZXJ2aWNlOiBWZW51ZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdmVudWVTZXJ2aWNlLmdldE5hbWVzKClcclxuICAgICAgICAgICAgLnRoZW4obmFtZXMgPT4gdGhpcy52ZW51ZU5hbWVzID0gbmFtZXMpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uOiBhbnkpID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB0aGlzLndlYlNvY2tldCA9IG5ldyBXZWJTb2NrZXQoRGFzaGJvYXJkQ29tcG9uZW50LnNvY2tldFVSTCk7XHJcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2OiBNZXNzYWdlRXZlbnQpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gSlNPTi5wYXJzZShldi5kYXRhKSBhcyBTdGF0dXNEYXRhO1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzUGFuZWw6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cy5jb250cm9sbGVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiVmVudWVzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLnZlbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlNBQ05UcmFuc21pdHRlcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMuc2FjblRyYW5zbWl0dGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk9TQ0xpc3RlbmVyc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy5vc2NMaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkZpeHR1cmVzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLmZpeHR1cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdHVzUGFuZWwuc3RhdHVzLnVwZGF0ZShzdGF0dXMuY29kZSwgc3RhdHVzLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlVmVudWUodmVudWVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52ZW51ZVNlcnZpY2VcclxuICAgICAgICAgICAgLmFjdGl2YXRlKHZlbnVlTmFtZSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgdmVudWVOYW1lICsgXCIgc3VjY2Vzc2Z1bGx5IGxvYWRlZFwiKSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXR1c0RhdGFcclxue1xyXG4gICAgY29kZTogU3RhdHVzQ29kZTtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIGNvbnRyb2xsZXI6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBWZW51ZSB9IGZyb20gXCIuL3ZlbnVlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWZW51ZVNlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSB2ZW51ZVVybCA9IFwiL2FwaS9WZW51ZVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldChpZDogc3RyaW5nKTogUHJvbWlzZTxWZW51ZT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlVXJsICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBWZW51ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5hbWVzKCk6IFByb21pc2U8c3RyaW5nW10+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBzdHJpbmdbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGl2YXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybCArIFwiL2FjdGl2YXRlL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXQoaWQ6IHN0cmluZywgdmVudWU6IFZlbnVlKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMudmVudWVVcmwgKyBcIi9cIiArIGlkLCB2ZW51ZSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMudmVudWVVcmwgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBVUkxcclxue1xyXG5cclxuICAgIHN0YXRpYyBnZXRTb2NrZXRVUkwoY29udHJvbGxlcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFjdGlvblVSTCA9IFVSTC5nZXRBY3Rpb25VUkwoY29udHJvbGxlciwgXCJTb2NrZXRcIik7XHJcbiAgICAgICAgbGV0IHNvY2tldFVSTCA9IGFjdGlvblVSTC5yZXBsYWNlKFwiaHR0cFwiLCBcIndzXCIpO1xyXG4gICAgICAgIHJldHVybiBzb2NrZXRVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFjdGlvblVSTCguLi5wYXJ0czogc3RyaW5nW10pOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxVUkw6IHN0cmluZyA9IGRvY3VtZW50LlVSTDtcclxuICAgICAgICBsZXQgdXJsUGFydHM6IHN0cmluZ1tdID0gZG9jdW1lbnQuVVJMLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBsZXQgcHJvdG9jb2w6IHN0cmluZyA9IHVybFBhcnRzWzBdO1xyXG4gICAgICAgIGxldCBob3N0OiBzdHJpbmcgPSB1cmxQYXJ0c1syXTtcclxuXHJcbiAgICAgICAgbGV0IHJvb3Q6IHN0cmluZyA9IHByb3RvY29sICsgXCIvL1wiICsgaG9zdDtcclxuXHJcbiAgICAgICAgbGV0IHBhcnRzSm9pbmVkID0gcGFydHMuam9pbihcIi9cIik7XHJcblxyXG4gICAgICAgIHJldHVybiByb290ICsgXCIvXCIgKyBwYXJ0c0pvaW5lZDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvc2hhcmVkL3VybC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI3ZlbnVlIG5hbWU9XFxcIlZlbnVlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCIgKm5nSWY9XFxcInZlbnVlTmFtZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCI+TG9hZCBWZW51ZVxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB2ZW51ZU5hbWUgb2YgdmVudWVOYW1lc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwiYWN0aXZhdGVWZW51ZSh2ZW51ZU5hbWUpXFxcIj57e3ZlbnVlTmFtZX19PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjc2FjblRyYW5zbWl0dGVyIG5hbWU9XFxcInNBQ04gVHJhbnNtaXR0ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9zYWNuVHJhbnNtaXR0ZXJMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICNvc2NMaXN0ZW5lciBuYW1lPVxcXCJPU0MgTGlzdGVuZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHJvdXRlckxpbms9XFxcIi9vc2NMaXN0ZW5lckxpdmVcXFwiPkxpdmU8L2E+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI2ZpeHR1cmVzIG5hbWU9XFxcIkZpeHR1cmVzXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvZml4dHVyZXNMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXR0aW5ncy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzLCBVbmljYXN0VGFyZ2V0IH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcblxyXG52YXIgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1NldHRpbmdzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3M7XHJcbiAgICBzYXZpbmc6IGJvb2xlYW47XHJcbiAgICB0ZXN0RWxlbWVudDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3NTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50ZXN0RWxlbWVudCA9IFwic3R1ZmZcIjtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTZXJ2aWNlLmdldCgpLnRoZW4oZGF0YSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dGluZ3NTZXJ2aWNlLnNhdmUodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIFwiU2F2ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAocmVhc29uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUYXJnZXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3QucHVzaChuZXcgVW5pY2FzdFRhcmdldChcIlwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVRhcmdldChpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVUYXJnZXRzKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgYmFkVGFyZ2V0cyA9IHRoaXMuc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3QuZmlsdGVyKCh2YWx1ZTogVW5pY2FzdFRhcmdldCkgPT4gdmFsdWUudGFyZ2V0ID09IFwiXCIgfHwgdmFsdWUudGFyZ2V0ID09IHVuZGVmaW5lZCB8fCB2YWx1ZS50YXJnZXQgPT0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIGJhZFRhcmdldHMubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBTZXR0aW5ncywgU2V0dGluZ3NEYXRhIH0gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHNldHRpbmdzVXJsID0gXCIvYXBpL1NldHRpbmdzXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8U2V0dGluZ3M+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXR0aW5nc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBTZXR0aW5nc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzLmRlc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoZGF0YTogU2V0dGluZ3MpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2V0dGluZ3NVcmwsIGRhdGEuc2VyaWFsaXplKCkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4gXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcik7IC8vIGZvciBkZW1vIHB1cnBvc2VzIG9ubHlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsImV4cG9ydCBjbGFzcyBTZXR0aW5nc1xyXG57XHJcbiAgICB3ZWJQb3J0OiBudW1iZXI7XHJcbiAgICBvc2NQb3J0OiBudW1iZXI7XHJcbiAgICBzYWNuVHJhbnNtaXR0ZXI6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLndlYlBvcnQgPSA4MDtcclxuICAgICAgICB0aGlzLm9zY1BvcnQgPSA5MDAwO1xyXG4gICAgICAgIHRoaXMuc2FjblRyYW5zbWl0dGVyID0gbmV3IFNBQ05UcmFuc21pdHRlclNldHRpbmdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZShkYXRhOiBTZXR0aW5nc0RhdGEpOiBTZXR0aW5nc1xyXG4gICAge1xyXG4gICAgICAgIGxldCBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpO1xyXG4gICAgICAgIHNldHRpbmdzLndlYlBvcnQgPSBkYXRhLndlYlBvcnQ7XHJcbiAgICAgICAgc2V0dGluZ3Mub3NjUG9ydCA9IGRhdGEub3NjUG9ydDtcclxuICAgICAgICBzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIgPSBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncy5kZXNlcmlhbGl6ZShkYXRhLnNhY25UcmFuc21pdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogU2V0dGluZ3NEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFNldHRpbmdzRGF0YSA9IHtcclxuICAgICAgICAgICAgd2ViUG9ydDogdGhpcy53ZWJQb3J0LFxyXG4gICAgICAgICAgICBvc2NQb3J0OiB0aGlzLm9zY1BvcnQsXHJcbiAgICAgICAgICAgIHNhY25UcmFuc21pdHRlcjogdGhpcy5zYWNuVHJhbnNtaXR0ZXIuc2VyaWFsaXplKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3Ncclxue1xyXG4gICAgZGVsYXk6IG51bWJlcjtcclxuICAgIG11bHRpY2FzdDogYm9vbGVhbjtcclxuICAgIHVuaWNhc3Q6IFVuaWNhc3RUYXJnZXRbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IDA7XHJcbiAgICAgICAgdGhpcy5tdWx0aWNhc3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudW5pY2FzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemUoZGF0YTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhKTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NcclxuICAgIHtcclxuICAgICAgICBsZXQgdHJhbnNtaXR0ZXIgPSBuZXcgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3MoKTtcclxuICAgICAgICB0cmFuc21pdHRlci5kZWxheSA9IGRhdGEuZGVsYXk7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIubXVsdGljYXN0ID0gZGF0YS5tdWx0aWNhc3Q7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIudW5pY2FzdCA9IGRhdGEudW5pY2FzdC5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IG5ldyBVbmljYXN0VGFyZ2V0KHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbWl0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGRhdGE6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YSA9IHtcclxuICAgICAgICAgICAgZGVsYXk6IHRoaXMuZGVsYXksXHJcbiAgICAgICAgICAgIG11bHRpY2FzdDogdGhpcy5tdWx0aWNhc3QsXHJcbiAgICAgICAgICAgIHVuaWNhc3Q6IHRoaXMudW5pY2FzdC5tYXAoKHZhbHVlOiBVbmljYXN0VGFyZ2V0KSA9PiB2YWx1ZS50YXJnZXQpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVuaWNhc3RUYXJnZXRcclxue1xyXG4gICAgdGFyZ2V0OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0RhdGFcclxue1xyXG4gICAgd2ViUG9ydDogbnVtYmVyO1xyXG4gICAgb3NjUG9ydDogbnVtYmVyO1xyXG4gICAgc2FjblRyYW5zbWl0dGVyOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhXHJcbntcclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICBtdWx0aWNhc3Q6IGJvb2xlYW47XHJcbiAgICB1bmljYXN0OiBzdHJpbmdbXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpxdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+U2V0dGluZ3M8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxwICpuZ0lmPVxcXCIhc2V0dGluZ3NcXFwiPkxvYWRpbmcuLi48L3A+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGZvcm0gKm5nSWY9XFxcInNldHRpbmdzXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAjc2V0dGluZ3NGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiSFRUUCBQb3J0OlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcIndlYlBvcnRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI2NTUzNVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLndlYlBvcnRcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCJcXHJcXG4gICAgICAgICAgICAvPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiT1NDIFBvcnQ6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgI2lucHV0IHJlcXVpcmVkIHR5cGU9XFxcIm51bWJlclxcXCIgbmFtZT1cXFwib3NjUG9ydFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjY1NTM1XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Mub3NjUG9ydFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiAvPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwic0FDTiBUcmFuc21pdHRlciBEZWxheSAobXMpOlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcInNhY25UcmFuc21pdHRlckRlbGF5XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwMDBcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIuZGVsYXlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgLz5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcInNBQ04gVHJhbnNtaXR0ZXIgTXVsdGljYXN0OlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0ICNpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwic2Fjbk11bHRpY2FzdFxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLnNhY25UcmFuc21pdHRlci5tdWx0aWNhc3RcXFwiICNzYWNuTXVsdGljYXN0PVxcXCJuZ01vZGVsXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiID5NdWx0aWNhc3Q8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPnNBQ04gVW5pY2FzdCBUYXJnZXRzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWRkcmVzczwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB0YXJnZXQgb2Ygc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3Q7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgY29sLXNtLThcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIudW5pY2FzdFtpXS50YXJnZXRcXFwiIFtuYW1lXT1cXFwiJ3VuaWNhc3RbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlVGFyZ2V0KGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkVGFyZ2V0KClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJzYXZlKClcXFwiIFtkaXNhYmxlZF09XFxcIiFzZXR0aW5nc0Zvcm0udmFsaWRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2ZpZWxkc2V0PlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBHcm91cFNlcnZpY2UgfSBmcm9tIFwiLi9ncm91cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4vZ3JvdXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncm91cHMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ3JvdXBzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtHcm91cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcm91cHNDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuXHJcbiAgICBzYXZpbmc6IGJvb2xlYW47XHJcbiAgICBncm91cHM6IEdyb3VwW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncm91cHNTZXJ2aWNlOiBHcm91cFNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdyb3Vwc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogR3JvdXBbXSkgPT4gdGhpcy5ncm91cHMgPSB2YWx1ZSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMucHVzaChuZXcgR3JvdXAoXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlKGdyb3VwOiBHcm91cCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZShncm91cDogR3JvdXAsIG9mZnNldDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBvbGRfaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuICAgICAgICBsZXQgbmV3X2luZGV4ID0gb2xkX2luZGV4ICsgb2Zmc2V0O1xyXG5cclxuICAgICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UobmV3X2luZGV4LCAwLCB0aGlzLmdyb3Vwcy5zcGxpY2Uob2xkX2luZGV4LCAxKVswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZSgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ3JvdXBzLmV2ZXJ5KCh2YWx1ZTogR3JvdXApID0+IHZhbHVlLm5hbWUgIT0gXCJcIiAmJiB2YWx1ZS5uYW1lICE9IHVuZGVmaW5lZCAmJiB2YWx1ZS5uYW1lICE9IG51bGwpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgZ3JvdXBOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwcy5tYXAoKHZhbHVlOiBHcm91cCkgPT4gdmFsdWUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzYXZlKCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmdyb3Vwc1NlcnZpY2UucHV0KHRoaXMuZ3JvdXBzKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgXCJTYXZlZCBzdWNjZXNzZnVsbHlcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKHJlYXNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi9ncm91cFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JvdXBTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgZ3JvdXBzVXJsID0gXCIvYXBpL0dyb3VwXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KCk6IFByb21pc2U8R3JvdXBbXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdyb3Vwc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBzdHJpbmdbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IG5ldyBHcm91cCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KGdyb3VwczogR3JvdXBbXSk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmdyb3Vwc1VybCwgZ3JvdXBzLm1hcCgodmFsdWU6IEdyb3VwKSA9PiB2YWx1ZS5uYW1lKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnNlcnZpY2UudHMiLCJleHBvcnQgY2xhc3MgR3JvdXBcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPkdyb3VwczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGZvcm0gKm5nSWY9XFxcImdyb3Vwc1xcXCIgI2dyb3Vwc0Zvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgIDxmaWVsZHNldCBbZGlzYWJsZWRdPVxcXCJzYXZpbmdcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aD5PcmRlcjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGdyb3VwIG9mIGdyb3VwczsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAoY2xpY2spPVxcXCJtb3ZlKGdyb3VwLCAtMSlcXFwiIFtkaXNhYmxlZF09XFxcImkgPT0gMFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXBcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIChjbGljayk9XFxcIm1vdmUoZ3JvdXAsIDEpXFxcIiBbZGlzYWJsZWRdPVxcXCJpID09IGdyb3Vwcy5sZW5ndGggLSAxXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1kb3duXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIFt1bmlxdWVdPVxcXCJncm91cE5hbWVzXFxcIiAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZ3JvdXAubmFtZVxcXCIgW25hbWVdPVxcXCInZ3JvdXBOYW1lWycgKyBpICsgJ10nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlKGdyb3VwKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPiBBZGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBbZGlzYWJsZWRdPVxcXCIhZ3JvdXBzRm9ybS52YWxpZFxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSBcImFuZ3VsYXIyLW1vZGFsXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImFuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi92ZW51ZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmVudWVzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ZlbnVlcy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbVmVudWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVudWVzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICB2ZW51ZXM6IFZlbnVlU2tlbGV0b25bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZlbnVlU2VydmljZTogVmVudWVTZXJ2aWNlLCBvdmVybGF5OiBPdmVybGF5LCB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWwpXHJcbiAgICB7XHJcbiAgICAgICAgb3ZlcmxheS5kZWZhdWx0Vmlld0NvbnRhaW5lciA9IHZjUmVmO1xyXG4gICAgICAgIHRoaXMudmVudWVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXROYW1lcygpXHJcbiAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogc3RyaW5nW10pID0+IHRoaXMudmVudWVzID0gdmFsdWUubWFwKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBza2VsZXRvbiA9IG5ldyBWZW51ZVNrZWxldG9uKCk7XHJcbiAgICAgICAgICAgICAgICBza2VsZXRvbi5uYW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tlbGV0b247XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVkaXRVcmwoZW50cnk6IFZlbnVlU2tlbGV0b24pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFwidmVudWVzL1wiICsgZW50cnkubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGRlbGV0ZUNvbmZpcm0oaW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICBsZXQgdmVudWUgPSB0aGlzLnZlbnVlc1tpbmRleF07XHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBhd2FpdCB0aGlzLm1vZGFsXHJcbiAgICAgICAgICAgIC5jb25maXJtKClcclxuICAgICAgICAgICAgLnRpdGxlKFwiQXJlIHlvdSBzdXJlP1wiKVxyXG4gICAgICAgICAgICAuYm9keShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIgKyB2ZW51ZS5uYW1lICsgXCI/XCIpXHJcbiAgICAgICAgICAgIC5pc0Jsb2NraW5nKHRydWUpXHJcbiAgICAgICAgICAgIC5vcGVuKCk7XHJcblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb21pc2UucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy52ZW51ZVNlcnZpY2UuZGVsZXRlKHZlbnVlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVudWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgdmVudWUubmFtZSArIFwiIHN1Y2Nlc3NmdWxseSByZW1vdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9lcnJvcnMgYXJlIGdlbmVyYXRlZCB3aGVuIHRoZSBtZXNzYWdlIGJveCBpcyBjYW5jZWxsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFZlbnVlU2tlbGV0b25cclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPlZlbnVlczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIiAqbmdJZj1cXFwidmVudWVzXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5WZW51ZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIHZlbnVlczsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7ZW50cnkubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbaHJlZl09XFxcImdldEVkaXRVcmwoZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZUNvbmZpcm0oaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2VFZGl0b3JDb21wb25lbnQgfSBmcm9tIFwiLi91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW5wdXRCb3hDb21wb25lbnQgfSBmcm9tIFwiLi4vaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZlbnVlLCBVbml2ZXJzZSwgRml4dHVyZSB9IGZyb20gXCIuL3ZlbnVlXCI7XHJcblxyXG5pbXBvcnQgeyBWZW51ZVNlcnZpY2UgfSBmcm9tIFwiLi92ZW51ZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmVudWUtZWRpdG9yJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ZlbnVlLWVkaXRvci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbVmVudWVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVudWVFZGl0b3JDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJ1bml2ZXJzZUVkaXRvclwiKSB1bml2ZXJzZUVkaXRvcjogVW5pdmVyc2VFZGl0b3JDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiaW5wdXRCb3hcIikgaW5wdXRCb3g6IElucHV0Qm94Q29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImZpeHR1cmVPcHRpb25zRWRpdG9yXCIpIGZpeHR1cmVPcHRpb25zRWRpdG9yOiBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIG9yaWdpbmFsTmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzYXZpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSB2ZW51ZTogVmVudWU7XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZFVuaXZlcnNlOiBVbml2ZXJzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSB2ZW51ZVNlcnZpY2U6IFZlbnVlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTmV3SXRlbSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52ZW51ZSA9IG5ldyBWZW51ZSgpO1xyXG4gICAgICAgICAgICBsZXQgdW5pdmVyc2UgPSBuZXcgVW5pdmVyc2UoKTtcclxuICAgICAgICAgICAgdW5pdmVyc2UubmFtZSA9IFwiRGVmYXVsdCBVbml2ZXJzZVwiO1xyXG4gICAgICAgICAgICB1bml2ZXJzZS51bml2ZXJzZUlEID0gMTtcclxuICAgICAgICAgICAgdGhpcy52ZW51ZS51bml2ZXJzZXMucHVzaCh1bml2ZXJzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVbml2ZXJzZSA9IHVuaXZlcnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZlbnVlU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLmdldCh0aGlzLm9yaWdpbmFsTmFtZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogVmVudWUpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZW51ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVbml2ZXJzZSA9IHRoaXMudmVudWUudW5pdmVyc2VzLmxlbmd0aCA+IDAgPyB0aGlzLnZlbnVlLnVuaXZlcnNlc1swXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05ld0l0ZW0oKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsTmFtZSA9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkVW5pdmVyc2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB1bml2ZXJzZSA9IG5ldyBVbml2ZXJzZSgpO1xyXG4gICAgICAgIHVuaXZlcnNlLm5hbWUgPSBcIk5ldyBVbml2ZXJzZVwiO1xyXG4gICAgICAgIGxldCBtYXhOdW1iZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudmVudWUudW5pdmVyc2VzLmZvckVhY2godmFsdWUgPT4geyBpZiAodmFsdWUudW5pdmVyc2VJRCA+IG1heE51bWJlcikgeyBtYXhOdW1iZXIgPSB2YWx1ZS51bml2ZXJzZUlEIH0gfSk7XHJcbiAgICAgICAgdW5pdmVyc2UudW5pdmVyc2VJRCA9IG1heE51bWJlciArIDE7XHJcbiAgICAgICAgdGhpcy52ZW51ZS51bml2ZXJzZXMucHVzaCh1bml2ZXJzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVVbml2ZXJzZShpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB1bml2ZXJzZSA9IHRoaXMudmVudWUudW5pdmVyc2VzW2luZGV4XTtcclxuICAgICAgICB0aGlzLnZlbnVlLnVuaXZlcnNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVW5pdmVyc2UgPT0gdW5pdmVyc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVW5pdmVyc2UgPSB0aGlzLnZlbnVlLnVuaXZlcnNlc1tpbmRleCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhdmUoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5pc05ld0l0ZW0oKSA/IHRoaXMudmVudWUubmFtZSA6IHRoaXMub3JpZ2luYWxOYW1lO1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy52ZW51ZVNlcnZpY2UucHV0KHRoaXMub3JpZ2luYWxOYW1lLCB0aGlzLnZlbnVlKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi92ZW51ZXNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1lZGl0b3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgSW5wdXRCb3hDb21wb25lbnQgfSBmcm9tIFwiLi4vaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZyB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiXHJcbmltcG9ydCB7IFZlbnVlUHJlc2V0U2VydmljZSB9IGZyb20gXCIuL3ZlbnVlLXByZXNldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gXCIuLi9ncm91cHMvZ3JvdXAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBVbml2ZXJzZSwgRml4dHVyZSwgRml4dHVyZURlZmluaXRpb25PcHRpb25zLCBWZW51ZVByZXNldCB9IGZyb20gXCIuL3ZlbnVlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndW5pdmVyc2UtZWRpdG9yJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LmNzcycpXSxcclxuICAgIHByb3ZpZGVyczogW0ZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UsIFZlbnVlUHJlc2V0U2VydmljZSwgR3JvdXBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5pdmVyc2VFZGl0b3JDb21wb25lbnRcclxue1xyXG4gICAgQElucHV0KFwidW5pdmVyc2VcIikgdW5pdmVyc2U6IFVuaXZlcnNlO1xyXG4gICAgQElucHV0KFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgQElucHV0KFwiaW5wdXRCb3hcIikgaW5wdXRCb3g6IElucHV0Qm94Q29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRGaXh0dXJlOiBGaXh0dXJlO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEZpeHR1cmVzOiBGaXh0dXJlW107XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkUHJlc2V0TmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBza2VsZXRvbnM6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXTtcclxuICAgIHByaXZhdGUgdmVudWVQcmVzZXROYW1lczogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIGdyb3Vwczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlOiBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLCBwcml2YXRlIHZlbnVlUHJlc2V0U2VydmljZTogVmVudWVQcmVzZXRTZXJ2aWNlLCBwcml2YXRlIGdyb3VwU2VydmljZTogR3JvdXBTZXJ2aWNlLFxyXG4gICAgICAgIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsKVxyXG4gICAge1xyXG4gICAgICAgIG92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIgPSB2Y1JlZjtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52ZW51ZVByZXNldFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldE5hbWVzKClcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gdGhpcy52ZW51ZVByZXNldE5hbWVzID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U2tlbGV0b25zKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB0aGlzLnNrZWxldG9ucyA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVhc29uID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB0aGlzLmdyb3VwU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gdGhpcy5ncm91cHMgPSB2YWx1ZS5tYXAoZ3JwID0+IGdycC5uYW1lKSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyByZW1vdmVGaXh0dXJlKGluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGZpeHR1cmUgPSB0aGlzLnVuaXZlcnNlLmZpeHR1cmVzW2luZGV4XTtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IGF3YWl0IHRoaXMubW9kYWwuY29uZmlybSgpXHJcbiAgICAgICAgICAgIC50aXRsZShcIkFyZSB5b3Ugc3VyZT9cIilcclxuICAgICAgICAgICAgLmJvZHkoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiICsgZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlciArIFwiIFwiICsgZml4dHVyZS50eXBlLm1vZGVsICsgXCI/XCIpXHJcbiAgICAgICAgICAgIC5pc0Jsb2NraW5nKHRydWUpXHJcbiAgICAgICAgICAgIC5vcGVuKCk7XHJcblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb21pc2UucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXZlcnNlLmZpeHR1cmVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9lcnJvcnMgYXJlIGdlbmVyYXRlZCB3aGVuIHRoZSBtZXNzYWdlIGJveCBpcyBjYW5jZWxsZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRGaXh0dXJlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgZml4dHVyZSA9IG5ldyBGaXh0dXJlKCk7XHJcbiAgICAgICAgZml4dHVyZS5ncm91cCA9IHRoaXMuZ3JvdXBzWzBdO1xyXG4gICAgICAgIHRoaXMudW5pdmVyc2UuZml4dHVyZXMucHVzaChmaXh0dXJlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZSA9IGZpeHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1NlbGVjdGVkKGZpeHR1cmU6IEZpeHR1cmUpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRGaXh0dXJlcy5pbmRleE9mKGZpeHR1cmUpICE9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0Rml4dHVyZShmaXh0dXJlOiBGaXh0dXJlLCBzZWxlY3RlZDogYm9vbGVhbilcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnNlbGVjdGVkRml4dHVyZXMuaW5kZXhPZihmaXh0dXJlKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgaW5kZXggPT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZXMucHVzaChmaXh0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXNlbGVjdGVkICYmIGluZGV4ICE9IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpeHR1cmVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2F2ZVByZXNldCgpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByZXNldCA9IG5ldyBWZW51ZVByZXNldCgpO1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJlc2V0Lm5hbWUgPSBhd2FpdCB0aGlzLmlucHV0Qm94LnNob3coXCJTZWxlY3QgYSBuYW1lXCIsIFwiTmFtZTpcIiwgXCJTYXZlXCIsIFwiQ2FuY2VsXCIpO1xyXG4gICAgICAgICAgICBwcmVzZXQuZml4dHVyZXMgPSB0aGlzLnNlbGVjdGVkRml4dHVyZXM7XHJcbiAgICAgICAgICAgIHRoaXMudmVudWVQcmVzZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAucHV0KHByZXNldC5uYW1lLCBwcmVzZXQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaXh0dXJlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIHByZXNldC5uYW1lICsgXCIgc2F2ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVudWVQcmVzZXROYW1lcy5wdXNoKHByZXNldC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVhc29uID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHsgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFByZXNldChuYW1lOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52ZW51ZVByZXNldFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldChuYW1lKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IFZlbnVlUHJlc2V0KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaXh0dXJlIG9mIHZhbHVlLmZpeHR1cmVzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdmVyc2UuZml4dHVyZXMucHVzaChmaXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyByZW1vdmVQcmVzZXQobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gYXdhaXQgdGhpcy5tb2RhbC5jb25maXJtKClcclxuICAgICAgICAgICAgLnRpdGxlKFwiQXJlIHlvdSBzdXJlP1wiKVxyXG4gICAgICAgICAgICAuYm9keShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIgKyBuYW1lICsgXCI/XCIpXHJcbiAgICAgICAgICAgIC5pc0Jsb2NraW5nKHRydWUpXHJcbiAgICAgICAgICAgIC5vcGVuKCk7XHJcblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb21pc2UucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy52ZW51ZVByZXNldFNlcnZpY2UuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMudmVudWVQcmVzZXROYW1lcy5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVudWVQcmVzZXROYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIG5hbWUgKyBcIiBzdWNjZXNzZnVsbHkgcmVtb3ZlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZXJyb3JzIGFyZSBnZW5lcmF0ZWQgd2hlbiB0aGUgbWVzc2FnZSBib3ggaXMgY2FuY2VsbGVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uLCBGaXh0dXJlRGVmaW5pdGlvbiwgRml4dHVyZURlZmluaXRpb25EYXRhIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgZml4dHVyZURlZmluaXRpb25zVXJsID0gXCIvYXBpL0ZpeHR1cmVEZWZpbml0aW9uXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2tlbGV0b25zKCk6IFByb21pc2U8Rml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldChtYW51ZmFjdHVyZXI6IHN0cmluZywgbW9kZWw6IHN0cmluZyk6IFByb21pc2U8Rml4dHVyZURlZmluaXRpb24+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5maXh0dXJlRGVmaW5pdGlvbnNVcmwgKyBcIi9cIiArIG1hbnVmYWN0dXJlciArIFwiL1wiICsgbW9kZWwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgRml4dHVyZURlZmluaXRpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGaXh0dXJlRGVmaW5pdGlvbi5sb2FkKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KG1hbnVmYWN0dXJlcjogc3RyaW5nLCBtb2RlbDogc3RyaW5nLCBkZWZpbml0aW9uOiBGaXh0dXJlRGVmaW5pdGlvbik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1VybCArIFwiL1wiICsgbWFudWZhY3R1cmVyICsgXCIvXCIgKyBtb2RlbCwgZGVmaW5pdGlvbilcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShmaXh0dXJlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsICsgXCIvXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiL1wiICsgZml4dHVyZS5tb2RlbClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2UudHMiLCJleHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb24gaW1wbGVtZW50cyBGaXh0dXJlRGVmaW5pdGlvbkRhdGFcclxue1xyXG4gICAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBcIkxFRFwiIHwgXCJUdW5nc3RlblwiIHwgXCJFZmZlY3RcIjtcclxuXHJcbiAgICBjaGFubmVsczogRE1YQ2hhbm5lbFtdO1xyXG4gICAgbW92ZW1lbnRzOiBBeGlzW107XHJcbiAgICBjb2xvcldoZWVsOiBDb2xvcldoZWVsRW50cnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1hbnVmYWN0dXJlciA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50eXBlID0gXCJMRURcIjtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0gW107XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbG9yV2hlZWwgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9hZChkYXRhOiBGaXh0dXJlRGVmaW5pdGlvbkRhdGEpOiBGaXh0dXJlRGVmaW5pdGlvblxyXG4gICAge1xyXG4gICAgICAgIGxldCBkZWZpbml0aW9uID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZpbml0aW9uLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaXh0dXJlRGVmaW5pdGlvbkRhdGFcclxue1xyXG4gICAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBcIkxFRFwiIHwgXCJUdW5nc3RlblwiIHwgXCJFZmZlY3RcIjtcclxuXHJcbiAgICBjaGFubmVsczogRE1YQ2hhbm5lbFtdO1xyXG4gICAgbW92ZW1lbnRzOiBBeGlzW107XHJcbiAgICBjb2xvcldoZWVsOiBDb2xvcldoZWVsRW50cnlbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25cclxue1xyXG4gICAgcHVibGljIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgcHVibGljIG1vZGVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBETVhDaGFubmVsXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRteDogbnVtYmVyO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nLCBkbXg/OiBudW1iZXIsIG1pbj86IG51bWJlciwgbWF4PzogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgPyBuYW1lIDogXCJcIjtcclxuICAgICAgICB0aGlzLmRteCA9IGRteCA/IGRteCA6IDE7XHJcbiAgICAgICAgdGhpcy5taW4gPSBtaW4gPyBtaW4gOiAwO1xyXG4gICAgICAgIHRoaXMubWF4ID0gbWF4ID8gbWF4IDogMjU1O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXhpc1xyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtaW46IG51bWJlcjtcclxuICAgIG1heDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JXaGVlbEVudHJ5XHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRteFN0YXJ0OiBudW1iZXI7XHJcbiAgICBkbXhFbmQ6IG51bWJlcjtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgZG14U3RhcnQ/OiBudW1iZXIsIGRteEVuZD86IG51bWJlciwgY29sb3I/OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSA/IG5hbWUgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuZG14U3RhcnQgPSBkbXhTdGFydCA/IGRteFN0YXJ0IDogMDtcclxuICAgICAgICB0aGlzLmRteEVuZCA9IGRteEVuZCA/IGRteEVuZCA6IDI1NTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3IgPyBjb2xvciA6IFwiMDAwMDAwXCI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24udHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgVmVudWVQcmVzZXQgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmVudWVQcmVzZXRTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgdmVudWVQcmVzZXRVcmwgPSBcIi9hcGkvVmVudWVQcmVzZXRcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8VmVudWVQcmVzZXQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVByZXNldFVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgVmVudWVQcmVzZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lcygpOiBQcm9taXNlPHN0cmluZ1tdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVQcmVzZXRVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVQcmVzZXRVcmwgKyBcIi9hY3RpdmF0ZS9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHV0KGlkOiBzdHJpbmcsIHZlbnVlUHJlc2V0OiBWZW51ZVByZXNldCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnZlbnVlUHJlc2V0VXJsICsgXCIvXCIgKyBpZCwgdmVudWVQcmVzZXQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLnZlbnVlUHJlc2V0VXJsICsgXCIvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHsgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLXByZXNldC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlbnVlXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHVuaXZlcnNlczogVW5pdmVyc2VbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVuaXZlcnNlcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVW5pdmVyc2Vcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdW5pdmVyc2VJRDogbnVtYmVyO1xyXG4gICAgZml4dHVyZXM6IEZpeHR1cmVbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVuaXZlcnNlSUQgPSAxO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZXMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVcclxue1xyXG4gICAgY2hhbm5lbDogbnVtYmVyO1xyXG4gICAgZ3JvdXA6IHN0cmluZztcclxuICAgIHR5cGU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b247XHJcbiAgICBvcHRpb25zOiBGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IDE7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50eXBlID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24oKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgRml4dHVyZURlZmluaXRpb25PcHRpb25zKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnNcclxue1xyXG4gICAgbWF4QnJpZ2h0bmVzczogbnVtYmVyO1xyXG4gICAgYXhpc0ludmVyc2lvbnM6IHN0cmluZ1tdO1xyXG4gICAgYXhpc1Jlc3RyaWN0aW9uczogQXhpc1Jlc3RyaWN0aW9uT3B0aW9uc1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1heEJyaWdodG5lc3MgPSAxO1xyXG4gICAgICAgIHRoaXMuYXhpc0ludmVyc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmF4aXNSZXN0cmljdGlvbnMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF4aXNSZXN0cmljdGlvbk9wdGlvbnNcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLm1pbiA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmVudWVQcmVzZXRcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZml4dHVyZXM6IEZpeHR1cmVbXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiByb2xlPVxcXCJ0YWJwYW5lbFxcXCIgKm5nSWY9XFxcInVuaXZlcnNlICYmIHNrZWxldG9uc1xcXCI+XFxyXFxuICAgIDwhLS0gTmF2IHRhYnMgLS0+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIiByb2xlPVxcXCJ0YWJsaXN0XFxcIj5cXHJcXG4gICAgICAgIDxsaSBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogc2VsZWN0ZWRGaXh0dXJlID09IG51bGx9XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzZWxlY3RlZEZpeHR1cmUgPSBudWxsXFxcIj5GaXh0dXJlczwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgZml4dHVyZSBvZiB1bml2ZXJzZS5maXh0dXJlczsgbGV0IGkgPSBpbmRleFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IHNlbGVjdGVkRml4dHVyZSA9PSBmaXh0dXJlfVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2VsZWN0ZWRGaXh0dXJlID0gZml4dHVyZVxcXCI+e3tmaXh0dXJlLmNoYW5uZWx9fSB7e2ZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXJ9fSB7e2ZpeHR1cmUudHlwZS5tb2RlbH19XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlRml4dHVyZShpKVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0blxcXCIgKGNsaWNrKT1cXFwiYWRkRml4dHVyZSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIiAqbmdJZj1cXFwidW5pdmVyc2UgJiYgc2tlbGV0b25zICYmIHNlbGVjdGVkRml4dHVyZSA9PSBudWxsXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNlbGVjdGVkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2hhbm5lbDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hbnVmYWN0dXJlcjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vZGVsPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+R3JvdXA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZpeHR1cmUgb2YgdW5pdmVyc2UuZml4dHVyZXM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgW25nTW9kZWxdPVxcXCJpc1NlbGVjdGVkKGZpeHR1cmUpXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcInNlbGVjdEZpeHR1cmUoZml4dHVyZSwgJGV2ZW50KVxcXCIgW25hbWVdPVxcXCInc2VsZWN0ZWRbJyArIGkgKyAnXSdcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7Zml4dHVyZS5jaGFubmVsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2ZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXJ9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7Zml4dHVyZS50eXBlLm1vZGVsfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2ZpeHR1cmUuZ3JvdXB9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXNtLTJcXFwiIGZvcj1cXFwic2VsZWN0ZWRQcmVzZXRcXFwiPlByZXNldDo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkUHJlc2V0TmFtZVxcXCIgbmFtZT1cXFwic2VsZWN0ZWRQcmVzZXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCB2ZW51ZVByZXNldE5hbWUgb2YgdmVudWVQcmVzZXROYW1lc1xcXCI+e3t2ZW51ZVByZXNldE5hbWV9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS0yXFxcIiBmb3I9XFxcInNlbGVjdGVkUHJlc2V0XFxcIj5BY3Rpb25zOjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcInNlbGVjdGVkUHJlc2V0TmFtZSA9PSBudWxsXFxcIiAoY2xpY2spPVxcXCJsb2FkUHJlc2V0KHNlbGVjdGVkUHJlc2V0TmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LW9wZW5cXFwiPjwvc3Bhbj4gTG9hZFxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIFtkaXNhYmxlZF09XFxcInNlbGVjdGVkRml4dHVyZXMubGVuZ3RoID09IDBcXFwiIChjbGljayk9XFxcInNhdmVQcmVzZXQoKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktc2F2ZVxcXCI+PC9zcGFuPiBTYXZlIEFzXFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBbZGlzYWJsZWRdPVxcXCJzZWxlY3RlZFByZXNldE5hbWUgPT0gbnVsbFxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlUHJlc2V0KHNlbGVjdGVkUHJlc2V0TmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+IERlbGV0ZVxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48Zml4dHVyZS1vcHRpb25zLWVkaXRvciAjZml4dHVyZU9wdGlvbnNFZGl0b3IgW2ZpeHR1cmVdPVxcXCJzZWxlY3RlZEZpeHR1cmVcXFwiPjwvZml4dHVyZS1vcHRpb25zLWVkaXRvcj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcm91cFNlcnZpY2UgfSBmcm9tIFwiLi4vZ3JvdXBzL2dyb3VwLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4uL2dyb3Vwcy9ncm91cFwiO1xyXG5pbXBvcnQgeyBGaXh0dXJlLCBGaXh0dXJlRGVmaW5pdGlvbk9wdGlvbnMsIEF4aXNSZXN0cmljdGlvbk9wdGlvbnMgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbiwgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3InLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZShcIi4vZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuY3NzXCIpXSxcclxuICAgIHByb3ZpZGVyczogW0ZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UsIEdyb3VwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXHJcbntcclxuICAgIEBJbnB1dChcImZpeHR1cmVcIikgZml4dHVyZTogRml4dHVyZTtcclxuICAgIHB1YmxpYyB2aXNpYmxlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBheGlzT3B0aW9uczogQXhpc09wdGlvbnNbXTtcclxuXHJcbiAgICBwcml2YXRlIGRlZmluaXRpb246IEZpeHR1cmVEZWZpbml0aW9uO1xyXG4gICAgcHJpdmF0ZSBza2VsZXRvbnM6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXTtcclxuICAgIHByaXZhdGUgZ3JvdXBzOiBHcm91cFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZml4dHVyZURlZmluaXRpb25zU2VydmljZTogRml4dHVyZURlZmluaXRpb25zU2VydmljZSwgcHJpdmF0ZSBncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdyb3VwU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gdGhpcy5ncm91cHMgPSB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRTa2VsZXRvbnMoKVxyXG4gICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB0aGlzLnNrZWxldG9ucyA9IHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKGNoYW5nZXNbXCJmaXh0dXJlXCJdICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZml4dHVyZUNoYW5nZXMgPSBjaGFuZ2VzW1wiZml4dHVyZVwiXTtcclxuICAgICAgICAgICAgaWYoZml4dHVyZUNoYW5nZXMuY3VycmVudFZhbHVlICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaXh0dXJlOiBGaXh0dXJlID0gZml4dHVyZUNoYW5nZXMuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlciA9PSBudWxsIHx8IGZpeHR1cmUudHlwZS5tb2RlbCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXIgPSB0aGlzLmdldE1hbnVmYWN0dXJlcnMoKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBmaXh0dXJlLnR5cGUubW9kZWwgPSB0aGlzLmdldE1vZGVscyhmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyKVswXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVmaW5pdGlvbihmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyLCBmaXh0dXJlLnR5cGUubW9kZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXhpc09wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdE1hbnVmYWN0dXJlcihtYW51ZmFjdHVyZXI6IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZpeHR1cmUudHlwZS5tb2RlbCA9IHRoaXMuZ2V0TW9kZWxzKG1hbnVmYWN0dXJlcilbMF07XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZWZpbml0aW9uKG1hbnVmYWN0dXJlciwgdGhpcy5maXh0dXJlLnR5cGUubW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbW92aW5nKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWFudWZhY3R1cmVycygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNrZWxldG9uc1xyXG4gICAgICAgICAgICAubWFwKCh2YWx1ZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbikgPT4gdmFsdWUubWFudWZhY3R1cmVyKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PSBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNb2RlbHMobWFudWZhY3R1cmVyOiBzdHJpbmcpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNrZWxldG9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKHZhbHVlID0+IHZhbHVlLm1hbnVmYWN0dXJlciA9PSBtYW51ZmFjdHVyZXIpXHJcbiAgICAgICAgICAgIC5tYXAodmFsdWUgPT4gdmFsdWUubW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlRGVmaW5pdGlvbihtYW51ZmFjdHVyZXI6IHN0cmluZywgbW9kZWw6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICBpZihtYW51ZmFjdHVyZXIgIT0gbnVsbCAmJiBtb2RlbCA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbW9kZWwgPSB0aGlzLmdldE1vZGVscyhtYW51ZmFjdHVyZXIpWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtYW51ZmFjdHVyZXIgIT0gbnVsbCAmJiBtb2RlbCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gYXdhaXQgdGhpcy5maXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAuZ2V0KG1hbnVmYWN0dXJlciwgbW9kZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmF4aXNPcHRpb25zID0gdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50c1xyXG4gICAgICAgICAgICAgICAgLm1hcCh2YWx1ZSA9PiBuZXcgQXhpc09wdGlvbnModmFsdWUubmFtZSwgdGhpcy5maXh0dXJlLCB0aGlzLmRlZmluaXRpb24pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5heGlzT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQXhpc09wdGlvbnNcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBmaXh0dXJlOiBGaXh0dXJlO1xyXG4gICAgZGVmaW5pdGlvbjogRml4dHVyZURlZmluaXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBmaXh0dXJlOiBGaXh0dXJlLCBkZWZpbml0aW9uOiBGaXh0dXJlRGVmaW5pdGlvbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZSA9IGZpeHR1cmU7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1pbigpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5maW5kKHZhbHVlID0+IHZhbHVlLm5hbWUgPT0gdGhpcy5uYW1lKS5taW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMuZmluZCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IHRoaXMubmFtZSkubWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmVzdHJpY3Rpb25NaW4oKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5yZXN0cmljdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3RyaWN0aW9uID0gdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc1Jlc3RyaWN0aW9ucy5maW5kKHZhbHVlID0+IHZhbHVlLm5hbWUgPT0gdGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3RyaWN0aW9uLm1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHJlc3RyaWN0aW9uTWluKHZhbHVlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5yZXN0cmljdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3RyaWN0aW9uID0gdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc1Jlc3RyaWN0aW9ucy5maW5kKHZhbHVlID0+IHZhbHVlLm5hbWUgPT0gdGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgcmVzdHJpY3Rpb24ubWluID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmVzdHJpY3Rpb25NYXgoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5yZXN0cmljdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3RyaWN0aW9uID0gdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc1Jlc3RyaWN0aW9ucy5maW5kKHZhbHVlID0+IHZhbHVlLm5hbWUgPT0gdGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3RyaWN0aW9uLm1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHJlc3RyaWN0aW9uTWF4KHZhbHVlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5yZXN0cmljdGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3RyaWN0aW9uID0gdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc1Jlc3RyaWN0aW9ucy5maW5kKHZhbHVlID0+IHZhbHVlLm5hbWUgPT0gdGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgcmVzdHJpY3Rpb24ubWF4ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaW52ZXJ0ZWQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBtYXRjaCA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNJbnZlcnNpb25zLmZpbmQodmFsdWUgPT4gdmFsdWUgPT0gdGhpcy5uYW1lKTtcclxuICAgICAgICByZXR1cm4gbWF0Y2ggIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGludmVydGVkKHZhbHVlOiBib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc0ludmVyc2lvbnMucHVzaCh0aGlzLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzSW52ZXJzaW9ucy5pbmRleE9mKHRoaXMubmFtZSk7XHJcbiAgICAgICAgICAgIGlmKGluZGV4ICE9IC0xKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzSW52ZXJzaW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmVzdHJpY3RlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1hdGNoID0gdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc1Jlc3RyaWN0aW9ucy5maW5kKHZhbHVlID0+IHZhbHVlLm5hbWUgPT0gdGhpcy5uYW1lKTtcclxuICAgICAgICByZXR1cm4gbWF0Y2ggIT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHJlc3RyaWN0ZWQodmFsdWU6IGJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgaWYodmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBBeGlzUmVzdHJpY3Rpb25PcHRpb25zKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgb3B0aW9ucy5taW4gPSB0aGlzLm1pbjtcclxuICAgICAgICAgICAgb3B0aW9ucy5tYXggPSB0aGlzLm1heDtcclxuICAgICAgICAgICAgdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc1Jlc3RyaWN0aW9ucy5wdXNoKG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcmVzdHJpY3Rpb24gPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzUmVzdHJpY3Rpb25zLmZpbmQodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzUmVzdHJpY3Rpb25zLmluZGV4T2YocmVzdHJpY3Rpb24pO1xyXG4gICAgICAgICAgICBpZihpbmRleCAhPSAtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc1Jlc3RyaWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCIgKm5nSWY9XFxcImZpeHR1cmVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiICNlZGl0b3JGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxmaWVsZHNldCBuYW1lPVxcXCJjb21tb25GaWVsZHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk1hbnVmYWN0dXJlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIG5hbWU9XFxcIm1hbnVmYWN0dXJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcImZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXJcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwic2VsZWN0TWFudWZhY3R1cmVyKCRldmVudClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgbWFudWZhY3R1cmVyIG9mIGdldE1hbnVmYWN0dXJlcnMoKVxcXCI+e3ttYW51ZmFjdHVyZXJ9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTW9kZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBuYW1lPVxcXCJtb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcImZpeHR1cmUudHlwZS5tb2RlbFxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJ1cGRhdGVEZWZpbml0aW9uKGZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXIsICRldmVudClcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1vZGVsIG9mIGdldE1vZGVscyhmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyKVxcXCI+e3ttb2RlbH19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJDaGFubmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBuYW1lPVxcXCJjaGFubmVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNTEyXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLmNoYW5uZWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiR3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBuYW1lPVxcXCJncm91cFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcImZpeHR1cmUuZ3JvdXBcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGdyb3VwIG9mIGdyb3Vwc1xcXCI+e3tncm91cC5uYW1lfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XFxyXFxuICAgICAgICAgICAgPGZpZWxkc2V0IG5hbWU9XFxcIm9wdGlvbnNcXFwiICpuZ0lmPVxcXCJkZWZpbml0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJNYXggQnJpZ2h0bmVzczpcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLm9wdGlvbnMubWF4QnJpZ2h0bmVzc1xcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVxcXCIwLjAxXFxcIiBuYW1lPVxcXCJtYXhCcmlnaHRuZXNzXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJtb3ZpbmdcXFwiIGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkF4aXMgT3B0aW9uczwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SW52ZXJ0ZWQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXN0cmljdGVkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWluIChkZWdyZWVzKTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1heCAoZGVncmVlcyk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGF4aXMgb2YgYXhpc09wdGlvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2F4aXMubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFsobmdNb2RlbCldPVxcXCJheGlzLmludmVydGVkXFxcIiBbbmFtZV09XFxcIidpbnZlcnRlZFsnICsgYXhpcy5uYW1lICsgJ10nXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52ZXJ0ZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBbKG5nTW9kZWwpXT1cXFwiYXhpcy5yZXN0cmljdGVkXFxcIiBbbmFtZV09XFxcIidyZXN0cmljdGVkWycgKyBheGlzLm5hbWUgKyAnXSdcXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXN0cmljdGVkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImF4aXMucmVzdHJpY3Rpb25NaW5cXFwiIFtuYW1lXT1cXFwiJ3Jlc3RyaWN0aW9uTWluWycgKyBheGlzLm5hbWUgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21pbl09XFxcImF4aXMubWluXFxcIiBbbWF4XT1cXFwiYXhpcy5tYXhcXFwiIFtkaXNhYmxlZF09XFxcIiFheGlzLnJlc3RyaWN0ZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiYXhpcy5yZXN0cmljdGlvbk1heFxcXCIgW25hbWVdPVxcXCIncmVzdHJpY3Rpb25NYXhbJyArIGF4aXMubmFtZSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWluXT1cXFwiYXhpcy5taW5cXFwiIFttYXhdPVxcXCJheGlzLm1heFxcXCIgW2Rpc2FibGVkXT1cXFwiIWF4aXMucmVzdHJpY3RlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPlZlbnVlIEVkaXRvcjwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGZvcm0gKm5nSWY9XFxcInZlbnVlXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAjZWRpdG9yRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgPGZpZWxkc2V0IFtkaXNhYmxlZF09XFxcInNhdmluZ1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk5hbWU6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgI2lucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJ2ZW51ZS5uYW1lXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgcm9sZT1cXFwidGFicGFuZWxcXFwiPlxcclxcbiAgICAgICAgICAgIDwhLS0gTmF2IHRhYnMgLS0+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiIHJvbGU9XFxcInRhYmxpc3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgdW5pdmVyc2Ugb2YgdmVudWUudW5pdmVyc2VzOyBsZXQgaSA9IGluZGV4XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogc2VsZWN0ZWRVbml2ZXJzZSA9PSB1bml2ZXJzZX1cXFwiIGNsYXNzPVxcXCJhY3RpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2VsZWN0ZWRVbml2ZXJzZSA9IHVuaXZlcnNlXFxcIj57e3VuaXZlcnNlLm5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJpID4gMFxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVVbml2ZXJzZShpKVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuXFxcIiAoY2xpY2spPVxcXCJhZGRVbml2ZXJzZSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiICpuZ0lmPVxcXCJzZWxlY3RlZFVuaXZlcnNlXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJOYW1lOlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInNlbGVjdGVkVW5pdmVyc2UubmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW25hbWVdPVxcXCIndW5pdmVyc2VOYW1lWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJVbml2ZXJzZSBJRDpcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFVuaXZlcnNlLnVuaXZlcnNlSURcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjY1NTM1XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cXFwiJ3VuaXZlcnNlTnVtYmVyWycgKyBpICsgJ10nXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDx1bml2ZXJzZS1lZGl0b3IgW3VuaXZlcnNlXT1cXFwic2VsZWN0ZWRVbml2ZXJzZVxcXCIgW21lc3NhZ2VCYXJdPVxcXCJtZXNzYWdlQmFyXFxcIiBbaW5wdXRCb3hdPVxcXCJpbnB1dEJveFxcXCI+PC91bml2ZXJzZS1lZGl0b3I+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdG9yRm9ybS52YWxpZFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlxcclxcbjxpbnB1dC1ib3ggI2lucHV0Qm94PjwvaW5wdXQtYm94PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLWVkaXRvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbRml4dHVyZURlZmluaXRpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgbWFudWZhY3R1cmVyRmlsdGVyRW5hYmxlZDogYm9vbGVhbjtcclxuICAgIG1hbnVmYWN0dXJlckZpbHRlcjogc3RyaW5nO1xyXG4gICAgZGF0YTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZml4dHVyZURlZmluaXRpb25zU2VydmljZTogRml4dHVyZURlZmluaXRpb25zU2VydmljZSwgb3ZlcmxheTogT3ZlcmxheSwgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsKVxyXG4gICAge1xyXG4gICAgICAgIG92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIgPSB2Y1JlZjtcclxuICAgICAgICB0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldFNrZWxldG9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdKSA9PiB0aGlzLmRhdGEgPSB2YWx1ZSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBtYW51ZmFjdHVyZXJzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxyXG4gICAgICAgICAgICAubWFwKCh2YWx1ZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbikgPT4gdmFsdWUubWFudWZhY3R1cmVyKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGFycmF5LmluZGV4T2YodmFsdWUpID09PSBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgZmlsdGVyZWREYXRhKCk6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLm1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbHRlcigodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pID0+IHZhbHVlLm1hbnVmYWN0dXJlciA9PSB0aGlzLm1hbnVmYWN0dXJlckZpbHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RWRpdFVybChmaXh0dXJlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFwiZml4dHVyZS1kZWZpbml0aW9uc1wiICsgXCIvXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiL1wiICsgZml4dHVyZS5tb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGRlbGV0ZUNvbmZpcm0oZml4dHVyZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IGF3YWl0IHRoaXMubW9kYWwuY29uZmlybSgpXHJcbiAgICAgICAgICAgIC50aXRsZShcIkFyZSB5b3Ugc3VyZT9cIilcclxuICAgICAgICAgICAgLmJvZHkoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBkZWZpbml0aW9uIGZvciBcIiArIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIgXCIgKyBmaXh0dXJlLm1vZGVsICsgXCI/XCIpXHJcbiAgICAgICAgICAgIC5pc0Jsb2NraW5nKHRydWUpXHJcbiAgICAgICAgICAgIC5vcGVuKCk7XHJcblxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb21pc2UucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UuZGVsZXRlKGZpeHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIgXCIgKyBmaXh0dXJlLm1vZGVsICsgXCIgd2FzIGRlbGV0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kYXRhLmluZGV4T2YoZml4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAocmVhc29uKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCBcIkNvdWxkIG5vdCBkZWxldGUgXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiIFwiICsgZml4dHVyZS5tb2RlbCArIFwiLiBcIiArIHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9lcnJvcnMgYXJlIGdlbmVyYXRlZCB3aGVuIHRoZSBtZXNzYWdlIGJveCBpcyBjYW5jZWxsZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZml4dHVyZS1kZWZpbml0aW9ucy9uZXdcIjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPkZpeHR1cmUgRGVmaW5pdGlvbnM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZm9ybS1pbmxpbmVcXFwiICpuZ0lmPVxcXCJkYXRhXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgWyhuZ01vZGVsKV09XFxcIm1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgRmlsdGVyIGJ5IG1hbnVmYWN0dXJlclxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxzZWxlY3QgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Rpc2FibGVkXT1cXFwiIW1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWRcXFwiIFsobmdNb2RlbCldPVxcXCJtYW51ZmFjdHVyZXJGaWx0ZXJcXFwiPlxcclxcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBtYW51ZmFjdHVyZXIgb2YgbWFudWZhY3R1cmVyc1xcXCI+e3ttYW51ZmFjdHVyZXJ9fTwvb3B0aW9uPlxcclxcbiAgICA8L3NlbGVjdD5cXHJcXG48L2Rpdj5cXHJcXG48dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiICpuZ0lmPVxcXCJkYXRhXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5NYW51ZmFjdHVyZXI8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5Nb2RlbDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIGZpbHRlcmVkRGF0YVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7ZW50cnkubWFudWZhY3R1cmVyfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57e2VudHJ5Lm1vZGVsfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIFtocmVmXT1cXFwiZ2V0RWRpdFVybChlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlQ29uZmlybShlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSBcImFuZ3VsYXIyLW1vZGFsXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImFuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbiwgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiwgRE1YQ2hhbm5lbCwgQXhpcywgQ29sb3JXaGVlbEVudHJ5IH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZml4dHVyZS1kZWZpbml0aW9ucy1lZGl0b3InLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbRml4dHVyZURlZmluaXRpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbE1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbE1vZGVsOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBhbGxNYW51ZmFjdHVyZXJzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBwcml2YXRlIGRlZmluaXRpb246IEZpeHR1cmVEZWZpbml0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgc2F2aW5nOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGZpeHR1cmVTZXJ2aWNlOiBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLCBvdmVybGF5OiBPdmVybGF5LCB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBtb2RhbDogTW9kYWwpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hbGxNYW51ZmFjdHVyZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbE1hbnVmYWN0dXJlciA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydtYW51ZmFjdHVyZXInXTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTW9kZWwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snbW9kZWwnXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNOZXdJdGVtKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmluaXRpb24gPSBuZXcgRml4dHVyZURlZmluaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5maXh0dXJlU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLmdldCh0aGlzLm9yaWdpbmFsTWFudWZhY3R1cmVyLCB0aGlzLm9yaWdpbmFsTW9kZWwpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkZWZpbml0aW9uID0+IHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb24pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVhc29uID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZml4dHVyZVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldFNrZWxldG9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdKSA9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxNYW51ZmFjdHVyZXJzID0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChza2VsZXRvbjogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbikgPT4gc2tlbGV0b24ubWFudWZhY3R1cmVyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycmF5OiBzdHJpbmdbXSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT0gaW5kZXgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENoYW5uZWwoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtYXhDaGFubmVsID0gMDtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMuZm9yRWFjaCgodmFsdWU6IERNWENoYW5uZWwpID0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmRteCA+IG1heENoYW5uZWwpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXhDaGFubmVsID0gdmFsdWUuZG14O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jaGFubmVscy5wdXNoKG5ldyBETVhDaGFubmVsKFwiXCIsIG1heENoYW5uZWwgKyAxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVDaGFubmVsKGNoYW5uZWw6IERNWENoYW5uZWwpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLmluZGV4T2YoY2hhbm5lbCk7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRBeGlzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLnB1c2gobmV3IEF4aXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVBeGlzKGF4aXM6IEF4aXMpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5pbmRleE9mKGF4aXMpO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENvbG9yV2hlZWxFbnRyeSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1pblZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY29sb3JXaGVlbC5mb3JFYWNoKCh2YWx1ZTogQ29sb3JXaGVlbEVudHJ5KSA9PiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5kbXhFbmQgPiBtaW5WYWx1ZSkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pblZhbHVlID0gdmFsdWUuZG14RW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWluVmFsdWUgPSBtaW5WYWx1ZSA8IDI1NSA/IG1pblZhbHVlICsgMSA6IDI1NTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY29sb3JXaGVlbC5wdXNoKG5ldyBDb2xvcldoZWVsRW50cnkoXCJcIiwgbWluVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUNvbG9yV2hlZWxFbnRyeShjb2xvcldoZWVsRW50cnk6IENvbG9yV2hlZWxFbnRyeSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRlZmluaXRpb24uY29sb3JXaGVlbC5pbmRleE9mKGNvbG9yV2hlZWxFbnRyeSk7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbG9yV2hlZWwuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlTmFtZXMoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBjaGFubmVsTmFtZVByb2JsZW1zID0gdGhpcy5jaGFubmVsTmFtZXNcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUsIGluZGV4OiBudW1iZXIsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSAhPSBpbmRleCB8fCB2YWx1ZSA9PSBcIlwiKTtcclxuICAgICAgICBsZXQgYXhpc05hbWVQcm9ibGVtcyA9IHRoaXMuYXhpc05hbWVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleDogbnVtYmVyLCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgIT0gaW5kZXggfHwgdmFsdWUgPT0gXCJcIik7XHJcbiAgICAgICAgbGV0IGNvbG9yV2hlZWxOYW1lUHJvYmxlbXMgPSB0aGlzLmNvbG9yV2hlZWxOYW1lc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXg6IG51bWJlciwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpICE9IGluZGV4IHx8IHZhbHVlID09IFwiXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hhbm5lbE5hbWVQcm9ibGVtcy5sZW5ndGggPT0gMCAmJiBheGlzTmFtZVByb2JsZW1zLmxlbmd0aCA9PSAwICYmIGNvbG9yV2hlZWxOYW1lUHJvYmxlbXMubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgY2hhbm5lbE5hbWVzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5jaGFubmVscy5tYXAoKHZhbHVlOiBETVhDaGFubmVsKSA9PiB2YWx1ZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBjb2xvcldoZWVsTmFtZXMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmNvbG9yV2hlZWwubWFwKCh2YWx1ZTogQ29sb3JXaGVlbEVudHJ5KSA9PiB2YWx1ZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBheGlzTmFtZXMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5tYXAoKHZhbHVlOiBBeGlzKSA9PiB2YWx1ZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTmV3SXRlbSgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXIgPT0gbnVsbCAmJiB0aGlzLm9yaWdpbmFsTW9kZWwgPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbWFudWZhY3R1cmVyID0gdGhpcy5pc05ld0l0ZW0oKSA/IHRoaXMuZGVmaW5pdGlvbi5tYW51ZmFjdHVyZXIgOiB0aGlzLm9yaWdpbmFsTWFudWZhY3R1cmVyO1xyXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMuaXNOZXdJdGVtKCkgPyB0aGlzLmRlZmluaXRpb24ubmFtZSA6IHRoaXMub3JpZ2luYWxNb2RlbDtcclxuICAgICAgICB0aGlzLmZpeHR1cmVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5wdXQobWFudWZhY3R1cmVyLCBtb2RlbCwgdGhpcy5kZWZpbml0aW9uKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZpeHR1cmUtZGVmaW5pdGlvbnNcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+Rml4dHVyZSBEZWZpbml0aW9uIEVkaXRvcjwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGZvcm0gKm5nSWY9XFxcImRlZmluaXRpb25cXFwiIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiICNlZGl0b3JGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cXFwiYWxsTWFudWZhY3R1cmVyc1xcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBtYW51ZmFjdHVyZXIgb2YgYWxsTWFudWZhY3R1cmVyc1xcXCI+e3ttYW51ZmFjdHVyZXJ9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9kYXRhbGlzdD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTWFudWZhY3R1cmVyOlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkICNpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJtYW51ZmFjdHVyZXJcXFwiIFsobmdNb2RlbCldPVxcXCJkZWZpbml0aW9uLm1hbnVmYWN0dXJlclxcXCIgI21vZGVsPVxcXCJuZ01vZGVsXFxcIlxcclxcbiAgICAgICAgICAgICAgICBsaXN0PVxcXCJhbGxNYW51ZmFjdHVyZXJzXFxcIj5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk1vZGVsOlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkICNpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJtb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcImRlZmluaXRpb24ubmFtZVxcXCIgI21vZGVsPVxcXCJuZ01vZGVsXFxcIj5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIlR5cGU6XFxcIj5cXHJcXG4gICAgICAgICAgICA8c2VsZWN0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInR5cGVcXFwiIFsobmdNb2RlbCldPVxcXCJkZWZpbml0aW9uLnR5cGVcXFwiPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+TEVEPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5UdW5nc3Rlbjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+RWZmZWN0PC9vcHRpb24+XFxyXFxuICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XFxcImNoYW5uZWxMaXN0XFxcIiBuYW1lPVxcXCJjaGFubmVsTGlzdFxcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5NYXN0ZXI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlN0cm9iZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+UmVkPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5HcmVlbjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+Qmx1ZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+VVY8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkNvbG9yV2hlZWw8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlBhbkNvYXJzZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+UGFuRmluZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+VGlsdENvYXJzZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+VGlsdEZpbmU8L29wdGlvbj5cXHJcXG4gICAgICAgIDwvZGF0YWxpc3Q+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5DaGFubmVsczwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRNWDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1pbjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXg8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgY2hhbm5lbCBvZiBkZWZpbml0aW9uLmNoYW5uZWxzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJjaGFubmVsLmRteFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjUxMlxcXCIgW25hbWVdPVxcXCInY2hhbm5lbERNWFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCBbKHVuaXF1ZSldPVxcXCJjaGFubmVsTmFtZXNcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJjaGFubmVsLm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cXFwiJ2NoYW5uZWxOYW1lWycgKyBpICsgJ10nXFxcIiBsaXN0PVxcXCJjaGFubmVsTGlzdFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hhbm5lbC5taW5cXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIyNTVcXFwiIFtuYW1lXT1cXFwiJ2NoYW5uZWxNaW5bJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hhbm5lbC5tYXhcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIyNTVcXFwiIFtuYW1lXT1cXFwiJ2NoYW5uZWxNYXhbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVDaGFubmVsKGNoYW5uZWwpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZENoYW5uZWwoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XFxcImF4aXNMaXN0XFxcIiBuYW1lPVxcXCJheGlzTGlzdFxcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5QYW48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlRpbHQ8L29wdGlvbj5cXHJcXG4gICAgICAgIDwvZGF0YWxpc3Q+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5Nb3ZlbWVudCBBeGlzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NaW4gKGRlZ3JlZXMpPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1heCAoZGVncmVlcyk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgbW92ZW1lbnQgb2YgZGVmaW5pdGlvbi5tb3ZlbWVudHM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFt1bmlxdWVdPVxcXCJjb2xvcldoZWVsTmFtZXNcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJtb3ZlbWVudC5uYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XFxcIidheGlzTmFtZVsnICsgaSArICddJ1xcXCIgbGlzdD1cXFwiYXhpc0xpc3RcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcIm1vdmVtZW50Lm1pblxcXCIgW25hbWVdPVxcXCInYXhpc01pblsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJtb3ZlbWVudC5tYXhcXFwiIFtuYW1lXT1cXFwiJ2F4aXNNYXhbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVBeGlzKG1vdmVtZW50KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGRBeGlzKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+Q29sb3IgV2hlZWxzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db2xvcjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ETVggU3RhcnQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RE1YIEVuZDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBkZWZpbml0aW9uLmNvbG9yV2hlZWw7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIFt1bmlxdWVdPVxcXCJjb2xvcldoZWVsTmFtZXNcXFwiIHJlcXVpcmVkIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJlbnRyeS5uYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XFxcIidjb2xvcldoZWVsTmFtZVsnICsgaSArICddJ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwiY29sb3JcXFwiIFsobmdNb2RlbCldPVxcXCJlbnRyeS5jb2xvclxcXCIgW25hbWVdPVxcXCInY29sb3JXaGVlbENvbG9yWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5LmRteFN0YXJ0XFxcIiBbbmFtZV09XFxcIidjb2xvcldoZWVsTWluWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XFxcIjBcXFwiIG1heD1cXFwiMjU1XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJlbnRyeS5kbXhFbmRcXFwiIFtuYW1lXT1cXFwiJ2NvbG9yV2hlZWxNYXhbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIyNTVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlQ29sb3JXaGVlbEVudHJ5KGVudHJ5KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGRDb2xvcldoZWVsRW50cnkoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNhdmUoKVxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRvckZvcm0udmFsaWRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2ZpZWxkc2V0PlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuLi9ncm91cHMvZ3JvdXBcIjtcclxuaW1wb3J0IHsgUHJldmlld1VuaXZlcnNlRGF0YSwgUHJldmlld0ZpeHR1cmVEYXRhLCBVbml2ZXJzZVVwZGF0ZURhdGEgfSBmcm9tIFwiLi9wcmV2aWV3XCI7XHJcbmltcG9ydCB7IERNWENoYW5uZWwgfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tIFwiLi4vdmVudWVzL3ZlbnVlXCI7XHJcblxyXG5pbXBvcnQgeyBVUkwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VybFwiO1xyXG5cclxuaW1wb3J0IHsgUHJldmlld1NlcnZpY2UgfSBmcm9tIFwiLi9wcmV2aWV3LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHJldmlldzJERml4dHVyZUNvbXBvbmVudCB9IGZyb20gXCIuL3ByZXZpZXctMmQtZml4dHVyZS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcmV2aWV3LTJkJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ByZXZpZXctMmQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1ByZXZpZXdTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJldmlldzJEQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBncm91cHM6IHN0cmluZ1tdO1xyXG4gICAgdW5pdmVyc2VzOiBNYXA8c3RyaW5nLCBQcmV2aWV3VW5pdmVyc2VEYXRhPjtcclxuICAgIHVuaXZlcnNlRGF0YTogbnVtYmVyW107XHJcbiAgICBhY3RpdmVVbml2ZXJzZTogUHJldmlld1VuaXZlcnNlRGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwcmV2aWV3U2VydmljZTogUHJldmlld1NlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgcHJldmlld1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwcyA9IHZhbHVlLmdyb3VwcztcclxuICAgICAgICAgICAgICAgIHRoaXMudW5pdmVyc2VzID0gbmV3IE1hcDxzdHJpbmcsIFByZXZpZXdVbml2ZXJzZURhdGE+KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB1bml2ZXJzZSBvZiB2YWx1ZS51bml2ZXJzZXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bml2ZXJzZXMuc2V0KHVuaXZlcnNlLm5hbWUsIHVuaXZlcnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXZlcnNlRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVVbml2ZXJzZSA9IHRoaXMudW5pdmVyc2VzLmdldCh0aGlzLnVuaXZlcnNlcy5rZXlzKCkubmV4dCgpLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3U2VydmljZS5zdWJzY3JpYmUoZGF0YSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdmVyc2VEYXRhID0gZGF0YS52YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rml4dHVyZXModW5pdmVyc2U6IFByZXZpZXdVbml2ZXJzZURhdGEsIGdyb3VwOiBzdHJpbmcpOiBQcmV2aWV3Rml4dHVyZURhdGFbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB1bml2ZXJzZS5maXh0dXJlcy5maWx0ZXIoeCA9PiB4Lmdyb3VwID09IGdyb3VwKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXctMmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IFByZXZpZXdEYXRhLCBVbml2ZXJzZVVwZGF0ZURhdGEgfSBmcm9tIFwiLi9wcmV2aWV3XCI7XHJcbmltcG9ydCB7IFVSTCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXJsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcmV2aWV3U2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHByZXZpZXdVcmwgPSBcIi9hcGkvUHJldmlld1wiO1xyXG4gICAgcHJpdmF0ZSBzb2NrZXRVcmwgPSBVUkwuZ2V0U29ja2V0VVJMKFwiUHJldmlld1wiKTtcclxuICAgIHByaXZhdGUgc29ja2V0OiBXZWJTb2NrZXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNvY2tldFVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCgpOiBQcm9taXNlPFByZXZpZXdEYXRhPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucHJldmlld1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCByYXdEYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhd0RhdGEuZ3JvdXBzICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByYXdEYXRhIGFzIFByZXZpZXdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiTm8gVmVudWUgTG9hZGVkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJzY3JpYmUobGlzdGVuZXI6IChkYXRhOiBVbml2ZXJzZVVwZGF0ZURhdGEpID0+IHZvaWQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2OiBNZXNzYWdlRXZlbnQpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZXYuZGF0YSkgYXMgVW5pdmVyc2VVcGRhdGVEYXRhO1xyXG4gICAgICAgICAgICBsaXN0ZW5lcihkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXcuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5QcmV2aWV3PC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIiAqbmdGb3I9XFxcImxldCBncm91cCBvZiBncm91cHNcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj57e2dyb3VwfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICA8cHJldmlldy0yZC1maXh0dXJlICpuZ0Zvcj1cXFwibGV0IGZpeHR1cmUgb2YgZ2V0Rml4dHVyZXMoYWN0aXZlVW5pdmVyc2UsIGdyb3VwKVxcXCIgW2RhdGFdPVxcXCJ1bml2ZXJzZURhdGFcXFwiIFtmaXh0dXJlXT1cXFwiZml4dHVyZVxcXCI+PC9wcmV2aWV3LTJkLWZpeHR1cmU+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJldmlld0ZpeHR1cmVEYXRhIH0gZnJvbSBcIi4vcHJldmlld1wiO1xyXG5pbXBvcnQgeyBETVhQcmV2aWV3Rml4dHVyZSB9IGZyb20gXCIuL0RNWFByZXZpZXdGaXh0dXJlXCI7XHJcbmltcG9ydCB7IERNWENoYW5uZWwgfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcmV2aWV3LTJkLWZpeHR1cmUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vcHJldmlldy0yZC1maXh0dXJlLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKFwiLi9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50LmNzc1wiKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByZXZpZXcyREZpeHR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXNcclxue1xyXG4gICAgc3RhdGljIHVwZGF0ZVJhdGUgPSA2MDsgLy9oZXJ0elxyXG4gICAgc3RhdGljIHVwZGF0ZVRpbWUgPSAxMDAwIC8gUHJldmlldzJERml4dHVyZUNvbXBvbmVudC51cGRhdGVSYXRlO1xyXG5cclxuICAgIEBJbnB1dChcImZpeHR1cmVcIikgZml4dHVyZURhdGE6IFByZXZpZXdGaXh0dXJlRGF0YTtcclxuICAgIEBJbnB1dChcImRhdGFcIikgZGF0YTogbnVtYmVyW107XHJcbiAgICBAVmlld0NoaWxkKFwiY2FudmFzXCIpIGNhbnZhc1JlZjogRWxlbWVudFJlZjtcclxuICAgIGZpeHR1cmU6IERNWFByZXZpZXdGaXh0dXJlO1xyXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHsgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZSA9IG5ldyBETVhQcmV2aWV3Rml4dHVyZSh0aGlzLmZpeHR1cmVEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzW1wiZGF0YVwiXSAhPSBudWxsICYmIGNoYW5nZXNbXCJkYXRhXCJdLmN1cnJlbnRWYWx1ZSAhPSBudWxsICYmIHRoaXMuY2FudmFzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSBjaGFuZ2VzW1wiZGF0YVwiXS5jdXJyZW50VmFsdWUgYXMgbnVtYmVyW107XHJcbiAgICAgICAgICAgIHRoaXMuZml4dHVyZS51cGRhdGUobmV3RGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maXh0dXJlLmZpbGxTdHlsZTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmZpeHR1cmUuc3Ryb2tlU3R5bGU7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZml4dHVyZS5wYW4gIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwYW5YID0gdGhpcy5maXh0dXJlLnBhbiAqIHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHBhblgsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8ocGFuWCwgdGhpcy5jYW52YXMud2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpeHR1cmUudGlsdCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRpbHRZID0gdGhpcy5maXh0dXJlLnRpbHQgKiB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgdGlsdFkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGgsIHRpbHRZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXctMmQtZml4dHVyZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPnt7Zml4dHVyZS5hZGRyZXNzfX0ge3tmaXh0dXJlLm1hbnVmYWN0dXJlcn19IHt7Zml4dHVyZS5tb2RlbH19PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGNhbnZhcyAjY2FudmFzIHdpZHRoPVxcXCIzMDBcXFwiIGhlaWdodD1cXFwiMzAwXFxcIiBjbGFzcz1cXFwiZml4dHVyZUNhbnZhc1xcXCI+PC9jYW52YXM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZml4dHVyZS5leHBhbmRlZCA9ICFmaXh0dXJlLmV4cGFuZGVkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IHRleHQtY2VudGVyXFxcIj5ETVg8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8dGFibGUgKm5nSWY9XFxcImZpeHR1cmUuZXhwYW5kZWRcXFwiIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DaGFubmVsPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZhbHVlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjaGFubmVsIG9mIGZpeHR1cmUuY2hhbm5lbHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2NoYW5uZWwuZG14ICsgZml4dHVyZS5hZGRyZXNzIC0gMX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tjaGFubmVsLm5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7Y2hhbm5lbC5kbXhWYWx1ZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ByZXZpZXctMmQvcHJldmlldy0yZC1maXh0dXJlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZml4dHVyZUNhbnZhc1xcclxcbntcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ByZXZpZXctMmQvcHJldmlldy0yZC1maXh0dXJlLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IERNWFByZXZpZXdDaGFubmVsIH0gZnJvbSBcIi4vRE1YUHJldmlld0NoYW5uZWxcIjtcclxuaW1wb3J0IHsgUHJldmlld0ZpeHR1cmVEYXRhIH0gZnJvbSBcIi4vcHJldmlld1wiO1xyXG5cclxuaW1wb3J0IHsgQ29sb3IsIFJHQiB9IGZyb20gXCIuL0NvbG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRE1YUHJldmlld0ZpeHR1cmVcclxue1xyXG4gICAgYWRkcmVzczogbnVtYmVyO1xyXG4gICAgZXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgICBtYW51ZmFjdHVyZXI6IHN0cmluZztcclxuICAgIG1vZGVsOiBzdHJpbmc7XHJcblxyXG4gICAgY2hhbm5lbHM6IERNWFByZXZpZXdDaGFubmVsW107XHJcbiAgICBjaGFubmVsTmFtZU1hcDogTWFwPHN0cmluZywgRE1YUHJldmlld0NoYW5uZWw+O1xyXG4gICAgY2hhbm5lbE51bWJlck1hcDogTWFwPG51bWJlciwgRE1YUHJldmlld0NoYW5uZWxbXT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YTogUHJldmlld0ZpeHR1cmVEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWFudWZhY3R1cmVyID0gZGF0YS5kZWZpbml0aW9uLm1hbnVmYWN0dXJlcjtcclxuICAgICAgICB0aGlzLm1vZGVsID0gZGF0YS5kZWZpbml0aW9uLm5hbWU7XHJcbiAgICAgICAgdGhpcy5hZGRyZXNzID0gZGF0YS5jaGFubmVsO1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNoYW5uZWxOYW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIERNWFByZXZpZXdDaGFubmVsPigpO1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbE51bWJlck1hcCA9IG5ldyBNYXA8bnVtYmVyLCBETVhQcmV2aWV3Q2hhbm5lbFtdPigpO1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY2hhbm5lbCBvZiBkYXRhLmRlZmluaXRpb24uY2hhbm5lbHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgZG14Q2hhbm5lbCA9IG5ldyBETVhQcmV2aWV3Q2hhbm5lbChjaGFubmVsLm5hbWUsIGNoYW5uZWwuZG14LCBjaGFubmVsLm1pbiwgY2hhbm5lbC5tYXgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzLnB1c2goZG14Q2hhbm5lbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbE5hbWVNYXAuc2V0KGRteENoYW5uZWwubmFtZSwgZG14Q2hhbm5lbCk7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMuY2hhbm5lbE51bWJlck1hcC5nZXQoZG14Q2hhbm5lbC5kbXgpO1xyXG4gICAgICAgICAgICBpZiAoYXJyYXkgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbE51bWJlck1hcC5zZXQoZG14Q2hhbm5lbC5kbXggKyBkYXRhLmNoYW5uZWwgLSAyLCBhcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJyYXkucHVzaChkbXhDaGFubmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiBudW1iZXJbXSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBjaGFubmVsIG9mIHRoaXMuY2hhbm5lbHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IGNoYW5uZWwuZG14ICsgdGhpcy5hZGRyZXNzIC0gMjtcclxuICAgICAgICAgICAgY2hhbm5lbC5kbXhWYWx1ZSA9IGRhdGFbYWRkcmVzc107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IHJlZCgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25hbEdldFZhbHVlKFwiUmVkXCIpICogdGhpcy5vcHRpb25hbEdldFZhbHVlKFwiTWFzdGVyXCIsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGdyZWVuKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsR2V0VmFsdWUoXCJHcmVlblwiKSAqIHRoaXMub3B0aW9uYWxHZXRWYWx1ZShcIk1hc3RlclwiLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBibHVlKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsR2V0VmFsdWUoXCJCbHVlXCIpICogdGhpcy5vcHRpb25hbEdldFZhbHVlKFwiTWFzdGVyXCIsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZmlsbFN0eWxlKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBtcyA9IERhdGUubm93KCkgJSA1MDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uYWxHZXRWYWx1ZShcIlN0cm9iZVwiKSA+IDAgJiYgbXMgPiAyNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImJsYWNrXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBgcmdiKCR7dGhpcy5yZWQgKiAyNTV9LCAke3RoaXMuZ3JlZW4gKiAyNTV9LCAke3RoaXMuYmx1ZSAqIDI1NX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHN0cm9rZVN0eWxlKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBzdHJva2UgPSBuZXcgUkdCKHRoaXMucmVkICogMjU1LCB0aGlzLmdyZWVuICogMjU1LCB0aGlzLmJsdWUgKiAyNTUpLmludmVydCgpO1xyXG4gICAgICAgIHJldHVybiBzdHJva2UudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBhbigpOiBudW1iZXIgfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbE5hbWVNYXAuZ2V0KFwiUGFuQ29hcnNlXCIpICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsTmFtZU1hcC5nZXQoXCJQYW5Db2Fyc2VcIikudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxOYW1lTWFwLmdldChcIlBhblwiKSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbE5hbWVNYXAuZ2V0KFwiUGFuXCIpLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRpbHQoKTogbnVtYmVyIHwgbnVsbFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxOYW1lTWFwLmdldChcIlRpbHRDb2Fyc2VcIikgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxOYW1lTWFwLmdldChcIlRpbHRDb2Fyc2VcIikudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxOYW1lTWFwLmdldChcIlRpbHRcIikgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxOYW1lTWFwLmdldChcIlRpbHRcIikudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbmFsR2V0VmFsdWUobmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBudW1iZXIpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWUgfHwgMDtcclxuICAgICAgICBsZXQgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbE5hbWVNYXAuZ2V0KG5hbWUpO1xyXG4gICAgICAgIHJldHVybiBjaGFubmVsID8gY2hhbm5lbC52YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL0RNWFByZXZpZXdGaXh0dXJlLnRzIiwiaW1wb3J0IHsgRE1YQ2hhbm5lbCB9IGZyb20gXCIuLi9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERNWFByZXZpZXdDaGFubmVsIGV4dGVuZHMgRE1YQ2hhbm5lbFxyXG57XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkbXg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGRteCwgbWluLCBtYXgpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IHJhbmdlKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heCAtIHRoaXMubWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZG14VmFsdWUodmFsdWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBpZiAodmFsdWUgPj0gdGhpcy5taW4gJiYgdmFsdWUgPD0gdGhpcy5tYXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gKHZhbHVlIC0gdGhpcy5taW4pIC8gdGhpcy5yYW5nZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkbXhWYWx1ZSgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgKiB0aGlzLnJhbmdlKSArIHRoaXMubWluO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkKGNoYW5uZWw6IERNWENoYW5uZWwpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBETVhDaGFubmVsKGNoYW5uZWwubmFtZSwgY2hhbm5lbC5kbXgsIGNoYW5uZWwubWluLCBjaGFubmVsLm1heCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9ETVhQcmV2aWV3Q2hhbm5lbC50cyIsImV4cG9ydCBjbGFzcyBDb2xvclxyXG57XHJcbiAgICBzdGF0aWMgcmFuZG9tQ29sb3IoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgIGNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwKTsgLy8gaW50ZWdlciBiZXR3ZWVuIDB4MCBhbmQgMHhGRkZGRkZcclxuICAgICAgICBjb2xvciA9IGNvbG9yLnRvU3RyaW5nKDE2KTsgLy8gY29udmVydCB0byBoZXhcclxuICAgICAgICBjb2xvciA9IChcIjAwMDAwMFwiICsgY29sb3IpLnNsaWNlKC02KTsgLy8gcGFkIHdpdGggbGVhZGluZyB6ZXJvc1xyXG4gICAgICAgIGNvbG9yID0gXCIjXCIgKyBjb2xvcjsgLy8gcHJlcGVuZCAjXHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnZlcnRDc3NDb2xvcihjb2xvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJnYiA9IFJHQi5wYXJzZShjb2xvcikuaW52ZXJ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJnYi50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWMyaGV4KG46IG51bWJlcik6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBoZXggPSBuLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA8IDIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gJzAnICsgaGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGV4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgY2xhbXAobjogbnVtYmVyKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7IHJldHVybiAwOyB9XHJcbiAgICAgICAgaWYgKG4gPiAyNTUpIHsgcmV0dXJuIDI1NTsgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUkdCXHJcbntcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuciA9IHJlZDtcclxuICAgICAgICB0aGlzLmcgPSBncmVlbjtcclxuICAgICAgICB0aGlzLmIgPSBibHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1lVVigpOiBZVVZcclxuICAgIHtcclxuICAgICAgICBsZXQgeSA9IENvbG9yLmNsYW1wKHRoaXMuciAqIDAuMjk5MDAgKyB0aGlzLmcgKiAwLjU4NyArIHRoaXMuYiAqIDAuMTE0KTtcclxuICAgICAgICBsZXQgdSA9IENvbG9yLmNsYW1wKHRoaXMuciAqIC0wLjE2ODc0ICsgdGhpcy5nICogLTAuMzMxMjYgKyB0aGlzLmIgKiAwLjUwMDAwICsgMTI4KTtcclxuICAgICAgICBsZXQgdiA9IENvbG9yLmNsYW1wKHRoaXMuciAqIDAuNTAwMDAgKyB0aGlzLmcgKiAtMC40MTg2OSArIHRoaXMuYiAqIC0wLjA4MTMxICsgMTI4KTtcclxuICAgICAgICByZXR1cm4gbmV3IFlVVih5LCB1LCB2KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIENvbG9yLmRlYzJoZXgodGhpcy5yKSArIENvbG9yLmRlYzJoZXgodGhpcy5nKSArIENvbG9yLmRlYzJoZXgodGhpcy5iKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlKHN0cjogc3RyaW5nKTogUkdCXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gc3RyLnN1YnN0cmluZygxKTsgLy8gcmVtb3ZlICNcclxuICAgICAgICByZXR1cm4gbmV3IFJHQihwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMCwgMiksIDE2KSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDIsIDQpLCAxNiksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZyg0LCA2KSwgMTYpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW52ZXJ0KCk6IFJHQlxyXG4gICAge1xyXG4gICAgICAgIGxldCB5dXYgPSB0aGlzLnRvWVVWKCk7XHJcbiAgICAgICAgbGV0IGZhY3RvciA9IDkwO1xyXG4gICAgICAgIGxldCB0aHJlc2hvbGQgPSAxMDA7XHJcbiAgICAgICAgeXV2LnkgPSBDb2xvci5jbGFtcCh5dXYueSArICh5dXYueSA+IHRocmVzaG9sZCA/IC1mYWN0b3IgOiBmYWN0b3IpKTtcclxuICAgICAgICByZXR1cm4geXV2LnRvUkdCKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBZVVZcclxue1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgdTogbnVtYmVyO1xyXG4gICAgdjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHk6IG51bWJlciwgdTogbnVtYmVyLCB2OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnUgPSB1O1xyXG4gICAgICAgIHRoaXMudiA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvUkdCKCk6IFJHQlxyXG4gICAge1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy55O1xyXG4gICAgICAgIGxldCB1ID0gdGhpcy51O1xyXG4gICAgICAgIGxldCB2ID0gdGhpcy52O1xyXG4gICAgICAgIGxldCByID0gQ29sb3IuY2xhbXAoeSArICh2IC0gMTI4KSAqIDEuNDAyMDApO1xyXG4gICAgICAgIGxldCBnID0gQ29sb3IuY2xhbXAoeSArICh1IC0gMTI4KSAqIC0wLjM0NDE0ICsgKHYgLSAxMjgpICogLTAuNzE0MTQpO1xyXG4gICAgICAgIGxldCBiID0gQ29sb3IuY2xhbXAoeSArICh1IC0gMTI4KSAqIDEuNzcyMDApO1xyXG4gICAgICAgIHJldHVybiBuZXcgUkdCKHIsIGcsIGIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ByZXZpZXctMmQvQ29sb3IudHMiXSwic291cmNlUm9vdCI6IiJ9