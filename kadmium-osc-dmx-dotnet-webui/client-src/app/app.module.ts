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
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";

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
import { Preview2DComponent } from './preview2d/preview2d.component';
import { Preview2DFixtureComponent } from './preview2d-fixture/preview2d-fixture.component';
import { SACNTransmitterLiveComponent } from './sacn-transmitter-live/sacn-transmitter-live.component';
import { SettingsComponent } from './settings/settings.component';
import { SolversLiveComponent } from './solvers-live/solvers-live.component';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { VenuesComponent } from './venues/venues.component';
import { UniverseEditorComponent } from './universe-editor/universe-editor.component';
import { FixtureOptionsEditorComponent } from './fixture-options-editor/fixture-options-editor.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { NotificationsService } from "./notifications.service";
import { TableInputComponent } from './table-input/table-input.component';
import { MaxValueValidatorDirective } from './max-value-validator.directive';
import { MinValueValidatorDirective } from './min-value-validator.directive';
import { TabsModule } from "ngx-bootstrap/tabs";
import { UniqueValueValidatorDirective } from './unique-value-validator.directive';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';
import { VenueTesterComponent } from './venue-tester/venue-tester.component';

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
        VenuesComponent,
        UniverseEditorComponent,
        FixtureOptionsEditorComponent,
        VenueEditorComponent,
        TableInputComponent,
        MaxValueValidatorDirective,
        MinValueValidatorDirective,
        UniqueValueValidatorDirective,
        NotificationMenuComponent,
        VenueTesterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'debug',
                children: [
                    { path: 'sacnTransmitter', component: SACNTransmitterLiveComponent },
                    { path: 'oscListener', component: OscListenerLiveComponent },
                    { path: 'solvers', component: SolversLiveComponent },
                    { path: 'fixtures', component: FixturesLiveComponent },
                ]
            },
            { path: 'settings', component: SettingsComponent },
            { path: 'venue-tester', component: VenueTesterComponent },
            { path: 'groups', component: GroupsComponent },
            {
                path: 'venues',
                children:
                [
                    { path: '', component: VenuesComponent },
                    { path: 'new', component: VenueEditorComponent },
                    { path: ':id', component: VenueEditorComponent },
                ]
            },
            {
                path: 'fixture-definitions',
                children:
                [
                    { path: '', component: FixtureDefinitionsComponent },
                    { path: 'new', component: FixtureDefinitionEditorComponent },
                    { path: ':id', component: FixtureDefinitionEditorComponent },
                ]
            },
            {
                path: 'looks',
                children:
                [
                    { path: '', component: LooksComponent },
                    { path: 'new', component: LookEditorComponent },
                    { path: ':id', component: LookEditorComponent },
                ]
            },
            { path: 'preview2d', component: Preview2DComponent },
            { path: '**', redirectTo: 'sets' }
        ]),

        CollapseModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        ToastModule.forRoot(),
        TabsModule.forRoot(),
        TypeaheadModule.forRoot(),
        ProgressbarModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [NotificationsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
