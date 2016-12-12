import { VenueData, VenueViewModel } from "./Venue";
import { CollectionViewModel } from "../Collection";
import { AsyncJSON } from "../AsyncJSON";
import { FixtureDefinitionKey } from "../FixtureDefinitions/FixtureDefinition";
import { MVC } from "../MVC";
import * as ko from "knockout";

class ManufacturerViewModel
{
    models: KnockoutObservableArray<string>;
    name: KnockoutObservable<string>;

    constructor(name: string)
    {
        this.models = ko.observableArray<string>();
        this.name = ko.observable<string>(name);
    }
}

class VenuesViewModel extends CollectionViewModel<VenueData, string, VenueViewModel>
{
    selectedManufacturer: KnockoutObservable<ManufacturerViewModel>;
    selectedModel: KnockoutObservable<string>;
    manufacturers: KnockoutObservableArray<ManufacturerViewModel>;

    constructor()
    {
        super("Venues", "New Venue", (name) => new VenueViewModel(name));
        this.selectedManufacturer = ko.observable<ManufacturerViewModel>(new ManufacturerViewModel(""));
        this.manufacturers = ko.observableArray<ManufacturerViewModel>();
        this.selectedModel = ko.observable<string>();
    }

    selectModel(): void
    {
        let key: FixtureDefinitionKey = {
            manufacturer: this.selectedManufacturer().name(),
            name: this.selectedModel()
        };
        this.selectedItem().selectedUniverse().selectedFixture().type().load(key);
        this.selectedItem().selectedUniverse().selectedFixture().updateType(key);
        ($("#modal-fixture-select") as any).modal("toggle");
    }

    async loadFixtures(): Promise<void>
    {
        let url = MVC.getActionURL("FixtureDefinitions", "List");
        let data = await AsyncJSON.loadAsync<FixtureDefinitionKey[]>(url);
        for (let item of data)
        {
            let filtered = this.manufacturers().filter((value: ManufacturerViewModel) => value.name() == item.manufacturer);
            let manufacturer: ManufacturerViewModel;
            if (filtered.length == 1)
            {
                manufacturer = filtered[0];
            }
            else
            {
                manufacturer = new ManufacturerViewModel(item.manufacturer);
                this.manufacturers.push(manufacturer);
            }
            manufacturer.models.push(item.name);
        }
    }
}

let viewModel: VenuesViewModel;

window.addEventListener("load", async (ev: Event) =>
{
    viewModel = new VenuesViewModel();
    await viewModel.loadFixtures();
    ko.applyBindings(viewModel);
    window["ko"] = ko;
});
