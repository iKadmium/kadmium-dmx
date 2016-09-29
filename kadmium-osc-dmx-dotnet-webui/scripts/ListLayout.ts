function listItemRename(original: string, newName: string)
{
    let item = listItemGet(original);
    item.data("item-id", newName);
    item.children(".list-item-id").text(newName);
    item.children().children().each((index, elem) => {
        $(elem).data("item-id", newName);
    }); 
}

function listItemAdd(name: string)
{

}

function listItemDelete(name: string)
{
    let item = listItemGet(name);
    item.remove();
}

function listItemGet(name: string)
{
    return $("#items").children().not(".list-item-prototype").filter("[data-item-id=\"" + name + "\"]");
}