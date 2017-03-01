import { Component, OnInit } from '@angular/core';

import { MessageBarComponent } from "../status/message-bar/message-bar.component";

import { Group } from "../groups/group";
import { PreviewUniverse } from "./preview";
import { DMXChannel } from "../fixture-definitions/fixture-definition";
import { Universe } from "../venues/venue";

import { URLs } from "../../shared/url";

import { PreviewService } from "./preview.service";
import { Preview2DFixtureComponent } from "./preview-2d-fixture.component";
import { DMXPreviewChannel } from "./DMXPreviewChannel";
import { Title } from "@angular/platform-browser";
import { MessageBarService } from "../status/message-bar/message-bar.service";
import { SACNTransmitterService, UniverseUpdateData } from "../sacn-transmitter-live/sacn-transmitter.service";
import { DMXPreviewFixture } from "./DMXPreviewFixture";

@Component({
    selector: 'preview-2d',
    template: require('./preview-2d.component.html'),
    providers: [PreviewService, SACNTransmitterService]
})
export class Preview2DComponent implements OnInit
{
    groups: string[];
    universes: PreviewUniverse[];
    activeUniverse: PreviewUniverse;

    constructor(private previewService: PreviewService, private sacnTransmitterService: SACNTransmitterService, private messageBarService: MessageBarService, title: Title)
    {
        title.setTitle("2D Preview");
    }

    ngOnInit(): void
    {
        this.previewService
            .get()
            .then(value => 
            {
                this.groups = value.groups;
                this.universes = [];
                for (let universeData of value.universes)
                {
                    let universe = PreviewUniverse.load(universeData);
                    this.universes[universeData.universeID] = universe;
                    for (let fixture of universe.fixtures)
                    {
                        fixture.definition.channels = this.sortChannels(fixture.definition.channels);
                    }
                }
                this.activeUniverse = this.universes[Object.keys(this.universes)[0]];

                this.sacnTransmitterService.subscribe(this);
            })
            .catch(reason => this.messageBarService.add("Error", reason));
    }

    updateUniverse(data: UniverseUpdateData): void
    {
        this.universes[data.universeID].values = data.values;
    }

    sortChannels(channels: DMXChannel[]): DMXChannel[]
    {
        return channels
            .sort((a, b) => 
            {
                if (a.dmx != b.dmx)
                {
                    return a.dmx - b.dmx;
                }
                else
                {
                    return a.min - b.min;
                }
            });
    }

    getFixtures(universe: PreviewUniverse, group: string): DMXPreviewFixture[]
    {
        return universe.fixtures.filter(x => x.group == group);
    }
}