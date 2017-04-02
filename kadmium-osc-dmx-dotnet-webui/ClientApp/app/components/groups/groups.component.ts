import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { GroupService } from "./group.service";
import { MessageBarService } from "../status/message-bar/message-bar.service";

import { Group } from "./group";

@Component({
    selector: 'groups',
    template: require('./groups.component.html'),
    providers: [GroupService]
})
export class GroupsComponent
{
    saving: boolean;
    groups: Group[];

    constructor(private groupsService: GroupService, private messageBarService: MessageBarService, title: Title)
    {
        title.setTitle("Groups");
        this.saving = false;
        this.groupsService
            .get()
            .then((value: Group[]) => this.groups = value)
            .catch((reason) => this.messageBarService.addError(reason));
    }

    private add(): void
    {
        let group = new Group("");
        let maxOrder = 0;
        this.groups.forEach(value => 
        {
            if (value.order > maxOrder)
            {
                maxOrder = value.order;
            }
        });
        group.order = maxOrder + 1;
        this.groups.push(group);
    }

    private delete(group: Group): void
    {
        let index = this.groups.indexOf(group);
        this.groups.splice(index, 1);
    }

    private swap(oldIndex: number, newIndex: number): void
    {
        let oldOrder = this.groupsSorted[oldIndex].order;
        let newOrder = this.groupsSorted[newIndex].order;
        this.groupsSorted[oldIndex].order = newOrder;
        this.groupsSorted[newIndex].order = oldOrder;
    }

    private validate(): boolean
    {
        let result = this.groups.every((value: Group) => value.name != "" && value.name != undefined && value.name != null);
        return result;
    }

    private get groupsSorted(): Group[]
    {
        return this.groups.sort((a, b) => a.order - b.order);
    }

    private async save(): Promise<void>
    {
        this.saving = true;
        try
        {
            await this.groupsService.put(this.groups);
            this.messageBarService.add("Success", "Saved successfully")
        }
        catch (reason)
        {
            this.messageBarService.addError(reason);
        }
        finally
        {
            this.saving = false;
        }
    }
}
