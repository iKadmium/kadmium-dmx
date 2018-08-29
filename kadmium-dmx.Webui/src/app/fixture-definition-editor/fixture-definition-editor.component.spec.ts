import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { MatAutocompleteModule, MatCard, MatCardActions, MatCardContent, MatCardTitle, MatDivider, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatFormField, MatIcon, MatSelect, MatToolbar } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { APIClient, IColorWheelEntryData, IDMXChannelData, FixtureDefinitionSkeleton, IMovementAxisData, IFixtureDefinition } from 'api';
import { MockComponent, MockDirective } from 'ng-mocks';
import { from } from 'rxjs';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { MessageService } from '../message.service';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { UniqueValueValidatorDirective } from '../unique-value-validator.directive';
import { FixtureDefinitionEditorComponent } from './fixture-definition-editor.component';
import { FixtureDefinitionTestHelpers } from "../test/fixture-definition-test-helpers";
import { EditorService } from "../editor.service";
import { FixtureType } from "../enums/fixture-type.enum";

describe('FixtureDefinitionEditorComponent', () =>
{
    let component: FixtureDefinitionEditorComponent;
    let fixture: ComponentFixture<FixtureDefinitionEditorComponent>;

    let routeMock: any;
    let params: FixtureDefinitionSkeleton;
    let definition: IFixtureDefinition;

    beforeEach(async(() =>
    {
        definition = FixtureDefinitionTestHelpers.getRGBFixtureDefinition();

        params = {
            manufacturer: null,
            model: null
        };
        routeMock = { snapshot: { params: params } };

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
            providers: [
                {
                    provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
                        getFixtureDefinition: from([definition]),
                        getFixtureDefinitions: from([[]]),
                        postFixtureDefinition: from([null]),
                        putFixtureDefinition: from([null])
                    })
                },
                { provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
                {
                    provide: EditorService, useValue: jasmine.createSpyObj<EditorService<IFixtureDefinition>>({
                        getActive: definition,
                        setActive: null
                    })
                },
                { provide: ActivatedRoute, useValue: routeMock }
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                MatAutocompleteModule,
                NoopAnimationsModule
            ]
        });

        TestBed.compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(FixtureDefinitionEditorComponent);
        component = fixture.componentInstance;
    });

    describe('component', () =>
    {
        it('should create', () =>
        {
            fixture.detectChanges();
            expect(component).toBeTruthy();
        });
    })

    describe('constructor', () =>
    {
        it('should request the Fixture Definition if given one', () =>
        {
            let manufacturer = "Manufacturer";
            let model = "Model";

            let routeMock = TestBed.get(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute> as ActivatedRoute;
            routeMock.snapshot.params.manufacturer = manufacturer;
            routeMock.snapshot.params.model = model;
            let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
            fixture.detectChanges();
            expect(serviceMock.getFixtureDefinition).toHaveBeenCalledWith({ manufacturer: manufacturer, model: model });
        });

        it('should set the requested fixture definition as active', (done) =>
        {
            let manufacturer = "Manufacturer";
            let model = "Model";

            let editorService = TestBed.get(EditorService) as jasmine.SpyObj<EditorService<IFixtureDefinition>>;
            let routeMock = TestBed.get(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute> as ActivatedRoute;
            routeMock.snapshot.params.manufacturer = manufacturer;
            routeMock.snapshot.params.model = model;
            fixture.detectChanges();
            fixture.whenStable().then(() =>
            {
                expect(editorService.setActive).toHaveBeenCalledWith(definition);
                done();
            })
        });

        it('should not request a Fixture Definition if not given one ', () =>
        {
            let routeMock = TestBed.get(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute> as ActivatedRoute;
            routeMock.snapshot.params.manufacturer = "";
            routeMock.snapshot.params.model = "";
            let apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
            fixture.detectChanges();
            expect(apiClientMock.getFixtureDefinition).toHaveBeenCalledTimes(0);
        });

        it('should set the requested fixture definition as active', (done) =>
        {
            let editorService = TestBed.get(EditorService) as jasmine.SpyObj<EditorService<IFixtureDefinition>>;
            let routeMock = TestBed.get(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute> as ActivatedRoute;
            routeMock.snapshot.params.manufacturer = "";
            routeMock.snapshot.params.model = "";
            fixture.detectChanges();
            fixture.whenStable().then(() =>
            {
                let expectedDefinition: IFixtureDefinition = {
                    fixtureType: FixtureType.LED,
                    skeleton: {
                        manufacturer: "",
                        model: ""
                    },
                    channels: [],
                    colorWheel: [],
                    movements: []
                };
                expect(editorService.setActive).toHaveBeenCalledWith(expectedDefinition);
                done();
            })
        });

        it('should report an error if getting the Fixture Definition throws one ', () =>
        {
            let error = new Error("Error");
            let routeMock = TestBed.get(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute> as ActivatedRoute;
            routeMock.snapshot.params.manufacturer = "Manufacturer";
            routeMock.snapshot.params.model = "Model";
            let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
            let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
            apiClient.getFixtureDefinition.and.throwError(error.message);
            fixture.detectChanges();
            expect(messageServiceMock.error).toHaveBeenCalledWith(error);
        });

        it('should request all the Fixture Definition skeletons ', () =>
        {
            let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
            fixture.detectChanges();
            expect(serviceMock.getFixtureDefinitions).toHaveBeenCalledTimes(1);
        });

        it('should report an error if getting the Fixture Definitions throws one ', () =>
        {
            let error = new Error("Error");
            let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
            let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
            apiClient.getFixtureDefinitions.and.throwError(error.message);
            fixture.detectChanges();
            expect(messageServiceMock.error).toHaveBeenCalledWith(error);
        });

    });

    describe('save', () =>
    {
        it('should post when saving if the item is new', () =>
        {
            let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;

            component.save();

            expect(apiClient.postFixtureDefinition).toHaveBeenCalledWith({ value: definition });
            expect(apiClient.putFixtureDefinition).toHaveBeenCalledTimes(0);
        });

        it('should report an error when posting if the API throws one', () =>
        {
            let error = new Error("Error");
            let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
            let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
            apiClient.postFixtureDefinition.and.throwError(error.message);

            component.save();

            expect(messageServiceMock.error).toHaveBeenCalledWith(error);
        });

        it('should put when saving if the item is not new', () =>
        {
            let manufacturer = "Manufacturer";
            let model = "Model";

            let routeMock = TestBed.get(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute> as ActivatedRoute;
            routeMock.snapshot.params.manufacturer = manufacturer;
            routeMock.snapshot.params.model = model;
            fixture.detectChanges();
            let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;

            component.save();

            expect(apiClient.putFixtureDefinition).toHaveBeenCalledWith({ manufacturer: manufacturer, model: model, value: definition });
            expect(apiClient.postFixtureDefinition).toHaveBeenCalledTimes(0);
        });

        it('should report an error when putting if the API throws one', () =>
        {
            let error = new Error("Error");
            let manufacturer = "Manufacturer";
            let model = "Model";

            let routeMock = TestBed.get(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute> as ActivatedRoute;
            let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
            routeMock.snapshot.params.manufacturer = manufacturer;
            routeMock.snapshot.params.model = model;
            fixture.detectChanges();

            let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
            apiClient.putFixtureDefinition.and.throwError(error.message);

            component.save();

            expect(messageServiceMock.error).toHaveBeenCalledWith(error);
        });
    });
});
