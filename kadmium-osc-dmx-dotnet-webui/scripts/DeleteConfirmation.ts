// <reference path="jquery.d.ts" />

let deleteItemID = "";

function onSave(data: any, textStatus: string, jqXHR: JQueryXHR)
{
    listItemDelete(deleteItemID);
    $("#modal-delete").prop("disabled", false);
    ($('#confirm-delete') as any).modal("hide");
}

function deleteConfirmationOnLoad(): void
{
    $("#modal-delete").on("click", (e: JQueryEventObject) => {
        $("#modal-delete").prop("disabled", true);
        jQuery.post(listGetActionURL("Delete", deleteItemID), onSave);
    });

    $("#confirm-delete").on("show.bs.modal", (e: JQueryEventObject) => {
        deleteItemID = $(e.relatedTarget).data("item-id");
        $(".item-id").text(deleteItemID);
    });
}

window.addEventListener("load", deleteConfirmationOnLoad);