"use strict";
var MVC = (function () {
    function MVC() {
    }
    MVC.getSocketURL = function (controller) {
        var actionURL = MVC.getActionURL(controller, "Socket", null);
        var socketURL = actionURL.replace("http", "ws");
        return socketURL;
    };
    MVC.getActionURL = function (controller, action, id) {
        var originalURL = document.URL;
        var urlParts = document.URL.split("/");
        var protocol = urlParts[0];
        var host = urlParts[2];
        var root = protocol + "//" + host;
        if (id == null) {
            return root + "/" + controller + "/" + action;
        }
        else {
            return root + "/" + controller + "/" + action + "/" + id;
        }
    };
    return MVC;
}());
exports.MVC = MVC;
