import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { FixtureOptionsEditorComponent } from './fixture-options-editor.component';
import { FormsModule } from "@angular/forms";
import { LabelledInputComponent } from "../labelled-input/labelled-input.component";
import { TableInputComponent } from "../table-input/table-input.component";
import { MockFixtureDefinitionService, FixtureDefinitionService } from "app/fixture-definition.service";

describe('FixtureOptionsEditorComponent', () =>
{
    let component: FixtureOptionsEditorComponent;
    let fixture: ComponentFixture<FixtureOptionsEditorComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                FixtureOptionsEditorComponent,
                LabelledInputComponent,
                TableInputComponent
            ],
            imports: [FormsModule]
        }).overrideComponent(FixtureOptionsEditorComponent, {
            set: {
                providers: [
                    { provide: FixtureDefinitionService, useClass: MockFixtureDefinitionService }
                ]
            }
        }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(FixtureOptionsEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', fakeAsync(() =>
    {
        expect(component).toBeTruthy();
    }));
});
