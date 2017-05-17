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
import { GroupsComponent } from './groups/groups.component';
import { LabelledInputComponent } from './labelled-input/labelled-input.component';
import { LooksComponent } from './looks/looks.component';
import { LookEditorComponent } from './look-editor/look-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SettingsComponent } from './settings/settings.component';
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
import { DashboardNavMenuItemComponent } from './dashboard-nav-menu-item/dashboard-nav-menu-item.component';
import { DashboardVenueComponent } from './dashboard-venue/dashboard-venue.component';
import { DashboardVenueListComponent } from './dashboard-venue-list/dashboard-venue-list.component';
import { DashboardUniverseListComponent } from './dashboard-universe-list/dashboard-universe-list.component';
import { DashboardUniverseComponent } from './dashboard-universe/dashboard-universe.component';
import { DashboardFixtureListComponent } from './dashboard-fixture-list/dashboard-fixture-list.component';
import { DashboardFixtureComponent } from './dashboard-fixture/dashboard-fixture.component';
import { DashboardUniverseCellComponent } from './dashboard-universe-cell/dashboard-universe-cell.component';
import { DashboardTransmitterComponent } from './dashboard-transmitter/dashboard-transmitter.component';
import { DashboardOSCListenerComponent } from './dashboard-osc-listener/dashboard-osc-listener.component';
import { DashboardFixturePreviewComponent } from "app/dashboard-fixture-preview/dashboard-fixture-preview.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        FixtureDefinitionsComponent,
        FixtureDefinitionEditorComponent,
        GroupsComponent,
        LabelledInputComponent,
        LooksComponent,
        LookEditorComponent,
        NavMenuComponent,
        DashboardFixturePreviewComponent,
        SettingsComponent,
        VenuesComponent,
        UniverseEditorComponent,
        FixtureOptionsEditorComponent,
        VenueEditorComponent,
        TableInputComponent,
        MaxValueValidatorDirective,
        MinValueValidatorDirective,
        UniqueValueValidatorDirective,
        NotificationMenuComponent,
        VenueTesterComponent,
        DashboardNavMenuItemComponent,
        DashboardVenueComponent,
        DashboardVenueListComponent,
        DashboardUniverseListComponent,
        DashboardUniverseComponent,
        DashboardFixtureListComponent,
        DashboardFixtureComponent,
        DashboardUniverseCellComponent,
        DashboardTransmitterComponent,
        DashboardOSCListenerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
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
