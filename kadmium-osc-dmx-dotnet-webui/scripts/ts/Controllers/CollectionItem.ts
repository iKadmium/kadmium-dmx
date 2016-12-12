import { MVC } from "./MVC";
import { CollectionViewModel } from "./Collection";
import { StatusTrackerViewModel } from "./Status";
import { AsyncJSON } from "./AsyncJSON";

import * as ko from "knockout";

export abstract class CollectionItemViewModel<ViewModelDataType, ViewModelKey>
{
    originalKey: ViewModelKey;
    key: KnockoutComputed<ViewModelKey>;
    controllerName: string;
    isBusy: KnockoutObservable<boolean>;
    statusText: KnockoutObservable<string>;
    displayName: KnockoutComputed<string>;

    constructor(key: KnockoutComputed<ViewModelKey>, displayName: KnockoutComputed<string>, controllerName: string)
    {
        this.originalKey = key();
        this.controllerName = controllerName;
        this.isBusy = ko.observable<boolean>();
        this.statusText = ko.observable<string>();
        this.key = key;
        this.displayName = displayName;
        /*this.key = ko.validatedObservable<ViewModelKey>(name).extend({
            required: true,
            uniqueName: this
        });*/
    }

    getLoadURL(): string
    {
        return MVC.getActionURL(this.controllerName, "Load", String(this.originalKey));
    }

    getSaveURL(): string
    {
        return MVC.getActionURL(this.controllerName, "Save", String(this.originalKey));
    }

    getDeleteURL(): string
    {
        return MVC.getActionURL(this.controllerName, "Delete", String(this.originalKey));
    }

    async openEditor(): Promise<void>
    {
        ($("#modal-edit") as any).modal("toggle");
        let itemData = await AsyncJSON.loadAsync<ViewModelDataType>(this.getLoadURL());
        this.load(itemData);
    }

    async save(): Promise<void>
    {
        $("#modal-error").hide();

        $("#modal-cancel").prop("disabled", true);
        this.statusText("Saving");

        let url = this.getSaveURL();
        this.isBusy(true);
        try
        {
            await AsyncJSON.saveAsync<ViewModelDataType>(this.getSaveURL(), this.serialize());
            let newName = this.key();
            $("#modal-cancel").prop("disabled", false);
            $("#modal-cancel").text("Close");
            this.originalKey = newName;
            StatusTrackerViewModel.addStatusAlert("Success", "Successfully saved " + this.displayName());
            ($("#modal-edit") as any).modal("toggle");
        }
        catch (err)
        {
            $("#modal-error-text").text(err);
            $("#modal-error").show();
            $("#modal-submit").text("Retry");
            $("#modal-cancel").prop("disabled", false);
            this.isBusy(false);
        }
    }

    abstract serialize(): ViewModelDataType;
    abstract load(data: ViewModelDataType): void;
}