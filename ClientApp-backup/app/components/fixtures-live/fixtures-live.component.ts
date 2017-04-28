import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { GroupService } from "../groups/group.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";

import { MessageBarComponent } from "../status/message-bar/message-bar.component";
import { LookService } from "../look/look.service";
import { Look, LookData } from "../look/look";
import { ColorLooks } from "./colorLooks";
import { AttributeLooks } from "./attributeLooks";
import { MovementLooks } from "./movementLooks";
import { Group } from "../groups/group";

@Component({
    selector: 'fixtures-live',
    template: require('./fixtures-live.component.html'),
    providers: [GroupService, LookService]
})
export class FixturesLiveComponent implements OnInit
{
    groups: Group[];
    colorLooks: Look[];
    movementLooks: Look[];
    attributeLooks: Look[];

    constructor(private groupService: GroupService, private lookService: LookService, private messageBarService: MessageBarService, title: Title)
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
            .catch(reason => this.messageBarService.addError(reason));

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

    activate(group: Group, look: Look): void
    {
        for (let setting of look.attributeLookSettings)
        {
            setting.group = group.name;
        }
        for (let setting of look.colorLookSettings)
        {
            setting.group = group.name;
        }
        this.lookService
            .activate(look, 1)
            .catch(reason => this.messageBarService.addError(reason));
    }
}