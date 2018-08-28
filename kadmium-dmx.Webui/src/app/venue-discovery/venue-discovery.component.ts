import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from '../venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
import { AnimationLibrary } from "../animation-library";
import { UniverseStreamService } from "../universe-stream.service";
import { ActivatedRoute } from "@angular/router";
import { FixtureData, FixtureDefinitionSkeleton, ActiveVenue, ActiveUniverse } from "api/models";
import { VenueDiscoverySelectGroupDialogComponent } from "../venue-discovery-select-group-dialog/venue-discovery-select-group-dialog.component";
import { VenueDiscoveryAddFixtureToVenueDialogComponent } from "../venue-discovery-add-fixture-to-venue-dialog/venue-discovery-add-fixture-to-venue-dialog.component";
import { AddFixtureDefinitionEvent } from "../venue-discovery-unassigned/venue-discovery-unassigned.component";
import { DeleteConfirmDialogComponent } from "../delete-confirm-dialog/delete-confirm-dialog.component";
import { APIClient, ActiveAttribute, ActiveFixture, IDMXChannelData, IFixtureDefinition } from 'api';
import { Subscription } from 'rxjs';
import { MessageService } from 'app/message.service';

@Component({
	selector: 'app-venue-discovery',
	templateUrl: './venue-discovery.component.html',
	styleUrls: ['./venue-discovery.component.scss'],
	providers: [MatDialog, APIClient, UniverseStreamService],
	animations: [AnimationLibrary.animations()]
})
export class VenueDiscoveryComponent implements OnInit, OnDestroy
{
	public dmxChannels: DiscoveryDMXChannel[]

	public displayFrom: number = 1;
	public displayTo: number = 49;

	public universeID: number = 1;
	public venueName: string;

	public venue: ActiveVenue;
	public universe: ActiveUniverse;

	public dmxChannelMap: Map<number, ActiveAttribute[]>;
	public fixtureChannelMap: Map<number, ActiveFixture>;

	public loaded: boolean = false;
	public saving: boolean = false;

	public pageSize: number = 48;

	private subscription: Subscription;

	constructor(
		private dialog: MatDialog,
		private apiClient: APIClient,
		private universeStreamService: UniverseStreamService,
		public messageService: MessageService,
		private route: ActivatedRoute
	)
	{
		this.dmxChannels = [];
		this.dmxChannelMap = new Map<number, ActiveAttribute[]>();
		this.fixtureChannelMap = new Map<number, ActiveFixture>();
	}

	ngOnInit()
	{
		for (let i = 0; i < 512; i++)
		{
			let channel: DiscoveryDMXChannel = {
				name: "",
				address: i,
				min: 0,
				max: 255,
				value: 0
			};
			this.dmxChannels.push(channel);
		}

		this.universeID = parseInt(this.route.snapshot.params["universeID"]);

		this.subscription = this.universeStreamService.open(this.universeID).subscribe(() => { });
		this.pageEvent({ length: 512, pageIndex: 0, pageSize: 48 })
		this.refreshVenue();
	}

	ngOnDestroy()
	{
		this.subscription.unsubscribe();
	}

	public refreshVenue(): void
	{
		this.apiClient.getActiveVenue().toPromise().then(venue =>
		{
			this.venueName = venue.name;
			this.venue = venue;
			this.universe = this.venue.universes.find(x => x.universeID == this.universeID);

			this.dmxChannelMap.clear();
			this.fixtureChannelMap.clear();
			for (let fixture of this.universe.fixtures)
			{
				for (let attribute of fixture.attributes)
				{
					if (attribute.dmx)
					{
						let address = attribute.dmxAddress + fixture.address - 1
						let attributeArray = this.dmxChannelMap.get(address);
						if (attributeArray == null)
						{
							attributeArray = [];
							this.dmxChannelMap.set(address, attributeArray);
						}
						attributeArray.push(attribute);

						this.fixtureChannelMap.set(address, fixture);
					}
				}
			}
			this.loaded = true;
		});
	}

	public updateValue(address: number, value: number): void
	{
		this.universeStreamService.set(this.universeID, address, value);
	}

	public get filteredChannels(): DiscoveryDMXChannel[]
	{
		return this.dmxChannels.slice(this.displayFrom - 1, this.displayTo);
	}

	public isFirstFixtureChannel(channel: number): boolean
	{
		let fixture = this.fixtureChannelMap.get(channel);
		if (fixture == null)
		{
			return false;
		}
		return fixture.address == channel;
	}

	public isFirstUnassignedChannel(channel: number): boolean
	{

		if (channel > this.displayFrom)
		{
			return this.fixtureChannelMap.get(channel) == null && this.fixtureChannelMap.get(channel - 1) != null;
		}
		else
		{
			return this.fixtureChannelMap.get(channel) == null;
		}
	}

	public getUnassignedBlockSize(channel: number): number
	{
		let max = 0;
		for (let i = channel; i < this.displayTo; i++)
		{
			if (this.fixtureChannelMap.get(i) == null)
			{
				max++;
			}
			else
			{
				break;
			}
		}
		return max;
	}

	public addFixtureDefinition(event: AddFixtureDefinitionEvent): void
	{
		let channels = JSON.parse(JSON.stringify(event.channels)) as IDMXChannelData[];
		let dialogRef = this.dialog.open(VenueDiscoveryAddFixtureDefinitionDialogComponent, { data: { channels: channels, venue: this.venue.name } });
		dialogRef.afterClosed().subscribe(async next =>
		{
			if (next != null)
			{
				let definition = next as IFixtureDefinition;
				try
				{
					this.saving = true;
					await this.apiClient.postFixtureDefinition({ value: definition }).toPromise();
					this.saving = false;
					let address = event.channels.map(x => x.address).sort()[0];
					this.messageService.info(`${definition.skeleton.manufacturer} ${definition.skeleton.model} successfully added`);
					event.resolve();
					let group = await this.getGroup();
					await this.addFixtureToVenue(address, definition.skeleton, group);
				}
				catch (error)
				{
					this.saving = false;
					event.reject();
					this.messageService.error(error);
				}
			}
			else
			{
				event.reject();
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
		let venue = (await this.apiClient.getVenue({ name: this.venueName }).toPromise());
		let universe = venue.universes.find(x => x.universeID == this.universeID);
		let fixture: FixtureData = {
			address: address,
			group: group,
			type: definition,
			options: {
				maxBrightness: 1,
				axisOptions: {}
			}
		};
		universe.fixtures.push(fixture);
		try
		{
			this.saving = true;
			await this.apiClient.putVenue({ originalName: this.venueName, value: venue }).toPromise();
			this.saving = false;
			this.messageService.info("Successfully update " + venue.name);
			this.loaded = false;
			await this.apiClient.activateVenue({ name: venue.name }).toPromise();
			await this.refreshVenue();
		}
		catch (error)
		{
			this.saving = false;
			this.messageService.error(error);
		}
	}

	public async pageEvent(event: PageEvent): Promise<void>
	{
		let promise = new Promise<void>(() =>
		{
			this.displayFrom = event.pageSize * event.pageIndex + 1;
			let displayTo = this.displayFrom + event.pageSize;
			this.displayTo = displayTo > 513 ? 513 : displayTo;
		});

		await promise;
	}

	public removeFixture(fixture: ActiveFixture): void
	{
		let name = `${fixture.manufacturer} ${fixture.model} on channel ${fixture.address}`;
		let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, { data: name });
		dialogRef.afterClosed().subscribe(async next =>
		{
			if (next != null)
			{
				await this.removeFixtureFromVenue(fixture);
			}
		});
	}

	public async removeFixtureFromVenue(fixture: ActiveFixture): Promise<void>
	{
		let venue = (await this.apiClient.getVenue({ name: this.venueName }).toPromise());
		let universe = venue.universes.find(x => x.universeID == this.universeID);
		let index = universe.fixtures.findIndex(x => x.address == fixture.address);
		universe.fixtures.splice(index, 1);
		try
		{
			await this.apiClient.putVenue({ originalName: this.venueName, value: venue }).toPromise();
			this.messageService.info("Successfully update " + venue.name);
			this.loaded = false;
			await this.apiClient.activateVenue({ name: venue.name }).toPromise();
			await this.refreshVenue();
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

}

interface DiscoveryDMXChannel extends IDMXChannelData
{
	value: number;
}