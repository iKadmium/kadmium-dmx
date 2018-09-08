import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { APIClient, IVenueData } from 'api';
import { UniverseData } from "api/models";
import { MessageService } from '../../services/message.service';
import { AnimationLibrary } from "../../animation-library";
import { Status } from "../../status";
import { VenueNameDialogComponent } from "../venue-name-dialog/venue-name-dialog.component";

@Component({
	selector: 'app-dashboard-venue',
	templateUrl: './dashboard-venue.component.html',
	styleUrls: ['./dashboard-venue.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class DashboardVenueComponent implements OnInit
{
	@Input() status: Status;
	public venue: IVenueData;
	public venueSkeletons: string[];

	public loading: boolean;

	constructor(private messageService: MessageService, private apiClient: APIClient, private dialog: MatDialog)
	{
		this.loading = true;
	}

	ngOnInit(): void
	{
		this.refreshVenue();
		try
		{
			this.apiClient.getVenues()
				.toPromise()
				.then(response =>
				{
					this.venueSkeletons = response;
					this.loading = false;
				});
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

	public async refreshVenue(): Promise<void>
	{
		try
		{
			const response = await this.apiClient.getActiveVenue().toPromise();
			this.venue = response;
		}
		catch (reason)
		{
			this.messageService.error(reason);
		}
	}

	public get universeCount(): number
	{
		if (this.venue == null) { return 0; }

		return this.venue.universes.length;
	}

	public getFixtureCount(universe: UniverseData): number
	{
		return universe.fixtures.length;
	}

	public async loadVenue(name: string): Promise<void>
	{
		this.loading = true;
		this.venue = null;
		try
		{
			await this.apiClient.activateVenue({ name: name }).toPromise();
			await this.refreshVenue();
		}
		catch (error)
		{
			this.messageService.error(error);
		}
		this.loading = false;
	}

	public async newVenue(): Promise<void>
	{
		const dialogRef = this.dialog.open(VenueNameDialogComponent);
		const result = await dialogRef.afterClosed().toPromise();

		if (result != null)
		{
			const universe: UniverseData = {
				fixtures: [],
				name: "New Universe",
				universeID: 1
			};
			const venue: IVenueData = {
				name: result,
				universes: [universe]
			};
			try
			{
				await this.apiClient.postVenue({ value: venue }).toPromise();
				this.messageService.info(venue.name + " successfully created");
				await this.loadVenue(venue.name);
			}
			catch (error)
			{
				this.messageService.error(error);
			}
		}
	}

}
