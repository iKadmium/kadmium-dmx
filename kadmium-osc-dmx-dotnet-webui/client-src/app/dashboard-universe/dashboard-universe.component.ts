import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { UniverseUpdateData, UniverseStreamService } from "app/universe-stream.service";
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";
import { FormControl } from "@angular/forms";
import { PreviewVenue } from "app/preview-venue";
import { PreviewAttribute } from "app/preview-attribute";
import { PreviewUniverse } from "app/preview-universe";
import { UniverseService } from "api/services";
import { ActivatedRoute } from "@angular/router";
import { DashboardUniverseCellComponent } from "app/dashboard-universe-cell/dashboard-universe-cell.component";

@Component({
    selector: 'app-dashboard-universe',
    templateUrl: './dashboard-universe.component.html',
    styleUrls: ['./dashboard-universe.component.css'],
    providers: [UniverseStreamService, UniverseService]
})
export class DashboardUniverseComponent implements OnInit
{
    @ViewChildren(DashboardUniverseCellComponent) cellComponents: QueryList<DashboardUniverseCellComponent>;
    public universe: PreviewUniverse;
    public data: Uint8Array;

    rows: UniverseRow[];
    cells: UniverseCell[];

    renderInterval: number;

    constructor(private notificationsService: NotificationsService, private universeService: UniverseService,
        private universeStreamService: UniverseStreamService, private route: ActivatedRoute) 
    {
        this.rows = [];
        this.cells = [];
    }

    ngOnInit(): void
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        this.universeService.getActiveUniverseByID(universeID)
            .then(response => this.universe = PreviewUniverse.load(response.data))
            .catch(reason => this.notificationsService.add(StatusCode.Error, reason));

        for (let i = 0; i < 52; i++)
        {
            let row = new UniverseRow();
            for (let j = 0; j < 10; j++)
            {
                let address = i * 10 + j;
                if (address < 512)
                {
                    let cell = new UniverseCell(address);
                    if (this.universe != null)
                    {
                        cell.setUniverse(this.universe);
                    }
                    row.cells.push(cell);
                    this.cells.push(cell);
                }
            }
            this.rows.push(row);
        }

        this.universeStreamService.subscribe(universeID, data =>
        {
            this.updateData(data);
        });

        this.renderInterval = window.setInterval(() => this.render(), 100);
    }

    private render(): void
    {
        this.cellComponents.forEach(item =>
        {
            item.render();
        });
    }

    private updateData(data: Uint8Array): void
    {
        this.data = data;
        for (let i = 0; i < data.length; i++)
        {
            let cell = this.cells[i];
            cell.value = data[i];
        }
    }
}

class UniverseRow
{
    public cells: UniverseCell[];

    constructor()
    {
        this.cells = [];
    }
}

export class UniverseCell
{
    public address: number;
    private universe: PreviewUniverse;
    public isControlled: boolean;
    public testing: boolean;
    public testingInterval: number | null;
    public value: number;

    constructor(address: number)
    {
        this.address = address;
        this.isControlled = false;
        this.testingInterval = null;
    }

    public setUniverse(universe: PreviewUniverse): void
    {
        this.universe = universe;
        this.isControlled = this.getIsControlled();
    }

    private getIsControlled(): boolean
    {
        let fixture = this.universe.fixtures.find(x => x.channelNumberMap.has(this.address - 1));
        if (fixture != null)
        {
            let attributes = fixture.channelNumberMap.get(this.address - 1);
            return attributes.some(x => x.controlled);
        }
        else
        {
            return false;
        }
    }
}

export class DMXChannelUpdateData
{
    constructor(public universeID: number, public address: number, public value: number)
    {

    }
}