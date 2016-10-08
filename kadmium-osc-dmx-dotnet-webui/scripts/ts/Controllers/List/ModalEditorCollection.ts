export class ModalEditorCollection
{

    static itemRemove(row: JQuery): void
    {
        row.remove();
    }

    static itemAdd(name: string): JQuery
    {
        let newItem = $("#" + name + "-prototype").clone(true);
        newItem.removeClass("collection-prototype");
        newItem.addClass("collection-item");
        newItem.appendTo("#" + name);
        return newItem;
    }

    static itemsDelete()
    {
        $(".collection-item").remove();
    }
}