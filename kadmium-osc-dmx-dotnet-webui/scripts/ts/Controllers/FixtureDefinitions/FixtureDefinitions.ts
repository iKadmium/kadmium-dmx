import {FixtureDefinitionData, FixtureDefinitionViewModel} from "./FixtureDefinition";
import {CollectionViewModel} from "../Collection";
import * as ko from "knockout";

class FixtureDefinitionsViewModel extends CollectionViewModel<FixtureDefinitionData, FixtureDefinitionViewModel>
{
    constructor()
    {
        super("FixtureDefinitions", (name) => new FixtureDefinitionViewModel(name));
    }
}

let viewModel: FixtureDefinitionsViewModel = new FixtureDefinitionsViewModel();

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new FixtureDefinitionsViewModel();
    ko.applyBindings(viewModel);
});
