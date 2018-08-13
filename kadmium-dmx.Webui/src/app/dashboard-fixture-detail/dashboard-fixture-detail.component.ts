import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { UniverseStreamService } from "../universe-stream.service";
import { PreviewUniverse } from "../preview-universe";
import { PreviewFixture } from "../preview-fixture";
import { ActivatedRoute } from "@angular/router";
import { StatusCode } from "../status-code.enum";
import { DashboardFixturePreviewComponent } from "../dashboard-fixture-preview/dashboard-fixture-preview.component";
import { MatSnackBar, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { AnimationLibrary } from "../animation-library";
import { PreviewAttribute } from '../preview-attribute';
import { AttributeUpdateMessage, FixtureStreamService } from '../fixture-stream.service';
import { APIClient } from 'api';

@Component({
    selector: 'app-dashboard-fixture-detail',
    templateUrl: './dashboard-fixture-detail.component.html',
    styleUrls: ['./dashboard-fixture-detail.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class DashboardFixtureDetailComponent implements OnInit, OnDestroy, AfterViewInit
{
    public universe: PreviewUniverse;
    private renderTimer: number;
    private data: Uint8Array;

    public fixture: PreviewFixture;

    public loading: boolean;
    private firstUpdate: boolean = true;

    public attributes: PreviewAttribute[];

    @ViewChild("fixturePreview") fixturePreview: DashboardFixturePreviewComponent;

    constructor(private route: ActivatedRoute, private apiClient: APIClient, private universeStreamService: UniverseStreamService,
        private snackbar: MatSnackBar, private fixtureStreamService: FixtureStreamService)
    {
        this.data = new Uint8Array(512);
        this.loading = true;
    }

    ngOnInit() 
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        let fixtureAddress = parseInt(this.route.snapshot.paramMap.get('fixtureAddress'));

        this.apiClient.getActiveUniverse({ universeID: universeID })
            .toPromise()
            .then(response =>
            {
                this.universe = PreviewUniverse.load(response);
                let fixture = this.universe.fixtures.find(x => x.address == fixtureAddress);
                this.fixture = fixture;
                this.loading = false;
                let activeFixture = response.fixtures.find(x => x.address == fixtureAddress);
                this.attributes = activeFixture.attributes.map(x => new PreviewAttribute().load(x));

                this.fixtureStreamService.subscribe(universeID, fixtureAddress, data => 
                {
                    for (let update of data)
                    {
                        let attribute = this.attributes.find(x => x.name == update.name);
                        if (attribute.value != update.value)
                        {
                            attribute.value = update.value;
                        }
                    }
                });
            }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));

        this.universeStreamService.subscribe(universeID, data => 
        {
            for (let i = 0; i < data.length; i++)
            {
                this.data[i] = data[i];
            }
        });
    }

    ngAfterViewInit(): void
    {
        this.renderTimer = window.setInterval(async () => await this.render(), 100);
    }

    ngOnDestroy(): void
    {
        this.universeStreamService.unsubscribe();
        this.fixtureStreamService.unsubscribe();
    }

    private async render(): Promise<void>
    {
        if (this.fixturePreview != null)
        {
            this.fixturePreview.render(this.data);
        }
    }

    updateValue(data: AttributeUpdateMessage): void
    {
        this.fixtureStreamService.set(this.universe.universeID, this.fixture.address, data.attributeName, data.attributeValue);
    }

}
