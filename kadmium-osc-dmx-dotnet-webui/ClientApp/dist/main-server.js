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
	var sacn_transmitter_live_component_1 = __webpack_require__(83);
	var osc_listener_live_component_1 = __webpack_require__(85);
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
	            sacn_transmitter_live_component_1.SACNTransmitterLiveComponent,
	            osc_listener_live_component_1.OSCListenerLiveComponent,
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
	                { path: 'sacnTransmitterLive', component: sacn_transmitter_live_component_1.SACNTransmitterLiveComponent },
	                { path: 'oscListenerLive', component: osc_listener_live_component_1.OSCListenerLiveComponent },
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
	DashboardComponent.socketURL = url_1.URL.getSocketURL("Dashboard");
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
	    URL.getSocketURL = function (socketName) {
	        var originalURL = document.URL;
	        var urlParts = document.URL.split("/");
	        var protocol = urlParts[0];
	        var host = urlParts[2];
	        var root = "ws://" + host;
	        var socketURL = root + "/socket/" + socketName;
	        return socketURL;
	    };
	    URL.getAPIUrl = function (apiName) {
	        var originalURL = document.URL;
	        var urlParts = document.URL.split("/");
	        var protocol = urlParts[0];
	        var host = urlParts[2];
	        var root = protocol + "//" + host;
	        var apiURL = root + "/api/" + apiName;
	        return apiURL;
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
	var DMXPreviewFixture_1 = __webpack_require__(77);
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
	        template: __webpack_require__(80),
	        styles: [__webpack_require__(81)]
	    }),
	    __metadata("design:paramtypes", [])
	], Preview2DFixtureComponent);
	exports.Preview2DFixtureComponent = Preview2DFixtureComponent;
	var Preview2DFixtureComponent_1;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DMXPreviewChannel_1 = __webpack_require__(78);
	var Color_1 = __webpack_require__(79);
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
/* 78 */
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
/* 79 */
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


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">{{fixture.address}} {{fixture.manufacturer}} {{fixture.model}}</div>\r\n    <div class=\"panel-body\">\r\n        <canvas #canvas width=\"300\" height=\"300\" class=\"fixtureCanvas\"></canvas>\r\n    </div>\r\n    <div class=\"panel-footer\">\r\n        <div class=\"dropdown\">\r\n            <button (click)=\"fixture.expanded = !fixture.expanded\" class=\"btn btn-default text-center\">DMX</button>\r\n\r\n            <table *ngIf=\"fixture.expanded\" class=\"table table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Channel</th>\r\n                        <th>Name</th>\r\n                        <th>Value</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let channel of fixture.channels\">\r\n                        <td>{{channel.dmx + fixture.address - 1}}</td>\r\n                        <td>{{channel.name}}</td>\r\n                        <td>{{channel.dmxValue}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(82);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".fixtureCanvas\r\n{\r\n    border: 1px solid black;\r\n}", ""]);
	
	// exports


/***/ },
/* 83 */
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
	var preview_service_1 = __webpack_require__(74);
	var SACNTransmitterLiveComponent = (function () {
	    function SACNTransmitterLiveComponent(previewService) {
	        var _this = this;
	        this.data = Array(512).fill(0);
	        previewService.subscribe(function (data) {
	            _this.data = data.values;
	        });
	    }
	    SACNTransmitterLiveComponent.prototype.getRows = function () {
	        return new Array(52).fill(0).map(function (x, i) { return i; });
	    };
	    SACNTransmitterLiveComponent.prototype.getColumns = function (row) {
	        if (row < 51) {
	            return new Array(10).fill(0).map(function (x, i) { return i; });
	        }
	        else if (row == 51) {
	            return new Array(3).fill(0).map(function (x, i) { return i; });
	        }
	        else {
	            return [];
	        }
	    };
	    SACNTransmitterLiveComponent.prototype.padNumber = function (num) {
	        if (num < 10) {
	            return "00" + num;
	        }
	        else if (num < 100) {
	            return "0" + num;
	        }
	        else if (num < 1000) {
	            return num + "";
	        }
	    };
	    return SACNTransmitterLiveComponent;
	}());
	SACNTransmitterLiveComponent = __decorate([
	    core_1.Component({
	        selector: 'sacn-transmitter-live',
	        template: __webpack_require__(84),
	        providers: [preview_service_1.PreviewService]
	    }),
	    __metadata("design:paramtypes", [preview_service_1.PreviewService])
	], SACNTransmitterLiveComponent);
	exports.SACNTransmitterLiveComponent = SACNTransmitterLiveComponent;


/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>sACN Transmitter Live</h1>\r\n</div>\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th></th>\r\n            <th>0</th>\r\n            <th>1</th>\r\n            <th>2</th>\r\n            <th>3</th>\r\n            <th>4</th>\r\n            <th>5</th>\r\n            <th>6</th>\r\n            <th>7</th>\r\n            <th>8</th>\r\n            <th>9</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let row of getRows()\">\r\n            <th>{{row * 10}}</th>\r\n            <td *ngFor=\"let column of getColumns(row)\" title=\"{{row * 10 + column}}\" [ngStyle]=\"{'background-color': 'rgb(255,' + (255 - data[row * 10 + column]) + ',' + (255 - data[row * 10 + column]) + ')'}\">{{padNumber(data[row * 10 + column])}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ },
/* 85 */
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
	var osc_listener_service_1 = __webpack_require__(86);
	var OSCListenerLiveComponent = OSCListenerLiveComponent_1 = (function () {
	    function OSCListenerLiveComponent(oscListenerService) {
	        var _this = this;
	        this.unrecognisedData = [];
	        this.recognisedData = [];
	        oscListenerService.subscribe(function (data) {
	            var str = data.address + " " + data.value;
	            var array = data.recognised ? _this.recognisedData : _this.unrecognisedData;
	            array.push(str);
	            if (array.length > OSCListenerLiveComponent_1.MAX_LENGTH) {
	                var tooLongAmount = array.length - OSCListenerLiveComponent_1.MAX_LENGTH;
	                array.splice(0, tooLongAmount);
	            }
	        });
	    }
	    OSCListenerLiveComponent.prototype.getRecognised = function () {
	        return this.recognisedData.join("\r\n");
	    };
	    OSCListenerLiveComponent.prototype.getUnrecognised = function () {
	        return this.unrecognisedData.join("\r\n");
	    };
	    return OSCListenerLiveComponent;
	}());
	OSCListenerLiveComponent.MAX_LENGTH = 50;
	OSCListenerLiveComponent = OSCListenerLiveComponent_1 = __decorate([
	    core_1.Component({
	        selector: 'osc-listener-live',
	        template: __webpack_require__(87),
	        providers: [osc_listener_service_1.OSCListenerService]
	    }),
	    __metadata("design:paramtypes", [osc_listener_service_1.OSCListenerService])
	], OSCListenerLiveComponent);
	exports.OSCListenerLiveComponent = OSCListenerLiveComponent;
	var OSCListenerLiveComponent_1;


/***/ },
/* 86 */
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
	__webpack_require__(41);
	var url_1 = __webpack_require__(42);
	var OSCListenerService = (function () {
	    function OSCListenerService() {
	        this.socketUrl = url_1.URL.getSocketURL("OSC");
	        this.socket = new WebSocket(this.socketUrl);
	    }
	    OSCListenerService.prototype.subscribe = function (listener) {
	        this.socket.addEventListener("message", function (ev) {
	            var data = JSON.parse(ev.data);
	            listener(data);
	        });
	    };
	    return OSCListenerService;
	}());
	OSCListenerService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [])
	], OSCListenerService);
	exports.OSCListenerService = OSCListenerService;


/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>OSC Listener Live</h1>\r\n</div>\r\n<h2>Recognised</h2>\r\n<textarea class=\"form-control\" rows=\"20\" [value]=\"getRecognised()\"></textarea>\r\n<h2>Unrecognised</h2>\r\n<textarea class=\"form-control\" rows=\"20\" [value]=\"getUnrecognised()\"></textarea>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjU2ODQ2YmM0MTBlYzEwYTYzOTciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzPzRlYWMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LmNzcz9hNzBjIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3NoYXJlZC91cmwudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1lZGl0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtcHJlc2V0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuY3NzPzJkNWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LmNzcz82ZjFmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtZWRpdG9yLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ByZXZpZXctMmQvcHJldmlldy0yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL0RNWFByZXZpZXdGaXh0dXJlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL0RNWFByZXZpZXdDaGFubmVsLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL0NvbG9yLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXctMmQtZml4dHVyZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50LmNzcz85MGQ2Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXctMmQtZml4dHVyZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zYWNuLXRyYW5zbWl0dGVyLWxpdmUvc2Fjbi10cmFuc21pdHRlci1saXZlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2Fjbi10cmFuc21pdHRlci1saXZlL3NhY24tdHJhbnNtaXR0ZXItbGl2ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3NjLWxpc3RlbmVyLWxpdmUvb3NjLWxpc3RlbmVyLWxpdmUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vc2MtbGlzdGVuZXItbGl2ZS9vc2MtbGlzdGVuZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvb3NjLWxpc3RlbmVyLWxpdmUvb3NjLWxpc3RlbmVyLWxpdmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLHdCQUFzQztBQUN0Qyx3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07U0FDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbEMsSUFBSSxFQUFFLDJCQUEyQjthQUNqQyxVQUFVLEVBQUU7aUJBQ1IsT0FBTyxFQUFFLEdBQUc7aUJBQ1osVUFBVSxFQUFFLE1BQU0sQ0FBQyxHQUFHO2lCQUN0QixTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3hCLE9BQU8sRUFBRSxLQUFLO2lCQUNkLDZGQUE2RjtpQkFDN0YsNkRBQTZEO2lCQUM3RCxRQUFRLEVBQUUsbUVBQW1FO2NBQ2hGO2FBQ0QsYUFBYSxFQUFFLFVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSztpQkFDdEQsNkVBQTZFO2lCQUM3RSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNoQixDQUFDO1VBQ0osQ0FBQyxDQUFDO1NBRUgsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWtCLGNBQU0sZUFBUSxDQUFDLGVBQWUs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a0MseUNBQWtCO0lBTnpDLHdCQUF3QixDQWlDcEM7QUFqQ1ksNkRBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUckMscUNBQTJDO0FBRTNDLHlCQUFxQztBQUVyQyxxQ0FBdUM7QUFHdkMsS0FBYSxrQkFBa0I7S0FLM0I7U0FIUSxjQUFTLEdBQUcsU0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUt4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNoRCxDQUFDO0tBRU0sc0NBQVMsR0FBaEIsVUFBaUIsUUFBeUM7U0FFdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxFQUFnQjthQUVyRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQW9CLENBQUM7YUFDbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CLENBQUMsQ0FBQyxDQUFDO0tBQ1AsQ0FBQztLQUNMLHlCQUFDO0FBQUQsRUFBQztBQWxCWSxtQkFBa0I7S0FEOUIsaUJBQVUsRUFBRTs7SUFDQSxrQkFBa0IsQ0FrQjlCO0FBbEJZLGlEQUFrQjs7Ozs7OztBQ1AvQiw2VCIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY1Njg0NmJjNDEwZWMxMGE2Mzk3IiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcclxuXHJcbmltcG9ydCB7IE1JTk1BWF9ESVJFQ1RJVkVTIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XHJcbmltcG9ydCB7IE1heFZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XHJcbmltcG9ydCB7IFVuaXF1ZVZhbGlkYXRvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmVcIjtcclxuXHJcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xyXG5pbXBvcnQgeyBCb290c3RyYXBNb2RhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0YXR1c1BhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYWJlbGxlZElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGFibGVJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElucHV0Qm94Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JvdXBzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVudWVzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZW51ZUVkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVW5pdmVyc2VFZGl0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpeHR1cmVPcHRpb25zRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJldmlldzJEQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXctMmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByZXZpZXcyREZpeHR1cmVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ByZXZpZXctMmQvcHJldmlldy0yZC1maXh0dXJlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTQUNOVHJhbnNtaXR0ZXJMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zYWNuLXRyYW5zbWl0dGVyLWxpdmUvc2Fjbi10cmFuc21pdHRlci1saXZlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBPU0NMaXN0ZW5lckxpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL29zYy1saXN0ZW5lci1saXZlL29zYy1saXN0ZW5lci1saXZlLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZlbnVlU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmVudWVQcmVzZXRTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy92ZW51ZXMvdmVudWUtcHJlc2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JvdXBTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncm91cHMvZ3JvdXAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPU0NMaXN0ZW5lclNlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL29zYy1saXN0ZW5lci1saXZlL29zYy1saXN0ZW5lci5zZXJ2aWNlXCI7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG5cclxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudCxcclxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICAgICAgR3JvdXBzQ29tcG9uZW50LFxyXG4gICAgICAgIFZlbnVlc0NvbXBvbmVudCxcclxuICAgICAgICBWZW51ZUVkaXRvckNvbXBvbmVudCxcclxuICAgICAgICBVbml2ZXJzZUVkaXRvckNvbXBvbmVudCxcclxuICAgICAgICBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudCxcclxuICAgICAgICBGaXh0dXJlRGVmaW5pdGlvbnNDb21wb25lbnQsXHJcbiAgICAgICAgRml4dHVyZURlZmluaXRpb25FZGl0b3JDb21wb25lbnQsXHJcbiAgICAgICAgUHJldmlldzJEQ29tcG9uZW50LFxyXG4gICAgICAgIFByZXZpZXcyREZpeHR1cmVDb21wb25lbnQsXHJcbiAgICAgICAgU0FDTlRyYW5zbWl0dGVyTGl2ZUNvbXBvbmVudCxcclxuICAgICAgICBPU0NMaXN0ZW5lckxpdmVDb21wb25lbnQsXHJcblxyXG4gICAgICAgIE1JTk1BWF9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIFVuaXF1ZVZhbGlkYXRvcixcclxuXHJcbiAgICAgICAgTmF2TWVudUNvbXBvbmVudCxcclxuICAgICAgICBTdGF0dXNQYW5lbENvbXBvbmVudCxcclxuICAgICAgICBNZXNzYWdlQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIExhYmVsbGVkSW5wdXRDb21wb25lbnQsXHJcbiAgICAgICAgVGFibGVJbnB1dENvbXBvbmVudCxcclxuICAgICAgICBJbnB1dEJveENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsXHJcblxyXG4gICAgICAgIE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBCb290c3RyYXBNb2RhbE1vZHVsZSxcclxuXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnZGFzaGJvYXJkJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnc2FjblRyYW5zbWl0dGVyTGl2ZScsIGNvbXBvbmVudDogU0FDTlRyYW5zbWl0dGVyTGl2ZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdvc2NMaXN0ZW5lckxpdmUnLCBjb21wb25lbnQ6IE9TQ0xpc3RlbmVyTGl2ZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdzZXR0aW5ncycsIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZ3JvdXBzJywgY29tcG9uZW50OiBHcm91cHNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndmVudWVzJywgY29tcG9uZW50OiBWZW51ZXNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndmVudWVzL25ldycsIGNvbXBvbmVudDogVmVudWVFZGl0b3JDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndmVudWVzLzppZCcsIGNvbXBvbmVudDogVmVudWVFZGl0b3JDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZml4dHVyZS1kZWZpbml0aW9ucycsIGNvbXBvbmVudDogRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMvbmV3JywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmaXh0dXJlLWRlZmluaXRpb25zLzptYW51ZmFjdHVyZXIvOm1vZGVsJywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdwcmV2aWV3MmQnLCBjb21wb25lbnQ6IFByZXZpZXcyRENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdzZXRzJyB9XHJcbiAgICAgICAgXSlcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbRml4dHVyZU9wdGlvbnNFZGl0b3JDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGVcclxue1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYtbWVudT48L25hdi1tZW51PlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBib2R5LWNvbnRlbnRcXFwiPlxcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL21pbi12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuZXhwb3J0ICogZnJvbSAnLi9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBNaW5WYWx1ZVZhbGlkYXRvciB9IGZyb20gJy4vbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXhWYWx1ZVZhbGlkYXRvciB9IGZyb20gJy4vbWF4LXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1JTk1BWF9ESVJFQ1RJVkVTOiBbYW55XSA9IFtNaW5WYWx1ZVZhbGlkYXRvciwgTWF4VmFsdWVWYWxpZGF0b3JdO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvaW5kZXgudHMiLCJpbXBvcnQgeyBBdHRyaWJ1dGUsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjb25zdCBNSU5fVkFMVUVfVkFMSURBVE9SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWluVmFsdWVWYWxpZGF0b3IpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbWluXVtmb3JtQ29udHJvbE5hbWVdLFttaW5dW2Zvcm1Db250cm9sXSxbbWluXVtuZ01vZGVsXScsXHJcbiAgICBwcm92aWRlcnM6IFtNSU5fVkFMVUVfVkFMSURBVE9SXSxcclxuICAgIGhvc3Q6IHsgJ1thdHRyLm1pbl0nOiAnbWluID8gbWluIDogMCcgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1pblZhbHVlVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkNoYW5nZXNcclxue1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcclxuXHJcbiAgICBASW5wdXQoKSBtaW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQEF0dHJpYnV0ZSgnbWluJykgbW46IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAobW4gIT09IHVuZGVmaW5lZCAmJiBtbiAhPT0gbnVsbClcclxuICAgICAgICB7XHQvLyBpc1ByZXNlbnRcclxuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gcGFyc2VJbnQobW4sIDEwKTtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihhdHRyVmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbiA9IG1uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtaW5DaGFuZ2UgPSBjaGFuZ2VzWydtaW4nXTtcclxuICAgICAgICBpZiAobWluQ2hhbmdlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gTWluVmFsdWVWYWxpZGF0b3IubWluKHBhcnNlSW50KHRoaXMubWluLCAxMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0geyByZXR1cm4gdGhpcy5fdmFsaWRhdG9yKGMpOyB9XHJcblxyXG4gICAgc3RhdGljIG1pbihtbjogbnVtYmVyKTogVmFsaWRhdG9yRm5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gK2NvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiAodiA8IG1uID8geyAnbWluJzogeyAnbWluVmFsdWUnOiBtbiwgJ2FjdHVhbFZhbHVlJzogdiB9IH0gOiBudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBBdHRyaWJ1dGUsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BWF9WQUxVRV9WQUxJREFUT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXhWYWx1ZVZhbGlkYXRvciksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1ttYXhdW2Zvcm1Db250cm9sTmFtZV0sW21pbl1bZm9ybUNvbnRyb2xdLFttaW5dW25nTW9kZWxdJyxcclxuICAgIHByb3ZpZGVyczogW01BWF9WQUxVRV9WQUxJREFUT1JdLFxyXG4gICAgaG9zdDogeyAnW2F0dHIubWF4XSc6ICdtYXggPyBtYXggOiAwJyB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWF4VmFsdWVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uQ2hhbmdlc1xyXG57XHJcbiAgICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xyXG5cclxuICAgIEBJbnB1dCgpIG1heDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBAQXR0cmlidXRlKCdtYXgnKSBteDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChteCAhPT0gdW5kZWZpbmVkICYmIG14ICE9PSBudWxsKVxyXG4gICAgICAgIHtcdC8vIGlzUHJlc2VudFxyXG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBwYXJzZUludChteCwgMTApO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGF0dHJWYWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gbXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1heENoYW5nZSA9IGNoYW5nZXNbJ21heCddO1xyXG4gICAgICAgIGlmIChtYXhDaGFuZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlVmFsaWRhdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBNYXhWYWx1ZVZhbGlkYXRvci5tYXgocGFyc2VJbnQodGhpcy5tYXgsIDEwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7IHJldHVybiB0aGlzLl92YWxpZGF0b3IoYyk7IH1cclxuXHJcbiAgICBzdGF0aWMgbWF4KG14OiBudW1iZXIpOiBWYWxpZGF0b3JGblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHYgPSArY29udHJvbC52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICh2ID4gbXggPyB7ICdtYXgnOiB7ICdtYXhWYWx1ZSc6IG14LCAnYWN0dWFsVmFsdWUnOiB2IH0gfSA6IG51bGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgSW5wdXQsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdW5pcXVlXVtuZ01vZGVsXSxbdW5pcXVlXVtmb3JtQ29udHJvbF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVbmlxdWVWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWxpZGF0b3Jcclxue1xyXG4gICAgQElucHV0KCkgdW5pcXVlOiBhbnlbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMudW5pcXVlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hdGNoZXMgPSB0aGlzLnVuaXF1ZS5maWx0ZXIoKHZhbHVlOiBhbnkpID0+IGMudmFsdWUgPT09IHZhbHVlKTtcclxuICAgICAgICBpZiAoYy5kaXJ0eSAmJiBtYXRjaGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4geyB1bmlxdWU6IHsgdmFsaWQ6IGZhbHNlIH0gfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuaXF1ZS91bmlxdWUuZGlyZWN0aXZlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItbW9kYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1tb2RhbFwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudFxue1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItc3RhdGljLXRvcFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNteU5hdmJhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+IFxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPkthZG1pdW0gT1NDIERNWDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXFxcIiBpZD1cXFwibXlOYXZiYXJcXFwiPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48YSByb3V0ZXJMaW5rPVxcXCIvZGFzaGJvYXJkXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lXFxcIj48L3NwYW4+IEhvbWU8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZ1xcXCI+PC9zcGFuPiBTZXR1cFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48YSByb3V0ZXJMaW5rPVxcXCIvc2V0dGluZ3NcXFwiPlNldHRpbmdzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgcm91dGVyTGluaz1cXFwiL2dyb3Vwc1xcXCI+R3JvdXBzPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi92ZW51ZXNcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0XFxcIj48L3NwYW4+IFZlbnVlczwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvZml4dHVyZS1kZWZpbml0aW9uc1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3RcXFwiPjwvc3Bhbj4gRml4dHVyZSBEZWZpbml0aW9uczwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWNvZ1xcXCI+PC9zcGFuPiBEaWFnbm9zdGljc1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48YSByb3V0ZXJMaW5rPVxcXCIvcHJldmlldzJkXFxcIj5QcmV2aWV3PC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9uYXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gXCIuLi9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdGF0dXMtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNQYW5lbENvbXBvbmVudFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdHVzOiBTdGF0dXM7XHJcbiAgICBASW5wdXQoXCJuYW1lXCIpIG5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBuZXcgU3RhdHVzKFwiVW5rbm93blwiLCBcIlVua25vd25cIik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIFN0YXR1c1xyXG57XHJcbiAgICBzdGF0aWMgU3RhdHVzVGFibGU6IFN0YXR1c1RhYmxlID0ge1xyXG4gICAgICAgIFN1Y2Nlc3M6IHsgYWxlcnRTdHlsZTogXCJhbGVydC1zdWNjZXNzXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24tb2stc2lnblwiIH0sXHJcbiAgICAgICAgRXJyb3I6IHsgYWxlcnRTdHlsZTogXCJhbGVydC1kYW5nZXJcIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1yZW1vdmUtc2lnblwiIH0sXHJcbiAgICAgICAgV2FybmluZzogeyBhbGVydFN0eWxlOiBcImFsZXJ0LXdhcm5pbmdcIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1pbmZvLXNpZ25cIiB9LFxyXG4gICAgICAgIFVua25vd246IHsgYWxlcnRTdHlsZTogXCJhbGVydC1pbmZvXCIsIGdseXBoSWNvbjogXCJnbHlwaGljb24tcXVlc3Rpb24tc2lnblwiIH1cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNvZGU6IFN0YXR1c0NvZGU7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvZGU6IFN0YXR1c0NvZGUsIG1lc3NhZ2U6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShjb2RlOiBTdGF0dXNDb2RlLCBtZXNzYWdlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYWxlcnRTdHlsZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3RhdHVzLlN0YXR1c1RhYmxlW3RoaXMuY29kZV0uYWxlcnRTdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGdseXBoSWNvbigpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU3RhdHVzLlN0YXR1c1RhYmxlW3RoaXMuY29kZV0uZ2x5cGhJY29uO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0dXNDb2RlID0gXCJVbmtub3duXCIgfCBcIkVycm9yXCIgfCBcIlN1Y2Nlc3NcIiB8IFwiV2FybmluZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0dXNUYWJsZVxyXG57XHJcbiAgICBba2V5OiBzdHJpbmddOiBTdGF0dXNJbmZvO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzSW5mb1xyXG57XHJcbiAgICBhbGVydFN0eWxlOiBzdHJpbmc7XHJcbiAgICBnbHlwaEljb246IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHQgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj57e25hbWV9fSA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCIgW25nQ2xhc3NdPVxcXCJzdGF0dXMuYWxlcnRTdHlsZVxcXCI+XFxyXFxuICAgICAgICB7e3N0YXR1cy5tZXNzYWdlfX08YnI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIHN0YXR1cy1nbHlwaFxcXCIgW25nQ2xhc3NdPVxcXCJzdGF0dXMuZ2x5cGhJY29uXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhdHVzLWdseXBoIHtcXHJcXG4gICAgZm9udC1zaXplOiA2ZW07XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzLCBTdGF0dXNDb2RlIH0gZnJvbSBcIi4uL3N0YXR1c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21lc3NhZ2UtYmFyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCYXJDb21wb25lbnRcclxue1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlczogU3RhdHVzW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZShzdGF0dXM6IFN0YXR1cylcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm1lc3NhZ2VzLmluZGV4T2Yoc3RhdHVzKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChzdGF0dXNDb2RlOiBTdGF0dXNDb2RlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBTdGF0dXMoc3RhdHVzQ29kZSwgbWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnRcXFwiIFtuZ0NsYXNzXT1cXFwibWVzc2FnZS5hbGVydFN0eWxlXFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjbG9zZVxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlKG1lc3NhZ2UpXFxcIiBhcmlhLWxhYmVsPVxcXCJjbG9zZVxcXCI+JnRpbWVzOzwvYT5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb25cXFwiIFtuZ0NsYXNzXT1cXFwibWVzc2FnZS5nbHlwaEljb25cXFwiPjwvc3Bhbj4ge3ttZXNzYWdlLm1lc3NhZ2V9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGFiZWxsZWQtaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbGFiZWxsZWQtaW5wdXQuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxsZWRJbnB1dENvbXBvbmVudFxyXG57XHJcbiAgICBASW5wdXQoKSBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAQ29udGVudENoaWxkKFwibW9kZWxcIikgcHVibGljIG1vZGVsOiBFbGVtZW50UmVmO1xyXG4gICAgQENvbnRlbnRDaGlsZChcImlucHV0XCIpIHB1YmxpYyBpbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hhcy1lcnJvcic6IG1vZGVsLmVycm9ycyAmJiBtb2RlbC50b3VjaGVkfVxcXCI+XFxyXFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtc20tMlxcXCIgW2F0dHIuZm9yXT1cXFwiaW5wdXQubmFtZVxcXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/LnJlcXVpcmVkXFxcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ubWluXFxcIj5UaGlzIGZpZWxkIGhhcyBhIG1pbmltdW0gdmFsdWUgb2Yge3ttb2RlbC5lcnJvcnM/Lm1pbi5taW5WYWx1ZX19PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ubWF4XFxcIj5UaGlzIGZpZWxkIGhhcyBhIG1heGltdW0gdmFsdWUgb2Yge3ttb2RlbC5lcnJvcnM/Lm1heC5tYXhWYWx1ZX19PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmRpcnR5ICYmIG1vZGVsLmVycm9ycz8udW5pcXVlXFxcIj5FbnRyaWVzIGluIHRoaXMgZmllbGQgbXVzdCBiZSB1bmlxdWU8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGFibGUtaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGFibGUtaW5wdXQuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVJbnB1dENvbXBvbmVudFxyXG57XHJcbiAgICBASW5wdXQoKSBwcml2YXRlIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAQ29udGVudENoaWxkKFwibW9kZWxcIikgcHVibGljIG1vZGVsOiBFbGVtZW50UmVmO1xyXG4gICAgQENvbnRlbnRDaGlsZChcImlucHV0XCIpIHB1YmxpYyBpbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzogbW9kZWwuZXJyb3JzICYmIG1vZGVsLnRvdWNoZWQgfVxcXCI+XFxyXFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/LnJlcXVpcmVkXFxcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5taW5cXFwiPlRoaXMgZmllbGQgaGFzIGEgbWluaW11bSB2YWx1ZSBvZiB7e21vZGVsLmVycm9ycz8ubWluLm1pblZhbHVlfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/Lm1heFxcXCI+VGhpcyBmaWVsZCBoYXMgYSBtYXhpbXVtIHZhbHVlIG9mIHt7bW9kZWwuZXJyb3JzPy5tYXgubWF4VmFsdWV9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8udW5pcXVlXFxcIj5FbnRyaWVzIGluIHRoaXMgZmllbGQgbXVzdCBiZSB1bmlxdWU8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dC1ib3gnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaW5wdXQtYm94LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKFwiLi9pbnB1dC1ib3guY29tcG9uZW50LmNzc1wiKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0Qm94Q29tcG9uZW50XHJcbntcclxuICAgIGhlYWRlcjogc3RyaW5nO1xyXG4gICAgYm9keTogc3RyaW5nO1xyXG4gICAgYWNjZXB0VmVyYjogc3RyaW5nO1xyXG4gICAgY2FuY2VsVmVyYjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyB2aXNpYmxlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcblxyXG4gICAgcmVzb2x2ZTogKHZhbHVlPzogc3RyaW5nIHwgUHJvbWlzZUxpa2U8c3RyaW5nPikgPT4gdm9pZDtcclxuICAgIHJlamVjdDogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwcml2YXRlIHJlc3BvbnNlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3coaGVhZGVyOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgYWNjZXB0VmVyYjogc3RyaW5nLCBjYW5jZWxWZXJiOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz5cclxuICAgIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gICAgICAgIHRoaXMuYWNjZXB0VmVyYiA9IGFjY2VwdFZlcmI7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxWZXJiID0gY2FuY2VsVmVyYjtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmlzaWJsZUFuaW1hdGUgPSB0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUFuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmlzaWJsZSA9IGZhbHNlLCAzMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHRDbGljaygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWxDbGljaygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZWplY3QoKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwgZmFkZVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBbbmdDbGFzc109XFxcInsnaW4nOiB2aXNpYmxlQW5pbWF0ZX1cXFwiIFtuZ1N0eWxlXT1cXFwieydkaXNwbGF5JzogdmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScsICdvcGFjaXR5JzogdmlzaWJsZUFuaW1hdGUgPyAxIDogMH1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcbiAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcImNhbmNlbENsaWNrKClcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPnt7aGVhZGVyfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgW2xhYmVsXT1cXFwiYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJyZXNwb25zZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVxdWlyZWQgW25hbWVdPVxcXCJpbnB1dFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcImFjY2VwdENsaWNrKClcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPnt7YWNjZXB0VmVyYn19PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxDbGljaygpXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj57e2NhbmNlbFZlcmJ9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9pbnB1dC1ib3gvaW5wdXQtYm94LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC1ib3guY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5wdXQtYm94L2lucHV0LWJveC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXR1c1BhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFZlbnVlU2VydmljZSB9IGZyb20gXCIuLi92ZW51ZXMvdmVudWUuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzQ29kZSB9IGZyb20gXCIuLi9zdGF0dXMvc3RhdHVzXCI7XHJcblxyXG5pbXBvcnQgeyBVUkwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VybFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1ZlbnVlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcInZlbnVlXCIpIHZlbnVlOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJzYWNuVHJhbnNtaXR0ZXJcIikgc2FjblRyYW5zbWl0dGVyOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJvc2NMaXN0ZW5lclwiKSBvc2NMaXN0ZW5lcjogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiZml4dHVyZXNcIikgZml4dHVyZXM6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgd2ViU29ja2V0OiBXZWJTb2NrZXQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc29ja2V0VVJMID0gVVJMLmdldFNvY2tldFVSTChcIkRhc2hib2FyZFwiKTtcclxuICAgIHByaXZhdGUgdmVudWVOYW1lczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2ZW51ZVNlcnZpY2U6IFZlbnVlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB2ZW51ZVNlcnZpY2UuZ2V0TmFtZXMoKVxyXG4gICAgICAgICAgICAudGhlbihuYW1lcyA9PiB0aGlzLnZlbnVlTmFtZXMgPSBuYW1lcylcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgICAgIHRoaXMud2ViU29ja2V0ID0gbmV3IFdlYlNvY2tldChEYXNoYm9hcmRDb21wb25lbnQuc29ja2V0VVJMKTtcclxuICAgICAgICB0aGlzLndlYlNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXY6IE1lc3NhZ2VFdmVudCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBKU09OLnBhcnNlKGV2LmRhdGEpIGFzIFN0YXR1c0RhdGE7XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXNQYW5lbDogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzLmNvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJWZW51ZXNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMudmVudWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiU0FDTlRyYW5zbWl0dGVyc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy5zYWNuVHJhbnNtaXR0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiT1NDTGlzdGVuZXJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLm9zY0xpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRml4dHVyZXNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMuZml4dHVyZXNcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0dXNQYW5lbC5zdGF0dXMudXBkYXRlKHN0YXR1cy5jb2RlLCBzdGF0dXMubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVWZW51ZSh2ZW51ZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZlbnVlU2VydmljZVxyXG4gICAgICAgICAgICAuYWN0aXZhdGUodmVudWVOYW1lKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCB2ZW51ZU5hbWUgKyBcIiBzdWNjZXNzZnVsbHkgbG9hZGVkXCIpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdHVzRGF0YVxyXG57XHJcbiAgICBjb2RlOiBTdGF0dXNDb2RlO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgY29udHJvbGxlcjogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IFZlbnVlIH0gZnJvbSBcIi4vdmVudWVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZlbnVlU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHZlbnVlVXJsID0gXCIvYXBpL1ZlbnVlXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBzdHJpbmcpOiBQcm9taXNlPFZlbnVlPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIFZlbnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmFtZXMoKTogUHJvbWlzZTxzdHJpbmdbXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIHN0cmluZ1tdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aXZhdGUoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlVXJsICsgXCIvYWN0aXZhdGUvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dChpZDogc3RyaW5nLCB2ZW51ZTogVmVudWUpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy52ZW51ZVVybCArIFwiL1wiICsgaWQsIHZlbnVlKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy52ZW51ZVVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFVSTFxyXG57XHJcblxyXG4gICAgc3RhdGljIGdldFNvY2tldFVSTChzb2NrZXROYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgb3JpZ2luYWxVUkw6IHN0cmluZyA9IGRvY3VtZW50LlVSTDtcclxuICAgICAgICBsZXQgdXJsUGFydHM6IHN0cmluZ1tdID0gZG9jdW1lbnQuVVJMLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBsZXQgcHJvdG9jb2w6IHN0cmluZyA9IHVybFBhcnRzWzBdO1xyXG4gICAgICAgIGxldCBob3N0OiBzdHJpbmcgPSB1cmxQYXJ0c1syXTtcclxuXHJcbiAgICAgICAgbGV0IHJvb3Q6IHN0cmluZyA9IFwid3M6Ly9cIiArIGhvc3Q7XHJcblxyXG4gICAgICAgIGxldCBzb2NrZXRVUkwgPSByb290ICsgXCIvc29ja2V0L1wiICsgc29ja2V0TmFtZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNvY2tldFVSTDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QVBJVXJsKGFwaU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBvcmlnaW5hbFVSTDogc3RyaW5nID0gZG9jdW1lbnQuVVJMO1xyXG4gICAgICAgIGxldCB1cmxQYXJ0czogc3RyaW5nW10gPSBkb2N1bWVudC5VUkwuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIGxldCBwcm90b2NvbDogc3RyaW5nID0gdXJsUGFydHNbMF07XHJcbiAgICAgICAgbGV0IGhvc3Q6IHN0cmluZyA9IHVybFBhcnRzWzJdO1xyXG5cclxuICAgICAgICBsZXQgcm9vdDogc3RyaW5nID0gcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0O1xyXG5cclxuICAgICAgICBsZXQgYXBpVVJMID0gcm9vdCArIFwiL2FwaS9cIiArIGFwaU5hbWU7XHJcblxyXG4gICAgICAgIHJldHVybiBhcGlVUkw7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL3NoYXJlZC91cmwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+RGFzaGJvYXJkPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICN2ZW51ZSBuYW1lPVxcXCJWZW51ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiICpuZ0lmPVxcXCJ2ZW51ZU5hbWVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPkxvYWQgVmVudWVcXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgdmVudWVOYW1lIG9mIHZlbnVlTmFtZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImFjdGl2YXRlVmVudWUodmVudWVOYW1lKVxcXCI+e3t2ZW51ZU5hbWV9fTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI3NhY25UcmFuc21pdHRlciBuYW1lPVxcXCJzQUNOIFRyYW5zbWl0dGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvc2FjblRyYW5zbWl0dGVyTGl2ZVxcXCI+TGl2ZTwvYT5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjb3NjTGlzdGVuZXIgbmFtZT1cXFwiT1NDIExpc3RlbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvb3NjTGlzdGVuZXJMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICNmaXh0dXJlcyBuYW1lPVxcXCJGaXh0dXJlc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm91dGVyTGluaz1cXFwiL2ZpeHR1cmVzTGl2ZVxcXCI+TGl2ZTwvYT5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vc2V0dGluZ3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgVW5pY2FzdFRhcmdldCB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5cclxudmFyICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NldHRpbmdzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtTZXR0aW5nc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG4gICAgc2F2aW5nOiBib29sZWFuO1xyXG4gICAgdGVzdEVsZW1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzU2VydmljZTogU2V0dGluZ3NTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGVzdEVsZW1lbnQgPSBcInN0dWZmXCI7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU2VydmljZS5nZXQoKS50aGVuKGRhdGEgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzYXZlKCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzU2VydmljZS5zYXZlKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBcIlNhdmVkIFN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKHJlYXNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVGFyZ2V0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0LnB1c2gobmV3IFVuaWNhc3RUYXJnZXQoXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVUYXJnZXQoaW5kZXg6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlVGFyZ2V0cygpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGJhZFRhcmdldHMgPSB0aGlzLnNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0LmZpbHRlcigodmFsdWU6IFVuaWNhc3RUYXJnZXQpID0+IHZhbHVlLnRhcmdldCA9PSBcIlwiIHx8IHZhbHVlLnRhcmdldCA9PSB1bmRlZmluZWQgfHwgdmFsdWUudGFyZ2V0ID09IG51bGwpO1xyXG4gICAgICAgIHJldHVybiBiYWRUYXJnZXRzLmxlbmd0aCA9PSAwO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgU2V0dGluZ3MsIFNldHRpbmdzRGF0YSB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nc1VybCA9IFwiL2FwaS9TZXR0aW5nc1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCgpOiBQcm9taXNlPFNldHRpbmdzPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2V0dGluZ3NVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgU2V0dGluZ3NEYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5ncy5kZXNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlKGRhdGE6IFNldHRpbmdzKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnNldHRpbmdzVXJsLCBkYXRhLnNlcmlhbGl6ZSgpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IFxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpOyAvLyBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiLCJleHBvcnQgY2xhc3MgU2V0dGluZ3Ncclxue1xyXG4gICAgd2ViUG9ydDogbnVtYmVyO1xyXG4gICAgb3NjUG9ydDogbnVtYmVyO1xyXG4gICAgc2FjblRyYW5zbWl0dGVyOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53ZWJQb3J0ID0gODA7XHJcbiAgICAgICAgdGhpcy5vc2NQb3J0ID0gOTAwMDtcclxuICAgICAgICB0aGlzLnNhY25UcmFuc21pdHRlciA9IG5ldyBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemUoZGF0YTogU2V0dGluZ3NEYXRhKTogU2V0dGluZ3NcclxuICAgIHtcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcclxuICAgICAgICBzZXR0aW5ncy53ZWJQb3J0ID0gZGF0YS53ZWJQb3J0O1xyXG4gICAgICAgIHNldHRpbmdzLm9zY1BvcnQgPSBkYXRhLm9zY1BvcnQ7XHJcbiAgICAgICAgc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyID0gU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3MuZGVzZXJpYWxpemUoZGF0YS5zYWNuVHJhbnNtaXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IFNldHRpbmdzRGF0YVxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRhOiBTZXR0aW5nc0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHdlYlBvcnQ6IHRoaXMud2ViUG9ydCxcclxuICAgICAgICAgICAgb3NjUG9ydDogdGhpcy5vc2NQb3J0LFxyXG4gICAgICAgICAgICBzYWNuVHJhbnNtaXR0ZXI6IHRoaXMuc2FjblRyYW5zbWl0dGVyLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNBQ05UcmFuc21pdHRlclNldHRpbmdzXHJcbntcclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICBtdWx0aWNhc3Q6IGJvb2xlYW47XHJcbiAgICB1bmljYXN0OiBVbmljYXN0VGFyZ2V0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xyXG4gICAgICAgIHRoaXMubXVsdGljYXN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVuaWNhc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplKGRhdGE6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YSk6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRyYW5zbWl0dGVyID0gbmV3IFNBQ05UcmFuc21pdHRlclNldHRpbmdzKCk7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIuZGVsYXkgPSBkYXRhLmRlbGF5O1xyXG4gICAgICAgIHRyYW5zbWl0dGVyLm11bHRpY2FzdCA9IGRhdGEubXVsdGljYXN0O1xyXG4gICAgICAgIHRyYW5zbWl0dGVyLnVuaWNhc3QgPSBkYXRhLnVuaWNhc3QubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiBuZXcgVW5pY2FzdFRhcmdldCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc21pdHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YVxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRhOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGEgPSB7XHJcbiAgICAgICAgICAgIGRlbGF5OiB0aGlzLmRlbGF5LFxyXG4gICAgICAgICAgICBtdWx0aWNhc3Q6IHRoaXMubXVsdGljYXN0LFxyXG4gICAgICAgICAgICB1bmljYXN0OiB0aGlzLnVuaWNhc3QubWFwKCh2YWx1ZTogVW5pY2FzdFRhcmdldCkgPT4gdmFsdWUudGFyZ2V0KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbmljYXN0VGFyZ2V0XHJcbntcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NEYXRhXHJcbntcclxuICAgIHdlYlBvcnQ6IG51bWJlcjtcclxuICAgIG9zY1BvcnQ6IG51bWJlcjtcclxuICAgIHNhY25UcmFuc21pdHRlcjogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YVxyXG57XHJcbiAgICBkZWxheTogbnVtYmVyO1xyXG4gICAgbXVsdGljYXN0OiBib29sZWFuO1xyXG4gICAgdW5pY2FzdDogc3RyaW5nW107XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqcXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPlNldHRpbmdzPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48cCAqbmdJZj1cXFwiIXNldHRpbmdzXFxcIj5Mb2FkaW5nLi4uPC9wPlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJzZXR0aW5nc1xcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgI3NldHRpbmdzRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgPGZpZWxkc2V0IFtkaXNhYmxlZF09XFxcInNhdmluZ1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIkhUVFAgUG9ydDpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJ3ZWJQb3J0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNjU1MzVcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy53ZWJQb3J0XFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiXFxyXFxuICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk9TQyBQb3J0OlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcIm9zY1BvcnRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI2NTUzNVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLm9zY1BvcnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgLz5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcInNBQ04gVHJhbnNtaXR0ZXIgRGVsYXkgKG1zKTpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJzYWNuVHJhbnNtaXR0ZXJEZWxheVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwMDAwXFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLmRlbGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIC8+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJzQUNOIFRyYW5zbWl0dGVyIE11bHRpY2FzdDpcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCAjaW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInNhY25NdWx0aWNhc3RcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIubXVsdGljYXN0XFxcIiAjc2Fjbk11bHRpY2FzdD1cXFwibmdNb2RlbFxcXCIgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiA+TXVsdGljYXN0PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5zQUNOIFVuaWNhc3QgVGFyZ2V0czwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgdGFyZ2V0IG9mIHNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0OyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGNvbC1zbS04XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3RbaV0udGFyZ2V0XFxcIiBbbmFtZV09XFxcIid1bmljYXN0WycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZVRhcmdldChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZFRhcmdldCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIiBbZGlzYWJsZWRdPVxcXCIhc2V0dGluZ3NGb3JtLnZhbGlkXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgR3JvdXBTZXJ2aWNlIH0gZnJvbSBcIi4vZ3JvdXAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL2dyb3VwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JvdXBzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2dyb3Vwcy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbR3JvdXBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcblxyXG4gICAgc2F2aW5nOiBib29sZWFuO1xyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvdXBzU2VydmljZTogR3JvdXBTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ncm91cHNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IEdyb3VwW10pID0+IHRoaXMuZ3JvdXBzID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzLnB1c2gobmV3IEdyb3VwKFwiXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZShncm91cDogR3JvdXApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XHJcbiAgICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmUoZ3JvdXA6IEdyb3VwLCBvZmZzZXQ6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkX2luZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XHJcbiAgICAgICAgbGV0IG5ld19pbmRleCA9IG9sZF9pbmRleCArIG9mZnNldDtcclxuXHJcbiAgICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKG5ld19pbmRleCwgMCwgdGhpcy5ncm91cHMuc3BsaWNlKG9sZF9pbmRleCwgMSlbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGUoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdyb3Vwcy5ldmVyeSgodmFsdWU6IEdyb3VwKSA9PiB2YWx1ZS5uYW1lICE9IFwiXCIgJiYgdmFsdWUubmFtZSAhPSB1bmRlZmluZWQgJiYgdmFsdWUubmFtZSAhPSBudWxsKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGdyb3VwTmFtZXMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHMubWFwKCh2YWx1ZTogR3JvdXApID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2F2ZSgpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5ncm91cHNTZXJ2aWNlLnB1dCh0aGlzLmdyb3Vwcyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIFwiU2F2ZWQgc3VjY2Vzc2Z1bGx5XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChyZWFzb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4vZ3JvdXBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyb3VwU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIGdyb3Vwc1VybCA9IFwiL2FwaS9Hcm91cFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCgpOiBQcm9taXNlPEdyb3VwW10+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ncm91cHNVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiBuZXcgR3JvdXAodmFsdWUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dChncm91cHM6IEdyb3VwW10pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5ncm91cHNVcmwsIGdyb3Vwcy5tYXAoKHZhbHVlOiBHcm91cCkgPT4gdmFsdWUubmFtZSkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIEdyb3VwXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5Hcm91cHM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJncm91cHNcXFwiICNncm91cHNGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JkZXI8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBncm91cCBvZiBncm91cHM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKGNsaWNrKT1cXFwibW92ZShncm91cCwgLTEpXFxcIiBbZGlzYWJsZWRdPVxcXCJpID09IDBcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAoY2xpY2spPVxcXCJtb3ZlKGdyb3VwLCAxKVxcXCIgW2Rpc2FibGVkXT1cXFwiaSA9PSBncm91cHMubGVuZ3RoIC0gMVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93blxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBbdW5pcXVlXT1cXFwiZ3JvdXBOYW1lc1xcXCIgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImdyb3VwLm5hbWVcXFwiIFtuYW1lXT1cXFwiJ2dyb3VwTmFtZVsnICsgaSArICddJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZShncm91cClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj4gQWRkPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgW2Rpc2FibGVkXT1cXFwiIWdyb3Vwc0Zvcm0udmFsaWRcXFwiIChjbGljayk9XFxcInNhdmUoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgVmVudWVTZXJ2aWNlIH0gZnJvbSBcIi4vdmVudWUuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ZlbnVlcycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92ZW51ZXMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1ZlbnVlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbnVlc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgdmVudWVzOiBWZW51ZVNrZWxldG9uW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2ZW51ZVNlcnZpY2U6IFZlbnVlU2VydmljZSwgb3ZlcmxheTogT3ZlcmxheSwgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsKVxyXG4gICAge1xyXG4gICAgICAgIG92ZXJsYXkuZGVmYXVsdFZpZXdDb250YWluZXIgPSB2Y1JlZjtcclxuICAgICAgICB0aGlzLnZlbnVlU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0TmFtZXMoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IHN0cmluZ1tdKSA9PiB0aGlzLnZlbnVlcyA9IHZhbHVlLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2tlbGV0b24gPSBuZXcgVmVudWVTa2VsZXRvbigpO1xyXG4gICAgICAgICAgICAgICAgc2tlbGV0b24ubmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNrZWxldG9uO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFZGl0VXJsKGVudHJ5OiBWZW51ZVNrZWxldG9uKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcInZlbnVlcy9cIiArIGVudHJ5Lm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBkZWxldGVDb25maXJtKGluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZlbnVlID0gdGhpcy52ZW51ZXNbaW5kZXhdO1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gYXdhaXQgdGhpcy5tb2RhbFxyXG4gICAgICAgICAgICAuY29uZmlybSgpXHJcbiAgICAgICAgICAgIC50aXRsZShcIkFyZSB5b3Ugc3VyZT9cIilcclxuICAgICAgICAgICAgLmJvZHkoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiICsgdmVudWUubmFtZSArIFwiP1wiKVxyXG4gICAgICAgICAgICAuaXNCbG9ja2luZyh0cnVlKVxyXG4gICAgICAgICAgICAub3BlbigpO1xyXG5cclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBwcm9taXNlLnJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJ5IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudmVudWVTZXJ2aWNlLmRlbGV0ZSh2ZW51ZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbnVlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIHZlbnVlLm5hbWUgKyBcIiBzdWNjZXNzZnVsbHkgcmVtb3ZlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZXJyb3JzIGFyZSBnZW5lcmF0ZWQgd2hlbiB0aGUgbWVzc2FnZSBib3ggaXMgY2FuY2VsbGVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBWZW51ZVNrZWxldG9uXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5WZW51ZXM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCIgKm5nSWY9XFxcInZlbnVlc1xcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+VmVudWU8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiB2ZW51ZXM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD57e2VudHJ5Lm5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2hyZWZdPVxcXCJnZXRFZGl0VXJsKGVudHJ5KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGVDb25maXJtKGkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUJhckNvbXBvbmVudCB9IGZyb20gXCIuLi9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVuaXZlcnNlRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElucHV0Qm94Q29tcG9uZW50IH0gZnJvbSBcIi4uL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBWZW51ZSwgVW5pdmVyc2UsIEZpeHR1cmUgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuaW1wb3J0IHsgVmVudWVTZXJ2aWNlIH0gZnJvbSBcIi4vdmVudWUuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ZlbnVlLWVkaXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92ZW51ZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1ZlbnVlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbnVlRWRpdG9yQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwidW5pdmVyc2VFZGl0b3JcIikgdW5pdmVyc2VFZGl0b3I6IFVuaXZlcnNlRWRpdG9yQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImlucHV0Qm94XCIpIGlucHV0Qm94OiBJbnB1dEJveENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJmaXh0dXJlT3B0aW9uc0VkaXRvclwiKSBmaXh0dXJlT3B0aW9uc0VkaXRvcjogRml4dHVyZU9wdGlvbnNFZGl0b3JDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbE5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2F2aW5nOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgdmVudWU6IFZlbnVlO1xyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRVbml2ZXJzZTogVW5pdmVyc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgdmVudWVTZXJ2aWNlOiBWZW51ZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcclxuICAgICAgICBpZiAodGhpcy5pc05ld0l0ZW0oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmVudWUgPSBuZXcgVmVudWUoKTtcclxuICAgICAgICAgICAgbGV0IHVuaXZlcnNlID0gbmV3IFVuaXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHVuaXZlcnNlLm5hbWUgPSBcIkRlZmF1bHQgVW5pdmVyc2VcIjtcclxuICAgICAgICAgICAgdW5pdmVyc2UudW5pdmVyc2VJRCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMudmVudWUudW5pdmVyc2VzLnB1c2godW5pdmVyc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVW5pdmVyc2UgPSB1bml2ZXJzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52ZW51ZVNlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5nZXQodGhpcy5vcmlnaW5hbE5hbWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodmFsdWU6IFZlbnVlKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVudWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVW5pdmVyc2UgPSB0aGlzLnZlbnVlLnVuaXZlcnNlcy5sZW5ndGggPiAwID8gdGhpcy52ZW51ZS51bml2ZXJzZXNbMF0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNOZXdJdGVtKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbE5hbWUgPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFVuaXZlcnNlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgdW5pdmVyc2UgPSBuZXcgVW5pdmVyc2UoKTtcclxuICAgICAgICB1bml2ZXJzZS5uYW1lID0gXCJOZXcgVW5pdmVyc2VcIjtcclxuICAgICAgICBsZXQgbWF4TnVtYmVyID0gMDtcclxuICAgICAgICB0aGlzLnZlbnVlLnVuaXZlcnNlcy5mb3JFYWNoKHZhbHVlID0+IHsgaWYgKHZhbHVlLnVuaXZlcnNlSUQgPiBtYXhOdW1iZXIpIHsgbWF4TnVtYmVyID0gdmFsdWUudW5pdmVyc2VJRCB9IH0pO1xyXG4gICAgICAgIHVuaXZlcnNlLnVuaXZlcnNlSUQgPSBtYXhOdW1iZXIgKyAxO1xyXG4gICAgICAgIHRoaXMudmVudWUudW5pdmVyc2VzLnB1c2godW5pdmVyc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlVW5pdmVyc2UoaW5kZXg6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgdW5pdmVyc2UgPSB0aGlzLnZlbnVlLnVuaXZlcnNlc1tpbmRleF07XHJcbiAgICAgICAgdGhpcy52ZW51ZS51bml2ZXJzZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFVuaXZlcnNlID09IHVuaXZlcnNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVuaXZlcnNlID0gdGhpcy52ZW51ZS51bml2ZXJzZXNbaW5kZXggLSAxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzYXZlKCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMuaXNOZXdJdGVtKCkgPyB0aGlzLnZlbnVlLm5hbWUgOiB0aGlzLm9yaWdpbmFsTmFtZTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudmVudWVTZXJ2aWNlLnB1dCh0aGlzLm9yaWdpbmFsTmFtZSwgdGhpcy52ZW51ZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvdmVudWVzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtZWRpdG9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IElucHV0Qm94Q29tcG9uZW50IH0gZnJvbSBcIi4uL2lucHV0LWJveC9pbnB1dC1ib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcgfSBmcm9tIFwiYW5ndWxhcjItbW9kYWxcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIlxyXG5pbXBvcnQgeyBWZW51ZVByZXNldFNlcnZpY2UgfSBmcm9tIFwiLi92ZW51ZS1wcmVzZXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcm91cFNlcnZpY2UgfSBmcm9tIFwiLi4vZ3JvdXBzL2dyb3VwLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24gfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgVW5pdmVyc2UsIEZpeHR1cmUsIEZpeHR1cmVEZWZpbml0aW9uT3B0aW9ucywgVmVudWVQcmVzZXQgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3VuaXZlcnNlLWVkaXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC5jc3MnKV0sXHJcbiAgICBwcm92aWRlcnM6IFtGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLCBWZW51ZVByZXNldFNlcnZpY2UsIEdyb3VwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlRWRpdG9yQ29tcG9uZW50XHJcbntcclxuICAgIEBJbnB1dChcInVuaXZlcnNlXCIpIHVuaXZlcnNlOiBVbml2ZXJzZTtcclxuICAgIEBJbnB1dChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBJbnB1dChcImlucHV0Qm94XCIpIGlucHV0Qm94OiBJbnB1dEJveENvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkRml4dHVyZTogRml4dHVyZTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRGaXh0dXJlczogRml4dHVyZVtdO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZFByZXNldE5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2tlbGV0b25zOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW107XHJcbiAgICBwcml2YXRlIHZlbnVlUHJlc2V0TmFtZXM6IHN0cmluZ1tdO1xyXG4gICAgcHJpdmF0ZSBncm91cHM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZml4dHVyZURlZmluaXRpb25zU2VydmljZTogRml4dHVyZURlZmluaXRpb25zU2VydmljZSwgcHJpdmF0ZSB2ZW51ZVByZXNldFNlcnZpY2U6IFZlbnVlUHJlc2V0U2VydmljZSwgcHJpdmF0ZSBncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSxcclxuICAgICAgICBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbClcclxuICAgIHtcclxuICAgICAgICBvdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyID0gdmNSZWY7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpeHR1cmVzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpeHR1cmUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmVudWVQcmVzZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXROYW1lcygpXHJcbiAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHRoaXMudmVudWVQcmVzZXROYW1lcyA9IHZhbHVlKVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVhc29uID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgICAgICB0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldFNrZWxldG9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4gdGhpcy5za2VsZXRvbnMgPSB2YWx1ZSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgdGhpcy5ncm91cFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHRoaXMuZ3JvdXBzID0gdmFsdWUubWFwKGdycCA9PiBncnAubmFtZSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVtb3ZlRml4dHVyZShpbmRleDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBmaXh0dXJlID0gdGhpcy51bml2ZXJzZS5maXh0dXJlc1tpbmRleF07XHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBhd2FpdCB0aGlzLm1vZGFsLmNvbmZpcm0oKVxyXG4gICAgICAgICAgICAudGl0bGUoXCJBcmUgeW91IHN1cmU/XCIpXHJcbiAgICAgICAgICAgIC5ib2R5KFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBcIiArIGZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXIgKyBcIiBcIiArIGZpeHR1cmUudHlwZS5tb2RlbCArIFwiP1wiKVxyXG4gICAgICAgICAgICAuaXNCbG9ja2luZyh0cnVlKVxyXG4gICAgICAgICAgICAub3BlbigpO1xyXG5cclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBwcm9taXNlLnJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bml2ZXJzZS5maXh0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZXJyb3JzIGFyZSBnZW5lcmF0ZWQgd2hlbiB0aGUgbWVzc2FnZSBib3ggaXMgY2FuY2VsbGVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRml4dHVyZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGZpeHR1cmUgPSBuZXcgRml4dHVyZSgpO1xyXG4gICAgICAgIGZpeHR1cmUuZ3JvdXAgPSB0aGlzLmdyb3Vwc1swXTtcclxuICAgICAgICB0aGlzLnVuaXZlcnNlLmZpeHR1cmVzLnB1c2goZml4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpeHR1cmUgPSBmaXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNTZWxlY3RlZChmaXh0dXJlOiBGaXh0dXJlKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRml4dHVyZXMuaW5kZXhPZihmaXh0dXJlKSAhPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdEZpeHR1cmUoZml4dHVyZTogRml4dHVyZSwgc2VsZWN0ZWQ6IGJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEZpeHR1cmVzLmluZGV4T2YoZml4dHVyZSk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkICYmIGluZGV4ID09IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpeHR1cmVzLnB1c2goZml4dHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFzZWxlY3RlZCAmJiBpbmRleCAhPSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaXh0dXJlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNhdmVQcmVzZXQoKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBwcmVzZXQgPSBuZXcgVmVudWVQcmVzZXQoKTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByZXNldC5uYW1lID0gYXdhaXQgdGhpcy5pbnB1dEJveC5zaG93KFwiU2VsZWN0IGEgbmFtZVwiLCBcIk5hbWU6XCIsIFwiU2F2ZVwiLCBcIkNhbmNlbFwiKTtcclxuICAgICAgICAgICAgcHJlc2V0LmZpeHR1cmVzID0gdGhpcy5zZWxlY3RlZEZpeHR1cmVzO1xyXG4gICAgICAgICAgICB0aGlzLnZlbnVlUHJlc2V0U2VydmljZVxyXG4gICAgICAgICAgICAgICAgLnB1dChwcmVzZXQubmFtZSwgcHJlc2V0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRml4dHVyZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBwcmVzZXQubmFtZSArIFwiIHNhdmVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbnVlUHJlc2V0TmFtZXMucHVzaChwcmVzZXQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7IH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQcmVzZXQobmFtZTogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmVudWVQcmVzZXRTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQobmFtZSlcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBWZW51ZVByZXNldCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZml4dHVyZSBvZiB2YWx1ZS5maXh0dXJlcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXZlcnNlLmZpeHR1cmVzLnB1c2goZml4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVtb3ZlUHJlc2V0KG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IGF3YWl0IHRoaXMubW9kYWwuY29uZmlybSgpXHJcbiAgICAgICAgICAgIC50aXRsZShcIkFyZSB5b3Ugc3VyZT9cIilcclxuICAgICAgICAgICAgLmJvZHkoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiICsgbmFtZSArIFwiP1wiKVxyXG4gICAgICAgICAgICAuaXNCbG9ja2luZyh0cnVlKVxyXG4gICAgICAgICAgICAub3BlbigpO1xyXG5cclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBwcm9taXNlLnJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJ5IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudmVudWVQcmVzZXRTZXJ2aWNlLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnZlbnVlUHJlc2V0TmFtZXMuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbnVlUHJlc2V0TmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBuYW1lICsgXCIgc3VjY2Vzc2Z1bGx5IHJlbW92ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2Vycm9ycyBhcmUgZ2VuZXJhdGVkIHdoZW4gdGhlIG1lc3NhZ2UgYm94IGlzIGNhbmNlbGxlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiwgRml4dHVyZURlZmluaXRpb24sIEZpeHR1cmVEZWZpbml0aW9uRGF0YSB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIGZpeHR1cmVEZWZpbml0aW9uc1VybCA9IFwiL2FwaS9GaXh0dXJlRGVmaW5pdGlvblwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldFNrZWxldG9ucygpOiBQcm9taXNlPEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQobWFudWZhY3R1cmVyOiBzdHJpbmcsIG1vZGVsOiBzdHJpbmcpOiBQcm9taXNlPEZpeHR1cmVEZWZpbml0aW9uPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsICsgXCIvXCIgKyBtYW51ZmFjdHVyZXIgKyBcIi9cIiArIG1vZGVsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIEZpeHR1cmVEZWZpbml0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRml4dHVyZURlZmluaXRpb24ubG9hZChkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dChtYW51ZmFjdHVyZXI6IHN0cmluZywgbW9kZWw6IHN0cmluZywgZGVmaW5pdGlvbjogRml4dHVyZURlZmluaXRpb24pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5maXh0dXJlRGVmaW5pdGlvbnNVcmwgKyBcIi9cIiArIG1hbnVmYWN0dXJlciArIFwiL1wiICsgbW9kZWwsIGRlZmluaXRpb24pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoZml4dHVyZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1VybCArIFwiL1wiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIi9cIiArIGZpeHR1cmUubW9kZWwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uIGltcGxlbWVudHMgRml4dHVyZURlZmluaXRpb25EYXRhXHJcbntcclxuICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogXCJMRURcIiB8IFwiVHVuZ3N0ZW5cIiB8IFwiRWZmZWN0XCI7XHJcblxyXG4gICAgY2hhbm5lbHM6IERNWENoYW5uZWxbXTtcclxuICAgIG1vdmVtZW50czogQXhpc1tdO1xyXG4gICAgY29sb3JXaGVlbDogQ29sb3JXaGVlbEVudHJ5W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tYW51ZmFjdHVyZXIgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiTEVEXCI7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IFtdO1xyXG4gICAgICAgIHRoaXMubW92ZW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xvcldoZWVsID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQoZGF0YTogRml4dHVyZURlZmluaXRpb25EYXRhKTogRml4dHVyZURlZmluaXRpb25cclxuICAgIHtcclxuICAgICAgICBsZXQgZGVmaW5pdGlvbiA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmaW5pdGlvbiwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRml4dHVyZURlZmluaXRpb25EYXRhXHJcbntcclxuICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogXCJMRURcIiB8IFwiVHVuZ3N0ZW5cIiB8IFwiRWZmZWN0XCI7XHJcblxyXG4gICAgY2hhbm5lbHM6IERNWENoYW5uZWxbXTtcclxuICAgIG1vdmVtZW50czogQXhpc1tdO1xyXG4gICAgY29sb3JXaGVlbDogQ29sb3JXaGVlbEVudHJ5W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uXHJcbntcclxuICAgIHB1YmxpYyBtYW51ZmFjdHVyZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBtb2RlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRE1YQ2hhbm5lbFxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkbXg6IG51bWJlcjtcclxuICAgIG1pbjogbnVtYmVyO1xyXG4gICAgbWF4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgZG14PzogbnVtYmVyLCBtaW4/OiBudW1iZXIsIG1heD86IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lID8gbmFtZSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5kbXggPSBkbXggPyBkbXggOiAxO1xyXG4gICAgICAgIHRoaXMubWluID0gbWluID8gbWluIDogMDtcclxuICAgICAgICB0aGlzLm1heCA9IG1heCA/IG1heCA6IDI1NTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF4aXNcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yV2hlZWxFbnRyeVxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkbXhTdGFydDogbnVtYmVyO1xyXG4gICAgZG14RW5kOiBudW1iZXI7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIGRteFN0YXJ0PzogbnVtYmVyLCBkbXhFbmQ/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgPyBuYW1lIDogXCJcIjtcclxuICAgICAgICB0aGlzLmRteFN0YXJ0ID0gZG14U3RhcnQgPyBkbXhTdGFydCA6IDA7XHJcbiAgICAgICAgdGhpcy5kbXhFbmQgPSBkbXhFbmQgPyBkbXhFbmQgOiAyNTU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yID8gY29sb3IgOiBcIjAwMDAwMFwiO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IFZlbnVlUHJlc2V0IH0gZnJvbSBcIi4vdmVudWVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZlbnVlUHJlc2V0U2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIHZlbnVlUHJlc2V0VXJsID0gXCIvYXBpL1ZlbnVlUHJlc2V0XCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGlkOiBzdHJpbmcpOiBQcm9taXNlPFZlbnVlUHJlc2V0PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVQcmVzZXRVcmwgKyBcIi9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIFZlbnVlUHJlc2V0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmFtZXMoKTogUHJvbWlzZTxzdHJpbmdbXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlUHJlc2V0VXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIHN0cmluZ1tdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aXZhdGUoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnZlbnVlUHJlc2V0VXJsICsgXCIvYWN0aXZhdGUvXCIgKyBpZClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dChpZDogc3RyaW5nLCB2ZW51ZVByZXNldDogVmVudWVQcmVzZXQpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy52ZW51ZVByZXNldFVybCArIFwiL1wiICsgaWQsIHZlbnVlUHJlc2V0KVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy52ZW51ZVByZXNldFVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1wcmVzZXQuc2VydmljZS50cyIsImltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24gfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZW51ZVxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB1bml2ZXJzZXM6IFVuaXZlcnNlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51bml2ZXJzZXMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHVuaXZlcnNlSUQ6IG51bWJlcjtcclxuICAgIGZpeHR1cmVzOiBGaXh0dXJlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51bml2ZXJzZUlEID0gMTtcclxuICAgICAgICB0aGlzLmZpeHR1cmVzID0gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlXHJcbntcclxuICAgIGNoYW5uZWw6IG51bWJlcjtcclxuICAgIGdyb3VwOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uO1xyXG4gICAgb3B0aW9uczogRml4dHVyZURlZmluaXRpb25PcHRpb25zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uT3B0aW9ucygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb25PcHRpb25zXHJcbntcclxuICAgIG1heEJyaWdodG5lc3M6IG51bWJlcjtcclxuICAgIGF4aXNJbnZlcnNpb25zOiBzdHJpbmdbXTtcclxuICAgIGF4aXNSZXN0cmljdGlvbnM6IEF4aXNSZXN0cmljdGlvbk9wdGlvbnNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYXhCcmlnaHRuZXNzID0gMTtcclxuICAgICAgICB0aGlzLmF4aXNJbnZlcnNpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5heGlzUmVzdHJpY3Rpb25zID0gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBeGlzUmVzdHJpY3Rpb25PcHRpb25zXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG1pbjogbnVtYmVyO1xyXG4gICAgbWF4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5taW4gPSAwO1xyXG4gICAgICAgIHRoaXMubWF4ID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlbnVlUHJlc2V0XHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGZpeHR1cmVzOiBGaXh0dXJlW107XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgcm9sZT1cXFwidGFicGFuZWxcXFwiICpuZ0lmPVxcXCJ1bml2ZXJzZSAmJiBza2VsZXRvbnNcXFwiPlxcclxcbiAgICA8IS0tIE5hdiB0YWJzIC0tPlxcclxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCIgcm9sZT1cXFwidGFibGlzdFxcXCI+XFxyXFxuICAgICAgICA8bGkgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IHNlbGVjdGVkRml4dHVyZSA9PSBudWxsfVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2VsZWN0ZWRGaXh0dXJlID0gbnVsbFxcXCI+Rml4dHVyZXM8L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IGZpeHR1cmUgb2YgdW5pdmVyc2UuZml4dHVyZXM7IGxldCBpID0gaW5kZXhcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOiBzZWxlY3RlZEZpeHR1cmUgPT0gZml4dHVyZX1cXFwiPlxcclxcbiAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNlbGVjdGVkRml4dHVyZSA9IGZpeHR1cmVcXFwiPnt7Zml4dHVyZS5jaGFubmVsfX0ge3tmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyfX0ge3tmaXh0dXJlLnR5cGUubW9kZWx9fVxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiIChjbGljayk9XFxcInJlbW92ZUZpeHR1cmUoaSlcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG5cXFwiIChjbGljayk9XFxcImFkZEZpeHR1cmUoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgIDwvdWw+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCIgKm5nSWY9XFxcInVuaXZlcnNlICYmIHNrZWxldG9ucyAmJiBzZWxlY3RlZEZpeHR1cmUgPT0gbnVsbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TZWxlY3RlZDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNoYW5uZWw8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYW51ZmFjdHVyZXI8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb2RlbDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdyb3VwPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBmaXh0dXJlIG9mIHVuaXZlcnNlLmZpeHR1cmVzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFtuZ01vZGVsXT1cXFwiaXNTZWxlY3RlZChmaXh0dXJlKVxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJzZWxlY3RGaXh0dXJlKGZpeHR1cmUsICRldmVudClcXFwiIFtuYW1lXT1cXFwiJ3NlbGVjdGVkWycgKyBpICsgJ10nXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2ZpeHR1cmUuY2hhbm5lbH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2ZpeHR1cmUudHlwZS5tb2RlbH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tmaXh0dXJlLmdyb3VwfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS0yXFxcIiBmb3I9XFxcInNlbGVjdGVkUHJlc2V0XFxcIj5QcmVzZXQ6PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFByZXNldE5hbWVcXFwiIG5hbWU9XFxcInNlbGVjdGVkUHJlc2V0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgdmVudWVQcmVzZXROYW1lIG9mIHZlbnVlUHJlc2V0TmFtZXNcXFwiPnt7dmVudWVQcmVzZXROYW1lfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wtc20tMlxcXCIgZm9yPVxcXCJzZWxlY3RlZFByZXNldFxcXCI+QWN0aW9uczo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBbZGlzYWJsZWRdPVxcXCJzZWxlY3RlZFByZXNldE5hbWUgPT0gbnVsbFxcXCIgKGNsaWNrKT1cXFwibG9hZFByZXNldChzZWxlY3RlZFByZXNldE5hbWUpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1vcGVuXFxcIj48L3NwYW4+IExvYWRcXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBbZGlzYWJsZWRdPVxcXCJzZWxlY3RlZEZpeHR1cmVzLmxlbmd0aCA9PSAwXFxcIiAoY2xpY2spPVxcXCJzYXZlUHJlc2V0KClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LXNhdmVcXFwiPjwvc3Bhbj4gU2F2ZSBBc1xcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgW2Rpc2FibGVkXT1cXFwic2VsZWN0ZWRQcmVzZXROYW1lID09IG51bGxcXFwiIChjbGljayk9XFxcInJlbW92ZVByZXNldChzZWxlY3RlZFByZXNldE5hbWUpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPiBEZWxldGVcXHJcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGZpeHR1cmUtb3B0aW9ucy1lZGl0b3IgI2ZpeHR1cmVPcHRpb25zRWRpdG9yIFtmaXh0dXJlXT1cXFwic2VsZWN0ZWRGaXh0dXJlXFxcIj48L2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3I+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdW5pdmVyc2UtZWRpdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3VuaXZlcnNlLWVkaXRvci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb2RhbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy91bml2ZXJzZS1lZGl0b3IuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JvdXBTZXJ2aWNlIH0gZnJvbSBcIi4uL2dyb3Vwcy9ncm91cC5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuLi9ncm91cHMvZ3JvdXBcIjtcclxuaW1wb3J0IHsgRml4dHVyZSwgRml4dHVyZURlZmluaXRpb25PcHRpb25zLCBBeGlzUmVzdHJpY3Rpb25PcHRpb25zIH0gZnJvbSBcIi4vdmVudWVcIjtcclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb24sIEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24gfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaXh0dXJlLW9wdGlvbnMtZWRpdG9yJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoXCIuL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LmNzc1wiKV0sXHJcbiAgICBwcm92aWRlcnM6IFtGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLCBHcm91cFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlT3B0aW9uc0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xyXG57XHJcbiAgICBASW5wdXQoXCJmaXh0dXJlXCIpIGZpeHR1cmU6IEZpeHR1cmU7XHJcbiAgICBwdWJsaWMgdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB2aXNpYmxlQW5pbWF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYXhpc09wdGlvbnM6IEF4aXNPcHRpb25zW107XHJcblxyXG4gICAgcHJpdmF0ZSBkZWZpbml0aW9uOiBGaXh0dXJlRGVmaW5pdGlvbjtcclxuICAgIHByaXZhdGUgc2tlbGV0b25zOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW107XHJcbiAgICBwcml2YXRlIGdyb3VwczogR3JvdXBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2U6IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UsIHByaXZhdGUgZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ncm91cFNlcnZpY2VcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHRoaXMuZ3JvdXBzID0gdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U2tlbGV0b25zKClcclxuICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4gdGhpcy5za2VsZXRvbnMgPSB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZihjaGFuZ2VzW1wiZml4dHVyZVwiXSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGZpeHR1cmVDaGFuZ2VzID0gY2hhbmdlc1tcImZpeHR1cmVcIl07XHJcbiAgICAgICAgICAgIGlmKGZpeHR1cmVDaGFuZ2VzLmN1cnJlbnRWYWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZml4dHVyZTogRml4dHVyZSA9IGZpeHR1cmVDaGFuZ2VzLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKGZpeHR1cmUudHlwZS5tYW51ZmFjdHVyZXIgPT0gbnVsbCB8fCBmaXh0dXJlLnR5cGUubW9kZWwgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyID0gdGhpcy5nZXRNYW51ZmFjdHVyZXJzKClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZml4dHVyZS50eXBlLm1vZGVsID0gdGhpcy5nZXRNb2RlbHMoZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlcilbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmluaXRpb24oZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlciwgZml4dHVyZS50eXBlLm1vZGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF4aXNPcHRpb25zID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RNYW51ZmFjdHVyZXIobWFudWZhY3R1cmVyOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlLnR5cGUubW9kZWwgPSB0aGlzLmdldE1vZGVscyhtYW51ZmFjdHVyZXIpWzBdO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGVmaW5pdGlvbihtYW51ZmFjdHVyZXIsIHRoaXMuZml4dHVyZS50eXBlLm1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1vdmluZygpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1hbnVmYWN0dXJlcnMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5za2VsZXRvbnNcclxuICAgICAgICAgICAgLm1hcCgodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pID0+IHZhbHVlLm1hbnVmYWN0dXJlcilcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUsIGluZGV4LCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT0gaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TW9kZWxzKG1hbnVmYWN0dXJlcjogc3RyaW5nKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5za2VsZXRvbnNcclxuICAgICAgICAgICAgLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS5tYW51ZmFjdHVyZXIgPT0gbWFudWZhY3R1cmVyKVxyXG4gICAgICAgICAgICAubWFwKHZhbHVlID0+IHZhbHVlLm1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZURlZmluaXRpb24obWFudWZhY3R1cmVyOiBzdHJpbmcsIG1vZGVsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgaWYobWFudWZhY3R1cmVyICE9IG51bGwgJiYgbW9kZWwgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1vZGVsID0gdGhpcy5nZXRNb2RlbHMobWFudWZhY3R1cmVyKVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWFudWZhY3R1cmVyICE9IG51bGwgJiYgbW9kZWwgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IGF3YWl0IHRoaXMuZml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLmdldChtYW51ZmFjdHVyZXIsIG1vZGVsKTtcclxuICAgICAgICAgICAgdGhpcy5heGlzT3B0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHNcclxuICAgICAgICAgICAgICAgIC5tYXAodmFsdWUgPT4gbmV3IEF4aXNPcHRpb25zKHZhbHVlLm5hbWUsIHRoaXMuZml4dHVyZSwgdGhpcy5kZWZpbml0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpc09wdGlvbnMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEF4aXNPcHRpb25zXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIFxyXG4gICAgZml4dHVyZTogRml4dHVyZTtcclxuICAgIGRlZmluaXRpb246IEZpeHR1cmVEZWZpbml0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZml4dHVyZTogRml4dHVyZSwgZGVmaW5pdGlvbjogRml4dHVyZURlZmluaXRpb24pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmZpeHR1cmUgPSBmaXh0dXJlO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtaW4oKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMuZmluZCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IHRoaXMubmFtZSkubWluO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLmZpbmQodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0aGlzLm5hbWUpLm1heDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJlc3RyaWN0aW9uTWluKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucmVzdHJpY3RlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN0cmljdGlvbiA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMuZmluZCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IHRoaXMubmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN0cmljdGlvbi5taW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1pbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCByZXN0cmljdGlvbk1pbih2YWx1ZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucmVzdHJpY3RlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN0cmljdGlvbiA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMuZmluZCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IHRoaXMubmFtZSk7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0aW9uLm1pbiA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJlc3RyaWN0aW9uTWF4KCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucmVzdHJpY3RlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN0cmljdGlvbiA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMuZmluZCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IHRoaXMubmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN0cmljdGlvbi5tYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1heDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCByZXN0cmljdGlvbk1heCh2YWx1ZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucmVzdHJpY3RlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN0cmljdGlvbiA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMuZmluZCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IHRoaXMubmFtZSk7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0aW9uLm1heCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGludmVydGVkKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgbWF0Y2ggPSB0aGlzLmZpeHR1cmUub3B0aW9ucy5heGlzSW52ZXJzaW9ucy5maW5kKHZhbHVlID0+IHZhbHVlID09IHRoaXMubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBpbnZlcnRlZCh2YWx1ZTogYm9vbGVhbilcclxuICAgIHtcclxuICAgICAgICBpZih2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNJbnZlcnNpb25zLnB1c2godGhpcy5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc0ludmVyc2lvbnMuaW5kZXhPZih0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICBpZihpbmRleCAhPSAtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc0ludmVyc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJlc3RyaWN0ZWQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBtYXRjaCA9IHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMuZmluZCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IHRoaXMubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCByZXN0cmljdGVkKHZhbHVlOiBib29sZWFuKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgQXhpc1Jlc3RyaWN0aW9uT3B0aW9ucygpO1xyXG4gICAgICAgICAgICBvcHRpb25zLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWluID0gdGhpcy5taW47XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWF4ID0gdGhpcy5tYXg7XHJcbiAgICAgICAgICAgIHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMucHVzaChvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlc3RyaWN0aW9uID0gdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc1Jlc3RyaWN0aW9ucy5maW5kKHZhbHVlID0+IHZhbHVlLm5hbWUgPT0gdGhpcy5uYW1lKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maXh0dXJlLm9wdGlvbnMuYXhpc1Jlc3RyaWN0aW9ucy5pbmRleE9mKHJlc3RyaWN0aW9uKTtcclxuICAgICAgICAgICAgaWYoaW5kZXggIT0gLTEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4dHVyZS5vcHRpb25zLmF4aXNSZXN0cmljdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL2ZpeHR1cmUtb3B0aW9ucy1lZGl0b3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiICpuZ0lmPVxcXCJmaXh0dXJlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAjZWRpdG9yRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZmllbGRzZXQgbmFtZT1cXFwiY29tbW9uRmllbGRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJNYW51ZmFjdHVyZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBuYW1lPVxcXCJtYW51ZmFjdHVyZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcInNlbGVjdE1hbnVmYWN0dXJlcigkZXZlbnQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1hbnVmYWN0dXJlciBvZiBnZXRNYW51ZmFjdHVyZXJzKClcXFwiPnt7bWFudWZhY3R1cmVyfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk1vZGVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgbmFtZT1cXFwibW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLnR5cGUubW9kZWxcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwidXBkYXRlRGVmaW5pdGlvbihmaXh0dXJlLnR5cGUubWFudWZhY3R1cmVyLCAkZXZlbnQpXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBtb2RlbCBvZiBnZXRNb2RlbHMoZml4dHVyZS50eXBlLm1hbnVmYWN0dXJlcilcXFwiPnt7bW9kZWx9fTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiQ2hhbm5lbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgbmFtZT1cXFwiY2hhbm5lbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjUxMlxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZml4dHVyZS5jaGFubmVsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIkdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgbmFtZT1cXFwiZ3JvdXBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFsobmdNb2RlbCldPVxcXCJmaXh0dXJlLmdyb3VwXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBncm91cCBvZiBncm91cHNcXFwiPnt7Z3JvdXAubmFtZX19PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxcclxcbiAgICAgICAgICAgIDxmaWVsZHNldCBuYW1lPVxcXCJvcHRpb25zXFxcIiAqbmdJZj1cXFwiZGVmaW5pdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTWF4IEJyaWdodG5lc3M6XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwiZml4dHVyZS5vcHRpb25zLm1heEJyaWdodG5lc3NcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjFcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD1cXFwiMC4wMVxcXCIgbmFtZT1cXFwibWF4QnJpZ2h0bmVzc1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibW92aW5nXFxcIiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5BeGlzIE9wdGlvbnM8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkludmVydGVkPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVzdHJpY3RlZDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1pbiAoZGVncmVlcyk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXggKGRlZ3JlZXMpPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBheGlzIG9mIGF4aXNPcHRpb25zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3theGlzLm5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBbKG5nTW9kZWwpXT1cXFwiYXhpcy5pbnZlcnRlZFxcXCIgW25hbWVdPVxcXCInaW52ZXJ0ZWRbJyArIGF4aXMubmFtZSArICddJ1xcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludmVydGVkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgWyhuZ01vZGVsKV09XFxcImF4aXMucmVzdHJpY3RlZFxcXCIgW25hbWVdPVxcXCIncmVzdHJpY3RlZFsnICsgYXhpcy5uYW1lICsgJ10nXFxcIiA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzdHJpY3RlZFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJheGlzLnJlc3RyaWN0aW9uTWluXFxcIiBbbmFtZV09XFxcIidyZXN0cmljdGlvbk1pblsnICsgYXhpcy5uYW1lICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttaW5dPVxcXCJheGlzLm1pblxcXCIgW21heF09XFxcImF4aXMubWF4XFxcIiBbZGlzYWJsZWRdPVxcXCIhYXhpcy5yZXN0cmljdGVkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImF4aXMucmVzdHJpY3Rpb25NYXhcXFwiIFtuYW1lXT1cXFwiJ3Jlc3RyaWN0aW9uTWF4WycgKyBheGlzLm5hbWUgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21pbl09XFxcImF4aXMubWluXFxcIiBbbWF4XT1cXFwiYXhpcy5tYXhcXFwiIFtkaXNhYmxlZF09XFxcIiFheGlzLnJlc3RyaWN0ZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9maWVsZHNldD5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvZml4dHVyZS1vcHRpb25zLWVkaXRvci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy9maXh0dXJlLW9wdGlvbnMtZWRpdG9yLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5WZW51ZSBFZGl0b3I8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJ2ZW51ZVxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgI2VkaXRvckZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgIDxmaWVsZHNldCBbZGlzYWJsZWRdPVxcXCJzYXZpbmdcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJOYW1lOlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkICNpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwidmVudWUubmFtZVxcXCIgI21vZGVsPVxcXCJuZ01vZGVsXFxcIj5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IHJvbGU9XFxcInRhYnBhbmVsXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tIE5hdiB0YWJzIC0tPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIiByb2xlPVxcXCJ0YWJsaXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IHVuaXZlcnNlIG9mIHZlbnVlLnVuaXZlcnNlczsgbGV0IGkgPSBpbmRleFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IHNlbGVjdGVkVW5pdmVyc2UgPT0gdW5pdmVyc2V9XFxcIiBjbGFzcz1cXFwiYWN0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNlbGVjdGVkVW5pdmVyc2UgPSB1bml2ZXJzZVxcXCI+e3t1bml2ZXJzZS5uYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiaSA+IDBcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlVW5pdmVyc2UoaSlcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0blxcXCIgKGNsaWNrKT1cXFwiYWRkVW5pdmVyc2UoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIiAqbmdJZj1cXFwic2VsZWN0ZWRVbml2ZXJzZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTmFtZTpcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJzZWxlY3RlZFVuaXZlcnNlLm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtuYW1lXT1cXFwiJ3VuaXZlcnNlTmFtZVsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiVW5pdmVyc2UgSUQ6XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VsZWN0ZWRVbml2ZXJzZS51bml2ZXJzZUlEXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI2NTUzNVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XFxcIid1bml2ZXJzZU51bWJlclsnICsgaSArICddJ1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8dW5pdmVyc2UtZWRpdG9yIFt1bml2ZXJzZV09XFxcInNlbGVjdGVkVW5pdmVyc2VcXFwiIFttZXNzYWdlQmFyXT1cXFwibWVzc2FnZUJhclxcXCIgW2lucHV0Qm94XT1cXFwiaW5wdXRCb3hcXFwiPjwvdW5pdmVyc2UtZWRpdG9yPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNhdmUoKVxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRvckZvcm0udmFsaWRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2ZpZWxkc2V0PlxcclxcbjwvZm9ybT5cXHJcXG48aW5wdXQtYm94ICNpbnB1dEJveD48L2lucHV0LWJveD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1lZGl0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tIFwiYW5ndWxhcjItbW9kYWxcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW5ndWxhcjItbW9kYWwvcGx1Z2lucy9ib290c3RyYXBcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25zLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24gfSBmcm9tIFwiLi9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaXh0dXJlLWRlZmluaXRpb25zJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0ZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbnNDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIG1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBtYW51ZmFjdHVyZXJGaWx0ZXI6IHN0cmluZztcclxuICAgIGRhdGE6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2U6IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UsIG92ZXJsYXk6IE92ZXJsYXksIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIG1vZGFsOiBNb2RhbClcclxuICAgIHtcclxuICAgICAgICBvdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyID0gdmNSZWY7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRTa2VsZXRvbnMoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSkgPT4gdGhpcy5kYXRhID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgbWFudWZhY3R1cmVycygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFcclxuICAgICAgICAgICAgLm1hcCgodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pID0+IHZhbHVlLm1hbnVmYWN0dXJlcilcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGZpbHRlcmVkRGF0YSgpOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW11cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5tYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWx0ZXIoKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiB2YWx1ZS5tYW51ZmFjdHVyZXIgPT0gdGhpcy5tYW51ZmFjdHVyZXJGaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVkaXRVcmwoZml4dHVyZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbik6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcImZpeHR1cmUtZGVmaW5pdGlvbnNcIiArIFwiL1wiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIi9cIiArIGZpeHR1cmUubW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBkZWxldGVDb25maXJtKGZpeHR1cmU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBhd2FpdCB0aGlzLm1vZGFsLmNvbmZpcm0oKVxyXG4gICAgICAgICAgICAudGl0bGUoXCJBcmUgeW91IHN1cmU/XCIpXHJcbiAgICAgICAgICAgIC5ib2R5KFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgZGVmaW5pdGlvbiBmb3IgXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiIFwiICsgZml4dHVyZS5tb2RlbCArIFwiP1wiKVxyXG4gICAgICAgICAgICAuaXNCbG9ja2luZyh0cnVlKVxyXG4gICAgICAgICAgICAub3BlbigpO1xyXG5cclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBwcm9taXNlLnJlc3VsdDtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5maXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlLmRlbGV0ZShmaXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiIFwiICsgZml4dHVyZS5tb2RlbCArIFwiIHdhcyBkZWxldGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGF0YS5pbmRleE9mKGZpeHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKHJlYXNvbilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgXCJDb3VsZCBub3QgZGVsZXRlIFwiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIiBcIiArIGZpeHR1cmUubW9kZWwgKyBcIi4gXCIgKyByZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vZXJyb3JzIGFyZSBnZW5lcmF0ZWQgd2hlbiB0aGUgbWVzc2FnZSBib3ggaXMgY2FuY2VsbGVkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZpeHR1cmUtZGVmaW5pdGlvbnMvbmV3XCI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5GaXh0dXJlIERlZmluaXRpb25zPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGZvcm0taW5saW5lXFxcIiAqbmdJZj1cXFwiZGF0YVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFsobmdNb2RlbCldPVxcXCJtYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgIEZpbHRlciBieSBtYW51ZmFjdHVyZXJcXHJcXG4gICAgICAgIDwvbGFiZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8c2VsZWN0IHJlcXVpcmVkIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIFtkaXNhYmxlZF09XFxcIiFtYW51ZmFjdHVyZXJGaWx0ZXJFbmFibGVkXFxcIiBbKG5nTW9kZWwpXT1cXFwibWFudWZhY3R1cmVyRmlsdGVyXFxcIj5cXHJcXG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgbWFudWZhY3R1cmVyIG9mIG1hbnVmYWN0dXJlcnNcXFwiPnt7bWFudWZhY3R1cmVyfX08L29wdGlvbj5cXHJcXG4gICAgPC9zZWxlY3Q+XFxyXFxuPC9kaXY+XFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIiAqbmdJZj1cXFwiZGF0YVxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+TWFudWZhY3R1cmVyPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+TW9kZWw8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBmaWx0ZXJlZERhdGFcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD57e2VudHJ5Lm1hbnVmYWN0dXJlcn19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+e3tlbnRyeS5tb2RlbH19PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBbaHJlZl09XFxcImdldEVkaXRVcmwoZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZUNvbmZpcm0oZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb24sIEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24sIERNWENoYW5uZWwsIEF4aXMsIENvbG9yV2hlZWxFbnRyeSB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25zU2VydmljZSB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMtZWRpdG9yJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW0ZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgb3JpZ2luYWxNYW51ZmFjdHVyZXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgb3JpZ2luYWxNb2RlbDogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgYWxsTWFudWZhY3R1cmVyczogc3RyaW5nW107XHJcblxyXG4gICAgcHJpdmF0ZSBkZWZpbml0aW9uOiBGaXh0dXJlRGVmaW5pdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIHNhdmluZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBmaXh0dXJlU2VydmljZTogRml4dHVyZURlZmluaXRpb25zU2VydmljZSwgb3ZlcmxheTogT3ZlcmxheSwgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgbW9kYWw6IE1vZGFsKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWxsTWFudWZhY3R1cmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXIgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snbWFudWZhY3R1cmVyJ107XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbE1vZGVsID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ21vZGVsJ107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTmV3SXRlbSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZml4dHVyZVNlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5nZXQodGhpcy5vcmlnaW5hbE1hbnVmYWN0dXJlciwgdGhpcy5vcmlnaW5hbE1vZGVsKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGVmaW5pdGlvbiA9PiB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpeHR1cmVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRTa2VsZXRvbnMoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXSkgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsTWFudWZhY3R1cmVycyA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc2tlbGV0b246IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pID0+IHNrZWxldG9uLm1hbnVmYWN0dXJlcilcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGFycmF5LmluZGV4T2YodmFsdWUpID09IGluZGV4KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRDaGFubmVsKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWF4Q2hhbm5lbCA9IDA7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLmZvckVhY2goKHZhbHVlOiBETVhDaGFubmVsKSA9PiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5kbXggPiBtYXhDaGFubmVsKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWF4Q2hhbm5lbCA9IHZhbHVlLmRteDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMucHVzaChuZXcgRE1YQ2hhbm5lbChcIlwiLCBtYXhDaGFubmVsICsgMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlQ2hhbm5lbChjaGFubmVsOiBETVhDaGFubmVsKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbi5jaGFubmVscy5pbmRleE9mKGNoYW5uZWwpO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jaGFubmVscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQXhpcygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5wdXNoKG5ldyBBeGlzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlQXhpcyhheGlzOiBBeGlzKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMuaW5kZXhPZihheGlzKTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRDb2xvcldoZWVsRW50cnkoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtaW5WYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbG9yV2hlZWwuZm9yRWFjaCgodmFsdWU6IENvbG9yV2hlZWxFbnRyeSkgPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZG14RW5kID4gbWluVmFsdWUpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA9IHZhbHVlLmRteEVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1pblZhbHVlID0gbWluVmFsdWUgPCAyNTUgPyBtaW5WYWx1ZSArIDEgOiAyNTU7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbG9yV2hlZWwucHVzaChuZXcgQ29sb3JXaGVlbEVudHJ5KFwiXCIsIG1pblZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVDb2xvcldoZWVsRW50cnkoY29sb3JXaGVlbEVudHJ5OiBDb2xvcldoZWVsRW50cnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9uLmNvbG9yV2hlZWwuaW5kZXhPZihjb2xvcldoZWVsRW50cnkpO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZU5hbWVzKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgY2hhbm5lbE5hbWVQcm9ibGVtcyA9IHRoaXMuY2hhbm5lbE5hbWVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleDogbnVtYmVyLCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgIT0gaW5kZXggfHwgdmFsdWUgPT0gXCJcIik7XHJcbiAgICAgICAgbGV0IGF4aXNOYW1lUHJvYmxlbXMgPSB0aGlzLmF4aXNOYW1lc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXg6IG51bWJlciwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpICE9IGluZGV4IHx8IHZhbHVlID09IFwiXCIpO1xyXG4gICAgICAgIGxldCBjb2xvcldoZWVsTmFtZVByb2JsZW1zID0gdGhpcy5jb2xvcldoZWVsTmFtZXNcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUsIGluZGV4OiBudW1iZXIsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSAhPSBpbmRleCB8fCB2YWx1ZSA9PSBcIlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWxOYW1lUHJvYmxlbXMubGVuZ3RoID09IDAgJiYgYXhpc05hbWVQcm9ibGVtcy5sZW5ndGggPT0gMCAmJiBjb2xvcldoZWVsTmFtZVByb2JsZW1zLmxlbmd0aCA9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGNoYW5uZWxOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMubWFwKCh2YWx1ZTogRE1YQ2hhbm5lbCkgPT4gdmFsdWUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgY29sb3JXaGVlbE5hbWVzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLm1hcCgodmFsdWU6IENvbG9yV2hlZWxFbnRyeSkgPT4gdmFsdWUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgYXhpc05hbWVzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMubWFwKCh2YWx1ZTogQXhpcykgPT4gdmFsdWUubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc05ld0l0ZW0oKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsTWFudWZhY3R1cmVyID09IG51bGwgJiYgdGhpcy5vcmlnaW5hbE1vZGVsID09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IG1hbnVmYWN0dXJlciA9IHRoaXMuaXNOZXdJdGVtKCkgPyB0aGlzLmRlZmluaXRpb24ubWFudWZhY3R1cmVyIDogdGhpcy5vcmlnaW5hbE1hbnVmYWN0dXJlcjtcclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLmlzTmV3SXRlbSgpID8gdGhpcy5kZWZpbml0aW9uLm5hbWUgOiB0aGlzLm9yaWdpbmFsTW9kZWw7XHJcbiAgICAgICAgdGhpcy5maXh0dXJlU2VydmljZVxyXG4gICAgICAgICAgICAucHV0KG1hbnVmYWN0dXJlciwgbW9kZWwsIHRoaXMuZGVmaW5pdGlvbilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9maXh0dXJlLWRlZmluaXRpb25zXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPkZpeHR1cmUgRGVmaW5pdGlvbiBFZGl0b3I8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJkZWZpbml0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiAjZWRpdG9yRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgPGZpZWxkc2V0IFtkaXNhYmxlZF09XFxcInNhdmluZ1xcXCI+XFxyXFxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XFxcImFsbE1hbnVmYWN0dXJlcnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVxcXCJsZXQgbWFudWZhY3R1cmVyIG9mIGFsbE1hbnVmYWN0dXJlcnNcXFwiPnt7bWFudWZhY3R1cmVyfX08L29wdGlvbj5cXHJcXG4gICAgICAgIDwvZGF0YWxpc3Q+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk1hbnVmYWN0dXJlcjpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCAjaW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibWFudWZhY3R1cmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVmaW5pdGlvbi5tYW51ZmFjdHVyZXJcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgbGlzdD1cXFwiYWxsTWFudWZhY3R1cmVyc1xcXCI+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJNb2RlbDpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCAjaW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJkZWZpbml0aW9uLm5hbWVcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCI+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJUeXBlOlxcXCI+XFxyXFxuICAgICAgICAgICAgPHNlbGVjdCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ0eXBlXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVmaW5pdGlvbi50eXBlXFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkxFRDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+VHVuZ3N0ZW48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkVmZmVjdDwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGRhdGFsaXN0IGlkPVxcXCJjaGFubmVsTGlzdFxcXCIgbmFtZT1cXFwiY2hhbm5lbExpc3RcXFwiPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+TWFzdGVyPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5TdHJvYmU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlJlZDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+R3JlZW48L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkJsdWU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlVWPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5Db2xvcldoZWVsPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5QYW5Db2Fyc2U8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlBhbkZpbmU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlRpbHRDb2Fyc2U8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlRpbHRGaW5lPC9vcHRpb24+XFxyXFxuICAgICAgICA8L2RhdGFsaXN0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+Q2hhbm5lbHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ETVg8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NaW48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF4PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGNoYW5uZWwgb2YgZGVmaW5pdGlvbi5jaGFubmVsczsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hhbm5lbC5kbXhcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI1MTJcXFwiIFtuYW1lXT1cXFwiJ2NoYW5uZWxETVhbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgWyh1bmlxdWUpXT1cXFwiY2hhbm5lbE5hbWVzXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiY2hhbm5lbC5uYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XFxcIidjaGFubmVsTmFtZVsnICsgaSArICddJ1xcXCIgbGlzdD1cXFwiY2hhbm5lbExpc3RcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwubWluXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMjU1XFxcIiBbbmFtZV09XFxcIidjaGFubmVsTWluWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwubWF4XFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMjU1XFxcIiBbbmFtZV09XFxcIidjaGFubmVsTWF4WycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlQ2hhbm5lbChjaGFubmVsKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGRDaGFubmVsKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRhdGFsaXN0IGlkPVxcXCJheGlzTGlzdFxcXCIgbmFtZT1cXFwiYXhpc0xpc3RcXFwiPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+UGFuPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5UaWx0PC9vcHRpb24+XFxyXFxuICAgICAgICA8L2RhdGFsaXN0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+TW92ZW1lbnQgQXhpczwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWluIChkZWdyZWVzKTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXggKGRlZ3JlZXMpPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IG1vdmVtZW50IG9mIGRlZmluaXRpb24ubW92ZW1lbnRzOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbdW5pcXVlXT1cXFwiY29sb3JXaGVlbE5hbWVzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwibW92ZW1lbnQubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVxcXCInYXhpc05hbWVbJyArIGkgKyAnXSdcXFwiIGxpc3Q9XFxcImF4aXNMaXN0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJtb3ZlbWVudC5taW5cXFwiIFtuYW1lXT1cXFwiJ2F4aXNNaW5bJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwibW92ZW1lbnQubWF4XFxcIiBbbmFtZV09XFxcIidheGlzTWF4WycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlQXhpcyhtb3ZlbWVudClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkQXhpcygpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkNvbG9yIFdoZWVsczwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29sb3I8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RE1YIFN0YXJ0PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRNWCBFbmQ8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgZGVmaW5pdGlvbi5jb2xvcldoZWVsOyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBbdW5pcXVlXT1cXFwiY29sb3JXaGVlbE5hbWVzXFxcIiByZXF1aXJlZCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50cnkubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVxcXCInY29sb3JXaGVlbE5hbWVbJyArIGkgKyAnXSdcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcImNvbG9yXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50cnkuY29sb3JcXFwiIFtuYW1lXT1cXFwiJ2NvbG9yV2hlZWxDb2xvclsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJlbnRyeS5kbXhTdGFydFxcXCIgW25hbWVdPVxcXCInY29sb3JXaGVlbE1pblsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50cnkuZG14RW5kXFxcIiBbbmFtZV09XFxcIidjb2xvcldoZWVsTWF4WycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XFxcIjBcXFwiIG1heD1cXFwiMjU1XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZUNvbG9yV2hlZWxFbnRyeShlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkQ29sb3JXaGVlbEVudHJ5KClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJzYXZlKClcXFwiIFtkaXNhYmxlZF09XFxcIiFlZGl0b3JGb3JtLnZhbGlkXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbi1lZGl0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi4vZ3JvdXBzL2dyb3VwXCI7XHJcbmltcG9ydCB7IFByZXZpZXdVbml2ZXJzZURhdGEsIFByZXZpZXdGaXh0dXJlRGF0YSwgVW5pdmVyc2VVcGRhdGVEYXRhIH0gZnJvbSBcIi4vcHJldmlld1wiO1xyXG5pbXBvcnQgeyBETVhDaGFubmVsIH0gZnJvbSBcIi4uL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IFVuaXZlcnNlIH0gZnJvbSBcIi4uL3ZlbnVlcy92ZW51ZVwiO1xyXG5cclxuaW1wb3J0IHsgVVJMIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91cmxcIjtcclxuXHJcbmltcG9ydCB7IFByZXZpZXdTZXJ2aWNlIH0gZnJvbSBcIi4vcHJldmlldy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFByZXZpZXcyREZpeHR1cmVDb21wb25lbnQgfSBmcm9tIFwiLi9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJldmlldy0yZCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9wcmV2aWV3LTJkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtQcmV2aWV3U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByZXZpZXcyRENvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgZ3JvdXBzOiBzdHJpbmdbXTtcclxuICAgIHVuaXZlcnNlczogTWFwPHN0cmluZywgUHJldmlld1VuaXZlcnNlRGF0YT47XHJcbiAgICB1bml2ZXJzZURhdGE6IG51bWJlcltdO1xyXG4gICAgYWN0aXZlVW5pdmVyc2U6IFByZXZpZXdVbml2ZXJzZURhdGE7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJldmlld1NlcnZpY2U6IFByZXZpZXdTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHByZXZpZXdTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbih2YWx1ZSA9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cHMgPSB2YWx1ZS5ncm91cHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXZlcnNlcyA9IG5ldyBNYXA8c3RyaW5nLCBQcmV2aWV3VW5pdmVyc2VEYXRhPigpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdW5pdmVyc2Ugb2YgdmFsdWUudW5pdmVyc2VzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdmVyc2VzLnNldCh1bml2ZXJzZS5uYW1lLCB1bml2ZXJzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bml2ZXJzZURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVW5pdmVyc2UgPSB0aGlzLnVuaXZlcnNlcy5nZXQodGhpcy51bml2ZXJzZXMua2V5cygpLm5leHQoKS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldmlld1NlcnZpY2Uuc3Vic2NyaWJlKGRhdGEgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXZlcnNlRGF0YSA9IGRhdGEudmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpeHR1cmVzKHVuaXZlcnNlOiBQcmV2aWV3VW5pdmVyc2VEYXRhLCBncm91cDogc3RyaW5nKTogUHJldmlld0ZpeHR1cmVEYXRhW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdW5pdmVyc2UuZml4dHVyZXMuZmlsdGVyKHggPT4geC5ncm91cCA9PSBncm91cCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSwgVW5pdmVyc2VVcGRhdGVEYXRhIH0gZnJvbSBcIi4vcHJldmlld1wiO1xyXG5pbXBvcnQgeyBVUkwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VybFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJldmlld1NlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBwcmV2aWV3VXJsID0gXCIvYXBpL1ByZXZpZXdcIjtcclxuICAgIHByaXZhdGUgc29ja2V0VXJsID0gVVJMLmdldFNvY2tldFVSTChcIlByZXZpZXdcIik7XHJcbiAgICBwcml2YXRlIHNvY2tldDogV2ViU29ja2V0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5zb2NrZXRVcmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoKTogUHJvbWlzZTxQcmV2aWV3RGF0YT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnByZXZpZXdVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmF3RGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChyYXdEYXRhLmdyb3VwcyAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmF3RGF0YSBhcyBQcmV2aWV3RGF0YTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk5vIFZlbnVlIExvYWRlZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3Vic2NyaWJlKGxpc3RlbmVyOiAoZGF0YTogVW5pdmVyc2VVcGRhdGVEYXRhKSA9PiB2b2lkKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldjogTWVzc2FnZUV2ZW50KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGV2LmRhdGEpIGFzIFVuaXZlcnNlVXBkYXRlRGF0YTtcclxuICAgICAgICAgICAgbGlzdGVuZXIoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+UHJldmlldzwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCIgKm5nRm9yPVxcXCJsZXQgZ3JvdXAgb2YgZ3JvdXBzXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+e3tncm91cH19PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPHByZXZpZXctMmQtZml4dHVyZSAqbmdGb3I9XFxcImxldCBmaXh0dXJlIG9mIGdldEZpeHR1cmVzKGFjdGl2ZVVuaXZlcnNlLCBncm91cClcXFwiIFtkYXRhXT1cXFwidW5pdmVyc2VEYXRhXFxcIiBbZml4dHVyZV09XFxcImZpeHR1cmVcXFwiPjwvcHJldmlldy0yZC1maXh0dXJlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ByZXZpZXctMmQvcHJldmlldy0yZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFByZXZpZXdGaXh0dXJlRGF0YSB9IGZyb20gXCIuL3ByZXZpZXdcIjtcclxuaW1wb3J0IHsgRE1YUHJldmlld0ZpeHR1cmUgfSBmcm9tIFwiLi9ETVhQcmV2aWV3Rml4dHVyZVwiO1xyXG5pbXBvcnQgeyBETVhDaGFubmVsIH0gZnJvbSBcIi4uL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJldmlldy0yZC1maXh0dXJlJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3ByZXZpZXctMmQtZml4dHVyZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZShcIi4vcHJldmlldy0yZC1maXh0dXJlLmNvbXBvbmVudC5jc3NcIildXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcmV2aWV3MkRGaXh0dXJlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzXHJcbntcclxuICAgIHN0YXRpYyB1cGRhdGVSYXRlID0gNjA7IC8vaGVydHpcclxuICAgIHN0YXRpYyB1cGRhdGVUaW1lID0gMTAwMCAvIFByZXZpZXcyREZpeHR1cmVDb21wb25lbnQudXBkYXRlUmF0ZTtcclxuXHJcbiAgICBASW5wdXQoXCJmaXh0dXJlXCIpIGZpeHR1cmVEYXRhOiBQcmV2aWV3Rml4dHVyZURhdGE7XHJcbiAgICBASW5wdXQoXCJkYXRhXCIpIGRhdGE6IG51bWJlcltdO1xyXG4gICAgQFZpZXdDaGlsZChcImNhbnZhc1wiKSBjYW52YXNSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBmaXh0dXJlOiBETVhQcmV2aWV3Rml4dHVyZTtcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7IH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jYW52YXNSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLmZpeHR1cmUgPSBuZXcgRE1YUHJldmlld0ZpeHR1cmUodGhpcy5maXh0dXJlRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoY2hhbmdlc1tcImRhdGFcIl0gIT0gbnVsbCAmJiBjaGFuZ2VzW1wiZGF0YVwiXS5jdXJyZW50VmFsdWUgIT0gbnVsbCAmJiB0aGlzLmNhbnZhcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuZXdEYXRhID0gY2hhbmdlc1tcImRhdGFcIl0uY3VycmVudFZhbHVlIGFzIG51bWJlcltdO1xyXG4gICAgICAgICAgICB0aGlzLmZpeHR1cmUudXBkYXRlKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZml4dHVyZS5maWxsU3R5bGU7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5maXh0dXJlLnN0cm9rZVN0eWxlO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpeHR1cmUucGFuICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcGFuWCA9IHRoaXMuZml4dHVyZS5wYW4gKiB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwYW5YLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHBhblgsIHRoaXMuY2FudmFzLndpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5maXh0dXJlLnRpbHQgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0aWx0WSA9IHRoaXMuZml4dHVyZS50aWx0ICogdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDAsIHRpbHRZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCB0aWx0WSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgRE1YUHJldmlld0NoYW5uZWwgfSBmcm9tIFwiLi9ETVhQcmV2aWV3Q2hhbm5lbFwiO1xyXG5pbXBvcnQgeyBQcmV2aWV3Rml4dHVyZURhdGEgfSBmcm9tIFwiLi9wcmV2aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBDb2xvciwgUkdCIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBETVhQcmV2aWV3Rml4dHVyZVxyXG57XHJcbiAgICBhZGRyZXNzOiBudW1iZXI7XHJcbiAgICBleHBhbmRlZDogYm9vbGVhbjtcclxuICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgbW9kZWw6IHN0cmluZztcclxuXHJcbiAgICBjaGFubmVsczogRE1YUHJldmlld0NoYW5uZWxbXTtcclxuICAgIGNoYW5uZWxOYW1lTWFwOiBNYXA8c3RyaW5nLCBETVhQcmV2aWV3Q2hhbm5lbD47XHJcbiAgICBjaGFubmVsTnVtYmVyTWFwOiBNYXA8bnVtYmVyLCBETVhQcmV2aWV3Q2hhbm5lbFtdPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBQcmV2aWV3Rml4dHVyZURhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYW51ZmFjdHVyZXIgPSBkYXRhLmRlZmluaXRpb24ubWFudWZhY3R1cmVyO1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBkYXRhLmRlZmluaXRpb24ubmFtZTtcclxuICAgICAgICB0aGlzLmFkZHJlc3MgPSBkYXRhLmNoYW5uZWw7XHJcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbE5hbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgRE1YUHJldmlld0NoYW5uZWw+KCk7XHJcbiAgICAgICAgdGhpcy5jaGFubmVsTnVtYmVyTWFwID0gbmV3IE1hcDxudW1iZXIsIERNWFByZXZpZXdDaGFubmVsW10+KCk7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGFubmVsIG9mIGRhdGEuZGVmaW5pdGlvbi5jaGFubmVscylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkbXhDaGFubmVsID0gbmV3IERNWFByZXZpZXdDaGFubmVsKGNoYW5uZWwubmFtZSwgY2hhbm5lbC5kbXgsIGNoYW5uZWwubWluLCBjaGFubmVsLm1heCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHMucHVzaChkbXhDaGFubmVsKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsTmFtZU1hcC5zZXQoZG14Q2hhbm5lbC5uYW1lLCBkbXhDaGFubmVsKTtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy5jaGFubmVsTnVtYmVyTWFwLmdldChkbXhDaGFubmVsLmRteCk7XHJcbiAgICAgICAgICAgIGlmIChhcnJheSA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsTnVtYmVyTWFwLnNldChkbXhDaGFubmVsLmRteCArIGRhdGEuY2hhbm5lbCAtIDIsIGFycmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcnJheS5wdXNoKGRteENoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRhdGE6IG51bWJlcltdKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGZvciAobGV0IGNoYW5uZWwgb2YgdGhpcy5jaGFubmVscylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBhZGRyZXNzID0gY2hhbm5lbC5kbXggKyB0aGlzLmFkZHJlc3MgLSAyO1xyXG4gICAgICAgICAgICBjaGFubmVsLmRteFZhbHVlID0gZGF0YVthZGRyZXNzXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgcmVkKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsR2V0VmFsdWUoXCJSZWRcIikgKiB0aGlzLm9wdGlvbmFsR2V0VmFsdWUoXCJNYXN0ZXJcIiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgZ3JlZW4oKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWxHZXRWYWx1ZShcIkdyZWVuXCIpICogdGhpcy5vcHRpb25hbEdldFZhbHVlKFwiTWFzdGVyXCIsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGJsdWUoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWxHZXRWYWx1ZShcIkJsdWVcIikgKiB0aGlzLm9wdGlvbmFsR2V0VmFsdWUoXCJNYXN0ZXJcIiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmaWxsU3R5bGUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1zID0gRGF0ZS5ub3coKSAlIDUwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25hbEdldFZhbHVlKFwiU3Ryb2JlXCIpID4gMCAmJiBtcyA+IDI1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYmxhY2tcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGByZ2IoJHt0aGlzLnJlZCAqIDI1NX0sICR7dGhpcy5ncmVlbiAqIDI1NX0sICR7dGhpcy5ibHVlICogMjU1fWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3Ryb2tlU3R5bGUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHN0cm9rZSA9IG5ldyBSR0IodGhpcy5yZWQgKiAyNTUsIHRoaXMuZ3JlZW4gKiAyNTUsIHRoaXMuYmx1ZSAqIDI1NSkuaW52ZXJ0KCk7XHJcbiAgICAgICAgcmV0dXJuIHN0cm9rZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcGFuKCk6IG51bWJlciB8IG51bGxcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsTmFtZU1hcC5nZXQoXCJQYW5Db2Fyc2VcIikgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxOYW1lTWFwLmdldChcIlBhbkNvYXJzZVwiKS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbE5hbWVNYXAuZ2V0KFwiUGFuXCIpICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsTmFtZU1hcC5nZXQoXCJQYW5cIikudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGlsdCgpOiBudW1iZXIgfCBudWxsXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbE5hbWVNYXAuZ2V0KFwiVGlsdENvYXJzZVwiKSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbE5hbWVNYXAuZ2V0KFwiVGlsdENvYXJzZVwiKS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbE5hbWVNYXAuZ2V0KFwiVGlsdFwiKSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbE5hbWVNYXAuZ2V0KFwiVGlsdFwiKS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uYWxHZXRWYWx1ZShuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IG51bWJlcik6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZSB8fCAwO1xyXG4gICAgICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVsTmFtZU1hcC5nZXQobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWwgPyBjaGFubmVsLnZhbHVlIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ByZXZpZXctMmQvRE1YUHJldmlld0ZpeHR1cmUudHMiLCJpbXBvcnQgeyBETVhDaGFubmVsIH0gZnJvbSBcIi4uL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRE1YUHJldmlld0NoYW5uZWwgZXh0ZW5kcyBETVhDaGFubmVsXHJcbntcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRteDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgZG14LCBtaW4sIG1heCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgcmFuZ2UoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4IC0gdGhpcy5taW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBkbXhWYWx1ZSh2YWx1ZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLm1pbiAmJiB2YWx1ZSA8PSB0aGlzLm1heClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAodmFsdWUgLSB0aGlzLm1pbikgLyB0aGlzLnJhbmdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRteFZhbHVlKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAqIHRoaXMucmFuZ2UpICsgdGhpcy5taW47XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQoY2hhbm5lbDogRE1YQ2hhbm5lbClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IERNWENoYW5uZWwoY2hhbm5lbC5uYW1lLCBjaGFubmVsLmRteCwgY2hhbm5lbC5taW4sIGNoYW5uZWwubWF4KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL0RNWFByZXZpZXdDaGFubmVsLnRzIiwiZXhwb3J0IGNsYXNzIENvbG9yXHJcbntcclxuICAgIHN0YXRpYyByYW5kb21Db2xvcigpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgY29sb3I7XHJcbiAgICAgICAgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDApOyAvLyBpbnRlZ2VyIGJldHdlZW4gMHgwIGFuZCAweEZGRkZGRlxyXG4gICAgICAgIGNvbG9yID0gY29sb3IudG9TdHJpbmcoMTYpOyAvLyBjb252ZXJ0IHRvIGhleFxyXG4gICAgICAgIGNvbG9yID0gKFwiMDAwMDAwXCIgKyBjb2xvcikuc2xpY2UoLTYpOyAvLyBwYWQgd2l0aCBsZWFkaW5nIHplcm9zXHJcbiAgICAgICAgY29sb3IgPSBcIiNcIiArIGNvbG9yOyAvLyBwcmVwZW5kICNcclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGludmVydENzc0NvbG9yKGNvbG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgcmdiID0gUkdCLnBhcnNlKGNvbG9yKS5pbnZlcnQoKTtcclxuICAgICAgICByZXR1cm4gcmdiLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlYzJoZXgobjogbnVtYmVyKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGhleCA9IG4udG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGlmIChoZXgubGVuZ3RoIDwgMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMCcgKyBoZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBjbGFtcChuOiBudW1iZXIpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBpZiAobiA8IDApIHsgcmV0dXJuIDA7IH1cclxuICAgICAgICBpZiAobiA+IDI1NSkgeyByZXR1cm4gMjU1OyB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3Iobik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSR0Jcclxue1xyXG4gICAgcjogbnVtYmVyO1xyXG4gICAgZzogbnVtYmVyO1xyXG4gICAgYjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yID0gcmVkO1xyXG4gICAgICAgIHRoaXMuZyA9IGdyZWVuO1xyXG4gICAgICAgIHRoaXMuYiA9IGJsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvWVVWKCk6IFlVVlxyXG4gICAge1xyXG4gICAgICAgIGxldCB5ID0gQ29sb3IuY2xhbXAodGhpcy5yICogMC4yOTkwMCArIHRoaXMuZyAqIDAuNTg3ICsgdGhpcy5iICogMC4xMTQpO1xyXG4gICAgICAgIGxldCB1ID0gQ29sb3IuY2xhbXAodGhpcy5yICogLTAuMTY4NzQgKyB0aGlzLmcgKiAtMC4zMzEyNiArIHRoaXMuYiAqIDAuNTAwMDAgKyAxMjgpO1xyXG4gICAgICAgIGxldCB2ID0gQ29sb3IuY2xhbXAodGhpcy5yICogMC41MDAwMCArIHRoaXMuZyAqIC0wLjQxODY5ICsgdGhpcy5iICogLTAuMDgxMzEgKyAxMjgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgWVVWKHksIHUsIHYpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJyMnICsgQ29sb3IuZGVjMmhleCh0aGlzLnIpICsgQ29sb3IuZGVjMmhleCh0aGlzLmcpICsgQ29sb3IuZGVjMmhleCh0aGlzLmIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2Uoc3RyOiBzdHJpbmcpOiBSR0JcclxuICAgIHtcclxuICAgICAgICBsZXQgY29sb3IgPSBzdHIuc3Vic3RyaW5nKDEpOyAvLyByZW1vdmUgI1xyXG4gICAgICAgIHJldHVybiBuZXcgUkdCKHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygwLCAyKSwgMTYpLFxyXG4gICAgICAgICAgICBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMiwgNCksIDE2KSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDQsIDYpLCAxNilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnZlcnQoKTogUkdCXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHl1diA9IHRoaXMudG9ZVVYoKTtcclxuICAgICAgICBsZXQgZmFjdG9yID0gOTA7XHJcbiAgICAgICAgbGV0IHRocmVzaG9sZCA9IDEwMDtcclxuICAgICAgICB5dXYueSA9IENvbG9yLmNsYW1wKHl1di55ICsgKHl1di55ID4gdGhyZXNob2xkID8gLWZhY3RvciA6IGZhY3RvcikpO1xyXG4gICAgICAgIHJldHVybiB5dXYudG9SR0IoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFlVVlxyXG57XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB1OiBudW1iZXI7XHJcbiAgICB2OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeTogbnVtYmVyLCB1OiBudW1iZXIsIHY6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudSA9IHU7XHJcbiAgICAgICAgdGhpcy52ID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9SR0IoKTogUkdCXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHkgPSB0aGlzLnk7XHJcbiAgICAgICAgbGV0IHUgPSB0aGlzLnU7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLnY7XHJcbiAgICAgICAgbGV0IHIgPSBDb2xvci5jbGFtcCh5ICsgKHYgLSAxMjgpICogMS40MDIwMCk7XHJcbiAgICAgICAgbGV0IGcgPSBDb2xvci5jbGFtcCh5ICsgKHUgLSAxMjgpICogLTAuMzQ0MTQgKyAodiAtIDEyOCkgKiAtMC43MTQxNCk7XHJcbiAgICAgICAgbGV0IGIgPSBDb2xvci5jbGFtcCh5ICsgKHUgLSAxMjgpICogMS43NzIwMCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSR0IociwgZywgYik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9Db2xvci50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+e3tmaXh0dXJlLmFkZHJlc3N9fSB7e2ZpeHR1cmUubWFudWZhY3R1cmVyfX0ge3tmaXh0dXJlLm1vZGVsfX08L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICA8Y2FudmFzICNjYW52YXMgd2lkdGg9XFxcIjMwMFxcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiIGNsYXNzPVxcXCJmaXh0dXJlQ2FudmFzXFxcIj48L2NhbnZhcz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJmaXh0dXJlLmV4cGFuZGVkID0gIWZpeHR1cmUuZXhwYW5kZWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgdGV4dC1jZW50ZXJcXFwiPkRNWDwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgIDx0YWJsZSAqbmdJZj1cXFwiZml4dHVyZS5leHBhbmRlZFxcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNoYW5uZWw8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VmFsdWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGNoYW5uZWwgb2YgZml4dHVyZS5jaGFubmVsc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7Y2hhbm5lbC5kbXggKyBmaXh0dXJlLmFkZHJlc3MgLSAxfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2NoYW5uZWwubmFtZX19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tjaGFubmVsLmRteFZhbHVlfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3ByZXZpZXctMmQtZml4dHVyZS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9wcmV2aWV3LTJkL3ByZXZpZXctMmQtZml4dHVyZS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5maXh0dXJlQ2FudmFzXFxyXFxue1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJldmlldy0yZC9wcmV2aWV3LTJkLWZpeHR1cmUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQcmV2aWV3U2VydmljZSB9IGZyb20gXCIuLi9wcmV2aWV3LTJkL3ByZXZpZXcuc2VydmljZVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2Fjbi10cmFuc21pdHRlci1saXZlJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NhY24tdHJhbnNtaXR0ZXItbGl2ZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbUHJldmlld1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTQUNOVHJhbnNtaXR0ZXJMaXZlQ29tcG9uZW50XHJcbntcclxuICAgIGRhdGE6IG51bWJlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByZXZpZXdTZXJ2aWNlOiBQcmV2aWV3U2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBBcnJheTxudW1iZXI+KDUxMikuZmlsbCgwKTtcclxuICAgICAgICBwcmV2aWV3U2VydmljZS5zdWJzY3JpYmUoZGF0YSA9PiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGEudmFsdWVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd3MoKTogbnVtYmVyW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5PG51bWJlcj4oNTIpLmZpbGwoMCkubWFwKCh4LCBpKSA9PiBpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2x1bW5zKHJvdzogbnVtYmVyKTogbnVtYmVyW11cclxuICAgIHtcclxuICAgICAgICBpZiAocm93IDwgNTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5PG51bWJlcj4oMTApLmZpbGwoMCkubWFwKCh4LCBpKSA9PiBpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm93ID09IDUxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheTxudW1iZXI+KDMpLmZpbGwoMCkubWFwKCh4LCBpKSA9PiBpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYWROdW1iZXIobnVtOiBudW1iZXIpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZiAobnVtIDwgMTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIwMFwiICsgbnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW0gPCAxMDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIwXCIgKyBudW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bSA8IDEwMDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVtICsgXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NhY24tdHJhbnNtaXR0ZXItbGl2ZS9zYWNuLXRyYW5zbWl0dGVyLWxpdmUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPnNBQ04gVHJhbnNtaXR0ZXIgTGl2ZTwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD48L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD4wPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+MTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPjI8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD4zPC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+NDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPjU8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD42PC90aD5cXHJcXG4gICAgICAgICAgICA8dGg+NzwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPjg8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD45PC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCByb3cgb2YgZ2V0Um93cygpXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGg+e3tyb3cgKiAxMH19PC90aD5cXHJcXG4gICAgICAgICAgICA8dGQgKm5nRm9yPVxcXCJsZXQgY29sdW1uIG9mIGdldENvbHVtbnMocm93KVxcXCIgdGl0bGU9XFxcInt7cm93ICogMTAgKyBjb2x1bW59fVxcXCIgW25nU3R5bGVdPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiAncmdiKDI1NSwnICsgKDI1NSAtIGRhdGFbcm93ICogMTAgKyBjb2x1bW5dKSArICcsJyArICgyNTUgLSBkYXRhW3JvdyAqIDEwICsgY29sdW1uXSkgKyAnKSd9XFxcIj57e3BhZE51bWJlcihkYXRhW3JvdyAqIDEwICsgY29sdW1uXSl9fTwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zYWNuLXRyYW5zbWl0dGVyLWxpdmUvc2Fjbi10cmFuc21pdHRlci1saXZlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9TQ0xpc3RlbmVyU2VydmljZSB9IGZyb20gXCIuL29zYy1saXN0ZW5lci5zZXJ2aWNlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvc2MtbGlzdGVuZXItbGl2ZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9vc2MtbGlzdGVuZXItbGl2ZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbT1NDTGlzdGVuZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT1NDTGlzdGVuZXJMaXZlQ29tcG9uZW50XHJcbntcclxuICAgIHN0YXRpYyBNQVhfTEVOR1RIID0gNTA7XHJcbiAgICBwcml2YXRlIHVucmVjb2duaXNlZERhdGE6IHN0cmluZ1tdO1xyXG4gICAgcHJpdmF0ZSByZWNvZ25pc2VkRGF0YTogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3NjTGlzdGVuZXJTZXJ2aWNlOiBPU0NMaXN0ZW5lclNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy51bnJlY29nbmlzZWREYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5yZWNvZ25pc2VkRGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBvc2NMaXN0ZW5lclNlcnZpY2Uuc3Vic2NyaWJlKGRhdGEgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSBkYXRhLmFkZHJlc3MgKyBcIiBcIiArIGRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IGRhdGEucmVjb2duaXNlZCA/IHRoaXMucmVjb2duaXNlZERhdGEgOiB0aGlzLnVucmVjb2duaXNlZERhdGE7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goc3RyKTtcclxuICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA+IE9TQ0xpc3RlbmVyTGl2ZUNvbXBvbmVudC5NQVhfTEVOR1RIKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9vTG9uZ0Ftb3VudCA9IGFycmF5Lmxlbmd0aCAtIE9TQ0xpc3RlbmVyTGl2ZUNvbXBvbmVudC5NQVhfTEVOR1RIO1xyXG4gICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKDAsIHRvb0xvbmdBbW91bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZWNvZ25pc2VkKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29nbmlzZWREYXRhLmpvaW4oXCJcXHJcXG5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRVbnJlY29nbmlzZWQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5yZWNvZ25pc2VkRGF0YS5qb2luKFwiXFxyXFxuXCIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL29zYy1saXN0ZW5lci1saXZlL29zYy1saXN0ZW5lci1saXZlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcblxyXG5pbXBvcnQgeyBVUkwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VybFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT1NDTGlzdGVuZXJTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgc29ja2V0VXJsID0gVVJMLmdldFNvY2tldFVSTChcIk9TQ1wiKTtcclxuICAgIHByaXZhdGUgc29ja2V0OiBXZWJTb2NrZXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLnNvY2tldFVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1YnNjcmliZShsaXN0ZW5lcjogKGRhdGE6IE9TQ0xpc3RlbmVyRGF0YSkgPT4gdm9pZCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXY6IE1lc3NhZ2VFdmVudCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShldi5kYXRhKSBhcyBPU0NMaXN0ZW5lckRhdGE7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgT1NDTGlzdGVuZXJEYXRhXHJcbntcclxuICAgIGFkZHJlc3M6IHN0cmluZztcclxuICAgIHJlY29nbmlzZWQ6IGJvb2xlYW47XHJcbiAgICB0aW1lOiBEYXRlO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vc2MtbGlzdGVuZXItbGl2ZS9vc2MtbGlzdGVuZXIuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5PU0MgTGlzdGVuZXIgTGl2ZTwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPGgyPlJlY29nbmlzZWQ8L2gyPlxcclxcbjx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByb3dzPVxcXCIyMFxcXCIgW3ZhbHVlXT1cXFwiZ2V0UmVjb2duaXNlZCgpXFxcIj48L3RleHRhcmVhPlxcclxcbjxoMj5VbnJlY29nbmlzZWQ8L2gyPlxcclxcbjx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByb3dzPVxcXCIyMFxcXCIgW3ZhbHVlXT1cXFwiZ2V0VW5yZWNvZ25pc2VkKClcXFwiPjwvdGV4dGFyZWE+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9vc2MtbGlzdGVuZXItbGl2ZS9vc2MtbGlzdGVuZXItbGl2ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==