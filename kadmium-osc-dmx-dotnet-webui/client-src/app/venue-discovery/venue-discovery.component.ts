import { Component, OnInit } from '@angular/core';
import { DMXChannel } from 'api/models/dmxchannel';
import { MatDialog } from '@angular/material';
import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from 'app/venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
import { FixtureDefinition } from 'api/models/fixture-definition';
import { FixtureDefinitionService } from 'api/services';

@Component({
	selector: 'app-venue-discovery',
	templateUrl: './venue-discovery.component.html',
	styleUrls: ['./venue-discovery.component.scss'],
	providers: [MatDialog, FixtureDefinitionService]
})
export class VenueDiscoveryComponent implements OnInit
{
	public dmxChannels: DiscoveryDMXChannel[]

	constructor(private dialog: MatDialog, private fixtureDefinitionService: FixtureDefinitionService)
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
		let dialogRef = this.dialog.open(VenueDiscoveryAddFixtureDefinitionDialogComponent, { data: [this.selectedChannels] });
		dialogRef.afterClosed().subscribe(async next =>
		{
			if (next != null)
			{
				let definition = next as FixtureDefinition;
				let id = await this.fixtureDefinitionService.postFixtureDefinitionById(definition);

			}
		});
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