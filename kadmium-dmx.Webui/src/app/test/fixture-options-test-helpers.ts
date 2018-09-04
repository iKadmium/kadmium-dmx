import { FixtureOptions } from "api";

export class FixtureOptionsTestHelpers
{
	public static getDefaultOptions(): FixtureOptions
	{
		const options: FixtureOptions = {
			maxBrightness: 1,
			axisOptions: {}
		};
		return options;
	}

	public static getRestrictedAxis(name: string): FixtureOptions
	{
		const options: FixtureOptions = {
			maxBrightness: 1,
			axisOptions: {}
		};
		options.axisOptions[name] = {
			inverted: false,
			restrictions: {
				min: -90,
				max: 90
			}
		};
		return options;
	}
}