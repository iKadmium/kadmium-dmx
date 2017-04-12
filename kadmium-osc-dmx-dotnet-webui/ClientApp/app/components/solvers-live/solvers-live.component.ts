import { Component, OnInit } from '@angular/core';
import { PreviewService } from "../preview-2d/preview.service";
import { SolversLiveService, UniverseData, FixtureData, AttributeUpdateData, AttributeData } from "./solvers-live.service";
import { MessageBarComponent } from "../status/message-bar/message-bar.component";
import { Title } from "@angular/platform-browser";
import { MessageBarService } from "../status/message-bar/message-bar.service";

@Component({
    selector: 'solvers-live',
    template: require('./solvers-live.component.html'),
    providers: [SolversLiveService]
})
export class SolversLiveComponent implements OnInit
{
    universes: UniverseData[];
    activeUniverse: UniverseData;

    activeFixture: FixtureData;

    constructor(private solversLiveService: SolversLiveService, private messageBarService: MessageBarService, title: Title)
    {
        title.setTitle("Solvers Live");
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            this.universes = await this.solversLiveService.get();
            if (this.universes.length == 0)
            {
                this.messageBarService.add("Error", "No Universes were received");
            }
            else
            {
                this.activeUniverse = this.universes[0];
                this.activeFixture = this.activeUniverse.fixtures[0];
                this.solversLiveService.subscribe(this);
            }
        }
        catch (reason)
        {
            this.messageBarService.addError(reason)
        }
    }

    updateUniverse(data: UniverseData): void
    {
        let universe = this.universes.find(x => x.universeID == data.universeID);
        for (let fixtureIndex in data.fixtures)
        {
            let remoteFixture = data.fixtures[fixtureIndex];
            let localFixture = universe.fixtures[fixtureIndex];
            for (let attributeIndex in remoteFixture.attributes)
            {
                let remoteAttribute = remoteFixture.attributes[attributeIndex];
                let localAttribute = localFixture.attributes[attributeIndex];
                localAttribute.value = remoteAttribute.value;
            }
        }
    }

    updateValue(fixture: FixtureData, attribute: AttributeData, value: number | string): void
    {
        this.solversLiveService.set(fixture.id, attribute.name, parseFloat(value as string));
    }
}