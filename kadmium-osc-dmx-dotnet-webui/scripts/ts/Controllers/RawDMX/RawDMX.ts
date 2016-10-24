import * as ko from "knockout";

interface RawDMXMessage
{
    type: string;
}

interface TransmitterUpdate extends RawDMXMessage
{
    type: "TransmitterUpdate";
    transmitter: string;
}

interface UniverseIDUpdate extends RawDMXMessage
{
    type: "UniverseIDUpdate";
    universeID: number;
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
    transmitter: KnockoutObservable<string>;
    universeID: KnockoutObservable<number>;

    constructor()
    {
        this.channels = ko.observableArray<DMXChannel>(RawDMXViewModel.getInitialDMX());
        this.transmitter = ko.observable<string>($("#transmitter").val());
        this.universeID = ko.observable<number>(1);
        this.webSocket = new WebSocket(document.URL.replace("http://", "ws://") + "/Socket");
        this.webSocket.addEventListener("message", (ev: MessageEvent) => 
        {
            //
        });

        this.transmitter.subscribe((newValue: string) =>
        {
            let message = JSON.stringify(RawDMXViewModel.createTransmitterUpdateMessage(newValue));
            this.webSocket.send(message);
        });

        this.universeID.subscribe((newValue: number) =>
        {
            let message = JSON.stringify(RawDMXViewModel.createUniverseIDUpdateMessage(newValue));
            this.webSocket.send(message);
        });

        for (let channel of this.channels())
        {
            channel.value.subscribe((newValue: number) => 
            {
                let message = JSON.stringify(RawDMXViewModel.createChannelUpdateMessage(channel.index, newValue));
                this.webSocket.send(message);
            });
        }
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

    static createTransmitterUpdateMessage(transmitter: string): TransmitterUpdate
    {
        let obj: TransmitterUpdate = {
            type: "TransmitterUpdate",
            transmitter: transmitter
        }
        return obj;
    }

    static createUniverseIDUpdateMessage(universeID: number): UniverseIDUpdate
    {
        let obj: UniverseIDUpdate = {
            type: "UniverseIDUpdate",
            universeID: universeID
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