import {MVC} from "../../MVC";

import * as ko from "knockout";
import "ko.plus";

interface WebSocketMessage
{
    messageType: string;
}

interface AttributeUpdateMessage extends WebSocketMessage
{
    messageType: "attributeUpdate";
    universeID: number;
    fixtureChannel: number;
    attributeName: string;
    attributeValue: number;
}


interface AttributeUpdateData
{
    name: string;
    value: number;
}

interface FixtureUpdateData
{
    channel: number;
    attributes: AttributeUpdateData[];
}

interface UniverseUpdateMessage extends WebSocketMessage
{
    messageType: "universeUpdate";
    universeID: number;
    fixtures: FixtureUpdateData[];
}

interface AttributeData
{
    name: string;
    value: number;
}

interface FixtureData
{
    type: string;
    channel: number;
    attributes: AttributeData[];
}

interface UniverseData
{
    universeID: number;
    name: string;
    fixtures: FixtureData[];
}

interface InitMessage extends WebSocketMessage
{
    messageType: "init";
    universes: UniverseData[];
}

class AttributeViewModel
{
    name: KnockoutObservable<string>;
    value: KnockoutObservable<number>;
    parent: FixtureViewModel;

    constructor(name: string, parent: FixtureViewModel, value = 0.0)
    {
        this.name = ko.observable<string>(name);
        this.value = ko.observable<number>(value);
        this.parent = parent;
        this.value.subscribe((newValue: number) =>
        {
            this.parent.sendUpdate(this.name(), this.value());
        });
    }

    static load(data: AttributeData, parent: FixtureViewModel): AttributeViewModel
    {
        let attribute = new AttributeViewModel(data.name, parent, data.value);
        return attribute;
    }
}

class FixtureViewModel
{
    type: KnockoutObservable<string>;
    channel: KnockoutObservable<number>;
    name: KnockoutComputed<string>;
    attributes: KnockoutObservableArray<AttributeViewModel>;
    parent: UniverseViewModel;

    constructor(type: string, channel: number, parent: UniverseViewModel)
    {
        this.type = ko.observable<string>(type);
        this.channel = ko.observable<number>(channel);
        this.attributes = ko.observableArray<AttributeViewModel>();
        this.parent = parent;
        this.name = ko.computed<string>(() =>
        {
            return this.channel() + " (" + this.type() + ")";
        });
    }

    sendUpdate(attributeName: string, attributeValue: number): void
    {
        this.parent.sendUpdate(this.channel(), attributeName, attributeValue);
    }

    static load(data: FixtureData, parent: UniverseViewModel): FixtureViewModel
    {
        let fixture = new FixtureViewModel(data.type, data.channel, parent);
        for (let attributeData of data.attributes)
        {
            let attribute = AttributeViewModel.load(attributeData, fixture);
            fixture.attributes.push(attribute);
        }
        return fixture;
    }
}

class UniverseViewModel
{
    name: KnockoutObservable<string>;
    fixtures: KnockoutObservableArray<FixtureViewModel>;
    selectedFixture: KnockoutObservable<FixtureViewModel>;
    universeID: KnockoutObservable<number>;
    displayText: KnockoutComputed<string>;
    parent: FixturesViewModel;

    constructor(universeID: number, name: string, parent: FixturesViewModel)
    {
        this.parent = parent;
        this.universeID = ko.observable<number>(universeID);
        this.name = ko.observable<string>(name);
        this.fixtures = ko.observableArray<FixtureViewModel>();
        this.selectedFixture = ko.observable<FixtureViewModel>();
        this.displayText = ko.computed<string>(() =>
        {
            return this.universeID() + " - " + this.name();
        });
    }

    selectFixture(item: FixtureViewModel): void
    {
        this.selectedFixture(item);
    }

    sendUpdate(fixtureChannel: number, attributeName: string, attributeValue: number): void
    {
        this.parent.sendUpdate(this.universeID(), fixtureChannel, attributeName, attributeValue);
    }

    static load(data: UniverseData, parent: FixturesViewModel): UniverseViewModel
    {
        let universe = new UniverseViewModel(data.universeID, data.name, parent);
        for (let fixtureData of data.fixtures)
        {
            let fixture = FixtureViewModel.load(fixtureData, universe);
            universe.fixtures.splice(fixture.channel(), 0, fixture);
        }
        return universe;
    }
}

class FixturesViewModel
{
    webSocket: WebSocket;
    load: KoPlus.Command;
    selectedUniverse: KnockoutObservable<UniverseViewModel>;
    universes: KnockoutObservableArray<UniverseViewModel>;

    constructor()
    {
        this.universes = ko.observableArray<UniverseViewModel>();
        this.selectedUniverse = ko.observable<UniverseViewModel>();

        let url = MVC.getSocketURL("Fixtures");
        this.webSocket = new WebSocket(url);
        this.webSocket.addEventListener("message", (ev: MessageEvent) =>
        {
            let data = JSON.parse(ev.data) as WebSocketMessage;
            switch (data.messageType)
            {
                case "universeUpdate":
                    this.update(data as UniverseUpdateMessage);
                    break;
                case "init":
                    this.init(data as InitMessage);
                    break;
            }
        });

        this.load = ko.command(() => true);
    }

    selectUniverse(item: UniverseViewModel): void
    {
        this.selectedUniverse(item);
    }

    sendUpdate(universeID: number, fixtureChannel: number, attributeName: string, attributeValue: number): void
    {
        let obj: AttributeUpdateMessage = {
            messageType: "attributeUpdate",
            universeID: universeID,
            fixtureChannel: fixtureChannel,
            attributeName: attributeName,
            attributeValue: attributeValue
        };

        this.webSocket.send(JSON.stringify(obj));
    }

    update(universeUpdateMessage: UniverseUpdateMessage): void
    {
        let universe = this.universes().filter((value: UniverseViewModel) => value.universeID() == universeUpdateMessage.universeID)[0] as UniverseViewModel;
        for (let fixtureData of universeUpdateMessage.fixtures)
        {
            let fixture = universe.fixtures().filter((value: FixtureViewModel) => value.channel() == fixtureData.channel)[0] as FixtureViewModel;
            for (let attributeData of fixtureData.attributes)
            {
                let attribute = fixture.attributes().filter((value: AttributeViewModel) => value.name() == attributeData.name)[0];
                attribute.value(attributeData.value);
            }
        }
    }

    init(initMessage: InitMessage): void
    {
        this.universes.removeAll();
        for (let universeData of initMessage.universes)
        {
            let universe = UniverseViewModel.load(universeData, this);
            this.universes.splice(universe.universeID(), 0, universe);
        }
    }
}

let viewModel = new FixturesViewModel();

window.addEventListener("load", (ev: Event) =>
{
    viewModel = new FixturesViewModel();
    ko.applyBindings(viewModel);
});