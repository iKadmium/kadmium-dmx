import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { PreviewFixture } from "app/preview-fixture";
import { PreviewVenue } from "app/preview-venue";
import { PreviewAttribute } from "app/preview-attribute";
import { FixtureStreamService, AttributeUpdateMessage } from 'app/fixture-stream.service';

@Component({
	selector: 'app-dashboard-fixture-color',
	templateUrl: './dashboard-fixture-color.component.html',
	styleUrls: ['./dashboard-fixture-color.component.scss'],
	providers: [FixtureStreamService]
})
export class DashboardFixtureColorComponent implements OnInit, OnChanges, OnDestroy
{
	@Input() fixture: PreviewFixture;
	public attributes: PreviewAttribute[];
	public dmxAttributes: PreviewAttribute[];
	public nonDmxAttributes: PreviewAttribute[];
	public color: string = "";

	constructor(private fixtureStreamService: FixtureStreamService) 
	{
		this.attributes = [];
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
					this.attributes = Array.from(this.fixture.channelNameMap.values());
					this.dmxAttributes = this.attributes.filter(x => x.dmx);
					this.nonDmxAttributes = this.attributes.filter(x => !x.dmx);
				});
			}
		}
	}

	ngOnInit()
	{
	}

	ngOnDestroy(): void
	{
		this.fixtureStreamService.unsubscribe();
	}

	public setColor(color: string): void
	{
		let red = color.slice(1, 3);
		let green = color.slice(3, 5);
		let blue = color.slice(5, 7);
		let hsv = this.RGBtoHSV(parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16));
		console.log(`${hsv.h} ${hsv.s} ${hsv.v}`);

		let messages: AttributeUpdateMessage[] = [
			{
				attributeName: "Hue",
				attributeValue: hsv.h,
				fixtureID: this.fixture.id
			},
			{
				attributeName: "Saturation",
				attributeValue: hsv.s,
				fixtureID: this.fixture.id
			},
			{
				attributeName: "Brightness",
				attributeValue: hsv.v,
				fixtureID: this.fixture.id
			}
		]

		for (let message of messages)
		{
			this.fixtureStreamService.set(this.fixture.id, message.attributeName, message.attributeValue);
		}

	}

	public RGBtoHSV(r: number, g: number, b: number)
	{
		let max = Math.max(r, g, b), min = Math.min(r, g, b),
			d = max - min,
			h,
			s = (max === 0 ? 0 : d / max),
			v = max / 255;

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
