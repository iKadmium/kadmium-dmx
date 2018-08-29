import { ColorWheelEntry, RGB, IColorWheelEntryData } from "api";

export class ColorWheelTestHelpers
{
    public static getColorWheelEntry(name: string): IColorWheelEntryData
    {
        let entry: IColorWheelEntryData = {
            color: "#000000",
            name: name,
            min: 0,
            max: 255
        };
        return entry;
    }
}