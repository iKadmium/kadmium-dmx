//import {Fixture as FixtureDefinition} from "../List/Editors/Fixture"; 
import {MVC} from "../../MVC";

class DMXChannel
{
    address: number;
    
    constructor(address: number)
    {
        this.address = address;
    }
}

class MovementDefinition
{
    name: string;
    min: number;
    max: number;

    constructor(name: string, min: number, max: number)
    {
        this.name = name;
        this.min = min;
        this.max = max;
    }
}

class MovementSet
{
    [name: string]: MovementDefinition;
    constructor()
    {
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
    movements: MovementSet;
    address: number;

    red: number;
    green: number;
    blue: number;

    pan: number;
    tilt: number;

    static STROBE_HZ = 15;
    static STROBE_MILLIS = 1000 / DMXFixture.STROBE_HZ;

    constructor(type: string, address: number)
    {
        this.address = address;
        
        this.channels = new DMXChannelSet();
        this.movements = new MovementSet();

        let url = MVC.getActionURL("Fixtures", "Load", type);
        
        let that = this;
        $.ajax({
            url: url,
            success: $.proxy(that.onLoadDefinition, that)
        });
    }

    onLoadDefinition(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        let definition = data as any;
        for (let channel of definition.channels)
        {
            this.channels[channel.name] = new DMXChannel(this.address + channel.dmx - 2);
        }
        for (let movement of definition.movements)
        {
            this.movements[movement.name] = new MovementDefinition(movement.name, movement.min, movement.max);
        }
    }
    
    render(data: number[]): void
    {
        this.renderRGB(data);
        this.renderStrobe(data);
        this.renderPanTilt(data);
    }

    private renderPanTilt(data: number[]): void
    {
        if (this.channels["Pan"] != null)
        {
            this.pan = this.getChannelValue("Pan", data) / 255.0;
        }
        else if (this.channels["PanCoarse"] != null)
        {
            this.pan = this.getChannelValue("PanCoarse", data) / 255.0 + this.getChannelValue("PanFine", data) / 65025.0;
        }

        if (this.channels["Tilt"] != null)
        {
            this.tilt = this.getChannelValue("Tilt", data) / 255.0;
        }
        else if (this.channels["TiltCoarse"] != null)
        {
            this.tilt = this.getChannelValue("TiltCoarse", data) / 255.0 + this.getChannelValue("TiltFine", data) / 65025.0;
        }
    }
    
    private renderRGB(data: number[]) : void
    {
        this.red = this.getChannelValue("Red", data);
        this.green = this.getChannelValue("Green", data);
        this.blue = this.getChannelValue("Blue", data);
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

    getChannelValue(name: string, data: number[]): number
    {
        if (this.channels[name] != null)
        {
            return data[this.channels[name].address];
        }
        else
        {
            return null;
        }
    }
    
    static invertColor(red: number, green: number, blue: number): string
    {
        red = 255 - red;
        green = 255 - green;
        blue = 255 - blue;

        return "rgb(" + red + ", " + green + ", " + blue + ")";
    }

    get panDegrees(): number
    {
        return DMXFixture.rebaseRange(this.pan, 0, 1, this.movements["Pan"].min, this.movements["Pan"].max);
    }

    get tiltDegrees(): number
    {
        return DMXFixture.rebaseRange(this.tilt, 0, 1, this.movements["Tilt"].min, this.movements["Tilt"].max);
    }

    static rebaseRange(value: number, oldMin: number, oldMax: number, newMin: number, newMax: number): number
    {
        let oldRange = oldMax - oldMin;
        let percentageOfOldRange = (value - oldMin) / oldRange;

        let newRange = newMax - newMin;
        let newValue = percentageOfOldRange * newRange + newMin;

        return newValue;
    }
}