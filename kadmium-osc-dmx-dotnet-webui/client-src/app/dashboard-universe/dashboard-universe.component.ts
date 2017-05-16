import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UniverseUpdateData, SACNTransmitterService } from "app/sacn-transmitter.service";
import { VenueService } from "app/venue.service";
import { PreviewUniverse } from "app/preview-universe";
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";
import { FormControl } from "@angular/forms";
import { UniverseData } from "app/solvers-live.service";
import { PreviewVenue } from "app/preview-venue";

@Component({
    selector: 'app-dashboard-universe',
    templateUrl: './dashboard-universe.component.html',
    styleUrls: ['./dashboard-universe.component.css'],
    providers: [SACNTransmitterService]
})
export class DashboardUniverseComponent implements OnInit
{
    @Input() venue: PreviewVenue;
    @Output() update = new EventEmitter<DMXChannelUpdateData>();

    constructor(private notificationsService: NotificationsService) 
    {

    }

    ngOnInit(): void
    {
    }

    private range(start: number, end: number): number[]
    {
        return Array<number>(end - start + 1).fill(0).map((value, index) => index + start);
    }

    private getChannelValue(rowNumber: number, columnNumber: number): number
    {
        return this.venue.activeUniverse.values[rowNumber * 10 + columnNumber - 1];
    }

    public setChannelValue(rowNumber: number, columnNumber: number, tableCell: HTMLTableDataCellElement): void
    {
        let value = parseInt(tableCell.innerText);
        let channel = rowNumber * 10 + columnNumber - 1;
        if (value >= 0 && value <= 255 && value != this.getChannelValue(rowNumber, columnNumber))
        {
            tableCell.innerText = "---";
            this.update.emit(new DMXChannelUpdateData(this.venue.activeUniverse.universeID, channel, value));
        }
        else
        {
            tableCell.innerText = this.getDisplayValue(this.getChannelValue(rowNumber, columnNumber));
        }
    }

    public isControlled(rowNumber: number, columnNumber: number): boolean
    {
        let address = rowNumber * 10 + columnNumber - 1;
        let fixture = this.venue.activeUniverse.fixtures.find(x => x.channelNumberMap.has(address));
        if (fixture != null)
        {
            let attributes = fixture.channelNumberMap.get(address);
            return attributes.some(x => x.controlled);
        }
        else
        {
            return false;
        }
    }

    private getDisplayValue(value: number): string
    {
        if (value < 10)
        {
            return "00" + value;
        }
        else if (value < 100)
        {
            return "0" + value;
        }
        else if (value < 1000)
        {
            return value + "";
        }
    }

    private getStyle(value: number): string
    {
        let style = `rgb(255,${255 - value},${255 - value})`;
        return style;
    }

}

export class DMXChannelUpdateData
{
    constructor(public universeID: number, public address: number, public value: number)
    {

    }
}