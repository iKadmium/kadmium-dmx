import { Look } from "../look/look";

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