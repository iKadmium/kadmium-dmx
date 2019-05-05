import { Component, OnInit } from '@angular/core';
import { APIClient, FixtureDefinitionSkeleton, IGroupData } from 'api';
import { FormControl, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
	selector: 'app-venue-discovery-add-fixture-to-venue-dialog',
	templateUrl: './venue-discovery-add-fixture-to-venue-dialog.component.html',
	styleUrls: ['./venue-discovery-add-fixture-to-venue-dialog.component.scss']
})
export class VenueDiscoveryAddFixtureToVenueDialogComponent implements OnInit
{
	public groups: IGroupData[];
	public definitions: FixtureDefinitionSkeleton[];

	public form: FormGroup;

	constructor(private apiClient: APIClient, private dialog: MatDialogRef<VenueDiscoveryAddFixtureToVenueDialogComponent>)
	{
		this.form = new FormGroup({
			group: new FormControl(null, Validators.required),
			fixture: new FormControl(null, Validators.required)
		});
	}

	ngOnInit()
	{
		this.apiClient.getFixtureDefinitions()
			.toPromise()
			.then(response => this.definitions = response);
		this.apiClient.getGroups()
			.toPromise()
			.then(response => this.groups = response);
	}

	public save(): void
	{
		this.dialog.close(this.form.value);
	}

	public cancel(): void
	{
		this.dialog.close();
	}
}

export interface VenueDiscoveryAddFixtureToVenueDialogComponentReturnType
{
	group: string;
	fixture: FixtureDefinitionSkeleton;
}