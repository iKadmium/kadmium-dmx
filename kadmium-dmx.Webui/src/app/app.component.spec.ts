import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatSidenav, MatDivider, MatNavList, MatSidenavContainer, MatSpinner, MatIcon } from '../../node_modules/@angular/material';
import { MockComponent } from '../../node_modules/ng-mocks';

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
