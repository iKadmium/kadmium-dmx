import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";
import { SettingsService, EnttecProTransmitterService } from "api/services";
import { Settings } from "api/models";
import { MatTableDataSource } from "@angular/material/table";

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

    public fakeTargets: UnicastTarget[];

    public dataSource: MatTableDataSource<UnicastTarget>;
    public displayedColumns = ['address', 'actions'];

    constructor(private settingsService: SettingsService, private enttecService: EnttecProTransmitterService, private notificationsService: NotificationsService, title: Title)
    {
        title.setTitle("Settings");
        this.saving = false;
        this.fakeTargets = [];
    }

    ngOnInit(): void
    {
        this.settingsService
            .getSettings()
            .then(response =>
            {
                this.settings = response.data;
                this.fakeTargets = this.settings.sacnTransmitter.unicast.map(x => { return { target: x } });
                this.dataSource = new MatTableDataSource<UnicastTarget>(this.fakeTargets);
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
            this.settings.sacnTransmitter.unicast = this.fakeTargets.map(x => x.target);
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

    public addElement(): void
    {
        this.fakeTargets.push({ target: "" });
        this.dataSource._updateChangeSubscription();
    }

    public getElementIndex(element: UnicastTarget): number
    {
        return this.fakeTargets.indexOf(element);
    }

    public removeElement(element: UnicastTarget): void
    {
        let index = this.getElementIndex(element);
        this.fakeTargets.splice(index, 1);
        this.dataSource._updateChangeSubscription();
    }

}

interface UnicastTarget
{
    target: string;
}