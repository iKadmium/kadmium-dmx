import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DMXChannel } from "api/models";
import { AnimationLibrary } from "app/animation-library";

@Component({
	selector: 'app-venue-discovery-unassigned',
	templateUrl: './venue-discovery-unassigned.component.html',
	styleUrls: ['./venue-discovery-unassigned.component.scss'],
	animations: [AnimationLibrary.animations()]
})
export class VenueDiscoveryUnassignedComponent implements OnInit
{
	@Input() start: number;
	@Input() length: number;
	@Output("valueChange") valueChange = new EventEmitter<ValueChangeEvent>();
	@Output("addFixtureClick") addFixtureClick = new EventEmitter<number>();
	@Output("addFixtureDefinitionClick") addFixtureDefinitionClick = new EventEmitter<AddFixtureDefinitionEvent>();

	public channels: SelectableChannel[] = [];

	constructor() { }

	ngOnInit()
	{
		let end = this.start + this.length;
		for (let i = this.start; i < end; i++)
		{
			this.channels.push({ address: i, selected: false, min: "0", max: "255", name: "" });
		}
	}

	public updateValue(address: number, value: number): void
	{
		this.valueChange.emit({ address: address, value: value });
	}

	public addFixture(address: number): void
	{
		this.addFixtureClick.emit(address);
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
		let promise = new Promise<void>((resolve, reject) =>
		{
			let event = new AddFixtureDefinitionEvent();
			event.channels = this.selectedChannels;
			event.resolve = resolve;
			event.reject = reject;
			this.addFixtureDefinitionClick.emit(event);
		});
		try
		{
			await promise;
			this.selectedChannels.forEach(channel => channel.selected = false);
		}
		catch (error)
		{

		}
	}

}

export interface ValueChangeEvent
{
	address: number;
	value: number;
}

interface SelectableChannel extends DMXChannel
{
	selected: boolean;
}

export class AddFixtureDefinitionEvent
{
	public channels: SelectableChannel[];
	public resolve: () => void;
	public reject: () => void;
}