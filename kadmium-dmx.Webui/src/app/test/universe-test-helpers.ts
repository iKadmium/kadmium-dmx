import { UniverseData } from "api";
import { FixtureDataTestHelpers } from "./fixture-data-test-helpers";

export class UniverseTestHelpers
{
	public static getUniverse(universeID = 1, name = "Universe"): UniverseData
	{
		const universe: UniverseData = {
			universeID: universeID,
			name: name,
			fixtures: [
				FixtureDataTestHelpers.getFixtureData(1)
			]
		};
		return universe;
	}
}