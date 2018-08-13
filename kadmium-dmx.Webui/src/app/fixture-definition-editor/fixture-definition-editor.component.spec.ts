import { FixtureDefinitionEditorComponent } from './fixture-definition-editor.component';
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { APIClient } from 'api';
import { from } from '../../../node_modules/rxjs';
import { MockComponent, MockDirective, MockModule } from '../../../node_modules/ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatToolbar, MatCard, MatCardTitle, MatCardContent, MatIcon, MatAutocomplete, MatOption, MatFormField, MatSelect, MatExpansionPanel, MatExpansionPanelHeader, MatCardActions, MatExpansionPanelTitle, MatExpansionPanelActionRow, MatDivider, MatAutocompleteModule, MatSnackBar } from '../../../node_modules/@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { UniqueValueValidatorDirective } from '../unique-value-validator.directive';
import { NoopAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

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
                    { provide: MatSnackBar, useValue: jasmine.createSpyObj<MatSnackBar>({ open: null }) }
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
