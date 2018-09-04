import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle, MatDialog, MatDialogRef, MatIcon } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IVenueData } from 'api';
// tslint:disable-next-line:max-line-length
import { UniverseEditorAddMultipleFixturesDialogComponent } from 'app/universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { EditorService } from '../services/editor.service';
import { VenueTestHelper } from '../test/venue-test-helper';
import { UniversesComponent } from './universes.component';

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
