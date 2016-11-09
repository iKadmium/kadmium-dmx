"use strict";
var ko = require("knockout");
var StatusViewModel = (function () {
    function StatusViewModel(name) {
        var _this = this;
        this.code = ko.observable("Unknown");
        this.message = ko.observable("Loading...");
        this.name = ko.observable(name);
        this.panelClass = ko.computed(function () { return StatusViewModel.panelClasses[_this.code()]; });
        this.alertClass = ko.computed(function () { return StatusViewModel.alertClasses[_this.code()]; });
        this.glyphClass = ko.computed(function () { return StatusViewModel.glyphClasses[_this.code()]; });
    }
    StatusViewModel.prototype.update = function (code, message) {
        this.message(message);
        this.code(code);
    };
    StatusViewModel.alertClasses = { "Error": "alert-danger", "Success": "alert-success", "Warning": "alert-warning", "Unknown": "alert-default" };
    StatusViewModel.panelClasses = { "Error": "panel-danger", "Success": "panel-success", "Warning": "panel-warning", "Unknown": "panel-default" };
    StatusViewModel.glyphClasses = { "Error": "glyphicon-remove-sign", "Success": "glyphicon-ok-sign", "Warning": "glyphicon-info-sign", "Unknown": "glyphicon-question-sign" };
    return StatusViewModel;
}());
exports.StatusViewModel = StatusViewModel;
