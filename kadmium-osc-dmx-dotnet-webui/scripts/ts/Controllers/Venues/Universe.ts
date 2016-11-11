import {TransmitterData, TransmitterViewModel} from "./Transmitter";
import {FixtureData, FixtureViewModel, FixtureDefinitionCache} from "./Fixture";
import {MVC} from "../MVC";
import {FixtureCollectionData} from "../FixtureCollections/FixtureCollection";
import * as ko from "knockout";

export interface UniverseData
{
    name: string;
    transmitters: TransmitterData[];
    fixtures: FixtureData[];
}

export class UniverseViewModel
{
    name: KnockoutObservable<string>;
    fixtures: KnockoutObservableArray<FixtureViewModel>;
    transmitters: KnockoutObservableArray<TransmitterViewModel>;

    selectedFixture: KnockoutObservable<FixtureViewModel>;

    constructor()
    {
        this.name = ko.observable<string>();
        this.fixtures = ko.observableArray<FixtureViewModel>();
        this.transmitters = ko.observableArray<TransmitterViewModel>();
        this.selectedFixture = ko.observable<FixtureViewModel>(new FixtureViewModel());
    }

    addTransmitter(): void
    {
        this.transmitters.push(new TransmitterViewModel());
    }

    removeTransmitter(item: TransmitterViewModel): void
    {
        this.transmitters.remove(item);
    }

    addFixture(): void
    {
        this.fixtures.push(new FixtureViewModel());
    }

    addFixtureCollection(eventData: UniverseViewModel, event: JQueryEventObject): void
    {
        let collectionName = $(event.currentTarget).text();
        let url = MVC.getActionURL("FixtureCollections", "Load", collectionName);
        $.get(url, (data: any, textStatus: string, jqXHR: JQueryXHR) =>
        {
            let collection = JSON.parse(data) as FixtureCollectionData;

            for (let fixtureData of collection.fixtures)
            {
                this.fixtures.push(FixtureViewModel.load(fixtureData));
            }
        });
    }

    removeFixture(item: FixtureViewModel): void
    {
        this.fixtures.remove(item);
    }

    editOptions(item: FixtureViewModel): void
    {
        this.selectedFixture(item);
        item.options().fixture(item);
        item.options().load();
        ($("#options-edit") as any).modal("toggle");
    }

    serialize(): UniverseData
    {
        let item: UniverseData = {
            name: this.name(),
            fixtures: this.fixtures().map((value: FixtureViewModel, index: number, array: FixtureViewModel[]) => value.serialize()),
            transmitters: this.transmitters().map((value: TransmitterViewModel, index: number, array: TransmitterViewModel[]) => value.serialize())
        };

        return item;
    }

    static load(data: UniverseData): UniverseViewModel
    {
        let universeViewModel = new UniverseViewModel();
        universeViewModel.name(data.name);
        for (let fixtureItem of data.fixtures)
        {
            let fixture = FixtureViewModel.load(fixtureItem);
            universeViewModel.fixtures.push(fixture);
        }
        for (let transmitterItem of data.transmitters)
        {
            let transmitter = TransmitterViewModel.load(transmitterItem);
            universeViewModel.transmitters.push(transmitter);
        }
        return universeViewModel;
    }
}