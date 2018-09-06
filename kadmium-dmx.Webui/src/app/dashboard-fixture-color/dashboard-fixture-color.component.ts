import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AttributeUpdateMessage, FixtureStreamService } from '../services/fixture-stream.service';
import { PreviewAttribute } from "../preview-attribute";
import { PreviewFixture } from "../preview-fixture";

@Component({
	selector: 'app-dashboard-fixture-color',
	templateUrl: './dashboard-fixture-color.component.html',
	styleUrls: ['./dashboard-fixture-color.component.scss'],
	providers: [FixtureStreamService]
})
export class DashboardFixtureColorComponent implements OnInit
{
	@Input() fixture: PreviewFixture;
	@Input() universeID: number;
	@Input() attributes: PreviewAttribute[];
	@Output() setValue = new EventEmitter<AttributeUpdateMessage>();
	public color = "";

	constructor()
	{
	}

	ngOnInit()
	{
	}

	public setColor(color: string): void
	{
		const red = color.slice(1, 3);
		const green = color.slice(3, 5);
		const blue = color.slice(5, 7);
		const hsv = this.RGBtoHSV(parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16));

		const messages: AttributeUpdateMessage[] = [
			{
				attributeName: "Hue",
				attributeValue: hsv.h,
				fixtureAddress: this.fixture.address,
				universeID: this.universeID
			},
			{
				attributeName: "Saturation",
				attributeValue: hsv.s,
				fixtureAddress: this.fixture.address,
				universeID: this.universeID
			},
			{
				attributeName: "Brightness",
				attributeValue: hsv.v,
				fixtureAddress: this.fixture.address,
				universeID: this.universeID
			}
		];

		for (const message of messages)
		{
			this.setValue.emit(message);
		}

	}

	public RGBtoHSV(r: number, g: number, b: number)
	{
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		const d = max - min;
		let h;
		const s = (max === 0 ? 0 : d / max);
		const v = max / 255;

		switch (max)
		{
			case min: h = 0; break;
			case r: h = (g - b) + d * (g < b ? 6 : 0); h /= 6 * d; break;
			case g: h = (b - r) + d * 2; h /= 6 * d; break;
			case b: h = (r - g) + d * 4; h /= 6 * d; break;
		}

		return {
			h: h,
			s: s,
			v: v
		};
	}


}
