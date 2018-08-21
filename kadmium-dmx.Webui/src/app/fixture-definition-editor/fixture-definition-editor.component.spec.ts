import { FixtureDefinitionEditorComponent } from './fixture-definition-editor.component';
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { APIClient, FixtureDefinitionSkeleton, DMXChannelData, ColorWheelEntry, ColorWheelEntryData, MovementAxis, MovementAxisData } from 'api';
import { from } from 'rxjs';
import { MockComponent, MockDirective } from 'ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatToolbar, MatCard, MatCardTitle, MatCardContent, MatIcon, MatFormField, MatSelect, MatExpansionPanel, MatExpansionPanelHeader, MatCardActions, MatExpansionPanelTitle, MatExpansionPanelActionRow, MatDivider, MatAutocompleteModule } from '@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { UniqueValueValidatorDirective } from '../unique-value-validator.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';

describe('FixtureDefinitionEditorComponent', () =>
{
    let component: FixtureDefinitionEditorComponent;
    let fixture: ComponentFixture<FixtureDefinitionEditorComponent>;

    let routeMock: any;
    let params: FixtureDefinitionSkeleton;

    beforeEach(async(() =>
    {
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
                        getFixtureDefinition: from([]),
                        getFixtureDefinitions: from([[]]),
                        postFixtureDefinition: from([null]),
                        putFixtureDefinition: from([null])
                    })
                },
                { provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({ error: null }) },
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

    it('should create', () =>
    {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should request the Fixture Definition if given one ', () =>
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

    it('should not request a Fixture Definition if not given one ', () =>
    {
        let routeMock = TestBed.get(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute> as ActivatedRoute;
        routeMock.snapshot.params.manufacturer = "";
        routeMock.snapshot.params.model = "";
        let apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
        fixture.detectChanges();
        expect(apiClientMock.getFixtureDefinition).toHaveBeenCalledTimes(0);
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

    it('should add a channel', () =>
    {
        fixture.detectChanges();
        component.definition.channels = [];
        component.addChannel();
        expect(component.definition.channels.length).toBe(1);
    });

    it('should remove a channel', () =>
    {
        fixture.detectChanges();
        let channel: DMXChannelData = { name: "Red", address: 1, min: 0, max: 255 };
        component.definition.channels = [channel];
        component.removeChannel(channel);
        expect(component.definition.channels.length).toBe(0);
    });

    it('should get other channel names', () =>
    {
        fixture.detectChanges();
        let red: DMXChannelData = { name: "Red", address: 1, min: 0, max: 255 };
        let green: DMXChannelData = { name: "Green", address: 2, min: 0, max: 255 };
        let blue: DMXChannelData = { name: "Blue", address: 3, min: 0, max: 255 };
        component.definition.channels = [red, green, blue];
        expect(component.getOtherChannelNames(red)).toContain("Green", "Blue");
        expect(component.getOtherChannelNames(green)).toContain("Red", "Blue");
        expect(component.getOtherChannelNames(blue)).toContain("Green", "Red");
    });

    it('should add a color wheel entry', () =>
    {
        fixture.detectChanges();
        component.definition.colorWheel = [];
        component.addColorWheelEntry();
        expect(component.definition.colorWheel.length).toBe(1);
    });

    it('should remove a color wheel entry', () =>
    {
        fixture.detectChanges();
        let entry: ColorWheelEntryData = { name: "Red", color: "#FF0000", min: 0, max: 255 };
        component.definition.colorWheel = [entry];
        component.removeColorWheelEntry(entry);
        expect(component.definition.colorWheel.length).toBe(0);
    });

    it('should get other color wheel entry names', () =>
    {
        fixture.detectChanges();
        let red: ColorWheelEntryData = { name: "Red", color: "#FF0000", min: 0, max: 255 };
        let green: ColorWheelEntryData = { name: "Green", color: "#00FF00", min: 0, max: 255 };
        let blue: ColorWheelEntryData = { name: "Blue", color: "#0000FF", min: 0, max: 255 };
        component.definition.colorWheel = [red, green, blue];
        expect(component.getOtherColorWheelEntryNames(red)).toContain("Green", "Blue");
        expect(component.getOtherColorWheelEntryNames(green)).toContain("Red", "Blue");
        expect(component.getOtherColorWheelEntryNames(blue)).toContain("Green", "Red");
    });

    it('should add an axis', () =>
    {
        fixture.detectChanges();
        component.definition.movements = [];
        component.addAxis();
        expect(component.definition.movements.length).toBe(1);
    });

    it('should remove a color wheel entry', () =>
    {
        fixture.detectChanges();
        let entry: MovementAxisData = { name: "Pan", min: -270, max: 270 };
        component.definition.movements = [entry];
        component.removeAxis(entry);
        expect(component.definition.movements.length).toBe(0);
    });

    it('should get other color wheel entry names', () =>
    {
        fixture.detectChanges();
        let pan: MovementAxisData = { name: "Pan", min: -270, max: 270 };
        let tilt: MovementAxisData = { name: "Tilt", min: -270, max: 270 };
        let zoom: MovementAxisData = { name: "Zoom", min: 8, max: 60 };
        component.definition.movements = [pan, tilt, zoom];
        expect(component.getOtherAxisNames(pan)).toContain("Tilt", "Zoom");
        expect(component.getOtherAxisNames(tilt)).toContain("Pan", "Zoom");
        expect(component.getOtherAxisNames(zoom)).toContain("Pan", "Tilt");
    });

    it('should post when saving if the item is new', () =>
    {
        let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;

        component.save();

        expect(apiClient.postFixtureDefinition).toHaveBeenCalledWith({ value: component.definition });
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

        expect(apiClient.putFixtureDefinition).toHaveBeenCalledWith({ manufacturer: manufacturer, model: model, value: component.definition });
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
