import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { Status } from "../status";
import { AnimationLibrary } from '../animation-library';
import { Subscription } from 'rxjs';
import { StatusCode } from 'api';
import { StatusStreamService, StatusData } from '../status-stream.service';
import { MessageService } from 'app/message.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [AnimationLibrary.animations()]

})
export class DashboardComponent implements OnInit, OnDestroy
{
    private controllers = ["Venues", "SACNTransmitters", "OSCListeners"];
    public statuses: Map<string, Status>;
    public loading: boolean;

    private subscription: Subscription;

    constructor(private statusStreamService: StatusStreamService, private messageService: MessageService, titleService: Title)
    {
        titleService.setTitle("Dashboard");

        this.statuses = new Map<string, Status>();
        for (let controllerName of this.controllers)
        {
            this.statuses.set(controllerName, new Status());
        }

        this.loading = true;
    }

    ngOnInit()
    {
        try
        {
            let observable = this.statusStreamService.open();
            this.subscription = observable.subscribe(data => this.updateStatus(data));
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

    ngOnDestroy(): void
    {
        if (this.subscription != null)
        {
            this.subscription.unsubscribe();
        }
    }

    private async updateStatus(statusData: StatusData): Promise<void>
    {
        let panelStatus = this.statuses.get(statusData.controller);
        let statusCode = StatusCode[statusData.code as string] as StatusCode;
        if (panelStatus != null)
        {
            panelStatus.statusCode = statusCode;
            panelStatus.body = statusData.message;
        }
        this.loading = false;
    }
}