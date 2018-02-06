import { Component, OnInit, Input } from '@angular/core';
import { Status } from "app/status";
import { SACNTransmitterService } from "api/services";
import { StatusCode } from "app/status-code.enum";
import { MatSnackBar } from '@angular/material';
import { AnimationLibrary } from "app/animation-library";

@Component({
    selector: 'app-dashboard-transmitter-sacn',
    templateUrl: './dashboard-transmitter-sacn.component.html',
    styleUrls: ['./dashboard-transmitter-sacn.component.css'],
    providers: [SACNTransmitterService],
    animations: [AnimationLibrary.animations()]
})
export class DashboardTransmitterSacnComponent implements OnInit
{
    @Input() status: Status;

    enabledDetermined: boolean;
    enabled: boolean;
    loaded: boolean;

    constructor(private sacnTransmitterService: SACNTransmitterService, private snackbar: MatSnackBar) 
    {
        this.enabledDetermined = false;
        this.loaded = false;
    }

    ngOnInit()
    {
        this.sacnTransmitterService.getTransmitterEnabled()
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
            await this.sacnTransmitterService.setTransmitterEnabled(!oldValue).toPromise();
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
        }
        this.enabledDetermined = true;
    }

}
