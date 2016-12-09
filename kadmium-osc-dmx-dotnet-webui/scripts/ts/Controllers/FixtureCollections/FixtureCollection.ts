import { CollectionItemViewModel, NamedViewModel } from "../CollectionItem";
import { CollectionViewModel } from "../Collection";
import { FixtureViewModel, FixtureData } from "../Venues/Fixture";
import * as ko from "knockout";
import * as validation from "knockout.validation";

export interface FixtureCollectionData
{
    name: string;
    fixtures: FixtureData[];
}

export class FixtureCollectionViewModel extends CollectionItemViewModel<FixtureCollectionData> implements NamedViewModel
{
    fixtures: KnockoutObservableArray<FixtureViewModel>;
    selectedFixture: KnockoutObservable<FixtureViewModel>;

    constructor(name: string)
    {
        super(name, "FixtureCollections");
        this.fixtures = ko.observableArray<FixtureViewModel>();
        this.selectedFixture = ko.validatedObservable<FixtureViewModel>(new FixtureViewModel());
    }

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

    async load(data: FixtureCollectionData): Promise<void>
    {
        this.name(data.name);
        this.fixtures.removeAll();
        for (let item of data.fixtures)
        {
            this.fixtures.push(await FixtureViewModel.load(item));
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