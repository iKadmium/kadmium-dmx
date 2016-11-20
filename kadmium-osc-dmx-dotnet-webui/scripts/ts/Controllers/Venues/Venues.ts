import {VenueData, VenueViewModel} from "./Venue";
import {CollectionViewModel} from "../Collection";
import * as ko from "knockout";

class VenuesViewModel extends CollectionViewModel<VenueData, VenueViewModel>
{
    constructor()
    {
        super("Venues", (name) => new VenueViewModel(name));
    }
}

let viewModel: VenuesViewModel;

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new VenuesViewModel();
    ko.applyBindings(viewModel);
    window["ko"] = ko;
});
