﻿import {MVC} from "../MVC";
import {StatusTrackerViewModel} from "../Status";
import * as ko from "knockout";
import "ko.plus";
import "knockout.validation";

export interface SACNTransmitterData
{
    delay: number;
    multicast: boolean;
    unicast: string[];
}

export class UnicastViewModel
{
    address: KnockoutObservable<string>;

    constructor(address: string)
    {
        this.address = ko.observable<string>(address);
    }

    serialize(): string
    {
        return this.address();
    }
}

interface SettingsData
{
    webPort: number;
    oscPort: number;
    sacnTransmitter: SACNTransmitterData;
}

class SettingsViewModel
{
    webPort: KnockoutObservable<number>;
    oscPort: KnockoutObservable<number>;
    delay: KnockoutObservable<number>;
    multicast: KnockoutObservable<boolean>;
    unicast: KnockoutObservableArray<UnicastViewModel>;

    load: KoPlus.Command;
    save: KoPlus.Command;

    statusTracker: KnockoutObservable<StatusTrackerViewModel>;

    constructor()
    {
        this.webPort = ko.observable<number>();
        this.oscPort = ko.observable<number>();
        
        this.delay = ko.validatedObservable<number>(0).extend({
            min: 0,
            required: true
        });
        this.multicast = ko.observable<boolean>(true);
        this.unicast = ko.observableArray<UnicastViewModel>();

        this.statusTracker = ko.observable<StatusTrackerViewModel>(new StatusTrackerViewModel());

        this.load = ko.command(() =>
        {
            let url = MVC.getActionURL("Settings", "Load", null);
            return $.get(url, (data: any) =>
            {
                let trueData = JSON.parse(data) as SettingsData;
                this.webPort(trueData.webPort);
                this.oscPort(trueData.oscPort);

                this.delay(trueData.sacnTransmitter.delay);
                this.multicast(trueData.sacnTransmitter.multicast);
                this.unicast.removeAll();
                this.unicast(trueData.sacnTransmitter.unicast.map((value: string) => new UnicastViewModel(value)));
            });
        });

        this.save = ko.command(() =>
        {
            let url = MVC.getActionURL("Settings", "Save", null);
            return $.ajax({
                url: url,
                type: "POST",
                data: { jsonString: JSON.stringify(this.serialize()) },
                success: () => StatusTrackerViewModel.addStatusAlert("Success", "Saved successfully"),
                error: (xhr: JQueryXHR, textStatus: string, errorThrown: string) => StatusTrackerViewModel.addStatusAlert("Error", errorThrown)
            });
        });

        this.load();
    }

    addUnicast(): void
    {
        this.unicast.push(new UnicastViewModel(""));
    }

    removeUnicast(unicast: UnicastViewModel): void
    {
        this.unicast.remove(unicast);
    }

    serialize(): SettingsData
    {
        let obj: SettingsData = {
            webPort: this.webPort(),
            oscPort: this.oscPort(),
            sacnTransmitter: {
                delay: this.delay(),
                multicast: this.multicast(),
                unicast: this.unicast().map((value: UnicastViewModel) => value.serialize())
            }
        };
        return obj;
    }
}

let viewModel: SettingsViewModel;

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new SettingsViewModel();
    ko.applyBindings(viewModel);
});