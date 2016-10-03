// <reference path="jquery.d.ts" />

interface Named {
    name: string;
}

class ModalEditor<T extends Named>
{
    staticElements: JQuery;
    itemID: string;
    prototype: any;
    validate: () => boolean;
    
    constructor() {
        this.staticElements = $("#edit-form").find("input,select");
        let that = this;

        $(".collection-remove").on("click", (e: JQueryEventObject) => {
            let element = $(e.target).closest("tr");
            ModalEditor.collectionDefaultRemoveClick(element);
        });

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
            jQuery.ajax({
                dataType: "json",
                url: listGetActionURL("Load", that.itemID),
                success: $.proxy(that.onLoad, that),
                error: that.onLoadError
            });
        });

        $("#modal-submit").on("click", (e: JQueryEventObject) => {
            $("#edit-form").hide();
            that.disableElements("Saving...");
            jQuery.ajax({
                type: "POST",
                url: listGetActionURL("Save", that.itemID),
                data: { jsonString: JSON.stringify(that.getObject()) },
                success: $.proxy(that.onSave, that),
                error: that.onSaveError
            });
        });

        jQuery.ajax({
            dataType: "json",
            url: listGetActionURL("Schema", null),
            success: $.proxy(that.onSchema, that),
            error: that.onSchemaError
        });
    }

    getObject(): T
    {
        let obj: any = {};

        for (let key in this.prototype) {
            let value: any = this.prototype[key];
            if (key == "$schema") 
            {
                //do nothing
            }
            else if (Array.isArray(value)) 
            {
                let parentElement = $("#" + key);
                if (parentElement.prop("nodeName") == "TBODY")
                {
                    let rows = parentElement.children().not(".collection-prototype");
                    let collection: any[] = [];
                    obj[key] = collection;
                    for (let row of rows.toArray())
                    {
                        let properties = $(row).children().children().not("button").toArray();
                        let subObj: any = {};
                        for (let propertyElement of properties)
                        {
                            let propertyKey = $(propertyElement).attr("id");
                            if ($(propertyElement).prop("nodeName") == "SELECT")
                            {
                                subObj[propertyKey] = ModalEditor.getSelectElements($(propertyElement));
                            }
                            else
                            {
                                let propertyValue = $(propertyElement).val();
                                subObj[propertyKey] = propertyValue;
                            }
                        }
                        collection.push(subObj);
                    }
                }
                else if (parentElement.prop("nodeName") == "SELECT")
                {
                    obj[key] = ModalEditor.getSelectElements(parentElement);
                }
            }
            else
            {
                obj[key] = $("#edit-form").find("#" + key).val();
            }
        }

        return obj;
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

    onSchemaError(xhr: JQueryXHR, textStatus: string, errorThrown: string) {
        $("#modal-status").hide();
        $("#modal-result").removeClass("alert-success").addClass("alert-danger");
        $("#modal-result-text").text(errorThrown);
        $("#modal-result").show();
    }

    onSave(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        if (this.itemID == null)
        {
            listItemAdd(this.getObject().name);
        }
        else if (this.getObject().name != this.itemID)
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
                let arrayElement = $("#" + key);
                let array = value as string[];
                
                switch (arrayElement.prop("nodeName")) {
                    case "SELECT":
                        arrayElement.children().each((index, element) => {
                            let present = array.indexOf($(element).val()) != -1;
                            $(element).prop("selected", present);
                        });
                        break;
                    default:
                        for (let arrayItem of value) {
                            let row = ModalEditor.collectionDefaultAdd(key);
                            for (let arrayItemKey in arrayItem) {
                                let arrayItemValue: any = arrayItem[arrayItemKey];
                                row.children().children("#" + arrayItemKey).val(arrayItemValue);
                            }
                        }
                        break;
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

    onSchema(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        let properties: any;
        let obj: any = {};
        if (data.type == "array")
        {
            properties = data.items.properties;
        }
        else
        {
            properties = data.properties;
        }
        ModalEditor.createPrototype(obj, properties);
        this.prototype = obj;
    }

    static createPrototype(obj: any, properties: any) : any
    {
        for (let key in properties)
        {
            if (key != "$schema")
            {
                obj[key] = ModalEditor.createProperty(properties[key]);
            }
        }
        return obj;
    }

    static createProperty(definition: any): any
    {
        switch (definition.type)
        {
            case "string":
                return "";
            case "integer":
                return 0;
            case "array":
                return [ModalEditor.createProperty(definition.items)];
            case "object":
                return ModalEditor.createPrototype({}, definition.properties);
            default:
                return "";
        }
    }

    static collectionDefaultRemoveClick(row: JQuery): void
    {
        row.remove();
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