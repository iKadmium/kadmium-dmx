import { Component, OnInit, Input } from '@angular/core';
import { StatusCode } from "../status-code.enum";
import { NotificationsService } from "../notifications.service";
import { AsyncFileReader } from "../async-file-reader";
import { FileSaver } from "../file-saver";
import { GroupService, FixtureDefinitionService } from "api/services";
import { Group, FixtureDefinitionSkeleton, Universe, Fixture } from "api/models";
import { MatDialog } from "@angular/material/dialog";
import { UniverseEditorPresetSaveDialogComponent } from "app/universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component";
import { MatTableDataSource } from "@angular/material/table";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

import "rxjs/operator/map";
import 'rxjs/add/operator/startWith';
import { FixtureOptionsEditorComponent } from "app/fixture-options-editor/fixture-options-editor.component";

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

    private selectedFixtures: Fixture[];
    public fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];
    public dataSource: MatTableDataSource<Fixture>;
    public displayedColumns = ["selected", "address", "model", "group", "actions"];

    constructor(private fixtureDefinitionService: FixtureDefinitionService, private notificationsService: NotificationsService, private dialog: MatDialog)
    {
        this.selectedFixtures = [];
    }

    ngOnInit(): void
    {
        this.fixtureDefinitionService.getFixtureDefinitionSkeletons().then(response => 
        {
            this.fixtureDefinitionSkeletons = response.data;

            this.dataSource = new MatTableDataSource<Fixture>(this.universe.fixtures);
        }).catch(reason => this.notificationsService.add(StatusCode.Error, reason));
    }

    private async removeElement(fixture: Fixture): Promise<void>
    {
        if (window.confirm("Are you sure you want to delete " + fixture.type.manufacturer + " " + fixture.type.model + "?"))
        {
            let index = this.universe.fixtures.indexOf(fixture);
            this.universe.fixtures.splice(index, 1);
            this.dataSource._updateChangeSubscription();
        }
    }

    public getElementIndex(element: Fixture): number
    {
        return this.universe.fixtures.indexOf(element);
    }

    private addElement(): void
    {
        let fixture = new Fixture();
        fixture.group = this.groups[0].name;
        fixture.address = 1;
        fixture.type = this.fixtureDefinitionSkeletons[0];
        fixture.options = {};
        this.universe.fixtures.push(fixture);
        this.dataSource._updateChangeSubscription();
    }

    private isSelected(fixture: Fixture): boolean
    {
        return this.selectedFixtures.indexOf(fixture) != -1;
    }

    private selectFixture(fixture: Fixture, selected: boolean)
    {
        let index = this.selectedFixtures.indexOf(fixture);
        if (selected && index == -1)
        {
            this.selectedFixtures.push(fixture);
        }
        else if (!selected && index != -1)
        {
            this.selectedFixtures.splice(index, 1);
        }
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

    private async savePresetAs(filenameForm: HTMLInputElement): Promise<void>
    {
        let ref = this.dialog.open(UniverseEditorPresetSaveDialogComponent, {
            width: '250px',
            data: { filename: "" }
        });
        ref.afterClosed().subscribe(result =>
        {
            let name = result;
            let fixtures = this.selectedFixtures;
            FileSaver.Save(name + ".json", fixtures);
        })
    }

    private upload(fileInput: any): void
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
            this.notificationsService.add(StatusCode.Success, "Successfully added " + fixtures.length + " fixtures");
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

}
