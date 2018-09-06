import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from '@angular/router';
import { APIClient, IGroupData } from 'api';
import { FixtureData, FixtureDefinitionSkeleton, IVenueData, UniverseData } from "api/models";
import 'rxjs/add/operator/startWith';
import "rxjs/operator/map";
import { AnimationLibrary } from '../animation-library';
import { FixtureEditorComponent, FixtureEditorData } from '../fixture-editor/fixture-editor.component';
import { FixtureOptionsEditorComponent, FixtureOptionsEditorData } from "../fixture-options-editor/fixture-options-editor.component";
import { DeleteConfirmService } from '../services/delete-confirm.service';
import { EditorService } from '../services/editor.service';
import { FileReaderService } from '../services/file-reader.service';
import { FileSaverService } from '../services/file-saver.service';
import { MessageService } from '../services/message.service';
// tslint:disable-next-line:max-line-length
import { IUniverseEditorAddMultipleFixturesDialogInputData, IUniverseEditorAddMultipleFixturesDialogOutputData, UniverseEditorAddMultipleFixturesDialogComponent } from '../universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
// tslint:disable-next-line:max-line-length
import { UniverseEditorPresetSaveDialogComponent } from "../universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component";


@Component({
	selector: 'app-universe-editor',
	templateUrl: './universe-editor.component.html',
	styleUrls: ['./universe-editor.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class UniverseEditorComponent implements OnInit
{
	@ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;

	public groups: IGroupData[];
	public fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];
	public universe: UniverseData;

	constructor(
		private apiClient: APIClient,
		private messageService: MessageService,
		private fileReader: FileReaderService,
		private fileSaver: FileSaverService,
		private editorService: EditorService<IVenueData>,
		private activatedRoute: ActivatedRoute,
		private deleteConfirm: DeleteConfirmService,
		private dialog: MatDialog)
	{
	}

	ngOnInit(): void
	{
		const universeIDstring = this.activatedRoute.snapshot.params["universeID"] as string;
		const universeID = parseInt(universeIDstring, 10);
		try
		{
			this.apiClient.getGroups()
				.toPromise()
				.then(response =>
				{
					this.groups = response;
				});

			this.apiClient.getFixtureDefinitions()
				.toPromise()
				.then(response =>
				{
					this.fixtureDefinitionSkeletons = response;
				});

			this.universe = this.editorService.getActive().universes.find(x => x.universeID === universeID);
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

	public async removeElement(index: number): Promise<void>
	{
		const fixture = this.universe.fixtures[index];
		const name = fixture.type.manufacturer + " " + fixture.type.model;
		const result = await this.deleteConfirm.confirm(name);
		if (result)
		{
			this.universe.fixtures.splice(index, 1);
			this.editorService.isDirty = true;
		}

	}

	public async addElements(): Promise<void>
	{
		const inputData: IUniverseEditorAddMultipleFixturesDialogInputData = {
			groups: this.groups,
			skeletons: this.fixtureDefinitionSkeletons
		};
		const result = await this.dialog
			.open(UniverseEditorAddMultipleFixturesDialogComponent, { data: inputData })
			.afterClosed()
			.toPromise();

		if (result != null)
		{
			const data = result as IUniverseEditorAddMultipleFixturesDialogOutputData;
			const definition = await this.apiClient
				.getFixtureDefinition({ manufacturer: data.skeleton.manufacturer, model: data.skeleton.model })
				.toPromise();
			let runningAddress = data.address;
			const addresses = definition.channels
				.map(x => x.address)
				.sort();
			const channelCount = addresses[addresses.length - 1] - addresses[0] + 1;
			for (let i = 0; i < data.quantity; i++)
			{
				const fixture: FixtureData = {
					group: data.group.name,
					address: runningAddress,
					type: data.skeleton,
					options: {
						maxBrightness: 1,
						axisOptions: {}
					}
				};
				this.universe.fixtures.push(fixture);
				runningAddress += channelCount;
			}
			this.editorService.isDirty = true;
		}

	}

	public async edit(index: number): Promise<void>
	{
		const data: FixtureEditorData = {
			fixture: this.universe.fixtures[index],
			skeletons: this.fixtureDefinitionSkeletons,
			groups: this.groups
		};
		const ref = this.dialog.open(FixtureEditorComponent, {
			data: data
		});
		const result = await ref.afterClosed().toPromise();

		if (result != null)
		{
			this.universe.fixtures[index] = result;
		}
	}

	public async options(fixture: FixtureData): Promise<void>
	{
		const data: FixtureOptionsEditorData = {
			type: fixture.type,
			options: fixture.options
		};
		const ref = this.dialog.open(FixtureOptionsEditorComponent, {
			data: data
		});
		const result = await ref.afterClosed().toPromise();

		if (result != null)
		{
			fixture.options = result;
		}
	}

	public async savePresetAs(): Promise<void>
	{
		const ref = this.dialog.open(UniverseEditorPresetSaveDialogComponent, {
			data: { filename: "", fixtures: this.universe.fixtures }
		});
		const result = await ref.afterClosed().toPromise();
		if (result != null)
		{
			const name = result.filename;
			const fixtures = result.fixtures;
			this.fileSaver.save(name + ".json", fixtures);
		}
	}

	public upload(fileInput: any): void
	{
		(fileInput as HTMLInputElement).click();
	}

	public async uploadFiles(files: File[]): Promise<void>
	{
		for (const file of files)
		{
			await this.uploadFile(file);
		}
	}

	private async uploadFile(file: File): Promise<void>
	{
		try
		{
			const fixtures = await this.fileReader.read<FixtureData[]>(file);
			for (const fixture of fixtures)
			{
				this.universe.fixtures.push(fixture);
			}
			this.messageService.info("Successfully added " + fixtures.length + " fixtures");
		}
		catch (reason)
		{
			this.messageService.error(reason);
		}
	}

}
