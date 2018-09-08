import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenuesComponent } from './venues/venues.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { VenueDiscoveryComponent } from '../venue-discovery/venue-discovery/venue-discovery.component';
import { VenueEditorHomeComponent } from './venue-editor-home/venue-editor-home.component';
import { UniverseEditorComponent } from './universe-editor/universe-editor.component';
import { UnsavedChanges } from '../unsaved-changes';

const venueChildren: Routes = [
	{ path: '', component: VenueEditorHomeComponent },
	{ path: ':universeID', component: UniverseEditorComponent }
];

const routes: Routes = [
	{ path: '', component: VenuesComponent },
	{ path: 'editor/new', component: VenueEditorComponent, canDeactivate: [UnsavedChanges], children: venueChildren },
	{ path: 'editor/:id', component: VenueEditorComponent, canDeactivate: [UnsavedChanges], children: venueChildren }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class VenueRoutingModule { }
