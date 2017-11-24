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

@Component({
    selector: 'app-dashboard-universe',
    templateUrl: './dashboard-universe.component.html',
    styleUrls: ['./dashboard-universe.component.css'],
    providers: [UniverseStreamService, UniverseService]
})
export class DashboardUniverseComponent implements OnInit, AfterViewInit
{

    public universe: PreviewUniverse;
    public data: Uint8Array;

    cells: PreviewUniverseCell[];

    renderInterval: number;

    public canvasWidth: number;
    public canvasHeight: number;
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
        this.canvasWidth = 10 * this.cellWidth + 11 * this.cellPaddingX;
        this.cellHeight = 20;
        this.canvasHeight = 52 * this.cellHeight + 53 * this.cellPaddingY;
    }

    ngOnInit(): void
    {
        let universeID = parseInt(this.route.snapshot.paramMap.get('universeID'));
        this.universeService.getActiveUniverseByID(universeID)
            .then(response =>
            {
                this.universe = PreviewUniverse.load(response.data);

                let x = 2 * this.cellPaddingX + this.cellWidth;
                let y = this.cellPaddingY;
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
            })
            .catch(error => this.snackbar.open(error, "Close", { duration: 3000 }));

        this.universeStreamService.subscribe(universeID, data =>
        {
            this.updateData(data);
        });
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