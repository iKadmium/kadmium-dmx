import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UniverseEditorComponent } from "../universe-editor/universe-editor.component";
import { FixtureOptionsEditorComponent } from "../fixture-options-editor/fixture-options-editor.component";
import { NotificationsService } from "../notifications.service";
import { StatusCode } from "../status-code.enum";
import { GroupService, VenueService } from "api/services";
import { Group, Venue, Universe } from "api/models";

@Component({
    selector: 'app-venue-editor',
    templateUrl: './venue-editor.component.html',
    styleUrls: ['./venue-editor.component.css'],
    providers: [VenueService, GroupService]
})
export class VenueEditorComponent implements OnInit
{
    @ViewChild("universeEditor") universeEditor: UniverseEditorComponent;
    @ViewChild("fixtureOptionsEditor") fixtureOptionsEditor: FixtureOptionsEditorComponent;

    private venueId: number | null;
    private saving: boolean;
    private groups: Group[];

    public venue: Venue;

    private selectedUniverse: Universe;

    constructor(private route: ActivatedRoute, private venueService: VenueService, private notificationsService: NotificationsService,
        private groupService: GroupService, private router: Router)
    {
        this.saving = false;
    }

    async ngOnInit(): Promise<void>
    {
        this.groups = (await this.groupService.getGroups()).data;
        this.venueId = this.route.snapshot.params['id'];
        if (this.isNewItem())
        {
            this.venue = new Venue();
            let universe = new Universe();
            universe.name = "Default Universe";
            this.venue.universes.push(universe);
            this.selectedUniverse = universe;
        }
        else
        {
            try
            {
                this.venue = (await this.venueService.getVenueById(this.venueId)).data;
                this.selectedUniverse = this.venue.universes.length > 0 ? this.venue.universes[0] : null;
            }
            catch (reason)
            {
                this.notificationsService.add(StatusCode.Error, reason);
            }
        }
    }

    private isNewItem(): boolean
    {
        return this.venueId == null;
    }

    private addUniverse(): void
    {
        let universe = new Universe();
        universe.name = "New Universe";
        let maxNumber = 0;
        this.venue.universes.forEach(value => { if (value.universeID > maxNumber) { maxNumber = value.universeID } });
        universe.universeID = maxNumber + 1;
        this.venue.universes.push(universe);
    }

    private removeUniverse(index: number): void
    {
        let universe = this.venue.universes[index];
        this.venue.universes.splice(index, 1);
        if (this.selectedUniverse == universe)
        {
            this.selectedUniverse = this.venue.universes[index - 1];
        }
    }

    private async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            if (this.isNewItem())
            {
                await this.venueService.postVenue(this.venue);
                this.notificationsService.add(StatusCode.Success, "Successfully added " + this.venue.name);
            }
            else
            {
                await this.venueService.putVenue({ id: this.venue.id, venue: this.venue });
                this.notificationsService.add(StatusCode.Success, "Successfully edited " + this.venue.name);
            }
            this.router.navigate(["../", { relativeTo: this.route }]);
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
        }
        finally
        {
            this.saving = false;
        }
    }

}
