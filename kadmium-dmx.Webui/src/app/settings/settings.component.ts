import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { Settings } from "api/models";
import { NgForm } from '@angular/forms';
import { AnimationLibrary } from "../animation-library";
import { EditorComponent } from "../editor-component/editor-component";
import { APIClient } from 'api';
import { MessageService } from 'app/message.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class SettingsComponent extends EditorComponent implements OnInit
{
    settings: Settings;
    public saving: boolean;
    enttecPorts: string[];
    activeTab: string;

    public fakeTargets: UnicastTarget[];

    @ViewChild("settingsForm") formChild: NgForm;

    constructor(
        private apiClient: APIClient,
        private messageService: MessageService,
        title: Title)
    {
        super();
        title.setTitle("Settings");
        this.saving = false;
        this.fakeTargets = [];
    }

    ngOnInit(): void
    {
        this.form = this.formChild;

        try
        {
            this.apiClient
                .getSettings()
                .toPromise()
                .then(response =>
                {
                    this.settings = response;
                    this.fakeTargets = this.settings.sacnTransmitter.unicast.map(x => { return { target: x } });
                });
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

    public get loading(): boolean
    {
        return this.settings == null || this.enttecPorts == null;
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            this.settings.sacnTransmitter.unicast = this.fakeTargets.map(x => x.target);
            await this.apiClient.postSettings({ value: this.settings }).toPromise();
            this.saved = true;
            this.messageService.info("Saved Successfully");
        }
        catch (error)
        {
            this.messageService.error(error);
        }
        finally
        {
            this.saving = false;
        }
    }

    public addElement(): void
    {
        this.fakeTargets.push({ target: "" });
    }

    public removeElement(index: number): void
    {
        this.fakeTargets.splice(index, 1);
    }
}

interface UnicastTarget
{
    target: string;
}