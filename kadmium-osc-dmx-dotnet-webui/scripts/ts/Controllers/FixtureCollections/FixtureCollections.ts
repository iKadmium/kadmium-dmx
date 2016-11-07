import {FixtureCollectionData, FixtureCollectionViewModel} from "./FixtureCollection";
import {CollectionViewModel} from "../Collection";
import * as ko from "knockout";

class FixtureCollectionsViewModel extends CollectionViewModel<FixtureCollectionData, FixtureCollectionViewModel>
{
    constructor()
    {
        super("FixtureCollections", (name) => new FixtureCollectionViewModel(name));
    }
}

let viewModel: FixtureCollectionsViewModel;

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new FixtureCollectionsViewModel();
    ko.applyBindings(viewModel);
});
