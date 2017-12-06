import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy, ViewChildren, QueryList, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UniverseUpdateData, UniverseStreamService } from "app/universe-stream.service";
import { StatusCode } from "app/status-code.enum";
import { FormControl } from "@angular/forms";
import { PreviewVenue } from "app/preview-venue";
import { PreviewAttribute } from "app/preview-attribute";
import { PreviewUniverse } from "app/preview-universe";
import { UniverseService } from "api/services";
import { ActivatedRoute } from "@angular/router";
import { PreviewUniverseCell } from "app/preview-universe-cell";
import { MatSnackBar } from '@angular/material';
import { AnimationLibrary } from "app/animation-library";

@Component({
    selector: 'app-dashboard-universe',
    templateUrl: './dashboard-universe.component.html',
    styleUrls: ['./dashboard-universe.component.css'],
    providers: [UniverseStreamService, UniverseService],
    animations: [AnimationLibrary.animations()]
})
export class DashboardUniverseComponent implements OnInit, AfterViewInit
{

    public universe: PreviewUniverse;
    public data: Uint8Array;

    cells: PreviewUniverseCell[];

    renderInterval: number;

    private cellWidth: number;
    private cellHeight: number;
    private cellPaddingX: number;
    private cellPaddingY: number;

    @ViewChild("canvas") canvasElement: ElementRef;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(private snackbar: MatSnackBar, private universeService: UniverseService,
        private universeStreamService: UniverseStreamService, private route: ActivatedRoute) 
    {
        this.cells = [];
        this.data = new Uint8Array(512);

        this.cellPaddingX = 4;
        this.cellPaddingY = 4;
        this.cellWidth = 50;

        this.cellHeight = 20;

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

    ngOnInit(): void
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        this.universeService.getActiveUniverseByID(universeID)
            .then(response =>
            {
                this.universe = PreviewUniverse.load(response.data);
                this.drawCanvas();
            })
            .catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));

        this.universeStreamService.subscribe(universeID, data =>
        {
            this.updateData(data);
        });

        window.addEventListener("resize", (ev) =>
        {
            this.drawCanvas();
        });
    }

    private drawCanvas(): void
    {
        let x = 2 * this.cellPaddingX + this.cellWidth;
        let y = this.cellPaddingY;
        this.cells = [];
        for (let address = 0; address < this.data.length; address++)
        {
            let controlled = false;
            let fixture = this.universe.fixtures
                .find(x => x.channelNumberMap.has(address));
            if (fixture != null)
            {
                controlled = fixture
                    .channelNumberMap.get(address)
                    .some(x => x.controlled);
            }

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

    ngAfterViewInit(): void
    {
        this.canvas = (this.canvasElement.nativeElement as HTMLCanvasElement);
        this.context = this.canvas.getContext("2d");
        this.renderInterval = window.setInterval(() => this.render(), 100);
    }

    private render(): void
    {
        for (let i = 0; i < this.data.length; i++)
        {
            this.cells[i].render(this.context, this.data[i]);
        }
    }

    private updateData(data: Uint8Array): void
    {
        for (let i = 0; i < data.length; i++)
        {
            this.data[i] = data[i];
        }
    }
}