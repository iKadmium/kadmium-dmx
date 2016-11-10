﻿import {FixtureViewModel} from "./Fixture";
import {GroupViewModel, GroupData} from "./Group";
import {UniverseViewModel, UniverseData} from "./Universe";
import {MVC} from "../MVC";

import * as ko from "knockout";
import "ko.plus";

interface PreviewData
{
    groups: string[];
    universes: UniverseData[];
}

class Preview2DViewModel
{
    socket: WebSocket;
    groups: KnockoutObservableArray<GroupViewModel>;
    universes: KnockoutObservableArray<UniverseViewModel>;
    load: KoPlus.Command;

    constructor()
    {
        this.groups = ko.observableArray<GroupViewModel>();
        this.universes = ko.observableArray<UniverseViewModel>();
        this.socket = new WebSocket(MVC.getSocketURL("Preview"));
        
        this.load = ko.command(() =>
        {
            let url = MVC.getActionURL("Preview", "Fixtures", null);
            return $.get(url, (data: any) =>
            {
                let previewData = JSON.parse(data) as PreviewData;
                for (let groupData of previewData.groups)
                {
                    let group = new GroupViewModel(groupData);
                    this.groups.push(group);
                }
                for (let universeData of previewData.universes)
                {
                    let universe = UniverseViewModel.load(universeData, this.groups());
                    this.universes.push(universe);
                }
            });
        });

        this.socket.addEventListener("message", (message: MessageEvent) =>
        {
            let data = JSON.parse(message.data) as number[];
            for (let group of this.groups())
            {
                group.update(data);
            }
        });

        this.load();
    }
}

let preview2DViewModel: Preview2DViewModel;
window.addEventListener("load", (ev: Event) =>
{
    preview2DViewModel = new Preview2DViewModel();
    ko.applyBindings(preview2DViewModel);
});