import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IFixtureDefinition, IMovementAxisData } from 'api';
import { AnimationLibrary } from '../animation-library';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { EditorService } from '../editor.service';
import { FixtureDefinitionEditorMovementAxisEditorDialogComponent } from '../fixture-definition-editor-movement-axis-editor-dialog/fixture-definition-editor-movement-axis-editor-dialog.component';

@Component({
	selector: 'app-fixture-definition-editor-movements',
	templateUrl: './fixture-definition-editor-movements.component.html',
	styleUrls: ['./fixture-definition-editor-movements.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class FixtureDefinitionEditorMovementsComponent implements OnInit
{
	public movements: IMovementAxisData[];

	private allAxis: string[] = [
		'Pan',
		'Tilt'
	]

	constructor(
		private editorService: EditorService<IFixtureDefinition>,
		private dialogService: MatDialog
	) 
	{
		if (this.editorService.getActive().movements == null)
		{
			this.editorService.getActive().movements = [];
		}
		this.movements = this.editorService.getActive().movements;
	}

	ngOnInit()
	{
	}

	public async addAxis(): Promise<void>
	{
		let axis: IMovementAxisData = {
			name: "",
			min: -270,
			max: 270
		};
		let result = await this.dialogService.open(FixtureDefinitionEditorMovementAxisEditorDialogComponent, { data: axis }).afterClosed().toPromise();
		if (result)
		{
			this.movements.push(result);
		}
	}

	public async editAxis(index: number): Promise<void>
	{
		let axis = this.movements[index];
		let result = await this.dialogService.open(FixtureDefinitionEditorMovementAxisEditorDialogComponent, { data: axis }).afterClosed().toPromise() as IMovementAxisData;
		if (result)
		{
			this.movements[index] = result;
		}
	}

	public async removeAxis(index: number): Promise<void>
	{
		let axis = this.movements[index];
		let result = await this.dialogService.open(DeleteConfirmDialogComponent, { data: axis.name }).afterClosed().toPromise();
		if (result)
		{
			this.movements.splice(index, 1);
		}
	}

	public getOtherAxisNames(thisEntry: IMovementAxisData): string[]
	{
		return this.movements
			.filter(value => value != thisEntry)
			.map((value: IMovementAxisData) => value.name);
	}

}
