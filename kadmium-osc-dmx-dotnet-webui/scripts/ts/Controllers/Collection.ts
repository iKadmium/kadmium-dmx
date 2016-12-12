import { CollectionItemViewModel } from "./CollectionItem";
import { StatusViewModel, StatusTrackerViewModel } from "./Status";
import { MVC } from "./MVC";
import { AsyncJSON } from "./AsyncJSON";

import * as ko from "knockout";
import "ko.plus";
import "knockout.validation";

export class CollectionViewModel<ViewModelDataType, ViewModelKeyType, ViewModelType extends CollectionItemViewModel<ViewModelDataType, ViewModelKeyType>>
{
    items: KnockoutObservableArray<ViewModelType>;
    itemConstructor: (key: ViewModelKeyType) => ViewModelType;
    controllerName: string;
    selectedItem: KnockoutObservable<ViewModelType>;
    statusTracker: KnockoutObservable<StatusTrackerViewModel>;
    defaultKey: ViewModelKeyType;

    load: KoPlus.Command;

    private static instance: any;

    constructor(controllerName: string, defaultKey: ViewModelKeyType, itemConstructor: (key: ViewModelKeyType) => ViewModelType) {
        this.itemConstructor = itemConstructor;
        this.controllerName = controllerName;
        this.items = ko.observableArray<ViewModelType>();
        this.selectedItem = ko.validatedObservable<ViewModelType>(itemConstructor(defaultKey));
        this.defaultKey = defaultKey;
        this.statusTracker = ko.observable<StatusTrackerViewModel>(new StatusTrackerViewModel());

        ko.validation.rules["uniqueName"] = {
            validator: (value: ViewModelKeyType, item: ViewModelType) => {
                let matchingNames = this.items()
                    .filter((filterItem: ViewModelType) => filterItem != item && filterItem.originalKey == value);
                return matchingNames.length == 0;
            },
            message: "Names must be unique"
        };

        CollectionViewModel.instance = this;
        CollectionViewModel.initialise();

        let getURL = MVC.getActionURL(this.controllerName, "List");
        AsyncJSON.loadAsync<ViewModelKeyType[]>(getURL).then((itemKeys: ViewModelKeyType[]) => {
            for (let itemKey of itemKeys) {
                let item = itemConstructor(itemKey);
                this.items.push(item);
            }
            this.load();
        });

        this.load = ko.command(() => true);


    }

    delete(item: ViewModelType): void {
        this.selectedItem(item);
        ($("#confirm-delete") as any).modal("toggle");
    }

    async deleteConfirm(): Promise<void> {
        let url = this.selectedItem().getDeleteURL();
        $("#modal-delete").prop("disabled", true);
        try {
            await AsyncJSON.saveAsync(url, {});
            this.items.remove(this.selectedItem());
            ($('#confirm-delete') as any).modal("hide");
            StatusTrackerViewModel.addStatusAlert("Success", "Successfully deleted " + this.selectedItem().displayName());
        }
        catch (err) {
            StatusTrackerViewModel.addStatusAlert("Error", err);
        }

    }

    edit(item: ViewModelType): void {
        this.selectedItem(item);
        $("#modal-error").hide();
        item.statusText("Loading");
        item.openEditor();
    }

    cancel(item: ViewModelType): void {
        if (item.originalKey == null) {
            this.items.remove(item);
        }
    }

    addItem(): void {
        let item = this.itemConstructor(this.defaultKey);
        this.items.push(item);
        this.edit(item);
        $("#modal-edit").on("hide.bs.modal", (eventObject: JQueryEventObject, ...args: any[]) => {
            this.cancel(item);
        });
    }

    static initialise(): void {
        $(document).on('show.bs.modal', '.modal', (eventObject: JQueryEventObject, ...args: any[]) => {
            let zIndex = 1040 + (10 * $('.modal:visible').length);
            $(eventObject.currentTarget).css('z-index', zIndex);
            setTimeout(function() {
                $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        });

        $(document).on('hidden.bs.modal', '.modal', function() {
            $('.modal:visible').length && $(document.body).addClass('modal-open');
        });

        $("#confirm-delete").on("hide.bs.modal", (eventObject: JQueryEventObject, ...args: any[]) => {
            $("#modal-delete").prop("disabled", false);
        });

        ko.validation.init({
            errorElementClass: 'has-error',
            errorMessageClass: 'help-block',
            decorateInputElement: true
        });


        ko.validation.registerExtenders();
    }

    static getItems<T>(): KnockoutObservableArray<T> {
        return CollectionViewModel.instance.items as KnockoutObservableArray<T>;
    }
}