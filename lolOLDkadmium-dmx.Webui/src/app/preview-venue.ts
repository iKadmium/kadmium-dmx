import { PreviewUniverse } from "./preview-universe";
import { PreviewUniverseData } from "./preview.service";
import { ActiveVenue } from "api/models";

export class PreviewVenue
{
    public name: string;
    public universes: PreviewUniverse[];

    constructor()
    {
        this.name = "";
        this.universes = [];
    }

    public load(data: ActiveVenue): PreviewVenue
    {
        this.name = data.name;
        this.universes = [];
        for (let universeData of data.universes)
        {
            this.universes.push(PreviewUniverse.load(universeData));
        }
        return this;
    }
}

export interface PreviewVenueData
{
    name: string;
    universes: PreviewUniverseData[];
}