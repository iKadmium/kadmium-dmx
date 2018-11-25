import { Component, OnInit, QueryList, ViewChildren, OnDestroy } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { APIClient } from 'api';
import { IFixtureDefinition, FixtureDefinitionSkeleton } from "api/models";
import { EditorService } from '../../services/editor.service';
import { Saveable } from '../../unsaved-changes';
import { FixtureType } from '../../enums/fixture-type.enum';
import { MessageService } from '../../services/message.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
	selector: 'app-fixture-definition-editor',
	templateUrl: './fixture-definition-editor.component.html',
	styleUrls: ['./fixture-definition-editor.component.css']
})
export class FixtureDefinitionEditorComponent implements OnInit, Saveable, OnDestroy
{
	private originalManufacturer: string | null;
	private originalModel: string | null;
	public allManufacturers: string[];

	public saving = false;
	public loading = false;

	@ViewChildren("movementPanels") movementPanels: QueryList<MatExpansionPanel>;
	@ViewChildren("colorWheelPanels") colorWheelPanels: QueryList<MatExpansionPanel>;

	private saveSubscription: Subscription;

	constructor(
		private route: ActivatedRoute,
		private apiClient: APIClient,
		private messageService: MessageService,
		private title: Title,
		private router: Router,
		private fixtureDefinitionService: EditorService<IFixtureDefinition>
	)
	{
		this.loading = true;
	}

	ngOnInit()
	{
		this.originalManufacturer = this.route.snapshot.params['manufacturer'];
		this.originalModel = this.route.snapshot.params['model'];
		this.title.setTitle("Fixture Definition Editor");
		const promises = [];
		try
		{
			if (!this.isNewItem())
			{
				promises.push(this.apiClient.getFixtureDefinition({ manufacturer: this.originalManufacturer, model: this.originalModel })
					.toPromise()
					.then(response =>
					{
						this.fixtureDefinitionService.setActive(response);
					}));
			}
			else
			{
				this.fixtureDefinitionService.setActive({
					fixtureType: FixtureType.LED,
					channels: [],
					colorWheel: [],
					movements: [],
					skeleton: {
						manufacturer: "",
						model: ""
					}
				});
			}

			promises.push(this.apiClient.getFixtureDefinitions()
				.toPromise()
				.then(response =>
				{
					this.allManufacturers = response
						.map((skeleton: FixtureDefinitionSkeleton) => skeleton.manufacturer)
						.filter((value: string, index: number, array: string[]) => array.indexOf(value) === index);
				}));
		}
		catch (reason)
		{
			this.messageService.error(reason);
		}
		Promise.all(promises).then(() =>
		{
			this.loading = false;
		});
		this.saveSubscription = this.fixtureDefinitionService.onSave.subscribe(next =>
		{
			this.save();
		});
	}

	ngOnDestroy(): void
	{
		this.saveSubscription.unsubscribe();
	}

	private isNewItem(): boolean
	{
		return this.originalManufacturer == null || this.originalManufacturer === "" || this.originalModel == null || this.originalModel === "";
	}

	public async save(): Promise<void>
	{
		this.saving = true;
		console.log(this.fixtureDefinitionService.getActive());
		try
		{
			if (this.isNewItem())
			{
				await this.apiClient.postFixtureDefinition({ value: this.fixtureDefinitionService.getActive() }).toPromise();
				this.fixtureDefinitionService.isDirty = false;
				this.messageService.info("Successfully added " +
					this.fixtureDefinitionService.getActive().skeleton.manufacturer + " " +
					this.fixtureDefinitionService.getActive().skeleton.model);
			}
			else
			{
				await this.apiClient.putFixtureDefinition({
					manufacturer: this.originalManufacturer,
					model: this.originalModel,
					value: this.fixtureDefinitionService.getActive()
				}).toPromise();
				this.fixtureDefinitionService.isDirty = false;
				this.messageService.info("Successfully edited " +
					this.fixtureDefinitionService.getActive().skeleton.manufacturer + " " +
					this.fixtureDefinitionService.getActive().skeleton.model);
			}

			this.router.navigate(["../.."], { relativeTo: this.route });
		}
		catch (reason)
		{
			this.messageService.error(reason);
		}
		finally
		{
			this.saving = false;
		}
	}

	public hasUnsavedChanges(): boolean
	{
		return this.fixtureDefinitionService.isDirty;
	}

}
