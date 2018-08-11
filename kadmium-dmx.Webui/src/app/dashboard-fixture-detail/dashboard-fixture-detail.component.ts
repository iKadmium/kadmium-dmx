import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { UniverseStreamService } from "app/universe-stream.service";
import { UniverseService } from "api/services";
import { PreviewUniverse } from "app/preview-universe";
import { PreviewFixture } from "app/preview-fixture";
import { ActivatedRoute } from "@angular/router";
import { StatusCode } from "app/status-code.enum";
import { DashboardFixturePreviewComponent } from "app/dashboard-fixture-preview/dashboard-fixture-preview.component";
import { MatSnackBar, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { AnimationLibrary } from "app/animation-library";
import { PreviewAttribute } from 'app/preview-attribute';
import { AttributeUpdateMessage, FixtureStreamService } from 'app/fixture-stream.service';

@Component({
    selector: 'app-dashboard-fixture-detail',
    templateUrl: './dashboard-fixture-detail.component.html',
    styleUrls: ['./dashboard-fixture-detail.component.css'],
    providers: [UniverseService, UniverseStreamService, FixtureStreamService],
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

    constructor(private route: ActivatedRoute, private universeService: UniverseService, private universeStreamService: UniverseStreamService,
        private snackbar: MatSnackBar, private fixtureStreamService: FixtureStreamService)
    {
        this.data = new Uint8Array(512);
        this.loading = true;
    }

    ngOnInit() 
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        let fixtureID = parseInt(this.route.snapshot.paramMap.get('fixtureID'));

        this.universeService.getActiveUniverseByID(universeID)
            .toPromise()
            .then(response =>
            {
                this.universe = PreviewUniverse.load(response);
                let fixture = this.universe.fixtures.find(x => x.id == fixtureID);
                this.fixture = fixture;
                this.loading = false;
                let activeFixture = response.fixtures.find(x => x.id == fixtureID);
                this.attributes = activeFixture.attributes.map(x => new PreviewAttribute().load(x));

                this.fixtureStreamService.subscribe(this.fixture.id, data => 
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
        this.fixtureStreamService.set(this.fixture.id, data.attributeName, data.attributeValue);
    }

}
