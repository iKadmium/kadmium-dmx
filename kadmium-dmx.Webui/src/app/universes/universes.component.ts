import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FixtureDefinitionSkeleton, IVenueData, UniverseData } from 'api';
import { AnimationLibrary } from '../animation-library';
import { DeleteConfirmService } from '../services/delete-confirm.service';
import { EditorService } from '../services/editor.service';
import { UniverseEditorDialogComponent } from '../universe-editor-dialog/universe-editor-dialog.component';

@Component({
	selector: 'app-universes',
	templateUrl: './universes.component.html',
	styleUrls: ['./universes.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class UniversesComponent implements OnInit
{
	public venue: IVenueData;
	public fixtureCounts: UniverseFixtureCount[][];

	constructor(
		private editorService: EditorService<IVenueData>,
		private deleteConfirm: DeleteConfirmService,
		private dialogService: MatDialog)
	{ }

	ngOnInit()
	{
		this.venue = this.editorService.getActive();
		this.fixtureCounts = [];
		for (const i of Object.keys(this.venue.universes))
		{
			this.fixtureCounts[i] = this.getFixtureCounts(this.venue.universes[i]);
		}
	}

	public async removeUniverse(index: number): Promise<void>
	{
		const universe = this.venue.universes[index];
		const result = await this.deleteConfirm.confirm(universe.name);
		if (result)
		{
			this.venue.universes.splice(index, 1);
		}
	}

	public async editUniverse(index: number): Promise<void>
	{
		const universeData = this.venue.universes[index];
		const result = await this.dialogService.open(UniverseEditorDialogComponent, { data: universeData }).afterClosed().toPromise();
		if (result)
		{
			this.editorService.isDirty = true;
			this.venue.universes[index].name = result.name;
			this.venue.universes[index].universeID = result.universeID;
		}
	}

	public getFixtureCounts(universe: UniverseData): UniverseFixtureCount[]
	{
		const result: UniverseFixtureCount[] = [];
		for (const fixture of universe.fixtures)
		{
			const index = result.findIndex(x => x.type.manufacturer === fixture.type.manufacturer && x.type.model === fixture.type.model);
			if (index !== -1)
			{
				result[index].count++;
			}
			else
			{
				result.push({ type: fixture.type, count: 1 });
			}
		}
		return result;
	}

}

interface UniverseFixtureCount
{
	type: FixtureDefinitionSkeleton;
	count: number;
}