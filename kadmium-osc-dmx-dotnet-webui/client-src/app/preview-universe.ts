import { PreviewUniverseData } from "./preview.service";
import { PreviewFixture } from "./preview-fixture";

export class PreviewUniverse
{
    public name: string;
    public values: number[];
    public universeID: number;
    public fixtures: PreviewFixture[];
    public activeFixture: PreviewFixture;

    constructor()
    {
        this.name = "";
        this.universeID = 0;
        this.fixtures = [];
        this.values = [].fill(0, 0, 512);
        this.activeFixture = null;
    }

    static load(data: PreviewUniverseData): PreviewUniverse
    {
        let universe = new PreviewUniverse();
        universe.name = data.name;
        universe.universeID = data.universeID;
        universe.fixtures = data.fixtures.map(value => new PreviewFixture(value));
        if (universe.fixtures.length > 0)
        {
            universe.activeFixture = universe.fixtures[0];
        }
        return universe;
    }

}
