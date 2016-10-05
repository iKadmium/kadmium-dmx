import {MVC} from "./MVC";

export class ListLayout
{
    deleteItemID: string;

    constructor()
    {
        this.deleteItemID = "";
    }

    static Rename(original: string, newName: string): void
    {
        let item = ListLayout.Get(original);
        item.data("item-id", newName);
        item.children(".list-item-id").text(newName);
        item.children().children().each((index, elem) =>
        {
            $(elem).data("item-id", newName);
        });
    }

    static Add(name: string): void
    {
        let prototype = $(".list-item-prototype");
        let parent = prototype.parent();
        let item = prototype.clone(true);
        item.removeClass("list-item-prototype");
        item.data("item-id", name);
        item.children(".list-item-id").text(name);
        item.children().children().each((index, elem) =>
        {
            $(elem).data("item-id", name);
        });
        parent.append(item);

    }

    static Delete(name: string): void
    {
        let item = ListLayout.Get(name);
        item.remove();
    }

    static GetActionURL(action: string, id: string): string
    {
        let controller = $("#items").data("controller-url");
        return MVC.getActionURL(controller, action, id);
    }

    static Get(name: string): JQuery
    {
        return $("#items").children().not(".list-item-prototype").filter((index, element) => $(element).data("item-id") == name);
    }

    OnSave(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        ListLayout.Delete(this.deleteItemID);
        $("#modal-delete").prop("disabled", false);
        ($('#confirm-delete') as any).modal("hide");
    }

    OnLoad(): void
    {
        let that = this;

        $("#modal-delete").on("click", (e: JQueryEventObject) =>
        {
            $("#modal-delete").prop("disabled", true);
            jQuery.post(ListLayout.GetActionURL("Delete", that.deleteItemID), that.OnSave);
        });

        $("#confirm-delete").on("show.bs.modal", (e: JQueryEventObject) =>
        {
            this.deleteItemID = $(e.relatedTarget).data("item-id");
            $(".item-id").text(that.deleteItemID);
        });
    }
}

let layout = new ListLayout();
window.addEventListener("click", layout.OnLoad);