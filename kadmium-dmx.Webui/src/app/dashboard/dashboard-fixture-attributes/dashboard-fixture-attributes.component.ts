import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AttributeUpdateMessage, FixtureStreamService } from "../../services/fixture-stream.service";
import { PreviewAttribute } from "../../preview-attribute";
import { PreviewFixture } from "../../preview-fixture";

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
			const data: AttributeUpdateMessage = {
				universeID: this.universeID,
				attributeName: attribute.name,
				attributeValue: trueValue,
				fixtureAddress: this.fixture.address
			};

			this.setValue.emit(data);
		}
	}

}
