import {MVC} from "../MVC";
import { AsyncJSON } from "../AsyncJSON";
import { PreviewData } from "../Preview2D/Preview2D";
import * as ko from "knockout";
import "ko.plus";

import { GroupViewModel } from "../Groups/Group";

class TestingViewModel
{
    webSocket: WebSocket;
    load: KoPlus.Command;
    groups: KnockoutObservableArray<PreviewGroupViewModel>;

    constructor()
    {
        this.groups = ko.observableArray<PreviewGroupViewModel>();
        this.load = ko.command(async () =>
        {
            let url = MVC.getActionURL("Preview", "Fixtures");
            let previewData = await AsyncJSON.loadAsync<PreviewData>(url);
            console.log(previewData);
            for (let groupData of previewData.groups)
            {
                let group = new PreviewGroupViewModel(groupData);
                this.groups.push(group);
            }
        });

        this.load();
    }
}

class PreviewGroupViewModel
{
    name: KnockoutObservable<string>;
    stateGroups: KnockoutObservableArray<PreviewGroupStateGroupViewModel>;

    constructor(name: string)
    {
        this.name = ko.observable<string>(name);
        this.stateGroups = ko.observableArray<PreviewGroupStateGroupViewModel>(
            [new PreviewGroupStateGroupViewModel(name, "Colours",
                [
                    new PreviewGroupStateViewModel("Black", { Hue: 0, Saturation: 0, Brightness: 0, Strobe: 0 }),
                    new PreviewGroupStateViewModel("Red", { Hue: 0, Saturation: 1, Brightness: 1, Strobe: 0 }),
                    new PreviewGroupStateViewModel("Green", { Hue: 0.3333, Saturation: 1, Brightness: 1, Strobe: 0 }),
                    new PreviewGroupStateViewModel("Blue", { Hue: 0.666, Saturation: 1, Brightness: 1, Strobe: 0 }),
                    new PreviewGroupStateViewModel("White", { Hue: 0, Saturation: 0, Brightness: 1, Strobe: 0 }),
                    new PreviewGroupStateViewModel("Strobing", { Hue: 0, Saturation: 0, Brightness: 1, Strobe: 1 })
                ]),
            new PreviewGroupStateGroupViewModel(name, "Movements",
                [
                    new PreviewGroupStateViewModel("Centered", { Pan: 0.5, Tilt: 0.5, RandomMove: 0 }),
                    new PreviewGroupStateViewModel("Down", { Pan: 0.5, Tilt: 0, RandomMove: 0 }),
                    new PreviewGroupStateViewModel("Up", { Pan: 0.5, Tilt: 1, RandomMove: 0 }),
                    new PreviewGroupStateViewModel("Left", { Pan: 0, Tilt: 0.5, RandomMove: 0 }),
                    new PreviewGroupStateViewModel("Right", { Pan: 1, Tilt: 0.5, RandomMove: 0 }),
                    new PreviewGroupStateViewModel("Moving", { RandomMove: 1 })
                ])
            ]
        );
    }
}

class PreviewGroupStateGroupViewModel
{
    activeState: KnockoutObservable<PreviewGroupStateViewModel>;
    states: KnockoutObservableArray<PreviewGroupStateViewModel>;
    name: KnockoutObservable<string>;
    groupName: KnockoutObservable<string>;

    constructor(groupName: string, name: string, states: PreviewGroupStateViewModel[])
    {
        this.name = ko.observable<string>(name);
        this.groupName = ko.observable<string>(groupName);
        this.states = ko.observableArray<PreviewGroupStateViewModel>(states);
        this.activeState = ko.observable<PreviewGroupStateViewModel>();
    }

    activate(state: PreviewGroupStateViewModel): void
    {
        this.activeState(state);

        for (let setting in state.settings)
        {
            let url = MVC.getActionURL("Testing", "Set", this.groupName(), setting, state.settings[setting] + "");
            $.get(url);
        }
    }
}

class PreviewGroupStateViewModel
{
    name: KnockoutObservable<string>;
    settings: Settings;

    constructor(name: string, settings: Settings)
    {
        this.name = ko.observable<string>(name);
        this.settings = settings;
    }
}

interface Settings
{
    [key: string]: number;
}

let viewModel: TestingViewModel;
window.addEventListener("load", (ev: Event) =>
{
    viewModel = new TestingViewModel();
    ko.applyBindings(viewModel);
});