import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueNameDialogComponent } from './venue-name-dialog.component';
import { MockComponent } from 'ng-mocks';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatDialog, MatDialogClose, MatIcon } from '@angular/material';

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
				FormsModule
			]
		});

		TestBed.overrideComponent(VenueNameDialogComponent, {
			set: {
				providers: [

				]
			}
		})

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
