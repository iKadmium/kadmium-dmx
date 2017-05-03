import { Component, OnInit } from '@angular/core';
import { SACNTransmitterService, UniverseUpdateData } from "../sacn-transmitter.service";
import { NotificationsService } from "../notifications.service";
import { Title } from "@angular/platform-browser";
import { DMXChannel } from "../fixture-definition";
import { StatusCode } from "../status-code.enum";
import { PreviewUniverse } from "../preview-universe";
import { PreviewService } from "../preview.service";
import { PreviewFixture } from "../preview-fixture";

@Component({
    selector: 'app-preview2d',
    templateUrl: './preview2d.component.html',
    styleUrls: ['./preview2d.component.css'],
    providers: [SACNTransmitterService, PreviewService]
})
export class Preview2DComponent implements OnInit
{
    groups: string[];
    universes: PreviewUniverse[];
    activeUniverse: PreviewUniverse;
    universeNumberMap: Map<number, PreviewUniverse>;

    constructor(private previewService: PreviewService, private sacnTransmitterService: SACNTransmitterService, private notificationsService: NotificationsService, title: Title)
    {
        title.setTitle("2D Preview");
        this.universeNumberMap = new Map<number, PreviewUniverse>();
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            let result = await this.previewService.get();
            this.groups = result.groups;
            this.universes = [];

            for (let universeData of result.universes)
            {
                let universe = PreviewUniverse.load(universeData);
                this.universes.push(universe);
                this.universeNumberMap.set(universe.universeID, universe);
                for (let fixture of universe.fixtures)
                {
                    fixture.definition.channels = this.sortChannels(fixture.definition.channels);
                }
            }
            this.activeUniverse = this.universes[0];
            this.sacnTransmitterService.subscribe(this);
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
        }

    }

    updateUniverse(data: UniverseUpdateData): void
    {
        this.universeNumberMap.get(data.universeID).values = data.values;
    }

    sortChannels(channels: DMXChannel[]): DMXChannel[]
    {
        return channels
            .sort((a, b) => 
            {
                if (a.address != b.address)
                {
                    return a.address - b.address;
                }
                else
                {
                    return a.min - b.min;
                }
            });
    }

    getFixtures(universe: PreviewUniverse, group: string): PreviewFixture[]
    {
        return universe.fixtures.filter(x => x.group == group);
    }

}
