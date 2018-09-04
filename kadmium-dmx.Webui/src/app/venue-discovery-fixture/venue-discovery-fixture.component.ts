import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FixtureData, IDMXChannelData, UniverseData } from "api/models";
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { EditorService } from '../services/editor.service';
import { FixtureDataWithDefinition } from '../venue-discovery/venue-discovery.component';

@Component({
	selector: 'app-venue-discovery-fixture',
	templateUrl: './venue-discovery-fixture.component.html',
	styleUrls: ['./venue-discovery-fixture.component.scss']
})
export class VenueDiscoveryFixtureComponent implements OnInit
{
	@Input() fixture: FixtureDataWithDefinition;
	public channels: IDMXChannelData[];
	constructor(
		private editorService: EditorService<UniverseData>,
		private dialog: MatDialog
	) { }

	ngOnInit()
	{
		this.channels = this.fixture.definition.channels;
	}

	public async removeFixture(fixture: FixtureData): Promise<void>
	{
		const name = `${fixture.type.manufacturer} ${fixture.type.model} on channel ${fixture.address}`;
		const result = await this.dialog.open(DeleteConfirmDialogComponent, { data: name }).afterClosed().toPromise();
		if (result)
		{
			const universe = this.editorService.getActive();
			const index = universe.fixtures.findIndex(x => x.address === fixture.address);
			universe.fixtures.splice(index, 1);
		}
	}

}
