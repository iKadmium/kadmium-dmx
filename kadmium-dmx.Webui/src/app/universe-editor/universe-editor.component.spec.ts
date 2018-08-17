import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseEditorComponent } from './universe-editor.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { MatFormField, MatIcon, MatToolbar, MatExpansionPanelTitle, MatExpansionPanel, MatSelect, MatOption, MatExpansionPanelActionRow, MatExpansionPanelDescription, MatExpansionPanelHeader, MatSnackBar, MatDialog } from '../../../node_modules/@angular/material';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { APIClient, FixtureDefinition, FixtureDefinitionSkeleton, GroupData, UniverseData } from 'api';
import { from } from '../../../node_modules/rxjs';

describe('UniverseEditorComponent', () =>
{
	let component: UniverseEditorComponent;
	let fixture: ComponentFixture<UniverseEditorComponent>;
	let fixtureDefinitions: FixtureDefinitionSkeleton[];
	let universe: UniverseData;
	let groups: GroupData[];

	beforeEach(async(() =>
	{
		universe = {
			fixtures: [],
			universeID: 1,
			name: "Universe"
		};
		groups = [];

		fixtureDefinitions = [];
		TestBed.configureTestingModule({
			declarations: [
				UniverseEditorComponent,
				MockComponent(MatFormField),
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(MatExpansionPanelTitle),
				MockComponent(MatExpansionPanel),
				MockComponent(MatExpansionPanelActionRow),
				MockComponent(MatExpansionPanelDescription),
				MockComponent(MatExpansionPanelHeader),
				MockComponent(MatSelect),
				MockComponent(MatOption),
				MockComponent(MatFormField)
			],
			imports: [
				FormsModule
			]
		});

		TestBed.overrideComponent(UniverseEditorComponent, {
			set: {
				providers: [
					{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getFixtureDefinitions: from([fixtureDefinitions]) }) },
					{ provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) },
					{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) }
				]
			}
		})

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(UniverseEditorComponent);
		component = fixture.componentInstance;
		component.groups = groups;
		component.universe = universe;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
