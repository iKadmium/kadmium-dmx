import { Component, OnInit, Input, ContentChildren, ViewChildren, QueryList } from '@angular/core';
import { PreviewVenue } from "app/preview-venue";
import { PreviewFixture } from "app/preview-fixture";
import { DashboardFixturePreviewComponent } from "app/dashboard-fixture-preview/dashboard-fixture-preview.component";

@Component({
    selector: 'app-dashboard-fixture-list',
    templateUrl: './dashboard-fixture-list.component.html',
    styleUrls: ['./dashboard-fixture-list.component.css']
})
export class DashboardFixtureListComponent implements OnInit
{
    @Input() venue: PreviewVenue;
    @ViewChildren(DashboardFixturePreviewComponent) fixtures: QueryList<DashboardFixturePreviewComponent>;

    constructor()
    { }

    ngOnInit()
    {
    }

    selectFixture(fixture: PreviewFixture): void
    {
        this.venue.activeUniverse.activeFixture = fixture;
    }

    public async render(): Promise<void>
    {
        Promise.all(this.fixtures.map(item => item.render()));
    }

}
