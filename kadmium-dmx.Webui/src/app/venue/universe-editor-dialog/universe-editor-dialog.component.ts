import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UniverseData } from 'api';

@Component({
	selector: 'app-universe-editor-dialog',
	templateUrl: './universe-editor-dialog.component.html',
	styleUrls: ['./universe-editor-dialog.component.css']
})
export class UniverseEditorDialogComponent implements OnInit
{
	public formGroup: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<UniverseEditorDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: UniverseData,
		fb: FormBuilder)
	{
		this.formGroup = fb.group({
			name: [this.data.name, Validators.required],
			universeID: [this.data.universeID, Validators.required]
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
