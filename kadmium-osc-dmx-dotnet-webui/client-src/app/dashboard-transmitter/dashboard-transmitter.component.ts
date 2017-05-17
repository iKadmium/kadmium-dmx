import { Component, OnInit, Input } from '@angular/core';
import { Status } from "app/status";

@Component({
    selector: 'app-dashboard-transmitter',
    templateUrl: './dashboard-transmitter.component.html',
    styleUrls: ['./dashboard-transmitter.component.css']
})
export class DashboardTransmitterComponent implements OnInit
{
    @Input() status: Status;
    @Input() name: string;

    constructor() { }

    ngOnInit()
    {

    }

}
