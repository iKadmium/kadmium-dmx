import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IFixtureDefinition, IMovementAxisData } from 'api';
import { AnimationLibrary } from '../animation-library';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorMovementAxisEditorDialogComponent } from '../fixture-definition-editor-movement-axis-editor-dialog/fixture-definition-editor-movement-axis-editor-dialog.component';
import { DeleteConfirmService } from '../services/delete-confirm.service';
import { EditorService } from '../services/editor.service';

@Component({
	selector: 'app-fixture-definition-editor-movements',
	templateUrl: './fixture-definition-editor-movements.component.html',
	styleUrls: ['./fixture-definition-editor-movements.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class FixtureDefinitionEditorMovementsComponent implements OnInit
{
	public movements: IMovementAxisData[];

	constructor(
		private editorService: EditorService<IFixtureDefinition>,
		private dialogService: MatDialog,
		private deleteConfirm: DeleteConfirmService
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
		const axis: IMovementAxisData = {
			name: "",
			min: -270,
			max: 270
		};
		const result = await this.dialogService
			.open(FixtureDefinitionEditorMovementAxisEditorDialogComponent, { data: axis })
			.afterClosed()
			.toPromise();
		if (result)
		{
			this.movements.push(result);
		}
	}

	public async editAxis(index: number): Promise<void>
	{
		const axis = this.movements[index];
		const result = await this.dialogService
			.open(FixtureDefinitionEditorMovementAxisEditorDialogComponent, { data: axis })
			.afterClosed()
			.toPromise() as IMovementAxisData;
		if (result)
		{
			this.movements[index] = result;
		}
	}

	public async removeAxis(index: number): Promise<void>
	{
		const axis = this.movements[index];
		const result = await this.deleteConfirm.confirm(axis.name);
		if (result)
		{
			this.movements.splice(index, 1);
		}
	}

	public getOtherAxisNames(thisEntry: IMovementAxisData): string[]
	{
		return this.movements
			.filter(value => value !== thisEntry)
			.map((value: IMovementAxisData) => value.name);
	}

}
