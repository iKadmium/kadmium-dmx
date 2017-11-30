import { Component, OnInit } from '@angular/core';
import { DMXChannel } from 'api/models/dmxchannel';
import { MatDialog, MatSnackBar } from '@angular/material';
import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from 'app/venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
import { FixtureDefinition } from 'api/models/fixture-definition';
import { FixtureDefinitionService, VenueService } from 'api/services';
import { AnimationLibrary } from "app/animation-library";
import { UniverseStreamService } from "app/universe-stream.service";
import { ActivatedRoute } from "@angular/router";
import { Fixture, FixtureDefinitionSkeleton } from "api/models";
import { VenueDiscoverySelectGroupDialogComponent } from "app/venue-discovery-select-group-dialog/venue-discovery-select-group-dialog.component";
import { VenueDiscoveryAddFixtureToVenueDialogComponent } from "app/venue-discovery-add-fixture-to-venue-dialog/venue-discovery-add-fixture-to-venue-dialog.component";

@Component({
	selector: 'app-venue-discovery',
	templateUrl: './venue-discovery.component.html',
	styleUrls: ['./venue-discovery.component.scss'],
	providers: [MatDialog, FixtureDefinitionService, UniverseStreamService, VenueService],
	animations: [AnimationLibrary.animations()]
})
export class VenueDiscoveryComponent implements OnInit
{
	public dmxChannels: DiscoveryDMXChannel[]

	public displayFrom: number = 0;
	public displayTo: number = 50;

	public universeID: number = 1;
	public venueID: number = 0;

	constructor(private dialog: MatDialog, private fixtureDefinitionService: FixtureDefinitionService,
		private universeStreamService: UniverseStreamService, public snackbar: MatSnackBar, private venueService: VenueService,
		private route: ActivatedRoute)
	{
		this.dmxChannels = [];
	}

	ngOnInit()
	{
		for (let i = 0; i < 512; i++)
		{
			let channel = new DiscoveryDMXChannel();
			channel.address = i;
			channel.min = "0";
			channel.max = "255";
			channel.value = 0;
			this.dmxChannels.push(channel);
		}

		this.universeStreamService.subscribe(this.universeID, () => { });
		this.venueService.getActiveVenue().then(response =>
		{
			this.venueID = response.data.id;
		});

		this.universeID = parseInt(this.route.snapshot.params["universeID"]);
	}

	public updateValue(address: number, value: number): void
	{
		this.universeStreamService.set(this.universeID, address, value);
	}

	public get filteredChannels(): DiscoveryDMXChannel[]
	{
		return this.dmxChannels.slice(this.displayFrom, this.displayTo);
	}

	public setMin(channel: DiscoveryDMXChannel, min: number): void
	{
		channel.min = channel.value.toString();
	}

	public setMax(channel: DiscoveryDMXChannel, max: number): void
	{
		channel.max = channel.value.toString();
	}

	public addFixtureDefinition(): void
	{
		let channels = JSON.parse(JSON.stringify(this.selectedChannels)) as DMXChannel[];
		let dialogRef = this.dialog.open(VenueDiscoveryAddFixtureDefinitionDialogComponent, { data: channels });
		dialogRef.afterClosed().subscribe(async next =>
		{
			if (next != null)
			{
				let definition = next as FixtureDefinition;
				try
				{
					let id = await this.fixtureDefinitionService.postFixtureDefinitionById(definition);
					definition.id = id.data;
					let address = channels.map(x => x.address).sort((a, b) => a - b)[0];
					this.snackbar.open(`${definition.manufacturer} ${definition.model} successfully added`);
					this.selectedChannels.forEach(channel =>
					{
						channel.selected = false;
					});
					let group = await this.getGroup();
					await this.addFixtureToVenue(address, definition, group);
				}
				catch (error)
				{
					this.snackbar.open(error, "Close", { duration: 3000 });
				}
			}
		});
	}

	public addFixture(address: number): void
	{
		let dialogRef = this.dialog.open(VenueDiscoveryAddFixtureToVenueDialogComponent);
		dialogRef.afterClosed().subscribe(next =>
		{
			if (next != null)
			{
				this.addFixtureToVenue(address + 1, next.fixture, next.group);
			}
		});
	}

	public async getGroup(): Promise<string>
	{
		let promise = new Promise<string>((resolve, reject) => 
		{
			this.dialog.open(VenueDiscoverySelectGroupDialogComponent).afterClosed().subscribe(next =>
			{
				if (next == null)
				{
					reject("Cancelled");
				}
				else
				{
					resolve(next as string);
				}
			});
		});
		return promise;
	}

	public async addFixtureToVenue(address: number, definition: FixtureDefinitionSkeleton, group: string): Promise<void>
	{
		let response = await this.venueService.getVenueById(this.venueID);
		let venue = response.data;
		let universe = venue.universes.find(x => x.universeID == this.universeID);
		let fixture = new Fixture();
		fixture.address = address;
		fixture.group = group;
		fixture.type = definition;
		fixture.options = {};
		universe.fixtures.push(fixture);
		try
		{
			await this.venueService.putVenue({ id: venue.id, venue: venue });
			this.snackbar.open("Successfully update " + venue.name, "Close", { duration: 3000 });
			await this.venueService.activateVenueById(venue.id);
		}
		catch (error)
		{
			this.snackbar.open(error, "Close", { duration: 3000 });
		}
	}

	public get selectedChannels(): DiscoveryDMXChannel[]
	{
		return this.dmxChannels.filter(x => x.selected);
	}

}

class DiscoveryDMXChannel extends DMXChannel
{
	public selected: boolean;
	public value: number;

	constructor()
	{
		super();
	}
}

class DMXChannelPage
{
	public channels: DiscoveryDMXChannel[];
	public label: string;

	constructor(channels: DiscoveryDMXChannel[], label: string)
	{
		this.channels = channels;
		this.label = label;
	}
}