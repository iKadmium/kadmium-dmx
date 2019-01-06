import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FixtureDefinitionSkeleton, FixtureData, IGroupData } from 'api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-fixture-editor',
	templateUrl: './fixture-editor.component.html',
	styleUrls: ['./fixture-editor.component.css']
})
export class FixtureEditorComponent implements OnInit
{
	public form: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<FixtureEditorComponent>,
		@Inject(MAT_DIALOG_DATA) public data: FixtureEditorData,
		private formBuilder: FormBuilder
	)
	{
		this.form = this.formBuilder.group({
			address: [this.data.fixture.address, [Validators.required, Validators.min(1), Validators.max(512)]],
			group: [this.data.fixture.group, Validators.required],
			type: [this.data.skeletons[0], Validators.required]
		});
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
			return x.model === y.model && x.manufacturer === y.manufacturer;
		}
	}

	public ok(): void
	{
		this.dialogRef.close(this.form.value);
	}

	public cancel(): void
	{
		this.dialogRef.close();
	}

}

export interface FixtureEditorData
{
	fixture: FixtureData;
	skeletons: FixtureDefinitionSkeleton[];
	groups: IGroupData[];
}