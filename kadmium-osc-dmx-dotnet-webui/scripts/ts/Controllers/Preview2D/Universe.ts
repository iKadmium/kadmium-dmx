import {GroupViewModel} from "./Group";
import {FixtureData, FixtureViewModel} from "./Fixture";

import * as ko from "knockout";

export interface UniverseData
{
    name: string;
    fixtures: FixtureData[];
}

export class UniverseViewModel
{
    name: KnockoutObservable<string>;
    fixtures: KnockoutObservableArray<FixtureViewModel>;

    constructor(name: string)
    {
        this.fixtures = ko.observableArray<FixtureViewModel>();
        this.name = ko.observable<string>(name);
    }

    update(data: number[]): void
    {
        for (let fixture of this.fixtures())
        {
            fixture.update(data);
        }
    }

    static load(data: UniverseData, groups: GroupViewModel[]): UniverseViewModel
    {
        let universe = new UniverseViewModel(data.name);
        for (let fixtureData of data.fixtures)
        {
            let fixture = FixtureViewModel.load(fixtureData);
            universe.fixtures.push(fixture);
            let matchingGroups = groups.filter((value: GroupViewModel) => value.name() == fixtureData.group);
            for (let matchingGroup of matchingGroups)
            {
                matchingGroup.fixtures.push(fixture);
            }
        }
        return universe;
    }
}