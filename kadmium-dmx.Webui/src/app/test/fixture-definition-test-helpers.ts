import { IFixtureDefinition } from "api";
import { FixtureType } from "../enums/fixture-type.enum";
import { DMXChannelTestHelpers } from "./dmx-chanel-test-helpers";
import { ColorWheelTestHelpers } from "./color-wheel-test-helpers";

export class FixtureDefinitionTestHelpers
{
    public static getEmptyFixtureDefinition(): IFixtureDefinition
    {
        let definition: IFixtureDefinition = {
            skeleton: {
                manufacturer: "Manufacturer",
                model: "Model"
            },
            fixtureType: FixtureType.LED,
            channels: [],
            colorWheel: [],
            movements: []
        };

        return definition;
    }

    public static getRGBFixtureDefinition(): IFixtureDefinition
    {
        let definition = FixtureDefinitionTestHelpers.getEmptyFixtureDefinition();
        definition.channels = [
            DMXChannelTestHelpers.getDefaultDMXChannel("Red", 1),
            DMXChannelTestHelpers.getDefaultDMXChannel("Green", 2),
            DMXChannelTestHelpers.getDefaultDMXChannel("Blue", 3)
        ];

        return definition;
    }

    public static getColorWheelDefinition(): IFixtureDefinition
    {
        let definition = FixtureDefinitionTestHelpers.getEmptyFixtureDefinition();
        definition.channels = [
            DMXChannelTestHelpers.getDefaultDMXChannel("Master", 1),
            DMXChannelTestHelpers.getDefaultDMXChannel("ColorWheel", 2)
        ];
        definition.colorWheel = [
            ColorWheelTestHelpers.getColorWheelEntry("Black")
        ];
        return definition;
    }

    public static getMovingRGBFixtureDefinition(): IFixtureDefinition
    {
        let definition = FixtureDefinitionTestHelpers.getEmptyFixtureDefinition();
        definition.channels = [
            DMXChannelTestHelpers.getDefaultDMXChannel("Red", 1),
            DMXChannelTestHelpers.getDefaultDMXChannel("Green", 2),
            DMXChannelTestHelpers.getDefaultDMXChannel("Blue", 3)
        ];
        definition.movements = [
            { name: "Pan", min: -270, max: 270 }
        ];

        return definition;
    }
}