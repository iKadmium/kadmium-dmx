import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FixtureDefinitionSkeleton, IGroupData } from 'api/models';

@Component({
	selector: 'app-universe-editor-add-multiple-fixtures-dialog',
	templateUrl: './universe-editor-add-multiple-fixtures-dialog.component.html',
	styleUrls: ['./universe-editor-add-multiple-fixtures-dialog.component.scss']
})
export class UniverseEditorAddMultipleFixturesDialogComponent implements OnInit
{
	public formGroup: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: IUniverseEditorAddMultipleFixturesDialogInputData,
		fb: FormBuilder) 
	{
		this.formGroup = fb.group({
			quantity: [1, Validators.required],
			address: ['', Validators.required],
			skeleton: [data.skeletons[0], Validators.required],
			group: [data.groups[0], Validators.required]
		});
	}

	ngOnInit()
	{
	}

	public ok(): void
	{
		this.dialogRef.close(this.formGroup.value);
	}

	public cancel(): void
	{
		this.dialogRef.close();
	}

}

export interface IUniverseEditorAddMultipleFixturesDialogInputData
{
	skeletons: FixtureDefinitionSkeleton[],
	groups: IGroupData[]
}

export interface IUniverseEditorAddMultipleFixturesDialogOutputData
{
	quantity: number,
	address: number,
	group: IGroupData,
	skeleton: FixtureDefinitionSkeleton
}