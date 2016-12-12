import { GroupData, GroupViewModel } from "./Group";
import { StatusViewModel, StatusTrackerViewModel } from "../Status";
import { CollectionViewModel } from "../Collection";
import { MVC } from "../MVC";

import * as ko from "knockout";

class GroupsViewModel extends CollectionViewModel<GroupData, string, GroupViewModel>
{
    constructor()
    {
        super("Groups", "New Group", (name) => new GroupViewModel(name));
    }

    reorder(): void
    {
        ($("#modal-reorder") as any).modal("show");
    }

    reorderSave(): void
    {
        ($("#modal-reorder") as any).modal("hide");
        let url = MVC.getActionURL("Groups", "SaveOrder");
        let data = {
            names: this.items().map((value: GroupViewModel) => value.key())
        };

        jQuery.ajax({
            type: "POST",
            url: url,
            data: { jsonString: JSON.stringify(data) },
            success: () =>
            {
                StatusTrackerViewModel.addStatusAlert("Success", "Successfully saved order");
            },
            error: (xhr: JQueryXHR, textStatus: string, errorThrown: string) => 
            {
                StatusTrackerViewModel.addStatusAlert("Error", errorThrown);
            }
        });
    }
}

let viewModel: GroupsViewModel;

window.addEventListener("load", (ev: Event) =>
{
    (window as any)["ko"] = ko;
    viewModel = new GroupsViewModel();
    ko.applyBindings(viewModel);
});
