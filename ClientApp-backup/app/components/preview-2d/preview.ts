import { FixtureDefinition } from "../fixture-definitions/fixture-definition";
import { PreviewUniverseData, PreviewFixtureData } from "./preview.service";
import { DMXPreviewFixture } from "./DMXPreviewFixture";

export class PreviewUniverse implements PreviewUniverseData
{
    values: number[];

    constructor(public name: string, public universeID: number, public fixtures: DMXPreviewFixture[])
    {
        this.values = [].fill(0, 0, 512);
    }

    static load(data: PreviewUniverseData): PreviewUniverse
    {
        let universe = new PreviewUniverse(data.name, data.universeID, data.fixtures.map(value => new DMXPreviewFixture(value)));
        return universe;
    }

}

