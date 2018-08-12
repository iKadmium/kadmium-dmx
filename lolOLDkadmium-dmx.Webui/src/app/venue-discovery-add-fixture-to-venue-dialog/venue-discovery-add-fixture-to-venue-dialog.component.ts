import { Component, OnInit } from '@angular/core';
import { APIClient, FixtureDefinitionSkeleton, GroupData } from 'api';

@Component({
	selector: 'app-venue-discovery-add-fixture-to-venue-dialog',
	templateUrl: './venue-discovery-add-fixture-to-venue-dialog.component.html',
	styleUrls: ['./venue-discovery-add-fixture-to-venue-dialog.component.scss'],
	providers: [APIClient]
})
export class VenueDiscoveryAddFixtureToVenueDialogComponent implements OnInit
{
	public groups: GroupData[];
	public definitions: FixtureDefinitionSkeleton[];
	public data;
	constructor(private apiClient: APIClient) 
	{
		this.data = {
			group: {},
			fixture: {}
		}
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

}
