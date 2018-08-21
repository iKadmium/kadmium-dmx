import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UniverseStreamService } from "../universe-stream.service";
import { PreviewUniverse } from "../preview-universe";
import { ActivatedRoute } from "@angular/router";
import { PreviewUniverseCell } from "../preview-universe-cell";
import { AnimationLibrary } from "../animation-library";
import { APIClient } from 'api';
import { Subscription } from 'rxjs';
import { MessageService } from 'app/message.service';
import { DashboardFixturePreviewComponent } from 'app/dashboard-fixture-preview/dashboard-fixture-preview.component';

@Component({
    selector: 'app-dashboard-universe',
    templateUrl: './dashboard-universe.component.html',
    styleUrls: ['./dashboard-universe.component.css'],
    animations: [AnimationLibrary.animations()]
})
export class DashboardUniverseComponent implements OnInit, AfterViewInit, OnDestroy
{
    public universe: PreviewUniverse;
    private data: Uint8Array;

    private cells: PreviewUniverseCell[];

    private renderInterval: number;

    private cellWidth: number;
    private cellHeight: number;
    private cellPaddingX: number;
    private cellPaddingY: number;

    @ViewChild("canvas") canvasElement: ElementRef;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private subscription: Subscription;

    constructor(
        private messageService: MessageService,
        private apiClient: APIClient,
        private universeStreamService: UniverseStreamService,
        private route: ActivatedRoute
    ) 
    {
        this.cells = [];
        this.data = new Uint8Array(512);

        this.cellPaddingX = 4;
        this.cellPaddingY = 4;
        this.cellWidth = 50;
        this.cellHeight = 20;
    }

    ngOnInit(): void
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));

        try
        {
            this.apiClient.getActiveUniverse({ universeID: universeID })
                .toPromise()
                .then(response =>
                {
                    this.universe = PreviewUniverse.load(response);
                    this.drawCanvas();
                });

            this.subscription = this.universeStreamService
                .open(universeID)
                .subscribe(data => this.updateData(data));
        }
        catch (error)
        {
            this.messageService.error(error);
        }

        window.addEventListener("resize", () =>
        {
            this.drawCanvas();
        });
    }

    ngAfterViewInit(): void
    {
        this.canvas = (this.canvasElement.nativeElement as HTMLCanvasElement);
        this.context = this.canvas.getContext("2d");
        this.renderInterval = window.setInterval(() => this.render(), DashboardFixturePreviewComponent.updateTime);
    }

    ngOnDestroy(): void
    {
        if (this.subscription != null) { this.subscription.unsubscribe(); }
        window.clearInterval(this.renderInterval);
    }

    public get canvasWidth(): number
    {
        return this.cellsPerRow * this.cellWidth + (this.cellsPerRow + 1) * this.cellPaddingX;
    }

    public get canvasHeight(): number
    {
        let rows = Math.ceil(512 / this.cellsPerRow);
        return rows * this.cellHeight + (rows + 1) * this.cellPaddingY;
    }

    public get cellsPerRow(): number
    {
        if (window.innerWidth < 601)
        {
            return 5;
        }
        else if (window.innerWidth > 1601)
        {
            return 20;
        }
        else
        {
            return 10;
        }
    }

    private drawCanvas(): void
    {
        let x = 2 * this.cellPaddingX + this.cellWidth;
        let y = this.cellPaddingY;

        this.cells = [];

        for (let address = 0; address < this.data.length; address++)
        {
            let controlled = this.getIsControlled(address);

            let cell = new PreviewUniverseCell(this.cellWidth, this.cellHeight, x, y, address, controlled);
            this.cells.push(cell);
            x += this.cellWidth + this.cellPaddingX;

            if (x >= this.canvasWidth)
            {
                y += this.cellHeight + this.cellPaddingY;
                x = this.cellPaddingX;
            }
        }
    }

    private getIsControlled(address: number)
    {
        let fixture = this.universe.fixtures
            .find(x => x.channelNumberMap.has(address));
        if (fixture != null)
        {
            return fixture
                .channelNumberMap.get(address)
                .some(x => x.controlled);
        }
        return false;
    }

    private render(): void
    {
        if (this.cells.length > 0)
        {
            for (let i = 0; i < this.data.length; i++)
            {
                this.cells[i].render(this.context, this.data[i]);
            }
        }
    }

    private updateData(data: Uint8Array): void
    {
        for (let i = 0; i < this.data.length; i++)
        {
            this.data[i] = data[i];
        }
    }
}