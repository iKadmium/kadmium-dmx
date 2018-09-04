import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IMovementAxisData } from 'api';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorChannelEditorDialogComponent } from '../fixture-definition-editor-channel-editor-dialog/fixture-definition-editor-channel-editor-dialog.component';

@Component({
	selector: 'app-fixture-definition-editor-movement-axis-editor-dialog',
	templateUrl: './fixture-definition-editor-movement-axis-editor-dialog.component.html',
	styleUrls: ['./fixture-definition-editor-movement-axis-editor-dialog.component.css']
})
export class FixtureDefinitionEditorMovementAxisEditorDialogComponent implements OnInit
{
	public form: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<FixtureDefinitionEditorChannelEditorDialogComponent>,
		private formBuilder: FormBuilder,
		@Inject(MAT_DIALOG_DATA) axis: IMovementAxisData
	)
	{
		this.form = this.formBuilder.group({
			name: [axis.name, Validators.required],
			min: [axis.min, Validators.required],
			max: [axis.max, Validators.required]
		});
	}

	ngOnInit()
	{
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
