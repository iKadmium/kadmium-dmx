import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { StatusCode } from "../status-code.enum";
import { SettingsService, EnttecProTransmitterService } from "api/services";
import { Settings } from "api/models";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar, MatHorizontalStepper } from '@angular/material';
import { CanDeactivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: [SettingsService, EnttecProTransmitterService]
})
export class SettingsComponent implements OnInit
{
    settings: Settings;
    public saving: boolean;
    enttecPorts: string[];
    activeTab: string;

    public fakeTargets: UnicastTarget[];

    public dataSource: MatTableDataSource<UnicastTarget>;
    public displayedColumns = ['address', 'actions'];

    @ViewChild("settingsForm") form: NgForm;

    constructor(private settingsService: SettingsService, private enttecService: EnttecProTransmitterService,
        private snackbar: MatSnackBar, title: Title)
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
            .catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
        this.enttecService
            .getEnttecPortNames()
            .then(response =>
            {
                this.enttecPorts = response.data;
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
            await this.settingsService.postSettings(this.settings);
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