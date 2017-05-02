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
    @Input("name") name: string;
    @Input("status") status: Status;

    constructor()
    {
        this.status = new Status(StatusCode.Unknown, "Unknown");
    }

    ngOnInit(): void
    {

    }

}
