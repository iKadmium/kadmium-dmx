import { Component, Input, ViewChild, ElementRef, SimpleChanges, AfterContentInit, OnChanges } from '@angular/core';
import { PreviewFixture } from "../preview-fixture";
import { PreviewFixtureData } from "../preview.service";
import { FixtureDefinition } from "../fixture-definition";

@Component({
    selector: 'app-dashboard-fixture-preview',
    templateUrl: './dashboard-fixture-preview.component.html',
    styleUrls: ['./dashboard-fixture-preview.component.css'],
})
export class DashboardFixturePreviewComponent implements AfterContentInit
{
    public static updateRate = 60; //hertz
    public static updateTime = 1000 / DashboardFixturePreviewComponent.updateRate;

    @Input() fixture: PreviewFixture;
    @Input("data") data: number[];
    @ViewChild("canvas") canvasRef: ElementRef;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor()
    {

    }

    ngAfterContentInit(): void
    {
        this.canvas = this.canvasRef.nativeElement;
        this.ctx = this.canvas.getContext("2d");
    }

    public render(): Promise<void>
    {
        let promise = new Promise<void>((resolve) => 
        {
            this.fixture.update(this.data);
            this.ctx.fillStyle = this.fixture.fillStyle;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.strokeStyle = this.fixture.strokeStyle;
            this.ctx.lineWidth = 2;

            if (this.fixture.pan != null)
            {
                let panX = this.fixture.pan * this.canvas.width;
                this.ctx.beginPath();
                this.ctx.moveTo(panX, 0);
                this.ctx.lineTo(panX, this.canvas.width);
                this.ctx.stroke();
            }

            if (this.fixture.tilt != null)
            {
                let tiltY = this.fixture.tilt * this.canvas.height;
                this.ctx.beginPath();
                this.ctx.moveTo(0, tiltY);
                this.ctx.lineTo(this.canvas.width, tiltY);
                this.ctx.stroke();
            }
            resolve();
        });
        return promise;
    }

}
