import {CollectionItemViewModel, NamedViewModel} from "../CollectionItem";
import * as ko from "knockout";

export interface OSCListenerData
{
    name: string;
    type: string;
    port: number;
}

export class OSCListenerViewModel extends CollectionItemViewModel<OSCListenerData> implements NamedViewModel
{
    name: KnockoutObservable<string>;
    port: KnockoutObservable<number>;

    constructor(name: string)
    {
        super(name, "OSCListeners");
        this.name = ko.observable<string>(name);
        this.port = ko.observable<number>(9000);
    }

    load(data: OSCListenerData): void
    {
        this.name(data.name);
        this.port(data.port);
    }

    serialize(): OSCListenerData
    {
        let item: OSCListenerData = {
            name: this.name(),
            port: parseInt(this.port() as any),
            type: "OSC"
        };
        return item;
    }
}