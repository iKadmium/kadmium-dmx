import { IFixtureDefinition } from "api";
import { FixtureType } from "../enums/fixture-type.enum";
import { DMXChannelTestHelpers } from "./dmx-chanel-test-helpers";
import { ColorWheelTestHelpers } from "./color-wheel-test-helpers";

export class FixtureDefinitionTestHelpers
{
	public static getEmptyFixtureDefinition(model: string = "Model", manufacturer: string = "Manufacturer"): IFixtureDefinition
	{
		const definition: IFixtureDefinition = {
			skeleton: {
				manufacturer: manufacturer,
				model: model
			},
			fixtureType: FixtureType.LED,
			channels: [],
			colorWheel: [],
			movements: []
		};

		return definition;
	}

	public static getRGBFixtureDefinition(model: string = "Model", manufacturer: string = "Manufacturer"): IFixtureDefinition
	{
		const definition = FixtureDefinitionTestHelpers.getEmptyFixtureDefinition(model, manufacturer);
		definition.channels = [
			DMXChannelTestHelpers.getDefaultDMXChannel("Red", 1),
			DMXChannelTestHelpers.getDefaultDMXChannel("Green", 2),
			DMXChannelTestHelpers.getDefaultDMXChannel("Blue", 3)
		];

		return definition;
	}

	public static getColorWheelDefinition(model: string = "Model", manufacturer: string = "Manufacturer"): IFixtureDefinition
	{
		const definition = FixtureDefinitionTestHelpers.getEmptyFixtureDefinition(model, manufacturer);
		definition.channels = [
			DMXChannelTestHelpers.getDefaultDMXChannel("Master", 1),
			DMXChannelTestHelpers.getDefaultDMXChannel("ColorWheel", 2)
		];
		definition.colorWheel = [
			ColorWheelTestHelpers.getColorWheelEntry("Black")
		];
		return definition;
	}

	public static getMovingRGBFixtureDefinition(model: string = "Model", manufacturer: string = "Manufacturer"): IFixtureDefinition
	{
		const definition = FixtureDefinitionTestHelpers.getEmptyFixtureDefinition(model, manufacturer);
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