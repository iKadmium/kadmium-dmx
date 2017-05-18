import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PreviewFixture } from "app/preview-fixture";
import { PreviewVenue } from "app/preview-venue";
import { PreviewAttribute } from "app/preview-attribute";
import { AttributeUpdateMessage } from "app/solvers-live.service";

@Component({
    selector: 'app-dashboard-fixture',
    templateUrl: './dashboard-fixture.component.html',
    styleUrls: ['./dashboard-fixture.component.css']
})
export class DashboardFixtureComponent implements OnInit
{
    @Input() venue: PreviewVenue;
    @Output() update = new EventEmitter<AttributeUpdateMessage>();
    constructor() { }

    ngOnInit()
    {
    }

    public get attributes(): PreviewAttribute[]
    {
        return Array.from(this.venue.activeUniverse.activeFixture.channelNameMap.values());
    }

    public getStepSize(attribute: PreviewAttribute): number
    {
        if (attribute.dmx)
        {
            return 1;
        }
        else
        {
            return 0.01;
        }
    }

    public getMin(attribute: PreviewAttribute): number
    {
        if (attribute.dmx)
        {
            return attribute.dmxMin;
        }
        else
        {
            return 0;
        }
    }

    public getMax(attribute: PreviewAttribute): number
    {
        if (attribute.dmx)
        {
            return attribute.dmxMax;
        }
        else
        {
            return 1;
        }
    }

    public updateValue(attribute: PreviewAttribute, value: string): void
    {
        let trueValue: number;
        if (attribute.dmx)
        {
            attribute.dmxValue = parseInt(value);
            trueValue = attribute.value;
        }
        else
        {
            trueValue = parseFloat(value);
        }

        if (trueValue >= 0.0 && trueValue <= 1.0)
        {
            let data: AttributeUpdateMessage = {
                attributeName: attribute.name,
                attributeValue: trueValue,
                fixtureID: this.venue.activeUniverse.activeFixture.id
            };
            this.update.emit(data);
        }
    }
}
