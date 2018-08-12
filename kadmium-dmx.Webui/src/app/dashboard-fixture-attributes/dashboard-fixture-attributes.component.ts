import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { PreviewFixture } from "../preview-fixture";
import { PreviewVenue } from "../preview-venue";
import { PreviewAttribute } from "../preview-attribute";
import { AttributeUpdateMessage, FixtureStreamService } from "../fixture-stream.service";

@Component({
    selector: 'app-dashboard-fixture-attributes',
    templateUrl: './dashboard-fixture-attributes.component.html',
    styleUrls: ['./dashboard-fixture-attributes.component.css'],
    providers: [FixtureStreamService]
})
export class DashboardFixtureAttributesComponent implements OnInit, OnChanges
{
    @Input() universeID: number;
    @Input() fixture: PreviewFixture;
    @Input() attributes: PreviewAttribute[];
    public dmxAttributes: PreviewAttribute[];
    public nonDmxAttributes: PreviewAttribute[];
    private firstUpdate: boolean = true;

    @Output() setValue = new EventEmitter<AttributeUpdateMessage>();

    constructor()
    {
        this.attributes = [];
    }

    ngOnInit()
    {
    }

    ngOnChanges(changes: SimpleChanges): void
    {
        if (changes["attributes"] != null && changes["attributes"].currentValue != null)
        {
            this.dmxAttributes = changes["attributes"].currentValue.filter(x => x.dmx);
            this.nonDmxAttributes = changes["attributes"].currentValue.filter(x => !x.dmx);
        }
    }

    public updateValue(attribute: PreviewAttribute, value: string): void
    {
        let trueValue: number;
        attribute.displayValue = parseFloat(value);
        trueValue = attribute.value;

        if (trueValue >= 0.0 && trueValue <= 1.0)
        {
            let data: AttributeUpdateMessage = {
                universeID: this.universeID,
                attributeName: attribute.name,
                attributeValue: trueValue,
                fixtureAddress: this.fixture.address
            };

            this.setValue.emit(data);
        }
    }

}
