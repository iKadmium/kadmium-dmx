import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorMovementsComponent } from './fixture-definition-editor-movements.component';
import { MockComponent } from 'ng-mocks';
import { MatIcon, MatToolbar, MatCard, MatCardContent, MatDialog } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { EditorService } from '../editor.service';
import { IFixtureDefinition } from 'api';
import { FixtureDefinitionTestHelpers } from '../test/fixture-definition-test-helpers';

describe('FixtureDefinitionEditorMovementsComponent', () =>
{
	let component: FixtureDefinitionEditorMovementsComponent;
	let fixture: ComponentFixture<FixtureDefinitionEditorMovementsComponent>;
	let definition: IFixtureDefinition;

	beforeEach(async(() =>
	{
		definition = FixtureDefinitionTestHelpers.getMovingRGBFixtureDefinition();

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionEditorMovementsComponent,
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(MatCard),
				MockComponent(MatCardContent)
			],
			imports: [
				NoopAnimationsModule
			],
			providers: [
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: from([]) }) },
				{ provide: EditorService, useValue: jasmine.createSpyObj<EditorService<IFixtureDefinition>>({ getActive: definition }) }
			]
		});
		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureDefinitionEditorMovementsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
