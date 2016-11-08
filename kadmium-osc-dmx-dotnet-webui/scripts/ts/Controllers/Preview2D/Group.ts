import {UniverseViewModel} from "./Universe";
import {FixtureData, FixtureViewModel} from "./Fixture";

import * as ko from "knockout";

export interface GroupData
{
    name: string;
    fixtures: FixtureData[];
}

export class GroupViewModel
{
    name: KnockoutObservable<string>;
    fixtures: KnockoutObservableArray<FixtureViewModel>;
    universes: KnockoutObservableArray<UniverseViewModel>;

    constructor(name: string)
    {
        this.name = ko.observable<string>(name);
        this.fixtures = ko.observableArray<FixtureViewModel>();
    }

    update(data: number[]): void
    {
        for (let fixture of this.fixtures())
        {
            fixture.update(data);
        }
    }
}