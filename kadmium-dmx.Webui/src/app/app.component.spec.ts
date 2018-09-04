import { async, TestBed } from '@angular/core/testing';
import { MatDivider, MatIcon, MatNavList, MatSidenav, MatSidenavContainer, MatSpinner } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () =>
{
	beforeEach(async(() =>
	{
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				MockComponent(MatSidenav),
				MockComponent(MatIcon),
				MockComponent(MatDivider),
				MockComponent(MatNavList),
				MockComponent(MatSidenavContainer),
				MockComponent(MatSpinner)
			],
			imports: [
				RouterTestingModule
			],
			providers: [

			]
		}).compileComponents();
	}));

	it('should create the app', async(() =>
	{
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
