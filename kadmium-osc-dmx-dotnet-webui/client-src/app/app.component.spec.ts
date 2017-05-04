import { TestBed, async } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NavMenuComponent } from "app/nav-menu/nav-menu.component";
import { MessageBarComponent } from "app/message-bar/message-bar.component";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ModalModule } from "ngx-bootstrap/modal";
import { NotificationsService } from "app/notifications.service";
import { ToastModule } from "ng2-toastr/ng2-toastr";
import { Title } from "@angular/platform-browser";

describe('AppComponent', () =>
{
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                NavMenuComponent,
                MessageBarComponent
            ],
            imports: [
                RouterTestingModule,
                CollapseModule.forRoot(),
                ModalModule.forRoot(),
                ToastModule.forRoot()
            ],
            providers: [
                NotificationsService
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() =>
    {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render title in a h1 tag', async(() =>
    {
        let title = "App Works!";
        const fixture = TestBed.createComponent(AppComponent);
        let titleService = TestBed.get(Title) as Title;
        titleService.setTitle(title);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain(title);
    }));
});
