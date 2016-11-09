import {FixtureData, FixtureViewModel} from "./Fixture";
import {CollectionViewModel} from "../Collection";
import * as ko from "knockout";

class FixturesViewModel extends CollectionViewModel<FixtureData, FixtureViewModel>
{
    constructor()
    {
        super("Fixtures", (name) => new FixtureViewModel(name));
    }
}

let viewModel: FixturesViewModel = new FixturesViewModel();

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new FixturesViewModel();
    ko.applyBindings(viewModel);
});
