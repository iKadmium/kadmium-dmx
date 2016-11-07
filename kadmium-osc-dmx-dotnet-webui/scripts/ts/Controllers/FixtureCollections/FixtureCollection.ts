import {CollectionItemViewModel, NamedViewModel} from "../CollectionItem";
import {FixtureViewModel, FixtureData} from "../Venues/Fixture.ts";
import * as ko from "knockout";

export interface FixtureCollectionData
{
    name: string;
    fixtures: FixtureData[];
}

export class FixtureCollectionViewModel extends CollectionItemViewModel<FixtureCollectionData> implements NamedViewModel
{
    name: KnockoutObservable<string>;
    fixtures: KnockoutObservableArray<FixtureViewModel>;

    selectedFixture: KnockoutObservable<FixtureViewModel>;

    addFixture()
    {
        this.fixtures.push(new FixtureViewModel());
    }

    removeFixture(item: FixtureViewModel)
    {
        this.fixtures.remove(item);
    }

    editOptions(item: FixtureViewModel): void
    {
        this.selectedFixture(item);
        ($("#options-edit") as any).modal("toggle");
    }

    constructor(name: string)
    {
        super(name, "FixtureCollections");
        this.name = ko.observable<string>(name);
        this.fixtures = ko.observableArray<FixtureViewModel>();
        this.selectedFixture = ko.observable<FixtureViewModel>(new FixtureViewModel());
    }

    load(data: FixtureCollectionData): void
    {
        this.name(data.name);
        this.fixtures.removeAll();
        for (let item of data.fixtures)
        {
            this.fixtures.push(FixtureViewModel.load(item));
        }
    }

    serialize(): FixtureCollectionData
    {
        let item: FixtureCollectionData = {
            name: this.name(),
            fixtures: this.fixtures().map((value: FixtureViewModel) => value.serialize())
        };
        return item;
    }
}