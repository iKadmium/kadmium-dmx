import { Component, ViewChild, ViewChildren } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { Group } from "../groups/group";
import { PreviewUniverseData, PreviewFixtureData, UniverseUpdateData } from "./preview";
import { DMXChannel } from "../fixture-definitions/fixture-definition";
import { Universe } from "../venues/venue";

import { URLs } from "../../shared/url";

import { PreviewService } from "./preview.service";
import { Preview2DFixtureComponent } from "./preview-2d-fixture.component";
import { DMXPreviewChannel } from "./DMXPreviewChannel";

@Component({
    selector: 'preview-2d',
    template: require('./preview-2d.component.html'),
    providers: [PreviewService]
})
export class Preview2DComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;
    groups: string[];
    universes: Map<string, PreviewUniverseData>;
    universeData: number[];
    activeUniverse: PreviewUniverseData;

    constructor(previewService: PreviewService)
    {
        previewService
            .get()
            .then(value => 
            {
                this.groups = value.groups;
                this.universes = new Map<string, PreviewUniverseData>();
                for (let universe of value.universes)
                {
                    this.universes.set(universe.name, universe);
                    this.universeData = [];
                    for(let fixture of universe.fixtures)
                    {
                        fixture.definition.channels = this.sortChannels(fixture.definition.channels);
                    }
                }
                this.activeUniverse = this.universes.get(this.universes.keys().next().value);

                previewService.subscribe(data =>
                {
                    this.universeData = data.values;
                });
            })
            .catch(reason => this.messageBar.add("Error", reason));
    }

    sortChannels(channels: DMXChannel[]): DMXChannel[]
    {
        return channels
            .sort((a, b) => 
            {
                if(a.dmx != b.dmx)
                {
                    return a.dmx - b.dmx;
                }
                else
                {
                    return a.min - b.min;
                }
            });
    }

    getFixtures(universe: PreviewUniverseData, group: string): PreviewFixtureData[]
    {
        return universe.fixtures.filter(x => x.group == group);
    }
}