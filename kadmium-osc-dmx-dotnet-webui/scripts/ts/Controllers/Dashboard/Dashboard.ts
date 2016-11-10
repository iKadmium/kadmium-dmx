import { MVC } from "../MVC";
import {StatusTrackerViewModel, StatusViewModel} from "../Status";

import * as ko from "knockout";
import "ko.plus";

interface StatusData
{
    code: string;
    message: string;
    name: string;
    controller: string;
}

export class LiveViewModel extends StatusViewModel
{
    liveURL: KnockoutObservable<string>;
    constructor(name: string, controller: string)
    {
        super(name);
        this.liveURL = ko.computed<string>(() => MVC.getActionURL(controller, "Live", this.name()));
    }
}

export class SACNTransmitterViewModel extends LiveViewModel
{
    constructor(name: string)
    {
        super(name, "SACNTransmitters");
    }
}

export class OSCListenerViewModel extends LiveViewModel
{
    constructor(name: string)
    {
        super(name, "OSCListeners");
    }
}

export class VenueViewModel extends StatusViewModel
{
    constructor()
    {
        super("Venue");
    }

    loadVenue(context: StatusViewModel, event: JQueryEventObject): void
    {
        let id = $(event.currentTarget).text();
        let url = MVC.getActionURL("Venues", "Activate", id);
        let settings: JQueryAjaxSettings =
            {
                url: url,
                success: (data: any, textStatus: string, xhr: JQueryXHR, ...args: any[]) => this.onLoadVenueSuccess(id),
                error: $.proxy(this.onLoadVenueError, this)
            }
        $.ajax(settings);
    }

    onLoadVenueSuccess(venueName: string): void
    {
        StatusTrackerViewModel.addStatusAlert("Success", venueName + " loaded successfully");
        this.name(venueName);
        $("#preview").removeClass("disabled");
    }

    onLoadVenueError(xhr: JQueryXHR, textStatus: string, errorThrown: string): void
    {
        this.update("Error", "Error loading venue: " + errorThrown);
    }
}

export class DashboardViewModel
{
    webSocket: WebSocket;
    venue: KnockoutObservable<VenueViewModel>;
    sacnTransmitters: KnockoutObservableArray<SACNTransmitterViewModel>;
    oscListeners: KnockoutObservableArray<OSCListenerViewModel>;
    panelsLoaded: KnockoutComputed<boolean>;
    sacnTransmittersLoaded: KnockoutObservable<boolean>;
    oscListenersLoaded: KnockoutObservable<boolean>;
    load: KoPlus.Command;
    statusTracker: KnockoutObservable<StatusTrackerViewModel>;
    

    constructor()
    {
        this.statusTracker = ko.observable<StatusTrackerViewModel>(new StatusTrackerViewModel());
        this.venue = ko.observable<VenueViewModel>(new VenueViewModel());
        this.sacnTransmitters = ko.observableArray<SACNTransmitterViewModel>();
        this.oscListeners = ko.observableArray<OSCListenerViewModel>();
        this.oscListenersLoaded = ko.observable<boolean>(false);
        this.sacnTransmittersLoaded = ko.observable<boolean>(false);
        this.panelsLoaded = ko.computed<boolean>(() => this.sacnTransmittersLoaded() && this.oscListenersLoaded());
        
        let sacnTransmittersURL = MVC.getActionURL("SACNTransmitters", "List", null);
        let oscListenersURL = MVC.getActionURL("OSCListeners", "List", null);

        this.panelsLoaded.subscribe((newValue: boolean) =>
        {
            this.webSocket = new WebSocket(MVC.getSocketURL("Index"));

            this.webSocket.addEventListener("message", (ev: MessageEvent) =>
            {
                let status = JSON.parse(ev.data) as StatusData;
                let statusViewModels: StatusViewModel[];
                let statusViewModel: StatusViewModel;
                switch (status.controller)
                {
                    case "Venues":
                        statusViewModel = this.venue();
                        break;
                    case "SACNTransmitters":
                        statusViewModels = this.sacnTransmitters().filter((value: StatusViewModel) => value.name() == status.name);
                        statusViewModel = statusViewModels[0];
                        break;
                    case "OSCListeners":
                        statusViewModels = this.oscListeners().filter((value: StatusViewModel) => value.name() == status.name);
                        statusViewModel = statusViewModels[0];
                        break;
                    default:
                        return;
                }
                if(statusViewModel != null)
                {
                    let statusCode: string;
                    switch (status.code)
                    {
                        case "NotStarted":
                            statusCode = "Warning";
                            break;
                        case "Running":
                            statusCode = "Success";
                            break;
                        default:
                            statusCode = status.code;
                            break;
                    }
                    statusViewModel.update(statusCode, status.message);
                }
            });
        });

        this.load = ko.command(() =>
        {
            $.get(sacnTransmittersURL, (data: any) =>
            {
                let sacnTransmitterNames = JSON.parse(data) as string[];
                for (let sacnTransmitterName of sacnTransmitterNames)
                {
                    this.sacnTransmitters.push(new SACNTransmitterViewModel(sacnTransmitterName));
                }
                this.sacnTransmittersLoaded(true);
            });

            return $.get(oscListenersURL, (data: any) =>
            {
                let oscListenerNames = JSON.parse(data) as string[];
                for (let oscListenerName of oscListenerNames)
                {
                    this.oscListeners.push(new OSCListenerViewModel(oscListenerName));
                }
                this.oscListenersLoaded(true);
            });
        });

        this.load();
    }
}

let dashboardController: DashboardViewModel;
window.addEventListener("load", (ev: Event) =>
{
    dashboardController = new DashboardViewModel();
    ko.applyBindings(dashboardController);
});

