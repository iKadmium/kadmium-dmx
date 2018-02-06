import { Component, OnInit, Input } from '@angular/core';
import { OSCListenerLiveService, OSCListenerData } from "app/osclistener-live.service";
import { OSCListenerService } from "api/services";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
import { Status } from 'app/status';
import { AnimationLibrary } from "app/animation-library";

@Component({
    selector: 'app-dashboard-osc-listener',
    templateUrl: './dashboard-osc-listener.component.html',
    styleUrls: ['./dashboard-osc-listener.component.css'],
    providers: [OSCListenerService],
    animations: [AnimationLibrary.animations()]
})
export class DashboardOSCListenerComponent implements OnInit
{
    enabledDetermined: boolean;
    enabled: boolean;

    public loaded: boolean;

    @Input() status: Status;


    constructor(private oscListenerService: OSCListenerService)
    {
        this.enabledDetermined = false;
        this.enabled = false;
        this.loaded = false;
    }

    ngOnInit(): void
    {
        this.oscListenerService.getOSCListenerEnabled()
            .toPromise()
            .then((response) =>
            {
                this.enabled = response;
                this.enabledDetermined = true;
                this.loaded = true;
            });

    }

    async toggleEnabled(): Promise<void>
    {
        let oldValue = this.enabled;
        this.enabledDetermined = false;
        try
        {
            await this.oscListenerService.setOSCListenerEnabled(!oldValue).toPromise();
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
        }
        this.enabledDetermined = true;
    }



}