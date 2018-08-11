import { Component, OnInit } from '@angular/core';
import { FixtureDefinitionService, GroupService } from "api/services";
import { FixtureDefinitionSkeleton, Group, FixtureDefinition } from "api/models";

@Component({
	selector: 'app-venue-discovery-add-fixture-to-venue-dialog',
	templateUrl: './venue-discovery-add-fixture-to-venue-dialog.component.html',
	styleUrls: ['./venue-discovery-add-fixture-to-venue-dialog.component.scss'],
	providers: [FixtureDefinitionService, GroupService]
})
export class VenueDiscoveryAddFixtureToVenueDialogComponent implements OnInit
{
	public groups: Group[];
	public definitions: FixtureDefinitionSkeleton[];
	public data;
	constructor(private fixtureDefinitionService: FixtureDefinitionService, private groupService: GroupService) 
	{
		this.data = {
			group: {},
			fixture: {}
		}
	}

	ngOnInit()
	{
		this.fixtureDefinitionService.getFixtureDefinitionSkeletons()
			.toPromise()
			.then(response => this.definitions = response);
		this.groupService.getGroups()
			.toPromise()
			.then(response => this.groups = response);

	}

}
