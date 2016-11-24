import {MVC} from "../../MVC";

import * as ko from "knockout";
import "ko.plus";

interface OSCListenerLogMessage
{
    recognised: boolean;
    time: Date;
    source: string;
    address: string;
    value: number;
}

class OSCMessageViewModel
{
    time: KnockoutObservable<Date>;
    source: KnockoutObservable<string>;
    address: KnockoutObservable<string>;
    value: KnockoutObservable<number>;

    constructor(time: Date, source: string, address: string, value: number)
    {
        this.time = ko.observable<Date>(time);
        this.source = ko.observable<string>(source);
        this.address = ko.observable<string>(address);
        this.value = ko.observable<number>(value);
    }
}

class OSCListenerLiveViewModel 
{
    webSocket: WebSocket;
    recognised: KnockoutObservableArray<OSCMessageViewModel>;
    unrecognised: KnockoutObservableArray<OSCMessageViewModel>;
    load: KoPlus.Command;

    constructor()
    {
        this.recognised = ko.observableArray<OSCMessageViewModel>();
        this.unrecognised = ko.observableArray<OSCMessageViewModel>();

        this.webSocket = new WebSocket(MVC.getSocketURL("OSCListeners"));
        
        this.webSocket.addEventListener("message", (ev: MessageEvent) =>
        {
            let message = JSON.parse(ev.data) as OSCListenerLogMessage;
            let messageString = message.address + " " + message.value + "\r\n";
            let textArea = message.recognised ? $("#recognisedTextarea") : $("#unrecognisedTextarea");

            textArea.append(messageString);
            let text = textArea.text();
            let lines = text.split("\r\n");
            if (lines.length > 40)
            {
                let numberToCull = lines.length - 40;
                lines.splice(0, numberToCull);
                textArea.text(lines.join("\r\n"));
            }
        });

        this.load = ko.command(() => true);
    }
}

let oscListenerLiveViewModel: OSCListenerLiveViewModel;
window.addEventListener("load", (ev: Event) =>
{
    oscListenerLiveViewModel = new OSCListenerLiveViewModel();
    ko.applyBindings(oscListenerLiveViewModel);
});