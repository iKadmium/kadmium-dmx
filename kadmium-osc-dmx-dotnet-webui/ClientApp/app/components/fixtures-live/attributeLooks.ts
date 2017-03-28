import { Look } from "../look/look";

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