import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../status';
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';
import { MessageService } from 'app/message.service';

@Component({
    selector: 'app-dashboard-osc-listener',
    templateUrl: './dashboard-osc-listener.component.html',
    styleUrls: ['./dashboard-osc-listener.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class DashboardOSCListenerComponent implements OnInit
{
    @Input() status: Status;

    public enabledDetermined: boolean;
    public enabled: boolean;
    public loaded: boolean;

    constructor(private apiClient: APIClient, private messageService: MessageService)
    {
        this.enabledDetermined = false;
        this.enabled = false;
        this.loaded = false;
    }

    ngOnInit(): void
    {
        try
        {
            this.apiClient
                .getOSCListenerEnabled()
                .toPromise()
                .then(response =>
                {
                    this.enabled = response;
                    this.enabledDetermined = true;
                    this.loaded = true;
                });
        }
        catch (error) 
        {
            this.messageService.error(error);
        }
    }

    public async toggleEnabled(): Promise<void>
    {
        let oldValue = this.enabled;
        this.enabledDetermined = false;
        try
        {
            await this.apiClient.setOSCListenerEnabled({ value: !oldValue }).toPromise();
            this.enabled = !oldValue;
        }
        catch (error)
        {
            this.enabled = oldValue;
            this.messageService.error(error);
        }
        this.enabledDetermined = true;
    }
}