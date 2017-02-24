import { Component } from '@angular/core';
import { PreviewService } from "../preview-2d/preview.service";
import { FixturesLiveService, UniverseData, FixtureData, AttributeUpdateData, AttributeData } from "./fixtures-live.service";

@Component({
    selector: 'fixtures-live',
    template: require('./fixtures-live.component.html'),
    providers: [FixturesLiveService]
})
export class FixturesLiveComponent
{
    universes: UniverseData[];
    activeUniverse: UniverseData;

    activeFixture: FixtureData;

    constructor(private fixturesLiveService: FixturesLiveService)
    {
        fixturesLiveService.get()
            .then(data => 
            {
                this.universes = data;
                this.activeUniverse = this.universes[0];
                this.activeFixture = this.activeUniverse.fixtures[0];

                fixturesLiveService.subscribe(data => 
                {
                    for (let fixtureIndex in data.fixtures)
                    {
                        let remoteFixture = data.fixtures[fixtureIndex];
                        let localFixture = this.activeUniverse.fixtures[fixtureIndex];
                        for (let attributeIndex in remoteFixture.attributes)
                        {
                            let remoteAttribute = remoteFixture.attributes[attributeIndex];
                            let localAttribute = localFixture.attributes[attributeIndex];
                            localAttribute.value = remoteAttribute.value;
                        }
                    }
                });
            })
            .catch();
    }

    updateValue(universe: UniverseData, fixture: FixtureData, attribute: AttributeData, value: number): void
    {
        this.fixturesLiveService.set(universe.universeID, fixture.channel, attribute.name, value);
    }
}