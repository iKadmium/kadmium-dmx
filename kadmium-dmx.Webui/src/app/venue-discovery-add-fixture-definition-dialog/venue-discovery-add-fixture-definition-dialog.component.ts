import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDMXChannelData, IFixtureDefinition, MovementAxis, IMovementAxisData } from "api";
import { FixtureType } from '../enums/fixture-type.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-venue-discovery-add-fixture-definition-dialog',
	templateUrl: './venue-discovery-add-fixture-definition-dialog.component.html',
	styleUrls: ['./venue-discovery-add-fixture-definition-dialog.component.scss']
})
export class VenueDiscoveryAddFixtureDefinitionDialogComponent implements OnInit
{
	private static detectedAxis: string[] = ["Pan", "Tilt"];
	private static axisSuffixes: string[][] = [[""], ["Fine", "Coarse"]];

	public form: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>,
		private formBuilder: FormBuilder,
		@Inject(MAT_DIALOG_DATA) data: AddFixtureDefinitionData
	)
	{
		const firstChannel = data.channels[0].address;

		this.form = this.formBuilder.group({
			fixtureType: [FixtureType.LED],
			skeleton: this.formBuilder.group({
				manufacturer: [`Venue - ${data.venue}`, Validators.required],
				model: ['', Validators.required]
			}),
			movements: this.formBuilder.array(
				this.getMovementAxis(data.channels).map(axis => this.formBuilder.group({
					min: [axis.min, Validators.required],
					max: [axis.max, Validators.required],
					name: [axis.name, Validators.required]
				})
				)
			),
			colorWheel: this.formBuilder.array([]),
			channels: this.formBuilder.array(
				data.channels.map(channel => this.formBuilder.group({
					address: [channel.address - firstChannel + 1, [Validators.required, Validators.min(1), Validators.max(512)]],
					min: [channel.min, [Validators.required, Validators.min(0), Validators.max(255)]],
					max: [channel.max, [Validators.required, Validators.min(0), Validators.max(255)]],
					name: [channel.name, [Validators.required]]
				}))
			)
		});
	}

	private getMovementAxis(channels: IDMXChannelData[]): IMovementAxisData[]
	{
		const movements: IMovementAxisData[] = [];

		for (const axisName of this.getAxisNames())
		{
			for (const variant of axisName.variants)
			{
				if (variant.names
					.every(name => channels
						.map(channel => channel.name)
						.indexOf(name) !== -1))
				{
					const axis: MovementAxis = {
						min: -90,
						max: 90,
						name: axisName.axisName
					};
					movements.push(axis);
				}
			}
		}

		return movements;
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

	public save(): void
	{
		this.dialogRef.close(this.form.value);
	}

	public cancel(): void
	{
		this.dialogRef.close();
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