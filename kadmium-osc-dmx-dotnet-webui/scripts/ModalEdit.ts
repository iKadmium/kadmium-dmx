// <reference path="jquery.d.ts" />

function modalEditOnLoad(): void
{
    $("#modal-edit").on("show.bs.modal", (e: JQueryEventObject) => {
        $(".item-id").text($(e.relatedTarget).data("item-id"));
    });
}

window.addEventListener("load", modalEditOnLoad);