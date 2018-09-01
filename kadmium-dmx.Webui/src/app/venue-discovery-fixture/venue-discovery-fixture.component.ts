import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActiveFixture, ActiveAttribute, IDMXChannelData, FixtureData } from "api/models";
import { FixtureDataWithDefinition } from '../venue-discovery/venue-discovery.component';

@Component({
	selector: 'app-venue-discovery-fixture',
	templateUrl: './venue-discovery-fixture.component.html',
	styleUrls: ['./venue-discovery-fixture.component.scss']
})
export class VenueDiscoveryFixtureComponent implements OnInit
{
	@Input() fixture: FixtureDataWithDefinition;
	@Output("removeFixture") removeFixtureClick = new EventEmitter<FixtureData>();
	public channels: IDMXChannelData[];
	constructor() { }

	ngOnInit()
	{
		this.channels = this.fixture.definition.channels;
	}

	public removeFixture(): void
	{
		this.removeFixtureClick.emit(this.fixture.fixture);
	}

}
