import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDMXChannelData } from 'api';

@Component({
	selector: 'app-fixture-definition-editor-channel-editor-dialog',
	templateUrl: './fixture-definition-editor-channel-editor-dialog.component.html',
	styleUrls: ['./fixture-definition-editor-channel-editor-dialog.component.css']
})
export class FixtureDefinitionEditorChannelEditorDialogComponent implements OnInit
{
	public form: FormGroup;

	public filteredChannelNameOptions: string[];

	public channelNameOptions: string[] = [
		'Master',
		'Strobe',
		'Red',
		'Green',
		'Blue',
		'UV',
		'ColorWheel',
		'Pan',
		'PanCoarse',
		'PanFine',
		'Tilt',
		'TiltCoarse',
		'TiltFine',
		'CO2',
		'Fire',
		'FireHeight'
	];

	constructor(
		public dialogRef: MatDialogRef<FixtureDefinitionEditorChannelEditorDialogComponent>,
		private formBuilder: FormBuilder,
		@Inject(MAT_DIALOG_DATA) channel: IDMXChannelData
	)
	{
		this.form = this.formBuilder.group({
			name: [channel.name, Validators.required],
			address: [channel.address, Validators.required],
			min: [channel.min, Validators.required],
			max: [channel.max, Validators.required]
		});
		this.updateAutocomplete();
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

	private getFilteredChannelNameOptions(): string[]
	{
		const name = this.form.value.name.toLowerCase();
		const options = this.channelNameOptions
			.filter(x => x.toLowerCase().startsWith(name) && x.toLowerCase() !== name);
		return options;
	}

	public updateAutocomplete(): void
	{
		this.filteredChannelNameOptions = this.getFilteredChannelNameOptions();
	}

}
