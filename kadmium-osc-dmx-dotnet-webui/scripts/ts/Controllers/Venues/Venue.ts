import { UniverseData, UniverseViewModel } from "./Universe";
import { CollectionItemViewModel, NamedViewModel } from "../CollectionItem";
import * as ko from "knockout";

export interface VenueData
{
    name: string;
    universes: UniverseData[];
}

export class VenueViewModel extends CollectionItemViewModel<VenueData> implements NamedViewModel
{
    universes: KnockoutObservableArray<UniverseViewModel>;
    selectedUniverse: KnockoutObservable<UniverseViewModel>;
    constructor(name: string)
    {
        super(name, "Venues");
        this.universes = ko.observableArray<UniverseViewModel>();
        this.selectedUniverse = ko.validatedObservable<UniverseViewModel>(new UniverseViewModel());
    }

    editFixtures(item: UniverseViewModel): void
    {
        this.selectedUniverse(item);
        ($("#fixtures-edit") as any).modal("toggle");
    }

    addUniverse(): void
    {
        this.universes.push(new UniverseViewModel());
    }

    removeUniverse(item: UniverseViewModel): void
    {
        this.universes.remove(item);
    }

    async load(data: VenueData): Promise<void>
    {
        this.universes.removeAll();
        for (let universeItem of data.universes)
        {
            let universe = await UniverseViewModel.load(universeItem);
            this.universes.push(universe);
        }
    }

    serialize(): VenueData
    {
        let item: VenueData = {
            name: this.name(),
            universes: this.universes().map((value: UniverseViewModel, index: number, array: UniverseViewModel[]) => value.serialize())
        };
        return item;
    }
}