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
        let data: FixtureData = {
            address: 1,
            group: group,
            type: type,
            options: options
        };
        return data;
    }
}