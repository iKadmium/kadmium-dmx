import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { ActivatedRoute } from "@angular/router";
import { ActiveFixture, APIClient, IDMXChannelData, IFixtureDefinition } from 'api';
import { ActiveUniverse, ActiveVenue, FixtureData, FixtureDefinitionSkeleton, IVenueData, UniverseData } from "api/models";
import { MessageService } from 'app/message.service';
import { Subscription } from 'rxjs';
import { AnimationLibrary } from "../animation-library";
import { DeleteConfirmDialogComponent } from "../delete-confirm-dialog/delete-confirm-dialog.component";
import { UniverseStreamService } from "../universe-stream.service";
import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from '../venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
import { VenueDiscoveryAddFixtureToVenueDialogComponent } from "../venue-discovery-add-fixture-to-venue-dialog/venue-discovery-add-fixture-to-venue-dialog.component";
import { VenueDiscoverySelectGroupDialogComponent } from "../venue-discovery-select-group-dialog/venue-discovery-select-group-dialog.component";
import { AddFixtureDefinitionEvent } from "../venue-discovery-unassigned/venue-discovery-unassigned.component";

@Component({
	selector: 'app-venue-discovery',
	templateUrl: './venue-discovery.component.html',
	styleUrls: ['./venue-discovery.component.scss'],
	animations: [AnimationLibrary.animations()]
})
export class VenueDiscoveryComponent implements OnInit, OnDestroy
{
	public dmxChannels: DiscoveryDMXChannel[]

	public loaded: boolean = false;
	public saving: boolean = false;

	public displayFrom: number = 1;
	public displayTo: number = 49;
	public pageSize: number = 48;
	public filteredChannels: DiscoveryDMXChannel[];

	public universeID: number = 1;

	public venue: IVenueData;
	public universe: UniverseData;

	public fixtureChannelMap: Map<number, FixtureDataWithDefinition>;

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
		this.filteredChannels = [];
		this.fixtureChannelMap = new Map<number, FixtureDataWithDefinition>();
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
		this.apiClient.getActiveVenue().toPromise().then(async venue =>
		{
			this.venue = venue;
			this.universe = this.venue.universes.find(x => x.universeID == this.universeID);

			this.fixtureChannelMap.clear();
			let fixtureDefinitions = await this.getDefinitions(this.universe.fixtures.map(x => x.type));
			for (let fixture of this.universe.fixtures)
			{
				let definition = fixtureDefinitions.find(x => x.skeleton.manufacturer == fixture.type.manufacturer && x.skeleton.model == fixture.type.model);
				for (let channel of definition.channels)
				{
					let address = channel.address + fixture.address - 1;
					let fixtureWithDefinition: FixtureDataWithDefinition = {
						definition: definition,
						fixture: fixture
					};
					this.fixtureChannelMap.set(address, fixtureWithDefinition);
				}
			}
			this.loaded = true;
		});
	}

	private async getDefinitions(skeletons: FixtureDefinitionSkeleton[]): Promise<IFixtureDefinition[]>
	{
		let promises = skeletons
			.filter((value, index, array) => array.indexOf(value) == index)
			.map(x => this.apiClient.getFixtureDefinition({ manufacturer: x.manufacturer, model: x.model }).toPromise());
		let definitions = await Promise.all(promises);
		return definitions;
	}

	public updateValue(address: number, value: number): void
	{
		this.universeStreamService.set(this.universeID, address, value);
	}

	public isFirstFixtureChannel(channel: number): boolean
	{
		let fixture = this.fixtureChannelMap.get(channel);
		if (fixture == null)
		{
			return false;
		}
		return fixture.fixture.address == channel;
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

	public async addFixtureDefinition(event: AddFixtureDefinitionEvent): Promise<void>
	{
		let channels = JSON.parse(JSON.stringify(event.channels)) as IDMXChannelData[];
		let dialogRef = this.dialog.open(VenueDiscoveryAddFixtureDefinitionDialogComponent, { data: { channels: channels, venue: this.venue.name } });
		let result = await dialogRef.afterClosed().toPromise();
		if (result)
		{
			let definition = result as IFixtureDefinition;
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
	}

	public addFixture(address: number): void
	{
		let dialogRef = this.dialog.open(VenueDiscoveryAddFixtureToVenueDialogComponent);
		dialogRef.afterClosed().subscribe(next =>
		{
			if (next != null)
			{
				this.addFixtureToVenue(address, next.fixture, next.group);
			}
		});
	}

	private async getGroup(): Promise<string>
	{
		let result = await this.dialog.open(VenueDiscoverySelectGroupDialogComponent).afterClosed().toPromise();
		if (result)
		{
			return result;
		}
	}

	private async addFixtureToVenue(address: number, definition: FixtureDefinitionSkeleton, group: string): Promise<void>
	{
		let fixture: FixtureData = {
			address: address,
			group: group,
			type: definition,
			options: {
				maxBrightness: 1,
				axisOptions: {}
			}
		};
		this.universe.fixtures.push(fixture);
		try
		{
			this.saving = true;
			await this.apiClient.putVenue({ originalName: this.venue.name, value: this.venue }).toPromise();
			this.saving = false;
			this.messageService.info("Successfully updated " + this.venue.name);
			this.loaded = false;
			await this.apiClient.activateVenue({ name: this.venue.name }).toPromise();
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

		this.filteredChannels = this.dmxChannels.slice(this.displayFrom - 1, this.displayTo);

		await promise;
	}

	public async removeFixture(fixture: FixtureData): Promise<void>
	{
		let name = `${fixture.type.manufacturer} ${fixture.type.model} on channel ${fixture.address}`;
		let result = await this.dialog.open(DeleteConfirmDialogComponent, { data: name }).afterClosed().toPromise();
		if (result)
		{
			await this.removeFixtureFromVenue(fixture);
		}
	}

	private async removeFixtureFromVenue(fixture: FixtureData): Promise<void>
	{
		let index = this.universe.fixtures.findIndex(x => x.address == fixture.address);
		this.universe.fixtures.splice(index, 1);
		try
		{
			await this.apiClient.putVenue({ originalName: this.venue.name, value: this.venue }).toPromise();
			this.messageService.info("Successfully update " + this.venue.name);
			this.loaded = false;
			await this.apiClient.activateVenue({ name: this.venue.name }).toPromise();
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

export interface FixtureDataWithDefinition
{
	fixture: FixtureData,
	definition: IFixtureDefinition
}