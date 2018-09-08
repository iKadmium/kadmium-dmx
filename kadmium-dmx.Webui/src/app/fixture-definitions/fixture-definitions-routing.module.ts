import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixtureDefinitionEditorHomeComponent } from 'app/fixture-definitions/fixture-definition-editor-home/fixture-definition-editor-home.component';
import { FixtureDefinitionEditorChannelsComponent } from 'app/fixture-definitions/fixture-definition-editor-channels/fixture-definition-editor-channels.component';
import { FixtureDefinitionEditorMovementsComponent } from 'app/fixture-definitions/fixture-definition-editor-movements/fixture-definition-editor-movements.component';
import { FixtureDefinitionEditorColorWheelComponent } from 'app/fixture-definitions/fixture-definition-editor-color-wheel/fixture-definition-editor-color-wheel.component';
import { FixtureDefinitionsComponent } from 'app/fixture-definitions/fixture-definitions/fixture-definitions.component';
import { FixtureDefinitionEditorComponent } from 'app/fixture-definitions/fixture-definition-editor/fixture-definition-editor.component';
import { UnsavedChanges } from 'app/unsaved-changes';

const fixtureDefinitionChildren: Routes = [
	{ path: '', component: FixtureDefinitionEditorHomeComponent },
	{ path: 'channels', component: FixtureDefinitionEditorChannelsComponent },
	{ path: 'movements', component: FixtureDefinitionEditorMovementsComponent },
	{ path: 'color-wheel', component: FixtureDefinitionEditorColorWheelComponent }
];

const routes: Routes = [
	{ path: '', component: FixtureDefinitionsComponent },
	{ path: 'new', component: FixtureDefinitionEditorComponent, canDeactivate: [UnsavedChanges], children: fixtureDefinitionChildren },
	{
		path: ':manufacturer/:model',
		component: FixtureDefinitionEditorComponent,
		canDeactivate: [UnsavedChanges],
		children: fixtureDefinitionChildren
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FixtureDefinitionsRoutingModule { }
