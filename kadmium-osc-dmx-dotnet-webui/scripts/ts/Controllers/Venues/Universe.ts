import { FixtureData, FixtureViewModel, FixtureDefinitionCache } from "./Fixture";
import { MVC } from "../MVC";
import { FixtureCollectionData } from "../FixtureCollections/FixtureCollection";
import { AsyncJSON } from "../AsyncJSON";
import * as ko from "knockout";

export interface UniverseData
{
    name: string;
    universeID: number;
    fixtures: FixtureData[];
}

export class UniverseViewModel
{
    name: KnockoutObservable<string>;
    fixtures: KnockoutObservableArray<FixtureViewModel>;
    universeID: KnockoutObservable<number>;

    selectedFixture: KnockoutObservable<FixtureViewModel>;

    constructor()
    {
        this.name = ko.observable<string>();
        this.fixtures = ko.observableArray<FixtureViewModel>();
        this.universeID = ko.observable<number>();
        this.selectedFixture = ko.observable<FixtureViewModel>(new FixtureViewModel());
    }

    addFixture(): void
    {
        this.fixtures.push(new FixtureViewModel());
    }

    async addFixtureCollection(eventData: UniverseViewModel, event: JQueryEventObject): Promise<void>
    {
        let collectionName = $(event.currentTarget).text();
        let url = MVC.getActionURL("FixtureCollections", "Load", collectionName);
        let collection = await AsyncJSON.loadAsync<FixtureCollectionData>(url);
        for (let fixtureData of collection.fixtures)
        {
            this.fixtures.push(await FixtureViewModel.load(fixtureData));
        }
    }

    removeFixture(item: FixtureViewModel): void
    {
        this.fixtures.remove(item);
    }

    editOptions(item: FixtureViewModel): void
    {
        this.selectedFixture(item);
        ($("#options-edit") as any).modal("toggle");
    }

    serialize(): UniverseData
    {
        let item: UniverseData = {
            name: this.name(),
            fixtures: this.fixtures().map((value: FixtureViewModel, index: number, array: FixtureViewModel[]) => value.serialize()),
            universeID: parseInt(this.universeID() + "")
        };

        return item;
    }

    static async load(data: UniverseData): Promise<UniverseViewModel>
    {
        let universeViewModel = new UniverseViewModel();
        universeViewModel.name(data.name);
        for (let fixtureItem of data.fixtures)
        {
            let fixture = await FixtureViewModel.load(fixtureItem);
            universeViewModel.fixtures.push(fixture);
        }
        universeViewModel.universeID(data.universeID);
        return universeViewModel;
    }
}