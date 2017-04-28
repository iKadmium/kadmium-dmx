import { Component, OnInit } from '@angular/core';

import { OSCListenerService, OSCListenerData } from "./osc-listener.service"
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'osc-listener-live',
    template: require('./osc-listener-live.component.html'),
    providers: [OSCListenerService]
})
export class OSCListenerLiveComponent implements OnInit
{
    static MAX_LENGTH = 50;
    private unrecognisedData: string[];
    private recognisedData: string[];

    constructor(private oscListenerService: OSCListenerService, title: Title)
    {
        title.setTitle("OSC Listener Live");
        this.unrecognisedData = [];
        this.recognisedData = [];
    }

    ngOnInit(): void
    {
        this.oscListenerService.subscribe(this);
    }

    private addMessage(data: OSCListenerData): void
    {
        let str = data.address + " " + data.value;
        let array = data.recognised ? this.recognisedData : this.unrecognisedData;
        array.push(str);
        if (array.length > OSCListenerLiveComponent.MAX_LENGTH)
        {
            let tooLongAmount = array.length - OSCListenerLiveComponent.MAX_LENGTH;
            array.splice(0, tooLongAmount);
        }
    }

    private getRecognised(): string
    {
        return this.recognisedData.join("\r\n");
    }

    private getUnrecognised(): string
    {
        return this.unrecognisedData.join("\r\n");
    }
}