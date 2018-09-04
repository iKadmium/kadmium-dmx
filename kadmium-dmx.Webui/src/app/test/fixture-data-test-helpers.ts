import { FixtureData } from "api";
import { FixtureOptionsTestHelpers } from "./fixture-options-test-helpers";
import { FixtureDefinitionSkeletonHelpers } from "./fixture-definition-skeleton-helpers";

export class FixtureDataTestHelpers
{
	public static getFixtureData(
		address = 1,
		group = "Group",
		type = FixtureDefinitionSkeletonHelpers.getFixtureDefinitionSkeleton(),
		options = FixtureOptionsTestHelpers.getDefaultOptions()): FixtureData
	{
		const data: FixtureData = {
			address: address,
			group: group,
			type: type,
			options: options
		};
		return data;
	}
}