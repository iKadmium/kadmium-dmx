import { Component, Input, ViewChild, ElementRef, SimpleChanges, AfterContentInit, OnChanges } from '@angular/core';
import { PreviewFixture } from "../../preview-fixture";

@Component({
	selector: 'app-dashboard-fixture-preview',
	templateUrl: './dashboard-fixture-preview.component.html',
	styleUrls: ['./dashboard-fixture-preview.component.css'],
})
export class DashboardFixturePreviewComponent implements AfterContentInit
{
	public static updateRate = 60; // hertz
	public static updateTime = 1000 / DashboardFixturePreviewComponent.updateRate;

	public static width = 150;
	public static height = 150;

	@Input() fixture: PreviewFixture;
	@ViewChild("canvas") canvasRef: ElementRef<HTMLCanvasElement>;

	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	constructor()
	{ }

	ngAfterContentInit(): void
	{
		this.canvas = this.canvasRef.nativeElement;
		this.ctx = this.canvas.getContext("2d");
	}

	public render(data: Uint8Array): Promise<void>
	{
		const promise = new Promise<void>((resolve) =>
		{
			this.fixture.update(data);

			this.ctx.fillStyle = this.fixture.getFillStyle();
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

			this.ctx.strokeStyle = this.fixture.getStrokeStyle();
			this.ctx.lineWidth = 2;

			const pan = this.fixture.getPan();
			if (pan != null)
			{
				const panX = pan * this.canvas.width;
				this.strokeLine(panX, 0, panX, this.canvas.height, this.ctx);
			}

			const tilt = this.fixture.getTilt();
			if (tilt != null)
			{
				const tiltY = tilt * this.canvas.height;
				this.strokeLine(0, tiltY, this.canvas.width, tiltY, this.ctx);
			}
			resolve();
		});
		return promise;
	}

	private strokeLine(x1: number, y1: number, x2: number, y2: number, ctx: CanvasRenderingContext2D): void
	{
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
	}
}