import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { FixtureDefinitionsComponent } from './fixture-definitions.component';
import { FormsModule } from "@angular/forms";
import { MockFixtureDefinitionService, FixtureDefinitionService } from "app/fixture-definition.service";
import { NotificationsService } from "app/notifications.service";

describe('FixtureDefinitionsComponent', () =>
{
    let component: FixtureDefinitionsComponent;
    let fixture: ComponentFixture<FixtureDefinitionsComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [FixtureDefinitionsComponent],
            imports: [FormsModule]
        }).overrideComponent(FixtureDefinitionsComponent, {
            set: {
                providers: [
                    NotificationsService,
                    { provide: FixtureDefinitionService, useClass: MockFixtureDefinitionService }
                ]
            }
        }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(FixtureDefinitionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', fakeAsync(() =>
    {
        expect(component).toBeTruthy();
    }));
});
