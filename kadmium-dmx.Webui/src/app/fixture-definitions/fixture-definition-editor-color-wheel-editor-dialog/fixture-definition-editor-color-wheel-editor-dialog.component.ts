import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IColorWheelEntryData } from 'api';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorChannelEditorDialogComponent } from '../fixture-definition-editor-channel-editor-dialog/fixture-definition-editor-channel-editor-dialog.component';

@Component({
	selector: 'app-fixture-definition-editor-color-wheel-editor-dialog',
	templateUrl: './fixture-definition-editor-color-wheel-editor-dialog.component.html',
	styleUrls: ['./fixture-definition-editor-color-wheel-editor-dialog.component.css']
})
export class FixtureDefinitionEditorColorWheelEditorDialogComponent implements OnInit
{
	public form: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<FixtureDefinitionEditorChannelEditorDialogComponent>,
		private formBuilder: FormBuilder,
		@Inject(MAT_DIALOG_DATA) entry: IColorWheelEntryData
	)
	{
		this.form = this.formBuilder.group({
			name: [entry.name, Validators.required],
			color: [entry.color, Validators.required],
			min: [entry.min, Validators.required],
			max: [entry.max, Validators.required]
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
