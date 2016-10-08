import {Fixture as FixtureDefinition} from "../List/Editors/Fixture"; 
import {MVC} from "../../MVC";

class DMXChannel
{
    address: number;
    span: HTMLSpanElement;

    constructor(address: number)
    {
        this.address = address;
        this.span = $("#channel-" + (address + 1))[0] as HTMLSpanElement;
    }
}

class DMXChannelSet
{
    [name: string]: DMXChannel;

    constructor()
    {
        
    }
}

export class DMXFixture
{
    channels: DMXChannelSet;
    address: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    red: number;
    green: number;
    blue: number;

    static STROBE_HZ = 15;
    static STROBE_MILLIS = 1000 / DMXFixture.STROBE_HZ;

    constructor(type: string, address: number)
    {
        this.address = address;
        this.canvas = $("#canvas-" + address)[0] as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.channels = new DMXChannelSet();

        let url = MVC.getActionURL("Fixtures", "Load", type);
        
        let that = this;
        $.ajax({
            url: url,
            success: $.proxy(that.onLoadDefinition, that)
        });
    }

    onLoadDefinition(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        let definition = data as FixtureDefinition;
        for (let channel of definition.channels)
        {
            this.channels[channel.name] = new DMXChannel(this.address + channel.dmx - 2);
        }
    }

    private draw() : void
    {
        let fillStyle = "rgb( " + this.red + ", " + this.green + ", " + this.blue + ")";

        this.ctx.fillStyle = fillStyle;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = DMXFixture.invertColor(this.red, this.green, this.blue);
    }

    render(data: number[]): void
    {
        this.renderText(data);
        this.renderRGB(data);
        this.renderStrobe(data);

        this.draw();
        this.drawMovements(data);
    }

    private renderText(data: number[]) : void
    {
        for (let channelName in this.channels)
        {
            let channel = this.channels[channelName];
            channel.span.innerText = data[channel.address] + "";
        }
    }

    private renderRGB(data: number[]) : void
    {
        if (this.channels["Red"] != null)
        {
            this.red = data[this.channels["Red"].address];
        }

        if (this.channels["Green"] != null)
        {
            this.green = data[this.channels["Green"].address];
        }

        if (this.channels["Blue"] != null)
        {
            this.blue = data[this.channels["Blue"].address];
        }
    }

    private renderStrobe(data: number[]) : void
    {
        if (this.channels["Strobe"] != null)
        {
            let strobe = data[this.channels["Strobe"].address];
            if (strobe > 0)
            {
                let now = new Date();
                let strobeFunction = now.getMilliseconds() % DMXFixture.STROBE_MILLIS;

                if (strobeFunction > (DMXFixture.STROBE_MILLIS / 2))
                {
                    this.red = 0;
                    this.green = 0;
                    this.blue = 0;
                }
            }
        }
    }

    private drawMovements(data: number[]) : void
    {
        if (this.channels["PanCoarse"] != null)
        {
            let value = data[this.channels["PanCoarse"].address] / 255;
            let x = this.canvas.width * value;
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.closePath();
            this.ctx.stroke();
        }
        if (this.channels["TiltCoarse"] != null)
        {
            let value = data[this.channels["TiltCoarse"].address] / 255;
            let y = this.canvas.height * value;
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }

    static invertColor(red: number, green: number, blue: number): string
    {
        red = 255 - red;
        green = 255 - green;
        blue = 255 - blue;

        return "rgb(" + red + ", " + green + ", " + blue + ")";
    }
}