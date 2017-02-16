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
	var venues_component_1 = __webpack_require__(50);
	var venue_editor_component_1 = __webpack_require__(52);
	var fixture_definitions_component_1 = __webpack_require__(55);
	var fixture_definition_editor_component_1 = __webpack_require__(59);
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

	module.exports = "<div class=\"page-header\">\r\n    <h1>Settings</h1>\r\n</div>\r\n<p *ngIf=\"!settings\">Loading...</p>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"settings\" class=\"form-horizontal\" #settingsForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"HTTP Port:\">\r\n            <input #input type=\"number\" name=\"webPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.webPort\" #model=\"ngModel\"\r\n            />\r\n        </labelled-input>\r\n        <labelled-input label=\"OSC Port:\">\r\n            <input #input required type=\"number\" name=\"oscPort\" class=\"form-control\" min=\"1\" max=\"65535\" [(ngModel)]=\"settings.oscPort\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Delay (ms):\">\r\n            <input #input type=\"number\" name=\"sacnTransmitterDelay\" class=\"form-control\" min=\"0\" max=\"10000\" [(ngModel)]=\"settings.sacnTransmitter.delay\"\r\n                #model=\"ngModel\" />\r\n        </labelled-input>\r\n        <labelled-input label=\"sACN Transmitter Multicast:\">\r\n            <div class=\"checkbox\">\r\n                <label><input #input type=\"checkbox\" name=\"sacnMulticast\" [(ngModel)]=\"settings.sacnTransmitter.multicast\" #sacnMulticast=\"ngModel\" #model=\"ngModel\" >Multicast</label>\r\n            </div>\r\n        </labelled-input>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">sACN Unicast Targets</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Address</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let target of settings.sacnTransmitter.unicast; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input required type=\"text\" class=\"form-control col-sm-8\" [(ngModel)]=\"settings.sacnTransmitter.unicast[i].target\" [name]=\"'unicast[' + i + ']'\"\r\n                                        #input #model=\"ngModel\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeTarget(i)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\"><button class=\"btn btn-success\" (click)=\"addTarget()\"><span class=\"glyphicon glyphicon-plus\"></span></button></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!settingsForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

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
	var group_service_1 = __webpack_require__(47);
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
	        providers: [group_service_1.GroupService]
	    }),
	    __metadata("design:paramtypes", [group_service_1.GroupService])
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
	var core_1 = __webpack_require__(3);
	var message_bar_component_1 = __webpack_require__(27);
	var venue_service_1 = __webpack_require__(38);
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
	        template: __webpack_require__(51),
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
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Venues</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<table class=\"table table-striped\" *ngIf=\"data\">\r\n    <thead>\r\n        <tr>\r\n            <th>Venue</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of venues\">\r\n            <td>{{entry.name}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n<confirmation #confirmation></confirmation>"

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
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(7);
	var message_bar_component_1 = __webpack_require__(27);
	var confirmation_component_1 = __webpack_require__(33);
	var venue_1 = __webpack_require__(53);
	var venue_service_1 = __webpack_require__(38);
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
	        }
	        else {
	            this.venueService
	                .get(this.originalName)
	                .then(function (value) { return _this.venue = value; })
	                .catch(function (reason) { return _this.messageBar.add("Error", reason); });
	        }
	    };
	    VenueEditorComponent.prototype.isNewItem = function () {
	        return this.originalName == null;
	    };
	    VenueEditorComponent.prototype.addUniverse = function () {
	        this.venue.universes.push(new venue_1.Universe());
	    };
	    VenueEditorComponent.prototype.removeUniverse = function (index) {
	        this.venue.universes.splice(index, 1);
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
	VenueEditorComponent = __decorate([
	    core_1.Component({
	        selector: 'venue-editor',
	        template: __webpack_require__(54),
	        providers: [venue_service_1.VenueService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, venue_service_1.VenueService])
	], VenueEditorComponent);
	exports.VenueEditorComponent = VenueEditorComponent;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var fixture_definition_1 = __webpack_require__(57);
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


/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Venue Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"venue\" class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <labelled-input label=\"Name:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"venue.name\" #model=\"ngModel\">\r\n        </labelled-input>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Universes</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Universe Number</th>\r\n                            <th>Actions</th>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let universe of venue.universes; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input required #input #model=\"ngModel\" [(ngModel)]=\"universe.name\" type=\"text\" class=\"form-control\" [name]=\"'universeName[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" [(ngModel)]=\"universe.universeID\" type=\"number\" class=\"form-control\" min=\"1\" max=\"65535\" [name]=\"'universeNumber[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td class=\"btn-group\">\r\n                                <button class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-edit\"></span></button>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeUniverse(i)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addUniverse()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!editorForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

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
	var message_bar_component_1 = __webpack_require__(27);
	var confirmation_component_1 = __webpack_require__(33);
	var fixture_definitions_service_1 = __webpack_require__(56);
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
	        template: __webpack_require__(58),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureDefinitionsComponent);
	exports.FixtureDefinitionsComponent = FixtureDefinitionsComponent;


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
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(8);
	__webpack_require__(39);
	var fixture_definition_1 = __webpack_require__(57);
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
/* 57 */
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
/* 58 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definitions</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<div class=\"form-group form-inline\" *ngIf=\"data\">\r\n    <div class=\"checkbox\">\r\n        <label>\r\n            <input type=\"checkbox\" [(ngModel)]=\"manufacturerFilterEnabled\" />\r\n            Filter by manufacturer\r\n        </label>\r\n    </div>\r\n    <select required class=\"form-control\" [disabled]=\"!manufacturerFilterEnabled\" [(ngModel)]=\"manufacturerFilter\">\r\n        <option *ngFor=\"let manufacturer of manufacturers\">{{manufacturer}}</option>\r\n    </select>\r\n</div>\r\n<table class=\"table table-striped\" *ngIf=\"data\">\r\n    <thead>\r\n        <tr>\r\n            <th>Manufacturer</th>\r\n            <th>Model</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let entry of filteredData\">\r\n            <td>{{entry.manufacturer}}</td>\r\n            <td>{{entry.model}}</td>\r\n            <td>\r\n                <div class=\"btn-group\">\r\n                    <a class=\"btn btn-default\" [href]=\"getEditUrl(entry)\"><span class=\"glyphicon glyphicon-edit\"></span></a>\r\n                    <button class=\"btn btn-danger\" (click)=\"deleteConfirm(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" (click)=\"add()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n<confirmation #confirmation></confirmation>"

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
	var router_1 = __webpack_require__(7);
	var message_bar_component_1 = __webpack_require__(27);
	var confirmation_component_1 = __webpack_require__(33);
	var fixture_definition_1 = __webpack_require__(57);
	var fixture_definitions_service_1 = __webpack_require__(56);
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
	        template: __webpack_require__(60),
	        providers: [fixture_definitions_service_1.FixtureDefinitionsService]
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, fixture_definitions_service_1.FixtureDefinitionsService])
	], FixtureDefinitionEditorComponent);
	exports.FixtureDefinitionEditorComponent = FixtureDefinitionEditorComponent;


/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page-header\">\r\n    <h1>Fixture Definition Editor</h1>\r\n</div>\r\n<message-bar #messageBar></message-bar>\r\n<form *ngIf=\"definition\" class=\"form-horizontal\" #editorForm=\"ngForm\">\r\n    <fieldset [disabled]=\"saving\">\r\n        <datalist id=\"allManufacturers\">\r\n            <option *ngFor=\"let manufacturer of allManufacturers\">{{manufacturer}}</option>\r\n        </datalist>\r\n        <labelled-input label=\"Manufacturer:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"manufacturer\" [(ngModel)]=\"definition.manufacturer\" #model=\"ngModel\"\r\n                list=\"allManufacturers\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Model:\">\r\n            <input required #input class=\"form-control\" type=\"text\" name=\"model\" [(ngModel)]=\"definition.name\" #model=\"ngModel\">\r\n        </labelled-input>\r\n        <labelled-input label=\"Type:\">\r\n            <select #input #model=\"ngModel\" class=\"form-control\" name=\"type\" [(ngModel)]=\"definition.type\">\r\n            <option>LED</option>\r\n            <option>Tungsten</option>\r\n            <option>Effect</option>\r\n        </select>\r\n        </labelled-input>\r\n        <datalist id=\"channelList\" name=\"channelList\">\r\n            <option>Master</option>\r\n            <option>Strobe</option>\r\n            <option>Red</option>\r\n            <option>Green</option>\r\n            <option>Blue</option>\r\n            <option>UV</option>\r\n            <option>ColorWheel</option>\r\n            <option>PanCoarse</option>\r\n            <option>PanFine</option>\r\n            <option>TiltCoarse</option>\r\n            <option>TiltFine</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Channels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>DMX</th>\r\n                            <th>Name</th>\r\n                            <th>Min</th>\r\n                            <th>Max</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let channel of definition.channels; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.dmx\" min=\"1\" max=\"512\" [name]=\"'channelDMX[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required [(unique)]=\"channelNames\" class=\"form-control\" type=\"text\" [(ngModel)]=\"channel.name\"\r\n                                        [name]=\"'channelName[' + i + ']'\" list=\"channelList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.min\" min=\"0\" max=\"255\" [name]=\"'channelMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"channel.max\" min=\"0\" max=\"255\" [name]=\"'channelMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeChannel(channel)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addChannel()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <datalist id=\"axisList\" name=\"axisList\">\r\n            <option>Pan</option>\r\n            <option>Tilt</option>\r\n        </datalist>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Movement Axis</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Min (degrees)</th>\r\n                            <th>Max (degrees)</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let movement of definition.movements; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" [unique]=\"colorWheelNames\" type=\"text\" [(ngModel)]=\"movement.name\"\r\n                                        [name]=\"'axisName[' + i + ']'\" list=\"axisList\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.min\" [name]=\"'axisMin[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" required class=\"form-control\" type=\"number\" [(ngModel)]=\"movement.max\" [name]=\"'axisMax[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeAxis(movement)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addAxis()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Color Wheels</div>\r\n            <div class=\"panel-body\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Color</th>\r\n                            <th>DMX Start</th>\r\n                            <th>DMX End</th>\r\n                            <th>Remove</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let entry of definition.colorWheel; let i = index\">\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" [unique]=\"colorWheelNames\" required class=\"form-control\" type=\"text\" [(ngModel)]=\"entry.name\"\r\n                                        [name]=\"'colorWheelName[' + i + ']'\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"color\" [(ngModel)]=\"entry.color\" [name]=\"'colorWheelColor[' + i + ']'\"\r\n                                    />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxStart\" [name]=\"'colorWheelMin[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <table-input>\r\n                                    <input #input #model=\"ngModel\" class=\"form-control\" type=\"number\" [(ngModel)]=\"entry.dmxEnd\" [name]=\"'colorWheelMax[' + i + ']'\"\r\n                                        min=\"0\" max=\"255\" />\r\n                                </table-input>\r\n                            </td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger\" (click)=\"removeColorWheelEntry(entry)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n                <button class=\"btn btn-success\" (click)=\"addColorWheelEntry()\"><span class=\"glyphicon glyphicon-plus\"></span></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!editorForm.valid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</button>\r\n        </div>\r\n    </fieldset>\r\n</form>"

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTBkNWUwMWZmOTQ1YjM2Y2NmYzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbWlubWF4L2luZGV4LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdW5pcXVlL3VuaXF1ZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3M/OWY2NCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMtcGFuZWwvc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3M/NGVhYyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC90YWJsZS1pbnB1dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzP2IyOTAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ncm91cHMvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtZWRpdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtZWRpdG9yLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlC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QUM7YUFDckMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDeEIsQ0FBQyxDQUFDLENBQUM7S0FDWCxDQUFDO0tBQ0wsdUNBQUM7QUFBRCxFQUFDO0FBbEo0QjtLQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzsrQkFBYSwyQ0FBbUI7cUVBQUM7QUFDOUI7S0FBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7K0JBQWUsOENBQXFCO3VFQUFDO0FBSHRELGlDQUFnQztLQUw1QyxnQkFBUyxDQUFDO1NBQ1AsUUFBUSxFQUFFLDRCQUE0QjtTQUN0QyxRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUE0QyxDQUFDO1NBQy9ELFNBQVMsRUFBRSxDQUFDLHVEQUF5QixDQUFDO01BQ3pDLENBQUM7c0NBZTZCLHVCQUFjLEVBQTBCLHVEQUF5QjtJQWRuRixnQ0FBZ0MsQ0FvSjVDO0FBcEpZLDZFQUFnQzs7Ozs7OztBQ2Y3Qyw2WEFBNFgsY0FBYywwL0RBQTAvRCwyL0ZBQTIvRixtOEVBQW04RSx5OUUiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMGQ1ZTAxZmY5NDViMzZjY2ZjNCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcblxuaW1wb3J0IHsgTUlOTUFYX0RJUkVDVElWRVMgfSBmcm9tICcuL2NvbXBvbmVudHMvbWlubWF4L2luZGV4JztcbmltcG9ydCB7IE1heFZhbHVlVmFsaWRhdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL21pbm1heC9pbmRleCc7XG5pbXBvcnQgeyBVbmlxdWVWYWxpZGF0b3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3VuaXF1ZS91bmlxdWUuZGlyZWN0aXZlXCI7XG5cbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGF0dXNQYW5lbENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zdGF0dXMvbWVzc2FnZS1iYXIvbWVzc2FnZS1iYXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYWJlbGxlZElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sYWJlbGxlZC1pbnB1dC9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYmxlSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IEdyb3Vwc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWZW51ZXNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBWZW51ZUVkaXRvckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLWVkaXRvci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFZlbnVlU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdmVudWVzL3ZlbnVlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3VwLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcblxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudCxcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgICAgICBHcm91cHNDb21wb25lbnQsXG4gICAgICAgIFZlbnVlc0NvbXBvbmVudCxcbiAgICAgICAgVmVudWVFZGl0b3JDb21wb25lbnQsXG4gICAgICAgIEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgRml4dHVyZURlZmluaXRpb25FZGl0b3JDb21wb25lbnQsXG5cbiAgICAgICAgTUlOTUFYX0RJUkVDVElWRVMsXG4gICAgICAgIFVuaXF1ZVZhbGlkYXRvcixcblxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBTdGF0dXNQYW5lbENvbXBvbmVudCxcbiAgICAgICAgTWVzc2FnZUJhckNvbXBvbmVudCxcbiAgICAgICAgTGFiZWxsZWRJbnB1dENvbXBvbmVudCxcbiAgICAgICAgVGFibGVJbnB1dENvbXBvbmVudCxcbiAgICAgICAgQ29uZmlybWF0aW9uQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdkYXNoYm9hcmQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZ3JvdXBzJywgY29tcG9uZW50OiBHcm91cHNDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ3ZlbnVlcycsIGNvbXBvbmVudDogVmVudWVzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICd2ZW51ZXMvbmV3JywgY29tcG9uZW50OiBWZW51ZUVkaXRvckNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAndmVudWVzLzppZCcsIGNvbXBvbmVudDogVmVudWVFZGl0b3JDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2ZpeHR1cmUtZGVmaW5pdGlvbnMnLCBjb21wb25lbnQ6IEZpeHR1cmVEZWZpbml0aW9uc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZml4dHVyZS1kZWZpbml0aW9ucy9uZXcnLCBjb21wb25lbnQ6IEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdmaXh0dXJlLWRlZmluaXRpb25zLzptYW51ZmFjdHVyZXIvOm1vZGVsJywgY29tcG9uZW50OiBGaXh0dXJlRGVmaW5pdGlvbkVkaXRvckNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnc2V0cycgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGVcbntcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYtbWVudT48L25hdi1tZW51PlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBib2R5LWNvbnRlbnRcXFwiPlxcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL21pbi12YWx1ZS12YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuZXhwb3J0ICogZnJvbSAnLi9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBNaW5WYWx1ZVZhbGlkYXRvciB9IGZyb20gJy4vbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXhWYWx1ZVZhbGlkYXRvciB9IGZyb20gJy4vbWF4LXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1JTk1BWF9ESVJFQ1RJVkVTOiBbYW55XSA9IFtNaW5WYWx1ZVZhbGlkYXRvciwgTWF4VmFsdWVWYWxpZGF0b3JdO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvaW5kZXgudHMiLCJpbXBvcnQgeyBBdHRyaWJ1dGUsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjb25zdCBNSU5fVkFMVUVfVkFMSURBVE9SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWluVmFsdWVWYWxpZGF0b3IpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbWluXVtmb3JtQ29udHJvbE5hbWVdLFttaW5dW2Zvcm1Db250cm9sXSxbbWluXVtuZ01vZGVsXScsXHJcbiAgICBwcm92aWRlcnM6IFtNSU5fVkFMVUVfVkFMSURBVE9SXSxcclxuICAgIGhvc3Q6IHsgJ1thdHRyLm1pbl0nOiAnbWluID8gbWluIDogMCcgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1pblZhbHVlVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkNoYW5nZXNcclxue1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcclxuXHJcbiAgICBASW5wdXQoKSBtaW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQEF0dHJpYnV0ZSgnbWluJykgbW46IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAobW4gIT09IHVuZGVmaW5lZCAmJiBtbiAhPT0gbnVsbClcclxuICAgICAgICB7XHQvLyBpc1ByZXNlbnRcclxuICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gcGFyc2VJbnQobW4sIDEwKTtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihhdHRyVmFsdWUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbiA9IG1uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBtaW5DaGFuZ2UgPSBjaGFuZ2VzWydtaW4nXTtcclxuICAgICAgICBpZiAobWluQ2hhbmdlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gTWluVmFsdWVWYWxpZGF0b3IubWluKHBhcnNlSW50KHRoaXMubWluLCAxMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0geyByZXR1cm4gdGhpcy5fdmFsaWRhdG9yKGMpOyB9XHJcblxyXG4gICAgc3RhdGljIG1pbihtbjogbnVtYmVyKTogVmFsaWRhdG9yRm5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gK2NvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiAodiA8IG1uID8geyAnbWluJzogeyAnbWluVmFsdWUnOiBtbiwgJ2FjdHVhbFZhbHVlJzogdiB9IH0gOiBudWxsKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9taW5tYXgvbWluLXZhbHVlLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiLCJpbXBvcnQgeyBBdHRyaWJ1dGUsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BWF9WQUxVRV9WQUxJREFUT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNYXhWYWx1ZVZhbGlkYXRvciksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1ttYXhdW2Zvcm1Db250cm9sTmFtZV0sW21pbl1bZm9ybUNvbnRyb2xdLFttaW5dW25nTW9kZWxdJyxcclxuICAgIHByb3ZpZGVyczogW01BWF9WQUxVRV9WQUxJREFUT1JdLFxyXG4gICAgaG9zdDogeyAnW2F0dHIubWF4XSc6ICdtYXggPyBtYXggOiAwJyB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWF4VmFsdWVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uQ2hhbmdlc1xyXG57XHJcbiAgICBwcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xyXG5cclxuICAgIEBJbnB1dCgpIG1heDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBAQXR0cmlidXRlKCdtYXgnKSBteDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChteCAhPT0gdW5kZWZpbmVkICYmIG14ICE9PSBudWxsKVxyXG4gICAgICAgIHtcdC8vIGlzUHJlc2VudFxyXG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBwYXJzZUludChteCwgMTApO1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKGF0dHJWYWx1ZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gbXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1heENoYW5nZSA9IGNoYW5nZXNbJ21heCddO1xyXG4gICAgICAgIGlmIChtYXhDaGFuZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlVmFsaWRhdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBNYXhWYWx1ZVZhbGlkYXRvci5tYXgocGFyc2VJbnQodGhpcy5tYXgsIDEwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7IHJldHVybiB0aGlzLl92YWxpZGF0b3IoYyk7IH1cclxuXHJcbiAgICBzdGF0aWMgbWF4KG14OiBudW1iZXIpOiBWYWxpZGF0b3JGblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHYgPSArY29udHJvbC52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICh2ID4gbXggPyB7ICdtYXgnOiB7ICdtYXhWYWx1ZSc6IG14LCAnYWN0dWFsVmFsdWUnOiB2IH0gfSA6IG51bGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL21pbm1heC9tYXgtdmFsdWUtdmFsaWRhdG9yLmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgSW5wdXQsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdW5pcXVlXVtuZ01vZGVsXSxbdW5pcXVlXVtmb3JtQ29udHJvbF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVbmlxdWVWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmlxdWVWYWxpZGF0b3Jcclxue1xyXG4gICAgQElucHV0KCkgdW5pcXVlOiBhbnlbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMudW5pcXVlID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hdGNoZXMgPSB0aGlzLnVuaXF1ZS5maWx0ZXIoKHZhbHVlOiBhbnkpID0+IGMudmFsdWUgPT09IHZhbHVlKTtcclxuICAgICAgICBpZiAoYy5kaXJ0eSAmJiBtYXRjaGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4geyB1bmlxdWU6IHsgdmFsaWQ6IGZhbHNlIH0gfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VuaXF1ZS91bmlxdWUuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmF2LW1lbnUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50XG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbXlOYXZiYXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPiBcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBocmVmPVxcXCIjXFxcIj5LYWRtaXVtIE9TQyBETVg8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVxcXCIgaWQ9XFxcIm15TmF2YmFyXFxcIj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgcm91dGVyTGluaz1cXFwiL2Rhc2hib2FyZFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24taG9tZVxcXCI+PC9zcGFuPiBIb21lPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1jb2dcXFwiPjwvc3Bhbj4gU2V0dXBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgcm91dGVyTGluaz1cXFwiL3NldHRpbmdzXFxcIj5TZXR0aW5nczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIHJvdXRlckxpbms9XFxcIi9ncm91cHNcXFwiPkdyb3VwczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIvdmVudWVzXFxcIj4gPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdFxcXCI+PC9zcGFuPiBWZW51ZXM8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiL2ZpeHR1cmUtZGVmaW5pdGlvbnNcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0XFxcIj48L3NwYW4+IEZpeHR1cmUgRGVmaW5pdGlvbnM8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L25hdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSBcIi4uL3N0YXR1c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0YXR1cy1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zdGF0dXMtcGFuZWwuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vc3RhdHVzLXBhbmVsLmNvbXBvbmVudC5jc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXR1c1BhbmVsQ29tcG9uZW50XHJcbntcclxuICAgIHB1YmxpYyBzdGF0dXM6IFN0YXR1cztcclxuICAgIEBJbnB1dChcIm5hbWVcIikgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IG5ldyBTdGF0dXMoXCJVbmtub3duXCIsIFwiVW5rbm93blwiKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQudHMiLCJleHBvcnQgY2xhc3MgU3RhdHVzXHJcbntcclxuICAgIHN0YXRpYyBTdGF0dXNUYWJsZTogU3RhdHVzVGFibGUgPSB7XHJcbiAgICAgICAgU3VjY2VzczogeyBhbGVydFN0eWxlOiBcImFsZXJ0LXN1Y2Nlc3NcIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1vay1zaWduXCIgfSxcclxuICAgICAgICBFcnJvcjogeyBhbGVydFN0eWxlOiBcImFsZXJ0LWRhbmdlclwiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLXJlbW92ZS1zaWduXCIgfSxcclxuICAgICAgICBXYXJuaW5nOiB7IGFsZXJ0U3R5bGU6IFwiYWxlcnQtd2FybmluZ1wiLCBnbHlwaEljb246IFwiZ2x5cGhpY29uLWluZm8tc2lnblwiIH0sXHJcbiAgICAgICAgVW5rbm93bjogeyBhbGVydFN0eWxlOiBcImFsZXJ0LWluZm9cIiwgZ2x5cGhJY29uOiBcImdseXBoaWNvbi1xdWVzdGlvbi1zaWduXCIgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY29kZTogU3RhdHVzQ29kZTtcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29kZTogU3RhdHVzQ29kZSwgbWVzc2FnZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGNvZGU6IFN0YXR1c0NvZGUsIG1lc3NhZ2U6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhbGVydFN0eWxlKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTdGF0dXMuU3RhdHVzVGFibGVbdGhpcy5jb2RlXS5hbGVydFN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZ2x5cGhJY29uKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBTdGF0dXMuU3RhdHVzVGFibGVbdGhpcy5jb2RlXS5nbHlwaEljb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0YXR1c0NvZGUgPSBcIlVua25vd25cIiB8IFwiRXJyb3JcIiB8IFwiU3VjY2Vzc1wiIHwgXCJXYXJuaW5nXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1c1RhYmxlXHJcbntcclxuICAgIFtrZXk6IHN0cmluZ106IFN0YXR1c0luZm87XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0dXNJbmZvXHJcbntcclxuICAgIGFsZXJ0U3R5bGU6IHN0cmluZztcclxuICAgIGdseXBoSWNvbjogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N0YXR1cy9zdGF0dXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdCB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPnt7bmFtZX19IDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIiBbbmdDbGFzc109XFxcInN0YXR1cy5hbGVydFN0eWxlXFxcIj5cXHJcXG4gICAgICAgIHt7c3RhdHVzLm1lc3NhZ2V9fTxicj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gc3RhdHVzLWdseXBoXFxcIiBbbmdDbGFzc109XFxcInN0YXR1cy5nbHlwaEljb25cXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zdGF0dXMvc3RhdHVzLXBhbmVsL3N0YXR1cy1wYW5lbC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGF0dXMtZ2x5cGgge1xcclxcbiAgICBmb250LXNpemU6IDZlbTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXMsIFN0YXR1c0NvZGUgfSBmcm9tIFwiLi4vc3RhdHVzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWVzc2FnZS1iYXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbWVzc2FnZS1iYXIuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJhckNvbXBvbmVudFxyXG57XHJcbiAgICBwcml2YXRlIG1lc3NhZ2VzOiBTdGF0dXNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlKHN0YXR1czogU3RhdHVzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubWVzc2FnZXMuaW5kZXhPZihzdGF0dXMpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKHN0YXR1c0NvZGU6IFN0YXR1c0NvZGUsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobmV3IFN0YXR1cyhzdGF0dXNDb2RlLCBtZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0Zvcj1cXFwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydFxcXCIgW25nQ2xhc3NdPVxcXCJtZXNzYWdlLmFsZXJ0U3R5bGVcXFwiPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcImNsb3NlXFxcIiAoY2xpY2spPVxcXCJyZW1vdmUobWVzc2FnZSlcXFwiIGFyaWEtbGFiZWw9XFxcImNsb3NlXFxcIj4mdGltZXM7PC9hPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvblxcXCIgW25nQ2xhc3NdPVxcXCJtZXNzYWdlLmdseXBoSWNvblxcXCI+PC9zcGFuPiB7e21lc3NhZ2UubWVzc2FnZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsYWJlbGxlZC1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9sYWJlbGxlZC1pbnB1dC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbGxlZElucHV0Q29tcG9uZW50XHJcbntcclxuICAgIEBJbnB1dCgpIHByaXZhdGUgbGFiZWw6IHN0cmluZztcclxuICAgIEBDb250ZW50Q2hpbGQoXCJtb2RlbFwiKSBwdWJsaWMgbW9kZWw6IEVsZW1lbnRSZWY7XHJcbiAgICBAQ29udGVudENoaWxkKFwiaW5wdXRcIikgcHVibGljIGlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaGFzLWVycm9yJzogbW9kZWwuZXJyb3JzICYmIG1vZGVsLnRvdWNoZWR9XFxcIj5cXHJcXG4gICAgPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC1zbS0yXFxcIiBbYXR0ci5mb3JdPVxcXCJpbnB1dC5uYW1lXFxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMFxcXCI+XFxyXFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ucmVxdWlyZWRcXFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5taW5cXFwiPlRoaXMgZmllbGQgaGFzIGEgbWluaW11bSB2YWx1ZSBvZiB7e21vZGVsLmVycm9ycz8ubWluLm1pblZhbHVlfX08L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy5tYXhcXFwiPlRoaXMgZmllbGQgaGFzIGEgbWF4aW11bSB2YWx1ZSBvZiB7e21vZGVsLmVycm9ycz8ubWF4Lm1heFZhbHVlfX08L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZGlydHkgJiYgbW9kZWwuZXJyb3JzPy51bmlxdWVcXFwiPkVudHJpZXMgaW4gdGhpcyBmaWVsZCBtdXN0IGJlIHVuaXF1ZTwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L2xhYmVsbGVkLWlucHV0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0YWJsZS1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90YWJsZS1pbnB1dC5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUlucHV0Q29tcG9uZW50XHJcbntcclxuICAgIEBJbnB1dCgpIHByaXZhdGUgbGFiZWw6IHN0cmluZztcclxuICAgIEBDb250ZW50Q2hpbGQoXCJtb2RlbFwiKSBwdWJsaWMgbW9kZWw6IEVsZW1lbnRSZWY7XHJcbiAgICBAQ29udGVudENoaWxkKFwiaW5wdXRcIikgcHVibGljIGlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xhYmVsbGVkLWlucHV0L3RhYmxlLWlucHV0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IFtuZ0NsYXNzXT1cXFwieydoYXMtZXJyb3InOiBtb2RlbC5lcnJvcnMgJiYgbW9kZWwudG91Y2hlZCB9XFxcIj5cXHJcXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ucmVxdWlyZWRcXFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibW9kZWwgJiYgbW9kZWwudG91Y2hlZCAmJiBtb2RlbC5lcnJvcnM/Lm1pblxcXCI+VGhpcyBmaWVsZCBoYXMgYSBtaW5pbXVtIHZhbHVlIG9mIHt7bW9kZWwuZXJyb3JzPy5taW4ubWluVmFsdWV9fTwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJtb2RlbCAmJiBtb2RlbC50b3VjaGVkICYmIG1vZGVsLmVycm9ycz8ubWF4XFxcIj5UaGlzIGZpZWxkIGhhcyBhIG1heGltdW0gdmFsdWUgb2Yge3ttb2RlbC5lcnJvcnM/Lm1heC5tYXhWYWx1ZX19PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcIm1vZGVsICYmIG1vZGVsLnRvdWNoZWQgJiYgbW9kZWwuZXJyb3JzPy51bmlxdWVcXFwiPkVudHJpZXMgaW4gdGhpcyBmaWVsZCBtdXN0IGJlIHVuaXF1ZTwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbGFiZWxsZWQtaW5wdXQvdGFibGUtaW5wdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbmZpcm1hdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoXCIuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzXCIpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtYXRpb25cIikgY29uZmlybWF0aW9uOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGhlYWRlcjogc3RyaW5nO1xyXG4gICAgYm9keTogc3RyaW5nO1xyXG4gICAgYWNjZXB0VmVyYjogc3RyaW5nO1xyXG4gICAgY2FuY2VsVmVyYjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyB2aXNpYmxlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHZpc2libGVBbmltYXRlID0gZmFsc2U7XHJcblxyXG4gICAgcmVzb2x2ZTogKHZhbHVlPzogYm9vbGVhbiB8IFByb21pc2VMaWtlPGJvb2xlYW4+KSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvdyhoZWFkZXI6IHN0cmluZywgYm9keTogc3RyaW5nLCBhY2NlcHRWZXJiOiBzdHJpbmcsIGNhbmNlbFZlcmI6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj5cclxuICAgIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gICAgICAgIHRoaXMuYWNjZXB0VmVyYiA9IGFjY2VwdFZlcmI7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxWZXJiID0gY2FuY2VsVmVyYjtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmlzaWJsZUFuaW1hdGUgPSB0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhpZGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUFuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmlzaWJsZSA9IGZhbHNlLCAzMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHRDbGljaygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWxDbGljaygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAjY29uZmlybWF0aW9uIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIFtuZ0NsYXNzXT1cXFwieydpbic6IHZpc2libGVBbmltYXRlfVxcXCIgW25nU3R5bGVdPVxcXCJ7J2Rpc3BsYXknOiB2aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJywgJ29wYWNpdHknOiB2aXNpYmxlQW5pbWF0ZSA/IDEgOiAwfVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxyXFxuICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcImNhbmNlbENsaWNrKClcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+e3toZWFkZXJ9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwPnt7Ym9keX19PC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJhY2NlcHRDbGljaygpXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj57e2FjY2VwdFZlcmJ9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgKGNsaWNrKT1cXFwiY2FuY2VsQ2xpY2soKVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+e3tjYW5jZWxWZXJifX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzUGFuZWxDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL3N0YXR1cy1wYW5lbC9zdGF0dXMtcGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVmVudWVTZXJ2aWNlIH0gZnJvbSBcIi4uL3ZlbnVlcy92ZW51ZS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNDb2RlIH0gZnJvbSBcIi4uL3N0YXR1cy9zdGF0dXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtWZW51ZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnRcclxue1xyXG4gICAgQFZpZXdDaGlsZChcIm1lc3NhZ2VCYXJcIikgbWVzc2FnZUJhcjogTWVzc2FnZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoXCJ2ZW51ZVwiKSB2ZW51ZTogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwic2FjblRyYW5zbWl0dGVyXCIpIHNhY25UcmFuc21pdHRlcjogU3RhdHVzUGFuZWxDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwib3NjTGlzdGVuZXJcIikgb3NjTGlzdGVuZXI6IFN0YXR1c1BhbmVsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChcImZpeHR1cmVzXCIpIGZpeHR1cmVzOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIHdlYlNvY2tldDogV2ViU29ja2V0O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNvY2tldFVSTCA9IGdldFNvY2tldFVSTChcIkluZGV4XCIpO1xyXG4gICAgcHJpdmF0ZSB2ZW51ZU5hbWVzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZlbnVlU2VydmljZTogVmVudWVTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHZlbnVlU2VydmljZS5nZXROYW1lcygpXHJcbiAgICAgICAgICAgIC50aGVuKG5hbWVzID0+IHRoaXMudmVudWVOYW1lcyA9IG5hbWVzKVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgdGhpcy53ZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KERhc2hib2FyZENvbXBvbmVudC5zb2NrZXRVUkwpO1xyXG4gICAgICAgIHRoaXMud2ViU29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldjogTWVzc2FnZUV2ZW50KSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IEpTT04ucGFyc2UoZXYuZGF0YSkgYXMgU3RhdHVzRGF0YTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1c1BhbmVsOiBTdGF0dXNQYW5lbENvbXBvbmVudDtcclxuICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMuY29udHJvbGxlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlZlbnVlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy52ZW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTQUNOVHJhbnNtaXR0ZXJzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzUGFuZWwgPSB0aGlzLnNhY25UcmFuc21pdHRlcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJPU0NMaXN0ZW5lcnNcIjpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNQYW5lbCA9IHRoaXMub3NjTGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJGaXh0dXJlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1BhbmVsID0gdGhpcy5maXh0dXJlc1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXR1c1BhbmVsLnN0YXR1cy51cGRhdGUoc3RhdHVzLmNvZGUsIHN0YXR1cy5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZVZlbnVlKHZlbnVlTmFtZTogc3RyaW5nKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmVudWVTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5hY3RpdmF0ZSh2ZW51ZU5hbWUpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIHZlbnVlTmFtZSArIFwiIHN1Y2Nlc3NmdWxseSBsb2FkZWRcIikpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0dXNEYXRhXHJcbntcclxuICAgIGNvZGU6IFN0YXR1c0NvZGU7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBjb250cm9sbGVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNvY2tldFVSTChjb250cm9sbGVyOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFjdGlvblVSTCA9IGdldEFjdGlvblVSTChjb250cm9sbGVyLCBcIlNvY2tldFwiKTtcclxuICAgIGxldCBzb2NrZXRVUkwgPSBhY3Rpb25VUkwucmVwbGFjZShcImh0dHBcIiwgXCJ3c1wiKTtcclxuICAgIHJldHVybiBzb2NrZXRVUkw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFjdGlvblVSTCguLi5wYXJ0czogc3RyaW5nW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IG9yaWdpbmFsVVJMOiBzdHJpbmcgPSBkb2N1bWVudC5VUkw7XHJcbiAgICBsZXQgdXJsUGFydHM6IHN0cmluZ1tdID0gZG9jdW1lbnQuVVJMLnNwbGl0KFwiL1wiKTtcclxuICAgIGxldCBwcm90b2NvbDogc3RyaW5nID0gdXJsUGFydHNbMF07XHJcbiAgICBsZXQgaG9zdDogc3RyaW5nID0gdXJsUGFydHNbMl07XHJcblxyXG4gICAgbGV0IHJvb3Q6IHN0cmluZyA9IHByb3RvY29sICsgXCIvL1wiICsgaG9zdDtcclxuXHJcbiAgICBsZXQgcGFydHNKb2luZWQgPSBwYXJ0cy5qb2luKFwiL1wiKTtcclxuXHJcbiAgICByZXR1cm4gcm9vdCArIFwiL1wiICsgcGFydHNKb2luZWQ7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgVmVudWUgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmVudWVTZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgdmVudWVVcmwgPSBcIi9hcGkvVmVudWVcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8VmVudWU+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy52ZW51ZVVybCArIFwiL1wiICsgaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgVmVudWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lcygpOiBQcm9taXNlPHN0cmluZ1tdPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudmVudWVVcmwgKyBcIi9hY3RpdmF0ZS9cIiArIGlkKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+RGFzaGJvYXJkPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICN2ZW51ZSBuYW1lPVxcXCJWZW51ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiICpuZ0lmPVxcXCJ2ZW51ZU5hbWVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiPkxvYWQgVmVudWVcXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgdmVudWVOYW1lIG9mIHZlbnVlTmFtZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcImFjdGl2YXRlVmVudWUodmVudWVOYW1lKVxcXCI+e3t2ZW51ZU5hbWV9fTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3N0YXR1cy1wYW5lbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zXFxcIj5cXHJcXG4gICAgICAgIDxzdGF0dXMtcGFuZWwgI3NhY25UcmFuc21pdHRlciBuYW1lPVxcXCJzQUNOIFRyYW5zbWl0dGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvc2FjblRyYW5zbWl0dGVyTGl2ZVxcXCI+TGl2ZTwvYT5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcclxcbiAgICAgICAgPHN0YXR1cy1wYW5lbCAjb3NjTGlzdGVuZXIgbmFtZT1cXFwiT1NDIExpc3RlbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiByb3V0ZXJMaW5rPVxcXCIvb3NjTGlzdGVuZXJMaXZlXFxcIj5MaXZlPC9hPlxcclxcbiAgICAgICAgPC9zdGF0dXMtcGFuZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+XFxyXFxuICAgICAgICA8c3RhdHVzLXBhbmVsICNmaXh0dXJlcyBuYW1lPVxcXCJGaXh0dXJlc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgcm91dGVyTGluaz1cXFwiL2ZpeHR1cmVzTGl2ZVxcXCI+TGl2ZTwvYT5cXHJcXG4gICAgICAgIDwvc3RhdHVzLXBhbmVsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vc2V0dGluZ3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgVW5pY2FzdFRhcmdldCB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5cclxudmFyICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NldHRpbmdzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtTZXR0aW5nc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG4gICAgc2F2aW5nOiBib29sZWFuO1xyXG4gICAgdGVzdEVsZW1lbnQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzU2VydmljZTogU2V0dGluZ3NTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGVzdEVsZW1lbnQgPSBcInN0dWZmXCI7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU2VydmljZS5nZXQoKS50aGVuKGRhdGEgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzYXZlKCk6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldHRpbmdzU2VydmljZS5zYXZlKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiU3VjY2Vzc1wiLCBcIlNhdmVkIFN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKHJlYXNvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVGFyZ2V0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0LnB1c2gobmV3IFVuaWNhc3RUYXJnZXQoXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVUYXJnZXQoaW5kZXg6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlVGFyZ2V0cygpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGJhZFRhcmdldHMgPSB0aGlzLnNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0LmZpbHRlcigodmFsdWU6IFVuaWNhc3RUYXJnZXQpID0+IHZhbHVlLnRhcmdldCA9PSBcIlwiIHx8IHZhbHVlLnRhcmdldCA9PSB1bmRlZmluZWQgfHwgdmFsdWUudGFyZ2V0ID09IG51bGwpO1xyXG4gICAgICAgIHJldHVybiBiYWRUYXJnZXRzLmxlbmd0aCA9PSAwO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgU2V0dGluZ3MsIFNldHRpbmdzRGF0YSB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Vcclxue1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nc1VybCA9IFwiL2FwaS9TZXR0aW5nc1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCgpOiBQcm9taXNlPFNldHRpbmdzPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2V0dGluZ3NVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgU2V0dGluZ3NEYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5ncy5kZXNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlKGRhdGE6IFNldHRpbmdzKTogUHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnNldHRpbmdzVXJsLCBkYXRhLnNlcmlhbGl6ZSgpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IFxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkJywgZXJyb3IpOyAvLyBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiLCJleHBvcnQgY2xhc3MgU2V0dGluZ3Ncclxue1xyXG4gICAgd2ViUG9ydDogbnVtYmVyO1xyXG4gICAgb3NjUG9ydDogbnVtYmVyO1xyXG4gICAgc2FjblRyYW5zbWl0dGVyOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53ZWJQb3J0ID0gODA7XHJcbiAgICAgICAgdGhpcy5vc2NQb3J0ID0gOTAwMDtcclxuICAgICAgICB0aGlzLnNhY25UcmFuc21pdHRlciA9IG5ldyBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5ncygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemUoZGF0YTogU2V0dGluZ3NEYXRhKTogU2V0dGluZ3NcclxuICAgIHtcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcclxuICAgICAgICBzZXR0aW5ncy53ZWJQb3J0ID0gZGF0YS53ZWJQb3J0O1xyXG4gICAgICAgIHNldHRpbmdzLm9zY1BvcnQgPSBkYXRhLm9zY1BvcnQ7XHJcbiAgICAgICAgc2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyID0gU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3MuZGVzZXJpYWxpemUoZGF0YS5zYWNuVHJhbnNtaXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IFNldHRpbmdzRGF0YVxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRhOiBTZXR0aW5nc0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHdlYlBvcnQ6IHRoaXMud2ViUG9ydCxcclxuICAgICAgICAgICAgb3NjUG9ydDogdGhpcy5vc2NQb3J0LFxyXG4gICAgICAgICAgICBzYWNuVHJhbnNtaXR0ZXI6IHRoaXMuc2FjblRyYW5zbWl0dGVyLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNBQ05UcmFuc21pdHRlclNldHRpbmdzXHJcbntcclxuICAgIGRlbGF5OiBudW1iZXI7XHJcbiAgICBtdWx0aWNhc3Q6IGJvb2xlYW47XHJcbiAgICB1bmljYXN0OiBVbmljYXN0VGFyZ2V0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVsYXkgPSAwO1xyXG4gICAgICAgIHRoaXMubXVsdGljYXN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVuaWNhc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplKGRhdGE6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YSk6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRyYW5zbWl0dGVyID0gbmV3IFNBQ05UcmFuc21pdHRlclNldHRpbmdzKCk7XHJcbiAgICAgICAgdHJhbnNtaXR0ZXIuZGVsYXkgPSBkYXRhLmRlbGF5O1xyXG4gICAgICAgIHRyYW5zbWl0dGVyLm11bHRpY2FzdCA9IGRhdGEubXVsdGljYXN0O1xyXG4gICAgICAgIHRyYW5zbWl0dGVyLnVuaWNhc3QgPSBkYXRhLnVuaWNhc3QubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiBuZXcgVW5pY2FzdFRhcmdldCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc21pdHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YVxyXG4gICAge1xyXG4gICAgICAgIGxldCBkYXRhOiBTQUNOVHJhbnNtaXR0ZXJTZXR0aW5nc0RhdGEgPSB7XHJcbiAgICAgICAgICAgIGRlbGF5OiB0aGlzLmRlbGF5LFxyXG4gICAgICAgICAgICBtdWx0aWNhc3Q6IHRoaXMubXVsdGljYXN0LFxyXG4gICAgICAgICAgICB1bmljYXN0OiB0aGlzLnVuaWNhc3QubWFwKCh2YWx1ZTogVW5pY2FzdFRhcmdldCkgPT4gdmFsdWUudGFyZ2V0KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbmljYXN0VGFyZ2V0XHJcbntcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0OiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NEYXRhXHJcbntcclxuICAgIHdlYlBvcnQ6IG51bWJlcjtcclxuICAgIG9zY1BvcnQ6IG51bWJlcjtcclxuICAgIHNhY25UcmFuc21pdHRlcjogU0FDTlRyYW5zbWl0dGVyU2V0dGluZ3NEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNBQ05UcmFuc21pdHRlclNldHRpbmdzRGF0YVxyXG57XHJcbiAgICBkZWxheTogbnVtYmVyO1xyXG4gICAgbXVsdGljYXN0OiBib29sZWFuO1xyXG4gICAgdW5pY2FzdDogc3RyaW5nW107XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqcXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPlNldHRpbmdzPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48cCAqbmdJZj1cXFwiIXNldHRpbmdzXFxcIj5Mb2FkaW5nLi4uPC9wPlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJzZXR0aW5nc1xcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgI3NldHRpbmdzRm9ybT1cXFwibmdGb3JtXFxcIj5cXHJcXG4gICAgPGZpZWxkc2V0IFtkaXNhYmxlZF09XFxcInNhdmluZ1xcXCI+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIkhUVFAgUG9ydDpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJ3ZWJQb3J0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNjU1MzVcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy53ZWJQb3J0XFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiXFxyXFxuICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcIk9TQyBQb3J0OlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJudW1iZXJcXFwiIG5hbWU9XFxcIm9zY1BvcnRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI2NTUzNVxcXCIgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzLm9zY1BvcnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgLz5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8bGFiZWxsZWQtaW5wdXQgbGFiZWw9XFxcInNBQ04gVHJhbnNtaXR0ZXIgRGVsYXkgKG1zKTpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBuYW1lPVxcXCJzYWNuVHJhbnNtaXR0ZXJEZWxheVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwMDAwXFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLmRlbGF5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIC8+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJzQUNOIFRyYW5zbWl0dGVyIE11bHRpY2FzdDpcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCAjaW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInNhY25NdWx0aWNhc3RcXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5ncy5zYWNuVHJhbnNtaXR0ZXIubXVsdGljYXN0XFxcIiAjc2Fjbk11bHRpY2FzdD1cXFwibmdNb2RlbFxcXCIgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiA+TXVsdGljYXN0PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGFiZWxsZWQtaW5wdXQ+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5zQUNOIFVuaWNhc3QgVGFyZ2V0czwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgdGFyZ2V0IG9mIHNldHRpbmdzLnNhY25UcmFuc21pdHRlci51bmljYXN0OyBsZXQgaSA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGNvbC1zbS04XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3Muc2FjblRyYW5zbWl0dGVyLnVuaWNhc3RbaV0udGFyZ2V0XFxcIiBbbmFtZV09XFxcIid1bmljYXN0WycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZVRhcmdldChpKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtZm9vdGVyXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZFRhcmdldCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIiBbZGlzYWJsZWRdPVxcXCIhc2V0dGluZ3NGb3JtLnZhbGlkXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1xcXCI+PC9zcGFuPiBTYXZlPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9maWVsZHNldD5cXHJcXG48L2Zvcm0+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgR3JvdXBTZXJ2aWNlIH0gZnJvbSBcIi4vZ3JvdXAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCIuL2dyb3VwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JvdXBzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2dyb3Vwcy5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbR3JvdXBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JvdXBzQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcblxyXG4gICAgc2F2aW5nOiBib29sZWFuO1xyXG4gICAgZ3JvdXBzOiBHcm91cFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvdXBzU2VydmljZTogR3JvdXBTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ncm91cHNTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IEdyb3VwW10pID0+IHRoaXMuZ3JvdXBzID0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzLnB1c2gobmV3IEdyb3VwKFwiXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZShncm91cDogR3JvdXApOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XHJcbiAgICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmUoZ3JvdXA6IEdyb3VwLCBvZmZzZXQ6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkX2luZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XHJcbiAgICAgICAgbGV0IG5ld19pbmRleCA9IG9sZF9pbmRleCArIG9mZnNldDtcclxuXHJcbiAgICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKG5ld19pbmRleCwgMCwgdGhpcy5ncm91cHMuc3BsaWNlKG9sZF9pbmRleCwgMSlbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGUoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdyb3Vwcy5ldmVyeSgodmFsdWU6IEdyb3VwKSA9PiB2YWx1ZS5uYW1lICE9IFwiXCIgJiYgdmFsdWUubmFtZSAhPSB1bmRlZmluZWQgJiYgdmFsdWUubmFtZSAhPSBudWxsKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGdyb3VwTmFtZXMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHMubWFwKCh2YWx1ZTogR3JvdXApID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2F2ZSgpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5ncm91cHNTZXJ2aWNlLnB1dCh0aGlzLmdyb3Vwcyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJTdWNjZXNzXCIsIFwiU2F2ZWQgc3VjY2Vzc2Z1bGx5XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChyZWFzb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuXHJcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIi4vZ3JvdXBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyb3VwU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIGdyb3Vwc1VybCA9IFwiL2FwaS9Hcm91cFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCgpOiBQcm9taXNlPEdyb3VwW10+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ncm91cHNVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IChyZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiBuZXcgR3JvdXAodmFsdWUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dChncm91cHM6IEdyb3VwW10pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5ncm91cHNVcmwsIGdyb3Vwcy5tYXAoKHZhbHVlOiBHcm91cCkgPT4gdmFsdWUubmFtZSkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIEdyb3VwXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dyb3Vwcy9ncm91cC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5Hcm91cHM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxmb3JtICpuZ0lmPVxcXCJncm91cHNcXFwiICNncm91cHNGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JkZXI8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBncm91cCBvZiBncm91cHM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKGNsaWNrKT1cXFwibW92ZShncm91cCwgLTEpXFxcIiBbZGlzYWJsZWRdPVxcXCJpID09IDBcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAoY2xpY2spPVxcXCJtb3ZlKGdyb3VwLCAxKVxcXCIgW2Rpc2FibGVkXT1cXFwiaSA9PSBncm91cHMubGVuZ3RoIC0gMVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93blxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBbdW5pcXVlXT1cXFwiZ3JvdXBOYW1lc1xcXCIgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImdyb3VwLm5hbWVcXFwiIFtuYW1lXT1cXFwiJ2dyb3VwTmFtZVsnICsgaSArICddJ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcImRlbGV0ZShncm91cClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj4gQWRkPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgW2Rpc2FibGVkXT1cXFwiIWdyb3Vwc0Zvcm0udmFsaWRcXFwiIChjbGljayk9XFxcInNhdmUoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1lc3NhZ2VCYXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc3RhdHVzL21lc3NhZ2UtYmFyL21lc3NhZ2UtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVmVudWVTZXJ2aWNlIH0gZnJvbSBcIi4vdmVudWUuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ZlbnVlcycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92ZW51ZXMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1ZlbnVlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbnVlc0NvbXBvbmVudFxyXG57XHJcbiAgICBAVmlld0NoaWxkKFwibWVzc2FnZUJhclwiKSBtZXNzYWdlQmFyOiBNZXNzYWdlQmFyQ29tcG9uZW50O1xyXG4gICAgZGF0YTogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2ZW51ZVNlcnZpY2U6IFZlbnVlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZlbnVlU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0TmFtZXMoKVxyXG4gICAgICAgICAgICAudGhlbigodmFsdWU6IHN0cmluZ1tdKSA9PiB0aGlzLmRhdGEgPSB2YWx1ZSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFZGl0VXJsKGVudHJ5OiBWZW51ZVNrZWxldG9uKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcInZlbnVlcy9cIiArIGVudHJ5Lm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgdmVudWVzKCk6IFZlbnVlU2tlbGV0b25bXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7IHJldHVybiB7IG5hbWU6IHZhbHVlIH0gfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFZlbnVlU2tlbGV0b25cclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPlZlbnVlczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPG1lc3NhZ2UtYmFyICNtZXNzYWdlQmFyPjwvbWVzc2FnZS1iYXI+XFxyXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIiAqbmdJZj1cXFwiZGF0YVxcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+VmVudWU8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGhlYWQ+XFxyXFxuICAgIDx0Ym9keT5cXHJcXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiB2ZW51ZXNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZD57e2VudHJ5Lm5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgW2hyZWZdPVxcXCJnZXRFZGl0VXJsKGVudHJ5KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCI+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJkZWxldGVDb25maXJtKGVudHJ5KVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJhZGQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbjxjb25maXJtYXRpb24gI2NvbmZpcm1hdGlvbj48L2NvbmZpcm1hdGlvbj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBWZW51ZSwgVW5pdmVyc2UsIEZpeHR1cmUgfSBmcm9tIFwiLi92ZW51ZVwiO1xyXG5cclxuaW1wb3J0IHsgVmVudWVTZXJ2aWNlIH0gZnJvbSBcIi4vdmVudWUuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ZlbnVlLWVkaXRvcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92ZW51ZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHByb3ZpZGVyczogW1ZlbnVlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZlbnVlRWRpdG9yQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiY29uZmlybWF0aW9uXCIpIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgb3JpZ2luYWxOYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHNhdmluZzogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIHZlbnVlOiBWZW51ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSB2ZW51ZVNlcnZpY2U6IFZlbnVlU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTmV3SXRlbSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52ZW51ZSA9IG5ldyBWZW51ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZlbnVlU2VydmljZVxyXG4gICAgICAgICAgICAgICAgLmdldCh0aGlzLm9yaWdpbmFsTmFtZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogVmVudWUpID0+IHRoaXMudmVudWUgPSB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB0aGlzLm1lc3NhZ2VCYXIuYWRkKFwiRXJyb3JcIiwgcmVhc29uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNOZXdJdGVtKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbE5hbWUgPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFVuaXZlcnNlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZlbnVlLnVuaXZlcnNlcy5wdXNoKG5ldyBVbml2ZXJzZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZVVuaXZlcnNlKGluZGV4OiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52ZW51ZS51bml2ZXJzZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUtZWRpdG9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24gfSBmcm9tIFwiLi4vZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZW51ZVxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB1bml2ZXJzZXM6IFVuaXZlcnNlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51bml2ZXJzZXMgPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHVuaXZlcnNlSUQ6IG51bWJlcjtcclxuICAgIGZpeHR1cmVzOiBGaXh0dXJlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51bml2ZXJzZUlEID0gMTtcclxuICAgICAgICB0aGlzLmZpeHR1cmVzID0gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlXHJcbntcclxuICAgIGNoYW5uZWw6IG51bWJlcjtcclxuICAgIGdyb3VwOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uO1xyXG4gICAgb3B0aW9uczogRml4dHVyZURlZmluaXRpb25PcHRpb25zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWwgPSAxO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gbmV3IEZpeHR1cmVEZWZpbml0aW9uT3B0aW9ucygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb25PcHRpb25zXHJcbntcclxuICAgIG1heEJyaWdodG5lc3M6IG51bWJlcjtcclxuICAgIGF4aXNJbnZlcnNpb25zOiBzdHJpbmdbXTtcclxuICAgIGF4aXNSZXN0cmljdGlvbnM6IEF4aXNSZXN0cmljdGlvbk9wdGlvbnNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYXhCcmlnaHRuZXNzID0gMTtcclxuICAgICAgICB0aGlzLmF4aXNJbnZlcnNpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5heGlzUmVzdHJpY3Rpb25zID0gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBeGlzUmVzdHJpY3Rpb25PcHRpb25zXHJcbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG1pbjogbnVtYmVyO1xyXG4gICAgbWF4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5taW4gPSAwO1xyXG4gICAgICAgIHRoaXMubWF4ID0gMDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy92ZW51ZXMvdmVudWUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlxcclxcbiAgICA8aDE+VmVudWUgRWRpdG9yPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwidmVudWVcXFwiIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWxcXFwiICNlZGl0b3JGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICA8ZmllbGRzZXQgW2Rpc2FibGVkXT1cXFwic2F2aW5nXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTmFtZTpcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCAjaW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcInZlbnVlLm5hbWVcXFwiICNtb2RlbD1cXFwibmdNb2RlbFxcXCI+XFxyXFxuICAgICAgICA8L2xhYmVsbGVkLWlucHV0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCI+VW5pdmVyc2VzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vbml2ZXJzZSBOdW1iZXI8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB1bml2ZXJzZSBvZiB2ZW51ZS51bml2ZXJzZXM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1bml2ZXJzZS5uYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbbmFtZV09XFxcIid1bml2ZXJzZU5hbWVbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVuaXZlcnNlLnVuaXZlcnNlSURcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjY1NTM1XFxcIiBbbmFtZV09XFxcIid1bml2ZXJzZU51bWJlclsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlVW5pdmVyc2UoaSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkVW5pdmVyc2UoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcInNhdmUoKVxcXCIgW2Rpc2FibGVkXT1cXFwiIWVkaXRvckZvcm0udmFsaWRcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1kaXNrXFxcIj48L3NwYW4+IFNhdmU8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2ZpZWxkc2V0PlxcclxcbjwvZm9ybT5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3ZlbnVlcy92ZW51ZS1lZGl0b3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZml4dHVyZS1kZWZpbml0aW9ucycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maXh0dXJlLWRlZmluaXRpb25zLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBwcm92aWRlcnM6IFtGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb25zQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiY29uZmlybWF0aW9uXCIpIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uQ29tcG9uZW50O1xyXG4gICAgbWFudWZhY3R1cmVyRmlsdGVyRW5hYmxlZDogYm9vbGVhbjtcclxuICAgIG1hbnVmYWN0dXJlckZpbHRlcjogc3RyaW5nO1xyXG4gICAgZGF0YTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZml4dHVyZURlZmluaXRpb25zU2VydmljZTogRml4dHVyZURlZmluaXRpb25zU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldFNrZWxldG9ucygpXHJcbiAgICAgICAgICAgIC50aGVuKCh2YWx1ZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbltdKSA9PiB0aGlzLmRhdGEgPSB2YWx1ZSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBtYW51ZmFjdHVyZXJzKCk6IHN0cmluZ1tdXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxyXG4gICAgICAgICAgICAubWFwKCh2YWx1ZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbikgPT4gdmFsdWUubWFudWZhY3R1cmVyKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhcnJheTogc3RyaW5nW10pID0+IGFycmF5LmluZGV4T2YodmFsdWUpID09PSBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgZmlsdGVyZWREYXRhKCk6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLm1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbHRlcigodmFsdWU6IEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b24pID0+IHZhbHVlLm1hbnVmYWN0dXJlciA9PSB0aGlzLm1hbnVmYWN0dXJlckZpbHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RWRpdFVybChmaXh0dXJlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFwiZml4dHVyZS1kZWZpbml0aW9uc1wiICsgXCIvXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiL1wiICsgZml4dHVyZS5tb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGRlbGV0ZUNvbmZpcm0oZml4dHVyZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb25maXJtYXRpb24uc2hvdyhcclxuICAgICAgICAgICAgXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgZml4dHVyZSBkZWZpbml0aW9uIGZvciBcIiArIGZpeHR1cmUubWFudWZhY3R1cmVyICsgXCIgXCIgKyBmaXh0dXJlLm1vZGVsICsgXCI/XCIsXHJcbiAgICAgICAgICAgIFwiRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFwiQ2FuY2VsXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1NlcnZpY2VcclxuICAgICAgICAgICAgICAgIC5kZWxldGUoZml4dHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQmFyLmFkZChcIlN1Y2Nlc3NcIiwgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIiBcIiArIGZpeHR1cmUubW9kZWwgKyBcIiB3YXMgZGVsZXRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRhdGEuaW5kZXhPZihmaXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVhc29uID0+IHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCBcIkNvdWxkIG5vdCBkZWxldGUgXCIgKyBmaXh0dXJlLm1hbnVmYWN0dXJlciArIFwiIFwiICsgZml4dHVyZS5tb2RlbCArIFwiLiBcIiArIHJlYXNvbikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9maXh0dXJlLWRlZmluaXRpb25zL25ld1wiO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiwgRml4dHVyZURlZmluaXRpb24sIEZpeHR1cmVEZWZpbml0aW9uRGF0YSB9IGZyb20gXCIuL2ZpeHR1cmUtZGVmaW5pdGlvblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRml4dHVyZURlZmluaXRpb25zU2VydmljZVxyXG57XHJcbiAgICBwcml2YXRlIGZpeHR1cmVEZWZpbml0aW9uc1VybCA9IFwiL2FwaS9GaXh0dXJlRGVmaW5pdGlvblwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldFNrZWxldG9ucygpOiBQcm9taXNlPEZpeHR1cmVEZWZpbml0aW9uU2tlbGV0b25bXT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1VybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gKHJlc3BvbnNlLmpzb24oKSBhcyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQobWFudWZhY3R1cmVyOiBzdHJpbmcsIG1vZGVsOiBzdHJpbmcpOiBQcm9taXNlPEZpeHR1cmVEZWZpbml0aW9uPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZml4dHVyZURlZmluaXRpb25zVXJsICsgXCIvXCIgKyBtYW51ZmFjdHVyZXIgKyBcIi9cIiArIG1vZGVsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAocmVzcG9uc2UuanNvbigpIGFzIEZpeHR1cmVEZWZpbml0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRml4dHVyZURlZmluaXRpb24ubG9hZChkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1dChtYW51ZmFjdHVyZXI6IHN0cmluZywgbW9kZWw6IHN0cmluZywgZGVmaW5pdGlvbjogRml4dHVyZURlZmluaXRpb24pOiBQcm9taXNlPHZvaWQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5maXh0dXJlRGVmaW5pdGlvbnNVcmwgKyBcIi9cIiArIG1hbnVmYWN0dXJlciArIFwiL1wiICsgbW9kZWwsIGRlZmluaXRpb24pXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoZml4dHVyZTogRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbik6IFByb21pc2U8dm9pZD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmZpeHR1cmVEZWZpbml0aW9uc1VybCArIFwiL1wiICsgZml4dHVyZS5tYW51ZmFjdHVyZXIgKyBcIi9cIiArIGZpeHR1cmUubW9kZWwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlLnRzIiwiZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uIGltcGxlbWVudHMgRml4dHVyZURlZmluaXRpb25EYXRhXHJcbntcclxuICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogXCJMRURcIiB8IFwiVHVuZ3N0ZW5cIiB8IFwiRWZmZWN0XCI7XHJcblxyXG4gICAgY2hhbm5lbHM6IERNWENoYW5uZWxbXTtcclxuICAgIG1vdmVtZW50czogQXhpc1tdO1xyXG4gICAgY29sb3JXaGVlbDogQ29sb3JXaGVlbEVudHJ5W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5tYW51ZmFjdHVyZXIgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IFwiTEVEXCI7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IFtdO1xyXG4gICAgICAgIHRoaXMubW92ZW1lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xvcldoZWVsID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQoZGF0YTogRml4dHVyZURlZmluaXRpb25EYXRhKTogRml4dHVyZURlZmluaXRpb25cclxuICAgIHtcclxuICAgICAgICBsZXQgZGVmaW5pdGlvbiA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmaW5pdGlvbiwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRml4dHVyZURlZmluaXRpb25EYXRhXHJcbntcclxuICAgIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogXCJMRURcIiB8IFwiVHVuZ3N0ZW5cIiB8IFwiRWZmZWN0XCI7XHJcblxyXG4gICAgY2hhbm5lbHM6IERNWENoYW5uZWxbXTtcclxuICAgIG1vdmVtZW50czogQXhpc1tdO1xyXG4gICAgY29sb3JXaGVlbDogQ29sb3JXaGVlbEVudHJ5W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uXHJcbntcclxuICAgIHB1YmxpYyBtYW51ZmFjdHVyZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyBtb2RlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRE1YQ2hhbm5lbFxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkbXg6IG51bWJlcjtcclxuICAgIG1pbjogbnVtYmVyO1xyXG4gICAgbWF4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgZG14PzogbnVtYmVyLCBtaW4/OiBudW1iZXIsIG1heD86IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lID8gbmFtZSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5kbXggPSBkbXggPyBkbXggOiAxO1xyXG4gICAgICAgIHRoaXMubWluID0gbWluID8gbWluIDogMDtcclxuICAgICAgICB0aGlzLm1heCA9IG1heCA/IG1heCA6IDI1NTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF4aXNcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yV2hlZWxFbnRyeVxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkbXhTdGFydDogbnVtYmVyO1xyXG4gICAgZG14RW5kOiBudW1iZXI7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIGRteFN0YXJ0PzogbnVtYmVyLCBkbXhFbmQ/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgPyBuYW1lIDogXCJcIjtcclxuICAgICAgICB0aGlzLmRteFN0YXJ0ID0gZG14U3RhcnQgPyBkbXhTdGFydCA6IDA7XHJcbiAgICAgICAgdGhpcy5kbXhFbmQgPSBkbXhFbmQgPyBkbXhFbmQgOiAyNTU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yID8gY29sb3IgOiBcIjAwMDAwMFwiO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZpeHR1cmUtZGVmaW5pdGlvbnMvZml4dHVyZS1kZWZpbml0aW9uLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPGgxPkZpeHR1cmUgRGVmaW5pdGlvbnM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjxtZXNzYWdlLWJhciAjbWVzc2FnZUJhcj48L21lc3NhZ2UtYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZm9ybS1pbmxpbmVcXFwiICpuZ0lmPVxcXCJkYXRhXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgWyhuZ01vZGVsKV09XFxcIm1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgRmlsdGVyIGJ5IG1hbnVmYWN0dXJlclxcclxcbiAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxzZWxlY3QgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW2Rpc2FibGVkXT1cXFwiIW1hbnVmYWN0dXJlckZpbHRlckVuYWJsZWRcXFwiIFsobmdNb2RlbCldPVxcXCJtYW51ZmFjdHVyZXJGaWx0ZXJcXFwiPlxcclxcbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBtYW51ZmFjdHVyZXIgb2YgbWFudWZhY3R1cmVyc1xcXCI+e3ttYW51ZmFjdHVyZXJ9fTwvb3B0aW9uPlxcclxcbiAgICA8L3NlbGVjdD5cXHJcXG48L2Rpdj5cXHJcXG48dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiICpuZ0lmPVxcXCJkYXRhXFxcIj5cXHJcXG4gICAgPHRoZWFkPlxcclxcbiAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aD5NYW51ZmFjdHVyZXI8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aD5Nb2RlbDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIGZpbHRlcmVkRGF0YVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7ZW50cnkubWFudWZhY3R1cmVyfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57e2VudHJ5Lm1vZGVsfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIFtocmVmXT1cXFwiZ2V0RWRpdFVybChlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcXFwiPjwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlQ29uZmlybShlbnRyeSlcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcbjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkKClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG48Y29uZmlybWF0aW9uICNjb25maXJtYXRpb24+PC9jb25maXJtYXRpb24+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9maXh0dXJlLWRlZmluaXRpb25zL2ZpeHR1cmUtZGVmaW5pdGlvbnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3N0YXR1cy9tZXNzYWdlLWJhci9tZXNzYWdlLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbiwgRml4dHVyZURlZmluaXRpb25Ta2VsZXRvbiwgRE1YQ2hhbm5lbCwgQXhpcywgQ29sb3JXaGVlbEVudHJ5IH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBGaXh0dXJlRGVmaW5pdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vZml4dHVyZS1kZWZpbml0aW9ucy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZml4dHVyZS1kZWZpbml0aW9ucy1lZGl0b3InLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZml4dHVyZS1kZWZpbml0aW9uLWVkaXRvci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgcHJvdmlkZXJzOiBbRml4dHVyZURlZmluaXRpb25zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpeHR1cmVEZWZpbml0aW9uRWRpdG9yQ29tcG9uZW50XHJcbntcclxuICAgIEBWaWV3Q2hpbGQoXCJtZXNzYWdlQmFyXCIpIG1lc3NhZ2VCYXI6IE1lc3NhZ2VCYXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKFwiY29uZmlybWF0aW9uXCIpIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgb3JpZ2luYWxNYW51ZmFjdHVyZXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgb3JpZ2luYWxNb2RlbDogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgYWxsTWFudWZhY3R1cmVyczogc3RyaW5nW107XHJcblxyXG4gICAgcHJpdmF0ZSBkZWZpbml0aW9uOiBGaXh0dXJlRGVmaW5pdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIHNhdmluZzogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBmaXh0dXJlU2VydmljZTogRml4dHVyZURlZmluaXRpb25zU2VydmljZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFsbE1hbnVmYWN0dXJlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTWFudWZhY3R1cmVyID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ21hbnVmYWN0dXJlciddO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxNb2RlbCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydtb2RlbCddO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc05ld0l0ZW0oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IG5ldyBGaXh0dXJlRGVmaW5pdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmZpeHR1cmVTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAuZ2V0KHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXIsIHRoaXMub3JpZ2luYWxNb2RlbClcclxuICAgICAgICAgICAgICAgIC50aGVuKGRlZmluaXRpb24gPT4gdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gdGhpcy5tZXNzYWdlQmFyLmFkZChcIkVycm9yXCIsIHJlYXNvbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maXh0dXJlU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0U2tlbGV0b25zKClcclxuICAgICAgICAgICAgLnRoZW4oKHZhbHVlOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uW10pID0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbE1hbnVmYWN0dXJlcnMgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHNrZWxldG9uOiBGaXh0dXJlRGVmaW5pdGlvblNrZWxldG9uKSA9PiBza2VsZXRvbi5tYW51ZmFjdHVyZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyYXk6IHN0cmluZ1tdKSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PSBpbmRleCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQ2hhbm5lbCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1heENoYW5uZWwgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jaGFubmVscy5mb3JFYWNoKCh2YWx1ZTogRE1YQ2hhbm5lbCkgPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZG14ID4gbWF4Q2hhbm5lbCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1heENoYW5uZWwgPSB2YWx1ZS5kbXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLnB1c2gobmV3IERNWENoYW5uZWwoXCJcIiwgbWF4Q2hhbm5lbCArIDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUNoYW5uZWwoY2hhbm5lbDogRE1YQ2hhbm5lbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMuaW5kZXhPZihjaGFubmVsKTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY2hhbm5lbHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEF4aXMoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5tb3ZlbWVudHMucHVzaChuZXcgQXhpcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUF4aXMoYXhpczogQXhpcyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLmluZGV4T2YoYXhpcyk7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uLm1vdmVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQ29sb3JXaGVlbEVudHJ5KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWluVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLmZvckVhY2goKHZhbHVlOiBDb2xvcldoZWVsRW50cnkpID0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmRteEVuZCA+IG1pblZhbHVlKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgPSB2YWx1ZS5kbXhFbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBtaW5WYWx1ZSA9IG1pblZhbHVlIDwgMjU1ID8gbWluVmFsdWUgKyAxIDogMjU1O1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLnB1c2gobmV3IENvbG9yV2hlZWxFbnRyeShcIlwiLCBtaW5WYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlQ29sb3JXaGVlbEVudHJ5KGNvbG9yV2hlZWxFbnRyeTogQ29sb3JXaGVlbEVudHJ5KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbi5jb2xvcldoZWVsLmluZGV4T2YoY29sb3JXaGVlbEVudHJ5KTtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb24uY29sb3JXaGVlbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVOYW1lcygpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNoYW5uZWxOYW1lUHJvYmxlbXMgPSB0aGlzLmNoYW5uZWxOYW1lc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXg6IG51bWJlciwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpICE9IGluZGV4IHx8IHZhbHVlID09IFwiXCIpO1xyXG4gICAgICAgIGxldCBheGlzTmFtZVByb2JsZW1zID0gdGhpcy5heGlzTmFtZXNcclxuICAgICAgICAgICAgLmZpbHRlcigodmFsdWUsIGluZGV4OiBudW1iZXIsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSAhPSBpbmRleCB8fCB2YWx1ZSA9PSBcIlwiKTtcclxuICAgICAgICBsZXQgY29sb3JXaGVlbE5hbWVQcm9ibGVtcyA9IHRoaXMuY29sb3JXaGVlbE5hbWVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleDogbnVtYmVyLCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgIT0gaW5kZXggfHwgdmFsdWUgPT0gXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGFubmVsTmFtZVByb2JsZW1zLmxlbmd0aCA9PSAwICYmIGF4aXNOYW1lUHJvYmxlbXMubGVuZ3RoID09IDAgJiYgY29sb3JXaGVlbE5hbWVQcm9ibGVtcy5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBjaGFubmVsTmFtZXMoKTogc3RyaW5nW11cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmNoYW5uZWxzLm1hcCgodmFsdWU6IERNWENoYW5uZWwpID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGNvbG9yV2hlZWxOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24uY29sb3JXaGVlbC5tYXAoKHZhbHVlOiBDb2xvcldoZWVsRW50cnkpID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGF4aXNOYW1lcygpOiBzdHJpbmdbXVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24ubW92ZW1lbnRzLm1hcCgodmFsdWU6IEF4aXMpID0+IHZhbHVlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNOZXdJdGVtKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbE1hbnVmYWN0dXJlciA9PSBudWxsICYmIHRoaXMub3JpZ2luYWxNb2RlbCA9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBtYW51ZmFjdHVyZXIgPSB0aGlzLmlzTmV3SXRlbSgpID8gdGhpcy5kZWZpbml0aW9uLm1hbnVmYWN0dXJlciA6IHRoaXMub3JpZ2luYWxNYW51ZmFjdHVyZXI7XHJcbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5pc05ld0l0ZW0oKSA/IHRoaXMuZGVmaW5pdGlvbi5uYW1lIDogdGhpcy5vcmlnaW5hbE1vZGVsO1xyXG4gICAgICAgIHRoaXMuZml4dHVyZVNlcnZpY2VcclxuICAgICAgICAgICAgLnB1dChtYW51ZmFjdHVyZXIsIG1vZGVsLCB0aGlzLmRlZmluaXRpb24pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZml4dHVyZS1kZWZpbml0aW9uc1wiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUJhci5hZGQoXCJFcnJvclwiLCByZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+XFxyXFxuICAgIDxoMT5GaXh0dXJlIERlZmluaXRpb24gRWRpdG9yPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48bWVzc2FnZS1iYXIgI21lc3NhZ2VCYXI+PC9tZXNzYWdlLWJhcj5cXHJcXG48Zm9ybSAqbmdJZj1cXFwiZGVmaW5pdGlvblxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgI2VkaXRvckZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgIDxmaWVsZHNldCBbZGlzYWJsZWRdPVxcXCJzYXZpbmdcXFwiPlxcclxcbiAgICAgICAgPGRhdGFsaXN0IGlkPVxcXCJhbGxNYW51ZmFjdHVyZXJzXFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1hbnVmYWN0dXJlciBvZiBhbGxNYW51ZmFjdHVyZXJzXFxcIj57e21hbnVmYWN0dXJlcn19PC9vcHRpb24+XFxyXFxuICAgICAgICA8L2RhdGFsaXN0PlxcclxcbiAgICAgICAgPGxhYmVsbGVkLWlucHV0IGxhYmVsPVxcXCJNYW51ZmFjdHVyZXI6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgI2lucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm1hbnVmYWN0dXJlclxcXCIgWyhuZ01vZGVsKV09XFxcImRlZmluaXRpb24ubWFudWZhY3R1cmVyXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGxpc3Q9XFxcImFsbE1hbnVmYWN0dXJlcnNcXFwiPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiTW9kZWw6XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgI2lucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm1vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGVmaW5pdGlvbi5uYW1lXFxcIiAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiPlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxsYWJlbGxlZC1pbnB1dCBsYWJlbD1cXFwiVHlwZTpcXFwiPlxcclxcbiAgICAgICAgICAgIDxzZWxlY3QgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidHlwZVxcXCIgWyhuZ01vZGVsKV09XFxcImRlZmluaXRpb24udHlwZVxcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5MRUQ8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlR1bmdzdGVuPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5FZmZlY3Q8L29wdGlvbj5cXHJcXG4gICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPC9sYWJlbGxlZC1pbnB1dD5cXHJcXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cXFwiY2hhbm5lbExpc3RcXFwiIG5hbWU9XFxcImNoYW5uZWxMaXN0XFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPk1hc3Rlcjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+U3Ryb2JlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5SZWQ8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPkdyZWVuPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5CbHVlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5VVjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+Q29sb3JXaGVlbDwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+UGFuQ29hcnNlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5QYW5GaW5lPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5UaWx0Q29hcnNlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbj5UaWx0RmluZTwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9kYXRhbGlzdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkNoYW5uZWxzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RE1YPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWluPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1heDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBjaGFubmVsIG9mIGRlZmluaXRpb24uY2hhbm5lbHM7IGxldCBpID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwuZG14XFxcIiBtaW49XFxcIjFcXFwiIG1heD1cXFwiNTEyXFxcIiBbbmFtZV09XFxcIidjaGFubmVsRE1YWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIFsodW5pcXVlKV09XFxcImNoYW5uZWxOYW1lc1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImNoYW5uZWwubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVxcXCInY2hhbm5lbE5hbWVbJyArIGkgKyAnXSdcXFwiIGxpc3Q9XFxcImNoYW5uZWxMaXN0XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJjaGFubmVsLm1pblxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgW25hbWVdPVxcXCInY2hhbm5lbE1pblsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJjaGFubmVsLm1heFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgW25hbWVdPVxcXCInY2hhbm5lbE1heFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZUNoYW5uZWwoY2hhbm5lbClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwiYWRkQ2hhbm5lbCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cXFwiYXhpc0xpc3RcXFwiIG5hbWU9XFxcImF4aXNMaXN0XFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uPlBhbjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24+VGlsdDwvb3B0aW9uPlxcclxcbiAgICAgICAgPC9kYXRhbGlzdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPk1vdmVtZW50IEF4aXM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1pbiAoZGVncmVlcyk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWF4IChkZWdyZWVzKTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBtb3ZlbWVudCBvZiBkZWZpbml0aW9uLm1vdmVtZW50czsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgW3VuaXF1ZV09XFxcImNvbG9yV2hlZWxOYW1lc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcIm1vdmVtZW50Lm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cXFwiJ2F4aXNOYW1lWycgKyBpICsgJ10nXFxcIiBsaXN0PVxcXCJheGlzTGlzdFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwibW92ZW1lbnQubWluXFxcIiBbbmFtZV09XFxcIidheGlzTWluWycgKyBpICsgJ10nXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcIm1vdmVtZW50Lm1heFxcXCIgW25hbWVdPVxcXCInYXhpc01heFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIChjbGljayk9XFxcInJlbW92ZUF4aXMobW92ZW1lbnQpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZEF4aXMoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5Db2xvciBXaGVlbHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbG9yPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRNWCBTdGFydDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ETVggRW5kPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGVudHJ5IG9mIGRlZmluaXRpb24uY29sb3JXaGVlbDsgbGV0IGkgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgW3VuaXF1ZV09XFxcImNvbG9yV2hlZWxOYW1lc1xcXCIgcmVxdWlyZWQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5Lm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cXFwiJ2NvbG9yV2hlZWxOYW1lWycgKyBpICsgJ10nXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjaW5wdXQgI21vZGVsPVxcXCJuZ01vZGVsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJjb2xvclxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5LmNvbG9yXFxcIiBbbmFtZV09XFxcIidjb2xvcldoZWVsQ29sb3JbJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZS1pbnB1dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI2lucHV0ICNtb2RlbD1cXFwibmdNb2RlbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50cnkuZG14U3RhcnRcXFwiIFtuYW1lXT1cXFwiJ2NvbG9yV2hlZWxNaW5bJyArIGkgKyAnXSdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIyNTVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlLWlucHV0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNpbnB1dCAjbW9kZWw9XFxcIm5nTW9kZWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgWyhuZ01vZGVsKV09XFxcImVudHJ5LmRteEVuZFxcXCIgW25hbWVdPVxcXCInY29sb3JXaGVlbE1heFsnICsgaSArICddJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjI1NVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGUtaW5wdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVDb2xvcldoZWVsRW50cnkoZW50cnkpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcImFkZENvbG9yV2hlZWxFbnRyeSgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwic2F2ZSgpXFxcIiBbZGlzYWJsZWRdPVxcXCIhZWRpdG9yRm9ybS52YWxpZFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZmxvcHB5LWRpc2tcXFwiPjwvc3Bhbj4gU2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZmllbGRzZXQ+XFxyXFxuPC9mb3JtPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZml4dHVyZS1kZWZpbml0aW9ucy9maXh0dXJlLWRlZmluaXRpb24tZWRpdG9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9