import {CollectionItemViewModel, NamedViewModel} from "./CollectionItem";
import {StatusViewModel} from "./Status";
import {MVC} from "./MVC";

import * as ko from "knockout";
import "knockout.validation";

export class CollectionViewModel<ViewModelDataType, ViewModelType extends CollectionItemViewModel<ViewModelDataType>>
{
    items: KnockoutObservableArray<ViewModelType>;
    itemConstructor: (name: string) => ViewModelType;
    controllerName: string;
    selectedItem: KnockoutObservable<ViewModelType>;
    statusAlerts: KnockoutObservableArray<StatusViewModel>;

    private static instance: any;

    constructor(controllerName: string, itemConstructor: (name: string) => ViewModelType)
    {
        this.itemConstructor = itemConstructor;
        this.controllerName = controllerName;
        this.items = ko.observableArray<ViewModelType>();
        this.statusAlerts = ko.observableArray<StatusViewModel>();
        this.selectedItem = ko.validatedObservable<ViewModelType>(itemConstructor("new item"));
        let getURL = MVC.getActionURL(this.controllerName, "List", null);
        
        CollectionViewModel.instance = this;

        $(document).on('show.bs.modal', '.modal', (eventObject: JQueryEventObject, ...args: any[]) =>
        {
            let zIndex = 1040 + (10 * $('.modal:visible').length);
            $(eventObject.currentTarget).css('z-index', zIndex);
            setTimeout(function ()
            {
                $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        });

        $("#confirm-delete").on("hide.bs.modal", (eventObject: JQueryEventObject, ...args: any[]) =>
        {
            $("#modal-delete").prop("disabled", false);
        });
        
        $.get(getURL, (data: any, textStatus: string, jqXHR: JQueryXHR) =>
        {
            let itemNames = JSON.parse(data) as string[];
            for (let itemName of itemNames)
            {
                let item = itemConstructor(itemName);
                this.items.push(item);
            }
        });

        ko.validation.init({
            errorElementClass: 'has-error',
            errorMessageClass: 'help-block',
            decorateInputElement: true
        });

        ko.validation.rules["uniqueName"] = {
            validator: (value: string, item: ViewModelType) =>
            {
                let matchingNames = this.items()
                    .filter((filterItem: ViewModelType) => filterItem != item && filterItem.originalName() == value);
                return matchingNames.length == 0;
            },
            message: "Names must be unique"
        };
        ko.validation.registerExtenders();

        
    }

    static addStatusAlert(code: string, message: string): void
    {
        let alerts = CollectionViewModel.instance.statusAlerts as KnockoutObservableArray<StatusViewModel>;
        let status = new StatusViewModel("");
        status.message(message);
        status.code(code);
        alerts.push(status);
    }

    deleteAlert(item: StatusViewModel)
    {
        this.statusAlerts.remove(item);
    }

    delete(item: ViewModelType): void
    {
        this.selectedItem(item);
        
        ($("#confirm-delete") as any).modal("toggle");
    }

    deleteConfirm(): void
    {
        let url = MVC.getActionURL(this.controllerName, "Delete", this.selectedItem().originalName());
        $("#modal-delete").prop("disabled", true);
        jQuery.post(url, (data: any, textStatus: string, jqXHR: JQueryXHR) => 
        {
            this.items.remove(this.selectedItem());
            ($('#confirm-delete') as any).modal("hide");
        });
    }

    edit(item: ViewModelType): void
    {
        this.selectedItem(item);
        let editNode = $("#modal-edit")[0];
        $("#modal-success").hide();
        $("#modal-error").hide();
        $("#modal-submit").show();
        $("#modal-cancel").text("Cancel");
        $("#edit-form").hide();
        let url = MVC.getActionURL(this.controllerName, "Load", item.originalName());
        $("#modal-cancel").prop("disabled", true);
        item.statusText("Loading");
        item.isBusy(true);
        $.getJSON(url, (data: any, textStatus: string, jqXHR: JQueryXHR) =>
        {
            $("#modal-cancel").prop("disabled", false);
            $("#edit-form").show();
            item.isBusy(false);
        });

        item.openEditor();
    }

    cancel(item: ViewModelType): void
    {
        if (item.originalName() == "")
        {
            this.items.remove(item);
        }
    }

    addItem(): void
    {
        let item = this.itemConstructor("");
        this.items.push(item);
        this.edit(item);
        $("#modal-edit").on("hide.bs.modal", (eventObject: JQueryEventObject, ...args: any[]) =>
        {
            this.cancel(item);
        });
    }

    static getItems<T>(): KnockoutObservableArray<T>
    {
        return CollectionViewModel.instance.items as KnockoutObservableArray<T>;
    }
}