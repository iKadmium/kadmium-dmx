import { MVC } from "../MVC";
import { StatusTrackerViewModel, StatusViewModel } from "../Status";
import { AsyncJSON } from "../AsyncJSON";

import * as ko from "knockout";
import "ko.plus";

interface StatusData
{
    code: string;
    message: string;
    controller: string;
}

export class VenueViewModel extends StatusViewModel
{
    name: KnockoutObservable<string>;

    constructor(name: string)
    {
        super();
        this.name = ko.observable<string>(name);
    }

    async loadVenue(context: StatusViewModel, event: JQueryEventObject): Promise<void>
    {
        let id = $(event.currentTarget).text();
        let url = MVC.getActionURL("Venues", "Activate", id);
        try
        {
            await AsyncJSON.loadAsync<string>(url);
            this.onLoadVenueSuccess(id);
        } catch (err)
        {
            this.update("Error", "Error loading venue: " + err);
        }
    }

    onLoadVenueSuccess(venueName: string): void
    {
        StatusTrackerViewModel.addStatusAlert("Success", venueName + " loaded successfully");
        this.name(venueName);
        $("#preview").removeClass("disabled");
        $("#rawDMX").removeClass("disabled");
    }
}

export class DashboardViewModel
{
    webSocket: WebSocket;
    venue: KnockoutObservable<VenueViewModel>;
    sacnTransmitter: KnockoutObservable<StatusViewModel>;
    oscListener: KnockoutObservable<StatusViewModel>;
    fixtures: KnockoutObservable<StatusViewModel>;
    load: KoPlus.Command;
    statusTracker: KnockoutObservable<StatusTrackerViewModel>;

    constructor()
    {
        this.statusTracker = ko.observable<StatusTrackerViewModel>(new StatusTrackerViewModel());
        this.venue = ko.observable<VenueViewModel>(new VenueViewModel("Venue"));
        this.sacnTransmitter = ko.observable<StatusViewModel>(new StatusViewModel());
        this.oscListener = ko.observable<StatusViewModel>(new StatusViewModel());
        this.fixtures = ko.observable<StatusViewModel>(new StatusViewModel());

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
                    statusViewModel = this.sacnTransmitter();
                    break;
                case "OSCListeners":
                    statusViewModel = this.oscListener();
                    break;
                case "Fixtures":
                    statusViewModel = this.fixtures();
                    break;
                default:
                    return;
            }

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
        });

        this.load = ko.command(() => true);
        this.load();
    }
}

let viewModel: DashboardViewModel;
window.addEventListener("load", (ev: Event) =>
{
    viewModel = new DashboardViewModel();
    ko.applyBindings(viewModel);
});

