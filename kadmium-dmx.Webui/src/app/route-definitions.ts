import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardUniverseComponent } from "./dashboard-universe/dashboard-universe.component";
import { DashboardFixturesComponent } from "./dashboard-fixtures/dashboard-fixtures.component";
import { DashboardFixtureDetailComponent } from "./dashboard-fixture-detail/dashboard-fixture-detail.component";
import { VenueDiscoveryComponent } from "./venue-discovery/venue-discovery.component";
import { DashboardOscListenerMessagesComponent } from "./dashboard-osc-listener-messages/dashboard-osc-listener-messages.component";
import { SettingsComponent } from "./settings/settings.component";
import { UnsavedChanges } from "./unsaved-changes";
import { GroupsComponent } from "./groups/groups.component";
import { ToolsComponent } from "./tools/tools.component";
import { VenuesComponent } from "./venues/venues.component";
import { VenueEditorComponent } from "./venue-editor/venue-editor.component";
import { VenueEditorHomeComponent } from "./venue-editor-home/venue-editor-home.component";
import { UniverseEditorComponent } from "./universe-editor/universe-editor.component";
import { FixtureDefinitionsComponent } from "./fixture-definitions/fixture-definitions.component";
import { FixtureDefinitionEditorComponent } from "./fixture-definition-editor/fixture-definition-editor.component";
import { FixtureDefinitionEditorHomeComponent } from "./fixture-definition-editor-home/fixture-definition-editor-home.component";
import { FixtureDefinitionEditorChannelsComponent } from "./fixture-definition-editor-channels/fixture-definition-editor-channels.component";
import { FixtureDefinitionEditorMovementsComponent } from "./fixture-definition-editor-movements/fixture-definition-editor-movements.component";
import { FixtureDefinitionEditorColorWheelComponent } from "./fixture-definition-editor-color-wheel/fixture-definition-editor-color-wheel.component";
import { Route } from "@angular/router";

const venueChildren: Route[] = [
    { path: '', component: VenueEditorHomeComponent },
    { path: ':universeID', component: UniverseEditorComponent }
];

const fixtureDefinitionChildren: Route[] = [
    { path: '', component: FixtureDefinitionEditorHomeComponent },
    { path: 'channels', component: FixtureDefinitionEditorChannelsComponent },
    { path: 'movements', component: FixtureDefinitionEditorMovementsComponent },
    { path: 'color-wheel', component: FixtureDefinitionEditorColorWheelComponent }
];

export const RouteDefinitions: Route[] =
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
                    { path: 'new', component: VenueEditorComponent, canDeactivate: [UnsavedChanges], children: venueChildren },
                    { path: ':id', component: VenueEditorComponent, canDeactivate: [UnsavedChanges], children: venueChildren },
                ]
        },
        {
            path: 'fixture-definitions',
            children:
                [
                    { path: '', component: FixtureDefinitionsComponent },
                    { path: 'new', component: FixtureDefinitionEditorComponent, canDeactivate: [UnsavedChanges], children: fixtureDefinitionChildren },
                    { path: ':manufacturer/:model', component: FixtureDefinitionEditorComponent, canDeactivate: [UnsavedChanges], children: fixtureDefinitionChildren },
                ]
        }
    ];
