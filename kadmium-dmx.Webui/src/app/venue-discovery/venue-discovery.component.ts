import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute } from "@angular/router";
import { APIClient, IDMXChannelData, IFixtureDefinition } from 'api';
import { FixtureData, FixtureDefinitionSkeleton, IVenueData, UniverseData } from "api/models";
import { MessageService } from 'app/services/message.service';
import { UniverseStreamService } from "app/services/universe-stream.service";
import { Subscription } from 'rxjs';
import { AnimationLibrary } from "../animation-library";
import { EditorService } from '../services/editor.service';

@Component({
	selector: 'app-venue-discovery',
	templateUrl: './venue-discovery.component.html',
	styleUrls: ['./venue-discovery.component.scss'],
	animations: [AnimationLibrary.animations()]
})
export class VenueDiscoveryComponent implements OnInit, OnDestroy
{
	public dmxChannels: DiscoveryDMXChannel[];

	public loaded = false;
	public saving = false;

	public displayFrom = 1;
	public pageSize = 48;
	public displayTo = this.displayFrom + this.pageSize;
	public filteredChannels: DiscoveryDMXChannel[];

	public universeID = 1;

	public venue: IVenueData;
	public universe: UniverseData;

	public fixtureChannelMap: Map<number, FixtureDataWithDefinition>;

	private subscription: Subscription;

	constructor(
		private apiClient: APIClient,
		private universeStreamService: UniverseStreamService,
		public messageService: MessageService,
		private editorService: EditorService<UniverseData>,
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
			const channel: DiscoveryDMXChannel = {
				name: "",
				address: i,
				min: 0,
				max: 255,
				value: 0
			};
			this.dmxChannels.push(channel);
		}

		this.universeID = parseInt(this.route.snapshot.params["universeID"], 10);

		this.subscription = this.universeStreamService.open(this.universeID).subscribe(() => { });
		this.pageEvent({ length: 512, pageIndex: 0, pageSize: 48 });
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
			this.universe = this.venue.universes.find(x => x.universeID === this.universeID);
			this.editorService.setActive(this.universe);

			this.fixtureChannelMap.clear();
			const fixtureDefinitions = await this.getDefinitions(this.universe.fixtures.map(x => x.type));
			for (const fixture of this.universe.fixtures)
			{
				const definition = fixtureDefinitions.find(x => x.skeleton.manufacturer === fixture.type.manufacturer &&
					x.skeleton.model === fixture.type.model);
				for (const channel of definition.channels)
				{
					const address = channel.address + fixture.address - 1;
					const fixtureWithDefinition: FixtureDataWithDefinition = {
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
		const promises = skeletons
			.filter((value, index, array) => array.indexOf(value) === index)
			.map(x => this.apiClient.getFixtureDefinition({ manufacturer: x.manufacturer, model: x.model }).toPromise());
		const definitions = await Promise.all(promises);
		return definitions;
	}

	public updateValue(address: number, value: number): void
	{
		this.universeStreamService.set(this.universeID, address, value);
	}

	public isFirstFixtureChannel(channel: number): boolean
	{
		const fixture = this.fixtureChannelMap.get(channel);
		if (fixture == null)
		{
			return false;
		}
		return fixture.fixture.address === channel;
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

	public async save(): Promise<void>
	{
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
		const promise = new Promise<void>(() =>
		{
			this.displayFrom = event.pageSize * event.pageIndex + 1;
			const displayTo = this.displayFrom + event.pageSize;
			this.displayTo = displayTo > 513 ? 513 : displayTo;
		});

		this.filteredChannels = this.dmxChannels.slice(this.displayFrom - 1, this.displayTo);

		await promise;
	}
}

interface DiscoveryDMXChannel extends IDMXChannelData
{
	value: number;
}

export interface FixtureDataWithDefinition
{
	fixture: FixtureData;
	definition: IFixtureDefinition;
}