import {MVC} from "../MVC";
import * as ko from "knockout";
import "ko.plus";

interface RawDMXMessage
{
    type: string;
}

interface UniverseUpdate extends RawDMXMessage
{
    type: "UniverseUpdate";
    universe: string;
}

interface ChannelUpdate extends RawDMXMessage
{
    type: "ChannelUpdate";
    channel: number;
    value: number;
}

class DMXChannel
{
    value: KnockoutObservable<number>;
    index: number;
    constructor(index: number)
    {
        this.index = index;
        this.value = ko.observable<number>(0);
    }
}

class RawDMXViewModel
{
    webSocket: WebSocket;
    channels: KnockoutObservableArray<DMXChannel>;
    universe: KnockoutObservable<string>;
    finishedLoading: KnockoutObservable<boolean>;
    websocketOpen: KnockoutObservable<boolean>;
    load: KoPlus.Command;

    constructor()
    {
        this.channels = ko.observableArray<DMXChannel>(RawDMXViewModel.getInitialDMX());
        this.universe = ko.observable<string>();
        this.websocketOpen = ko.observable<boolean>(false);
        this.webSocket = new WebSocket(MVC.getSocketURL("RawDMX"));
        
        this.webSocket.addEventListener("open", (ev: Event) => this.websocketOpen(true));
        this.webSocket.addEventListener("close", (ev: CloseEvent) => this.websocketOpen(false));
        this.webSocket.addEventListener("error", (ev: ErrorEvent) => this.websocketOpen(false));

        this.universe.subscribe((newValue: string) =>
        {
            let message = JSON.stringify(RawDMXViewModel.createUniverseUpdateMessage(newValue));
            if (this.webSocket.readyState == 1)
            {
                this.webSocket.send(message);
            }
            for (let channel of this.channels())
            {
                channel.value.notifySubscribers();
            }
        });

        for (let channel of this.channels())
        {
            channel.value.subscribe((newValue: number) => 
            {
                let message = JSON.stringify(RawDMXViewModel.createChannelUpdateMessage(channel.index, newValue));
                if (this.webSocket.readyState == 1)
                {
                    this.webSocket.send(message);
                }
            });
        }
        
        this.webSocket.addEventListener("message", (ev: MessageEvent) => 
        {
            //
        });
        
        this.load = ko.command(() => true);
    }

    static getInitialDMX(): DMXChannel[]
    {
        let initialDMX: DMXChannel[] = [];
        for (let i = 0; i < 512; i++)
        {
            initialDMX[i] = new DMXChannel(i);
        }
        return initialDMX;
    }

    static createUniverseUpdateMessage(universe: string): UniverseUpdate
    {
        let obj: UniverseUpdate = {
            type: "UniverseUpdate",
            universe: universe
        }
        return obj;
    }
    
    static createChannelUpdateMessage(channel: number, value: number): ChannelUpdate
    {
        let obj: ChannelUpdate = {
            type: "ChannelUpdate",
            channel: channel,
            value: value
        };
        return obj;
    }
}

let viewModel: RawDMXViewModel;
window.addEventListener("load", (ev: Event) =>
{
    viewModel = new RawDMXViewModel();
    ko.applyBindings(viewModel);
});