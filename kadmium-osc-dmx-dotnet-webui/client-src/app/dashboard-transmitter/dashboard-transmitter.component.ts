import { Component, OnInit, Input } from '@angular/core';
import { SACNTransmitterService } from "api/services";
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";
import { Status } from "app/status";

@Component({
    selector: 'app-dashboard-transmitter',
    templateUrl: './dashboard-transmitter.component.html',
    styleUrls: ['./dashboard-transmitter.component.css'],
    providers: [SACNTransmitterService]
})
export class DashboardTransmitterComponent implements OnInit
{
    public status: Status;

    constructor(private sacnTransmitterService: SACNTransmitterService, private notificationService: NotificationsService) { }

    ngOnInit()
    {
        this.sacnTransmitterService.getTransmitterStatus()
            .then(response =>
            {
                this.status = new Status(response.data.statusCode, response.data.message, response.data.message);
            })
            .catch(reason => this.notificationService.add(StatusCode.Error, reason));
    }

}
