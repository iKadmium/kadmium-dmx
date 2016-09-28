// <reference path="jquery.d.ts" />

class ModalEditor
{
    staticElements: HTMLElement[];
    jsonLoadURL: string;
    jsonSaveURL: string;
    itemID: string;
    validate: () => boolean;
    getObject: () => any;
    onDataReceived: (data: any) => void;

    constructor(jsonDataURL: string, jsonSaveURL: string, onDataReceived: (data: any) => void, validate: () => boolean, getObject: () => any, staticElements: HTMLElement[]) {
        this.staticElements = staticElements;
        this.jsonLoadURL = jsonDataURL;
        this.jsonSaveURL = jsonSaveURL;
        this.onDataReceived = onDataReceived;
        this.getObject = getObject;
        this.validate = validate;

        let that = this;
        
        $("#modal-edit").on("show.bs.modal", (e: JQueryEventObject) => {
            that.itemID = $(e.relatedTarget).data("item-id") as string;
            $(".item-id").text(that.itemID);
            that.deleteCollectionItems();
            that.disableElements("Loading...");
            jQuery.getJSON(that.jsonLoadURL + that.itemID, $.proxy(that.onLoad, that));
        });

        $("#modal-submit").on("click", (e: JQueryEventObject) => {
            if (that.validate()) {
                that.disableElements("Saving...");
                jQuery.post(jsonSaveURL + that.itemID,
                    { jsonString: JSON.stringify(that.getObject()) },
                    $.proxy(that.onSave, that)
                );
            }
        });
    }
    
    onSave(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        ($('#modal-edit') as any).modal("hide");
        if (this.getObject().name != this.itemID)
        {
            listItemRename(this.itemID, this.getObject().name);
        }
    }

    onLoad(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        this.onDataReceived(data);
        this.enableElements();
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
        $(staticElements).prop("disabled", true);
        $(".collection-add").prop("disabled", true);
        $(".collection-remove").prop("disabled", true);
        $("#modal-submit").prop("disabled", true);
        $("#modal-cancel").prop("disabled", true);
        $("#footer-status").show();
        $("#footer-status-text").text(status);
    }

    enableElements()
    {
        $(".collection-item").children().children().prop("disabled", false);
        $(staticElements).prop("disabled", false);
        $(".collection-add").prop("disabled", false);
        $(".collection-remove").prop("disabled", false);
        $("#modal-submit").prop("disabled", false);
        $("#modal-cancel").prop("disabled", false);
        $("#footer-status").hide();
    }
}