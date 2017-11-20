import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PreviewUniverse } from "app/preview-universe";
import { UniverseService } from "api/services";
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";
import { DashboardFixtureListComponent } from "app/dashboard-fixture-list/dashboard-fixture-list.component";
import { UniverseStreamService } from "app/universe-stream.service";
import { PreviewFixture } from "app/preview-fixture";

@Component({
    selector: 'app-dashboard-fixtures',
    templateUrl: './dashboard-fixtures.component.html',
    styleUrls: ['./dashboard-fixtures.component.css'],
    providers: [UniverseStreamService, UniverseService]
})
export class DashboardFixturesComponent implements OnInit
{
    @ViewChild(DashboardFixtureListComponent) fixtureList: DashboardFixtureListComponent;

    public universe: PreviewUniverse;
    private renderTimer: number;
    private data: Uint8Array;

    public selectedFixture: PreviewFixture;

    constructor(private route: ActivatedRoute, private universeService: UniverseService, private universeStreamService: UniverseStreamService,
        private notificationsService: NotificationsService)
    {
        this.data = new Uint8Array(512);

    }

    ngOnInit() 
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        this.universeService.getActiveUniverseByID(universeID)
            .then(response => this.universe = PreviewUniverse.load(response.data))
            .catch(reason => this.notificationsService.add(StatusCode.Error, reason));

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
