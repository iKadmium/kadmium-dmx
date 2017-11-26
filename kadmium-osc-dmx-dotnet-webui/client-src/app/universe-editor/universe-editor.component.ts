import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { StatusCode } from "../status-code.enum";
import { AsyncFileReader } from "../async-file-reader";
import { FileSaver } from "../file-saver";
import { GroupService, FixtureDefinitionService } from "api/services";
import { Group, FixtureDefinitionSkeleton, Universe, Fixture } from "api/models";
import { MatDialog } from "@angular/material/dialog";
import { UniverseEditorPresetSaveDialogComponent } from "app/universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

import "rxjs/operator/map";
import 'rxjs/add/operator/startWith';
import { FixtureOptionsEditorComponent } from "app/fixture-options-editor/fixture-options-editor.component";
import { MatExpansionPanel, MatSnackBar } from '@angular/material';
import { Sleep } from 'app/sleep';

@Component({
    selector: 'app-universe-editor',
    templateUrl: './universe-editor.component.html',
    styleUrls: ['./universe-editor.component.css'],
    providers: [FixtureDefinitionService, GroupService]
})
export class UniverseEditorComponent implements OnInit
{
    @Input("universe") universe: Universe;
    @Input("groups") groups: Group[];
    @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

    public fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];

    constructor(private fixtureDefinitionService: FixtureDefinitionService, private snackbar: MatSnackBar, private dialog: MatDialog)
    {

    }

    ngOnInit(): void
    {
        this.fixtureDefinitionService.getFixtureDefinitionSkeletons().then(response => 
        {
            this.fixtureDefinitionSkeletons = response.data;
        }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
    }

    private async removeElement(fixture: Fixture): Promise<void>
    {
        if (window.confirm("Are you sure you want to delete " + fixture.type.manufacturer + " " + fixture.type.model + "?"))
        {
            let index = this.universe.fixtures.indexOf(fixture);
            this.universe.fixtures.splice(index, 1);
        }
    }

    public getElementIndex(element: Fixture): number
    {
        return this.universe.fixtures.indexOf(element);
    }

    public async addElement(): Promise<void>
    {
        let fixture = new Fixture();
        fixture.group = this.groups[0].name;
        fixture.address = 1;
        fixture.type = this.fixtureDefinitionSkeletons[0];
        fixture.options = {};
        this.universe.fixtures.push(fixture);
        await Sleep.sleepUntil(() => this.panels.length == this.universe.fixtures.length);
        this.panels.last.open();
    }

    private get sortedFixtures(): Fixture[]
    {
        return this.universe.fixtures.slice().sort((a, b) => a.address - b.address);
    }

    public options(fixture: Fixture): void
    {
        let ref = this.dialog.open(FixtureOptionsEditorComponent, {
            data: { fixture: fixture }
        });
        ref.afterClosed().subscribe(result =>
        {

        })
    }

    public async savePresetAs(): Promise<void>
    {
        let ref = this.dialog.open(UniverseEditorPresetSaveDialogComponent, {
            data: { filename: "", fixtures: this.universe.fixtures }
        });
        ref.afterClosed().subscribe(result =>
        {
            if (result != null)
            {
                let name = result.filename;
                let fixtures = result.fixtures;
                FileSaver.Save(name + ".json", fixtures);
            }
        })
    }

    public upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    public async uploadFiles(files: File[]): Promise<void>
    {
        for (let file of files)
        {
            await this.uploadFile(file);
        }
    }

    public skeletonCompareFn(x: FixtureDefinitionSkeleton, y: FixtureDefinitionSkeleton): boolean
    {
        if (x == null && y == null)
        {
            return true;
        }
        else if ((x == null && y != null) || (x != null && y == null))
        {
            return false;
        }
        else
        {
            return x.id == y.id;
        }
    }

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let fixtures = await AsyncFileReader.read<Fixture[]>(file);
            for (let fixture of fixtures)
            {
                fixture.id = 0;
                fixture.type = this.fixtureDefinitionSkeletons.find(x => x.manufacturer == fixture.type.manufacturer && x.model == fixture.type.model);
                this.universe.fixtures.push(fixture);
            }
            this.snackbar.open("Successfully added " + fixtures.length + " fixtures", "Close", { duration: 3000 });
        }
        catch (reason)
        {
            this.snackbar.open(reason, "Close", { duration: 3000 });
        }
    }

}
