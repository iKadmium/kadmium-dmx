import { Component } from '@angular/core';

import { OSCListenerService } from "./osc-listener.service"

@Component({
    selector: 'osc-listener-live',
    template: require('./osc-listener-live.component.html'),
    providers: [OSCListenerService]
})
export class OSCListenerLiveComponent
{
    static MAX_LENGTH = 50;
    private unrecognisedData: string[];
    private recognisedData: string[];

    constructor(oscListenerService: OSCListenerService)
    {
        this.unrecognisedData = [];
        this.recognisedData = [];

        oscListenerService.subscribe(data =>
        {
            let str = data.address + " " + data.value;
            let array = data.recognised ? this.recognisedData : this.unrecognisedData;
            array.push(str);
            if (array.length > OSCListenerLiveComponent.MAX_LENGTH)
            {
                let tooLongAmount = array.length - OSCListenerLiveComponent.MAX_LENGTH;
                array.splice(0, tooLongAmount);
            }
        });
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