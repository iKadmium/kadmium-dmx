import { Component, OnInit, Inject } from '@angular/core';
import { FixtureDefinition } from 'api/models/fixture-definition';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DMXChannel } from 'api/models/dmxchannel';

@Component({
	selector: 'app-venue-discovery-add-fixture-definition-dialog',
	templateUrl: './venue-discovery-add-fixture-definition-dialog.component.html',
	styleUrls: ['./venue-discovery-add-fixture-definition-dialog.component.scss']
})
export class VenueDiscoveryAddFixtureDefinitionDialogComponent implements OnInit
{
	public definition: FixtureDefinition;

	constructor(public dialogRef: MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>, @Inject(MAT_DIALOG_DATA) channels: DMXChannel[])
	{
		this.definition = new FixtureDefinition();
		this.definition.channels = channels;
		this.definition.movements = [];
		this.definition.colorWheel = [];
	}

	ngOnInit()
	{

	}

}
