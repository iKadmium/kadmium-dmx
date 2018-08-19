import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmDialogComponent } from './delete-confirm-dialog.component';
import { MockComponent } from 'ng-mocks';
import { MatDialogClose, MatIcon, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InjectionToken } from '@angular/core';

describe('DeleteConfirmDialogComponent', () =>
{
	let component: DeleteConfirmDialogComponent;
	let fixture: ComponentFixture<DeleteConfirmDialogComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				DeleteConfirmDialogComponent,
				MockComponent(MatDialogClose),
				MockComponent(MatIcon)
			]
		});

		TestBed.overrideComponent(DeleteConfirmDialogComponent, {
			set: {
				providers: [
					{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<DeleteConfirmDialogComponent>>({ close: null }) },
					{ provide: MAT_DIALOG_DATA, useValue: jasmine.createSpyObj<InjectionToken<any>>({ close: null }) }
				]
			}
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
});
