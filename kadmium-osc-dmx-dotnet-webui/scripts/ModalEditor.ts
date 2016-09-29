// <reference path="jquery.d.ts" />

class ModalEditor
{
    staticElements: JQuery;
    jsonLoadURL: string;
    jsonSaveURL: string;
    itemID: string;
    validate: () => boolean;
    getObject: () => any;

    constructor(jsonDataURL: string, jsonSaveURL: string, getObject: () => any) {
        this.staticElements = $("#edit-form").find("input,select");
        this.jsonLoadURL = jsonDataURL;
        this.jsonSaveURL = jsonSaveURL;
        this.getObject = getObject;

        let that = this;

        $(".collection-remove").on("click", ModalEditor.collectionDefaultRemoveClick);

        $(".collection-add").each((index, elem) => {
            $(elem).on("click", (e) => {
                ModalEditor.collectionDefaultAdd($(elem).data("collection-id"))
            });
        });
        

        $("#modal-edit").on("show.bs.modal", (e: JQueryEventObject) => {
            that.itemID = $(e.relatedTarget).data("item-id") as string;
            $("#modal-result").hide();
            $("#modal-submit").show();
            $("#modal-cancel").text("Cancel");
            that.deleteCollectionItems();
            $(".item-id").text(that.itemID == null ? "new item" : that.itemID);
            $("#edit-form").hide();
            that.disableElements("Loading...");
            let url = that.jsonLoadURL + (that.itemID != null ? that.itemID : "");
            jQuery.ajax({
                dataType: "json",
                url: url,
                success: $.proxy(that.onLoad, that),
                error: that.onLoadError
            });
            
        });

        $("#modal-submit").on("click", (e: JQueryEventObject) => {
            $("#edit-form").hide();
            that.disableElements("Saving...");
            jQuery.ajax({
                type: "POST",
                url: jsonSaveURL + that.itemID,
                data: { jsonString: JSON.stringify(that.getObject()) },
                success: $.proxy(that.onSave, that),
                error: that.onSaveError
            });
        });
    }

    onSaveError(xhr: JQueryXHR, textStatus: string, errorThrown: string) {
        $("#modal-status").hide();
        $("#modal-result").removeClass("alert-success").addClass("alert-danger");
        $("#modal-result-text").text(errorThrown);
        $("#modal-result").show();
    }

    onLoadError(xhr: JQueryXHR, textStatus: string, errorThrown: string) {
        $("#modal-status").hide();
        $("#modal-result").removeClass("alert-success").addClass("alert-danger");
        $("#modal-result-text").text(errorThrown);
        $("#modal-result").show();
    }

    onSave(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        if (this.getObject().name != this.itemID)
        {
            listItemRename(this.itemID, this.getObject().name);
        }
        $("#modal-status").hide();
        $("#modal-result").removeClass("alert-danger").addClass("alert-success");
        $("#modal-result-text").text("Saved");
        $("#modal-result").show();
        $("#modal-submit").hide();
        $("#modal-cancel").prop("disabled", false);
        $("#modal-cancel").text("Close");
    }

    onLoad(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        for (let key in data) {
            let value: any = data[key];
            if (key == "$schema")
            {
                //do nothing
            }
            else if (Array.isArray(value))
            {
                for (let arrayItem of value)
                {
                    let row = ModalEditor.collectionDefaultAdd(key);
                    for (let arrayItemKey in arrayItem)
                    {
                        let arrayItemValue: any = arrayItem[arrayItemKey];
                        row.children().children("#" + arrayItemKey).val(arrayItemValue);
                    }
                }
            }
            else
            {
                $("#edit-form").find("#" + key).val(value);
            }
        }
        this.enableElements();
        $("#edit-form").show();
    }

    static collectionDefaultRemoveClick(event: JQueryEventObject): void
    {
        let row = this.parentElement.parentElement as HTMLTableRowElement;
        row.parentElement.removeChild(row);
    }

    static collectionDefaultAdd(name: string): JQuery {
        let newItem = $("#" + name + "-prototype").clone(true);
        newItem.removeClass("collection-prototype");
        newItem.addClass("collection-item");
        newItem.appendTo("#" + name);
        return newItem;
    }

    deleteCollectionItems()
    {
        $(".collection-item").remove();
    }

    disableElements(status: string)
    {
        $(".collection-item").children().children().prop("disabled", true);
        $(this.staticElements).prop("disabled", true);
        $(".collection-add").prop("disabled", true);
        $(".collection-remove").prop("disabled", true);
        $("#modal-cancel").prop("disabled", true);
        $("#modal-status").show();
        $("#modal-status-text").text(status);
    }

    enableElements()
    {
        $(".collection-item").children().children().prop("disabled", false);
        $(this.staticElements).prop("disabled", false);
        $(".collection-add").prop("disabled", false);
        $(".collection-remove").prop("disabled", false);
        $("#modal-cancel").prop("disabled", false);
        $("#modal-status").hide();
    }
}