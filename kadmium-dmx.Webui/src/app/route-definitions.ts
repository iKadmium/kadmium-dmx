import { Route } from "@angular/router";
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorChannelsComponent } from "./fixture-definitions/fixture-definition-editor-channels/fixture-definition-editor-channels.component";
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorColorWheelComponent } from "./fixture-definitions/fixture-definition-editor-color-wheel/fixture-definition-editor-color-wheel.component";
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorHomeComponent } from "./fixture-definitions/fixture-definition-editor-home/fixture-definition-editor-home.component";
// tslint:disable-next-line:max-line-length
import { FixtureDefinitionEditorMovementsComponent } from "./fixture-definitions/fixture-definition-editor-movements/fixture-definition-editor-movements.component";
import { FixtureDefinitionEditorComponent } from "./fixture-definitions/fixture-definition-editor/fixture-definition-editor.component";
import { FixtureDefinitionsComponent } from "./fixture-definitions/fixture-definitions/fixture-definitions.component";
import { GroupsComponent } from "./groups/groups.component";
import { SettingsComponent } from "./settings/settings.component";
import { ToolsComponent } from "./tools/tools.component";
import { UnsavedChanges } from "./unsaved-changes";
import { VenueDiscoveryComponent } from "app/venue-discovery/venue-discovery/venue-discovery.component";

export const RouteDefinitions: Route[] =
	[
		{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
		{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
		{ path: 'settings', component: SettingsComponent, canDeactivate: [UnsavedChanges] },
		{ path: 'groups', component: GroupsComponent, canDeactivate: [UnsavedChanges] },
		{ path: 'tools', component: ToolsComponent },
		{ path: 'venues', loadChildren: './venue/venue.module#VenueModule' },
		{ path: 'venue-discovery/:universeID', component: VenueDiscoveryComponent },
		{ path: 'fixture-definitions', loadChildren: './fixture-definitions/fixture-definitions.module#FixtureDefinitionsModule' }
	];
