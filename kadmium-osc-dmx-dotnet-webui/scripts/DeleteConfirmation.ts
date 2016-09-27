// <reference path="jquery.d.ts" />

function deleteConfirmationOnLoad(): void
{
    $("#confirm-delete").on("show.bs.modal", (e: JQueryEventObject) => {
        let deleteButton = $("#modal-delete")[0] as HTMLAnchorElement;
        deleteButton.href = $(e.relatedTarget).data("href");
        $(".item-id").text($(e.relatedTarget).data("item-id"));
    });
}

window.addEventListener("load", deleteConfirmationOnLoad);