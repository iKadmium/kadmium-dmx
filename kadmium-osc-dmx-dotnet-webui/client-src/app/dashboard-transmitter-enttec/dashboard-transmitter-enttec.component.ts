import { Component, OnInit, Input } from '@angular/core';
import { EnttecProTransmitterService } from "api/services";
import { Status } from "app/status";
import { StatusCode } from "app/status-code.enum";
import { MatSnackBar } from '@angular/material';
import { AnimationLibrary } from "app/animation-library";

@Component({
    selector: 'app-dashboard-transmitter-enttec',
    templateUrl: './dashboard-transmitter-enttec.component.html',
    styleUrls: ['./dashboard-transmitter-enttec.component.css'],
    providers: [EnttecProTransmitterService],
    animations: [AnimationLibrary.animations()]
})
export class DashboardTransmitterEnttecComponent implements OnInit
{
    @Input() status: Status;

    enabledDetermined: boolean;
    enabled: boolean;
    loaded: boolean;

    constructor(private enttecTransmitterService: EnttecProTransmitterService, private snackbar: MatSnackBar) 
    {
        this.enabledDetermined = false;
        this.loaded = false;
    }

    ngOnInit()
    {
        this.enttecTransmitterService.getEnttecEnabled()
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
            await this.enttecTransmitterService.setEnttecEnabled(!oldValue);
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
        }
        this.enabledDetermined = true;
    }

}
