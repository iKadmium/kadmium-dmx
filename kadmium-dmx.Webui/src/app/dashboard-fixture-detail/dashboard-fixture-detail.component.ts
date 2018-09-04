import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ActiveUniverse, APIClient } from 'api';
import { AttributeUpdateData, AttributeUpdateMessage, FixtureStreamService } from 'app/services/fixture-stream.service';
import { MessageService } from 'app/services/message.service';
import { UniverseStreamService } from "app/services/universe-stream.service";
import { Subscription } from 'rxjs';
import { AnimationLibrary } from "../animation-library";
import { DashboardFixturePreviewComponent } from "../dashboard-fixture-preview/dashboard-fixture-preview.component";
import { PreviewAttribute } from '../preview-attribute';
import { PreviewFixture } from "../preview-fixture";
import { PreviewUniverse } from "../preview-universe";

@Component({
	selector: 'app-dashboard-fixture-detail',
	templateUrl: './dashboard-fixture-detail.component.html',
	styleUrls: ['./dashboard-fixture-detail.component.css'],
	animations: [AnimationLibrary.animations()]
})
export class DashboardFixtureDetailComponent implements OnInit, OnDestroy, AfterViewInit
{
	private universeID: number;
	private renderTimer: number;
	private data: Uint8Array;

	public fixture: PreviewFixture;
	public loading: boolean;

	public attributes: PreviewAttribute[];

	private fixtureStreamSubscription: Subscription;
	private universeStreamSubscription: Subscription;

	@ViewChild("fixturePreview") fixturePreview: DashboardFixturePreviewComponent;

	constructor(
		private route: ActivatedRoute,
		private apiClient: APIClient,
		private universeStreamService: UniverseStreamService,
		private messageService: MessageService,
		private fixtureStreamService: FixtureStreamService
	)
	{
		this.data = new Uint8Array(512);
		this.loading = true;
	}

	ngOnInit()
	{
		this.universeID = parseInt(this.route.snapshot.paramMap.get('universeID'), 10);
		const fixtureAddress = parseInt(this.route.snapshot.paramMap.get('fixtureAddress'), 10);

		try
		{
			this.apiClient
				.getActiveUniverse({ universeID: this.universeID })
				.toPromise()
				.then(response =>
				{
					this.loadUniverse(response, fixtureAddress);
					this.loading = false;
					try
					{
						this.fixtureStreamSubscription = this.fixtureStreamService
							.open(this.universeID, fixtureAddress)
							.subscribe(data => this.updateValues(data));
					}
					catch (error)
					{
						this.messageService.error(error);
					}
				});
		}
		catch (error)
		{
			this.messageService.error(error);
		}

		this.universeStreamSubscription = this.universeStreamService
			.open(this.universeID)
			.subscribe(data =>
			{
				this.data = data.slice();
			});

	}

	private loadUniverse(universeData: ActiveUniverse, fixtureAddress: number): void
	{
		const universe = PreviewUniverse.load(universeData);
		const fixture = universe.fixtures.find(x => x.address === fixtureAddress);
		this.fixture = fixture;
		const activeFixture = universeData.fixtures.find(x => x.address === fixtureAddress);
		this.attributes = activeFixture.attributes.map(x => new PreviewAttribute().load(x));
	}

	ngAfterViewInit(): void
	{
		this.renderTimer = window.setInterval(async () => await this.render(), 100);
	}

	ngOnDestroy(): void
	{
		if (this.universeStreamSubscription != null) { this.universeStreamSubscription.unsubscribe(); }
		if (this.fixtureStreamSubscription != null) { this.fixtureStreamSubscription.unsubscribe(); }
		window.clearInterval(this.renderTimer);
	}

	private async render(): Promise<void>
	{
		if (this.fixturePreview != null)
		{
			await this.fixturePreview.render(this.data);
		}
	}

	private updateValues(data: AttributeUpdateData[]): void
	{
		for (const update of data)
		{
			const attribute = this.attributes.find(x => x.name === update.name);
			if (attribute.value !== update.value)
			{
				attribute.value = update.value;
			}
		}
	}

	public updateValue(data: AttributeUpdateMessage): void
	{
		this.fixtureStreamService.set(this.universeID, this.fixture.address, data.attributeName, data.attributeValue);
	}

}
