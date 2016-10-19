import {GroupData, GroupViewModel} from "./Group";
import {CollectionViewModel} from "../Collection";
import * as ko from "knockout";

class GroupsViewModel extends CollectionViewModel<GroupData, GroupViewModel>
{
    constructor()
    {
        super("Groups", (name) => new GroupViewModel(name));
    }
}

let viewModel: GroupsViewModel;

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new GroupsViewModel();
    ko.applyBindings(viewModel);
});
