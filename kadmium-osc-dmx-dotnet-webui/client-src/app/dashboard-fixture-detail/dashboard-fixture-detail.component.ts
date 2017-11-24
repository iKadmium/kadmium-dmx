import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UniverseStreamService } from "app/universe-stream.service";
import { UniverseService } from "api/services";
import { PreviewUniverse } from "app/preview-universe";
import { PreviewFixture } from "app/preview-fixture";
import { ActivatedRoute } from "@angular/router";
import { StatusCode } from "app/status-code.enum";
import { DashboardFixturePreviewComponent } from "app/dashboard-fixture-preview/dashboard-fixture-preview.component";
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-dashboard-fixture-detail',
    templateUrl: './dashboard-fixture-detail.component.html',
    styleUrls: ['./dashboard-fixture-detail.component.css'],
    providers: [UniverseService, UniverseStreamService]
})
export class DashboardFixtureDetailComponent implements OnInit, AfterViewInit
{
    public universe: PreviewUniverse;
    private renderTimer: number;
    private data: Uint8Array;

    public fixture: PreviewFixture;

    @ViewChild("fixturePreview") fixturePreview: DashboardFixturePreviewComponent;

    constructor(private route: ActivatedRoute, private universeService: UniverseService, private universeStreamService: UniverseStreamService,
        private snackbar: MatSnackBar)
    {
        this.data = new Uint8Array(512);
    }

    ngOnInit() 
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        let fixtureID = parseInt(this.route.snapshot.paramMap.get('fixtureID'));

        this.universeService.getActiveUniverseByID(universeID)
            .then(response =>
            {
                this.universe = PreviewUniverse.load(response.data);
                this.fixture = this.universe.fixtures.find(x => x.id == fixtureID);
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

    private async render(): Promise<void>
    {
        this.fixturePreview.render(this.data);
    }

}
