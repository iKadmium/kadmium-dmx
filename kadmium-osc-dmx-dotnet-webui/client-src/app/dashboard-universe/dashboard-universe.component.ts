import { Component, OnInit, Input } from '@angular/core';
import { UniverseUpdateData, SACNTransmitterService } from "app/sacn-transmitter.service";
import { VenueService } from "app/venue.service";
import { PreviewUniverse } from "app/preview-universe";
import { NotificationsService } from "app/notifications.service";
import { StatusCode } from "app/status-code.enum";

@Component({
    selector: 'app-dashboard-universe',
    templateUrl: './dashboard-universe.component.html',
    styleUrls: ['./dashboard-universe.component.css']
})
export class DashboardUniverseComponent implements OnInit
{
    universes: PreviewUniverse[];
    activeUniverse: PreviewUniverse;

    constructor(private venueService: VenueService, private sacnTransmitterService: SACNTransmitterService, private notificationsService: NotificationsService) 
    {
        this.universes = [];
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            let venue = await this.venueService.getActive();
            for (let universe of venue.universes)
            {
                this.universes.push(new PreviewUniverse(universe.name, universe.id, []));
            }

            await this.sacnTransmitterService.subscribe(this);
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
        }
    }

    private selectUniverse(universeID: number): void
    {
        this.activeUniverse = this.universes.find(x => x.universeID == universeID);
    }

    private updateUniverse(data: UniverseUpdateData): void
    {
        if (this.activeUniverse != null && this.activeUniverse != undefined)
        {
            for (let i in data.values)
            {
                this.activeUniverse.values[i] = data.values[i];
            }
        }
    }

    private range(start: number, end: number): number[]
    {
        return Array<number>(end - start + 1).fill(0).map((value, index) => index + start);
    }

    private getChannelValue(rowNumber: number, columnNumber: number): number
    {
        return this.activeUniverse.values[rowNumber * 10 + columnNumber - 1];
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
