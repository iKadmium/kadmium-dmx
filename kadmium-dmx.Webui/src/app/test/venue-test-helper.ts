import { IVenueData } from "api";
import { UniverseTestHelpers } from "./universe-test-helpers";

export class VenueTestHelper
{
    public static getVenue(): IVenueData
    {
        let venue: IVenueData = {
            name: "Venue",
            universes: [UniverseTestHelpers.getUniverse()]
        };
        return venue;
    }
}