import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBar, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from "@angular/material";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APIClientModule } from "api";
import { ColorPickerModule } from "ngx-color-picker";
import { AppComponent } from './app.component';
import { BusyCardComponent } from './busy-card/busy-card.component';
import { DashboardFixtureAttributesComponent } from './dashboard-fixture-attributes/dashboard-fixture-attributes.component';
import { DashboardFixtureColorComponent } from './dashboard-fixture-color/dashboard-fixture-color.component';
import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail/dashboard-fixture-detail.component';
import { DashboardFixtureListComponent } from './dashboard-fixture-list/dashboard-fixture-list.component';
import { DashboardFixturePreviewComponent } from "./dashboard-fixture-preview/dashboard-fixture-preview.component";
import { DashboardFixturesComponent } from './dashboard-fixtures/dashboard-fixtures.component';
import { DashboardOscListenerMessagesComponent } from './dashboard-osc-listener-messages/dashboard-osc-listener-messages.component';
import { DashboardOSCListenerComponent } from './dashboard-osc-listener/dashboard-osc-listener.component';
import { DashboardTransmitterSacnComponent } from './dashboard-transmitter-sacn/dashboard-transmitter-sacn.component';
import { DashboardUniverseComponent } from './dashboard-universe/dashboard-universe.component';
import { DashboardVenueComponent } from './dashboard-venue/dashboard-venue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorChannelEditorDialogComponent } from './fixture-definition-editor-channel-editor-dialog/fixture-definition-editor-channel-editor-dialog.component';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorChannelsComponent } from './fixture-definition-editor-channels/fixture-definition-editor-channels.component';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorColorWheelEditorDialogComponent } from './fixture-definition-editor-color-wheel-editor-dialog/fixture-definition-editor-color-wheel-editor-dialog.component';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorColorWheelComponent } from './fixture-definition-editor-color-wheel/fixture-definition-editor-color-wheel.component';
import { FixtureDefinitionEditorHomeComponent } from './fixture-definition-editor-home/fixture-definition-editor-home.component';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorMovementAxisEditorDialogComponent } from './fixture-definition-editor-movement-axis-editor-dialog/fixture-definition-editor-movement-axis-editor-dialog.component';
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorMovementsComponent } from './fixture-definition-editor-movements/fixture-definition-editor-movements.component';
import { FixtureDefinitionEditorComponent } from './fixture-definition-editor/fixture-definition-editor.component';
import { FixtureDefinitionsComponent } from './fixture-definitions/fixture-definitions.component';
import { FixtureEditorComponent } from './fixture-editor/fixture-editor.component';
import { FixtureOptionsEditorComponent } from './fixture-options-editor/fixture-options-editor.component';
import { GroupsComponent } from './groups/groups.component';
import { RouteDefinitions } from "./route-definitions";
import { SettingsComponent } from './settings/settings.component';
import { SidenavToggleComponent } from './sidenav-toggle/sidenav-toggle.component';
import { ToolsComponent } from './tools/tools.component';
import { UniqueValueValidatorDirective } from './unique-value-validator.directive';
// tslint:disable-next-line:max-line-length
import { UniverseEditorAddMultipleFixturesDialogComponent } from './universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { UniverseEditorDialogComponent } from './universe-editor-dialog/universe-editor-dialog.component';
import { UniverseEditorPresetSaveDialogComponent } from './universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component';
import { UniverseEditorComponent } from './universe-editor/universe-editor.component';
import { UniversesComponent } from './universes/universes.component';
import { UnsavedChanges } from './unsaved-changes';
// tslint:disable-next-line:max-line-length
import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from './venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
// tslint:disable-next-line:max-line-length
import { VenueDiscoveryAddFixtureToVenueDialogComponent } from './venue-discovery-add-fixture-to-venue-dialog/venue-discovery-add-fixture-to-venue-dialog.component';
import { VenueDiscoveryFixtureComponent } from './venue-discovery-fixture/venue-discovery-fixture.component';
// tslint:disable-next-line:max-line-length
import { VenueDiscoverySelectGroupDialogComponent } from './venue-discovery-select-group-dialog/venue-discovery-select-group-dialog.component';
import { VenueDiscoveryUnassignedComponent } from './venue-discovery-unassigned/venue-discovery-unassigned.component';
import { VenueDiscoveryComponent } from './venue-discovery/venue-discovery.component';
import { VenueEditorHomeComponent } from './venue-editor-home/venue-editor-home.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { VenueNameDialogComponent } from './venue-name-dialog/venue-name-dialog.component';
import { VenuesComponent } from './venues/venues.component';

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
		SettingsComponent,
		SidenavToggleComponent,
		ToolsComponent,
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
		UniversesComponent,
		VenueEditorHomeComponent,
		UniverseEditorDialogComponent,
		FixtureDefinitionEditorChannelsComponent,
		FixtureDefinitionEditorMovementsComponent,
		FixtureDefinitionEditorColorWheelComponent,
		FixtureDefinitionEditorHomeComponent,
		FixtureDefinitionEditorChannelEditorDialogComponent,
		FixtureDefinitionEditorColorWheelEditorDialogComponent,
		FixtureDefinitionEditorMovementAxisEditorDialogComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,

		RouterModule.forRoot(RouteDefinitions),

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
		FixtureDefinitionEditorChannelEditorDialogComponent,
		FixtureDefinitionEditorColorWheelEditorDialogComponent,
		FixtureDefinitionEditorMovementAxisEditorDialogComponent,
		UniverseEditorDialogComponent,
		UniverseEditorAddMultipleFixturesDialogComponent,
		UniverseEditorPresetSaveDialogComponent,
		VenueDiscoveryAddFixtureDefinitionDialogComponent,
		VenueDiscoveryAddFixtureToVenueDialogComponent,
		VenueDiscoverySelectGroupDialogComponent,
		VenueNameDialogComponent
	]
})
export class AppModule { }
