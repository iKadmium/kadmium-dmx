import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { FixtureOptionsEditorComponent, FixtureContainer } from './fixture-options-editor.component';
import { FormsModule } from "@angular/forms";
import { APIClient, FixtureData, FixtureDefinition, FixtureType } from 'api';
import { MatDialogRef, MatFormField, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatCheckbox, MatDivider, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { from } from 'rxjs';
import { MessageService } from 'app/message.service';

describe('FixtureOptionsEditorComponent', () =>
{
    let component: FixtureOptionsEditorComponent;
    let fixture: ComponentFixture<FixtureOptionsEditorComponent>;

    let fixtureContainer: FixtureContainer;
    let definition: FixtureDefinition;

    beforeEach(async(() =>
    {
        fixtureContainer = {
            fixture: {
                address: 1,
                group: "",
                type: {
                    manufacturer: "Some guy",
                    model: "Some thing"
                },
                options: { maxBrightness: 1, axisInversions: [], axisRestrictions: [] }
            }
        };

        definition = {
            channels: [],
            colorWheel: [],
            fixtureType: FixtureType.LED,
            id: "",
            movements: [],
            skeleton: {
                manufacturer: fixtureContainer.fixture.type.manufacturer,
                model: fixtureContainer.fixture.type.model
            }
        }

        TestBed.configureTestingModule({
            declarations: [
                FixtureOptionsEditorComponent,
                MockComponent(MatFormField),
                MockComponent(MatExpansionPanel),
                MockComponent(MatExpansionPanelTitle),
                MockComponent(MatExpansionPanelHeader),
                MockComponent(MatDivider),
                MockComponent(MatCheckbox),
                MockComponent(MatDialogClose)
            ],
            providers: [
                { provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({ getFixtureDefinition: from([definition]) }) },
                { provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<FixtureOptionsEditorComponent>>({ close: null }) },
                { provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
                { provide: MAT_DIALOG_DATA, useValue: fixtureContainer }
            ],
            imports: [FormsModule]
        });

        TestBed.compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(FixtureOptionsEditorComponent);
        component = fixture.componentInstance;
    });

    it('should create', () =>
    {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should request the fixture definition', () =>
    {
        let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
        fixture.detectChanges();
        expect(serviceMock.getFixtureDefinition).toHaveBeenCalledWith({ model: definition.skeleton.model, manufacturer: definition.skeleton.manufacturer })
    });

    it('should report an error if getting the fixture definition throws one', () =>
    {
        let error = new Error("Error");
        let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
        let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
        apiClient.getFixtureDefinition.and.throwError(error.message);
        fixture.detectChanges();
        expect(messageServiceMock.error).toHaveBeenCalledWith(error);
    });
});
