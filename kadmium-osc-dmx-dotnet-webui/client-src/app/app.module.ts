import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatCardModule, MatIconModule, MatTableModule, MatTooltipModule, MatSortModule, MatPaginatorModule, MatTabsModule, MatSliderModule, MatDialogModule, MatAutocompleteModule, MatSidenavModule, MatToolbarModule, MatExpansionModule, MatSlideToggleModule, MatListModule, MatGridListModule, MatButtonToggleModule, MatProgressSpinnerModule, MatSnackBar, MatSnackBarModule } from "@angular/material";

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
import { FixtureDefinitionEditorChannelsComponent } from './fixture-definition-editor-channels/fixture-definition-editor-channels.component';
import { FixtureDefinitionEditorMovementsComponent } from './fixture-definition-editor-movements/fixture-definition-editor-movements.component';
import { FixtureDefinitionEditorColorWheelComponent } from './fixture-definition-editor-color-wheel/fixture-definition-editor-color-wheel.component';
import { UniverseEditorPresetSaveDialogComponent } from './universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component';
import { DashboardTransmitterEnttecComponent } from './dashboard-transmitter-enttec/dashboard-transmitter-enttec.component';
import { DashboardTransmitterSacnComponent } from './dashboard-transmitter-sacn/dashboard-transmitter-sacn.component';
import { DashboardVenueVenueLoadDialogComponent } from './dashboard-venue-venue-load-dialog/dashboard-venue-venue-load-dialog.component';
import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail/dashboard-fixture-detail.component';

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
        FixtureDefinitionEditorChannelsComponent,
        FixtureDefinitionEditorMovementsComponent,
        FixtureDefinitionEditorColorWheelComponent,
        UniverseEditorPresetSaveDialogComponent,
        DashboardTransmitterEnttecComponent,
        DashboardTransmitterSacnComponent,
        DashboardVenueVenueLoadDialogComponent,
        DashboardFixtureDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard', component: DashboardComponent, children: [
                    { path: '', redirectTo: 'venue', pathMatch: 'full' },
                    {
                        path: 'venue', children:
                            [
                                { path: '', component: DashboardVenueComponent },
                                { path: 'dmx/:universeID', component: DashboardUniverseComponent },
                                {
                                    path: 'fixtures/:universeID', children:
                                        [
                                            { path: '', component: DashboardFixturesComponent },
                                            { path: ':fixtureID', component: DashboardFixtureDetailComponent }
                                        ]
                                },
                            ]
                    },
                    { path: 'sacnTransmitter', component: DashboardTransmitterSacnComponent },
                    { path: 'enttecTransmitter', component: DashboardTransmitterEnttecComponent },
                    { path: 'oscListener', component: DashboardOSCListenerComponent }
                ]
            },
            { path: 'settings', component: SettingsComponent },
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
            { path: '**', redirectTo: 'sets' }
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

        MomentModule,

        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [OSCListenerLiveService],
    bootstrap: [AppComponent],
    entryComponents: [UniverseEditorPresetSaveDialogComponent, FixtureOptionsEditorComponent, DashboardVenueVenueLoadDialogComponent]
})
export class AppModule { }
