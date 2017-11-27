import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PreviewUniverse } from "app/preview-universe";
import { UniverseService } from "api/services";
import { StatusCode } from "app/status-code.enum";
import { DashboardFixtureListComponent } from "app/dashboard-fixture-list/dashboard-fixture-list.component";
import { UniverseStreamService } from "app/universe-stream.service";
import { PreviewFixture } from "app/preview-fixture";
import { MatSnackBar } from '@angular/material';
import { AnimationLibrary } from "app/animation-library";

@Component({
    selector: 'app-dashboard-fixtures',
    templateUrl: './dashboard-fixtures.component.html',
    styleUrls: ['./dashboard-fixtures.component.css'],
    providers: [UniverseStreamService, UniverseService],
    animations: [AnimationLibrary.animations()]
})
export class DashboardFixturesComponent implements OnInit
{
    @ViewChild(DashboardFixtureListComponent) fixtureList: DashboardFixtureListComponent;

    public universe: PreviewUniverse;
    private renderTimer: number;
    private data: Uint8Array;

    public selectedFixture: PreviewFixture;

    public loading: boolean;

    constructor(private route: ActivatedRoute, private universeService: UniverseService, private universeStreamService: UniverseStreamService,
        private snackbar: MatSnackBar)
    {
        this.data = new Uint8Array(512);
        this.loading = true;
    }

    ngOnInit() 
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        this.universeService.getActiveUniverseByID(universeID)
            .then(response =>
            {
                this.universe = PreviewUniverse.load(response.data);
                this.loading = false;
            }).catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));

        this.universeStreamService.subscribe(universeID, data => 
        {
            for (let i = 0; i < data.length; i++)
            {
                this.data[i] = data[i];
            }
        });

        this.renderTimer = window.setInterval(async () => await this.render(), 100);
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
