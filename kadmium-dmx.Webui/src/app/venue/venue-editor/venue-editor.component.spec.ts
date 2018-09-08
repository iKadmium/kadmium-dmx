import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle, MatFormField, MatIcon, MatToolbar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { APIClient } from 'api';
import { MessageService } from '../../services/message.service';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../../busy-card/component/busy-card.component';
import { UniverseEditorComponent } from '../universe-editor/universe-editor.component';
import { VenueEditorComponent } from './venue-editor.component';
import { SidenavToggleComponent } from 'app/sidenav-toggle/sidenav-toggle/sidenav-toggle.component';

describe('VenueEditorComponent', () =>
{
	let component: VenueEditorComponent;
	let fixture: ComponentFixture<VenueEditorComponent>;
	let route: any;

	beforeEach(async(() =>
	{
		route = {
			snapshot: {
				params: {
					id: "1"
				}
			}
		};

		TestBed.configureTestingModule({
			declarations: [
				VenueEditorComponent,
				MockComponent(MatToolbar),
				MockComponent(SidenavToggleComponent),
				MockComponent(MatIcon),
				MockComponent(BusyCardComponent),
				MockComponent(MatCard),
				MockComponent(MatCardTitle),
				MockComponent(MatCardContent),
				MockComponent(MatCardActions),
				MockComponent(MatFormField),
				MockComponent(UniverseEditorComponent)
			],
			imports: [
				FormsModule,
				RouterTestingModule
			]
		});

		TestBed.overrideComponent(VenueEditorComponent, {
			set: {
				providers: [
					{
						provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
							getGroups: from([[]]),
							getVenue: from([])
						})
					},
					{ provide: ActivatedRoute, useValue: route },
					{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) }
				]
			}
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueEditorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
