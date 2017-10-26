import { PreviewUniverseData } from "./preview.service";
import { PreviewFixture } from "./preview-fixture";
import { ActiveUniverse } from "api/models";

export class PreviewUniverse
{
    public name: string;
    public values: number[];
    public universeID: number;
    public fixtures: PreviewFixture[];

    constructor()
    {
        this.name = "";
        this.universeID = 0;
        this.fixtures = [];
        this.values = [].fill(0, 0, 512);
    }

    static load(data: ActiveUniverse): PreviewUniverse
    {
        let universe = new PreviewUniverse();
        universe.name = data.name;
        universe.universeID = data.universeID;
        universe.fixtures = data.fixtures.map(value => new PreviewFixture(value));
        return universe;
    }

}
