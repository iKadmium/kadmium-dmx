import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { OSCListenerLiveService, OSCListenerData } from "app/osclistener-live.service";
import { OSCListenerService } from "api/services";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
import { Status } from 'app/status';

@Component({
    selector: 'app-dashboard-osc-listener',
    templateUrl: './dashboard-osc-listener.component.html',
    styleUrls: ['./dashboard-osc-listener.component.css']
})
export class DashboardOSCListenerComponent implements OnInit, AfterViewInit
{
    static MAX_LENGTH = 50;
    enabledDetermined: boolean;
    enabled: boolean;
    private renderTimer: number;

    public loaded: boolean;

    @Input() status: Status;

    private events: OSCListenerData[];
    public dataSource: MatTableDataSource<OSCListenerData>
    public displayedColumns = ["time", "address", "value", "recognised"];
    @ViewChild(MatSort) sort: MatSort;

    constructor(private oscListenerLiveService: OSCListenerLiveService, private oscListenerService: OSCListenerService, private sanitizer: DomSanitizer)
    {
        this.enabledDetermined = false;
        this.enabled = false;
        this.events = [];
        this.loaded = false;
    }

    ngOnInit(): void
    {
        this.dataSource = new MatTableDataSource<OSCListenerData>(this.events);
        this.oscListenerService.getOSCListenerEnabled().then((response) =>
        {
            this.enabled = response.data;
            this.enabledDetermined = true;
            this.loaded = true;
        });
        this.oscListenerLiveService.subscribe(data =>
        {
            this.addMessage(data);
        });

        this.renderTimer = window.setInterval(() =>
        {
            this.dataSource._updateChangeSubscription();
        }, 100);
    }

    ngAfterViewInit(): void
    {
        this.dataSource.sort = this.sort;
    }

    public getColor(value: number): SafeStyle
    {
        let red = Math.round(255 - value * 255);
        let style = `color: rgb(${red},255,${red})`;
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }

    async toggleEnabled(): Promise<void>
    {
        let oldValue = this.enabled;
        this.enabledDetermined = false;
        try
        {
            await this.oscListenerService.setOSCListenerEnabled(!oldValue);
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
        }
        this.enabledDetermined = true;
    }

    public addMessage(data: OSCListenerData): void
    {
        data.time = new Date(Date.parse(data.time as any));
        this.events.push(data);
        if (this.events.length > DashboardOSCListenerComponent.MAX_LENGTH)
        {
            let tooLongAmount = this.events.length - DashboardOSCListenerComponent.MAX_LENGTH;
            this.events.splice(0, tooLongAmount);
        }
    }

}