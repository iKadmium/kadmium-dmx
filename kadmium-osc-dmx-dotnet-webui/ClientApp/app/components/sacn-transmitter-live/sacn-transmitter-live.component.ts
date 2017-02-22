import { Component } from '@angular/core';

import { PreviewService } from "../preview-2d/preview.service"

@Component({
    selector: 'sacn-transmitter-live',
    template: require('./sacn-transmitter-live.component.html'),
    providers: [PreviewService]
})
export class SACNTransmitterLiveComponent
{
    data: number[];

    constructor(previewService: PreviewService)
    {
        this.data = Array<number>(512).fill(0);
        previewService.subscribe(data => 
        {
            this.data = data.values;
        });
    }

    getRows(): number[]
    {
        return new Array<number>(52).fill(0).map((x, i) => i);
    }

    getColumns(row: number): number[]
    {
        if (row < 51)
        {
            return new Array<number>(10).fill(0).map((x, i) => i);
        }
        else if (row == 51)
        {
            return new Array<number>(3).fill(0).map((x, i) => i);
        }
        else
        {
            return [];
        }
    }

    padNumber(num: number): string
    {
        if (num < 10)
        {
            return "00" + num;
        }
        else if (num < 100)
        {
            return "0" + num;
        }
        else if (num < 1000)
        {
            return num + "";
        }
    }

}