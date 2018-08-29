import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueEditorHomeComponent } from './venue-editor-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatIcon, MatFormField, MatToolbar, MatCard, MatCardContent, MatCardTitle } from '@angular/material';
import { UniversesComponent } from '../universes/universes.component';
import { EditorService } from '../editor.service';
import { IVenueData } from 'api';
import { VenueTestHelper } from '../test/venue-test-helper';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
				{ provide: EditorService, useValue: jasmine.createSpyObj<EditorService<IVenueData>>({ getActive: venue }) }
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

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
