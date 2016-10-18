import {MVC} from "./MVC";

interface Status
{
    code: string;
    message: string;
    name: string;
    controller: string;
}

export class DashboardController
{
    static alertClasses: string[] = ["alert-danger", "alert-success", "alert-warning"];
    static panelClasses: string[] = ["panel-danger", "panel-success", "panel-warning"];
    static glyphs: string[] = ["glyphicon-remove-sign", "glyphicon-ok-sign", "glyphicon-info-sign", "glyphicon-question-sign"];
    webSocket: WebSocket;

    updateStatus(status: Status) : void
    {
        let panel = $(".status-panel").filter((index, element) =>
        {
            return $(element).data("id") == status.name
                && $(element).data("controller") == status.controller;
        });

        let glyph = panel.find(".status-glyph");
        let statusText = panel.find(".status-message");
        let panelBody = panel.find(".panel-body");

        panel.removeClass(DashboardController.panelClasses.join(" "));
        panelBody.removeClass(DashboardController.alertClasses.join(" "));
        glyph.removeClass(DashboardController.glyphs.join(" "));

        switch (status.code)
        {
            case "NotStarted":
                panel.addClass("panel-warning");
                glyph.addClass("glyphicon-info-sign");
                panelBody.addClass("alert-warning");
                break;
            case "Running":
                panel.addClass("panel-success");
                glyph.addClass("glyphicon-ok-sign");
                panelBody.addClass("alert-success");
                break;
            case "Error":
                panel.addClass("panel-danger");
                glyph.addClass("glyphicon-remove-sign");
                panelBody.addClass("alert-danger");
                break;
        }

        statusText.text(status.message);
    }
    
    addAlert(text: string, classes: string)
    {
        let alertDiv = document.createElement("div");
        $(alertDiv).addClass(classes);
        $(alertDiv).text(text);
        let closeButton = document.createElement("a");
        $(closeButton).addClass("close");
        closeButton.innerText = "×";
        $(closeButton).attr("data-dismiss", "alert");

        alertDiv.appendChild(closeButton);
        $("#status-alerts")[0].appendChild(alertDiv);
    }

    onLoadVenueSuccess(data: any, textStatus: string, xhr: JQueryXHR): void
    {
        this.addAlert("Venue loaded successfully", "alert alert-success");
    }

    onLoadVenueError(xhr: JQueryXHR, textStatus: string, errorThrown: string): void
    {
        this.addAlert("Error loading venue: " + errorThrown, "alert alert-danger");
    }
    
    onLoad(): void
    {
        let that = this;

        this.webSocket = new WebSocket(document.URL.replace("http://", "ws://") + "Index/Socket");
        this.webSocket.addEventListener("message", (ev: MessageEvent) =>
        {
            let status = JSON.parse(ev.data) as Status;
            this.updateStatus(status);
        });

        let venueLoadLinks = $(".venue-load-link");
        venueLoadLinks.on("click", (e: JQueryEventObject) =>
        {
            let id = $(this).data("id");
            let url = MVC.getActionURL("Venues", "Load", id);
            let settings: JQueryAjaxSettings =
            {
                url: url,
                success: $.proxy(that.onLoadVenueSuccess, that),
                error: $.proxy(that.onLoadVenueError, that)
            }
            $.ajax(settings);
        });
    }

    constructor()
    {
        window.addEventListener("load", (ev) =>
        {
            this.onLoad();
        });
    }
}

let dashboardController = new DashboardController();