import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IDMXChannelData, IFixtureDefinition } from 'api';
import { AnimationLibrary } from '../animation-library';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { EditorService } from '../editor.service';
import { FixtureDefinitionEditorChannelEditorDialogComponent } from '../fixture-definition-editor-channel-editor-dialog/fixture-definition-editor-channel-editor-dialog.component';

@Component({
	selector: 'app-fixture-definition-editor-channels',
	templateUrl: './fixture-definition-editor-channels.component.html',
	styleUrls: ['./fixture-definition-editor-channels.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class FixtureDefinitionEditorChannelsComponent implements OnInit
{
	public channels: IDMXChannelData[];

	constructor(
		private fixtureDefinitionService: EditorService<IFixtureDefinition>,
		private matDialog: MatDialog
	)
	{
		this.channels = this.fixtureDefinitionService.getActive().channels;
	}

	ngOnInit()
	{

	}


	public async addChannel(): Promise<void>
	{
		let maxChannel = 0;
		this.channels.forEach((value: IDMXChannelData) => 
		{
			if (value.address > maxChannel) 
			{
				maxChannel = value.address;
			}
		});

		let channel: IDMXChannelData = {
			address: maxChannel + 1,
			name: '',
			min: 0,
			max: 255
		};

		let result = (await this.matDialog.open(FixtureDefinitionEditorChannelEditorDialogComponent, { data: channel }).afterClosed().toPromise()) as IDMXChannelData;
		if (result)
		{
			this.channels.push(result);
		}
	}

	public async removeChannel(index: number): Promise<void>
	{
		let channel = this.channels[index];
		let result = (await this.matDialog.open(DeleteConfirmDialogComponent, { data: channel.name }).afterClosed().toPromise()) as IDMXChannelData;
		if (result)
		{
			this.channels.splice(index, 1);
		}
	}

	public getOtherChannelNames(thisEntry: IDMXChannelData): string[]
	{
		return this.channels
			.filter(value => value != thisEntry)
			.map((value: IDMXChannelData) => value.name);
	}



	public async editChannel(index: number): Promise<void>
	{
		let channel = this.channels[index];
		let result = (await this.matDialog.open(FixtureDefinitionEditorChannelEditorDialogComponent, { data: channel }).afterClosed().toPromise()) as IDMXChannelData;
		if (result)
		{
			channel.min = result.min;
			channel.max = result.max;
			channel.name = result.name;
			channel.address = result.address;
		}
	}

}
