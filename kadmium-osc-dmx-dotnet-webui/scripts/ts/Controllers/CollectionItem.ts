import { MVC } from "./MVC";
import { CollectionViewModel } from "./Collection";
import { StatusTrackerViewModel } from "./Status";
import { AsyncJSON } from "./AsyncJSON";

import * as ko from "knockout";

export interface NamedViewModel
{
    originalName: KnockoutObservable<string>;
}

export abstract class CollectionItemViewModel<ViewModelDataType> implements NamedViewModel
{
    originalName: KnockoutObservable<string>;
    name: KnockoutObservable<string>;
    controllerName: string;
    isBusy: KnockoutObservable<boolean>;
    statusText: KnockoutObservable<string>;

    constructor(name: string, controllerName: string)
    {
        this.originalName = ko.observable<string>(name);
        this.controllerName = controllerName;
        this.isBusy = ko.observable<boolean>();
        this.statusText = ko.observable<string>();
        this.name = ko.validatedObservable<string>(name).extend({
            required: true,
            uniqueName: this
        });
    }

    async openEditor(): Promise<void>
    {
        ($("#modal-edit") as any).modal("toggle");
        let getURL = MVC.getActionURL(this.controllerName, "Load", this.originalName());
        let that = this;
        let itemData = await AsyncJSON.loadAsync<ViewModelDataType>(getURL);
        this.load(itemData);
    }

    onSave(): void
    {
        let newName = this.name();
        $("#modal-cancel").prop("disabled", false);
        $("#modal-cancel").text("Close");
        this.originalName(newName);
        StatusTrackerViewModel.addStatusAlert("Success", "Successfully saved " + this.originalName());
        ($("#modal-edit") as any).modal("toggle");
    }

    onSaveError(xhr: JQueryXHR, textStatus: string, errorThrown: string)
    {
        let errorText = (errorThrown != "") ? errorThrown : "Unknown Error";
        $("#modal-error-text").text(errorText);
        $("#modal-error").show();
        $("#modal-submit").text("Retry");
        $("#modal-cancel").prop("disabled", false);
        this.isBusy(false);
    }

    save(): void
    {
        $("#modal-error").hide();

        $("#modal-cancel").prop("disabled", true);
        this.statusText("Saving");

        let url = MVC.getActionURL(this.controllerName, "Save", this.originalName());
        this.isBusy(true);
        jQuery.ajax({
            type: "POST",
            url: url,
            data: { jsonString: JSON.stringify(this.serialize()) },
            success: $.proxy(this.onSave, this),
            error: $.proxy(this.onSaveError, this)
        });
    }

    abstract serialize(): ViewModelDataType;
    abstract load(data: ViewModelDataType): void;
}