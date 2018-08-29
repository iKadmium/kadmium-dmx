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
	public definition: IFixtureDefinition;
	private static detectedAxis: string[] = ["Pan", "Tilt"];
	private static axisSuffixes: string[][] = [[""], ["Fine", "Coarse"]]

	constructor(public dialogRef: MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>, @Inject(MAT_DIALOG_DATA) data: AddFixtureDefinitionData)
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
					let axis: MovementAxis = {
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

export class AddFixtureDefinitionData
{
	public channels: IDMXChannelData[]
	public venue: string;
}