import {MVC} from "../../MVC";

import * as ko from "knockout";

class DMXChannelViewModel
{
    value: KnockoutObservable<number>;
    color: KnockoutComputed<string>;

    constructor()
    {
        this.value = ko.observable<number>(0);
        this.color = ko.pureComputed(() =>
        {
            let red = 255;
            let green = 255 - this.value();
            let blue = 255 - this.value();
            let color = "rgb(" + red + "," + green + "," + blue + ")";
            return color;
        });
    }
}

class SACNTransmitterLiveViewModel 
{
    webSocket: WebSocket;
    attributesBody: HTMLTableSectionElement;
    channels: KnockoutObservableArray<DMXChannelViewModel>;
    universeID: KnockoutObservable<number>;

    constructor()
    {
        this.channels = ko.observableArray<DMXChannelViewModel>(SACNTransmitterLiveViewModel.getDefaultDMX());
        this.universeID = ko.observable<number>(1);

        this.universeID.subscribe((newValue: number) =>
        {
            let setUniverseIDMessage = {
                type: "SetUniverseID",
                universeID: newValue
            };

            this.webSocket.send(JSON.stringify(setUniverseIDMessage));

            this.channels().forEach((value: DMXChannelViewModel, index: number, array: DMXChannelViewModel[]) => value.value(0));
        });

        this.webSocket = new WebSocket(MVC.getSocketURL("SACNTransmitters"));
        this.webSocket.addEventListener("message", (ev: MessageEvent) =>
        {
            let message = JSON.parse(ev.data) as number[];
            for (let address in message)
            {
                let trueAddress = parseInt(address);
                let value = message[trueAddress];
                this.channels()[address].value(value);
            }
        });

        this.attributesBody = $("#dmx")[0] as HTMLTableSectionElement;
    }

    static getDefaultDMX(): DMXChannelViewModel[]
    {
        let channels: DMXChannelViewModel[] = [];
        for (let i = 0; i < 512; i++)
        {
            channels.push(new DMXChannelViewModel());
        }
        return channels;
    }
}


let viewModel: SACNTransmitterLiveViewModel;
window.addEventListener("load", (ev: Event) =>
{
    viewModel = new SACNTransmitterLiveViewModel();
    ko.applyBindings(viewModel);
});