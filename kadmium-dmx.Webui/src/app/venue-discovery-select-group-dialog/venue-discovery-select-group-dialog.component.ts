import { Component, OnInit } from '@angular/core';
import { APIClient, GroupData } from 'api';

@Component({
	selector: 'app-venue-discovery-select-group-dialog',
	templateUrl: './venue-discovery-select-group-dialog.component.html',
	styleUrls: ['./venue-discovery-select-group-dialog.component.scss'],
	providers: [APIClient]
})
export class VenueDiscoverySelectGroupDialogComponent implements OnInit
{
	public groups: GroupData[];

	constructor(private apiClient: APIClient) { }

	ngOnInit()
	{
		this.apiClient.getGroups()
			.toPromise()
			.then(response =>
			{
				this.groups = response;
			});
	}

}
