import { FixtureDefinitionData, FixtureDefinitionViewModel, FixtureDefinitionKey } from "./FixtureDefinition";
import { CollectionViewModel } from "../Collection";
import * as ko from "knockout";

class FixtureDefinitionsViewModel extends CollectionViewModel<FixtureDefinitionData, FixtureDefinitionKey, FixtureDefinitionViewModel>
{
    filteredItems: KnockoutComputed<FixtureDefinitionViewModel[]>;
    manufacturerFilter: KnockoutObservable<string>;
    manufacturers: KnockoutComputed<string[]>;
    manufacturerFilterEnabled: KnockoutObservable<boolean>;

    constructor()
    {
        super("FixtureDefinitions",
            { manufacturer: "Default Manufacturer", name: "New Fixture Definition" },
            (key) => new FixtureDefinitionViewModel(key)
        );

        this.manufacturerFilter = ko.observable<string>();
        this.manufacturerFilterEnabled = ko.observable<boolean>();
        this.filteredItems = ko.computed<FixtureDefinitionViewModel[]>(() =>
        {
            if (!this.manufacturerFilterEnabled())
            {
                return this.items();
            }
            else
            {
                return ko.utils.arrayFilter<FixtureDefinitionViewModel>(
                    this.items(),
                    (item: FixtureDefinitionViewModel) => item.manufacturer() == this.manufacturerFilter()
                );
            }
        });

        this.manufacturers = ko.computed<string[]>(() =>
        {
            let mapped = this.items().map((value: FixtureDefinitionViewModel) => value.manufacturer());
            let filtered = mapped.filter((value: string, index: number, array: string[]) => array.indexOf(value) === index);
            return filtered;
        });
    }
}

let viewModel: FixtureDefinitionsViewModel = new FixtureDefinitionsViewModel();

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new FixtureDefinitionsViewModel();
    (window as any)["ko"] = ko;
    ko.applyBindings(viewModel);
});
