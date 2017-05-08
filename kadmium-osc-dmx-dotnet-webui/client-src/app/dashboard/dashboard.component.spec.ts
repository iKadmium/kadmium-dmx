import { DashboardComponent } from './dashboard.component';
import { StatusPanelComponent } from "app/status-panel/status-panel.component";
import { DashboardService, MockDashboardService } from "app/dashboard.service";
import { EnttecProTransmitterService, MockEnttecProTransmitterService } from "app/enttec-pro-transmitter.service";
import { SACNTransmitterService, MockSACNTransmitterService } from "app/sacn-transmitter.service";
import { OSCListenerService, MockOSCListenerService } from "app/osclistener.service";
import { VenueService, MockVenueService } from "app/venue.service";
import { SolversLiveService, MockSolversLiveService } from "app/solvers-live.service";
import { NotificationsService } from "app/notifications.service";
import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { async } from "@angular/core/testing";

describe('DashboardComponent', () =>
{
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                DashboardComponent,
                StatusPanelComponent
            ]
        });
        TestBed.overrideComponent(DashboardComponent, {
            set: {
                providers: [
                    NotificationsService,
                    { provide: VenueService, useValue: MockVenueService },
                    { provide: DashboardService, useValue: MockDashboardService },
                    { provide: SolversLiveService, useValue: MockSolversLiveService },
                    { provide: OSCListenerService, useValue: MockOSCListenerService },
                    { provide: SACNTransmitterService, useValue: MockSACNTransmitterService },
                    { provide: EnttecProTransmitterService, useValue: MockEnttecProTransmitterService },
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
