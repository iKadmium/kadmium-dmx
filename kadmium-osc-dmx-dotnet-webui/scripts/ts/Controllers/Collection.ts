import {CollectionItemViewModel, NamedViewModel} from "./CollectionItem";
import {MVC} from "./MVC";

import * as ko from "knockout";

export class CollectionViewModel<ViewModelDataType, ViewModelType extends CollectionItemViewModel<ViewModelDataType>>
{
    items: KnockoutObservableArray<ViewModelType>;
    itemConstructor: (name: string) => ViewModelType;
    controllerName: string;
    selectedItem: KnockoutObservable<ViewModelType>;

    constructor(controllerName: string, itemConstructor: (name: string) => ViewModelType)
    {
        this.itemConstructor = itemConstructor;
        this.controllerName = controllerName;
        this.items = ko.observableArray<ViewModelType>();
        this.selectedItem = ko.observable<ViewModelType>(itemConstructor("new item"));
        let getURL = MVC.getActionURL(this.controllerName, "List", null);
        let that = this;

        $(document).on('show.bs.modal', '.modal', (eventObject: JQueryEventObject, ...args: any[]) =>
        {
            let zIndex = 1040 + (10 * $('.modal:visible').length);
            $(eventObject.currentTarget).css('z-index', zIndex);
            setTimeout(function ()
            {
                $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        });

        $.get(getURL, (data: any, textStatus: string, jqXHR: JQueryXHR) =>
        {
            let itemNames = JSON.parse(data) as string[];
            for (let itemName of itemNames)
            {
                let item = itemConstructor(itemName);
                that.items.push(item);
            }
        });
    }

    delete(item: ViewModelType): void
    {
        $("#modal-delete").on("click", (eventObject: JQueryEventObject, ...args: any[]) =>
        {
            let url = MVC.getActionURL(this.controllerName, "Delete", item.originalName());
            $("#modal-delete").prop("disabled", true);
            jQuery.post(url, (data: any, textStatus: string, jqXHR: JQueryXHR) => 
            {
                this.items.remove(item);
                $("#modal-delete").prop("disabled", false);
                ($('#confirm-delete') as any).modal("hide");
                $("#modal-delete").off("click");
                $("#modal-delete").prop("disabled", false);
            });

        });
        $("#confirm-delete").find(".item-id").text(item.originalName());
        ($("#confirm-delete") as any).modal("toggle");
    }

    edit(item: ViewModelType): void
    {
        this.selectedItem(item);
        let editNode = $("#modal-edit")[0];
        $("#modal-success").hide();
        $("#modal-error").hide();
        $("#modal-submit").show();
        $("#modal-back").hide();
        $("#modal-cancel").text("Cancel");
        $("#edit-form").hide();
        let url = MVC.getActionURL(this.controllerName, "Load", item.originalName());
        $("#modal-cancel").prop("disabled", true);
        $("#modal-status").show();
        $("#modal-status-text").text("Loading...");
        $.getJSON(url, (data: any, textStatus: string, jqXHR: JQueryXHR) =>
        {
            $("#modal-cancel").prop("disabled", false);
            $("#modal-status").hide();
            $("#edit-form").show();
        });

        item.openEditor();
    }

    addItem(): void
    {
        let item = this.itemConstructor("");
        this.items.push(item);
        this.edit(item);
    }
}