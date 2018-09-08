import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogClose, MatFormField, MatIcon, MatDialogRef } from '@angular/material';
import { MockComponent } from 'ng-mocks';
import { VenueNameDialogComponent } from './venue-name-dialog.component';

describe('VenueNameDialogComponent', () =>
{
	let component: VenueNameDialogComponent;
	let fixture: ComponentFixture<VenueNameDialogComponent>;

	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				VenueNameDialogComponent,
				MockComponent(MatFormField),
				MockComponent(MatDialogClose),
				MockComponent(MatIcon)
			],
			imports: [
				FormsModule,
				ReactiveFormsModule
			],
			providers: [
				{ provide: MatDialogRef, useValue: jasmine.createSpyObj<MatDialogRef<VenueNameDialogComponent>>({ close: null }) }
			]
		});

		TestBed.compileComponents();
	}));

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(VenueNameDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
});
