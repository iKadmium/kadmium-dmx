import {OSCListenerData, OSCListenerViewModel} from "./OSCListener";
import {CollectionViewModel} from "../Collection";
import * as ko from "knockout";

class OSCListenersViewModel extends CollectionViewModel<OSCListenerData, OSCListenerViewModel>
{
    constructor()
    {
        super("OSCListeners", (name) => new OSCListenerViewModel(name));
    }
}

let viewModel: OSCListenersViewModel;

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new OSCListenersViewModel();
    ko.applyBindings(viewModel);
});
