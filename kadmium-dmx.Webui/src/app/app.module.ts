import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBar, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from "@angular/material";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APIClientModule } from "api";
import { AppComponent } from './app.component';
import { BusyCardModule } from './busy-card/busy-card.module';
import { DeleteConfirmDialogComponent } from './dialogs/delete-confirm-dialog/delete-confirm-dialog.component';
// tslint:disable-next-line:max-line-length
import { GroupsComponent } from './groups/groups.component';
import { RouteDefinitions } from "./route-definitions";
import { SettingsComponent } from './settings/settings.component';
import { SidenavToggleModule } from './sidenav-toggle/sidenav-toggle.module';
import { ToolsComponent } from './tools/tools.component';
import { UnsavedChanges } from './unsaved-changes';
// tslint:disable-next-line:max-line-length
import { VenueDiscoveryAddFixtureDefinitionDialogComponent } from './venue-discovery/venue-discovery-add-fixture-definition-dialog/venue-discovery-add-fixture-definition-dialog.component';
// tslint:disable-next-line:max-line-length
import { VenueDiscoveryAddFixtureToVenueDialogComponent } from './venue-discovery/venue-discovery-add-fixture-to-venue-dialog/venue-discovery-add-fixture-to-venue-dialog.component';
import { VenueDiscoveryFixtureComponent } from './venue-discovery/venue-discovery-fixture/venue-discovery-fixture.component';
// tslint:disable-next-line:max-line-length
import { VenueDiscoverySelectGroupDialogComponent } from './venue-discovery/venue-discovery-select-group-dialog/venue-discovery-select-group-dialog.component';
import { VenueDiscoveryUnassignedComponent } from './venue-discovery/venue-discovery-unassigned/venue-discovery-unassigned.component';
import { VenueDiscoveryComponent } from './venue-discovery/venue-discovery/venue-discovery.component';

@NgModule({
	declarations: [
		AppComponent,
		DeleteConfirmDialogComponent,
		GroupsComponent,
		SettingsComponent,
		ToolsComponent,
		VenueDiscoveryAddFixtureDefinitionDialogComponent,
		VenueDiscoveryAddFixtureToVenueDialogComponent,
		VenueDiscoveryComponent,
		VenueDiscoveryFixtureComponent,
		VenueDiscoverySelectGroupDialogComponent,
		VenueDiscoveryUnassignedComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,

		RouterModule.forRoot(RouteDefinitions),
		APIClientModule,
		BusyCardModule,
		SidenavToggleModule,

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
		MatSnackBarModule,
		MatMenuModule,
		MatStepperModule,

		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [UnsavedChanges, MatSnackBar],
	bootstrap: [AppComponent],
	entryComponents: [
		DeleteConfirmDialogComponent,
		VenueDiscoveryAddFixtureDefinitionDialogComponent,
		VenueDiscoveryAddFixtureToVenueDialogComponent,
		VenueDiscoverySelectGroupDialogComponent,
	]
})
export class AppModule { }
