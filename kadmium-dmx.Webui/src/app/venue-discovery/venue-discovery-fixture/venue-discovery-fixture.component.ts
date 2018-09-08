import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDMXChannelData, UniverseData } from "api/models";
import { DeleteConfirmService } from '../../services/delete-confirm.service';
import { EditorService } from '../../services/editor.service';
import { FixtureDataWithDefinition } from '../venue-discovery/venue-discovery.component';

@Component({
	selector: 'app-venue-discovery-fixture',
	templateUrl: './venue-discovery-fixture.component.html',
	styleUrls: ['./venue-discovery-fixture.component.scss']
})
export class VenueDiscoveryFixtureComponent implements OnInit
{
	@Input() fixture: FixtureDataWithDefinition;
	@Output() fixtureDeleted = new EventEmitter<void>();
	public channels: IDMXChannelData[];
	constructor(
		private editorService: EditorService<UniverseData>,
		private deleteConfirm: DeleteConfirmService
	) { }

	ngOnInit()
	{
		this.channels = this.fixture.definition.channels;
	}

	public async removeFixture(): Promise<void>
	{
		const name = `${this.fixture.fixture.type.manufacturer} ${this.fixture.fixture.type.model} on channel ${this.fixture.fixture.address}`;
		const result = await this.deleteConfirm.confirm(name);
		if (result)
		{
			const universe = this.editorService.getActive();
			const index = universe.fixtures.findIndex(x => x.address === this.fixture.fixture.address);
			universe.fixtures.splice(index, 1);
			this.fixtureDeleted.emit();
		}
	}

}
