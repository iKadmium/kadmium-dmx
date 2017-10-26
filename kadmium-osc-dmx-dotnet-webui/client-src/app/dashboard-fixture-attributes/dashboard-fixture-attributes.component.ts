import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { PreviewFixture } from "app/preview-fixture";
import { PreviewVenue } from "app/preview-venue";
import { PreviewAttribute } from "app/preview-attribute";
import { AttributeUpdateMessage, FixtureStreamService } from "app/fixture-stream.service";

@Component({
    selector: 'app-dashboard-fixture-attributes',
    templateUrl: './dashboard-fixture-attributes.component.html',
    styleUrls: ['./dashboard-fixture-attributes.component.css'],
    providers: [FixtureStreamService]
})
export class DashboardFixtureAttributesComponent implements OnInit, OnChanges, OnDestroy
{
    @Input() fixture: PreviewFixture;

    constructor(private fixtureStreamService: FixtureStreamService)
    { }

    ngOnInit()
    {
    }

    ngOnChanges(changes: SimpleChanges): void
    {
        if (changes["fixture"] != null)
        {
            if (!changes["fixture"].firstChange)
            {
                this.fixtureStreamService.unsubscribe();
            }
            if (changes["fixture"].currentValue != null)
            {
                let fixture = changes["fixture"].currentValue as PreviewFixture;
                this.fixtureStreamService.subscribe(fixture.id, data => 
                {
                    for (let update of data)
                    {
                        let attribute = this.fixture.channelNameMap.get(update.name);
                        if (attribute.value != update.value)
                        {
                            attribute.value = update.value;
                        }
                    }
                });
            }
        }
    }

    ngOnDestroy(): void
    {
        this.fixtureStreamService.unsubscribe();
    }

    public get attributes(): PreviewAttribute[]
    {
        return Array.from(this.fixture.channelNameMap.values());
    }

    public updateValue(attribute: PreviewAttribute, value: string): void
    {
        let trueValue: number;
        attribute.displayValue = parseFloat(value);
        trueValue = attribute.value;

        if (trueValue >= 0.0 && trueValue <= 1.0)
        {
            let data: AttributeUpdateMessage = {
                attributeName: attribute.name,
                attributeValue: trueValue,
                fixtureID: this.fixture.id
            };

            this.fixtureStreamService.set(this.fixture.id, attribute.name, trueValue);
        }
    }
}
