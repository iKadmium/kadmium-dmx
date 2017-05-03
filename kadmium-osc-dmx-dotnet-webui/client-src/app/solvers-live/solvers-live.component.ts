import { Component, OnInit } from '@angular/core';
import { UniverseData, FixtureData, SolversLiveService, AttributeData } from "../solvers-live.service";
import { Title } from "@angular/platform-browser";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";

@Component({
    selector: 'app-solvers-live',
    templateUrl: './solvers-live.component.html',
    styleUrls: ['./solvers-live.component.css'],
    providers: [SolversLiveService]
})
export class SolversLiveComponent implements OnInit
{
    universes: UniverseData[];
    activeUniverse: UniverseData;

    activeFixture: FixtureData;

    constructor(private solversLiveService: SolversLiveService, private notificationsService: NotificationsService, title: Title)
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
                this.notificationsService.add(StatusCode.Error, "No Universes were received");
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
            this.notificationsService.add(StatusCode.Error, reason)
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
