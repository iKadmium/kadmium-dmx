import { Component, OnInit, Input } from '@angular/core';
import { Status } from "../status";
import { StatusCode } from "../status-code.enum";
import { MatSnackBar } from '@angular/material';
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';

@Component({
    selector: 'app-dashboard-transmitter-enttec',
    templateUrl: './dashboard-transmitter-enttec.component.html',
    styleUrls: ['./dashboard-transmitter-enttec.component.css'],
    providers: [APIClient],
    animations: [AnimationLibrary.animations()]
})
export class DashboardTransmitterEnttecComponent implements OnInit
{
    @Input() status: Status;

    enabledDetermined: boolean;
    enabled: boolean;
    loaded: boolean;

    constructor(private apiClient: APIClient, private snackbar: MatSnackBar) 
    {
        this.enabledDetermined = false;
        this.loaded = false;
    }

    ngOnInit()
    {
        this.apiClient.enabledEnttecProTransmitter()
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
            await this.apiClient.setEnabledEnttecProTransmitter({ value: !oldValue }).toPromise();
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
        }
        this.enabledDetermined = true;
    }

}
