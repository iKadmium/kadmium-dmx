import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IColorWheelEntryData, IFixtureDefinition } from 'api';
import { AnimationLibrary } from '../animation-library';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { EditorService } from '../editor.service';
import { FixtureDefinitionEditorColorWheelEditorDialogComponent } from '../fixture-definition-editor-color-wheel-editor-dialog/fixture-definition-editor-color-wheel-editor-dialog.component';

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
		private dialogService: MatDialog
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
		let entry: IColorWheelEntryData = {
			name: "",
			min: 0,
			max: 255,
			color: "#000000"
		};

		let result = await this.dialogService.open(FixtureDefinitionEditorColorWheelEditorDialogComponent, { data: entry }).afterClosed().toPromise();
		if (result)
		{
			this.colorWheel.push(result);
		}
	}

	public async editEntry(index: number): Promise<void>
	{
		let entry = this.colorWheel[index];
		let result = await this.dialogService.open(FixtureDefinitionEditorColorWheelEditorDialogComponent, { data: entry }).afterClosed().toPromise();
		if (result)
		{
			this.colorWheel[index] = result;
		}
	}

	public async removeEntry(index: number): Promise<void>
	{
		let entry = this.colorWheel[index];
		let result = await this.dialogService.open(DeleteConfirmDialogComponent, { data: entry.name }).afterClosed().toPromise();
		if (result)
		{
			this.colorWheel.splice(index, 1);
		}
	}

	public getOtherColorWheelEntryNames(thisEntry: IColorWheelEntryData): string[]
	{
		return this.colorWheel
			.filter(value => value != thisEntry)
			.map((value: IColorWheelEntryData) => value.name);
	}

	public getSafeColor(entry: IColorWheelEntryData): any
	{
		let style = { color: entry.color };
		return style;
	}

}
