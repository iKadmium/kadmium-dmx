import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-dashboard-universe-cell',
    templateUrl: './dashboard-universe-cell.component.html',
    styleUrls: ['./dashboard-universe-cell.component.css']
})
export class DashboardUniverseCellComponent implements OnInit, OnChanges
{
    @Input() address: number;
    @Input() value: number;
    @Input() controlled: boolean;
    @Input() testing: boolean;
    @ViewChild("canvas") canvasElement: ElementRef;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void
    {
        if (changes.value != null && changes.value.currentValue != changes.value.previousValue)
        {
            this.render();
        }
        if (changes.testing != null)
        {
            this.render();
        }
    }

    ngOnInit()
    {
        this.canvas = (this.canvasElement.nativeElement as HTMLCanvasElement);
        this.context = this.canvas.getContext("2d");
        this.render();
    }

    private render(): void
    {
        if (this.canvas && this.context)
        {
            let style = `rgb(255,${255 - this.value},${255 - this.value})`;
            this.context.fillStyle = style;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.font = "12px Monospace";
            this.context.textAlign = "center";
            this.context.fillStyle = "black";
            this.context.fillText((this.address + 1) + "", this.canvas.width / 2, this.canvas.height * 3 / 4);

            if (this.testing)
            {
                this.context.strokeStyle = "blue";
            }
            else
            {
                this.context.strokeStyle = this.controlled ? "red" : "black";
            }

            this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

}
