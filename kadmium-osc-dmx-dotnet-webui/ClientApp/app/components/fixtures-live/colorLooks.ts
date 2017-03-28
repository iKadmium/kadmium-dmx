import { Look } from "../look/look";

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