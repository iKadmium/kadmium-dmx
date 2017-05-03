import { Component, OnInit } from '@angular/core';
import { GroupService } from "../group.service";
import { LookService } from "../look.service";
import { Title } from "@angular/platform-browser";
import { NotificationsService } from "../notifications.service";
import { Group } from "../group";
import { Look, ColorLooks, AttributeLooks, MovementLooks } from "../look";
import { StatusCode } from "../status-code.enum";

@Component({
    selector: 'app-fixtures-live',
    templateUrl: './fixtures-live.component.html',
    styleUrls: ['./fixtures-live.component.css'],
    providers: [GroupService, LookService]
})
export class FixturesLiveComponent implements OnInit
{
    groups: Group[];
    colorLooks: Look[];
    movementLooks: Look[];
    attributeLooks: Look[];

    constructor(private groupService: GroupService, private lookService: LookService, private notificationsService: NotificationsService, title: Title)
    {
        title.setTitle("Fixtures Live");
        this.groups = [];
        this.colorLooks = [];
        this.movementLooks = [];
        this.attributeLooks = [];
    }

    ngOnInit(): void
    {
        this.groupService
            .get()
            .then(groups => 
            {
                this.groups = groups;
            })
            .catch(reason => this.notificationsService.add(StatusCode.Error, reason));

        for (let look of ColorLooks.getStockLooks())
        {
            this.colorLooks.push(look);
        }

        for (let look of AttributeLooks.getStockLooks())
        {
            this.attributeLooks.push(look);
        }

        for (let look of MovementLooks.getStockLooks())
        {
            this.movementLooks.push(look);
        }

    }

    async activate(group: Group, look: Look): Promise<void>
    {
        for (let setting of look.attributeLookSettings)
        {
            setting.group = group.name;
        }
        for (let setting of look.colorLookSettings)
        {
            setting.group = group.name;
        }
        try
        {
            await this.lookService.activate(look, 1);
        }
        catch (error)
        {
            this.notificationsService.add(StatusCode.Error, error);
        }
    }

}
