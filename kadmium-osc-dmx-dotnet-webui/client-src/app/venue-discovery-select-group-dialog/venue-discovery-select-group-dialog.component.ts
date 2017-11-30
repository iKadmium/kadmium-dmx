import { Component, OnInit } from '@angular/core';
import { GroupService } from "api/services";
import { Group } from "api/models";

@Component({
	selector: 'app-venue-discovery-select-group-dialog',
	templateUrl: './venue-discovery-select-group-dialog.component.html',
	styleUrls: ['./venue-discovery-select-group-dialog.component.scss'],
	providers: [GroupService]
})
export class VenueDiscoverySelectGroupDialogComponent implements OnInit
{
	public groups: Group[];

	constructor(private groupsService: GroupService) { }

	ngOnInit()
	{
		this.groupsService.getGroups().then(response =>
		{
			this.groups = response.data;
		});
	}

}
