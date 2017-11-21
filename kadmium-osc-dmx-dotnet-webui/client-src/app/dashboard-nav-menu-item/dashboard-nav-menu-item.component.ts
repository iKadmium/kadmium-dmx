import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Status } from "app/status";
import { StatusCode } from "app/status-code.enum";

@Component({
    selector: 'app-dashboard-nav-menu-item',
    templateUrl: './dashboard-nav-menu-item.component.html',
    styleUrls: ['./dashboard-nav-menu-item.component.css']
})
export class DashboardNavMenuItemComponent implements OnInit
{
    @Input("name") name: string;
    @Input("status") status: Status;
    @Input("icon") icon: string;
    @Input("text") text: string;

    @Output() click: EventEmitter<null> = new EventEmitter();

    @Input("selected") selected: boolean;

    constructor()
    {
        this.status = new Status(StatusCode.Unknown);
    }

    ngOnInit()
    {

    }

    public get hasListeners(): boolean
    {
        return this.click.observers.length > 0;
    }

}
