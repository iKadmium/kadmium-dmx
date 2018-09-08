import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle, MatDialog, MatFormField, MatIcon, MatSlider, MatDialogRef } from '@angular/material';
import { APIClient } from 'api';
import { MessageService } from '../../services/message.service';
// tslint:disable-next-line:max-line-length
import { AddFixtureDefinitionData, VenueDiscoveryAddFixtureDefinitionDialogComponent } from '../venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
import { MockComponent } from 'ng-mocks';
import { VenueDiscoveryUnassignedComponent } from './venue-discovery-unassigned.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

describe('VenueDiscoveryUnassignedComponent', () =>
{
	let component: VenueDiscoveryUnassignedComponent;
	let fixture: ComponentFixture<VenueDiscoveryUnassignedComponent>;
	let dialogSpy: jasmine.SpyObj<MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>>;

	beforeEach(async(() =>
	{
		dialogSpy = jasmine.createSpyObj<MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>>({ afterClosed: from([]) });

		TestBed.configureTestingModule({
			declarations: [
				VenueDiscoveryUnassignedComponent,
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardContent),
				MockComponent(MatFormField),
				MockComponent(MatIcon),
				MockComponent(MatSlider),
				MockComponent(MatSlider)
			],
			imports: [
				FormsModule,
				NoopAnimationsModule
			],
			providers: [
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: dialogSpy }) },
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ postFixtureDefinition: null }) },
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueDiscoveryUnassignedComponent);
		component = fixture.componentInstance;
	});

	describe('component', () =>
	{
		it('should create', () =>
		{
			fixture.detectChanges();
			expect(component).toBeTruthy();
		});

		it('should select channels', () =>
		{
			component.start = 1;
			component.length = 10;
			fixture.detectChanges();
			expect(component.selectedChannels.length).toBe(0);
			const rows = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll(".channel-row") as NodeListOf<HTMLDivElement>);
			const buttons = rows.map(x => x.querySelector(".select-channel-button") as HTMLButtonElement);
			buttons.forEach(button => button.click());
			expect(component.selectedChannels.length).toBe(component.length);
		});
	});

	describe('constructor', () =>
	{
		it('should create channels', () =>
		{
			const start = 100;
			const length = 100;
			component.start = start;
			component.length = length;
			fixture.detectChanges();
			expect(component.channels[0].address).toBe(start);
			expect(component.channels.length).toBe(length);
			expect(component.channels[length - 1].address).toBe(start + length - 1);
			const sliders = (fixture.nativeElement as HTMLElement).querySelectorAll(".channel-value-slider");
			expect(sliders.length).toBe(length);
		});
	});

	describe('addFixtureDefinition', () =>
	{
		it('should open the VenueDiscoveryAddFixtureDefinitionDialogComponent dialog', () =>
		{
			const matDialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
			const start = 1;
			const length = 5;
			const venueName = "Venue name";
			component.start = start;
			component.length = length;
			component.venueName = venueName;
			fixture.detectChanges();
			const selectButtons = Array.from((fixture.nativeElement as HTMLElement)
				.querySelectorAll(".select-channel-button") as NodeListOf<HTMLButtonElement>);
			selectButtons.forEach(x => x.click());
			const expectedData: AddFixtureDefinitionData = {
				channels: component.selectedChannels,
				venue: venueName
			};
			fixture.detectChanges();
			const createNewFixtureButton = (fixture.nativeElement as HTMLElement).querySelector(".create-new-fixture-button") as HTMLButtonElement;
			createNewFixtureButton.click();
			expect(matDialogMock.open).toHaveBeenCalledWith(VenueDiscoveryAddFixtureDefinitionDialogComponent,
				jasmine.objectContaining({ data: expectedData }));

		});
	});
});
