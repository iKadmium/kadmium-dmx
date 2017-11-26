import { Component, OnInit, ViewChild, OnDestroy, ContentChild } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { StatusStreamService, StatusData } from "../dashboard.service";

import { StatusCode } from "../status-code.enum";
import { Status } from "../status";
import { MatSnackBar } from '@angular/material';
import { Sleep } from 'app/sleep';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [StatusStreamService]
})
export class DashboardComponent implements OnInit, OnDestroy
{
    public statuses: Map<string, Status>;
    public loaded: boolean;

    constructor(private dashboardService: StatusStreamService, private snackbar: MatSnackBar, titleService: Title)
    {
        titleService.setTitle("Dashboard");

        this.statuses = new Map<string, Status>([
            ["Venues", new Status()],
            ["SACNTransmitters", new Status()],
            ["EnttecProTransmitters", new Status()],
            ["OSCListeners", new Status()]
        ]);

        this.loaded = false;
    }

    ngOnInit()
    {
        try
        {
            this.dashboardService.subscribe(data => this.updateStatus(data));
        }
        catch (error)
        {
            this.snackbar.open(error, "Close", { duration: 3000 });
        }
    }

    ngOnDestroy(): void
    {
        this.dashboardService.unsubscribe();
    }

    public async updateStatus(statusData: StatusData): Promise<void>
    {
        let panelStatus = this.statuses.get(statusData.controller);
        let statusCode = StatusCode[statusData.code as string]
        if (panelStatus != null)
        {
            panelStatus.statusCode = statusCode;
            panelStatus.body = statusData.message;
        }
        this.loaded = true;
    }
}