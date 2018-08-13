import { DashboardComponent } from './dashboard.component';
import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { async } from "@angular/core/testing";
import { MatSnackBar, MatToolbar, MatDialog, MatDialogClose, MatIcon } from '../../../node_modules/@angular/material';
import { StatusStreamService } from '../dashboard.service';
import { Title } from '../../../node_modules/@angular/platform-browser';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MockComponent, MockDirective } from '../../../node_modules/ng-mocks';
import { DashboardOSCListenerComponent } from '../dashboard-osc-listener/dashboard-osc-listener.component';
import { DashboardVenueComponent } from '../dashboard-venue/dashboard-venue.component';
import { DashboardTransmitterEnttecComponent } from '../dashboard-transmitter-enttec/dashboard-transmitter-enttec.component';
import { DashboardTransmitterSacnComponent } from '../dashboard-transmitter-sacn/dashboard-transmitter-sacn.component';

describe('DashboardComponent', () =>
{
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                DashboardComponent,
                MockComponent(SidenavToggleComponent),
                MockComponent(MatToolbar),
                MockComponent(DashboardVenueComponent),
                MockComponent(DashboardOSCListenerComponent),
                MockComponent(DashboardTransmitterEnttecComponent),
                MockComponent(DashboardTransmitterSacnComponent)
            ]
        });
        TestBed.overrideComponent(DashboardComponent, {
            set: {
                providers: [
                    { provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) },
                    { provide: StatusStreamService, useValue: jasmine.createSpyObj<StatusStreamService>({ subscribe: null }) },
                    { provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) },
                    { provide: Title, useValue: jasmine.createSpyObj<Title>({ setTitle: null }) },
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
