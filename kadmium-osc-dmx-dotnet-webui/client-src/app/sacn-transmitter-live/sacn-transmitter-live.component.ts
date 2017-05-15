import { Component, OnInit } from '@angular/core';
import { PreviewUniverse } from "../preview-universe";
import { VenueService } from "../venue.service";
import { SACNTransmitterService, UniverseUpdateData } from "../sacn-transmitter.service";
import { Title } from "@angular/platform-browser";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";
import { PreviewChannel } from "../preview-channel";

@Component({
    selector: 'app-sacn-transmitter-live',
    templateUrl: './sacn-transmitter-live.component.html',
    styleUrls: ['./sacn-transmitter-live.component.css'],
    providers: [VenueService, SACNTransmitterService]
})
export class SACNTransmitterLiveComponent implements OnInit
{
    editMode: boolean;

    activeUniverse: PreviewUniverse;
    universes: PreviewUniverse[];

    deafness: boolean[];

    constructor(private venueService: VenueService, private sacnTransmitterService: SACNTransmitterService,
        private notificationsService: NotificationsService, title: Title)
    {
        title.setTitle("sACN Transmitter Live");
        this.universes = [];
        this.activeUniverse = null;
        this.editMode = false;
        this.deafness = [];
    }

    async ngOnInit(): Promise<void>
    {
        this.deafness.fill(false, 0, 511);
        try
        {
            let venue = await this.venueService.getActive();
            for (let universe of venue.universes)
            {
                this.universes.push(new PreviewUniverse(universe.name, universe.id, []));
            }
            if (this.universes.length > 0)
            {
                this.activeUniverse = this.universes[0];
            }

            await this.sacnTransmitterService.subscribe(this);
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
        }
    }

    private updateUniverse(data: UniverseUpdateData): void
    {
        if (this.activeUniverse != null && this.activeUniverse != undefined)
        {
            for (let i in data.values)
            {
                if (!this.deafness[i])
                {
                    this.activeUniverse.values[i] = data.values[i];
                }
            }
        }
    }

    private mouseDown(channel: number): void
    {
        this.deafness[channel] = true;
    }

    private mouseUp(channel: number): void
    {
        this.deafness[channel] = false;
    }

    private async updateValue(channel: number, value: number): Promise<void>
    {
        try
        {
            await this.sacnTransmitterService.set(1, channel, value);
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
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

    private trackByFn(index, item)
    {
        return index;
    }

}
