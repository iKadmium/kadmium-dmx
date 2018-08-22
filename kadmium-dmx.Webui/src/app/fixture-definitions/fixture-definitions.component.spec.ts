import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FixtureDefinitionsComponent } from './fixture-definitions.component';
import { FormsModule } from "@angular/forms";
import { MockComponent } from 'ng-mocks';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { MatIcon, MatFormField, MatToolbar, MatCard, MatCardContent, MatDialog, MatDialogRef } from '@angular/material';
import { BusyCardComponent } from '../busy-card/busy-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APIClient, FixtureDefinitionSkeleton, FixtureDefinition, FixtureType } from 'api';
import { from, Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { FileReaderService } from 'app/file-reader.service';
import { DeleteConfirmDialogComponent } from 'app/delete-confirm-dialog/delete-confirm-dialog.component';

describe('FixtureDefinitionsComponent', () =>
{
    let component: FixtureDefinitionsComponent;
    let fixture: ComponentFixture<FixtureDefinitionsComponent>;

    let definition: FixtureDefinition;
    let dialogObservable: jasmine.SpyObj<MatDialogRef<DeleteConfirmDialogComponent>>;

    beforeEach(async(() =>
    {
        dialogObservable = jasmine.createSpyObj<MatDialogRef<DeleteConfirmDialogComponent>>({ afterClosed: from([]) });

        definition = {
            skeleton: {
                manufacturer: "Manufacturer",
                model: "Model"
            },
            id: "",
            channels: [],
            colorWheel: [],
            fixtureType: FixtureType.LED,
            movements: []
        };

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
            ],
            providers: [
                {
                    provide: APIClient, useValue: jasmine.createSpyObj<APIClient>({
                        getFixtureDefinitions: from([[]]),
                        postFixtureDefinition: from([]),
                        putFixtureDefinition: from([]),
                        deleteFixtureDefinition: from([])
                    })
                },
                { provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({ open: dialogObservable }) },
                {
                    provide: MessageService, useValue: jasmine.createSpyObj<MessageService>({
                        error: null,
                        info: null
                    })
                },
                { provide: FileReaderService, useValue: jasmine.createSpyObj<FileReaderService>({ read: Promise.resolve(null) }) }
            ]
        });

        TestBed.compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(FixtureDefinitionsComponent);
        component = fixture.componentInstance;
    });

    it('should create', () =>
    {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should request the fixture definition skeletons', () =>
    {
        let serviceMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
        fixture.detectChanges();
        expect(serviceMock.getFixtureDefinitions).toHaveBeenCalledTimes(1);
    });

    it('should report an error if requesting the fixture definition skeletons throws one', () =>
    {
        let error = new Error("Error");
        let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
        let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
        apiClient.getFixtureDefinitions.and.throwError(error.message)
        fixture.detectChanges();
        expect(messageServiceMock.error).toHaveBeenCalledWith(error);
    });

    it('should filter data', () =>
    {
        let first: FixtureDefinitionSkeleton = { manufacturer: "Aaaaa", model: "Aaaaaaa" };
        let second: FixtureDefinitionSkeleton = { manufacturer: "Bbbbbb", model: "Bbbbbb" };
        component.skeletons = [first, second];
        component.applyFilter("a");
        expect(component.filteredData).toContain(first);
        expect(component.filteredData).not.toContain(second);
        component.applyFilter("b");
        expect(component.filteredData).toContain(second);
        expect(component.filteredData).not.toContain(first);
    });

    it('should return manufacturers distinctly', () =>
    {
        let manufacturer = "Someone";
        let first: FixtureDefinitionSkeleton = { manufacturer: manufacturer, model: "First" };
        let second: FixtureDefinitionSkeleton = { manufacturer: manufacturer, model: "Second" };
        component.skeletons = [first, second];
        expect(component.manufacturers.length).toBe(1);
        expect(component.manufacturers).toContain(manufacturer);
    });

    it('upload should trigger the given input element', () =>
    {
        let element = jasmine.createSpyObj<HTMLInputElement>({ click: null });
        component.upload(element);
        expect(element.click).toHaveBeenCalledTimes(1);
    });

    it('filesSelected should call the upload method', fakeAsync(() =>
    {
        let fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;
        let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;

        let files: File[] = [
            new File([JSON.stringify(definition)], "file.json"),
            new File([JSON.stringify(definition)], "file.json"),
            new File([JSON.stringify(definition)], "file.json"),
        ];

        fileReader.read.and.returnValue(Promise.resolve(definition));

        component.filesSelected(files);
        tick();
        tick();
        expect(apiClient.postFixtureDefinition).toHaveBeenCalledWith({ value: definition });
        expect(apiClient.postFixtureDefinition).toHaveBeenCalledTimes(files.length);
    }));

    it('filesSelected should report an error if uploading throws one', fakeAsync(() =>
    {
        let error = new Error("Error");
        let fileReader = TestBed.get(FileReaderService) as jasmine.SpyObj<FileReaderService>;
        let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
        let apiClient = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;

        fileReader.read.and.returnValue(Promise.resolve(null));
        apiClient.postFixtureDefinition.and.throwError(error.message);
        let file = new File([JSON.stringify(definition)], "file.json");

        component.filesSelected([file]);
        tick();
        tick();
        expect(messageServiceMock.error).toHaveBeenCalledWith(error);
    }));

    it('should open a delete confirm dialogue when delete is called', () =>
    {
        let skeleton = definition.skeleton;
        let dialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
        component.deleteConfirm(skeleton);
        expect(dialogMock.open).toHaveBeenCalledTimes(1);
    });

    it('should open a delete confirm dialogue when delete is called', fakeAsync(() =>
    {
        let skeleton = definition.skeleton;
        let apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
        dialogObservable.afterClosed.and.returnValue(from([true]));

        component.deleteConfirm(skeleton);
        tick();
        expect(apiClientMock.deleteFixtureDefinition).toHaveBeenCalledWith({ manufacturer: skeleton.manufacturer, model: skeleton.model });
    }));

    it('should open a delete confirm dialogue when delete is called', fakeAsync(() =>
    {
        let error = new Error("Error");
        let skeleton = definition.skeleton;
        let messageServiceMock = TestBed.get(MessageService) as jasmine.SpyObj<MessageService>;
        let apiClientMock = TestBed.get(APIClient) as jasmine.SpyObj<APIClient>;
        dialogObservable.afterClosed.and.returnValue(from([true]));
        apiClientMock.deleteFixtureDefinition.and.throwError(error.message);

        component.deleteConfirm(skeleton);
        tick();
        expect(messageServiceMock.error).toHaveBeenCalledWith(error);
    }));
});
