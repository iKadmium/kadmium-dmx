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
            .catch((reason) => this.messageBarService.add("Error", reason));
    }

    private add(): void
    {
        this.groups.push(new Group(""));
    }

    private delete(group: Group): void
    {
        let index = this.groups.indexOf(group);
        this.groups.splice(index, 1);
    }

    private move(group: Group, offset: number): void
    {
        let old_index = this.groups.indexOf(group);
        let new_index = old_index + offset;

        this.groups.splice(new_index, 0, this.groups.splice(old_index, 1)[0]);
    }

    private validate(): boolean
    {
        let result = this.groups.every((value: Group) => value.name != "" && value.name != undefined && value.name != null);
        return result;
    }

    private get groupNames(): string[]
    {
        return this.groups.map((value: Group) => value.name);
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
            this.messageBarService.add("Error", reason);
        }
        finally
        {
            this.saving = false;
        }
    }
}
