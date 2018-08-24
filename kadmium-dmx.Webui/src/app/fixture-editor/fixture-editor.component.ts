import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FixtureDefinitionSkeleton, FixtureData, GroupData } from 'api';

@Component({
	selector: 'app-fixture-editor',
	templateUrl: './fixture-editor.component.html',
	styleUrls: ['./fixture-editor.component.css']
})
export class FixtureEditorComponent implements OnInit
{
	constructor(
		public dialogRef: MatDialogRef<FixtureEditorComponent>,
		@Inject(MAT_DIALOG_DATA) public data: FixtureEditorData
	)
	{
	}

	ngOnInit()
	{
	}

	public skeletonCompareFn(x: FixtureDefinitionSkeleton, y: FixtureDefinitionSkeleton): boolean
	{
		if (x == null && y == null)
		{
			return true;
		}
		else if ((x == null && y != null) || (x != null && y == null))
		{
			return false;
		}
		else
		{
			return x.model == y.model && x.manufacturer == y.manufacturer;
		}
	}

	public ok(): void
	{
		this.dialogRef.close(this.data.fixture);
	}

	public cancel(): void
	{
		this.dialogRef.close();
	}

}

export interface FixtureEditorData
{
	fixture: FixtureData,
	skeletons: FixtureDefinitionSkeleton[],
	groups: GroupData[]
}