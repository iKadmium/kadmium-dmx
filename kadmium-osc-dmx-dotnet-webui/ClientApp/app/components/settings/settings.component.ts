import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { SettingsService } from "./settings.service";
import { Settings, UnicastTarget } from "./settings";
import { Title } from "@angular/platform-browser";
import { MessageBarService } from "../status/message-bar/message-bar.service";


var $ = require("jquery");

@Component({
    selector: 'settings',
    template: require('./settings.component.html'),
    providers: [SettingsService]
})
export class SettingsComponent
{
    settings: Settings;
    saving: boolean;
    testElement: string;

    constructor(private settingsService: SettingsService, private messageBarService: MessageBarService, title: Title)
    {
        title.setTitle("Settings");
        this.testElement = "stuff";
        this.saving = false;
        this.settingsService.get().then(data =>
        {
            this.settings = data;
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
            this.messageBarService.add("Error", reason);
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

    public validateTargets(): boolean
    {
        let badTargets = this.settings.sacnTransmitter.unicast.filter((value: UnicastTarget) => value.target == "" || value.target == undefined || value.target == null);
        return badTargets.length == 0;
    }

}