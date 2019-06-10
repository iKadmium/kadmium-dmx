import { ActiveUniverseQuery_activeUniverse_fixtures, ActiveUniverseQuery_activeUniverse_fixtures_channels } from 'generated/ActiveUniverseQuery';
import React from 'react';
import { DmxCellRenderer } from './DmxCellRenderer';
import { DmxChannelControlStatus } from './DmxChannelControlStatus';
import { DmxDetailRenderer } from './DmxDetailRenderer';

const totalCells = 512;
const cellsPerRow = 20;
const totalRows = Math.ceil(totalCells / cellsPerRow);

const totalCellWidth = (DmxCellRenderer.cellWidth + DmxCellRenderer.cellMarginX) * cellsPerRow + DmxCellRenderer.cellMarginX;


export class DmxRenderer
{
    public static totalWidth = totalCellWidth + (DmxDetailRenderer.marginX * 2) + DmxDetailRenderer.width;
    public static totalHeight = (DmxCellRenderer.cellHeight + DmxCellRenderer.cellMarginY) * totalRows + DmxCellRenderer.cellMarginY;

    private cells: DmxCellRenderer[];
    private detail: DmxDetailRenderer;
    private fixtureDetails: ActiveUniverseQuery_activeUniverse_fixtures[];

    constructor(fixtureDetails: ActiveUniverseQuery_activeUniverse_fixtures[])
    {
        this.fixtureDetails = fixtureDetails;
        this.cells = [];

        let index = 0;
        const channels = fixtureDetails.flatMap(x => x.channels);
        const getDetails = (address: number) => channels.find(x => x.address == index);

        for (let cellNumberY = 0; cellNumberY < totalRows; cellNumberY++)
        {
            for (let cellNumberX = 0; cellNumberX < cellsPerRow && index <= totalCells; cellNumberX++)
            {
                if (index > 0)
                {
                    const x = this.getCellXPosition(cellNumberX);
                    const y = this.getCellYPosition(cellNumberY);

                    const details = getDetails(index);
                    let cellRendererStatus: DmxChannelControlStatus;
                    if (!details)
                    {
                        cellRendererStatus = DmxChannelControlStatus.Unknown;
                    }
                    else
                    {
                        cellRendererStatus = details.controlled ? DmxChannelControlStatus.Controlled : DmxChannelControlStatus.Known;
                    }
                    const cell = new DmxCellRenderer(index, x, y, cellRendererStatus);
                    this.cells.push(cell);
                }
                index++;
            }
        }

        this.detail = new DmxDetailRenderer(totalCellWidth + DmxDetailRenderer.marginX, DmxDetailRenderer.marginY);
    }

    private getCellXPosition = (cellNumberX: number) =>
    {
        return (DmxCellRenderer.cellWidth + DmxCellRenderer.cellMarginX) * cellNumberX + DmxCellRenderer.cellMarginX;
    }

    private getCellYPosition = (cellNumberY: number) =>
    {
        return (DmxCellRenderer.cellHeight + DmxCellRenderer.cellMarginY) * cellNumberY + DmxCellRenderer.cellMarginY;
    }

    public render(ctx: CanvasRenderingContext2D, data: number[]): void
    {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.font = `${DmxCellRenderer.cellHeight}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        for (let cell of this.cells)
        {
            cell.render(ctx, data[cell.address - 1]);
        }

        this.detail.render(ctx, data);
    }

    private selectChannel(fixture: ActiveUniverseQuery_activeUniverse_fixtures, channel: ActiveUniverseQuery_activeUniverse_fixtures_channels): void
    {
        if (this.detail.selectedChannel)
        {
            const selectedCell = this.cells.find(x => x.address == this.detail.selectedChannel.address);
            if (selectedCell)
            {
                selectedCell.selected = false;
            }
        }
        this.detail.selectChannel(fixture, channel);
        if (channel)
        {
            const selectedCell = this.cells.find(x => x.address == channel.address);
            if (selectedCell)
            {
                selectedCell.selected = true;
            }
        }
    }

    public handleCanvasClick(x: number, y: number): void
    {
        if (x <= totalCellWidth && y <= DmxRenderer.totalHeight)
        {
            const withoutMarginX = x - DmxCellRenderer.cellMarginX;
            const cellColumn = Math.floor(withoutMarginX / (DmxCellRenderer.cellWidth + DmxCellRenderer.cellMarginX));
            const withoutMarginY = y - DmxCellRenderer.cellMarginY;
            const cellRow = Math.floor(withoutMarginY / (DmxCellRenderer.cellHeight + DmxCellRenderer.cellMarginY));

            const index = (cellRow * cellsPerRow) + cellColumn;
            if (index <= totalCells && index >= 1)
            {
                const fixture = this.fixtureDetails.find(x => x.channels.find(y => y.address == index) != null)
                if (fixture)
                {
                    const channel = fixture.channels.find(x => x.address == index);
                    this.selectChannel(fixture, channel);
                }
                else
                {
                    const channel: ActiveUniverseQuery_activeUniverse_fixtures_channels = {
                        address: index,
                        name: "Unassigned",
                        controlled: false,
                        __typename: null
                    };
                    this.selectChannel(null, channel);
                }
            }
            else
            {
                this.selectChannel(null, null);
            }
        }
    }
}