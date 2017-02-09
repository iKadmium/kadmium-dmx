import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { HttpModule } from "@angular/http";
import { AppComponent } from './components/app/app.component'

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { StatusPanelComponent } from "./components/status/status-panel/status-panel.component";
import { MessageBarComponent } from "./components/status/message-bar/message-bar.component";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GroupsComponent } from './components/groups/groups.component';

import { SettingsService } from "./components/settings/settings.service";
import { VenueService } from "./components/venue/venue.service";
import { GroupsService } from "./components/groups/groups.service";

declare var jQuery: any;

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,

        SettingsComponent,
        DashboardComponent,
        GroupsComponent,

        NavMenuComponent,
        StatusPanelComponent,
        MessageBarComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        HttpModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'groups', component: GroupsComponent },
            { path: '**', redirectTo: 'sets' }
        ])
    ],
    providers: []
})
export class AppModule
{
}
