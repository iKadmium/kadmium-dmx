import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseEditorComponent } from './universe-editor.component';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatIcon, MatToolbar, MatExpansionPanelTitle, MatExpansionPanel, MatSelect, MatOption, MatExpansionPanelActionRow, MatExpansionPanelDescription, MatExpansionPanelHeader, MatSnackBar, MatDialog } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { APIClient, FixtureDefinitionSkeleton, GroupData, UniverseData } from 'api';
import { from } from 'rxjs';
import { MessageService } from 'app/message.service';

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
					{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
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
