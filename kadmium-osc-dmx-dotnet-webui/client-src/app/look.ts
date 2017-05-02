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