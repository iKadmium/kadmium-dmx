import { Component, OnInit, Input } from '@angular/core';
import { Status } from "../status";
import { StatusCode } from "../status-code.enum";
import { MatSnackBar } from '@angular/material';
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';

@Component({
    selector: 'app-dashboard-transmitter-sacn',
    templateUrl: './dashboard-transmitter-sacn.component.html',
    styleUrls: ['./dashboard-transmitter-sacn.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class DashboardTransmitterSacnComponent implements OnInit
{
    @Input() status: Status;

    enabledDetermined: boolean;
    enabled: boolean;
    loaded: boolean;

    constructor(private apiClient: APIClient) 
    {
        this.enabledDetermined = false;
        this.loaded = false;
    }

    ngOnInit()
    {
        this.apiClient.enabledSACNTransmitter()
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
            await this.apiClient.setEnabledSACNTransmitter({ value: !oldValue }).toPromise();
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
        }
        this.enabledDetermined = true;
    }

}
