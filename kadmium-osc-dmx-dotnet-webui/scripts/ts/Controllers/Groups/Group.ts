import {CollectionItemViewModel, NamedViewModel} from "../CollectionItem";
import * as ko from "knockout";

export interface GroupData
{
    name: string;
}

export class GroupViewModel extends CollectionItemViewModel<GroupData> implements NamedViewModel
{
    name: KnockoutObservable<string>;

    constructor(name: string)
    {
        super(name, "Groups");
        this.name = ko.observable<string>(name);
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