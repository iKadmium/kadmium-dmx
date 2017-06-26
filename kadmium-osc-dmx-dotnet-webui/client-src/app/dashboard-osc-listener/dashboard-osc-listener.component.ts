import { Component, OnInit, Input } from '@angular/core';
import { OSCListenerService } from "app/osclistener.service";

@Component({
    selector: 'app-dashboard-osc-listener',
    templateUrl: './dashboard-osc-listener.component.html',
    styleUrls: ['./dashboard-osc-listener.component.css']
})
export class DashboardOSCListenerComponent implements OnInit
{
    static MAX_LENGTH = 50;
    @Input() unrecognised: string[];
    @Input() recognised: string[];
    enabled: boolean | null;

    constructor(private oscListenerService: OSCListenerService)
    {
        this.unrecognised = [];
        this.recognised = [];
        this.enabled = null;
    }

    ngOnInit(): void
    {
        this.oscListenerService.getEnabled().then((enabled) => this.enabled = enabled);
    }

    async toggleEnabled(): Promise<void>
    {
        let oldValue = this.enabled;
        this.enabled = null;
        try
        {
            await this.oscListenerService.setEnabled(!oldValue);
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
        }
    }

    public getRecognised(): string
    {
        return this.recognised.join("\r\n");
    }

    public getUnrecognised(): string
    {
        return this.unrecognised.join("\r\n");
    }

}
