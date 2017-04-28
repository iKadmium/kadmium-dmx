import { Component, OnInit, Input } from '@angular/core';
import { Status } from "../status";
import { StatusCode } from "../status-code.enum";

@Component({
    selector: 'app-status-panel',
    templateUrl: './status-panel.component.html',
    styleUrls: ['./status-panel.component.css']
})
export class StatusPanelComponent implements OnInit
{
    public status: Status;
    @Input("name") name: string;

    constructor()
    {
        this.status = new Status(StatusCode.Unknown, "Unknown");
    }

    updateStatus(statusCode: StatusCode, message: string): void
    {
        this.status.statusCode = statusCode;
        this.status.body = message;
    }

    ngOnInit(): void
    {

    }

}
