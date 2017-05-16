import { PreviewUniverse } from "app/preview-universe";
import { PreviewUniverseData } from "app/preview.service";

export class PreviewVenue
{
    public name: string;
    public universes: PreviewUniverse[];
    public activeUniverse: PreviewUniverse;

    constructor()
    {
        this.name = "";
        this.universes = [];
        this.activeUniverse = null;
    }

    public load(data: PreviewVenueData): void
    {
        this.name = data.name;
        this.universes = [];
        for (let universeData of data.universes)
        {
            this.universes.push(PreviewUniverse.load(universeData));
        }
        if (this.universes.length > 0)
        {
            this.activeUniverse = this.universes[0];
        }
    }
}

export interface PreviewVenueData
{
    name: string;
    universes: PreviewUniverseData[];
}