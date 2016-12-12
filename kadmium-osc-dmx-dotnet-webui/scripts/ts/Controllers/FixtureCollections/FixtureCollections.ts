import {FixtureCollectionData, FixtureCollectionViewModel} from "./FixtureCollection";
import {CollectionViewModel} from "../Collection";
import * as ko from "knockout";

class FixtureCollectionsViewModel extends CollectionViewModel<FixtureCollectionData, string, FixtureCollectionViewModel>
{
    constructor()
    {
        super("FixtureCollections", "New Fixture Collection", (name) => new FixtureCollectionViewModel(name));
    }
}

let viewModel: FixtureCollectionsViewModel;

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new FixtureCollectionsViewModel();
    ko.applyBindings(viewModel);
});
