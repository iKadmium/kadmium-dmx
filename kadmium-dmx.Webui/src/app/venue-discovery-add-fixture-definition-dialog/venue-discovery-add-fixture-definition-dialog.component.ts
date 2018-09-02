import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDMXChannelData, IFixtureDefinition, MovementAxis } from "api";
import { FixtureType } from 'app/enums/fixture-type.enum';

@Component({
	selector: 'app-venue-discovery-add-fixture-definition-dialog',
	templateUrl: './venue-discovery-add-fixture-definition-dialog.component.html',
	styleUrls: ['./venue-discovery-add-fixture-definition-dialog.component.scss']
})
export class VenueDiscoveryAddFixtureDefinitionDialogComponent implements OnInit
{
	private static detectedAxis: string[] = ["Pan", "Tilt"];
	private static axisSuffixes: string[][] = [[""], ["Fine", "Coarse"]];

	public definition: IFixtureDefinition;

	constructor(
		public dialogRef: MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>,
		@Inject(MAT_DIALOG_DATA) data: AddFixtureDefinitionData
	)
	{
		this.definition = {
			fixtureType: FixtureType.LED,
			channels: data.channels,
			movements: [],
			colorWheel: [],
			skeleton: {
				manufacturer: `Venue - ${data.venue}`,
				model: ''
			}
		};

		this.definition.channels.sort((a, b) =>
		{
			return a.address - b.address;
		});

		const firstChannel = this.definition.channels[0].address;
		this.definition.channels.forEach(x => x.address -= firstChannel - 1);

		// create movement axis
		for (const axisName of this.getAxisNames())
		{
			for (const variant of axisName.variants)
			{
				if (variant.names
					.every(name => this.definition.channels
						.map(channel => channel.name)
						.indexOf(name) !== -1))
				{
					const axis: MovementAxis = {
						min: -90,
						max: 90,
						name: axisName.axisName
					};
					this.definition.movements.push(axis);
				}
			}
		}
	}

	private getAxisNames(): ChannelAxisNameCollection[]
	{
		const collections: ChannelAxisNameCollection[] = [];
		for (const axis of VenueDiscoveryAddFixtureDefinitionDialogComponent.detectedAxis)
		{
			const collection = new ChannelAxisNameCollection();
			collection.axisName = axis;
			for (const suffixCollection of VenueDiscoveryAddFixtureDefinitionDialogComponent.axisSuffixes)
			{
				const variant = new ChannelCollectionVariant();
				for (const suffix of suffixCollection)
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

export class AddFixtureDefinitionData
{
	public channels: IDMXChannelData[];
	public venue: string;
}