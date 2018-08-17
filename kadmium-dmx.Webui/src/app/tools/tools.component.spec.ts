import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsComponent } from './tools.component';
import { MockComponent } from '../../../node_modules/ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatIcon, MatToolbar, MatExpansionPanelTitle, MatExpansionPanelDescription, MatListOption, MatList, MatExpansionPanelHeader, MatSelectionList, MatDivider, MatCard, MatCardContent, MatExpansionPanel, MatFormField } from '../../../node_modules/@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';
import { NoopAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('ToolsComponent', () =>
{
	let component: ToolsComponent;
	let fixture: ComponentFixture<ToolsComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				ToolsComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatIcon),
				MockComponent(MatToolbar),
				MockComponent(BusyCardComponent),
				MockComponent(MatExpansionPanel),
				MockComponent(MatExpansionPanelTitle),
				MockComponent(MatExpansionPanelDescription),
				MockComponent(MatExpansionPanelHeader),
				MockComponent(MatList),
				MockComponent(MatListOption),
				MockComponent(MatSelectionList),
				MockComponent(MatDivider),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(MatFormField)
			],
			imports: [
				NoopAnimationsModule
			]
		});

		TestBed.overrideComponent(ToolsComponent, {
			set: {
				providers: [
					{
						provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
							getGroups: from([]),
							getSettings: from([])
						})
					}
				]
			}
		})

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(ToolsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
