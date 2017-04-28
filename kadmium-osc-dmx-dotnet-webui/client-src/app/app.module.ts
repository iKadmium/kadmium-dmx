import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from "ng2-toastr/ng2-toastr";

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FixtureDefinitionsComponent } from './fixture-definitions/fixture-definitions.component';
import { FixtureDefinitionEditorComponent } from './fixture-definition-editor/fixture-definition-editor.component';
import { FixturesLiveComponent } from './fixtures-live/fixtures-live.component';
import { GroupsComponent } from './groups/groups.component';
import { LabelledInputComponent } from './labelled-input/labelled-input.component';
import { LooksComponent } from './looks/looks.component';
import { LookEditorComponent } from './look-editor/look-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { OscListenerLiveComponent } from './osc-listener-live/osc-listener-live.component';
import { Preview2DComponent } from './preview2-d/preview2-d.component';
import { Preview2DFixtureComponent } from './preview2-dfixture/preview2-dfixture.component';
import { SACNTransmitterLiveComponent } from './sacntransmitter-live/sacntransmitter-live.component';
import { SettingsComponent } from './settings/settings.component';
import { SolversLiveComponent } from './solvers-live/solvers-live.component';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { MessageBarComponent } from './message-bar/message-bar.component';
import { VenuesComponent } from './venues/venues.component';
import { UniverseEditorComponent } from './universe-editor/universe-editor.component';
import { FixtureOptionsEditorComponent } from './fixture-options-editor/fixture-options-editor.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { NotificationsService } from "./notifications.service";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        FixtureDefinitionsComponent,
        FixtureDefinitionEditorComponent,
        FixturesLiveComponent,
        GroupsComponent,
        LabelledInputComponent,
        LooksComponent,
        LookEditorComponent,
        NavMenuComponent,
        OscListenerLiveComponent,
        Preview2DComponent,
        Preview2DFixtureComponent,
        SACNTransmitterLiveComponent,
        SettingsComponent,
        SolversLiveComponent,
        StatusPanelComponent,
        MessageBarComponent,
        VenuesComponent,
        UniverseEditorComponent,
        FixtureOptionsEditorComponent,
        VenueEditorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'sacnTransmitterLive', component: SACNTransmitterLiveComponent },
            { path: 'oscListenerLive', component: OscListenerLiveComponent },
            { path: 'solversLive', component: SolversLiveComponent },
            { path: 'fixturesLive', component: FixturesLiveComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'groups', component: GroupsComponent },
            { path: 'venues', component: VenuesComponent },
            { path: 'venues/new', component: VenueEditorComponent },
            { path: 'venues/:id', component: VenueEditorComponent },
            { path: 'fixture-definitions', component: FixtureDefinitionsComponent },
            { path: 'fixture-definitions/new', component: FixtureDefinitionEditorComponent },
            { path: 'fixture-definitions/:id', component: FixtureDefinitionEditorComponent },
            { path: 'looks', component: LooksComponent },
            { path: 'looks/new', component: LookEditorComponent },
            { path: 'looks/:id', component: LookEditorComponent },
            { path: 'preview2d', component: Preview2DComponent },
            { path: '**', redirectTo: 'sets' }
        ]),

        CollapseModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        ToastModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [NotificationsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
