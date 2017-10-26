import { DashboardComponent } from './dashboard.component';
import { StatusStreamService, MockDashboardService } from "app/dashboard.service";
import { OSCListenerLiveService, MockOSCListenerService } from "app/osclistener-live.service";
import { FixtureStreamService, MockSolversLiveService } from "app/solvers-live.service";
import { NotificationsService } from "app/notifications.service";
import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { async } from "@angular/core/testing";
import { EnttecProTransmitterService, VenueService } from "api/services";
import { UniverseStreamService } from "app/universe-stream.service";

describe('DashboardComponent', () =>
{
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                DashboardComponent
            ]
        });
        TestBed.overrideComponent(DashboardComponent, {
            set: {
                providers: [
                    NotificationsService,
                    { provide: VenueService, useValue: VenueService },
                    { provide: StatusStreamService, useValue: MockDashboardService },
                    { provide: FixtureStreamService, useValue: MockSolversLiveService },
                    { provide: OSCListenerLiveService, useValue: MockOSCListenerService },
                    { provide: UniverseStreamService, useValue: UniverseStreamService },
                    { provide: EnttecProTransmitterService, useValue: EnttecProTransmitterService },
                ]
            }
        });
        TestBed.compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', fakeAsync(() =>
    {
        expect(component).toBeTruthy();
    }));
});
