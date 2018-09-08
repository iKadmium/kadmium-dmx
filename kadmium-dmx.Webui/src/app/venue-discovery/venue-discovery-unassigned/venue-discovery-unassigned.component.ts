import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { APIClient, FixtureData, FixtureDefinitionSkeleton, IDMXChannelData, IFixtureDefinition, UniverseData } from 'api';
import { EditorService } from '../../services/editor.service';
import { MessageService } from '../../services/message.service';
import { AnimationLibrary } from "../../animation-library";
// tslint:disable-next-line:max-line-length
import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from '../venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
// tslint:disable-next-line:max-line-length
import { VenueDiscoveryAddFixtureToVenueDialogComponent } from '../venue-discovery-add-fixture-to-venue-dialog/venue-discovery-add-fixture-to-venue-dialog.component';
// tslint:disable-next-line:max-line-length
import { VenueDiscoverySelectGroupDialogComponent } from '../venue-discovery-select-group-dialog/venue-discovery-select-group-dialog.component';
import { FixtureDataWithDefinition } from '../venue-discovery/venue-discovery.component';

@Component({
	selector: 'app-venue-discovery-unassigned',
	templateUrl: './venue-discovery-unassigned.component.html',
	styleUrls: ['./venue-discovery-unassigned.component.scss'],
	animations: [AnimationLibrary.animations()]
})
export class VenueDiscoveryUnassignedComponent implements OnInit
{
	@Input() start: number;
	@Input() venueName: string;
	@Input() length: number;
	@Output() valueChange = new EventEmitter<ValueChangeEvent>();
	@Output() fixtureAdded = new EventEmitter<void>();

	public channels: SelectableChannel[] = [];

	constructor(
		private dialog: MatDialog,
		private apiClient: APIClient,
		private messageService: MessageService,
		private editorService: EditorService<UniverseData>
	) { }

	ngOnInit()
	{
		for (let i = 0; i < this.length; i++)
		{
			this.channels.push({ address: i + this.start, selected: false, min: 0, max: 255, name: "" });
		}
	}

	public updateValue(address: number, value: number): void
	{
		this.valueChange.emit({ address: address, value: value });
	}

	public selectChannel(channel: SelectableChannel, selected: boolean): void
	{
		channel.selected = selected;
	}

	public get selectedChannels(): SelectableChannel[]
	{
		return this.channels.filter(x => x.selected);
	}

	public async addFixtureDefinition(): Promise<void>
	{
		const channels = JSON.parse(JSON.stringify(this.selectedChannels)) as IDMXChannelData[];
		const result = await this.dialog
			.open(VenueDiscoveryAddFixtureDefinitionDialogComponent, { data: { channels: channels, venue: this.venueName } })
			.afterClosed()
			.toPromise();
		if (result)
		{
			const definition = result as IFixtureDefinition;
			try
			{
				await this.apiClient.postFixtureDefinition({ value: definition }).toPromise();
				const address = channels.map(x => x.address).sort()[0];
				this.messageService.info(`${definition.skeleton.manufacturer} ${definition.skeleton.model} successfully added`);
				const group = await this.getGroup();
				this.addFixtureToVenue(address, definition.skeleton, group);
				this.selectedChannels.forEach(channel => channel.selected = false);
			}
			catch (error)
			{
				this.messageService.error(error);
			}
		}
	}

	public async addFixture(address: number): Promise<void>
	{
		const result = await this.dialog
			.open(VenueDiscoveryAddFixtureToVenueDialogComponent)
			.afterClosed()
			.toPromise();
		if (result != null)
		{
			this.addFixtureToVenue(address, result.fixture, result.group);
		}
	}

	private async getGroup(): Promise<string>
	{
		const result = await this.dialog
			.open(VenueDiscoverySelectGroupDialogComponent)
			.afterClosed()
			.toPromise();
		if (result != null)
		{
			return result;
		}
	}

	private addFixtureToVenue(address: number, definition: FixtureDefinitionSkeleton, group: string): void
	{
		const fixture: FixtureData = {
			address: address,
			group: group,
			type: definition,
			options: {
				maxBrightness: 1,
				axisOptions: {}
			}
		};
		this.editorService.getActive().fixtures.push(fixture);
		this.fixtureAdded.emit();
		this.editorService.isDirty = true;
	}
}

export interface ValueChangeEvent
{
	address: number;
	value: number;
}

interface SelectableChannel extends IDMXChannelData
{
	selected: boolean;
}