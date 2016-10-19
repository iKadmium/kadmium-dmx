import {SACNTransmitterData, SACNTransmitterViewModel} from "./SACNTransmitter";
import {CollectionViewModel} from "../Collection";
import * as ko from "knockout";

class SACNTransmittersViewModel extends CollectionViewModel<SACNTransmitterData, SACNTransmitterViewModel>
{
    constructor()
    {
        super("SACNTransmitters", (name) => new SACNTransmitterViewModel(name));
    }
}

let viewModel: SACNTransmittersViewModel;

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new SACNTransmittersViewModel();
    ko.applyBindings(viewModel);
});
