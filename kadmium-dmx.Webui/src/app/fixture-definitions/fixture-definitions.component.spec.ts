import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { FixtureDefinitionsComponent } from './fixture-definitions.component';
import { FormsModule } from "@angular/forms";
import { MockComponent } from 'ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatIcon, MatFormField, MatToolbar, MatCard, MatCardContent, MatDialog } from '@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APIClient } from 'api';
import { from } from 'rxjs';
import { MessageService } from '../message.service';

describe('FixtureDefinitionsComponent', () =>
{
    let component: FixtureDefinitionsComponent;
    let fixture: ComponentFixture<FixtureDefinitionsComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                FixtureDefinitionsComponent,
                MockComponent(SidenavToggleComponent),
                MockComponent(MatIcon),
                MockComponent(MatFormField),
                MockComponent(MatToolbar),
                MockComponent(BusyCardComponent),
                MockComponent(MatCard),
                MockComponent(MatCardContent),
            ],
            imports: [
                FormsModule,
                RouterTestingModule,
                NoopAnimationsModule
            ]
        });

        TestBed.overrideComponent(FixtureDefinitionsComponent, {
            set: {
                providers: [
                    {
                        provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
                            getFixtureDefinitions: from([])
                        })
                    },
                    { provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: null }) },
                    { provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) }
                ]
            }
        });

        TestBed.compileComponents();
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
