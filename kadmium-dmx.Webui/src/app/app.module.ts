import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatCardModule, MatIconModule, MatTableModule, MatTooltipModule, MatSortModule, MatPaginatorModule, MatTabsModule, MatSliderModule, MatDialogModule, MatAutocompleteModule, MatSidenavModule, MatToolbarModule, MatExpansionModule, MatSlideToggleModule, MatListModule, MatGridListModule, MatButtonToggleModule, MatProgressSpinnerModule, MatSnackBar, MatSnackBarModule, MatMenuModule, MatStepperModule } from "@angular/material";

import { ColorPickerModule } from "ngx-color-picker";

import { APIClientModule } from "api";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FixtureDefinitionsComponent } from './fixture-definitions/fixture-definitions.component';
import { FixtureDefinitionEditorComponent } from './fixture-definition-editor/fixture-definition-editor.component';
import { GroupsComponent } from './groups/groups.component';
import { SettingsComponent } from './settings/settings.component';
import { VenuesComponent } from './venues/venues.component';
import { UniverseEditorComponent } from './universe-editor/universe-editor.component';
import { FixtureOptionsEditorComponent } from './fixture-options-editor/fixture-options-editor.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { MaxValueValidatorDirective } from './max-value-validator.directive';
import { MinValueValidatorDirective } from './min-value-validator.directive';
import { UniqueValueValidatorDirective } from './unique-value-validator.directive';
import { DashboardVenueComponent } from './dashboard-venue/dashboard-venue.component';
import { DashboardUniverseComponent } from './dashboard-universe/dashboard-universe.component';
import { DashboardFixtureListComponent } from './dashboard-fixture-list/dashboard-fixture-list.component';
import { DashboardFixtureAttributesComponent } from './dashboard-fixture-attributes/dashboard-fixture-attributes.component';
import { DashboardOSCListenerComponent } from './dashboard-osc-listener/dashboard-osc-listener.component';
import { DashboardFixturePreviewComponent } from "./dashboard-fixture-preview/dashboard-fixture-preview.component";
import { DashboardFixturesComponent } from './dashboard-fixtures/dashboard-fixtures.component';
import { UniverseEditorPresetSaveDialogComponent } from './universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component';
import { DashboardTransmitterSacnComponent } from './dashboard-transmitter-sacn/dashboard-transmitter-sacn.component';
import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail/dashboard-fixture-detail.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { BusyCardComponent } from './busy-card/busy-card.component';
import { UnsavedChanges } from './unsaved-changes';
import { VenueDiscoveryComponent } from './venue-discovery/venue-discovery.component';
import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from './venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
import { VenueDiscoveryAddFixtureToVenueDialogComponent } from './venue-discovery-add-fixture-to-venue-dialog/venue-discovery-add-fixture-to-venue-dialog.component';
import { VenueDiscoverySelectGroupDialogComponent } from './venue-discovery-select-group-dialog/venue-discovery-select-group-dialog.component';
import { DashboardOscListenerMessagesComponent } from './dashboard-osc-listener-messages/dashboard-osc-listener-messages.component';
import { ToolsComponent } from './tools/tools.component';
import { VenueDiscoveryFixtureComponent } from './venue-discovery-fixture/venue-discovery-fixture.component';
import { VenueDiscoveryUnassignedComponent } from './venue-discovery-unassigned/venue-discovery-unassigned.component';
import { VenueNameDialogComponent } from './venue-name-dialog/venue-name-dialog.component';
import { SidenavToggleComponent } from './sidenav-toggle/sidenav-toggle.component';
import { DashboardFixtureColorComponent } from './dashboard-fixture-color/dashboard-fixture-color.component';
import { UniverseEditorAddMultipleFixturesDialogComponent } from './universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { FixtureEditorComponent } from './fixture-editor/fixture-editor.component';

@NgModule({
    declarations: [
        AppComponent,
        BusyCardComponent,
        DashboardComponent,
        DashboardFixtureAttributesComponent,
        DashboardFixtureColorComponent,
        DashboardFixtureDetailComponent,
        DashboardFixtureListComponent,
        DashboardFixturePreviewComponent,
        DashboardFixturesComponent,
        DashboardOSCListenerComponent,
        DashboardOscListenerMessagesComponent,
        DashboardTransmitterSacnComponent,
        DashboardUniverseComponent,
        DashboardVenueComponent,
        DeleteConfirmDialogComponent,
        FixtureDefinitionEditorComponent,
        FixtureDefinitionsComponent,
        FixtureEditorComponent,
        FixtureOptionsEditorComponent,
        GroupsComponent,
        MaxValueValidatorDirective,
        MinValueValidatorDirective,
        SettingsComponent,
        SidenavToggleComponent,
        ToolsComponent,
        UniqueValueValidatorDirective,
        UniverseEditorAddMultipleFixturesDialogComponent,
        UniverseEditorComponent,
        UniverseEditorPresetSaveDialogComponent,
        VenueDiscoveryAddFixtureDefinitionDialogComponent,
        VenueDiscoveryAddFixtureToVenueDialogComponent,
        VenueDiscoveryComponent,
        VenueDiscoveryFixtureComponent,
        VenueDiscoverySelectGroupDialogComponent,
        VenueDiscoveryUnassignedComponent,
        VenueEditorComponent,
        VenueNameDialogComponent,
        VenuesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,

        RouterModule.forRoot(
            [
                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                {
                    path: 'dashboard', children: [
                        { path: '', component: DashboardComponent },
                        {
                            path: 'venue', children:
                                [
                                    { path: 'dmx/:universeID', component: DashboardUniverseComponent },
                                    {
                                        path: 'fixtures/:universeID', children:
                                            [
                                                { path: '', component: DashboardFixturesComponent },
                                                { path: ':fixtureAddress', component: DashboardFixtureDetailComponent }
                                            ]
                                    },
                                    { path: 'discover/:universeID', component: VenueDiscoveryComponent }
                                ]
                        },
                        { path: 'oscListener', component: DashboardOscListenerMessagesComponent }
                    ]
                },
                { path: 'settings', component: SettingsComponent, canDeactivate: [UnsavedChanges] },
                { path: 'groups', component: GroupsComponent, canDeactivate: [UnsavedChanges] },
                { path: 'tools', component: ToolsComponent },
                {
                    path: 'venues',
                    children:
                        [
                            { path: '', component: VenuesComponent },
                            { path: 'new', component: VenueEditorComponent, canDeactivate: [UnsavedChanges] },
                            { path: ':id', component: VenueEditorComponent, canDeactivate: [UnsavedChanges] },
                        ]
                },
                {
                    path: 'fixture-definitions',
                    children:
                        [
                            { path: '', component: FixtureDefinitionsComponent },
                            { path: 'new', component: FixtureDefinitionEditorComponent, canDeactivate: [UnsavedChanges] },
                            { path: ':manufacturer/:model', component: FixtureDefinitionEditorComponent, canDeactivate: [UnsavedChanges] },
                        ]
                }
            ]),

        APIClientModule,

        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatTooltipModule,
        MatSortModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSliderModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatSidenavModule,
        MatToolbarModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatListModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatMenuModule,
        MatStepperModule,

        ColorPickerModule,

        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [UnsavedChanges, MatSnackBar],
    bootstrap: [AppComponent],
    entryComponents: [
        DeleteConfirmDialogComponent,
        FixtureEditorComponent,
        FixtureOptionsEditorComponent,
        UniverseEditorAddMultipleFixturesDialogComponent,
        UniverseEditorPresetSaveDialogComponent,
        VenueDiscoveryAddFixtureDefinitionDialogComponent,
        VenueDiscoveryAddFixtureToVenueDialogComponent,
        VenueDiscoverySelectGroupDialogComponent,
        VenueNameDialogComponent
    ]
})
export class AppModule { }
