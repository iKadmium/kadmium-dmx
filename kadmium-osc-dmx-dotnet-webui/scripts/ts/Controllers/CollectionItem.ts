import {MVC} from "./MVC";

import * as ko from "knockout";

export interface NamedViewModel
{
    originalName: KnockoutObservable<string>;
}

export abstract class CollectionItemViewModel<ViewModelDataType> implements NamedViewModel
{
    originalName: KnockoutObservable<string>;
    controllerName: string;
    constructor(name: string, controllerName: string)
    {
        this.originalName = ko.observable<string>(name);
        this.controllerName = controllerName;
    }

    openEditor()
    {
        ($("#modal-edit") as any).modal("toggle");
        let getURL = MVC.getActionURL(this.controllerName, "Load", this.originalName());
        let that = this;

        $.get(getURL, (data: any, textStatus: string, jqXHR: JQueryXHR) =>
        {
            let itemData = JSON.parse(data) as ViewModelDataType;
            that.load(itemData);
        });
    }

    onSave(): void
    {
        let newName = (this as any).name();
        $("#modal-status").hide();
        $("#modal-success-text").text("Saved");
        $("#modal-success").show();
        $("#modal-submit").hide();
        $("#modal-cancel").prop("disabled", false);
        $("#modal-cancel").text("Close");
        this.originalName(newName);
    }

    onSaveError(xhr: JQueryXHR, textStatus: string, errorThrown: string)
    {
        $("#modal-status").hide();
        $("#modal-error-text").text(errorThrown);
        $("#modal-back").show();
        $("#modal-error").show();
        $("#modal-submit").prop("disabled", false);
        $("#modal-submit").text("Retry");
        $("#modal-cancel").prop("disabled", false);
    }

    save(): void
    {
        $("#edit-form").hide();
        $("#modal-submit").prop("disabled", true);
        $("#modal-error").hide();
        $("#modal-back").hide();

        $("#modal-cancel").prop("disabled", true);
        $("#modal-status").show();
        $("#modal-status-text").text(status);

        let url = MVC.getActionURL(this.controllerName, "Save", this.originalName());
        jQuery.ajax({
            type: "POST",
            url: url,
            data: { jsonString: JSON.stringify(this.serialize()) },
            success: $.proxy(this.onSave, this),
            error: this.onSaveError
        });
    }

    abstract serialize(): ViewModelDataType;
    abstract load(data: ViewModelDataType): void;
}