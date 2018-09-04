import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorColorWheelComponent } from './fixture-definition-editor-color-wheel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { MatIcon, MatToolbar, MatCard, MatCardContent, MatDialog } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { EditorService } from '../services/editor.service';
import { IFixtureDefinition } from 'api';
import { FixtureDefinitionTestHelpers } from '../test/fixture-definition-test-helpers';

describe('FixtureDefinitionEditorColorWheelComponent', () =>
{
	let component: FixtureDefinitionEditorColorWheelComponent;
	let fixture: ComponentFixture<FixtureDefinitionEditorColorWheelComponent>;
	let definition: IFixtureDefinition;

	beforeEach(async(() =>
	{
		definition = FixtureDefinitionTestHelpers.getColorWheelDefinition();

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionEditorColorWheelComponent,
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
		fixture = TestBed.createComponent(FixtureDefinitionEditorColorWheelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
