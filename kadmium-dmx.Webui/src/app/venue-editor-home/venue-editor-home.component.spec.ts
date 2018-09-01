import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardTitle, MatFormField, MatIcon, MatToolbar } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IVenueData } from 'api';
import { MockComponent } from 'ng-mocks';
import { EditorService } from '../editor.service';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { VenueTestHelper } from '../test/venue-test-helper';
import { UniversesComponent } from '../universes/universes.component';
import { VenueEditorHomeComponent } from './venue-editor-home.component';

describe('VenueEditorHomeComponent', () =>
{
	let component: VenueEditorHomeComponent;
	let fixture: ComponentFixture<VenueEditorHomeComponent>;
	let venue: IVenueData;

	beforeEach(async(() =>
	{
		venue = VenueTestHelper.getVenue();

		TestBed.configureTestingModule({
			declarations: [
				VenueEditorHomeComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatIcon),
				MockComponent(MatFormField),
				MockComponent(MatToolbar),
				MockComponent(MatFormField),
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardContent),

				MockComponent(UniversesComponent)
			],
			imports: [
				ReactiveFormsModule,
				NoopAnimationsModule
			],
			providers: [
				{
					provide: EditorService, useValue: jasmine.createSpyObj<EditorService<IVenueData>>({
						getActive: venue,
						isDirty: true
					})
				}
			]
		})
		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueEditorHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('component', () =>
	{
		it('should create', () =>
		{
			expect(component).toBeTruthy();
		});
	});

});
