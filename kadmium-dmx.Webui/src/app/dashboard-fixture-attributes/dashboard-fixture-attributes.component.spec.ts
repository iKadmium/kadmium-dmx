import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardFixtureAttributesComponent } from './dashboard-fixture-attributes.component';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatSlider, MatListItem, MatList, MatDivider } from '@angular/material';

import { MockComponent } from "ng-mocks";
import { PreviewAttribute } from '../preview-attribute';
import { SimpleChanges } from '@angular/core';
import { ActiveAttribute } from 'api';
import { PreviewFixture } from '../preview-fixture';
import { AttributeUpdateMessage } from '../fixture-stream.service';

describe('DashboardFixtureAttributesComponent', () =>
{
	let component: DashboardFixtureAttributesComponent;
	let fixture: ComponentFixture<DashboardFixtureAttributesComponent>;
	let redData: ActiveAttribute;
	let fakeStrobeData: ActiveAttribute;

	beforeEach(async(() =>
	{
		redData = {
			name: "Red",
			dmxAddress: 1,
			controlled: true,
			displayMin: 0,
			displayMax: 255,
			dmx: true,
			value: 0
		};

		fakeStrobeData = {
			name: "Strobe",
			dmxAddress: null,
			controlled: false,
			displayMin: 0,
			displayMax: 255,
			dmx: false,
			value: 0
		};

		TestBed.configureTestingModule({
			declarations: [
				DashboardFixtureAttributesComponent,
				MockComponent(MatIcon),
				MockComponent(MatDivider),
				MockComponent(MatSlider),
				MockComponent(MatListItem),
				MockComponent(MatList)
			],
			imports: [FormsModule]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardFixtureAttributesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});

	it('should separate attributes into dmx and non-dmx', () =>
	{
		let red = new PreviewAttribute().load(redData);

		let strobe = new PreviewAttribute().load(fakeStrobeData);

		component.attributes = [
			red, strobe
		];

		let changes: SimpleChanges = {
			attributes: {
				currentValue: [red, strobe],
				firstChange: true,
				previousValue: null,
				isFirstChange: () => true
			}
		};

		component.ngOnChanges(changes);
		expect(component.dmxAttributes.length).toBe(1);
		expect(component.dmxAttributes[0]).toBe(red);
		expect(component.nonDmxAttributes.length).toBe(1);
		expect(component.nonDmxAttributes[0]).toBe(strobe);
	});

	it('should raise an event when an update is made', (done) =>
	{
		let red = new PreviewAttribute().load(redData);

		component.fixture = new PreviewFixture({
			address: 1,
			attributes: [],
			model: "",
			manufacturer: "",
			colorWheel: [],
			group: "",
			movementAxis: []
		});

		let value = 1;
		let dmxValue = value * 255;

		component.setValue.subscribe((generator: AttributeUpdateMessage) => 
		{
			expect(generator.attributeName).toBe(red.name);
			expect(generator.attributeValue).toBe(value);
			expect(generator.fixtureAddress).toBe(component.fixture.address);
			done();
		});

		component.updateValue(red, dmxValue.toString());
	});
});
