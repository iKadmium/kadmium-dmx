import { Component, ViewChild } from '@angular/core';

import { PreviewService } from "../preview-2d/preview.service"
import { SACNTransmitterService, UniverseUpdateData } from "./sacn-transmitter.service";
import { MessageBarComponent } from "../status/message-bar/message-bar.component";
import { VenueService } from "../venues/venue.service";
import { Universe } from "../venues/venue";
import { Title } from "@angular/platform-browser";
import { MessageBarService } from "../status/message-bar/message-bar.service";

@Component({
    selector: 'sacn-transmitter-live',
    template: require('./sacn-transmitter-live.component.html'),
    providers: [SACNTransmitterService, VenueService]
})
export class SACNTransmitterLiveComponent
{
    editMode: boolean;

    activeUniverse: DMXUniverse;
    universes: DMXUniverse[];

    constructor(venueService: VenueService, private sacnTransmitterService: SACNTransmitterService,
        private messageBarService: MessageBarService, title: Title)
    {
        title.setTitle("sACN Transmitter Live");
        this.universes = [];
        this.activeUniverse = null;

        this.editMode = false;

        venueService.getActive()
            .then(venue => 
            {
                for (let universe of venue.universes)
                {
                    this.universes[universe.universeID] = new DMXUniverse(universe);
                }
                if (this.universes.length > 0)
                {
                    this.activeUniverse = this.universes[Object.keys(this.universes)[0]];
                }

                sacnTransmitterService.subscribe(this);
            })
            .catch(error => this.messageBarService.add("Error", error));
    }

    private updateUniverse(data: UniverseUpdateData): void
    {
        if (this.activeUniverse != null && this.activeUniverse != undefined)
        {
            for (let channel of this.activeUniverse.channels)
            {
                if (channel.value != data.values[channel.address])
                {
                    channel.value = data.values[channel.address];
                }
            }
        }
    }

    private async updateValue(channel: DMXChannel, value: number): Promise<void>
    {
        await this.sacnTransmitterService
            .set(1, channel.address, value)
            .catch(reason => 
            {
                this.messageBarService.add("Error", reason);
            });
    }
}

class DMXUniverse
{
    channels: DMXChannel[]
    name: string;
    universeID: number;

    rows: DMXChannel[][];

    constructor(universe: Universe)
    {
        this.universeID = universe.universeID;
        this.name = universe.name;
        this.channels = [];
        for (let i = 0; i < 512; i++)
        {
            this.channels[i] = new DMXChannel(i);
        }
        this.rows = this.getRows();
    }

    getRows(): DMXChannel[][]
    {
        let result = [];
        for (let i = 0; i < 51; i++)
        {
            let row = [];
            for (let j = 0; j < 10; j++)
            {
                let address = i * 10 + j;
                row[j] = this.channels[address];
            }
            result[i] = row;
        }
        let finalRow = [this.channels[510], this.channels[511]];
        result[51] = finalRow;
        return result;
    }
}

class DMXChannel
{
    value: number;
    address: number;
    constructor(address: number)
    {
        this.address = address;
        this.value = 0;
    }

    get displayValue(): string
    {
        if (this.value < 10)
        {
            return "00" + this.value;
        }
        else if (this.value < 100)
        {
            return "0" + this.value;
        }
        else if (this.value < 1000)
        {
            return this.value + "";
        }
    }

    get style(): string
    {
        let style = `rgb(255,${255 - this.value},${255 - this.value})`;
        return style;
    }
}