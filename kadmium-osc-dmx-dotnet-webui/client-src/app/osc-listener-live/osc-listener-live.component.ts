import { Component, OnInit } from '@angular/core';
import { OSCListenerService, OSCListenerData } from "../osclistener.service";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-osc-listener-live',
    templateUrl: './osc-listener-live.component.html',
    styleUrls: ['./osc-listener-live.component.css'],
    providers: [OSCListenerService]
})
export class OscListenerLiveComponent implements OnInit
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
        if (array.length > OscListenerLiveComponent.MAX_LENGTH)
        {
            let tooLongAmount = array.length - OscListenerLiveComponent.MAX_LENGTH;
            array.splice(0, tooLongAmount);
        }
    }

    public getRecognised(): string
    {
        return this.recognisedData.join("\r\n");
    }

    public getUnrecognised(): string
    {
        return this.unrecognisedData.join("\r\n");
    }

}
