import { Component, OnInit, Inject } from '@angular/core';
import { FixtureDefinition } from 'api/models/fixture-definition';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DMXChannel } from 'api/models/dmxchannel';
import { MovementAxis } from "api/models";

@Component({
	selector: 'app-venue-discovery-add-fixture-definition-dialog',
	templateUrl: './venue-discovery-add-fixture-definition-dialog.component.html',
	styleUrls: ['./venue-discovery-add-fixture-definition-dialog.component.scss']
})
export class VenueDiscoveryAddFixtureDefinitionDialogComponent implements OnInit
{
	public definition: FixtureDefinition;
	private static detectedAxis: string[] = ["Pan", "Tilt"];
	private static axisSuffixes: string[][] = [[""], ["Fine", "Coarse"]]

	constructor(public dialogRef: MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>, @Inject(MAT_DIALOG_DATA) data: AddFixtureDefinitionData)
	{
		this.definition = new FixtureDefinition();
		this.definition.channels = data.channels;
		this.definition.movements = [];
		this.definition.colorWheel = [];
		this.definition.lux = 0;
		this.definition.beamAngle = 0;
		this.definition.manufacturer = `Venue - ${data.venue}`;

		this.definition.channels.sort((a, b) => 
		{
			return a.address - b.address;
		});

		let firstChannel = this.definition.channels[0].address;
		this.definition.channels.forEach(x => x.address -= firstChannel - 1);

		//create movement axis
		for (let axisName of this.getAxisNames())
		{
			for (let variant of axisName.variants)
			{
				if (variant.names
					.every(name => this.definition.channels
						.map(channel => channel.name)
						.indexOf(name) != -1))
				{
					let axis = new MovementAxis();
					axis.min = -90;
					axis.max = 90;
					axis.name = axisName.axisName;
					this.definition.movements.push(axis);
				}
			}
		}
	}

	private getAxisNames(): ChannelAxisNameCollection[]
	{
		let collections: ChannelAxisNameCollection[] = [];
		for (let axis of VenueDiscoveryAddFixtureDefinitionDialogComponent.detectedAxis)
		{
			let collection = new ChannelAxisNameCollection();
			collection.axisName = axis;
			for (let suffixCollection of VenueDiscoveryAddFixtureDefinitionDialogComponent.axisSuffixes)
			{
				let variant = new ChannelCollectionVariant();
				for (let suffix of suffixCollection)
				{
					variant.names.push(axis + suffix);
				}
				collection.variants.push(variant);
			}
			collections.push(collection);
		}
		return collections;
	}

	ngOnInit()
	{

	}
}

class ChannelAxisNameCollection
{
	public axisName: string;
	public variants: ChannelCollectionVariant[];

	constructor()
	{
		this.variants = [];
	}
}

class ChannelCollectionVariant
{
	public names: string[];
	constructor()
	{
		this.names = [];
	}
}

class AddFixtureDefinitionData
{
	public channels: DMXChannel[]
	public venue: string;
}