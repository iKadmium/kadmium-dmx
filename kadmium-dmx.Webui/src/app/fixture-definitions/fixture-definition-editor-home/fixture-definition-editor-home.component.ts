import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIClient, IFixtureDefinition } from 'api';
import { AnimationLibrary } from '../../animation-library';
import { FixtureType } from '../../enums/fixture-type.enum';
import { EditorService } from '../../services/editor.service';

@Component({
	selector: 'app-fixture-definition-editor-home',
	templateUrl: './fixture-definition-editor-home.component.html',
	styleUrls: ['./fixture-definition-editor-home.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class FixtureDefinitionEditorHomeComponent implements OnInit
{
	public form: FormGroup;
	public FixtureType = FixtureType;
	public manufacturers: string[];
	public fixtureTypes: any[];

	constructor(
		private formBuilder: FormBuilder,
		private fixtureDefinitionService: EditorService<IFixtureDefinition>,
		private apiClient: APIClient
	)
	{
		const model = this.fixtureDefinitionService.getActive();
		this.form = this.formBuilder.group({
			skeleton: this.formBuilder.group({
				manufacturer: [model.skeleton.manufacturer, Validators.required],
				model: [model.skeleton.model, Validators.required],
			}),
			fixtureType: [model.fixtureType, Validators.required]
		});
		this.fixtureTypes = Object.keys(FixtureType).filter(key => !isNaN(Number(FixtureType[key])));
	}

	ngOnInit()
	{
		this.apiClient.getFixtureDefinitions().toPromise().then(result =>
		{
			this.manufacturers = result
				.map(x => x.manufacturer)
				.filter((value, index, array) => (array.indexOf(value) === index));
		});
	}

	public async save(): Promise<void>
	{
		const definition = this.fixtureDefinitionService.getActive();
		Object.assign(definition, this.form.value);
		await this.fixtureDefinitionService.save();
	}
}
