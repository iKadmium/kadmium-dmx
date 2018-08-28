import { Component, OnInit, Input } from '@angular/core';
import { Status } from "../status";
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-dashboard-transmitter-sacn',
    templateUrl: './dashboard-transmitter-sacn.component.html',
    styleUrls: ['./dashboard-transmitter-sacn.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class DashboardTransmitterSacnComponent implements OnInit
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
                .getSACNTransmitterEnabled()
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
            await this.apiClient.setSACNTransmitterEnabled({ value: !oldValue }).toPromise();
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
