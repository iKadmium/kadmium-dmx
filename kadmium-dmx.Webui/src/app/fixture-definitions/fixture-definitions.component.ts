import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { FixtureDefinitionSkeleton, FixtureDefinition } from "api/models";
import { MatDialog } from '@angular/material';
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';
import { URLs } from '../url';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { MessageService } from 'app/message.service';
import { FileReaderService } from '../file-reader.service';

@Component({
    selector: 'app-fixture-definitions',
    templateUrl: './fixture-definitions.component.html',
    styleUrls: ['./fixture-definitions.component.css'],
    animations: [AnimationLibrary.slideIn(), AnimationLibrary.fadeIn(200), AnimationLibrary.fadeOut(200)]
})
export class FixtureDefinitionsComponent implements OnInit
{
    public skeletons: FixtureDefinitionSkeleton[];

    public filter: string;
    public filteredData: FixtureDefinitionSkeleton[];

    public loading: boolean;
    public saving: boolean;

    constructor(
        private apiClient: APIClient,
        private dialog: MatDialog,
        private messageService: MessageService,
        private fileReader: FileReaderService,
        title: Title)
    {
        title.setTitle("Fixture Definitions");
        this.skeletons = [];
        this.filter = "";
        this.loading = true;
        this.saving = false;
        this.filteredData = [];
    }

    ngOnInit(): void
    {
        try
        {
            this.apiClient.getFixtureDefinitions()
                .toPromise()
                .then(response => 
                {
                    this.skeletons = response;
                    this.applyFilter("");
                    this.loading = false;
                });
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

    public applyFilter(filterValue: string): void
    {
        this.filter = filterValue
            .trim()
            .toLowerCase();
        this.filteredData = this.skeletons.filter((value: FixtureDefinitionSkeleton) =>
        {
            let fullName = (value.manufacturer + " " + value.model).toLowerCase();
            if (this.filter != "")
            {
                return fullName.indexOf(this.filter) != -1;
            }
            else return true;
        });
    }

    public get manufacturers(): string[]
    {
        return this.skeletons
            .map((value: FixtureDefinitionSkeleton) => value.manufacturer)
            .filter((value: string, index: number, array: string[]) => array.indexOf(value) === index);
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

    public async deleteConfirm(fixture: FixtureDefinitionSkeleton): Promise<void>
    {
        let value = await this.dialog.open(DeleteConfirmDialogComponent, { data: `${fixture.manufacturer} ${fixture.model}` }).afterClosed().toPromise();

        if (value != null)
        {
            try
            {
                this.saving = true;
                await this.apiClient.deleteFixtureDefinition({ manufacturer: fixture.manufacturer, model: fixture.model }).toPromise();
                this.messageService.info(fixture.manufacturer + " " + fixture.model + " was deleted");
                let index = this.skeletons.indexOf(fixture);
                this.skeletons.splice(index, 1);
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
            let definition = await this.fileReader.read<FixtureDefinition>(file);
            await this.apiClient.postFixtureDefinition({ value: definition }).toPromise();
            this.skeletons.push(definition.skeleton);
            this.messageService.info("Successfully added " + definition.skeleton.manufacturer + " " + definition.skeleton.model);
        }
        catch (error)
        {
            this.messageService.error(error);
        }
    }

}
