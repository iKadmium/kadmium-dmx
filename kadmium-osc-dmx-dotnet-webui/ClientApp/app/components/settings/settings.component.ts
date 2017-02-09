import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { SettingsService } from "./settings.service";
import { Settings, UnicastTarget } from "./settings";


var $ = require("jquery");

@Component({
    selector: 'settings',
    template: require('./settings.component.html'),
    providers: [SettingsService]
})
export class SettingsComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    settings: Settings;

    constructor(private settingsService: SettingsService)
    {
        this.settingsService.get().then(data =>
        {
            this.settings = data;
        });
    }

    public async save(): Promise<void>
    {
        this.settingsService
            .save(this.settings)
            .then(() => this.messageBar.add("Success", "Saved Successfully"))
            .catch((reason) => this.messageBar.add("Error", reason));
        await this.settingsService.save(this.settings);
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