// <reference path="jquery.d.ts" />
import {ListController} from "./ListController";
import {ListControllerData} from "./ListControllerData";
import { MVC } from "../../MVC";
import { ModalEditorCollection} from "./ModalEditorCollection";

export class ModalEditor<T extends ListControllerData>
{
    itemID: string;
    validate: () => boolean;
    controllerConstructor: () => T;

    constructor(controllerConstructor: () => T) 
    {
        let that = this;
        this.controllerConstructor = controllerConstructor;
        $(".collection-remove").on("click", (e: JQueryEventObject) =>
        {
            let element = $(e.target).closest("tr");
            ModalEditorCollection.itemRemove(element);
        });

        $(".collection-add").each((index, elem) =>
        {
            $(elem).on("click", (e) =>
            {
                ModalEditorCollection.itemAdd($(elem).data("collection-id"))
            });
        });
        
        $("#modal-edit").on("show.bs.modal", (e: JQueryEventObject) => {
            that.itemID = $(e.relatedTarget).data("item-id") as string;
            $("#modal-success").hide();
            $("#modal-error").hide();
            $("#modal-submit").show();
            $("#modal-back").hide();
            $("#modal-cancel").text("Cancel");
            ModalEditorCollection.itemsDelete();
            $(".item-id").text(that.itemID == null ? "new item" : that.itemID);
            $("#edit-form").hide();
            that.disableElements("Loading...");
            jQuery.ajax({
                dataType: "json",
                url: ListController.getActionURL("Load", that.itemID),
                success: $.proxy(that.onLoad, that),
                error: that.onLoadError
            });
        });

        $("#modal-submit").on("click", (e: JQueryEventObject) => {
            $("#edit-form").hide();
            $("#modal-submit").prop("disabled", true);
            $("#modal-error").hide();
            $("#modal-back").hide();
            that.disableElements("Saving...");
            jQuery.ajax({
                type: "POST",
                url: ListController.getActionURL("Save", that.itemID),
                data: { jsonString: JSON.stringify(ListControllerData.getObject<T>(that.controllerConstructor)) },
                success: $.proxy(that.onSave, that),
                error: that.onSaveError
            });
        });

        $("#modal-back").on("click", (e: JQueryEventObject) =>
        {
            $("#modal-error").hide();
            $("#modal-back").hide();
            $("#edit-form").show();
            $("#modal-submit").text("Save");
        });
    }
    
    static getSelectElements(selectBox: JQuery): any
    {
        if (selectBox.prop("multiple"))
        {
            let values: string[] = [];
            selectBox.children(":selected").each((index, element) => 
            {
                values.push($(element).val());
            });
            return values;
        }
        else
        {
            let value = selectBox.children(":selected").val();
            return value;
        }
    }

    onSaveError(xhr: JQueryXHR, textStatus: string, errorThrown: string) {
        $("#modal-status").hide();
        $("#modal-error-text").text(errorThrown);
        $("#modal-back").show();
        $("#modal-error").show();
        $("#modal-submit").prop("disabled", false);
        $("#modal-submit").text("Retry");
        $("#modal-cancel").prop("disabled", false);
    }

    onLoadError(xhr: JQueryXHR, textStatus: string, errorThrown: string) {
        $("#modal-status").hide();
        $("#modal-error-text").text(errorThrown);
        $("#modal-error").show();
    }
    
    onSave(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        let newName = $("#name").val();
        if (this.itemID == null)
        {
            ListController.add(newName);
        }
        else if (newName != this.itemID)
        {
            ListController.rename(this.itemID, newName);
        }
        $("#modal-status").hide();
        $("#modal-success-text").text("Saved");
        $("#modal-success").show();
        $("#modal-submit").hide();
        $("#modal-cancel").prop("disabled", false);
        $("#modal-cancel").text("Close");
    }

    onLoad(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        ListControllerData.fillData(data);
        this.enableElements();
        $("#edit-form").show();
    }
    
    disableElements(status: string)
    {
        $("#modal-cancel").prop("disabled", true);
        $("#modal-status").show();
        $("#modal-status-text").text(status);
    }

    enableElements()
    {
        $("#modal-cancel").prop("disabled", false);
        $("#modal-status").hide();
    }
}