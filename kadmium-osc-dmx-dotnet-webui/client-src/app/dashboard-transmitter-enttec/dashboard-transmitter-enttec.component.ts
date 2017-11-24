import { Component, OnInit } from '@angular/core';
import { EnttecProTransmitterService } from "api/services";
import { Status } from "app/status";
import { StatusCode } from "app/status-code.enum";
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-dashboard-transmitter-enttec',
    templateUrl: './dashboard-transmitter-enttec.component.html',
    styleUrls: ['./dashboard-transmitter-enttec.component.css'],
    providers: [EnttecProTransmitterService]
})
export class DashboardTransmitterEnttecComponent implements OnInit
{
    public status: Status;

    enabledDetermined: boolean;
    enabled: boolean;

    constructor(private enttecTransmitterService: EnttecProTransmitterService, private snackbar: MatSnackBar) 
    {
        this.enabledDetermined = false;
    }

    ngOnInit()
    {
        this.enttecTransmitterService.getEnttecStatus()
            .then(response =>
            {
                this.status = new Status(response.data.statusCode, response.data.message, response.data.message);
            })
            .catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));

        this.enttecTransmitterService.getEnttecEnabled().then((response) =>
        {
            this.enabled = response.data;
            this.enabledDetermined = true;
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
