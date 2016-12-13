import { FixtureCollectionData, FixtureCollectionViewModel } from "./FixtureCollection";
import { CollectionViewModel } from "../Collection";
import { FixtureModelPicker } from "../Venues/Fixture";
import { FixtureDefinitionKey } from "../FixtureDefinitions/FixtureDefinition";
import * as ko from "knockout";

class FixtureCollectionsViewModel extends CollectionViewModel<FixtureCollectionData, string, FixtureCollectionViewModel>
{
    fixtureModelPicker: KnockoutObservable<FixtureModelPicker>;

    constructor() {
        super("FixtureCollections", "New Fixture Collection", (name) => new FixtureCollectionViewModel(name));
        this.fixtureModelPicker = ko.observable<FixtureModelPicker>(FixtureModelPicker);
    }

    selectModel(): void {
        let key: FixtureDefinitionKey = {
            manufacturer: FixtureModelPicker.selectedManufacturer().name(),
            name: FixtureModelPicker.selectedModel()
        };
        this.selectedItem().selectedFixture().type().load(key);
        this.selectedItem().selectedFixture().updateType(key);
        ($("#modal-fixture-select") as any).modal("toggle");
    }
}

let viewModel: FixtureCollectionsViewModel;

window.addEventListener("load", async (ev: Event) => {
    await FixtureModelPicker.loadFixtures();
    viewModel = new FixtureCollectionsViewModel();
    ko.applyBindings(viewModel);
});
