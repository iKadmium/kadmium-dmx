import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../status';
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';

@Component({
    selector: 'app-dashboard-osc-listener',
    templateUrl: './dashboard-osc-listener.component.html',
    styleUrls: ['./dashboard-osc-listener.component.css'],
    providers: [APIClient],
    animations: [AnimationLibrary.animations()]
})
export class DashboardOSCListenerComponent implements OnInit
{
    enabledDetermined: boolean;
    enabled: boolean;

    public loaded: boolean;

    @Input() status: Status;


    constructor(private apiClient: APIClient)
    {
        this.enabledDetermined = false;
        this.enabled = false;
        this.loaded = false;
    }

    ngOnInit(): void
    {
        this.apiClient.enabledOSCListener()
            .toPromise()
            .then((response) =>
            {
                this.enabled = response;
                this.enabledDetermined = true;
                this.loaded = true;
            });

    }

    async toggleEnabled(): Promise<void>
    {
        let oldValue = this.enabled;
        this.enabledDetermined = false;
        try
        {
            await this.apiClient.setEnabledOSCListener({ value: !oldValue }).toPromise();
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
        }
        this.enabledDetermined = true;
    }



}