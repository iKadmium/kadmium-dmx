import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatCard, MatCardContent, MatToolbar } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ActiveUniverse, APIClient } from 'api';
import { MessageService } from '../services/message.service';
import { UniverseStreamService } from '../services/universe-stream.service';
import { MockComponent } from 'ng-mocks';
import { from, Observable, Subscription } from 'rxjs';
import { DashboardFixturePreviewComponent } from '../dashboard-fixture-preview/dashboard-fixture-preview.component';
import { PreviewUniverseCell } from '../preview-universe-cell';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { DashboardUniverseComponent } from './dashboard-universe.component';

describe('DashboardUniverseComponent', () =>
{
	let component: DashboardUniverseComponent;
	let fixture: ComponentFixture<DashboardUniverseComponent>;

	let universeData: ActiveUniverse;
	let subscription: jasmine.SpyObj<Subscription>;
	let observable: jasmine.SpyObj<Observable<Uint8Array>>;

	beforeEach(async(() =>
	{
		subscription = jasmine.createSpyObj<Subscription>({ unsubscribe: null });
		observable = jasmine.createSpyObj<Observable<Uint8Array>>({ subscribe: subscription });

		universeData = {
			name: "Universe",
			universeID: 1,
			fixtures: []
		};

		TestBed.configureTestingModule({
			declarations: [
				DashboardUniverseComponent,
				MockComponent(SidenavToggleComponent),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(MatToolbar)
			],
			imports: [
				RouterTestingModule,
				NoopAnimationsModule
			],
			providers: [
				{ provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getActiveUniverse: from([universeData]) }) },
				{ provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
				{ provide: UniverseStreamService, useValue: jasmine.createSpyObj<UniverseStreamService>({ open: observable }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardUniverseComponent);
		component = fixture.componentInstance;
	});

	it('should create', () =>
	{
		fixture.detectChanges();

		expect(component).toBeTruthy();
	});

	it('should request the active universe', () =>
	{
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;

		fixture.detectChanges();

		expect(serviceMock.getActiveUniverse).toHaveBeenCalledTimes(1);
	});

	it('should report an error if getting the active universe failed', () =>
	{
		const serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
		const messageMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
		const error = new Error("Error");
		serviceMock.getActiveUniverse.and.throwError(error.message);

		fixture.detectChanges();

		expect(messageMock.error).toHaveBeenCalledWith(error);
	});

	it('should unsubscribe when destroyed', () =>
	{
		fixture.detectChanges();

		fixture.destroy();
		expect(subscription.unsubscribe).toHaveBeenCalledTimes(1);
	});

	it('should render at a fixed rate', fakeAsync(() =>
	{
		fixture.detectChanges();
		tick();

		const spy = spyOn((component as any).cells[0] as PreviewUniverseCell, "render");
		tick(DashboardFixturePreviewComponent.updateTime);
		expect(spy).toHaveBeenCalledTimes(1);
		tick(DashboardFixturePreviewComponent.updateTime);
		expect(spy).toHaveBeenCalledTimes(2);

		fixture.destroy();
	}));
});
