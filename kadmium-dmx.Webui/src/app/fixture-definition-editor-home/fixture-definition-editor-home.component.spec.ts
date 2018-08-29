import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorHomeComponent } from './fixture-definition-editor-home.component';
import { MockComponent, MockDirective } from 'ng-mocks';
import { MatToolbar, MatIcon, MatSelect, MatOption, MatAutocomplete, MatAutocompleteTrigger, MatFormField, MatCard, MatCardContent, MatCardActions } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { from } from 'rxjs';
import { APIClient, IFixtureDefinition } from 'api';
import { EditorService } from '../editor.service';
import { FixtureDefinitionTestHelpers } from '../test/fixture-definition-test-helpers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FixtureDefinitionEditorHomeComponent', () =>
{
	let component: FixtureDefinitionEditorHomeComponent;
	let fixture: ComponentFixture<FixtureDefinitionEditorHomeComponent>;
	let definition: IFixtureDefinition;

	beforeEach(async(() =>
	{
		definition = FixtureDefinitionTestHelpers.getRGBFixtureDefinition();

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionEditorHomeComponent,
				MockComponent(MatToolbar),
				MockComponent(SidenavToggleComponent),
				MockComponent(MatIcon),
				MockComponent(MatSelect),
				MockComponent(MatOption),
				MockComponent(MatAutocomplete),
				MockComponent(MatFormField),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),

				MockDirective(MatAutocompleteTrigger),
			],
			imports: [
				ReactiveFormsModule,
				NoopAnimationsModule
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getFixtureDefinitions: from([[]]) }) },
				{ provide: EditorService, useValue: jasmine.createSpyObj<EditorService<IFixtureDefinition>>({ getActive: definition }) }
			]
		});
		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureDefinitionEditorHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
