import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { UniverseStreamService } from "../universe-stream.service";
import { PreviewUniverse } from "../preview-universe";
import { PreviewFixture } from "../preview-fixture";
import { ActivatedRoute } from "@angular/router";
import { DashboardFixturePreviewComponent } from "../dashboard-fixture-preview/dashboard-fixture-preview.component";
import { AnimationLibrary } from "../animation-library";
import { PreviewAttribute } from '../preview-attribute';
import { AttributeUpdateMessage, FixtureStreamService, AttributeUpdateData } from '../fixture-stream.service';
import { APIClient, ActiveUniverse } from 'api';
import { Subscription } from 'rxjs';
import { MessageService } from 'app/message.service';

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
        this.universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        let fixtureAddress = parseInt(this.route.snapshot.paramMap.get('fixtureAddress'));

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
        let universe = PreviewUniverse.load(universeData);
        let fixture = universe.fixtures.find(x => x.address == fixtureAddress);
        this.fixture = fixture;
        let activeFixture = universeData.fixtures.find(x => x.address == fixtureAddress);
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
        for (let update of data)
        {
            let attribute = this.attributes.find(x => x.name == update.name);
            if (attribute.value != update.value)
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
