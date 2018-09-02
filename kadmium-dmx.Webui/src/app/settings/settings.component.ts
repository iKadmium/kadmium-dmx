import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from "@angular/platform-browser";
import { APIClient } from 'api';
import { Settings } from "api/models";
import { MessageService } from 'app/message.service';
import { AnimationLibrary } from "../animation-library";
import { EditorService } from '../editor.service';
import { Saveable } from '../unsaved-changes';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class SettingsComponent implements Saveable, OnInit
{
    settings: Settings;
    public loading: boolean = true;
    public saving: boolean = false;
    enttecPorts: string[];
    activeTab: string;

    public fakeTargets: UnicastTarget[];

    @ViewChild("settingsForm") formChild: NgForm;

    constructor(
        private apiClient: APIClient,
        private messageService: MessageService,
        private editorService: EditorService<Settings>,
        title: Title)
    {
        title.setTitle("Settings");
        this.saving = false;
        this.fakeTargets = [];
    }

    ngOnInit(): void
    {
        try
        {
            this.apiClient
                .getSettings()
                .toPromise()
                .then(response =>
                {
                    this.settings = response;
                    this.fakeTargets = this.settings.sacnTransmitter.unicast.map(x => ({ target: x }));
                    this.loading = false;
                });
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

    public async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            this.settings.sacnTransmitter.unicast = this.fakeTargets.map(x => x.target);
            await this.apiClient.putSettings({ value: this.settings }).toPromise();
            this.editorService.isDirty = false;
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

    public hasUnsavedChanges(): boolean
    {
        return this.editorService.isDirty;
    }
}

interface UnicastTarget
{
    target: string;
}