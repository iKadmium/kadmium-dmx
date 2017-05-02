import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { Settings, UnicastTarget } from "../settings";
import { SettingsService } from "../settings.service";
import { EnttecProTransmitterService } from "../enttec-pro-transmitter.service";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: [SettingsService, EnttecProTransmitterService]
})
export class SettingsComponent implements OnInit
{
    settings: Settings;
    saving: boolean;
    enttecPorts: string[];
    activeTab: string;

    constructor(private settingsService: SettingsService, private enttecService: EnttecProTransmitterService, private notificationsService: NotificationsService, title: Title)
    {
        title.setTitle("Settings");
        this.saving = false;
    }

    ngOnInit(): void
    {
        this.settingsService
            .get()
            .then(data =>
            {
                this.settings = data;
            })
            .catch(reason =>
            {
                this.notificationsService.add(StatusCode.Error, reason);
            });
        this.enttecService
            .getPorts()
            .then(data =>
            {
                this.enttecPorts = data;
            })
            .catch(reason =>
            {
                this.notificationsService.add(StatusCode.Error, reason)
            });
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            await this.settingsService.save(this.settings);
            this.notificationsService.add(StatusCode.Success, "Saved Successfully");
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
        finally
        {
            this.saving = false;
        }
    }

    public addTarget(): void
    {
        this.settings.sacnTransmitter.unicast.push(new UnicastTarget(""));
    }

    public removeTarget(index: number): void
    {
        this.settings.sacnTransmitter.unicast.splice(index, 1);
    }

}
