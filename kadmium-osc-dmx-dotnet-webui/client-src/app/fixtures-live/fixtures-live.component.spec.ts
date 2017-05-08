import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesLiveComponent } from './fixtures-live.component';
import { LookService, MockLookService } from "app/look.service";
import { GroupService, MockGroupService } from "app/group.service";
import { NotificationsService } from "app/notifications.service";

describe('FixturesLiveComponent', () =>
{
    let component: FixturesLiveComponent;
    let fixture: ComponentFixture<FixturesLiveComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [FixturesLiveComponent]
        }).overrideComponent(FixturesLiveComponent, {
            set: {
                providers: [
                    { provide: GroupService, useClass: MockGroupService },
                    { provide: LookService, useClass: MockLookService },
                    NotificationsService
                ]
            }
        }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(FixturesLiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
