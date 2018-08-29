import { FixtureDefinitionSkeleton } from "api";

export class FixtureDefinitionSkeletonHelpers
{
    public static getFixtureDefinitionSkeleton(manufacturer = "Manufacturer", model = "Model"): FixtureDefinitionSkeleton
    {
        let skeleton: FixtureDefinitionSkeleton = {
            manufacturer: manufacturer,
            model: model
        };
        return skeleton;
    }
}