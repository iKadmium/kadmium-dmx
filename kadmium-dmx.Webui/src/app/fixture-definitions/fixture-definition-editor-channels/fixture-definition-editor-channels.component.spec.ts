import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorChannelsComponent } from './fixture-definition-editor-channels.component';
import { MockComponent } from 'ng-mocks';
import { MatIcon, MatCard, MatCardContent, MatToolbar, MatDialog } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditorService } from '../../services/editor.service';
import { IFixtureDefinition, APIClient } from 'api';
import { FixtureType } from '../../enums/fixture-type.enum';
import { FixtureDefinitionTestHelpers } from '../../test/fixture-definition-test-helpers';
import { from } from 'rxjs';

describe('FixtureDefinitionEditorChannelsComponent', () =>
{
	let component: FixtureDefinitionEditorChannelsComponent;
	let fixture: ComponentFixture<FixtureDefinitionEditorChannelsComponent>;

	let definition: IFixtureDefinition;

	beforeEach(async(() =>
	{
		definition = FixtureDefinitionTestHelpers.getRGBFixtureDefinition();

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionEditorChannelsComponent,
				MockComponent(MatIcon),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(MatToolbar)
			],
			imports: [
				NoopAnimationsModule
			],
			providers: [
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) },
				{ provide: EditorService, useValue: jasmine.createSpyObj<EditorService<IFixtureDefinition>>({ getActive: definition }) }

			]
		});
		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureDefinitionEditorChannelsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
