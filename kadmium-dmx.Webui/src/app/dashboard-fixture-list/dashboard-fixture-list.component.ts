import { Component, OnInit, Input, ContentChildren, ViewChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { PreviewFixture } from "../preview-fixture";
import { DashboardFixturePreviewComponent } from "../dashboard-fixture-preview/dashboard-fixture-preview.component";
import { PreviewUniverse } from "../preview-universe";

@Component({
    selector: 'app-dashboard-fixture-list',
    templateUrl: './dashboard-fixture-list.component.html',
    styleUrls: ['./dashboard-fixture-list.component.css']
})
export class DashboardFixtureListComponent implements OnInit
{
    @ViewChildren(DashboardFixturePreviewComponent) fixtures: QueryList<DashboardFixturePreviewComponent>;

    @Input() universe: PreviewUniverse;

    public colCount: number;

    constructor()
    {
        this.colCount = 1;
    }

    ngOnInit()
    {
        window.addEventListener("resize", (ev) =>
        {
            this.colCount = this.getCols();
        });
        this.colCount = this.getCols();
    }

    public getCols(): number
    {
        let width = window.innerWidth;
        let cols = width / DashboardFixturePreviewComponent.width;
        return Math.floor(cols);
    }

    public async render(data: Uint8Array): Promise<void>
    {
        Promise.all(this.fixtures.map(item => item.render(data)));
    }

}
