import { Component, ViewChild } from '@angular/core';

import { PreviewService } from "../preview-2d/preview.service"
import { SACNTransmitterService } from "./sacn-transmitter.service";
import { MessageBarComponent } from "../status/message-bar/message-bar.component";

@Component({
    selector: 'sacn-transmitter-live',
    template: require('./sacn-transmitter-live.component.html'),
    providers: [PreviewService, SACNTransmitterService]
})
export class SACNTransmitterLiveComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;

    data: DMXChannel[];
    rows: DMXChannel[][];
    editMode: boolean;

    constructor(previewService: PreviewService, private sacnTransmitterService: SACNTransmitterService)
    {
        this.editMode = false;
        this.data = [];
        for(let i = 0; i < 512; i++)
        {
            this.data[i] = new DMXChannel(i);
        }
        this.rows = this.getRows();
        previewService.subscribe(data => 
        {
            for(let channel of this.data)
            {
                if(channel.value != data.values[channel.address])
                {
                    channel.value = data.values[channel.address];
                }
            }
        });
    }

    getRows(): DMXChannel[][]
    {
        let result = [];
        for(let i = 0; i < 51; i++)
        {
            let row = [];
            for(let j = 0; j < 10; j++)
            {
                let address = i * 10 + j;
                row[j] = this.data[address];
            }
            result[i] = row;
        }
        let finalRow = [this.data[510], this.data[511]];
        result[51] = finalRow;
        return result;
    }

    private async updateValue(channel: DMXChannel, value: number): Promise<void>
    {
        await this.sacnTransmitterService
            .set(1, channel.address, value)
            .catch(reason => 
            {
                this.messageBar.add("Error", reason);
                let bob = reason;
                let fred = bob;
            }
            );
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