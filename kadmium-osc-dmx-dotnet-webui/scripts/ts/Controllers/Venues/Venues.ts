import { VenueData, VenueViewModel } from "./Venue";
import { FixtureModelPicker } from "./Fixture";
import { CollectionViewModel } from "../Collection";
import { AsyncJSON } from "../AsyncJSON";
import { FixtureDefinitionKey } from "../FixtureDefinitions/FixtureDefinition";
import { MVC } from "../MVC";
import * as ko from "knockout";

class VenuesViewModel extends CollectionViewModel<VenueData, string, VenueViewModel>
{
    fixtureModelPicker: KnockoutObservable<FixtureModelPicker>;

    constructor()
    {
        super("Venues", "New Venue", (name) => new VenueViewModel(name));
        this.fixtureModelPicker = ko.observable<FixtureModelPicker>(FixtureModelPicker);
    }

    selectModel(): void
    {
        let key: FixtureDefinitionKey = {
            manufacturer: FixtureModelPicker.selectedManufacturer().name(),
            name: FixtureModelPicker.selectedModel()
        };
        this.selectedItem().selectedUniverse().selectedFixture().type().load(key);
        this.selectedItem().selectedUniverse().selectedFixture().updateType(key);
        ($("#modal-fixture-select") as any).modal("toggle");
    }
}

let viewModel: VenuesViewModel;

window.addEventListener("load", async (ev: Event) =>
{
    await FixtureModelPicker.loadFixtures();
    viewModel = new VenuesViewModel();
    ko.applyBindings(viewModel);
    window["ko"] = ko;
});
