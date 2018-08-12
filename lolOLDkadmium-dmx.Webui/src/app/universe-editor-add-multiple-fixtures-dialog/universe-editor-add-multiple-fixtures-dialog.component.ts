import { Component, OnInit, Inject } from '@angular/core';
import { FixtureDefinitionSkeleton, GroupData } from 'api/models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-universe-editor-add-multiple-fixtures-dialog',
	templateUrl: './universe-editor-add-multiple-fixtures-dialog.component.html',
	styleUrls: ['./universe-editor-add-multiple-fixtures-dialog.component.scss']
})
export class UniverseEditorAddMultipleFixturesDialogComponent implements OnInit
{
	public group: GroupData;
	public fixtureType: FixtureDefinitionSkeleton;
	public quantity: number;
	public address: number;

	public groups: GroupData[];
	public fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];

	constructor(public dialogRef: MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: IUniverseEditorAddMultipleFixturesDialogInputData) 
	{
		this.groups = data.groups;
		this.fixtureDefinitionSkeletons = data.skeletons;
	}

	ngOnInit()
	{

	}

	public ok(): void
	{
		let outputData: IUniverseEditorAddMultipleFixturesDialogOutputData = {
			quantity: this.quantity,
			address: this.address,
			group: this.group,
			skeleton: this.fixtureType
		};
		this.dialogRef.close(outputData);
	}

	public cancel(): void
	{
		this.dialogRef.close();
	}

}

export interface IUniverseEditorAddMultipleFixturesDialogInputData
{
	skeletons: FixtureDefinitionSkeleton[],
	groups: GroupData[]
}

export interface IUniverseEditorAddMultipleFixturesDialogOutputData
{
	quantity: number,
	address: number,
	group: GroupData,
	skeleton: FixtureDefinitionSkeleton
}