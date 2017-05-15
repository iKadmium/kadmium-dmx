import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { VenueService } from "app/venue.service";
import { NotificationsService } from "app/notifications.service";
import { Venue, Universe } from "app/venue";
import { StatusCode } from "app/status-code.enum";

@Component({
    selector: 'app-dashboard-universe-list',
    templateUrl: './dashboard-universe-list.component.html',
    styleUrls: ['./dashboard-universe-list.component.css'],
    providers: [VenueService]
})
export class DashboardUniverseListComponent implements OnInit
{
    @Output() universeSelected = new EventEmitter<number>();
    universes: Universe[];
    selectedUniverse: Universe;

    constructor(private venueService: VenueService, private notificationsService: NotificationsService) 
    {
        this.universes = [];
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            let venue = await this.venueService.getActive();
            this.universes = venue.universes;
            if (this.universes.length > 0)
            {
                this.selectUniverse(this.universes[0]);
            }
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
        }
    }

    selectUniverse(universe: Universe): void
    {
        this.selectedUniverse = universe;
        this.universeSelected.emit(universe.universeID);
    }

}
