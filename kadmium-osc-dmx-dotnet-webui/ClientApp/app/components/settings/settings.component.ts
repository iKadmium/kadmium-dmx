import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { SettingsService } from "./settings.service";
import { Settings, UnicastTarget } from "./settings";
import { Title } from "@angular/platform-browser";
import { MessageBarService } from "../status/message-bar/message-bar.service";
import { EnttecProTransmitterService } from "../enttec-pro-transmitter/enttec-pro-transmitter.service";
var $ = require("jquery");

@Component({
    selector: 'settings',
    template: require('./settings.component.html'),
    providers: [SettingsService, EnttecProTransmitterService]
})
export class SettingsComponent implements OnInit
{
    settings: Settings;
    saving: boolean;
    enttecPorts: string[];

    constructor(private settingsService: SettingsService, private enttecService: EnttecProTransmitterService, private messageBarService: MessageBarService, title: Title)
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
                this.messageBarService.addError(reason);
            });
        this.enttecService
            .getPorts()
            .then(data =>
            {
                this.enttecPorts = data;
            })
            .catch(reason =>
            {
                this.messageBarService.addError(reason)
            });
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            await this.settingsService.save(this.settings);
            this.messageBarService.add("Success", "Saved Successfully");
        }
        catch (reason)
        {
            this.messageBarService.addError(reason);
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