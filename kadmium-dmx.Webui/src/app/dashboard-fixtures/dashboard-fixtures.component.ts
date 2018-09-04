import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { APIClient } from 'api';
import { MessageService } from 'app/services/message.service';
import { UniverseStreamService } from "app/services/universe-stream.service";
import { Subscription } from 'rxjs';
import { AnimationLibrary } from "../animation-library";
import { DashboardFixtureListComponent } from "../dashboard-fixture-list/dashboard-fixture-list.component";
import { PreviewFixture } from "../preview-fixture";
import { PreviewUniverse } from "../preview-universe";

@Component({
	selector: 'app-dashboard-fixtures',
	templateUrl: './dashboard-fixtures.component.html',
	styleUrls: ['./dashboard-fixtures.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class DashboardFixturesComponent implements OnInit, OnDestroy
{
	@ViewChild(DashboardFixtureListComponent) fixtureList: DashboardFixtureListComponent;

	public universe: PreviewUniverse;
	private data: Uint8Array;

	public selectedFixture: PreviewFixture;

	public loading: boolean;

	private renderTimer: number;
	private subscription: Subscription;

	constructor(
		private route: ActivatedRoute,
		private apiClient: APIClient,
		private universeStreamService: UniverseStreamService,
		private messageService: MessageService)
	{
		this.data = new Uint8Array(512);
		this.loading = true;
	}

	ngOnInit()
	{
		const universeID = parseInt(this.route.snapshot.paramMap.get('universeID'), 10);
		try
		{
			this.apiClient.getActiveUniverse({ universeID: universeID })
				.toPromise()
				.then(response =>
				{
					this.universe = PreviewUniverse.load(response);
					this.loading = false;
				});

			this.subscription = this.universeStreamService
				.open(universeID)
				.subscribe(data =>
				{
					for (let i = 0; i < data.length; i++)
					{
						this.data[i] = data[i];
					}
				});
		}
		catch (error)
		{
			this.messageService.error(error);
		}

		this.renderTimer = window.setInterval(async () => await this.render(), 100);
	}

	ngOnDestroy()
	{
		window.clearInterval(this.renderTimer);
		if (this.subscription != null) { this.subscription.unsubscribe(); }
	}

	public selectFixture(fixture: PreviewFixture): void
	{
		this.selectedFixture = fixture;
	}

	private async render(): Promise<void>
	{
		if (this.fixtureList != null && this.data != null)
		{
			await this.fixtureList.render(this.data);
		}
	}

}
