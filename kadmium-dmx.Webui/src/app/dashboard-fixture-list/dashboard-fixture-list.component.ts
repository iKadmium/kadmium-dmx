import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
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
        window.addEventListener("resize", () =>
        {
            this.colCount = this.getCols(window.innerWidth);
        });
        this.colCount = this.getCols(window.innerWidth);
    }

    private getCols(width: number): number
    {
        let cols = width / DashboardFixturePreviewComponent.width;
        return Math.floor(cols);
    }

    public async render(data: Uint8Array): Promise<void>
    {
        await Promise.all(this.fixtures.map(item => item.render(data)));
    }

}
