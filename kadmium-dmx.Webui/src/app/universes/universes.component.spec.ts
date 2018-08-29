import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversesComponent } from './universes.component';
import { MockComponent } from 'ng-mocks';
import { MatCard, MatCardTitle, MatCardContent, MatIcon, MatCardActions, MatDialog, MatDialogRef } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { UniverseEditorAddMultipleFixturesDialogComponent } from '../universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { from } from 'rxjs';
import { IVenueData } from 'api';
import { EditorService } from '../editor.service';
import { VenueTestHelper } from '../test/venue-test-helper';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UniversesComponent', () =>
{
	let component: UniversesComponent;
	let fixture: ComponentFixture<UniversesComponent>;
	let matDialogRef: jasmine.SpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>;
	let venue: IVenueData;

	beforeEach(async(() =>
	{
		matDialogRef = jasmine.createSpyObj<MatDialogRef<UniverseEditorAddMultipleFixturesDialogComponent>>({ afterClosed: from([]) });
		venue = VenueTestHelper.getVenue();

		TestBed.configureTestingModule({
			declarations: [
				UniversesComponent,
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),
				MockComponent(MatIcon)
			],
			imports: [
				RouterTestingModule,
				NoopAnimationsModule
			],
			providers: [
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: matDialogRef }) },
				{ provide: EditorService, useValue: jasmine.createSpyObj<EditorService<IVenueData>>({ getActive: venue }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(UniversesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
