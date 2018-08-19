import { FixtureDefinitionEditorComponent } from './fixture-definition-editor.component';
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { APIClient } from 'api';
import { from } from 'rxjs';
import { MockComponent, MockDirective } from 'ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatToolbar, MatCard, MatCardTitle, MatCardContent, MatIcon, MatFormField, MatSelect, MatExpansionPanel, MatExpansionPanelHeader, MatCardActions, MatExpansionPanelTitle, MatExpansionPanelActionRow, MatDivider, MatAutocompleteModule } from '@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { UniqueValueValidatorDirective } from '../unique-value-validator.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from '../message.service';

describe('FixtureDefinitionEditorComponent', () =>
{
    let component: FixtureDefinitionEditorComponent;
    let fixture: ComponentFixture<FixtureDefinitionEditorComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                FixtureDefinitionEditorComponent,
                MockComponent(SidenavToggleComponent),
                MockComponent(MatToolbar),
                MockComponent(MatCard),
                MockComponent(MatCardTitle),
                MockComponent(MatCardContent),
                MockComponent(MatCardActions),
                MockComponent(BusyCardComponent),
                MockComponent(MatIcon),
                MockComponent(MatSelect),
                MockComponent(MatFormField),
                MockComponent(MatExpansionPanel),
                MockComponent(MatExpansionPanelHeader),
                MockComponent(MatExpansionPanelTitle),
                MockComponent(MatExpansionPanelActionRow),
                MockComponent(MatDivider),

                MockDirective(UniqueValueValidatorDirective)
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                MatAutocompleteModule,
                NoopAnimationsModule
            ]
        });

        TestBed.overrideComponent(FixtureDefinitionEditorComponent, {
            set: {
                providers: [
                    {
                        provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
                            getFixtureDefinition: from([]),
                            getFixtureDefinitions: from([[]]),
                            postFixtureDefinition: from([null]),
                            putFixtureDefinition: from([null])
                        })
                    },
                    { provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) }
                ]
            }
        })

        TestBed.compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(FixtureDefinitionEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', fakeAsync(() =>
    {
        expect(component).toBeTruthy();
    }));
});
