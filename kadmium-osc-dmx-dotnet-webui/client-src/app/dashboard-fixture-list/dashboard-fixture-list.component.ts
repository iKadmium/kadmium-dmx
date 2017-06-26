import { Component, OnInit, Input } from '@angular/core';
import { PreviewVenue } from "app/preview-venue";
import { PreviewFixture } from "app/preview-fixture";
import { Group } from "app/group";

@Component({
    selector: 'app-dashboard-fixture-list',
    templateUrl: './dashboard-fixture-list.component.html',
    styleUrls: ['./dashboard-fixture-list.component.css']
})
export class DashboardFixtureListComponent implements OnInit
{
    @Input() venue: PreviewVenue;

    constructor()
    { }

    ngOnInit()
    {
    }

    selectFixture(fixture: PreviewFixture): void
    {
        this.venue.activeUniverse.activeFixture = fixture;
    }

}
