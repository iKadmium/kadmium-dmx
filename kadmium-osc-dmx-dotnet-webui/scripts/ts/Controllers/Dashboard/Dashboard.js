"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MVC_1 = require("../MVC");
var Status_1 = require("../Status");
var $ = require("jquery");
var ko = require("knockout");
var LiveViewModel = (function (_super) {
    __extends(LiveViewModel, _super);
    function LiveViewModel(name, controller) {
        var _this = this;
        _super.call(this, name);
        this.liveURL = ko.computed(function () { return MVC_1.MVC.getActionURL(controller, "Live", _this.name()); });
    }
    return LiveViewModel;
}(Status_1.StatusViewModel));
exports.LiveViewModel = LiveViewModel;
var SACNTransmitterViewModel = (function (_super) {
    __extends(SACNTransmitterViewModel, _super);
    function SACNTransmitterViewModel(name) {
        _super.call(this, name, "SACNTransmitters");
    }
    return SACNTransmitterViewModel;
}(LiveViewModel));
exports.SACNTransmitterViewModel = SACNTransmitterViewModel;
var OSCListenerViewModel = (function (_super) {
    __extends(OSCListenerViewModel, _super);
    function OSCListenerViewModel(name) {
        _super.call(this, name, "OSCListeners");
    }
    return OSCListenerViewModel;
}(LiveViewModel));
exports.OSCListenerViewModel = OSCListenerViewModel;
var VenueViewModel = (function (_super) {
    __extends(VenueViewModel, _super);
    function VenueViewModel() {
        _super.call(this, "Venue");
    }
    VenueViewModel.prototype.loadVenue = function (context, event) {
        var _this = this;
        var id = $(event.currentTarget).text();
        var url = MVC_1.MVC.getActionURL("Venues", "Activate", id);
        var settings = {
            url: url,
            success: function (data, textStatus, xhr) {
                var args = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    args[_i - 3] = arguments[_i];
                }
                return _this.onLoadVenueSuccess(id);
            },
            error: $.proxy(this.onLoadVenueError, this)
        };
        $.ajax(settings);
    };
    VenueViewModel.prototype.onLoadVenueSuccess = function (venueName) {
        this.addAlert(venueName + " loaded successfully", "alert alert-success");
        this.name(venueName);
        $("#preview").removeClass("disabled");
    };
    VenueViewModel.prototype.onLoadVenueError = function (xhr, textStatus, errorThrown) {
        this.addAlert("Error loading venue: " + errorThrown, "alert alert-danger");
    };
    VenueViewModel.prototype.addAlert = function (text, classes) {
        var alertDiv = document.createElement("div");
        $(alertDiv).addClass(classes);
        $(alertDiv).text(text);
        var closeButton = document.createElement("a");
        $(closeButton).addClass("close");
        closeButton.innerText = "×";
        $(closeButton).attr("data-dismiss", "alert");
        alertDiv.appendChild(closeButton);
        $("#status-alerts")[0].appendChild(alertDiv);
    };
    return VenueViewModel;
}(Status_1.StatusViewModel));
exports.VenueViewModel = VenueViewModel;
var DashboardViewModel = (function () {
    function DashboardViewModel() {
        var _this = this;
        this.venue = ko.observable(new VenueViewModel());
        this.sacnTransmitters = ko.observableArray();
        this.oscListeners = ko.observableArray();
        this.oscListenersLoaded = ko.observable(false);
        this.sacnTransmittersLoaded = ko.observable(false);
        this.panelsLoaded = ko.computed(function () { return _this.sacnTransmittersLoaded() && _this.oscListenersLoaded(); });
        var sacnTransmittersURL = MVC_1.MVC.getActionURL("SACNTransmitters", "List", null);
        var oscListenersURL = MVC_1.MVC.getActionURL("OSCListeners", "List", null);
        this.panelsLoaded.subscribe(function (newValue) {
            _this.webSocket = new WebSocket(MVC_1.MVC.getSocketURL("Index"));
            _this.webSocket.addEventListener("message", function (ev) {
                var status = JSON.parse(ev.data);
                var statusViewModels;
                var statusViewModel;
                switch (status.controller) {
                    case "Venues":
                        statusViewModel = _this.venue();
                        break;
                    case "SACNTransmitters":
                        statusViewModels = _this.sacnTransmitters().filter(function (value) { return value.name() == status.name; });
                        statusViewModel = statusViewModels[0];
                        break;
                    case "OSCListeners":
                        statusViewModels = _this.oscListeners().filter(function (value) { return value.name() == status.name; });
                        statusViewModel = statusViewModels[0];
                        break;
                    default:
                        return;
                }
                if (statusViewModel != null) {
                    var statusCode = void 0;
                    switch (status.code) {
                        case "NotStarted":
                            statusCode = "Warning";
                        case "Running":
                            statusCode = "Success";
                        default:
                            statusCode = status.code;
                    }
                    statusViewModel.update(statusCode, status.message);
                }
            });
        });
        $.get(sacnTransmittersURL, function (data) {
            var sacnTransmitterNames = JSON.parse(data);
            for (var _i = 0, sacnTransmitterNames_1 = sacnTransmitterNames; _i < sacnTransmitterNames_1.length; _i++) {
                var sacnTransmitterName = sacnTransmitterNames_1[_i];
                _this.sacnTransmitters.push(new SACNTransmitterViewModel(sacnTransmitterName));
            }
            _this.sacnTransmittersLoaded(true);
        });
        $.get(oscListenersURL, function (data) {
            var oscListenerNames = JSON.parse(data);
            for (var _i = 0, oscListenerNames_1 = oscListenerNames; _i < oscListenerNames_1.length; _i++) {
                var oscListenerName = oscListenerNames_1[_i];
                _this.oscListeners.push(new OSCListenerViewModel(oscListenerName));
            }
            _this.oscListenersLoaded(true);
        });
    }
    return DashboardViewModel;
}());
exports.DashboardViewModel = DashboardViewModel;
var dashboardController;
window.addEventListener("load", function (ev) {
    dashboardController = new DashboardViewModel();
    ko.applyBindings(dashboardController);
});
