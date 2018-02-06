import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { StatusCode } from "../status-code.enum";
import { SettingsService, EnttecProTransmitterService } from "api/services";
import { Settings } from "api/models";
import { MatSnackBar, MatHorizontalStepper } from '@angular/material';
import { CanDeactivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import { AnimationLibrary } from "app/animation-library";
import { EditorComponent } from "app/editor-component/editor-component";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: [SettingsService, EnttecProTransmitterService],
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

    constructor(private settingsService: SettingsService, private enttecService: EnttecProTransmitterService,
        private snackbar: MatSnackBar, title: Title)
    {
        super();
        title.setTitle("Settings");
        this.saving = false;
        this.fakeTargets = [];
    }

    ngOnInit(): void
    {
        this.form = this.formChild;
        this.settingsService
            .getSettings()
            .toPromise()
            .then(response =>
            {
                this.settings = response;
                this.fakeTargets = this.settings.sacnTransmitter.unicast.map(x => { return { target: x } });
            })
            .catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
        this.enttecService
            .getEnttecPortNames()
            .toPromise()
            .then(response =>
            {
                this.enttecPorts = response;
            })
            .catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
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
            await this.settingsService.postSettings(this.settings).toPromise();
            this.saved = true;
            this.snackbar.open("Saved Successfully", "Close", { duration: 3000 });
        }
        catch (reason)
        {
            this.snackbar.open(reason, "Close", { duration: 3000 });
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

    public getElementIndex(element: UnicastTarget): number
    {
        return this.fakeTargets.indexOf(element);
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