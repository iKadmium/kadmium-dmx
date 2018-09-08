import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatSliderModule, MatSlideToggleModule, MatTabsModule, MatToolbarModule, MatDialogModule, MatInputModule } from '@angular/material';
import { ColorPickerModule } from 'ngx-color-picker';
import { BusyCardModule } from '../busy-card/busy-card.module';
import { SidenavToggleModule } from '../sidenav-toggle/sidenav-toggle.module';
import { DashboardFixtureAttributesComponent } from './dashboard-fixture-attributes/dashboard-fixture-attributes.component';
import { DashboardFixtureColorComponent } from './dashboard-fixture-color/dashboard-fixture-color.component';
import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail/dashboard-fixture-detail.component';
import { DashboardFixtureListComponent } from './dashboard-fixture-list/dashboard-fixture-list.component';
import { DashboardFixturePreviewComponent } from './dashboard-fixture-preview/dashboard-fixture-preview.component';
import { DashboardFixturesComponent } from './dashboard-fixtures/dashboard-fixtures.component';
import { DashboardOscListenerMessagesComponent } from './dashboard-osc-listener-messages/dashboard-osc-listener-messages.component';
import { DashboardOSCListenerComponent } from './dashboard-osc-listener/dashboard-osc-listener.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTransmitterSacnComponent } from './dashboard-transmitter-sacn/dashboard-transmitter-sacn.component';
import { DashboardUniverseComponent } from './dashboard-universe/dashboard-universe.component';
import { DashboardVenueComponent } from './dashboard-venue/dashboard-venue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VenueNameDialogComponent } from './venue-name-dialog/venue-name-dialog.component';


@NgModule({
	imports: [
		CommonModule,
		DashboardRoutingModule,
		FormsModule,
		ReactiveFormsModule,

		MatButtonModule,
		MatToolbarModule,
		MatSliderModule,
		MatIconModule,
		MatListModule,
		MatCardModule,
		MatTabsModule,
		MatGridListModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatFormFieldModule,
		MatDialogModule,
		MatInputModule,

		BusyCardModule,
		SidenavToggleModule,

		ColorPickerModule
	],
	declarations: [
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
		VenueNameDialogComponent
	],
	entryComponents: [
		VenueNameDialogComponent
	]
})
export class DashboardModule { }
