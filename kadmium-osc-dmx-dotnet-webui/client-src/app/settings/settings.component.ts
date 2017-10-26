import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";
import { SettingsService, EnttecProTransmitterService } from "api/services";
import { Settings } from "api/models";

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
            .getSettings()
            .then(response =>
            {
                this.settings = response.data;
            })
            .catch(reason =>
            {
                this.notificationsService.add(StatusCode.Error, reason);
            });
        this.enttecService
            .getEnttecPortNames()
            .then(response =>
            {
                this.enttecPorts = response.data;
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
            await this.settingsService.postSettings(this.settings);
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
        this.settings.sacnTransmitter.unicast.push("");
    }

    public removeTarget(index: number): void
    {
        this.settings.sacnTransmitter.unicast.splice(index, 1);
    }

}
