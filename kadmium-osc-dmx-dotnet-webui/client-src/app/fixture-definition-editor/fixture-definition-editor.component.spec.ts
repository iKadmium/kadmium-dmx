import { FixtureDefinitionEditorComponent } from './fixture-definition-editor.component';
import { FormsModule } from "@angular/forms";
import { TableInputComponent } from "app/table-input/table-input.component";
import { LabelledInputComponent } from "app/labelled-input/labelled-input.component";
import { UniqueValueValidatorDirective } from "app/unique-value-validator.directive";
import { FixtureDefinitionService, MockFixtureDefinitionService } from "app/fixture-definition.service";
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from "@angular/router/testing";
import { NotificationsService } from "app/notifications.service";
import { async, ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";

describe('FixtureDefinitionEditorComponent', () =>
{
    let component: FixtureDefinitionEditorComponent;
    let fixture: ComponentFixture<FixtureDefinitionEditorComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                FixtureDefinitionEditorComponent,
                TableInputComponent,
                LabelledInputComponent,
                UniqueValueValidatorDirective
            ],
            imports: [
                RouterTestingModule,
                HttpModule,
                FormsModule
            ]
        }).overrideComponent(FixtureDefinitionEditorComponent, {
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
        fixture = TestBed.createComponent(FixtureDefinitionEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', fakeAsync(() =>
    {
        expect(component).toBeTruthy();
    }));
});
