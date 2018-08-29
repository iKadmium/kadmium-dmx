import { Component, OnInit } from '@angular/core';
import { IVenueData, UniverseData } from 'api';
import { AnimationLibrary } from 'app/animation-library';
import { EditorService } from '../editor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-venue-editor-home',
	templateUrl: './venue-editor-home.component.html',
	styleUrls: ['./venue-editor-home.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class VenueEditorHomeComponent implements OnInit
{
	public form: FormGroup;
	public venue: IVenueData;
	constructor(
		private editorService: EditorService<IVenueData>,
		formBuilder: FormBuilder
	) 
	{
		this.venue = this.editorService.getActive();
		this.form = formBuilder.group({
			name: [this.venue.name, Validators.required]
		});
	}

	ngOnInit()
	{
	}

	public addUniverse(): void
	{
		let maxNumber = 0;
		this.venue.universes.forEach(value => { if (value.universeID > maxNumber) { maxNumber = value.universeID } });
		let universeID = maxNumber + 1;
		let universe: UniverseData = {
			name: "New Universe",
			fixtures: [],
			universeID: universeID
		};
		this.venue.universes.push(universe);
	}

	public markDirty(): void
	{
		this.editorService.isDirty = true;
	}

	public save(): void
	{
		this.venue.name = this.form.value.name;
		this.editorService.save();
	}
}
