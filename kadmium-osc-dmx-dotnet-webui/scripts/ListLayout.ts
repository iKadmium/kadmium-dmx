function listItemRename(original: string, newName: string): void
{
    let item = listItemGet(original);
    item.data("item-id", newName);
    item.children(".list-item-id").text(newName);
    item.children().children().each((index, elem) => {
        $(elem).data("item-id", newName);
    }); 
}

function listItemAdd(name: string): void
{
    let prototype = $(".list-item-prototype");
    let parent = prototype.parent();
    let item = prototype.clone(true);
    item.removeClass("list-item-prototype");
    item.data("item-id", name);
    item.children(".list-item-id").text(name);
    item.children().children().each((index, elem) => {
        $(elem).data("item-id", name);
    });
    parent.append(item);

}

function listItemDelete(name: string): void
{
    let item = listItemGet(name);
    item.remove();
}

function listGetActionURL(action: string, id: string) : string
{
    let controller = $("#items").data("controller-url");
    if (id == null)
    {
        return "/" + controller + "/" + action;
    }
    else
    {
        return "/" + controller + "/" + action + "/" + id;
    }
}

function listItemGet(name: string): JQuery
{
    return $("#items").children().not(".list-item-prototype").filter((index, element) => $(element).data("item-id") == name);
}