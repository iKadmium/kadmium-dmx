import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UniverseData } from "api/models";
import { Title } from "@angular/platform-browser";
import { AnimationLibrary } from "../animation-library";
import { APIClient, IGroupData, IVenueData } from 'api';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs';
import { Saveable } from '../unsaved-changes';
import { EditorService } from '../services/editor.service';

@Component({
	selector: 'app-venue-editor',
	templateUrl: './venue-editor.component.html',
	styleUrls: ['./venue-editor.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class VenueEditorComponent implements Saveable, OnInit
{
	private venueName: string | null;
	public loading: boolean;
	public saving: boolean;
	public groups: IGroupData[];

	public venue: IVenueData;

	public activeUniverse: UniverseData;

	public subscription: Subscription;

	constructor(
		private route: ActivatedRoute,
		private apiClient: APIClient,
		private messageService: MessageService,
		private editorService: EditorService<IVenueData>,
		private router: Router,
		private title: Title)
	{
		this.saving = false;
		this.loading = true;
	}

	ngOnInit(): void
	{
		this.venueName = this.route.snapshot.params['id'];
		this.title.setTitle("Venue Editor");
		this.apiClient.getGroups()
			.toPromise()
			.then(response =>
			{
				this.groups = response;

				if (this.isNewItem())
				{
					this.venue = {
						name: "",
						universes: [{
							universeID: 1,
							name: "New Universe",
							fixtures: []
						}]
					};
					this.editorService.setActive(this.venue);
					this.loading = false;
				}
				else
				{
					this.apiClient.getVenue({ name: this.venueName })
						.toPromise()
						.then(venueResponse =>
						{
							this.venue = venueResponse;
							this.editorService.setActive(this.venue);
							this.loading = false;
						}).catch(error => this.messageService.error(error));
				}
			});

		this.subscription = this.editorService.onSave.subscribe(async () =>
		{
			await this.save();
		});
	}

	public async save(): Promise<void>
	{
		this.saving = true;
		try
		{
			if (this.isNewItem())
			{
				await this.apiClient.postVenue({ value: this.venue }).toPromise();
				this.editorService.isDirty = false;
				this.messageService.info("Successfully added " + this.venue.name);
			}
			else
			{
				await this.apiClient.putVenue({ originalName: this.venueName, value: this.venue }).toPromise();
				this.editorService.isDirty = false;
				this.messageService.info("Successfully edited " + this.venue.name);
			}
			this.router.navigate(["../", { relativeTo: this.route }]);
		}
		catch (error)
		{
			this.messageService.error(error);
		}
		finally
		{
			this.saving = false;
		}
	}

	private isNewItem(): boolean
	{
		return this.venueName == null;
	}

	public hasUnsavedChanges(): boolean
	{
		return this.editorService.isDirty;
	}

}
