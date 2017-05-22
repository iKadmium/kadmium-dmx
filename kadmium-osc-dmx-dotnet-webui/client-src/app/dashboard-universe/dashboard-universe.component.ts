import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { UniverseUpdateData, SACNTransmitterService } from "app/sacn-transmitter.service";
import { VenueService } from "app/venue.service";
import { PreviewUniverse } from "app/preview-universe";
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";
import { FormControl } from "@angular/forms";
import { UniverseData } from "app/solvers-live.service";
import { PreviewVenue } from "app/preview-venue";
import { PreviewAttribute } from "app/preview-attribute";

@Component({
    selector: 'app-dashboard-universe',
    templateUrl: './dashboard-universe.component.html',
    styleUrls: ['./dashboard-universe.component.css'],
    providers: [SACNTransmitterService]
})
export class DashboardUniverseComponent implements OnInit, OnChanges, OnDestroy
{
    @Input() venue: PreviewVenue;
    @Input() data: number[];
    @Output() update = new EventEmitter<DMXChannelUpdateData>();

    rows: UniverseRow[];
    cells: UniverseCell[];

    constructor(private notificationsService: NotificationsService) 
    {
        this.rows = [];
        this.cells = [];
    }

    ngOnChanges(changes: SimpleChanges): void
    {
        if (changes.venue != null)
        {
            if (changes.venue.currentValue != null && changes.venue.currentValue != changes.venue.previousValue)
            {
                for (let row of this.rows)
                {
                    for (let cell of row.cells)
                    {
                        cell.setVenue(changes.venue.currentValue);
                    }
                }
            }
        }
    }

    ngOnInit(): void
    {
        for (let i = 0; i < 52; i++)
        {
            let row = new UniverseRow();
            for (let j = 0; j < 10; j++)
            {
                let address = i * 10 + j;
                if (address < 512)
                {
                    let cell = new UniverseCell(address);
                    if (this.venue != null)
                    {
                        cell.setVenue(this.venue);
                    }
                    row.cells.push(cell);
                    this.cells.push(cell);
                }
            }
            this.rows.push(row);
        }
    }

    ngOnDestroy(): void
    {
        let testingCells = this.cells.filter(x => x.testing);
        for (let cell of testingCells)
        {
            window.clearInterval(cell.testingInterval);
        }
    }

    public resetCell(cell: UniverseCell): void
    {
        if (cell.isControlled)
        {
            return;
        }
        if (cell.testing)
        {
            cell.testing = false;
            window.clearInterval(cell.testingInterval);
            cell.testingInterval = null;
        }
        let value = this.data[cell.address] == 0 ? 255 : 0;
        this.update.emit(new DMXChannelUpdateData(this.venue.activeUniverse.universeID, cell.address, value));
    }

    public toggleTesting(cell: UniverseCell): void
    {
        if (cell.isControlled)
        {
            return;
        }
        cell.testing = !cell.testing;
        if (cell.testing)
        {
            cell.testingInterval = window.setInterval(() =>
            {
                let date = new Date();
                let timeValue = (date.getSeconds() % 5) * 1000 + date.getMilliseconds();

                let timeFraction = timeValue / 5000 * Math.PI;
                let result = Math.round(Math.sin(timeFraction) * 255);
                this.update.emit(new DMXChannelUpdateData(this.venue.activeUniverse.universeID, cell.address, result));
            }, 50);
        }
        else
        {
            window.clearInterval(cell.testingInterval);
            cell.testingInterval = null;
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

class UniverseCell
{
    public address: number;
    private venue: PreviewVenue;
    public isControlled: boolean;
    public testing: boolean;
    public testingInterval: number | null;

    constructor(address: number)
    {
        this.address = address;
        this.isControlled = false;
        this.testingInterval = null;
    }

    public setVenue(venue: PreviewVenue): void
    {
        this.venue = venue;
        this.isControlled = this.getIsControlled();
    }

    private getIsControlled(): boolean
    {
        let fixture = this.venue.activeUniverse.fixtures.find(x => x.channelNumberMap.has(this.address - 1));
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