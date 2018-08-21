import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmDialogComponent } from './delete-confirm-dialog.component';
import { MockComponent, MockDirective } from 'ng-mocks';
import { MatDialogClose, MatIcon, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InjectionToken } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DeleteConfirmDialogComponent', () =>
{
	let component: DeleteConfirmDialogComponent;
	let fixture: ComponentFixture<DeleteConfirmDialogComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DeleteConfirmDialogComponent,
				MockComponent(MatIcon)
			],
			providers: [
				{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<DeleteConfirmDialogComponent>>({ close: null }) },
				{ provide: MAT_DIALOG_DATA, useValue: jasmine.createSpyObj<InjectionToken<any>>({ close: null }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DeleteConfirmDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});

	it('should return true if delete is clicked', () =>
	{
		let dialogMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<DeleteConfirmDialogComponent>>;
		let deleteButton = (fixture.debugElement.nativeElement as HTMLElement).querySelector("button.delete") as HTMLButtonElement;
		deleteButton.click();
		expect(dialogMock.close).toHaveBeenCalledWith(true);
	});

	it('should return false if cancel is clicked', () =>
	{
		let dialogMock = TestBed.get(MatDialogRef) as jasmine.SpyObj<MatDialogRef<DeleteConfirmDialogComponent>>;
		let cancelButton = (fixture.debugElement.nativeElement as HTMLElement).querySelector("button.cancel") as HTMLButtonElement;
		cancelButton.click();
		expect(dialogMock.close).toHaveBeenCalledWith(false);
	});
});
