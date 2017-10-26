import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { UniverseCell } from "app/dashboard-universe/dashboard-universe.component";

@Component({
    selector: 'app-dashboard-universe-cell',
    templateUrl: './dashboard-universe-cell.component.html',
    styleUrls: ['./dashboard-universe-cell.component.css']
})
export class DashboardUniverseCellComponent implements AfterContentInit
{
    @Input() cell: UniverseCell;
    @ViewChild("canvas") canvasElement: ElementRef;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor() { }

    ngAfterContentInit()
    {
        this.canvas = (this.canvasElement.nativeElement as HTMLCanvasElement);
        this.context = this.canvas.getContext("2d");
        this.render();
    }

    public render(): void
    {
        if (this.canvas && this.context)
        {
            let style = `rgb(255,${255 - this.cell.value},${255 - this.cell.value})`;
            this.context.fillStyle = style;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.context.font = "12px Monospace";
            this.context.textAlign = "center";
            this.context.fillStyle = "black";
            this.context.fillText((this.cell.address + 1) + "", this.canvas.width / 2, this.canvas.height * 3 / 4);

            if (this.cell.testing)
            {
                this.context.strokeStyle = "blue";
            }
            else
            {
                this.context.strokeStyle = this.cell.isControlled ? "red" : "black";
            }

            this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

}
