import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IColorWheelEntryData, IFixtureDefinition } from 'api';
import { AnimationLibrary } from '../animation-library';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorColorWheelEditorDialogComponent } from '../fixture-definition-editor-color-wheel-editor-dialog/fixture-definition-editor-color-wheel-editor-dialog.component';
import { DeleteConfirmService } from '../services/delete-confirm.service';
import { EditorService } from '../services/editor.service';

@Component({
	selector: 'app-fixture-definition-editor-color-wheel',
	templateUrl: './fixture-definition-editor-color-wheel.component.html',
	styleUrls: ['./fixture-definition-editor-color-wheel.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class FixtureDefinitionEditorColorWheelComponent implements OnInit
{
	public colorWheel: IColorWheelEntryData[];
	constructor(
		private fixtureDefinitionService: EditorService<IFixtureDefinition>,
		private dialogService: MatDialog,
		private deleteConfirm: DeleteConfirmService
	) { }

	ngOnInit()
	{
		if (this.fixtureDefinitionService.getActive().colorWheel == null)
		{
			this.fixtureDefinitionService.getActive().colorWheel = [];
		}
		this.colorWheel = this.fixtureDefinitionService.getActive().colorWheel;
	}

	public async addEntry(): Promise<void>
	{
		const entry: IColorWheelEntryData = {
			name: "",
			min: 0,
			max: 255,
			color: "#000000"
		};

		const result = await this.dialogService
			.open(FixtureDefinitionEditorColorWheelEditorDialogComponent, { data: entry })
			.afterClosed()
			.toPromise();
		if (result)
		{
			this.colorWheel.push(result);
		}
	}

	public async editEntry(index: number): Promise<void>
	{
		const entry = this.colorWheel[index];
		const result = await this.dialogService
			.open(FixtureDefinitionEditorColorWheelEditorDialogComponent, { data: entry })
			.afterClosed()
			.toPromise();
		if (result)
		{
			this.colorWheel[index] = result;
		}
	}

	public async removeEntry(index: number): Promise<void>
	{
		const entry = this.colorWheel[index];
		const result = await this.deleteConfirm.confirm(entry.name);
		if (result)
		{
			this.colorWheel.splice(index, 1);
		}
	}

	public getOtherColorWheelEntryNames(thisEntry: IColorWheelEntryData): string[]
	{
		return this.colorWheel
			.filter(value => value !== thisEntry)
			.map((value: IColorWheelEntryData) => value.name);
	}

	public getSafeColor(entry: IColorWheelEntryData): any
	{
		const style = { color: entry.color };
		return style;
	}

}
