import { Component, OnInit, Input } from '@angular/core';
import { OSCListenerLiveService, OSCListenerData } from "app/osclistener-live.service";
import { OSCListenerService } from "api/services";

@Component({
    selector: 'app-dashboard-osc-listener',
    templateUrl: './dashboard-osc-listener.component.html',
    styleUrls: ['./dashboard-osc-listener.component.css']
})
export class DashboardOSCListenerComponent implements OnInit
{
    static MAX_LENGTH = 50;
    public unrecognised: string[];
    public recognised: string[];
    enabledDetermined: boolean;
    enabled: boolean;

    constructor(private oscListenerLiveService: OSCListenerLiveService, private oscListenerService: OSCListenerService)
    {
        this.unrecognised = [];
        this.recognised = [];
        this.enabledDetermined = false;
        this.enabled = false;
    }

    ngOnInit(): void
    {
        this.oscListenerService.getOSCListenerEnabled().then((enabled) => this.enabled = enabled.data);
        this.oscListenerLiveService.subscribe(data =>
        {
            this.addMessage(data);
        });
    }

    async toggleEnabled(): Promise<void>
    {
        let oldValue = this.enabled;
        this.enabledDetermined = false;
        try
        {
            await this.oscListenerService.setOSCListenerEnabled(!oldValue);
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
        }
        this.enabledDetermined = true;
    }

    public getRecognised(): string
    {
        return this.recognised.join("\r\n");
    }

    public getUnrecognised(): string
    {
        return this.unrecognised.join("\r\n");
    }

    public addMessage(data: OSCListenerData): void
    {
        let str = data.address + " " + data.value;
        let array = data.recognised ? this.recognised : this.unrecognised;
        array.push(str);
        if (array.length > DashboardOSCListenerComponent.MAX_LENGTH)
        {
            let tooLongAmount = array.length - DashboardOSCListenerComponent.MAX_LENGTH;
            array.splice(0, tooLongAmount);
        }
    }

}
