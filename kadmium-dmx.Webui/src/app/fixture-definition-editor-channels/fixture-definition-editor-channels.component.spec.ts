import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorChannelsComponent } from './fixture-definition-editor-channels.component';
import { MockComponent } from 'ng-mocks';
import { MatIcon, MatCard, MatCardContent, MatToolbar, MatDialog } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FixtureDefinitionEditorChannelsComponent', () =>
{
	let component: FixtureDefinitionEditorChannelsComponent;
	let fixture: ComponentFixture<FixtureDefinitionEditorChannelsComponent>;

	beforeEach(async(() =>
	{
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
				{ provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) }
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
