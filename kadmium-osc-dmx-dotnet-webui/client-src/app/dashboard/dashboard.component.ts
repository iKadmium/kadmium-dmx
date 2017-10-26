import { Component, OnInit, ViewChild, OnDestroy, ContentChild } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { StatusStreamService, StatusData } from "../dashboard.service";
import { NotificationsService } from "../notifications.service";

import { StatusCode } from "../status-code.enum";
import { Status } from "../status";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [StatusStreamService]
})
export class DashboardComponent implements OnInit, OnDestroy
{
    public statuses: Map<string, Status>;

    constructor(private dashboardService: StatusStreamService, private notificationsService: NotificationsService, titleService: Title)
    {
        titleService.setTitle("Dashboard");

        this.statuses = new Map<string, Status>([
            ["Venues", new Status()],
            ["SACNTransmitters", new Status()],
            ["EnttecProTransmitters", new Status()],
            ["OSCListeners", new Status()],
            ["Fixtures", new Status()],
            ["Solvers", new Status()]
        ]);
    }

    async ngOnInit(): Promise<void>
    {
        try { await this.dashboardService.subscribe(data => this.updateStatus(data)); } catch (error) { this.notificationsService.add(StatusCode.Error, error); }
    }

    ngOnDestroy(): void
    {
        this.dashboardService.unsubscribe(this);
    }

    public async updateStatus(statusData: StatusData): Promise<void>
    {
        let panelStatus = this.statuses.get(statusData.controller);
        let statusCode = StatusCode[statusData.code as string]
        panelStatus.statusCode = statusCode;
        panelStatus.body = statusData.message;
    }
}