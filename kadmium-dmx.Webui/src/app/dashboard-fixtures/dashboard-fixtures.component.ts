import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PreviewUniverse } from "../preview-universe";
import { DashboardFixtureListComponent } from "../dashboard-fixture-list/dashboard-fixture-list.component";
import { UniverseStreamService } from "../universe-stream.service";
import { PreviewFixture } from "../preview-fixture";
import { MatSnackBar } from '@angular/material';
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';

@Component({
    selector: 'app-dashboard-fixtures',
    templateUrl: './dashboard-fixtures.component.html',
    styleUrls: ['./dashboard-fixtures.component.css'],
    providers: [UniverseStreamService, APIClient],
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

    constructor(private route: ActivatedRoute, private apiClient: APIClient, private universeStreamService: UniverseStreamService,
        private snackbar: MatSnackBar)
    {
        this.data = new Uint8Array(512);
        this.loading = true;
    }

    ngOnInit() 
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        this.apiClient.getActiveUniverse({ universeID: universeID })
            .toPromise()
            .then(response =>
            {
                this.universe = PreviewUniverse.load(response);
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

    ngOnDestroy()
    {
        this.universeStreamService.unsubscribe();
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
