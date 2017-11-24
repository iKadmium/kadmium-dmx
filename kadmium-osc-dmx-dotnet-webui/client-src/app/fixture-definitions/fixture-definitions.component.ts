import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AsyncFileReader } from "../async-file-reader";
import { StatusCode } from "../status-code.enum";
import { Title } from "@angular/platform-browser";
import { FixtureDefinitionService } from "api/services";
import { FixtureDefinitionSkeleton, FixtureDefinition } from "api/models";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-fixture-definitions',
    templateUrl: './fixture-definitions.component.html',
    styleUrls: ['./fixture-definitions.component.css'],
    providers: [FixtureDefinitionService]
})
export class FixtureDefinitionsComponent implements OnInit, AfterViewInit
{
    manufacturerFilterEnabled: boolean;
    manufacturerFilter: string;
    skeletons: FixtureDefinitionSkeleton[];

    displayedColumns = ['manufacturer', 'model', 'actions'];
    dataSource: MatTableDataSource<FixtureDefinitionSkeleton>;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private fixtureDefinitionsService: FixtureDefinitionService,
        private snackbar: MatSnackBar, title: Title)
    {
        title.setTitle("Fixture Definitions");
        this.skeletons = [];
        this.dataSource = new MatTableDataSource<FixtureDefinitionSkeleton>(this.skeletons);
    }

    ngOnInit(): void
    {
        this.fixtureDefinitionsService.getFixtureDefinitionSkeletons().then(response => 
        {
            response.data.forEach(skeleton => this.skeletons.push(skeleton));
            if (this.manufacturers.length > 0)
            {
                this.manufacturerFilter = this.manufacturers[0];
            }
            this.updateDataSource();

        }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));
    }

    ngAfterViewInit(): void
    {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string)
    {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    private updateDataSource(): void
    {
        this.dataSource._updateChangeSubscription();
    }

    public get manufacturers(): string[]
    {
        return this.skeletons
            .map((value: FixtureDefinitionSkeleton) => value.manufacturer)
            .filter((value: string, index: number, array: string[]) => array.indexOf(value) === index);
    }

    public get filteredData(): FixtureDefinitionSkeleton[]
    {
        if (this.manufacturerFilterEnabled)
        {
            return this.skeletons.filter((value: FixtureDefinitionSkeleton) => value.manufacturer == this.manufacturerFilter);
        }
        else
        {
            return this.skeletons;
        }
    }

    private getEditUrl(fixture: FixtureDefinitionSkeleton): string
    {
        return "fixture-definitions" + "/" + fixture.id;
    }

    private getDownloadUrl(fixture: FixtureDefinitionSkeleton): string
    {
        return "/api/FixtureDefinition" + "/" + fixture.id;
    }

    private async deleteConfirm(fixture: FixtureDefinitionSkeleton): Promise<void>
    {
        if (window.confirm("Are you sure you want to delete the definition for " + fixture.manufacturer + " " + fixture.model + "?"))
        {
            try
            {
                await this.fixtureDefinitionsService.deleteFixtureDefinitionById(fixture.id);

                this.snackbar.open(fixture.manufacturer + " " + fixture.model + " was deleted", "Close", { duration: 3000 });
                let index = this.skeletons.indexOf(fixture);
                this.skeletons.splice(index, 1);
                this.updateDataSource();
            }
            catch (reason)
            {
                this.snackbar.open(reason, "Close", { duration: 3000 });
            }
        }
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

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let definition = await AsyncFileReader.read<FixtureDefinition>(file);
            definition.id = (await this.fixtureDefinitionsService.postFixtureDefinitionById(definition)).data;
            this.skeletons.push(definition);
            this.snackbar.open("Successfully added " + definition.manufacturer + " " + definition.model, "Close", { duration: 3000 });
        }
        catch (reason)
        {
            this.snackbar.open(reason, "Close", { duration: 3000 });
        }
    }

}
