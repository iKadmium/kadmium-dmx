import { CollectionItemViewModel } from "../CollectionItem";
import * as ko from "knockout";

export interface GroupData
{
    name: string;
}

export class GroupViewModel extends CollectionItemViewModel<GroupData, string>
{
    name: KnockoutObservable<string>;

    constructor(name: string)
    {
        let nameObservable = ko.observable<string>(name);
        let nameComputed = ko.computed<string>(() => nameObservable());
        super(nameComputed, nameComputed, "Groups");
        this.name = nameObservable;
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