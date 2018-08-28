import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FixtureDefinitionSkeleton, UniverseData, IVenueData } from 'api';
import { AnimationLibrary } from 'app/animation-library';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { EditorService } from '../editor.service';
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
		private dialogService: MatDialog)
	{ }

	ngOnInit()
	{
		this.venue = this.editorService.getActive();
		this.fixtureCounts = [];
		for (let i in this.venue.universes)
		{
			this.fixtureCounts[i] = this.getFixtureCounts(this.venue.universes[i]);
		}
	}

	public async removeUniverse(index: number): Promise<void>
	{
		let result = await this.dialogService.open(DeleteConfirmDialogComponent).afterClosed().toPromise();
		if (result)
		{
			this.venue.universes.splice(index, 1);
		}
	}

	public async editUniverse(index: number): Promise<void>
	{
		let universeData = this.venue.universes[index];
		let result = await this.dialogService.open(UniverseEditorDialogComponent, { data: universeData }).afterClosed().toPromise();
		if (result)
		{
			this.editorService.isDirty = true;
			this.venue.universes[index].name = result.name;
			this.venue.universes[index].universeID = result.universeID;
		}
	}

	public getFixtureCounts(universe: UniverseData): UniverseFixtureCount[]
	{
		let result: UniverseFixtureCount[] = [];
		for (let fixture of universe.fixtures)
		{
			let index = result.findIndex(x => x.type.manufacturer == fixture.type.manufacturer && x.type.model == fixture.type.model)
			if (index != -1)
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
	type: FixtureDefinitionSkeleton,
	count: number
}