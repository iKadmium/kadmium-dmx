import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from "@angular/platform-browser";
import { APIClient } from 'api';
import { IFixtureDefinition, FixtureDefinitionSkeleton } from "api/models";
import { MessageService } from '../services/message.service';
import { AnimationLibrary } from "../animation-library";
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { FileReaderService } from '../services/file-reader.service';
import { AppURL } from '../app-url';

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
			const fullName = (value.manufacturer + " " + value.model).toLowerCase();
			if (this.filter !== "")
			{
				return fullName.indexOf(this.filter) !== -1;
			}
			else
			{
				return true;
			}
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
		for (const file of files)
		{
			await this.uploadFile(file);
		}
	}

	public async deleteConfirm(fixture: FixtureDefinitionSkeleton): Promise<void>
	{
		const value = await this.dialog
			.open(DeleteConfirmDialogComponent, { data: `${fixture.manufacturer} ${fixture.model}` }).afterClosed().toPromise();

		if (value != null)
		{
			try
			{
				this.saving = true;
				await this.apiClient.deleteFixtureDefinition({ manufacturer: fixture.manufacturer, model: fixture.model }).toPromise();
				this.messageService.info(fixture.manufacturer + " " + fixture.model + " was deleted");
				const index = this.skeletons.indexOf(fixture);
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
		return `${AppURL.getApiURL()}/${skeleton.manufacturer}/${skeleton.model}/download`;
	}

	public getDownloadFilename(skeleton: FixtureDefinitionSkeleton): string
	{
		return `${skeleton.manufacturer} ${skeleton.model}.json`;
	}

	private async uploadFile(file: File): Promise<void>
	{
		try
		{
			const definition = await this.fileReader.read<IFixtureDefinition>(file);
			await this.apiClient.postFixtureDefinition({ value: definition }).toPromise();
			this.skeletons.push(definition.skeleton);
			this.applyFilter(this.filter);
			this.messageService.info("Successfully added " + definition.skeleton.manufacturer + " " + definition.skeleton.model);
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

}
