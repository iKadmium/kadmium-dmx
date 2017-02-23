import { Component } from '@angular/core';
import { PreviewService } from "../preview-2d/preview.service";
import { FixturesLiveService, UniverseData, FixtureData } from "./fixtures-live.service";

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
            })
            .catch();
    }
}