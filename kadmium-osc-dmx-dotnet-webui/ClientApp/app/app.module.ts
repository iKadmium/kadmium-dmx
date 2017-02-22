import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { HttpModule } from "@angular/http";
import { AppComponent } from './components/app/app.component'

import { MINMAX_DIRECTIVES } from './components/minmax/index';
import { MaxValueValidator } from './components/minmax/index';
import { UniqueValidator } from "./components/unique/unique.directive";

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { StatusPanelComponent } from "./components/status/status-panel/status-panel.component";
import { MessageBarComponent } from "./components/status/message-bar/message-bar.component";
import { LabelledInputComponent } from "./components/labelled-input/labelled-input.component";
import { TableInputComponent } from "./components/labelled-input/table-input.component";
import { InputBoxComponent } from "./components/input-box/input-box.component";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GroupsComponent } from './components/groups/groups.component';
import { VenuesComponent } from "./components/venues/venues.component";
import { VenueEditorComponent } from "./components/venues/venue-editor.component";
import { UniverseEditorComponent } from "./components/venues/universe-editor.component";
import { FixtureOptionsEditorComponent } from "./components/venues/fixture-options-editor.component";
import { FixtureDefinitionsComponent } from './components/fixture-definitions/fixture-definitions.component';
import { FixtureDefinitionEditorComponent } from './components/fixture-definitions/fixture-definition-editor.component';
import { Preview2DComponent } from "./components/preview-2d/preview-2d.component";
import { Preview2DFixtureComponent } from "./components/preview-2d/preview-2d-fixture.component";
import { SACNTransmitterLiveComponent } from "./components/sacn-transmitter-live/sacn-transmitter-live.component";
import { OSCListenerLiveComponent } from "./components/osc-listener-live/osc-listener-live.component";

import { SettingsService } from "./components/settings/settings.service";
import { VenueService } from "./components/venues/venue.service";
import { VenuePresetService } from "./components/venues/venue-preset.service";
import { GroupService } from "./components/groups/group.service";
import { FixtureDefinitionsService } from "./components/fixture-definitions/fixture-definitions.service";
import { OSCListenerService } from "./components/osc-listener-live/osc-listener.service";

declare var jQuery: any;

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,

        SettingsComponent,
        DashboardComponent,
        GroupsComponent,
        VenuesComponent,
        VenueEditorComponent,
        UniverseEditorComponent,
        FixtureOptionsEditorComponent,
        FixtureDefinitionsComponent,
        FixtureDefinitionEditorComponent,
        Preview2DComponent,
        Preview2DFixtureComponent,
        SACNTransmitterLiveComponent,
        OSCListenerLiveComponent,

        MINMAX_DIRECTIVES,
        UniqueValidator,

        NavMenuComponent,
        StatusPanelComponent,
        MessageBarComponent,
        LabelledInputComponent,
        TableInputComponent,
        InputBoxComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        HttpModule,

        ModalModule.forRoot(),
        BootstrapModalModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'sacnTransmitterLive', component: SACNTransmitterLiveComponent },
            { path: 'oscListenerLive', component: OSCListenerLiveComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'groups', component: GroupsComponent },
            { path: 'venues', component: VenuesComponent },
            { path: 'venues/new', component: VenueEditorComponent },
            { path: 'venues/:id', component: VenueEditorComponent },
            { path: 'fixture-definitions', component: FixtureDefinitionsComponent },
            { path: 'fixture-definitions/new', component: FixtureDefinitionEditorComponent },
            { path: 'fixture-definitions/:manufacturer/:model', component: FixtureDefinitionEditorComponent },
            { path: 'preview2d', component: Preview2DComponent },
            { path: '**', redirectTo: 'sets' }
        ])
    ],
    providers: [],
    entryComponents: [FixtureOptionsEditorComponent]
})
export class AppModule
{
}
