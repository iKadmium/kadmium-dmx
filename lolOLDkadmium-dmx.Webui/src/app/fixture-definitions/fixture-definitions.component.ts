import { Component, OnInit, ViewChild } from '@angular/core';
import { AsyncFileReader } from "../async-file-reader";
import { Title } from "@angular/platform-browser";
import { FixtureDefinitionSkeleton, FixtureDefinition } from "api/models";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar, MatDialog } from '@angular/material';
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';
import { URLs } from '../url';
import { DeleteConfirmDialogComponent } from 'app/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
    selector: 'app-fixture-definitions',
    templateUrl: './fixture-definitions.component.html',
    styleUrls: ['./fixture-definitions.component.css'],
    providers: [APIClient],
    animations: [AnimationLibrary.slideIn(), AnimationLibrary.fadeIn(200), AnimationLibrary.fadeOut(200)]
})
export class FixtureDefinitionsComponent implements OnInit
{
    skeletons: FixtureDefinitionSkeleton[];

    filter: string;

    public loading: boolean;
    public saving: boolean;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private apiClient: APIClient, private dialog: MatDialog,
        private snackbar: MatSnackBar, title: Title)
    {
        title.setTitle("Fixture Definitions");
        this.skeletons = [];
        this.filter = "";
        this.loading = true;
        this.saving = false;
    }

    ngOnInit(): void
    {
        this.apiClient.getFixtureDefinitions()
            .toPromise()
            .then(response => 
            {
                response.forEach(skeleton => this.skeletons.push(skeleton));
                this.loading = false;

            }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
    }

    public applyFilter(filterValue: string): void
    {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.filter = filterValue;
    }

    public get manufacturers(): string[]
    {
        return this.skeletons
            .map((value: FixtureDefinitionSkeleton) => value.manufacturer)
            .filter((value: string, index: number, array: string[]) => array.indexOf(value) === index);
    }

    public get filteredData(): FixtureDefinitionSkeleton[]
    {
        let filtered = this.skeletons.filter((value: FixtureDefinitionSkeleton) =>
        {
            let fullName = (value.manufacturer + " " + value.model).toLowerCase();
            if (this.filter != "")
            {
                return fullName.indexOf(this.filter) != -1;
            }
            else return true;
        });
        return filtered;
    }

    public upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    public async filesSelected(files: File[]): Promise<void>
    {
        for (let file of files)
        {
            await this.uploadFile(file);
        }
    }

    private deleteConfirm(fixture: FixtureDefinitionSkeleton): void
    {
        this.dialog.open(DeleteConfirmDialogComponent, { data: `${fixture.manufacturer} ${fixture.model}` }).afterClosed().subscribe(async value =>
        {
            if (value)
            {
                try
                {
                    this.saving = true;
                    await this.apiClient.deleteFixtureDefinition({ manufacturer: fixture.manufacturer, model: fixture.model }).toPromise();
                    this.snackbar.open(fixture.manufacturer + " " + fixture.model + " was deleted", "Close", { duration: 3000 });
                    let index = this.skeletons.indexOf(fixture);
                    this.skeletons.splice(index, 1);
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
        });
    }

    public getDownloadURL(skeleton: FixtureDefinitionSkeleton): string
    {
        return `${URLs.getApiURL()}/${skeleton.manufacturer}/${skeleton.model}/download`;
    }

    public getDownloadFilename(skeleton: FixtureDefinitionSkeleton): string
    {
        return `${skeleton.manufacturer} ${skeleton.model}.json`;
    }

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let definition = await AsyncFileReader.read<FixtureDefinition>(file);
            await this.apiClient.postFixtureDefinition({ value: definition }).toPromise();
            this.skeletons.push(definition.skeleton);
            this.snackbar.open("Successfully added " + definition.skeleton.manufacturer + " " + definition.skeleton.model, "Close", { duration: 3000 });
        }
        catch (reason)
        {
            this.snackbar.open(reason, "Close", { duration: 3000 });
        }
    }

}
