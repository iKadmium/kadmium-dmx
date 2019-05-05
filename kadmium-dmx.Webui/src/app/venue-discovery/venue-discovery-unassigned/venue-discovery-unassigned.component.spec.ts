import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle, MatDialog, MatDialogRef, MatFormField, MatIcon, MatSlider } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APIClient, UniverseData } from 'api';
import { EditorService } from 'app/services/editor.service';
import { FixtureDefinitionSkeletonHelpers } from 'app/test/fixture-definition-skeleton-helpers';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { MessageService } from '../../services/message.service';
// tslint:disable-next-line:max-line-length
import { AddFixtureDefinitionData, VenueDiscoveryAddFixtureDefinitionDialogComponent } from '../venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
import { VenueDiscoveryUnassignedComponent } from './venue-discovery-unassigned.component';

describe('VenueDiscoveryUnassignedComponent', () =>
{
	let component: VenueDiscoveryUnassignedComponent;
	let fixture: ComponentFixture<VenueDiscoveryUnassignedComponent>;
	let dialogSpy: jasmine.SpyObj<MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>>;
	let activeUniverse: UniverseData;

	beforeEach(async(() =>
	{
		dialogSpy = jasmine.createSpyObj<MatDialogRef<VenueDiscoveryAddFixtureDefinitionDialogComponent>>({ afterClosed: from([]) });
		activeUniverse = {
			fixtures: [],
			name: "universe",
			universeID: 1
		};

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
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: EditorService, useValue: jasmine.createSpyObj<EditorService<UniverseData>>({ getActive: activeUniverse }) }
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

		it('should add new fixtures to the venue', async (done: () => void) =>
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
			fixture.detectChanges();

			const skeleton = FixtureDefinitionSkeletonHelpers.getFixtureDefinitionSkeleton();
			const group = "group";

			matDialogMock.open.and.returnValue({
				afterClosed: () =>
				{
					return from([{
						group: group,
						fixture: skeleton
					}]);
				}
			});

			expect(activeUniverse.fixtures.length).toEqual(0);
			await component.addFixture(1);
			expect(activeUniverse.fixtures.length).toEqual(1);
			expect(activeUniverse.fixtures[0].options).toBeTruthy();
			expect(activeUniverse.fixtures[0].address).toEqual(1);
			expect(activeUniverse.fixtures[0].group).toEqual(group);
			expect(activeUniverse.fixtures[0].type).toEqual(skeleton);
			done();
		});
	});
});
