import { Group } from "app/group";

export interface LookSkeleton
{
    id: number;
    name: string;
}

export class Look implements LookSkeleton, LookData
{
    id: number;
    name: string;
    attributeLookSettings: AttributeLookSetting[];
    colorLookSettings: ColorLookSetting[];

    constructor()
    {
        this.id = 0;
        this.name = "";
        this.attributeLookSettings = [];
        this.colorLookSettings = [];
    }

    static load(data: LookData): Look
    {
        let look = new Look();
        look.id = data.id;
        look.name = data.name;
        for (let settingData of data.attributeLookSettings)
        {
            let setting = new AttributeLookSetting();
            Object.assign(setting, settingData);
            look.attributeLookSettings.push(setting);
        }
        for (let settingData of data.colorLookSettings)
        {
            let setting = new ColorLookSetting();
            Object.assign(setting, settingData);
            look.colorLookSettings.push(setting);
        }
        return look;
    }

    public static getColorLook(group: Group, color: string): ColorLookSetting
    {
        let setting = new ColorLookSetting();
        setting.color = color;
        setting.group = group.name;
        return setting;
    }

    public static getAttribute(group: Group, attribute: string, value: number): AttributeLookSetting
    {
        let setting = new AttributeLookSetting();
        setting.attributeName = attribute;
        setting.attributeValue = value;
        setting.group = group.name;
        return setting;
    }

    public static getLook(name: string, color: ColorLookSetting, attribute: AttributeLookSetting): Look
    {
        let look = new Look();
        look.colorLookSettings.push(color);
        look.attributeLookSettings.push(attribute);
        look.name = name;
        return look;
    }
}

export interface LookData
{
    id: number;
    name: string;
    attributeLookSettings: AttributeLookSettingData[];
    colorLookSettings: ColorLookSettingData[];
}

export interface LookSettingData
{
    id: number;
    group: string;
}

export interface ColorLookSettingData extends LookSettingData
{
    color: string;
}

export interface AttributeLookSettingData extends LookSettingData
{
    attributeName: string;
    attributeValue: number;
}

export abstract class LookSetting implements LookSettingData
{
    id: number;
    group: string;
    constructor()
    {
        this.id = 0;
        this.group = "";
    }
}

export class ColorLookSetting extends LookSetting
{
    color: string;
    constructor()
    {
        super();
        this.color = "#000000";
    }
}

export class AttributeLookSetting extends LookSetting
{
    attributeName: string;
    attributeValue: number;
    constructor()
    {
        super();
        this.attributeName = "";
        this.attributeValue = 0;
    }
}

export class AttributeLooks
{
    public static getStockLooks(): Look[]
    {
        let looks: Look[] = [];

        looks.push(Look.load({
            id: 0,
            name: "Not Strobing",
            attributeLookSettings: [{ id: 0, group: "", attributeName: "Strobe", attributeValue: 0.0 }],
            colorLookSettings: []
        }));

        looks.push(Look.load({
            id: 0,
            name: "Strobing",
            attributeLookSettings: [{ id: 0, group: "", attributeName: "Strobe", attributeValue: 1.0 }],
            colorLookSettings: []
        }));

        return looks;
    }
}

export class ColorLooks
{
    public static getStockLooks(): Look[]
    {
        let looks: Look[] = [];

        looks.push(Look.load({
            id: 0,
            name: "Black",
            attributeLookSettings: [],
            colorLookSettings: [{ id: 0, group: "", color: "#000000" }]
        }));

        looks.push(Look.load({
            id: 0,
            name: "Red",
            attributeLookSettings: [],
            colorLookSettings: [{ id: 0, group: "", color: "#FF0000" }]
        }));

        looks.push(Look.load({
            id: 0,
            name: "Green",
            attributeLookSettings: [],
            colorLookSettings: [{ id: 0, group: "", color: "#00FF00" }]
        }));

        looks.push(Look.load({
            id: 0,
            name: "Blue",
            attributeLookSettings: [],
            colorLookSettings: [{ id: 0, group: "", color: "#0000FF" }]
        }));

        looks.push(Look.load({
            id: 0,
            name: "White",
            attributeLookSettings: [],
            colorLookSettings: [{ id: 0, group: "", color: "#FFFFFF" }]
        }));

        return looks;
    }
}

export class MovementLooks
{
    public static getStockLooks(): Look[]
    {
        let looks: Look[] = [];

        looks.push(Look.load({
            id: 0,
            name: "Center",
            attributeLookSettings: [
                { id: 0, group: "", attributeName: "Pan", attributeValue: 0.5 },
                { id: 0, group: "", attributeName: "Tilt", attributeValue: 0.5 },
                { id: 0, group: "", attributeName: "RandomMove", attributeValue: 0.0 }
            ],
            colorLookSettings: []
        }));

        looks.push(Look.load({
            id: 0,
            name: "Up",
            attributeLookSettings: [
                { id: 0, group: "", attributeName: "Pan", attributeValue: 0.5 },
                { id: 0, group: "", attributeName: "Tilt", attributeValue: 0 },
                { id: 0, group: "", attributeName: "RandomMove", attributeValue: 0.0 }
            ],
            colorLookSettings: []
        }));

        looks.push(Look.load({
            id: 0,
            name: "Left",
            attributeLookSettings: [
                { id: 0, group: "", attributeName: "Pan", attributeValue: 0.0 },
                { id: 0, group: "", attributeName: "Tilt", attributeValue: 1 },
                { id: 0, group: "", attributeName: "RandomMove", attributeValue: 0.0 }
            ],
            colorLookSettings: []
        }));

        looks.push(Look.load({
            id: 0,
            name: "Forward",
            attributeLookSettings: [
                { id: 0, group: "", attributeName: "Pan", attributeValue: 0.5 },
                { id: 0, group: "", attributeName: "Tilt", attributeValue: 1 },
                { id: 0, group: "", attributeName: "RandomMove", attributeValue: 0.0 }
            ],
            colorLookSettings: []
        }));

        looks.push(Look.load({
            id: 0,
            name: "Right",
            attributeLookSettings: [
                { id: 0, group: "", attributeName: "Pan", attributeValue: 1 },
                { id: 0, group: "", attributeName: "Tilt", attributeValue: 1 },
                { id: 0, group: "", attributeName: "RandomMove", attributeValue: 0.0 }
            ],
            colorLookSettings: []
        }));

        looks.push(Look.load({
            id: 0,
            name: "Moving",
            attributeLookSettings: [
                { id: 0, group: "", attributeName: "Pan", attributeValue: 0.5 },
                { id: 0, group: "", attributeName: "Tilt", attributeValue: 0.5 },
                { id: 0, group: "", attributeName: "RandomMove", attributeValue: 1.0 }
            ],
            colorLookSettings: []
        }));

        return looks;
    }
}