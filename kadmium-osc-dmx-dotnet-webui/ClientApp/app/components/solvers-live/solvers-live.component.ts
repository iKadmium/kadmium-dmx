import { Component, ViewChild } from '@angular/core';
import { PreviewService } from "../preview-2d/preview.service";
import { SolversLiveService, UniverseData, FixtureData, AttributeUpdateData, AttributeData } from "./solvers-live.service";
import { MessageBarComponent } from "../status/message-bar/message-bar.component";

@Component({
    selector: 'solvers-live',
    template: require('./solvers-live.component.html'),
    providers: [SolversLiveService]
})
export class SolversLiveComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    
    universes: UniverseData[];
    activeUniverse: UniverseData;

    activeFixture: FixtureData;

    constructor(private solversLiveService: SolversLiveService)
    {
        solversLiveService.get()
            .then(data => 
            {
                this.universes = data;
                if(this.universes.length == 0)
                {
                    this.messageBar.add("Error", "No Universes were received");
                }
                this.activeUniverse = this.universes[0] || null;
                if(this.activeUniverse != null)
                {
                    this.activeFixture = this.activeUniverse.fixtures[0];
                }

                solversLiveService.subscribe(data => 
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
            .catch(reason => this.messageBar.add("Error", reason));
    }

    updateValue(universe: UniverseData, fixture: FixtureData, attribute: AttributeData, value: number): void
    {
        this.solversLiveService.set(universe.universeID, fixture.channel, attribute.name, value);
    }
}