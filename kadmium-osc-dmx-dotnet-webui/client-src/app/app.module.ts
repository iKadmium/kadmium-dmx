import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatCardModule, MatIconModule, MatTableModule, MatTooltipModule, MatSortModule, MatPaginatorModule, MatTabsModule, MatSliderModule, MatDialogModule, MatAutocompleteModule, MatSidenavModule, MatToolbarModule, MatExpansionModule, MatSlideToggleModule, MatListModule, MatGridListModule, MatButtonToggleModule, MatProgressSpinnerModule, MatSnackBar, MatSnackBarModule, MatMenuModule, MatStepperModule } from "@angular/material";

import { FlexLayoutModule } from '@angular/flex-layout';

import { MomentModule } from 'angular2-moment';

import { ApiModule } from "api/api.module";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FixtureDefinitionsComponent } from './fixture-definitions/fixture-definitions.component';
import { FixtureDefinitionEditorComponent } from './fixture-definition-editor/fixture-definition-editor.component';
import { GroupsComponent } from './groups/groups.component';
import { LabelledInputComponent } from './labelled-input/labelled-input.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SettingsComponent } from './settings/settings.component';
import { VenuesComponent } from './venues/venues.component';
import { UniverseEditorComponent } from './universe-editor/universe-editor.component';
import { FixtureOptionsEditorComponent } from './fixture-options-editor/fixture-options-editor.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { TableInputComponent } from './table-input/table-input.component';
import { MaxValueValidatorDirective } from './max-value-validator.directive';
import { MinValueValidatorDirective } from './min-value-validator.directive';
import { UniqueValueValidatorDirective } from './unique-value-validator.directive';
import { DashboardNavMenuItemComponent } from './dashboard-nav-menu-item/dashboard-nav-menu-item.component';
import { DashboardVenueComponent } from './dashboard-venue/dashboard-venue.component';
import { DashboardUniverseComponent } from './dashboard-universe/dashboard-universe.component';
import { DashboardFixtureListComponent } from './dashboard-fixture-list/dashboard-fixture-list.component';
import { DashboardFixtureAttributesComponent } from './dashboard-fixture-attributes/dashboard-fixture-attributes.component';
import { DashboardOSCListenerComponent } from './dashboard-osc-listener/dashboard-osc-listener.component';
import { DashboardFixturePreviewComponent } from "app/dashboard-fixture-preview/dashboard-fixture-preview.component";
import { OSCListenerLiveService } from "app/osclistener-live.service";
import { DashboardFixturesComponent } from './dashboard-fixtures/dashboard-fixtures.component';
import { UniverseEditorPresetSaveDialogComponent } from './universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component';
import { DashboardTransmitterEnttecComponent } from './dashboard-transmitter-enttec/dashboard-transmitter-enttec.component';
import { DashboardTransmitterSacnComponent } from './dashboard-transmitter-sacn/dashboard-transmitter-sacn.component';
import { DashboardVenueVenueLoadDialogComponent } from './dashboard-venue-venue-load-dialog/dashboard-venue-venue-load-dialog.component';
import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail/dashboard-fixture-detail.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { BusyCardComponent } from './busy-card/busy-card.component';
import { UnsavedChanges } from 'app/unsaved-changes';
import { VenueDiscoveryComponent } from './venue-discovery/venue-discovery.component';
import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from './venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
import { VenueDiscoveryAddFixtureToVenueDialogComponent } from './venue-discovery-add-fixture-to-venue-dialog/venue-discovery-add-fixture-to-venue-dialog.component';
import { VenueDiscoverySelectGroupDialogComponent } from './venue-discovery-select-group-dialog/venue-discovery-select-group-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        FixtureDefinitionsComponent,
        FixtureDefinitionEditorComponent,
        GroupsComponent,
        LabelledInputComponent,
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
        DashboardNavMenuItemComponent,
        DashboardVenueComponent,
        DashboardUniverseComponent,
        DashboardFixtureListComponent,
        DashboardFixtureAttributesComponent,
        DashboardOSCListenerComponent,
        DashboardFixturesComponent,
        UniverseEditorPresetSaveDialogComponent,
        DashboardTransmitterEnttecComponent,
        DashboardTransmitterSacnComponent,
        DashboardVenueVenueLoadDialogComponent,
        DashboardFixtureDetailComponent,
        DeleteConfirmDialogComponent,
        BusyCardComponent,
        VenueDiscoveryComponent,
        VenueDiscoveryAddFixtureDefinitionDialogComponent,
        VenueDiscoveryAddFixtureToVenueDialogComponent,
        VenueDiscoverySelectGroupDialogComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'venue', children:
                [
                    { path: 'dmx/:universeID', component: DashboardUniverseComponent },
                    {
                        path: 'fixtures/:universeID', children:
                        [
                            { path: '', component: DashboardFixturesComponent },
                            { path: ':fixtureID', component: DashboardFixtureDetailComponent }
                        ]
                    },
                    { path: 'discover/:universeID', component: VenueDiscoveryComponent }
                ]
            },
            { path: 'settings', component: SettingsComponent, canDeactivate: [UnsavedChanges] },
            { path: 'groups', component: GroupsComponent, canDeactivate: [UnsavedChanges] },
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
                    { path: ':id', component: FixtureDefinitionEditorComponent, canDeactivate: [UnsavedChanges] },
                ]
            }
        ]),

        ApiModule,

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

        FlexLayoutModule,

        MomentModule,

        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [OSCListenerLiveService, UnsavedChanges],
    bootstrap: [AppComponent],
    entryComponents: [
        UniverseEditorPresetSaveDialogComponent,
        FixtureOptionsEditorComponent,
        DashboardVenueVenueLoadDialogComponent,
        DeleteConfirmDialogComponent,
        VenueDiscoveryAddFixtureDefinitionDialogComponent,
        VenueDiscoverySelectGroupDialogComponent,
        VenueDiscoveryAddFixtureToVenueDialogComponent
    ]
})
export class AppModule { }
