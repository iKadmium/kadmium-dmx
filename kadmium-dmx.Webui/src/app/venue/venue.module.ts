import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FixtureEditorComponent } from './fixture-editor/fixture-editor.component';
import { FixtureOptionsEditorComponent } from './fixture-options-editor/fixture-options-editor.component';
import { UniverseEditorAddMultipleFixturesDialogComponent } from './universe-editor-add-multiple-fixtures-dialog/universe-editor-add-multiple-fixtures-dialog.component';
import { UniverseEditorDialogComponent } from './universe-editor-dialog/universe-editor-dialog.component';
import { UniverseEditorPresetSaveDialogComponent } from './universe-editor-preset-save-dialog/universe-editor-preset-save-dialog.component';
import { UniverseEditorComponent } from './universe-editor/universe-editor.component';
import { UniversesComponent } from './universes/universes.component';
import { VenueEditorHomeComponent } from './venue-editor-home/venue-editor-home.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { VenueRoutingModule } from './venue-routing.module';
import { VenuesComponent } from './venues/venues.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { MatSelectModule, MatOptionModule, MatFormFieldModule, MatDividerModule, MatCheckboxModule, MatIconModule, MatCardModule, MatToolbarModule, MatListModule, MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { BusyCardModule } from '../busy-card/busy-card.module';
import { SidenavToggleModule } from '../sidenav-toggle/sidenav-toggle.module';


@NgModule({
	imports: [
		CommonModule,
		VenueRoutingModule,
		ReactiveFormsModule,
		BusyCardModule,
		SidenavToggleModule,

		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		MatOptionModule,
		MatDividerModule,
		MatCheckboxModule,
		MatIconModule,
		MatCardModule,
		MatToolbarModule,
		MatListModule,
		MatDialogModule
	],
	declarations: [
		FixtureEditorComponent,
		FixtureOptionsEditorComponent,
		UniverseEditorComponent,
		UniverseEditorAddMultipleFixturesDialogComponent,
		UniverseEditorDialogComponent,
		UniverseEditorPresetSaveDialogComponent,
		UniversesComponent,
		VenueEditorComponent,
		VenueEditorHomeComponent,
		VenuesComponent
	],
	entryComponents: [
		FixtureOptionsEditorComponent,
		FixtureEditorComponent,
		UniverseEditorAddMultipleFixturesDialogComponent,
		UniverseEditorDialogComponent,
		UniverseEditorPresetSaveDialogComponent,
	]
})
export class VenueModule { }
