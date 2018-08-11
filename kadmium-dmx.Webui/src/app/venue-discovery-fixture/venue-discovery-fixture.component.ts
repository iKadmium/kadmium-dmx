import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActiveFixture, ActiveAttribute } from "api/models";

@Component({
	selector: 'app-venue-discovery-fixture',
	templateUrl: './venue-discovery-fixture.component.html',
	styleUrls: ['./venue-discovery-fixture.component.scss']
})
export class VenueDiscoveryFixtureComponent implements OnInit
{
	@Input() fixture: ActiveFixture;
	@Output("removeFixture") removeFixtureClick = new EventEmitter<ActiveFixture>();
	public channels: ActiveAttribute[];
	constructor() { }

	ngOnInit()
	{
		this.channels = this.fixture.attributes.filter(x => x.dmx);
	}

	public removeFixture(): void
	{
		this.removeFixtureClick.emit(this.fixture);
	}

}
