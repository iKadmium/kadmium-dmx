import { PreviewUniverseData } from "./preview.service";
import { PreviewFixture } from "./preview-fixture";

export class PreviewUniverse implements PreviewUniverseData
{
    values: number[];

    constructor(public name: string, public universeID: number, public fixtures: PreviewFixture[])
    {
        this.values = [].fill(0, 0, 512);
    }

    static load(data: PreviewUniverseData): PreviewUniverse
    {
        let universe = new PreviewUniverse(data.name, data.universeID, data.fixtures.map(value => new PreviewFixture(value)));
        return universe;
    }

}
