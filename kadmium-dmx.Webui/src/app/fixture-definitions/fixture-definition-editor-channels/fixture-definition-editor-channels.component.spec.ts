import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDefinitionEditorChannelsComponent } from './fixture-definition-editor-channels.component';
import { MockComponent } from 'ng-mocks';
import { MatIcon, MatCard, MatCardContent, MatToolbar, MatDialog } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditorService } from '../../services/editor.service';
import { IFixtureDefinition, APIClient, IDMXChannelData } from 'api';
import { FixtureType } from '../../enums/fixture-type.enum';
import { FixtureDefinitionTestHelpers } from '../../test/fixture-definition-test-helpers';
import { from } from 'rxjs';
import { FixtureDefinitionEditorChannelEditorDialogComponent } from '../fixture-definition-editor-channel-editor-dialog/fixture-definition-editor-channel-editor-dialog.component';
import { DeleteConfirmService } from 'app/services/delete-confirm.service';

describe('FixtureDefinitionEditorChannelsComponent', () =>
{
	let component: FixtureDefinitionEditorChannelsComponent;
	let fixture: ComponentFixture<FixtureDefinitionEditorChannelsComponent>;

	let definition: IFixtureDefinition;
	let afterClosedResponse: IDMXChannelData;

	beforeEach(async(() =>
	{
		definition = FixtureDefinitionTestHelpers.getRGBFixtureDefinition();

		TestBed.configureTestingModule({
			declarations: [
				FixtureDefinitionEditorChannelsComponent,
				MockComponent(MatIcon),
				MockComponent(MatCard),
				MockComponent(MatCardContent),
				MockComponent(MatToolbar)
			],
			imports: [
				NoopAnimationsModule
			],
			providers: [
				{
					provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>({
						open: { afterClosed: () => from([afterClosedResponse]) }
					})
				},
				{ provide: EditorService, useValue: jasmine.createSpyObj<EditorService<IFixtureDefinition>>({ getActive: definition }) },
				{ provide: DeleteConfirmService, useValue: jasmine.createSpyObj<DeleteConfirmService>({ confirm: Promise.resolve(false) }) }

			]
		});
		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(FixtureDefinitionEditorChannelsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});

	describe('addChannel', () =>
	{
		it('should open a Channel Editor dialog when called', () =>
		{
			const matDialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
			expect(matDialogMock.open).toHaveBeenCalledTimes(0);
			component.addChannel();
			expect(matDialogMock.open).toHaveBeenCalledTimes(1);
			const expectedObject: Partial<IDMXChannelData> = {
				max: 255,
				min: 0,
			};
			expect(matDialogMock.open).toHaveBeenCalledWith(
				FixtureDefinitionEditorChannelEditorDialogComponent,
				jasmine.objectContaining({ data: jasmine.objectContaining(expectedObject) }));
		});

		it('should add the given channel to the definition when accepted', async (done) =>
		{
			const matDialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
			const channel: IDMXChannelData = {
				max: 255,
				min: 0,
				address: 25,
				name: "My channel"
			};
			afterClosedResponse = channel;
			const initialChannelLength = component.channels.length;
			await component.addChannel();
			expect(component.channels.length).toEqual(initialChannelLength + 1);
			expect(component.channels[component.channels.length - 1]).toEqual(channel);
			done();
		});

		it('should NOT add the given channel to the definition when cancelled', async (done) =>
		{
			const matDialogMock = TestBed.get(MatDialog) as jasmine.SpyObj<MatDialog>;
			afterClosedResponse = null;
			const initialChannelLength = component.channels.length;
			await component.addChannel();
			expect(component.channels.length).toEqual(initialChannelLength);
			done();
		});
	});

	describe('removeChannel', () =>
	{
		it('should open a confirmation dialog when called', () =>
		{
			const deleteConfirmMock = TestBed.get(DeleteConfirmService) as jasmine.SpyObj<DeleteConfirmService>;
			expect(deleteConfirmMock.confirm).toHaveBeenCalledTimes(0);
			component.removeChannel(0);
			expect(deleteConfirmMock.confirm).toHaveBeenCalledTimes(1);
		});

		it('should remove the channel when confirmed', async (done) =>
		{
			const deleteConfirmMock = TestBed.get(DeleteConfirmService) as jasmine.SpyObj<DeleteConfirmService>;
			deleteConfirmMock.confirm.and.returnValue(Promise.resolve(true));
			const initialChannelsLength = component.channels.length;
			await component.removeChannel(0);
			expect(component.channels.length).toEqual(initialChannelsLength - 1);
			done();
		});

		it('should NOT remove the channel when cancelled', async (done) =>
		{
			const deleteConfirmMock = TestBed.get(DeleteConfirmService) as jasmine.SpyObj<DeleteConfirmService>;
			deleteConfirmMock.confirm.and.returnValue(Promise.resolve(false));
			const initialChannelsLength = component.channels.length;
			await component.removeChannel(0);
			expect(component.channels.length).toEqual(initialChannelsLength);
			done();
		});
	});
});
