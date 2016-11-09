import {CollectionItemViewModel, NamedViewModel} from "../CollectionItem";
import * as ko from "knockout";

export interface GroupData
{
    name: string;
}

export class GroupViewModel extends CollectionItemViewModel<GroupData> implements NamedViewModel
{
    constructor(name: string)
    {
        super(name, "Groups");
    }

    load(data: GroupData): void
    {
        this.name(data.name);
    }

    serialize(): GroupData
    {
        let item: GroupData = {
            name: this.name()
        };
        return item;
    }
}