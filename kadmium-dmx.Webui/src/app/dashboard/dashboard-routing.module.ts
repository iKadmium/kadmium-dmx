import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardUniverseComponent } from './dashboard-universe/dashboard-universe.component';
import { DashboardFixturesComponent } from './dashboard-fixtures/dashboard-fixtures.component';
import { DashboardFixtureDetailComponent } from './dashboard-fixture-detail/dashboard-fixture-detail.component';
import { VenueDiscoveryComponent } from '../venue-discovery/venue-discovery/venue-discovery.component';
import { DashboardOscListenerMessagesComponent } from './dashboard-osc-listener-messages/dashboard-osc-listener-messages.component';

const routes: Routes = [
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
				}
			]
	},
	{ path: 'oscListener', component: DashboardOscListenerMessagesComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
