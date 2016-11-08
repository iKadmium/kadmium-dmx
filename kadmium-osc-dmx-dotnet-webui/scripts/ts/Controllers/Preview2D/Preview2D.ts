import {FixtureViewModel} from "./Fixture";
import {GroupViewModel, GroupData} from "./Group";
import {UniverseViewModel, UniverseData} from "./Universe";
import {MVC} from "../MVC";

import * as ko from "knockout";

interface PreviewData
{
    groups: string[];
    universes: UniverseData[];
}

class Preview2DViewModel
{
    socket: WebSocket;
    groups: KnockoutObservableArray<GroupViewModel>;
    universes: KnockoutObservableArray<UniverseViewModel>;

    constructor()
    {
        this.groups = ko.observableArray<GroupViewModel>();
        this.universes = ko.observableArray<UniverseViewModel>();
        this.socket = new WebSocket(MVC.getSocketURL("Preview"));
        
        let url = MVC.getActionURL("Preview", "Fixtures", null);

        $.get(url, (data: any) =>
        {
            let previewData = JSON.parse(data) as PreviewData;
            for (let groupData of previewData.groups)
            {
                let group = new GroupViewModel(groupData);
                this.groups.push(group);
            }
            for (let universeData of previewData.universes)
            {
                let universe = UniverseViewModel.load(universeData, this.groups());
                this.universes.push(universe);
            }
        });

        this.socket.addEventListener("message", (message: MessageEvent) =>
        {
            let data = JSON.parse(message.data) as number[];
            for (let group of this.groups())
            {
                group.update(data);
            }
        });
    }
    
    /*static drawFill(fixture: DMXFixtureViewModel, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void
    {
        let fillStyle = "rgb( " + fixture.red + ", " + fixture.green + ", " + fixture.blue + ")";

        ctx.fillStyle = fillStyle;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = DMXFixtureViewModel.invertColor(fixture.red(), fixture.green(), fixture.blue());
    }

    static drawMovements(fixture: DMXFixtureViewModel, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void
    {
        if (fixture.pan != null)
        {
            let value: number = fixture.pan();
            let x: number = canvas.width * value;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.closePath();
            ctx.stroke();
        }
        if (fixture.tilt != null)
        {
            let value: number = fixture.tilt();
            let y: number = canvas.height * value;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.closePath();
            ctx.stroke();
        }
    }*/
}

let preview2DViewModel: Preview2DViewModel;
window.addEventListener("load", (ev: Event) =>
{
    preview2DViewModel = new Preview2DViewModel();
    ko.applyBindings(preview2DViewModel);
});