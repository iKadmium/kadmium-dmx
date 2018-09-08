import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixtureDefinitionsRoutingModule } from './fixture-definitions-routing.module';
import { FixtureDefinitionEditorMovementAxisEditorDialogComponent } from 'app/fixture-definitions/fixture-definition-editor-movement-axis-editor-dialog/fixture-definition-editor-movement-axis-editor-dialog.component';
import { FixtureDefinitionEditorColorWheelEditorDialogComponent } from 'app/fixture-definitions/fixture-definition-editor-color-wheel-editor-dialog/fixture-definition-editor-color-wheel-editor-dialog.component';
import { FixtureDefinitionEditorChannelEditorDialogComponent } from 'app/fixture-definitions/fixture-definition-editor-channel-editor-dialog/fixture-definition-editor-channel-editor-dialog.component';
import { FixtureDefinitionEditorHomeComponent } from 'app/fixture-definitions/fixture-definition-editor-home/fixture-definition-editor-home.component';
import { FixtureDefinitionEditorColorWheelComponent } from 'app/fixture-definitions/fixture-definition-editor-color-wheel/fixture-definition-editor-color-wheel.component';
import { FixtureDefinitionEditorMovementsComponent } from 'app/fixture-definitions/fixture-definition-editor-movements/fixture-definition-editor-movements.component';
import { FixtureDefinitionEditorChannelsComponent } from 'app/fixture-definitions/fixture-definition-editor-channels/fixture-definition-editor-channels.component';
import { MatIconModule, MatToolbarModule, MatCardModule, MatSelectModule, MatOptionModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule } from '../../../node_modules/@angular/material';
import { SidenavToggleModule } from '../sidenav-toggle/sidenav-toggle.module';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { FixtureDefinitionsComponent } from './fixture-definitions/fixture-definitions.component';
import { FixtureDefinitionEditorComponent } from 'app/fixture-definitions/fixture-definition-editor/fixture-definition-editor.component';
import { BusyCardModule } from '../busy-card/busy-card.module';

@NgModule({
	imports: [
		CommonModule,
		FixtureDefinitionsRoutingModule,
		SidenavToggleModule,
		BusyCardModule,

		ReactiveFormsModule,

		MatIconModule,
		MatToolbarModule,
		MatCardModule,
		MatSelectModule,
		MatOptionModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule
	],
	declarations: [
		FixtureDefinitionEditorComponent,
		FixtureDefinitionEditorChannelsComponent,
		FixtureDefinitionEditorMovementsComponent,
		FixtureDefinitionEditorColorWheelComponent,
		FixtureDefinitionEditorHomeComponent,
		FixtureDefinitionEditorChannelEditorDialogComponent,
		FixtureDefinitionEditorColorWheelEditorDialogComponent,
		FixtureDefinitionEditorMovementAxisEditorDialogComponent,
		FixtureDefinitionsComponent
	],
	entryComponents: [
		FixtureDefinitionEditorChannelEditorDialogComponent,
		FixtureDefinitionEditorColorWheelEditorDialogComponent,
		FixtureDefinitionEditorMovementAxisEditorDialogComponent,
	]
})
export class FixtureDefinitionsModule { }
